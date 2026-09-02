# Handover Report — De Erfeniswijzer

## 1. Project Overview

"De Erfeniswijzer" ("The Legacy Guide") is a Dutch website about inheritance and estate planning ("nalatenschap en erfenis").

De site is uitsluitend Nederlandstalig. Er is ooit een aparte Engelse build en deployment geweest; die is op 29-08-2026 verwijderd (zie sectie 8).

## 2. Tech Stack

- **Framework**: [TanStack Start](https://tanstack.com/start) — a full-stack/SSR meta-framework built on Vite and Nitro (comparable to Next.js or Remix). Confirmed by the dependencies `@tanstack/react-start`, `@tanstack/react-router`, and `@tanstack/router-plugin` in `package.json`.
- **Rendering**: Server-side rendering (SSR) via Nitro, targeting Cloudflare Workers. The build produces a server bundle (`dist/server/server.js`) in addition to static client assets — this is not a static-only site.
- **UI library**: React 19.2.0 / React DOM 19.2.0.
- **Styling**: Tailwind CSS v4 (via `@tailwindcss/vite`), with `class-variance-authority`, `clsx`, and `tailwind-merge` for class composition.
- **UI components**: shadcn/ui-style components in `src/components/ui/` (~46 files), built on top of Radix UI primitives (`@radix-ui/react-*` packages) — accordion, dialog, dropdown-menu, tabs, tooltip, select, popover, navigation-menu, etc.
- **Forms/validation**: `react-hook-form`, `@hookform/resolvers`, `zod`.
- **Other notable UI dependencies**: `lucide-react` (icons), `sonner` (toast notifications), `cmdk` (command palette), `embla-carousel-react` (carousels), `vaul` (drawers), `recharts` (charts), `react-day-picker`, `date-fns`.
- **Language**: TypeScript, `tsconfig.json` set to `target: ES2022`, `module: ESNext`, bundler module resolution, strict mode enabled, with a `@/*` path alias mapped to `./src/*`.
- **Build tool**: Vite 8.0.16, using a shared preset package `@lovable.dev/vite-tanstack-config` that wraps the TanStack Start Vite plugin, `@vitejs/plugin-react`, Tailwind, `vite-tsconfig-paths`, Nitro (Cloudflare target), and some dev-only tooling.
- **Origin/tooling note**: This project was built and edited using [Lovable.dev](https://lovable.dev), an AI-assisted app builder. This is evidenced by the `@lovable.dev/vite-tanstack-config` dependency, a `.lovable/plan.md` file containing Lovable's internal build/design plan, and a `src/lib/lovable-error-reporting.ts` file that reports errors to Lovable's editor iframe (a no-op outside of the Lovable environment).
- **Node.js version**: No `.nvmrc` file and no `engines` field are defined in `package.json`. The presence of `"@types/node": "^22.16.5"` in devDependencies implies Node 22 was used during development, but this is not explicitly pinned anywhere in the repo.

## 3. Repository Structure

```
erfenis-rust-gids/
├── src/
│   ├── routes/              # TanStack Router file-based routes (pages)
│   │   ├── __root.tsx       # root layout: <html>, <head>, Header/Footer, providers
│   │   ├── index.tsx        # homepage
│   │   ├── hulp-bij-erfenis.tsx
│   │   ├── bij-leven-regelen.tsx
│   │   ├── kennisbank.tsx   # knowledge base / articles listing
│   │   ├── gratis-gids.tsx  # "free guide" page
│   │   ├── contact.tsx
│   │   ├── over-ons.tsx     # about us
│   │   └── bedankt.tsx      # thank-you page
│   ├── components/          # page-level components (Header, Footer, PageHeader, ContentHero, CtaSection, Reveal)
│   │   └── ui/               # shadcn/ui-style primitive components (Radix UI wrappers)
│   ├── lib/
│   │   ├── i18n.tsx          # language context/provider (alleen NL)
│   │   ├── translations.ts   # alle teksten van de site (alleen NL)
│   │   ├── config.server.ts  # server-only env accessor
│   │   ├── error-capture.ts, error-page.ts, lovable-error-reporting.ts  # SSR error handling / Lovable telemetry hook
│   │   ├── utils.ts
│   │   └── api/example.functions.ts  # boilerplate TanStack Start server-function example
│   ├── assets/                # images (hero, team, testimonials, logo), imported directly by components
│   ├── router.tsx, routeTree.gen.ts  # TanStack Router setup (routeTree.gen.ts is auto-generated)
│   ├── server.ts              # Cloudflare Worker fetch handler wrapping the TanStack Start SSR entry
│   ├── start.ts                # TanStack Start app entry
│   └── styles.css              # global Tailwind CSS
├── dist/                       # build output (gitignored): dist/client (static assets + _worker.js), dist/server (server.js)
├── wrangler.toml                # Cloudflare deployment config for the NL site
├── vite.config.ts
├── components.json             # shadcn/ui config
├── tsconfig.json, eslint.config.js, .prettierrc
├── bun.lock, package-lock.json, bunfig.toml
└── .lovable/, .tanstack/        # Lovable.dev platform metadata / TanStack tooling
```

There is no `public/` directory — all images live under `src/assets/` and are imported as ES modules directly in components, so Vite bundles and hashes them at build time.

## 4. Build & Run Commands

Scripts defined in `package.json`:

```json
"scripts": {
  "dev": "vite dev",
  "build": "vite build",
  "build:pages": "vite build && node -e \"require('fs').copyFileSync('dist/server/server.js','dist/client/_worker.js')\"",
  "build:dev": "vite build --mode development",
  "preview": "vite preview",
  "lint": "eslint .",
  "format": "prettier --write ."
}
```

- **`dev`** — starts the Vite dev server with TanStack Start SSR and hot module reloading, for local development.
- **`build`** — production build. Produces `dist/client` (static assets) and `dist/server/server.js` (SSR server bundle, built for the Cloudflare Workers Nitro target).
- **`build:pages`** — runs `vite build`, then copies `dist/server/server.js` to `dist/client/_worker.js`. Cloudflare Pages auto-detects `_worker.js` in the output directory as the SSR handler.
- **`build:dev`** — builds using Vite's "development" mode (unminified) instead of the production build path.
- **`preview`** — serves the built output locally via `vite preview`.
- **`lint`** — runs ESLint across the project (config in `eslint.config.js`, using `typescript-eslint`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`, and Prettier integration).
- **`format`** — runs Prettier `--write` across the repo (rules in `.prettierrc`, exclusions in `.prettierignore`).

## 5. Deployment Configuration

De site deployt naar **Cloudflare Workers** als één deployment (`erfenis-rust-gids`).

`wrangler.toml` (NL site):
```toml
name = "erfenis-rust-gids"
main = "dist/server/server.js"
compatibility_date = "2024-09-23"
compatibility_flags = ["nodejs_compat"]

[assets]
directory = "./dist/client"
```

Notes on this configuration:

- `main = "dist/server/server.js"` is the Worker entry point — the SSR handler. This is used when deploying directly as a Worker via `wrangler deploy`. The `_worker.js` copy step in the npm scripts is a separate convention specifically for Cloudflare Pages' auto-detection of SSR handlers.
- `compatibility_flags = ["nodejs_compat"]` is required because the Nitro/TanStack Start server bundle relies on Node.js API polyfills.
- The `[assets]` block serves static assets from `./dist/client` via Cloudflare Workers Static Assets.
- The config does not define `routes`, a custom domain, a `zone_id`, or any KV/D1/R2 bindings — domain/route attachment is not present in these config files and would need to be configured separately (e.g. in the Cloudflare dashboard).
- No CI/CD pipeline exists in the repository (no `.github/workflows/` directory, no `netlify.toml`, no `vercel.json`, no `Dockerfile`). Deployment is done manually (e.g. `wrangler deploy`) or via a Cloudflare Pages Git integration configured outside this repository.

## 6. Environment Variables

| Variable | Type | Used in | Purpose |
|---|---|---|---|
| `RESEND_API_KEY` | Server runtime (`process.env`) | `src/lib/config.server.ts` → `src/lib/mail.server.ts` | API-sleutel van Resend. Zonder deze waarde weigeren beide formulieren te versturen. **Secret.** |
| `RESEND_FROM` | Server runtime (`process.env`) | idem | Afzender van de formuliermails. Moet op een in Resend geverifieerd domein staan, anders weigert de API elke verzending. **Secret.** |
| `CONTACT_TO_EMAIL` | Server runtime (`process.env`) | idem | Postbus waar de inzendingen binnenkomen. **Secret.** |
| `GUIDE_DOWNLOAD_URL` | Server runtime (`process.env`) | `src/lib/api/forms.functions.ts` | Optioneel en publiek. Publieke URL van de gids-PDF; staat die leeg, dan meldt de bevestigingsmail dat de gids persoonlijk wordt nagestuurd in plaats van een dode downloadknop te tonen. |
| `NODE_ENV` | Server runtime (`process.env`) | `src/lib/config.server.ts` | Read via a `getServerConfig()` helper; not referenced elsewhere in the codebase currently. |

`.env.example` staat in de repo als sjabloon; kopieer die naar `.env` voor lokaal werk (`.env` is gitignored). Bij deploy horen de drie secrets niet in `.env` maar in Cloudflare:

```
npx wrangler secret put RESEND_API_KEY
npx wrangler secret put RESEND_FROM
npx wrangler secret put CONTACT_TO_EMAIL
```

Secrets zijn per worker; ze staan op `erfenis-rust-gids`. `src/lib/config.server.ts` bevat daarnaast nog uitgecommentarieerde placeholders (`databaseUrl`, `stripeSecretKey`) als voorbeeldpatroon; er is geen database- of Stripe-koppeling.

## 7. Third-Party Services & External Resources

- **Contact form** (`src/routes/contact.tsx`): the form's submit handler shows a toast notification (via `sonner`) and navigates the user to `/bedankt`. It does not call `fetch()` or any API, and does not use any email-sending service (no EmailJS, Formspree, or Cloudflare email binding). No form data is currently sent or stored anywhere.
- **Map**: the contact page embeds a static OpenStreetMap iframe (`https://www.openstreetmap.org/export/embed.html?bbox=...`) showing a general Netherlands view. No API key is required, and the embedded location is not a specific pinned business address.
- **Fonts**: loaded from the Google Fonts CDN (`fonts.googleapis.com` / `fonts.gstatic.com`), declared as `<link>` tags with `preconnect` hints in `src/routes/__root.tsx`. Font families used: Cormorant Garamond and Karla.
- **Analytics**: none found in the codebase (no Google Analytics, Plausible, Hotjar, or similar).
- **Chat widgets**: none found.
- **Social preview image**: the `og:image` / `twitter:image` meta tags in `src/routes/__root.tsx` point to a Lovable.dev-hosted Cloudflare R2 URL (`https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/...`).
- **Canonical URLs**: `src/routes/contact.tsx` and `src/routes/gratis-gids.tsx` set canonical URLs pointing to `https://erfenis-rust-gids.lovable.app/...` (the Lovable.dev preview domain).

## 8. Internationalization (i18n)

The NL/EN language handling is implemented directly in application code, not via a library (no i18next, no react-intl) and not via a CMS:

- `src/lib/translations.ts` exporteert één object met alle teksten van de site: navigatie, footer, per-pagina copy en de kennisbank-artikelen. Alleen Nederlands; het type `Lang` heeft nog maar één waarde (`"nl"`).
- `src/lib/i18n.tsx` definieert een `LanguageProvider` (React Context) die `useT()` en `useLang()` (`{ lang, setLang, t }`) aanbiedt. De taalwissel is vervallen: `lang` staat vast op `"nl"` en `setLang` is een lege functie. De provider blijft bestaan omdat alle paginas `useT()` gebruiken.
- The language toggle button is in `src/components/Header.tsx`; clicking it calls `setLang()` and persists the choice to `localStorage`.
- De site is Nederlandstalig. De EN-variant is vervallen: `i18n.tsx` staat vast op `"nl"`, `setLang` doet niets meer en `translations.ts` bevat alleen nog Nederlands. De losse EN-build en -deployconfig zijn op 29-08-2026 verwijderd.
- `src/routes/__root.tsx` sets `<html lang="nl">` in the root document shell regardless of which build or selected language is active.

## 9. Static Assets & Content

- All images are stored under `src/assets/` (hero images, team photos, testimonials, and the logo `erfeniswijzer-logo.jpeg`) and imported directly as ES modules in route/component files (e.g. `import heroImg from "@/assets/kennisbank-hero.jpg"`). Vite bundles, hashes, and optimizes these into `dist/client/assets/` at build time.
- There is no `public/` directory, so there is no separate static-file-serving convention outside of Vite's asset pipeline.
- There is no CMS, database, or external content API. All page content (navigation labels, headings, body copy, knowledge-base articles, testimonials, CTAs) is hardcoded either directly in route components (`src/routes/*.tsx`) or centrally in `src/lib/translations.ts`. Content changes require a code change and redeploy.
- `src/lib/api/example.functions.ts` is a boilerplate TanStack Start server-function example and is not an active content source.

## 10. Package Manager

Both `package-lock.json` and `bun.lock` are present and tracked in git, alongside a `bunfig.toml` (which configures a 24-hour supply-chain install guard, with explicit excludes for `@lovable.dev/*` packages). No `packageManager` field is set in `package.json`.

## 11. Git Repository Info

- Remote origin: `https://github.com/AmreshBandhoe/erfenis-rust-gids.git`
- Branches: only `main` exists, both locally and on the remote.
- No `README.md` exists at the repository root. The only markdown documentation present (besides this file) is `src/routes/README.md` (a short note on TanStack Start's file-based routing conventions) and `.lovable/plan.md` (Lovable's internal build/design plan, containing design-system notes such as colors and fonts).
