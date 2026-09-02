import { getMailConfig } from "./config.server";

/**
 * Dunne wrapper om de Resend-API.
 *
 * Bewust met fetch in plaats van de resend-SDK: het is één POST, de site draait
 * op Cloudflare Workers en zo komt er geen dependency bij die zich per runtime
 * anders gedraagt.
 */

const RESEND_ENDPOINT = "https://api.resend.com/emails";

export interface MailInput {
  to: string;
  subject: string;
  html: string;
  text: string;
  replyTo?: string;
}

export class MailNotConfiguredError extends Error {
  constructor(missing: string[]) {
    super(`Ontbrekende mailconfiguratie: ${missing.join(", ")}`);
    this.name = "MailNotConfiguredError";
  }
}

/**
 * Verstuurt één bericht. Gooit bij een fout, zodat de aanroeper kan beslissen of
 * dat de hele inzending moet laten mislukken of niet.
 */
export async function sendMail(input: MailInput): Promise<void> {
  const { apiKey, from } = getMailConfig();

  // Onderscheid tussen "niet gezet" en "gezet maar leeg": `wrangler secret list`
  // toont alleen namen, dus een secret met een lege waarde ziet er daar precies
  // hetzelfde uit als een goed gevulde. Zonder dit onderscheid is dat niet te zien.
  const describe = (name: string, value: string | undefined) =>
    value === undefined ? `${name} (niet gezet)` : `${name} (gezet maar leeg)`;

  const missing: string[] = [];
  if (!apiKey) missing.push(describe("RESEND_API_KEY", apiKey));
  if (!from) missing.push(describe("RESEND_FROM", from));
  if (missing.length) throw new MailNotConfiguredError(missing);

  const response = await fetch(RESEND_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [input.to],
      subject: input.subject,
      html: input.html,
      text: input.text,
      ...(input.replyTo ? { reply_to: input.replyTo } : {}),
    }),
  });

  if (!response.ok) {
    // Resend antwoordt met JSON, maar niet altijd: bij sommige fouten komt er een
    // leeg body terug. Dan zegt "Resend gaf 400:" niets, dus nemen we de afzender
    // erbij — een afgekeurd of verkeerd genoteerd from-adres is veruit de meest
    // voorkomende oorzaak van een 400. De API-sleutel blijft hier uiteraard buiten.
    let detail = "";
    try {
      detail = await response.text();
    } catch {
      detail = "(antwoord niet leesbaar)";
    }
    if (!detail.trim()) detail = "(leeg antwoord)";

    const message = `Resend gaf ${response.status}: ${detail.slice(0, 300)} — from=${JSON.stringify(from)}`;
    console.error("[mail]", message);
    throw new Error(message);
  }
}

/** Voorkomt dat ingevoerde tekst als HTML in de mail terechtkomt. */
export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** Eenvoudige, merkloze opmaak — mailclients zijn grillig met CSS. */
export function wrapHtml(title: string, bodyHtml: string): string {
  return `<!doctype html>
<html lang="nl">
  <body style="margin:0;padding:24px;background:#f9f7f2;font-family:Georgia,'Times New Roman',serif;color:#1f2a2a;">
    <div style="max-width:560px;margin:0 auto;background:#ffffff;border:1px solid #e7e2d8;border-radius:12px;padding:28px;">
      <h1 style="margin:0 0 20px;font-size:20px;color:#0a3d3a;">${escapeHtml(title)}</h1>
      ${bodyHtml}
      <p style="margin:28px 0 0;padding-top:16px;border-top:1px solid #e7e2d8;font-size:12px;color:#6b7280;">
        De Erfeniswijzer — uw gids bij nalatenschap en erfenis
      </p>
    </div>
  </body>
</html>`;
}
