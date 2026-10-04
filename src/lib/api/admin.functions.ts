import process from "node:process";
import { createServerFn } from "@tanstack/react-start";
import { deleteCookie, getCookie, setCookie } from "@tanstack/react-start/server";
import { z } from "zod";

const SESSION_COOKIE = "erfenis_admin";
const SESSION_MAX_AGE = 60 * 60 * 8;

const loginSchema = z.object({
  password: z.string().min(1),
});

const maintenanceSchema = z.object({
  enabled: z.boolean(),
});

type MaintenanceStatus = {
  enabled: boolean;
  updatedAt: string | null;
};

function getAdminPassword() {
  return process.env.ADMIN_PASSWORD;
}

function getSessionSecret() {
  return process.env.ADMIN_SESSION_SECRET || process.env.ADMIN_PASSWORD || "dev-only-admin-secret";
}

async function getStatusPath() {
  const { join } = await import("node:path");
  return join(process.cwd(), ".data", "maintenance.json");
}

async function sign(value: string) {
  const { createHmac } = await import("node:crypto");
  return createHmac("sha256", getSessionSecret()).update(value).digest("base64url");
}

async function makeSessionValue() {
  const expires = Date.now() + SESSION_MAX_AGE * 1000;
  const payload = `admin.${expires}`;
  return `${payload}.${await sign(payload)}`;
}

async function safeCompare(actual: string, expected: string) {
  const { timingSafeEqual } = await import("node:crypto");
  const actualBuffer = Buffer.from(actual);
  const expectedBuffer = Buffer.from(expected);

  if (actualBuffer.length !== expectedBuffer.length) return false;
  return timingSafeEqual(actualBuffer, expectedBuffer);
}

async function isValidSession(value: string | undefined) {
  if (!value) return false;

  const parts = value.split(".");
  if (parts.length !== 3) return false;

  const [role, expiresText, signature] = parts;
  if (role !== "admin") return false;

  const expires = Number(expiresText);
  if (!Number.isFinite(expires) || expires < Date.now()) return false;

  const payload = `${role}.${expiresText}`;
  return safeCompare(signature, await sign(payload));
}

async function requireAdmin() {
  if (!(await isValidSession(getCookie(SESSION_COOKIE)))) {
    throw new Error("Niet ingelogd.");
  }
}

async function readMaintenanceStatus(): Promise<MaintenanceStatus> {
  try {
    const { readFile } = await import("node:fs/promises");
    const raw = await readFile(await getStatusPath(), "utf8");
    const parsed = JSON.parse(raw) as Partial<MaintenanceStatus>;
    return {
      enabled: parsed.enabled === true,
      updatedAt: typeof parsed.updatedAt === "string" ? parsed.updatedAt : null,
    };
  } catch {
    return { enabled: false, updatedAt: null };
  }
}

async function writeMaintenanceStatus(status: MaintenanceStatus) {
  const { mkdir, writeFile } = await import("node:fs/promises");
  const { dirname } = await import("node:path");
  const statusPath = await getStatusPath();
  await mkdir(dirname(statusPath), { recursive: true });
  await writeFile(statusPath, `${JSON.stringify(status, null, 2)}\n`, "utf8");
}

export const getMaintenanceSnapshot = createServerFn({ method: "GET" }).handler(async () => {
  const status = await readMaintenanceStatus();
  return {
    ...status,
    isAdmin: await isValidSession(getCookie(SESSION_COOKIE)),
    isConfigured: Boolean(getAdminPassword()),
  };
});

export const loginAdmin = createServerFn({ method: "POST" })
  .inputValidator(loginSchema)
  .handler(async ({ data }) => {
    const password = getAdminPassword();
    if (!password) {
      throw new Error("ADMIN_PASSWORD is nog niet ingesteld.");
    }

    if (!(await safeCompare(data.password, password))) {
      throw new Error("Onjuist wachtwoord.");
    }

    setCookie(SESSION_COOKIE, await makeSessionValue(), {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      maxAge: SESSION_MAX_AGE,
      path: "/",
    });

    return { ok: true as const };
  });

export const logoutAdmin = createServerFn({ method: "POST" }).handler(async () => {
  deleteCookie(SESSION_COOKIE, { path: "/" });
  return { ok: true as const };
});

export const setMaintenanceMode = createServerFn({ method: "POST" })
  .inputValidator(maintenanceSchema)
  .handler(async ({ data }) => {
    await requireAdmin();

    const status: MaintenanceStatus = {
      enabled: data.enabled,
      updatedAt: new Date().toISOString(),
    };
    await writeMaintenanceStatus(status);

    return status;
  });
