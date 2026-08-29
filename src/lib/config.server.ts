import process from "node:process";

// Server-only config. The .server.ts suffix prevents Vite from bundling
// this file into the client — values here never reach the browser.
//
// On Cloudflare Workers, env binds at REQUEST time. Module-scope reads
// (e.g. `const x = process.env.X`) resolve to undefined — always read
// process.env INSIDE a function or handler.
//
// When to use which env-access pattern:
//   - .server.ts module (this file): server-only helpers reused across
//     handlers. Wrap reads in a function so they run per-request.
//   - inline process.env inside a createServerFn handler: one-off reads
//     not reused elsewhere.
//   - import.meta.env.VITE_FOO: PUBLIC config readable from both client
//     and server (analytics IDs, public URLs). Define in .env with the
//     VITE_ prefix. Never put secrets here — they ship to the browser.

export function getServerConfig() {
  return {
    nodeEnv: process.env.NODE_ENV,
    // Add server-only values here, e.g.:
    //   databaseUrl: process.env.DATABASE_URL,
    //   stripeSecretKey: process.env.STRIPE_SECRET_KEY,
  };
}

/**
 * Resend-instellingen voor de formulieren.
 *
 * RESEND_FROM moet een adres zijn op een domein dat in Resend geverifieerd is,
 * anders weigert de API de verzending. Zolang erfeniswijzer.nl daar nog niet
 * staat, werkt "onboarding@resend.dev" om te testen — dat adres mag alleen
 * mailen naar het e-mailadres van de Resend-account zelf.
 *
 * Alle waarden worden per aanroep gelezen: op Cloudflare Workers bindt env pas
 * bij het request, dus een uitlezing op moduleniveau geeft undefined.
 */
export function getMailConfig() {
  return {
    apiKey: process.env.RESEND_API_KEY,
    from: process.env.RESEND_FROM,
    /** Waar de aanvragen binnenkomen. */
    to: process.env.CONTACT_TO_EMAIL,
    /** Optioneel: publieke URL van de gids-PDF, meegestuurd in de bevestigingsmail. */
    guideUrl: process.env.GUIDE_DOWNLOAD_URL,
  };
}
