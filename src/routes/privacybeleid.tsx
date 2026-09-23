import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/privacybeleid")({ component: Privacybeleid });

const sections = [
  [
    "1. Wie is verantwoordelijk?",
    "De Erfeniswijzer is verantwoordelijk voor de verwerking van persoonsgegevens zoals beschreven in dit privacybeleid.",
    "De Erfeniswijzer\nPolakweg 7\n2288 GG Rijswijk\nKvK nummer: 91240700\nE-mail: info@de-erfeniswijzer.nl\nWebsite: www.de-erfeniswijzer.nl",
  ],
  [
    "2. Welke persoonsgegevens verwerken wij?",
    "Afhankelijk van uw contact met ons kunnen wij de volgende persoonsgegevens verwerken:",
    "Uw naam\nUw telefoonnummer\nUw e-mailadres\nDe inhoud van uw bericht of aanvraag\nGegevens die nodig zijn om een afspraak in te plannen\nGegevens over uw persoonlijke of gezinssituatie\nGegevens over een nalatenschap, bezittingen, schulden, verzekeringen of andere financiële aangelegenheden\nGegevens over erfgenamen, nabestaanden en andere betrokken personen\nCorrespondentie en gespreksverslagen\nFactuurgegevens en betaalgegevens\nTechnische gegevens over het gebruik van onze website, zoals het IP-adres, browsertype en bezochte pagina’s",
  ],
  [
    "3. Waarom verwerken wij persoonsgegevens?",
    "Wij verwerken persoonsgegevens voor het beantwoorden van vragen en contactverzoeken, het plannen en voorbereiden van gesprekken, het uitvoeren van onze dienstverlening en afspraken, dossierbeheer, administratie en facturatie, contact met cliënten en deskundigen, websiteverbetering en beveiliging, nieuwsbrieven, wettelijke verplichtingen en klachten of juridische geschillen.",
  ],
  [
    "4. Op welke grondslagen verwerken wij uw gegevens?",
    "De verwerking is noodzakelijk voor de uitvoering of voorbereiding van een overeenkomst, een wettelijke verplichting, een gerechtvaardigd belang of uw toestemming. U kunt een eerder gegeven toestemming altijd intrekken.",
  ],
  [
    "5. Gegevens over andere personen",
    "Bij nalatenschapsvraagstukken kunnen ook persoonsgegevens van erfgenamen, familieleden, nabestaanden of andere betrokkenen worden verwerkt. Wij doen dit alleen wanneer dit noodzakelijk is voor onze dienstverlening en hiervoor een geldige grondslag bestaat.",
  ],
  [
    "6. Met wie delen wij persoonsgegevens?",
    "Wij verkopen persoonsgegevens nooit aan derden. Wij kunnen gegevens delen met hostingpartijen, websitebeheerders, leveranciers van e-mail, opslag- en administratiesystemen, aanbieders van afsprakenmodules en contactformulieren, nieuwsbriefdiensten, boekhouders, deskundigen die bij een dossier betrokken zijn en overheidsinstanties wanneer dit wettelijk verplicht is.",
  ],
  [
    "7. Doorgifte buiten de Europese Economische Ruimte",
    "Sommige dienstverleners kunnen persoonsgegevens buiten de Europese Economische Ruimte verwerken. Wanneer dit gebeurt, zorgen wij ervoor dat passende wettelijke waarborgen aanwezig zijn.",
  ],
  [
    "8. Hoelang bewaren wij persoonsgegevens?",
    "Wij bewaren persoonsgegevens niet langer dan noodzakelijk. Contactaanvragen die niet tot een opdracht leiden bewaren wij maximaal zes maanden. Cliëntdossiers bewaren wij in beginsel maximaal vijf jaar na afronding. Financiële administratie bewaren wij zeven jaar. Nieuwsbriefgegevens bewaren wij zolang u bent ingeschreven en technische gegevens in beginsel maximaal zes maanden.",
  ],
  [
    "9. Beveiliging van persoonsgegevens",
    "Wij nemen passende technische en organisatorische maatregelen om persoonsgegevens te beschermen tegen verlies, onbevoegde toegang, misbruik, wijziging of openbaarmaking.",
  ],
  [
    "10. Nieuwsbrief",
    "Wanneer onze nieuwsbrief beschikbaar is, kunt u zich hiervoor vrijwillig aanmelden. U kunt zich op ieder moment afmelden via de afmeldmogelijkheid in de nieuwsbrief of door contact met ons op te nemen.",
  ],
  [
    "11. Cookies",
    "Onze website kan gebruikmaken van functionele, analytische en marketingcookies. Voor cookies waarvoor wettelijk toestemming is vereist, vragen wij vooraf uw toestemming via een cookiemelding.",
  ],
  [
    "12. Uw privacyrechten",
    "U heeft het recht uw persoonsgegevens in te zien, te corrigeren of te laten verwijderen, de verwerking te beperken, bezwaar te maken, gegevens over te dragen en toestemming in te trekken. U kunt een verzoek indienen via info@de-erfeniswijzer.nl.",
  ],
  [
    "13. Klacht indienen",
    "Heeft u een klacht over de manier waarop wij met uw persoonsgegevens omgaan? Neem dan eerst contact met ons op. U heeft daarnaast het recht een klacht in te dienen bij de Autoriteit Persoonsgegevens.",
  ],
  [
    "14. Geautomatiseerde besluitvorming",
    "De Erfeniswijzer neemt geen besluiten die uitsluitend zijn gebaseerd op geautomatiseerde verwerking en die aanzienlijke gevolgen voor u hebben.",
  ],
  [
    "15. Minderjarigen",
    "Onze website en dienstverlening zijn niet specifiek gericht op minderjarigen. Wanneer persoonsgegevens van een minderjarige noodzakelijk zijn voor een dossier, gaan wij hiermee extra zorgvuldig om.",
  ],
  [
    "16. Wijzigingen",
    "Wij kunnen dit privacybeleid aanpassen wanneer onze dienstverlening, website of wettelijke verplichtingen veranderen. De meest recente versie wordt altijd gepubliceerd op www.de-erfeniswijzer.nl.",
  ],
  [
    "17. Contact",
    "Heeft u vragen over dit privacybeleid of over de verwerking van uw persoonsgegevens? Neem dan contact met ons op via De Erfeniswijzer, Polakweg 7, 2288 GG Rijswijk, info@de-erfeniswijzer.nl.",
  ],
] as const;

function Privacybeleid() {
  return (
    <>
      <PageHeader
        eyebrow="Juridisch"
        title="Privacybeleid De Erfeniswijzer"
        intro="De Erfeniswijzer vindt het belangrijk dat zorgvuldig en vertrouwelijk wordt omgegaan met persoonsgegevens."
      />
      <main className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
        <p className="mb-10 leading-relaxed text-muted-foreground">
          In dit privacybeleid leggen wij uit welke persoonsgegevens wij verwerken, waarom wij dit
          doen, hoelang wij deze bewaren en welke rechten u heeft.
        </p>
        <div className="space-y-10">
          {sections.map(([title, text, detail]) => (
            <section key={title}>
              <h2 className="text-2xl text-primary">{title}</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">{text}</p>
              {detail && (
                <p className="mt-4 whitespace-pre-line leading-relaxed text-muted-foreground">
                  {detail}
                </p>
              )}
            </section>
          ))}
        </div>
      </main>
    </>
  );
}
