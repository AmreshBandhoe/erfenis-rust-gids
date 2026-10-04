import { FormEvent, useState } from "react";
import { createFileRoute, useRouter } from "@tanstack/react-router";
import { Lock, LogOut, Power, ShieldCheck } from "lucide-react";
import { toast } from "sonner";

import {
  getMaintenanceSnapshot,
  loginAdmin,
  logoutAdmin,
  setMaintenanceMode,
} from "@/lib/api/admin.functions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Admin — De Erfeniswijzer" },
      { name: "robots", content: "noindex,nofollow" },
    ],
  }),
  loader: () => getMaintenanceSnapshot(),
  component: AdminPage,
});

function AdminPage() {
  const initial = Route.useLoaderData();
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);

  async function refresh() {
    await router.invalidate();
  }

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);

    try {
      await loginAdmin({ data: { password } });
      setPassword("");
      await refresh();
      toast.success("Ingelogd.");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Inloggen mislukt.");
    } finally {
      setBusy(false);
    }
  }

  async function handleToggle(enabled: boolean) {
    setBusy(true);

    try {
      await setMaintenanceMode({ data: { enabled } });
      await refresh();
      toast.success(enabled ? "Onderhoudsmodus staat aan." : "Onderhoudsmodus staat uit.");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Wijziging mislukt.");
    } finally {
      setBusy(false);
    }
  }

  async function handleLogout() {
    setBusy(true);

    try {
      await logoutAdmin();
      await refresh();
      toast.success("Uitgelogd.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <section className="bg-background px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-xl">
        <div className="rounded-2xl border border-border/70 bg-card p-8 shadow-[var(--shadow-soft)]">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <ShieldCheck className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent-ink">
                Beheer
              </p>
              <h1 className="text-3xl text-primary">Onderhoudsmodus</h1>
            </div>
          </div>

          {!initial.isConfigured && (
            <div className="mt-8 rounded-xl border border-destructive/30 bg-destructive/10 p-4 text-sm leading-relaxed text-destructive">
              Stel eerst <code>ADMIN_PASSWORD</code> in uw <code>.env</code> of hosting secrets in.
            </div>
          )}

          {!initial.isAdmin ? (
            <form onSubmit={handleLogin} className="mt-8 space-y-5">
              <div className="space-y-2">
                <Label htmlFor="admin-password">Wachtwoord</Label>
                <Input
                  id="admin-password"
                  type="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  disabled={busy || !initial.isConfigured}
                />
              </div>
              <Button
                type="submit"
                className="motion-press w-full rounded-full bg-accent text-accent-foreground hover:bg-accent/90"
                disabled={busy || !initial.isConfigured}
              >
                <Lock className="mr-2 h-4 w-4" aria-hidden="true" />
                Inloggen
              </Button>
            </form>
          ) : (
            <div className="mt-8 space-y-6">
              <div className="rounded-xl border border-border/70 bg-background p-5">
                <p className="text-sm font-medium text-muted-foreground">Huidige status</p>
                <p className="mt-2 text-2xl text-primary">
                  {initial.enabled ? "Onderhoudsmodus staat aan" : "Site is openbaar"}
                </p>
                {initial.updatedAt && (
                  <p className="mt-2 text-sm text-muted-foreground">
                    Laatst gewijzigd: {new Date(initial.updatedAt).toLocaleString("nl-NL")}
                  </p>
                )}
              </div>

              <Button
                type="button"
                size="lg"
                className={`motion-press w-full rounded-full ${
                  initial.enabled
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-accent text-accent-foreground hover:bg-accent/90"
                }`}
                disabled={busy}
                onClick={() => handleToggle(!initial.enabled)}
              >
                <Power className="mr-2 h-5 w-5" aria-hidden="true" />
                {initial.enabled ? "Onderhoudsmodus uitzetten" : "Onderhoudsmodus aanzetten"}
              </Button>

              <Button
                type="button"
                variant="ghost"
                className="motion-press w-full rounded-full"
                disabled={busy}
                onClick={handleLogout}
              >
                <LogOut className="mr-2 h-4 w-4" aria-hidden="true" />
                Uitloggen
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
