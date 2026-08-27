# Contentupdate volgens klantdocument

Alle wijzigingen uit het document worden doorgevoerd, plus één nieuwe pagina: de gratis nalatenschapscheck.

## Homepage

- Hero: knoppen worden "Ik wil mijn nalatenschap regelen" (naar Bij leven regelen) en "Ik heb hulp nodig na een overlijden" (naar Hulp na overlijden).
- Nalatenschapsmediation verdwijnt uit het diensten-overzicht (de pagina zelf blijft bestaan en blijft bereikbaar via het menu).
- Nieuw blok: "Hoe goed is uw nalatenschap eigenlijk geregeld? Doe de gratis nalatenschapscheck" met knop "Start uw persoonlijke nalatenschapscheck".
- Certificeringen blijven staan zoals nu (ICR, ADR, ICA, VCM, Quintax).

## Nieuwe pagina: Nalatenschapscheck

Nieuwe route `/nalatenschapscheck`:

- Vijf eenvoudige ja/nee/weet-ik-niet vragen over testament, levenstestament, overzicht van documenten, wensen en erfgenamen.
- Eén vraag per scherm met voortgangsbalk, terug-knop.
- Uitslagscherm met een score, korte persoonlijke duiding (drie niveaus: goed geregeld / deels / nog weinig geregeld) en per onbeantwoord punt een concreet advies.
- Afsluitende CTA naar het gratis adviesgesprek en naar het levensdossier.
- Alles gebeurt in de browser; er worden geen gegevens opgeslagen of verstuurd.
- Links vanaf homepage en Bij leven regelen wijzen hierheen; ook opgenomen in de footer.

## Bij leven regelen

- Nieuwe subtitel/titel: "Als u het morgen niet meer zelf kunt vertellen, weten uw naasten dan waar zij moeten beginnen?" met bijbehorende tekst.
- Sectie "Samen brengen we alles overzichtelijk in kaart" met de nieuwe vijf voordelen uit het document.
- De sectie "Advies op maat voor elke levenssituatie" (samengesteld gezin, alleenstaand, eigen woning, eigen bedrijf) wordt vervangen door "Uw Persoonlijk Levensdossier — Alles wat belangrijk is. Op één plek." met de vijf nieuwe punten.
- Prominent prijsblok: "Compleet traject voor €599 — Persoonlijke begeleiding. Een compleet levensdossier. Voor één vast tarief." met knop "Stel mijn levensdossier samen" naar de contactpagina.
- De sectie met testament/levenstestament/schenkingen wordt vervangen door het nalatenschapscheck-blok.
- Afsluitende CTA-sectie onderaan wordt verwijderd, met het citaat "Leg vandaag vast wat u later niet meer zelf kunt uitleggen."

## Hulp na overlijden

- Nieuwe intro "Rust en overzicht in een moeilijke periode".
- De lijst "Waar we allemaal bij kunnen ondersteunen" wordt uitgebreid naar de volledige tien punten uit het document.
- Diensten-teksten aangepast: "Volledige afwikkeling van de nalatenschap", "Begeleiding voor nabestaanden", "Erfbelasting en aangifte", "Mediation bij familieconflicten" met de nieuwe omschrijvingen.

## Over ons

- De sectie "Ons verhaal / Waarom wij dit werk doen" wordt verwijderd.
- Nieuwe intro bij het team: "Bij De Erfeniswijzer staat u er niet alleen voor..." over samenwerking met notarissen, executeurs, fiscalisten en mediators.
- Team uitgebreid naar vijf personen met de volledige bio's uit het document: Zainul Habieb (oprichter), Gerard van de Kerkhof (registermediator), Mark van Geffen (fiscaal), Hans Sanders (financieel, bedrijfsmatig & digitale nalatenschap), Yussuf Abdi (jurist).
- Voor Hans Sanders en Yussuf Abdi komt een verzorgde initialen-placeholder in huisstijl tot jij de foto's aanlevert; de bestaande drie portretten blijven staan.

## Overige pagina's

- Executeurschap: titel wordt "De afwikkeling in vertrouwde handen".
- Nalatenschapsmediation: titel wordt "Samen naar een oplossing".
- Erfbelasting & aangifte: titel wordt "Zorgvuldig en fiscaal verantwoord".
- Contact: keuzes bij "Waar gaat het over?" worden Hulp na overlijden / Bij leven regelen / Anders.
- Kennisbank blijft ongewijzigd.

## Technisch

Vrijwel alle teksten staan centraal in `src/lib/translations.ts`; die wordt per namespace bijgewerkt. Sectiestructuur wordt aangepast in `src/routes/index.tsx`, `bij-leven-regelen.tsx`, `hulp-bij-erfenis.tsx` en `over-ons.tsx`. Nieuwe bestanden: `src/routes/nalatenschapscheck.tsx` (client-side state, geen backend) en een klein `TeamAvatar`-component voor de initialen-placeholders. Elke pagina houdt eigen SEO-metadata; de nieuwe pagina krijgt eigen titel en omschrijving.
