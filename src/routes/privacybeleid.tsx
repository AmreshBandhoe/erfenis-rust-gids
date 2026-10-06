import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/privacybeleid")({ component: Privacybeleid });

const nlSections = [
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

const enSections = [
  [
    "1. Who is responsible?",
    "The Inheritance Guide is responsible for processing personal data as described in this privacy policy.",
    "The Inheritance Guide\nPolakweg 7\n2288 GG Rijswijk\nChamber of Commerce number: 91240700\nEmail: info@de-erfeniswijzer.nl\nWebsite: www.de-erfeniswijzer.nl",
  ],
  [
    "2. Which personal data do we process?",
    "Depending on your contact with us, we may process the following personal data:",
    "Your name\nYour telephone number\nYour email address\nThe content of your message or request\nInformation needed to schedule an appointment\nInformation about your personal or family situation\nInformation about an estate, assets, debts, insurance policies or other financial matters\nInformation about heirs, next of kin and other people involved\nCorrespondence and conversation notes\nInvoice and payment details\nTechnical information about use of our website, such as IP address, browser type and pages visited",
  ],
  [
    "3. Why do we process personal data?",
    "We process personal data to answer questions and contact requests, plan and prepare meetings, perform our services and agreements, manage files, handle administration and invoicing, contact clients and experts, improve and secure the website, send newsletters, meet legal obligations and handle complaints or legal disputes.",
  ],
  [
    "4. On which legal grounds do we process your data?",
    "Processing is necessary for the performance or preparation of an agreement, a legal obligation, a legitimate interest or your consent. You can withdraw previously given consent at any time.",
  ],
  [
    "5. Data about other people",
    "In estate matters, personal data of heirs, family members, next of kin or other people involved may also be processed. We only do this when it is necessary for our services and a valid legal basis exists.",
  ],
  [
    "6. With whom do we share personal data?",
    "We never sell personal data to third parties. We may share data with hosting providers, website administrators, suppliers of email, storage and administration systems, appointment and contact form providers, newsletter services, accountants, experts involved in a file and government bodies when legally required.",
  ],
  [
    "7. Transfer outside the European Economic Area",
    "Some service providers may process personal data outside the European Economic Area. When this happens, we ensure that appropriate legal safeguards are in place.",
  ],
  [
    "8. How long do we keep personal data?",
    "We do not keep personal data longer than necessary. Contact requests that do not lead to an assignment are kept for a maximum of six months. Client files are generally kept for up to five years after completion. Financial administration is kept for seven years. Newsletter data is kept while you are subscribed and technical data generally for up to six months.",
  ],
  [
    "9. Security of personal data",
    "We take appropriate technical and organisational measures to protect personal data against loss, unauthorised access, misuse, alteration or disclosure.",
  ],
  [
    "10. Newsletter",
    "When our newsletter is available, you can subscribe voluntarily. You can unsubscribe at any time via the unsubscribe option in the newsletter or by contacting us.",
  ],
  [
    "11. Cookies",
    "Our website may use functional, analytical and marketing cookies. For cookies that legally require consent, we ask for your consent in advance through a cookie notice.",
  ],
  [
    "12. Your privacy rights",
    "You have the right to access, correct or delete your personal data, restrict processing, object to processing, transfer your data and withdraw consent. You can submit a request via info@de-erfeniswijzer.nl.",
  ],
  [
    "13. Filing a complaint",
    "Do you have a complaint about the way we handle your personal data? Please contact us first. You also have the right to file a complaint with the Dutch Data Protection Authority.",
  ],
  [
    "14. Automated decision-making",
    "The Inheritance Guide does not make decisions based solely on automated processing that have significant consequences for you.",
  ],
  [
    "15. Minors",
    "Our website and services are not specifically aimed at minors. When personal data of a minor is necessary for a file, we handle it with extra care.",
  ],
  [
    "16. Changes",
    "We may amend this privacy policy when our services, website or legal obligations change. The most recent version is always published at www.de-erfeniswijzer.nl.",
  ],
  [
    "17. Contact",
    "Do you have questions about this privacy policy or about the processing of your personal data? Please contact The Inheritance Guide, Polakweg 7, 2288 GG Rijswijk, info@de-erfeniswijzer.nl.",
  ],
] as const;

const copy = {
  nl: {
    eyebrow: "Juridisch",
    title: "Privacybeleid De Erfeniswijzer",
    intro:
      "De Erfeniswijzer vindt het belangrijk dat zorgvuldig en vertrouwelijk wordt omgegaan met persoonsgegevens.",
    lead: "In dit privacybeleid leggen wij uit welke persoonsgegevens wij verwerken, waarom wij dit doen, hoelang wij deze bewaren en welke rechten u heeft.",
    sections: nlSections,
  },
  en: {
    eyebrow: "Legal",
    title: "Privacy Policy The Inheritance Guide",
    intro:
      "The Inheritance Guide considers it important that personal data is handled carefully and confidentially.",
    lead: "In this privacy policy, we explain which personal data we process, why we process it, how long we keep it and which rights you have.",
    sections: enSections,
  },
} as const;

function Privacybeleid() {
  const { lang } = useLang();
  const page = copy[lang];

  return (
    <>
      <PageHeader eyebrow={page.eyebrow} title={page.title} intro={page.intro} />
      <main className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
        <p className="mb-10 leading-relaxed text-muted-foreground">{page.lead}</p>
        <div className="space-y-10">
          {page.sections.map(([title, text, detail]) => (
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
