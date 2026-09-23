/**
 * Eenmalig: teamportretten vierkant bijsnijden, schalen en als JPEG wegschrijven.
 *
 * Aanleiding: de aangeleverde portretten lopen van 285 tot 556 pixels uiteen en twee
 * ervan zijn PNG's van 173 en 317 KB. Op de oude opmaak werden ze op ~350px getoond,
 * dus op een retinascherm fors opgeblazen. De nieuwe sectie toont ze klein, en deze
 * bestanden passen daarbij.
 *
 * Draaien met:  node scripts/optimize-portraits.mjs
 *
 * De bronbestanden blijven staan; de uitvoer krijgt eigen namen (-feature / -sm),
 * zodat er niets onomkeerbaar wordt overschreven.
 */

import { readFile, writeFile, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import sharp from "sharp";

const assets = join(dirname(fileURLToPath(import.meta.url)), "..", "src", "assets");

/** Weergavemaat × 2 voor retina. Zainuls bron haalt 560 niet; zie NOOIT OPSCHALEN. */
const FEATURE = 560;
const SMALL = 256;
const HERO = 1600;
const QUALITY = 82;

/**
 * Bronnen die niet in de repo staan. De hero-afbeelding is als PNG bijna 2 MB;
 * die committen we niet, alleen de JPEG die eruit komt. Staat het bestand er niet,
 * dan slaat het script die regel over in plaats van te struikelen.
 */
const EXTERNAL = join(process.env.USERPROFILE ?? process.env.HOME ?? "", "Pictures");

const portraits = [
  { src: "team-zainul-habieb.jpg", out: "team-zainul-habieb-feature.jpg", size: FEATURE },
  {
    src: "team-gerard-van-de-kerkhof.jpg",
    out: "team-gerard-van-de-kerkhof-sm.jpg",
    size: SMALL,
    // De enige bron die geen pasfoto is: een liggende opname (310x285) waarop
    // Gerard een gebaar maakt, met zijn hoofd rechtsboven het midden. Automatisch
    // uitsnijden geeft daardoor een cirkel waarin zijn hoofd veel kleiner staat dan
    // bij de andere drie. Deze uitsnede legt hoofd en schouders vast zodat de rij
    // portretten dezelfde kadrering heeft.
    crop: { left: 95, top: 5, width: 200, height: 200 },
  },
  { src: "team-mark-van-geffen.jpg", out: "team-mark-van-geffen-sm.jpg", size: SMALL },
  { src: "team-hans-sanders.png", out: "team-hans-sanders-sm.jpg", size: SMALL },
  { src: "team-yussuf-abdi.png", out: "team-yussuf-abdi-sm.jpg", size: SMALL },
  {
    // Hero van /over-ons. Breed uitgesneden in plaats van vierkant: de sectie is
    // full-bleed en snijdt met object-cover toch al een brede band uit het midden.
    src: "hero-team.png",
    srcDir: EXTERNAL,
    out: "over-ons-hero.jpg",
    size: HERO,
    aspect: 3 / 2,
  },
];

const kb = (bytes) => `${Math.round(bytes / 1024)} KB`;

for (const { src, out, size, crop, aspect = 1, srcDir } of portraits) {
  const input = join(srcDir ?? assets, src);

  if (srcDir && !existsSync(input)) {
    console.log(`${src.padEnd(34)} overgeslagen — niet gevonden in ${srcDir}`);
    continue;
  }

  const original = sharp(await readFile(input));
  const { width, height } = await original.metadata();

  const image = crop ? original.extract(crop) : original;
  // Na een handmatige uitsnede is die uitsnede de bron, niet het hele bestand.
  const srcW = crop ? crop.width : width;
  const srcH = crop ? crop.height : height;

  // NOOIT OPSCHALEN: groter maken dan de bron levert alleen een groter bestand op,
  // geen extra detail. De bron beperkt hoe breed het resultaat kan worden, waarbij
  // de gevraagde verhouding wordt aangehouden.
  const maxWidth = Math.min(srcW, Math.round(srcH * aspect));
  const targetW = Math.min(size, maxWidth);
  const targetH = Math.round(targetW / aspect);

  const buffer = await image
    // strategy.attention zoekt zelf het opvallendste gebied op, in de praktijk het
    // gezicht. Een vaste uitsnede werkt hier niet: Gerards bron is liggend (310x285)
    // met zijn hoofd rechts van het midden, dus zowel "top" als centreren levert een
    // cirkel op met vooral achtergrond erin.
    .resize(targetW, targetH, { fit: "cover", position: sharp.strategy.attention })
    .jpeg({ quality: QUALITY, mozjpeg: true })
    .toBuffer();

  await writeFile(join(assets, out), buffer);

  const before = (await stat(input)).size;
  const note = targetW < size ? `  (bron ${maxWidth}px, niet opgeschaald)` : "";
  console.log(
    `${src.padEnd(34)} ${width}x${height} ${kb(before).padStart(8)}` +
      `  ->  ${out.padEnd(34)} ${targetW}x${targetH} ${kb(buffer.length).padStart(8)}${note}`,
  );
}
