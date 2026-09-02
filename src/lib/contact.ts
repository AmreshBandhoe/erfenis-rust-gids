/**
 * Contactgegevens op één plek.
 *
 * Het telefoonnummer stond hardgecodeerd op twee plekken (de footer en de
 * contactpagina) en was in beide gevallen een plaatshouder. Zolang PHONE_IS_PLACEHOLDER
 * true is, verbergt de site elke bel-knop: een nummer dat niet overgaat is voor een
 * nabestaande erger dan geen nummer.
 *
 * Zet bij oplevering het echte nummer hieronder en haal PHONE_IS_PLACEHOLDER op false.
 */
export const PHONE_DISPLAY = "085 - 000 00 00";
export const PHONE_HREF = "tel:+31850000000";
export const PHONE_IS_PLACEHOLDER = true;

export const EMAIL = "info@erfeniswijzer.nl";
export const EMAIL_HREF = `mailto:${EMAIL}`;

/**
 * De onderwerpen van het contactformulier — één bron voor de radioknoppen, het
 * schema in het formulier én het schema op de server.
 *
 * Dit stond eerder op drie plekken los van elkaar en liep uit de pas: de knoppen
 * stuurden "hulp-na-overlijden" en "anders", terwijl beide schema's
 * "hulp-bij-erfenis" en "algemeen" verwachtten. Wie een van die twee knoppen
 * aanvinkte, kreeg de ruwe Engelse Zod-melding in beeld en kon niet versturen.
 *
 * De labels staan in translations.ts; die lijst is via `satisfies` aan dit type
 * gekoppeld, zodat een afwijkende waarde nu een compileerfout geeft.
 */
export const CONTACT_SUBJECTS = ["hulp-na-overlijden", "bij-leven-regelen", "anders"] as const;

export type ContactSubject = (typeof CONTACT_SUBJECTS)[number];

/** Leesbare omschrijving per onderwerp, voor in de mail naar kantoor. */
export const CONTACT_SUBJECT_LABELS: Record<ContactSubject, string> = {
  "hulp-na-overlijden": "Hulp na een overlijden",
  "bij-leven-regelen": "Bij leven regelen",
  anders: "Algemene vraag",
};
