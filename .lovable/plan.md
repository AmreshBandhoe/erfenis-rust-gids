# De Erfeniswijzer — Huisstijl, navigatie & lay-out

Eerst de fundering: kleuren, typografie, sticky header, footer en consistente placeholder-pagina's. De homepage vullen we later samen in.

## Huisstijl (design tokens)

Strikt kleurenpalet in `src/styles.css` (oklch):

- Hoofdkleur diep teal/groen `#0A3D3A` → `primary`
- Warm goud `#D4B77E` → `accent`
- Lichte crème achtergrond `#F9F7F2` → `background`
- Donkere tekst `#1F2A2A` → `foreground`
- Witte/lichte tekst `#F8F6F2` → `primary-foreground`

Verdere uitstraling: veel witruimte, zachte ronde hoeken (ruime radius), subtiele zachte schaduwen, rustige overgangen. Warm, vertrouwd, professioneel en geruststellend.

## Typografie

- Koppen: **Cormorant Garamond** (klassiek & verfijnd, sluit aan op het logo)
- Body: **Karla**
- Geladen via `<link>` in `src/routes/__root.tsx`, gekoppeld als `--font-display` en `--font-body` in `@theme`.

## Logo

Het geüploade logo wordt als Lovable-asset toegevoegd en gebruikt in header en footer. Omdat het logo een donkergroene achtergrond heeft, gebruik ik in de header een nette weergave (logo op donkere balk of bijgesneden variant) zodat het mooi op de crème achtergrond staat. In de footer (donkere teal achtergrond) past het logo direct.

## Layout & componenten

Gedeelde structuur in `src/routes/__root.tsx` (Header + `<Outlet />` + Footer), zodat elke pagina consistent is.

**Sticky header**
- Logo links
- Navigatie: Home · Hulp bij erfenis · Bij leven regelen · Kennisbank · Over ons · Contact
- Actieve link gemarkeerd in goud
- Subtiele goud accent-knop "Contact" / "Plan een gesprek"
- Responsief: mobiel hamburgermenu (Sheet)

**Footer** (donkere teal)
- Logo + korte missie-zin
- Kolom met navigatielinks
- Kolom met contactgegevens (nette placeholders, later aan te passen): telefoon, e-mail (info@erfeniswijzer.nl), plaats, KvK
- Slogan "Uw gids bij nalatenschap en erfenis" + copyright

## Pagina's (routes)

Voor elke navigatie-item een eigen route met eigen SEO `head()` (titel + beschrijving) en een nette placeholder: consistente pagina-kop (titel + korte intro-tekst passend bij het onderwerp) klaar om later in te vullen.

```text
src/routes/
  index.tsx                 -> /  (Home — nu nette placeholder, later samen invullen)
  hulp-bij-erfenis.tsx      -> /hulp-bij-erfenis
  bij-leven-regelen.tsx     -> /bij-leven-regelen
  kennisbank.tsx            -> /kennisbank
  over-ons.tsx              -> /over-ons
  contact.tsx               -> /contact
```

Een herbruikbaar `PageHeader`-component voor consistente pagina-koppen.

## SEO

Per pagina uniek `title` (<60 tekens) en `description` (<160 tekens), Nederlandse `lang="nl"`, één H1 per pagina, semantische HTML.

## Technische details

- Tokens in `src/styles.css` via `@theme inline` + `:root` (oklch), geen custom kleurklassen in componenten.
- Header/Footer als componenten in `src/components/`.
- Fonts via `<link>` in root head (geen CSS `@import` URL).
- Logo via `lovable-assets` pointer in `src/assets/`.
- shadcn `Sheet` voor mobiel menu, `Button` met goud-variant.

Na akkoord bouw ik dit en wacht ik daarna op jouw instructies voor de homepage.