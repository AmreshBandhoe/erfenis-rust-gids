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
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import sharp from "sharp";

const assets = join(dirname(fileURLToPath(import.meta.url)), "..", "src", "assets");

/** Weergavemaat × 2 voor retina. Zainuls bron haalt 560 niet; zie NOOIT OPSCHALEN. */
const FEATURE = 560;
const SMALL = 256;
const QUALITY = 82;

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
];

const kb = (bytes) => `${Math.round(bytes / 1024)} KB`;

for (const { src, out, size, crop } of portraits) {
  const input = join(assets, src);
  const original = sharp(await readFile(input));
  const { width, height } = await original.metadata();

  const image = crop ? original.extract(crop) : original;
  // Na een handmatige uitsnede is die uitsnede de bron, niet het hele bestand.
  const shortest = crop ? Math.min(crop.width, crop.height) : Math.min(width, height);

  // NOOIT OPSCHALEN: een portret groter maken dan de bron levert alleen een groter
  // bestand op, geen extra detail. De kortste zijde is de bovengrens, want daaruit
  // wordt het vierkant gesneden.
  const target = Math.min(size, shortest);

  const buffer = await image
    // strategy.attention zoekt zelf het opvallendste gebied op, in de praktijk het
    // gezicht. Een vaste uitsnede werkt hier niet: Gerards bron is liggend (310x285)
    // met zijn hoofd rechts van het midden, dus zowel "top" als centreren levert een
    // cirkel op met vooral achtergrond erin.
    .resize(target, target, { fit: "cover", position: sharp.strategy.attention })
    .jpeg({ quality: QUALITY, mozjpeg: true })
    .toBuffer();

  await writeFile(join(assets, out), buffer);

  const before = (await stat(input)).size;
  const note = target < size ? `  (bron ${shortest}px, niet opgeschaald)` : "";
  console.log(
    `${src.padEnd(34)} ${width}x${height} ${kb(before).padStart(7)}` +
      `  ->  ${out.padEnd(37)} ${target}x${target} ${kb(buffer.length).padStart(7)}${note}`,
  );
}
