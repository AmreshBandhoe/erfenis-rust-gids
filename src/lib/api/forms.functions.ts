import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

import { CONTACT_SUBJECTS, CONTACT_SUBJECT_LABELS } from "../contact";
import { getMailConfig } from "../config.server";
import { escapeHtml, sendMail, wrapHtml } from "../mail.server";

/**
 * De formulieren van de site. Beide deden hiervoor niets: onSubmit toonde een
 * toast en navigeerde door, waardoor elke aanvraag verloren ging.
 *
 * De schema's hier staan los van die in de componenten. Die laatste sturen de
 * foutmeldingen in het formulier aan en zijn door de bezoeker te omzeilen; deze
 * bewaken wat er daadwerkelijk de mail in gaat.
 */

const contactSchema = z.object({
  naam: z.string().trim().min(2).max(100),
  telefoon: z.string().trim().min(6).max(20),
  email: z.string().trim().email().max(255),
  onderwerp: z.enum(CONTACT_SUBJECTS),
  bericht: z.string().trim().min(10).max(1500),
});

const guideSchema = z.object({
  naam: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(255),
});

function row(label: string, value: string): string {
  return `<p style="margin:0 0 12px;font-size:15px;line-height:1.6;">
    <strong style="color:#0a3d3a;">${escapeHtml(label)}:</strong><br />${escapeHtml(value)}
  </p>`;
}

/**
 * De bevestiging naar de bezoeker mag nooit de aanvraag laten mislukken: als die
 * bounct is het bericht bij het kantoor al binnen en zou een foutmelding de
 * bezoeker onterecht laten denken dat er niets is aangekomen.
 */
async function sendQuietly(task: Promise<void>, label: string): Promise<void> {
  try {
    await task;
  } catch (error) {
    console.error(`[forms] ${label} kon niet worden verzonden:`, error);
  }
}

export const sendContactMessage = createServerFn({ method: "POST" })
  .validator(contactSchema)
  .handler(async ({ data }) => {
    const { to } = getMailConfig();
    if (!to) throw new Error("Ontbrekende mailconfiguratie: CONTACT_TO_EMAIL");

    const onderwerp = CONTACT_SUBJECT_LABELS[data.onderwerp];

    // 1. Naar kantoor. reply_to staat op de bezoeker, zodat "Beantwoorden" in de
    //    mailclient meteen naar de juiste persoon gaat.
    await sendMail({
      to,
      replyTo: data.email,
      subject: `Contactformulier: ${onderwerp} — ${data.naam}`,
      text: [
        `Naam: ${data.naam}`,
        `E-mail: ${data.email}`,
        `Telefoon: ${data.telefoon}`,
        `Onderwerp: ${onderwerp}`,
        "",
        data.bericht,
      ].join("\n"),
      html: wrapHtml(
        "Nieuwe aanvraag via het contactformulier",
        [
          row("Naam", data.naam),
          row("E-mail", data.email),
          row("Telefoon", data.telefoon),
          row("Onderwerp", onderwerp),
          `<p style="margin:20px 0 8px;"><strong style="color:#0a3d3a;">Bericht:</strong></p>
           <p style="margin:0;white-space:pre-wrap;font-size:15px;line-height:1.6;">${escapeHtml(data.bericht)}</p>`,
        ].join(""),
      ),
    });

    // 2. Bevestiging naar de bezoeker.
    await sendQuietly(
      sendMail({
        to: data.email,
        replyTo: to,
        subject: "Wij hebben uw bericht ontvangen — De Erfeniswijzer",
        text: `Beste ${data.naam},\n\nDank voor uw bericht. Wij nemen zo snel mogelijk contact met u op, meestal binnen één werkdag.\n\nTer bevestiging, dit gaf u door:\n\n${data.bericht}\n\nMet vriendelijke groet,\nDe Erfeniswijzer`,
        html: wrapHtml(
          "Wij hebben uw bericht ontvangen",
          `<p style="margin:0 0 14px;font-size:15px;line-height:1.6;">Beste ${escapeHtml(data.naam)},</p>
           <p style="margin:0 0 14px;font-size:15px;line-height:1.6;">Dank voor uw bericht. Wij nemen zo snel mogelijk contact met u op, meestal binnen één werkdag.</p>
           <p style="margin:0 0 8px;font-size:15px;line-height:1.6;">Ter bevestiging, dit gaf u aan ons door:</p>
           <p style="margin:0;padding:14px;background:#f4f1ea;border-radius:8px;white-space:pre-wrap;font-size:15px;line-height:1.6;">${escapeHtml(data.bericht)}</p>`,
        ),
      }),
      "bevestiging contactformulier",
    );

    return { ok: true as const };
  });

export const sendGuideRequest = createServerFn({ method: "POST" })
  .validator(guideSchema)
  .handler(async ({ data }) => {
    const { to, guideUrl } = getMailConfig();
    if (!to) throw new Error("Ontbrekende mailconfiguratie: CONTACT_TO_EMAIL");

    await sendMail({
      to,
      replyTo: data.email,
      subject: `Gids aangevraagd — ${data.naam}`,
      text: `Naam: ${data.naam}\nE-mail: ${data.email}\n\nAangevraagd via het formulier op /gratis-gids.`,
      html: wrapHtml(
        "Nieuwe aanvraag voor de gratis gids",
        [
          row("Naam", data.naam),
          row("E-mail", data.email),
          `<p style="margin:20px 0 0;font-size:14px;color:#6b7280;">Aangevraagd via het formulier op /gratis-gids.</p>`,
        ].join(""),
      ),
    });

    // Zonder GUIDE_DOWNLOAD_URL is er niets om te sturen: de gids bestaat nog
    // niet als bestand. Dan krijgt de bezoeker een bericht dat klopt in plaats
    // van een mail met een dode link.
    const linkBlock = guideUrl
      ? `<p style="margin:20px 0 0;"><a href="${escapeHtml(guideUrl)}" style="display:inline-block;padding:12px 22px;background:#d4b77e;color:#1f2a2a;border-radius:999px;text-decoration:none;font-weight:600;">Download de gids</a></p>`
      : `<p style="margin:0 0 14px;font-size:15px;line-height:1.6;">Wij sturen u de gids zo snel mogelijk persoonlijk toe.</p>`;

    await sendQuietly(
      sendMail({
        to: data.email,
        replyTo: to,
        subject: "Uw Erfeniswijzer Gids — De Erfeniswijzer",
        text: guideUrl
          ? `Beste ${data.naam},\n\nDank voor uw aanvraag. U kunt de gids hier downloaden:\n${guideUrl}\n\nMet vriendelijke groet,\nDe Erfeniswijzer`
          : `Beste ${data.naam},\n\nDank voor uw aanvraag. Wij sturen u de gids zo snel mogelijk persoonlijk toe.\n\nMet vriendelijke groet,\nDe Erfeniswijzer`,
        html: wrapHtml(
          "Uw Erfeniswijzer Gids",
          `<p style="margin:0 0 14px;font-size:15px;line-height:1.6;">Beste ${escapeHtml(data.naam)},</p>
           <p style="margin:0 0 14px;font-size:15px;line-height:1.6;">Dank voor uw aanvraag.</p>
           ${linkBlock}`,
        ),
      }),
      "gids-mail naar bezoeker",
    );

    return { ok: true as const };
  });
