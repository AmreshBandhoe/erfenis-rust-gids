import type { ContactSubject } from "./contact";

export type Lang = "nl" | "en";

const nl = {
  lang: "nl" as Lang,

  nav: {
    home: "Home",
    onzeBegeleiding: "Onze begeleiding",
    bijLevenRegelen: "Bij leven regelen",
    hulpNaOverlijden: "Hulp na overlijden",
    executeurschap: "Executeurschap",
    mediation: "Nalatenschapsmediation",
    erfbelasting: "Erfbelasting & aangifte",
    hulpBijErfenis: "Hulp bij erfenis",
    kennisbank: "Kennisbank",
    overOns: "Over ons",
    onsTeam: "Ons team",
    contact: "Contact",
    gratisGids: "Gratis gids",
  },

  header: {
    cta: "Plan een gesprek",
    callCta: "Bel ons",
    openMenu: "Menu openen",
    languageLabel: "Taal kiezen",
  },

  footer: {
    tagline: "Grip op uw nalatenschap. Duidelijkheid voor uw nabestaanden.",
    quickLinks: "Snelle links",
    contactTitle: "Contact",
    hours: "Ma t/m vr 9.00 – 17.00 uur",
    copyright: "Alle rechten voorbehouden.",
    copyrightName: "De Erfeniswijzer.",
    privacy: "Privacybeleid",
    terms: "Algemene voorwaarden",
    slogan: "Uw nalatenschap goed geregeld",
  },

  cta: {
    defaultTitle: "Zet vandaag de eerste stap",
    defaultText:
      "Wilt u uw nalatenschap goed regelen of heeft u hulp nodig na een overlijden? Wacht niet tot de vragen zich opstapelen. Vertel ons wat er speelt, dan kijken we samen wat u nodig heeft.",
    defaultLabel: "Plan een gratis kennismakingsgesprek",
    defaultContentHeroLabel: "Gratis adviesgesprek aanvragen",
  },

  home: {
    heroEyebrow: "Uw nalatenschap goed geregeld",
    heroTitle: "De Erfeniswijzer",
    heroIntro:
      "Persoonlijke begeleiding bij het voorbereiden van uw nalatenschap en het afwikkelen van een erfenis. Wij nemen de zorgen uit handen, zodat u en uw nabestaanden met rust verder kunnen.",
    heroCta: "Ik wil mijn nalatenschap voorbereiden",
    heroSecondary: "Ik heb hulp nodig na een overlijden",

    questionsEyebrow: "Begeleiding na overlijden",
    questionsTitle: "Na het afscheid begint vaak het uitzoeken",
    questionsPrev: "Vorige vragen",
    questionsNext: "Volgende vragen",
    questionsIntro:
      "Een overlijden zet niet alleen het leven stil. Het brengt ook een lange lijst aan vragen met zich mee. Juist in een periode van verdriet wordt van nabestaanden ook nog eens verwacht dat zij overzicht hebben en actie ondernemen.",

    questions: [
      "Waar liggen de belangrijke documenten?",
      "Welke instanties moeten worden geïnformeerd?",
      "Wie zijn de erfgenamen en wie mag beslissingen nemen?",
      "Wat gebeurt er met abonnementen, accounts en digitale bezittingen?",
      "Welke bankrekeningen, verzekeringen en schulden zijn er?",
      "Wat gebeurt er met de woning en de inboedel?",
      "Wanneer moet de aangifte erfbelasting worden gedaan?",
    ],

    questionsOutro:
      "De Erfeniswijzer helpt u de gehele situatie in kaart te brengen, geeft overzicht in wat er geregeld moet worden en begeleidt u stap voor stap bij de afwikkeling van de nalatenschap.",
    questionsClosing: "",

    helpEyebrow: "Begeleiding na overlijden",
    helpTitle: "Na het afscheid begint vaak het uitzoeken",
    helpIntro:
      "Een overlijden zet niet alleen het leven stil. Het brengt ook een lange lijst aan vragen met zich mee. Juist in een periode van verdriet wordt van nabestaanden ook nog eens verwacht dat zij overzicht hebben en actie ondernemen.",
    helpNetwork:
      "De Erfeniswijzer helpt u de gehele situatie in kaart te brengen, geeft overzicht in wat er geregeld moet worden en begeleidt u stap voor stap bij de afwikkeling van de nalatenschap.",
    helpListTitle: "",

    helpItems: [
      "Waar liggen de belangrijke documenten?",
      "Welke instanties moeten worden geïnformeerd?",
      "Wie zijn de erfgenamen en wie mag beslissingen nemen?",
      "Wat gebeurt er met abonnementen, accounts en digitale bezittingen?",
      "Welke bankrekeningen, verzekeringen en schulden zijn er?",
      "Wat gebeurt er met de woning en de inboedel?",
      "Wanneer moet de aangifte erfbelasting worden gedaan?",
    ],

    helpCta: "Bekijk onze begeleiding na overlijden",

    prepEyebrow: "Vooraf goed regelen",
    prepTitle: "Veel zorgen van later kunt u vandaag voorkomen",
    prepIntro:
      "Door uw nalatenschap en persoonlijke wensen nu overzichtelijk vast te leggen, voorkomt u dat anderen later moeten zoeken of beslissen. Samen met u brengen wij de belangrijke gegevens en documenten in kaart en bundelen die in een persoonlijk nalatenschapsdossier.",

    prepItems: [
      "Overzicht van uw financiële en administratieve zaken",
      "Uw wensen bij ziekte en na overlijden",
      "Alles overzichtelijk op één plek",
      "Houvast voor uw naasten",
    ],

    prepCta: "Bekijk het nalatenschapsdossier",

    whyEyebrow: "Waarom De Erfeniswijzer?",
    whyTitle: "Nalatenschap als laatste daad van liefde en zorg",
    whyIntro:
      "Niemand denkt graag na over overlijden. Toch krijgen we er uiteindelijk allemaal mee te maken. Juist door nu een aantal zaken goed te regelen, voorkom je later veel onduidelijkheid en onnodige zorgen voor je nabestaanden.",

    reasons: [
      {
        title: "Rust en duidelijkheid",
        text: "Krijg helder inzicht in je nalatenschap en weet zeker dat alle belangrijke zaken goed geregeld zijn.",
      },
      {
        title: "Voorkom conflicten",
        text: "Goede afspraken voorkomen onnodige ruzies en spanningen binnen de familie.",
      },
      {
        title: "Zekerheid voor later",
        text: "Breng je belangrijke zaken overzichtelijk in kaart, zodat niets wordt vergeten en alles gemakkelijk terug te vinden is.",
      },
      {
        title: "Persoonlijke experts",
        text: "Begeleiding door ervaren specialisten die zorgvuldig naar uw verhaal luisteren.",
      },
    ],

    servicesEyebrow: "Onze begeleiding",
    servicesTitle: "De Erfeniswijzer: één aanspreekpunt voor uw nalatenschap",
    servicesIntro:
      "Of u nu uw zaken voor later wilt regelen of een erfenis moet afwikkelen: De Erfeniswijzer brengt in kaart wat er moet gebeuren, begeleidt u door alle stappen heen en schakelt waar nodig de juiste specialist in. Zo houdt u overzicht en heeft u één vast aanspreekpunt.",
    servicesIntro2: "",

    services: [
      {
        title: "Bij leven regelen",
        text: "Samen brengen we uw persoonlijke situatie, belangrijke documenten en wensen in kaart, zodat uw nalatenschap zorgvuldig is geregeld.",
        to: "/bij-leven-regelen",
      },
      {
        title: "Hulp na overlijden",
        text: "Praktische begeleiding bij de afwikkeling van een nalatenschap. Wij helpen u stap voor stap, zodat u weet wat er geregeld moet worden.",
        to: "/hulp-bij-erfenis",
      },
      {
        title: "Executeurschap",
        text: "Onafhankelijke executeur nodig? Wij begeleiden de afwikkeling van de nalatenschap zorgvuldig en volgens de wensen van de overledene.",
        to: "/executeurschap",
      },
      {
        title: "Erfbelasting & aangifte",
        text: "Wij begeleiden u bij de aangifte erfbelasting en denken mee over een zorgvuldige en fiscaal verantwoorde afwikkeling.",
        to: "/erfbelasting-aangifte",
      },
      // Nalatenschapsmediation staat hier bewust NIET bij; die kaart is op
      // 27-08-2026 weggehaald. De pagina zelf bestaat nog en is bereikbaar via
      // het menu "Onze begeleiding". Niet opnieuw toevoegen.
    ],

    certTitle: "Onze certificeringen en samenwerkingspartners",

    certifications: [
      { caption: "ICR Certified Coach Register (ISO 9001 / ISO 17024)" },
      { caption: "ICA Associate Member (Compliance & Integriteit)" },
      { caption: "ADR Kwaliteitsregister (ISO 9001 / ISO 17024)" },
    ],

    scanEyebrow: "Gratis nalatenschapscheck",
    scanTitle: "Weet u hoe goed uw nalatenschap is geregeld?",
    scanCompactText: "Beantwoord vijf eenvoudige vragen en ontdek waar u staat.",
    scanCompactCta: "Start uw gratis nalatenschapscheck",
    scanIntro:
      "Veel mensen denken dat alles duidelijk is, totdat zij zichzelf een paar concrete vragen stellen. Met de gratis Nalatenschapscheck ontdekt u binnen 2 minuten welke zaken al goed geregeld zijn en waar mogelijk nog aandacht nodig is.",
    scanBullets: ["Slechts 5 korte vragen", "Direct inzicht in uw situatie", "Geen verplichtingen"],
    scanCta: "Start uw persoonlijke nalatenschapscheck",
    servicesMore: "Meer informatie",
    // "U ontvangt" wekte de indruk dat er iets gemaild wordt; de uitslag blijft
    // in de browser en wordt nergens verstuurd.
    scanCardFooter: "U ziet uw persoonlijke overzicht direct op het scherm.",
    scanCardTitle: "Nalatenschapscheck",
    scanCardSub: "5 vragen · 2 minuten · gratis",
    // Deze vijf lopen bewust gelijk op met check.questions verderop in dit bestand:
    // de kaart op de homepage belooft precies de vragen die de check ook stelt.
    scanCardItems: [
      "Past uw testament nog bij uw situatie?",
      "Heeft u een levenstestament of volmacht?",
      "Zijn uw belangrijke documenten vindbaar?",
      "Weten uw naasten wat uw wensen zijn?",
      "Heeft u zicht op de erfbelasting?",
    ],

    finalCtaTitle: "Stel belangrijke zaken niet uit tot anderen ze moeten oplossen",
    finalCtaText:
      "Of u nu vooruit wilt kijken of midden in de afwikkeling van een erfenis zit, een eerste gesprek kan snel rust en duidelijkheid geven.",
    finalCtaText2:
      "Vertel ons wat er speelt. Dan kijken we samen welke begeleiding bij uw situatie past.",
    finalCtaPrimary: "Plan een gratis adviesgesprek",
  },

  hulp: {
    heroEyebrow: "Voor nabestaanden & executeurs",
    heroTitle: "Wij nemen de zorgen uit handen",
    heroIntro:
      "Het verliezen van een dierbare is ingrijpend genoeg. Het afwikkelen van de erfenis hoeft u er niet alléén bij te dragen. Wij begeleiden u met warmte en deskundigheid door elke stap.",

    introEyebrow: "Begeleiding voor nabestaanden",
    introTitle: "Rust en overzicht in een moeilijke periode",
    introText:
      "In een periode van verdriet komt er veel op u af. Wij brengen rust en overzicht, nemen praktische zaken uit handen en begeleiden u stap voor stap bij de afwikkeling van de nalatenschap. Zo houdt u ruimte voor afscheid en verwerking.",

    sectionEyebrow: "Een zware taak op een zwaar moment",
    sectionTitle: "U hoeft het niet alleen te doen",
    sectionText1:
      "Na het verlies van een dierbare moet er ineens van alles worden geregeld. Eerst de uitvaart, daarna de administratie, de woning en de erfenis. U krijgt te maken met banken, verzekeraars, notarissen en andere instanties, terwijl u juist ruimte nodig heeft voor uw verdriet.",
    sectionText2:
      "Wij helpen u het overzicht te bewaren en begeleiden u stap voor stap. Als vast aanspreekpunt nemen wij praktische zorgen uit handen en schakelen wij waar nodig de juiste specialisten in.",
    burdensTitle: "Waar we allemaal bij kunnen ondersteunen",
    burdens: [
      "Het regelen van de uitvaart en alle bijbehorende administratie",
      "Het informeren van banken, verzekeraars en overheidsinstanties",
      "Het in kaart brengen van bezittingen, schulden en verzekeringen",
      "Opzeggen van abonnementen, lidmaatschappen en verzekeringen",
      "Regelen van zaken rondom de woning en inboedel",
      "Inschakelen van notarissen, makelaars en andere specialisten",
      "Het afhandelen van digitale accounts en online nalatenschap",
      "Erfgenamenonderzoek en contact met erfgenamen",
      "De aangifte en betaling van de erfbelasting",
      "Verdeling van de nalatenschap",
    ],

    servicesEyebrow: "Afstemming op uw wensen",
    servicesTitle: "Kies de begeleiding die bij u past",
    servicesIntro:
      "Iedere nalatenschap en iedere familie is anders. Daarom kunt u bepaalde zaken aan ons overlaten of samen met ons regelen. We stemmen onze begeleiding af op wat u nodig heeft.",
    services: [
      {
        title: "Volledige afwikkeling van de nalatenschap",
        text: "Wilt u de praktische afwikkeling zoveel mogelijk uit handen geven? Wij bewaken het overzicht, onderhouden contact met betrokken partijen en zorgen dat de noodzakelijke stappen zorgvuldig worden doorlopen.",
      },
      {
        title: "Begeleiding voor nabestaanden",
        text: "Wilt u zelf betrokken blijven, maar heeft u behoefte aan overzicht en deskundige ondersteuning? Wij begeleiden u stap voor stap, beantwoorden uw vragen en helpen u bij de zaken die geregeld moeten worden.",
      },
      {
        title: "Erfbelasting en aangifte",
        text: "Wij helpen bij het verzamelen van de benodigde gegevens en begeleiden de aangifte erfbelasting. Waar fiscale expertise nodig is, schakelen wij een gespecialiseerde adviseur in.",
      },
      {
        title: "Mediation bij familieconflicten",
        text: "Een nalatenschap kan bestaande spanningen versterken of nieuwe meningsverschillen veroorzaken. Wij helpen om belangen en afspraken inzichtelijk te maken en begeleiden het gesprek. Indien nodig schakelen wij een gespecialiseerde mediator in.",
      },
    ],

    ctaTitle: "Laat de zorgen aan ons over",
    ctaText:
      "Plan een gratis en vrijblijvend adviesgesprek. We luisteren naar uw situatie en vertellen u rustig hoe wij u kunnen helpen.",
  },

  bijleven: {
    heroEyebrow: "Duidelijk voor later begint vandaag",
    heroTitle: "Uw nalatenschap volledig in kaart gebracht",
    heroIntro:
      "Door uw persoonlijke wensen, belangrijke documenten en financiële gegevens nu vast te leggen, geeft u de nabestaanden duidelijkheid op een moment dat zij die hard nodig hebben.",
    heroCta: "Start met een persoonlijk adviesgesprek",

    whyEyebrow: "Waarom nu regelen?",
    whyTitle: "Weten uw naasten straks waar zij moeten beginnen?",
    whyText:
      "Zolang u alles zelf kunt uitleggen, lijkt dat geen probleem. Maar bij plotselinge ziekte of overlijden moeten uw naasten ineens op zoek, terwijl zij niet altijd weten wat er is geregeld of wat uw persoonlijke wensen waren.",
    whyText2:
      "Wij helpen u nu een volledig overzicht te creëren, zodat u zelf de regie houdt en uw naasten later houvast hebben.",
    benefitsTitle: "Wat het u oplevert",
    benefits: [
      "Voorkom onzekerheid, ruzie en stress voor uw nabestaanden",
      "Bespaar op een eerlijke manier erfbelasting",
      "Houd zelf de regie over uw bezittingen en zorg",
      "De rust van weten dat alles goed is vastgelegd",
    ],

    overviewEyebrow: "Samen in kaart",
    overviewTitle: "Samen brengen we alles overzichtelijk in kaart",
    overviewText:
      "Uw administratie, financiële zaken en persoonlijke wensen bevinden zich vaak op verschillende plekken. Denk aan bankrekeningen, verzekeringen, abonnementen, belangrijke documenten en contactpersonen. Samen brengen we alles bij elkaar en leggen we vast wat uw dierbaren later moeten weten.",
    overviewListTitle: "Wat het u oplevert",
    overviewList: [
      "Een compleet overzicht van uw persoonlijke, financiële en administratieve zaken",
      "Belangrijke informatie en documenten overzichtelijk op één plek",
      "Duidelijkheid over uw wensen bij ziekte en na uw overlijden",
      "Minder zorgen en onzekerheid voor uw dierbaren",
      "Rust voor uzelf, omdat u weet dat alles goed is vastgelegd",
    ],

    checkEyebrow: "Gratis nalatenschapscheck",
    checkTitle: "Hoe goed is uw nalatenschap eigenlijk geregeld?",
    checkSubtitle: "Doe de gratis nalatenschapscheck",
    checkText: "Beantwoord vijf eenvoudige vragen en ontdek waar u staat.",
    checkCta: "Start uw persoonlijke nalatenschapscheck",

    dossierEyebrow: "Alles op één plek",
    dossierTitle: "Uw persoonlijk nalatenschapsdossier",
    dossierText1:
      "Samen brengen we uw bezittingen, schulden, verzekeringen, belangrijke documenten, contactpersonen, erfgenamen en persoonlijke wensen in kaart. U krijgt een overzichtelijk dossier dat uw naasten helpt wanneer zij het nodig hebben.",
    dossierText2:
      "Na het opstellen bespreken we wat nog aandacht vraagt. Is bijvoorbeeld een testament, levenstestament of specialistisch advies nodig? Dan helpen we u bij de volgende stap.",
    dossierList: [
      "Uw persoonlijke en financiële situatie helder in kaart",
      "Belangrijke documenten overzichtelijk bij elkaar",
      "Inzicht in bezittingen, schulden en verzekeringen",
      "Uw wensen en belangrijke contactpersonen vastgelegd",
      "Persoonlijke begeleiding van begin tot eind",
    ],

    priceTitle: "Compleet Nalatenschapsdossier voor €599",
    priceItems: [
      "Een compleet overzicht van uw persoonlijke, financiële en administratieve zaken",
      "Volledig inzicht in bezittingen, schulden en verzekeringen",
      "Alle belangrijke documenten overzichtelijk op één plek",
      "Uw wensen bij ziekte en na overlijden duidelijk vastgelegd",
      "Mogelijkheid tot opstellen van testament of levenstestament",
      "Persoonlijke begeleiding van begin tot eind",
      "Duidelijkheid voor uw nabestaanden",
    ],
    priceText: "Heeft u vragen? We maken graag kennis en leggen uit hoe wij werken.",
    priceCta: "Bespreek uw situatie",

    quote: "Leg vandaag vast wat u later niet meer zelf kunt uitleggen.",
    ctaLabel: "Start met een persoonlijk adviesgesprek",
  },

  // NB: onderstaande drie namespaces (executeurschap, mediation, erfbelasting) bevatten
  // concept-/placeholderteksten. De klant leverde alleen de kaart-/menutekst aan — laat de
  // volledige paginateksten nog controleren/goedkeuren voordat de site live gaat.
  executeurschap: {
    heroEyebrow: "Onafhankelijk executeurschap",
    heroTitle: "De afwikkeling in vertrouwde handen",
    heroIntro:
      "Een onafhankelijke executeur nodig? Wij begeleiden de afwikkeling van de nalatenschap zorgvuldig en volledig volgens de wensen van de overledene.",
    heroCta: "Vraag een vrijblijvend gesprek aan",

    whyEyebrow: "Waarom een executeur?",
    whyTitle: "Een neutrale regisseur voor de nalatenschap",
    whyText:
      "Als executeur nemen wij de verantwoordelijkheid voor het afwikkelen van de nalatenschap op ons. Zo houden erfgenamen hun handen vrij en worden gevoelige beslissingen door een onafhankelijke partij begeleid.",
    benefitsTitle: "Wat wij voor u regelen",
    benefits: [
      "Inventariseren van bezittingen, schulden en verplichtingen",
      "Contact met instanties, banken en de notaris",
      "Beheer en praktische afwikkeling van de nalatenschap",
      "Heldere communicatie met alle erfgenamen",
    ],

    topicsEyebrow: "Onze aanpak",
    topicsTitle: "Zorgvuldig, transparant en volgens de wens",
    topics: [
      {
        title: "Onafhankelijk",
        text: "Als neutrale partij handelen wij zonder eigen belang, puur in het belang van de nalatenschap en de wens van de overledene.",
      },
      {
        title: "Volledig ontzorgd",
        text: "Van administratie tot verdeling: wij nemen de praktische en juridische taken uit handen.",
      },
      {
        title: "Heldere communicatie",
        text: "U en de erfgenamen weten steeds waar u aan toe bent, in begrijpelijke taal en op tijd geïnformeerd.",
      },
    ],

    ctaTitle: "Onafhankelijke executeur nodig?",
    ctaText:
      "In een vrijblijvend gesprek bespreken we uw situatie en leggen we uit hoe wij het executeurschap zorgvuldig invullen.",
    ctaLabel: "Plan een vrijblijvend gesprek",
  },

  mediation: {
    heroEyebrow: "Nalatenschapsmediation",
    heroTitle: "Samen naar een oplossing",
    heroIntro:
      "Onenigheid tussen erfgenamen? Als onafhankelijk mediator begeleiden wij het gesprek naar een oplossing waar iedereen zich in kan vinden.",
    heroCta: "Vraag een vrijblijvend gesprek aan",

    whyEyebrow: "Waarom mediation?",
    whyTitle: "Voorkom een breuk in de familie",
    whyText:
      "Rond een nalatenschap lopen emoties soms hoog op. Een onafhankelijke mediator helpt om het gesprek open te houden, misverstanden weg te nemen en tot afspraken te komen die recht doen aan iedereen.",
    benefitsTitle: "Wat mediation u oplevert",
    benefits: [
      "Ruimte voor ieders verhaal en belangen",
      "Herstel van onderling vertrouwen en communicatie",
      "Afspraken waar alle betrokkenen achter staan",
      "Een snellere, minder belastende afwikkeling dan via de rechter",
    ],

    topicsEyebrow: "Onze aanpak",
    topicsTitle: "Neutraal, vertrouwelijk en verbindend",
    topics: [
      {
        title: "Onpartijdig",
        text: "Wij kiezen geen partij, maar begeleiden het gesprek zodat iedereen gehoord wordt.",
      },
      {
        title: "Vertrouwelijk",
        text: "Alles wat besproken wordt, blijft binnen de mediation. Dat schept ruimte voor eerlijkheid.",
      },
      {
        title: "Gericht op oplossing",
        text: "We werken toe naar concrete, gedragen afspraken die de verhoudingen zoveel mogelijk sparen.",
      },
    ],

    ctaTitle: "Vastgelopen rond een erfenis?",
    ctaText:
      "In een vrijblijvend gesprek verkennen we of mediation bij uw situatie past en hoe wij kunnen helpen.",
    ctaLabel: "Plan een vrijblijvend gesprek",
  },

  erfbelasting: {
    heroEyebrow: "Erfbelasting & aangifte",
    heroTitle: "Zorgvuldig en fiscaal verantwoord",
    heroIntro:
      "Wij begeleiden u bij de aangifte erfbelasting en denken mee over een zorgvuldige en fiscaal verantwoorde afwikkeling van de nalatenschap.",
    heroCta: "Vraag een vrijblijvend gesprek aan",

    whyEyebrow: "Waarom begeleiding?",
    whyTitle: "Voorkom fouten en betaal niet te veel",
    whyText:
      "De aangifte erfbelasting is aan strikte regels en termijnen gebonden. Wij zorgen voor een correcte, tijdige aangifte en kijken waar u binnen de regels erfbelasting kunt beperken.",
    benefitsTitle: "Waar wij u bij helpen",
    benefits: [
      "Correcte en tijdige aangifte erfbelasting",
      "Overzicht van vrijstellingen en tarieven",
      "Waardering van bezittingen en de eigen woning",
      "Fiscaal verantwoord adviseren binnen de regels",
    ],

    topicsEyebrow: "Onze aanpak",
    topicsTitle: "Duidelijk, correct en op tijd",
    topics: [
      {
        title: "Volledige aangifte",
        text: "Wij verzorgen de aangifte erfbelasting van begin tot eind, zodat u zich daar geen zorgen over hoeft te maken.",
      },
      {
        title: "Fiscaal slim",
        text: "We benutten vrijstellingen en mogelijkheden binnen de regels, zodat er zo veel mogelijk overblijft voor de erfgenamen.",
      },
      {
        title: "Op tijd geregeld",
        text: "We bewaken de termijnen van de Belastingdienst, zodat u nooit voor verrassingen komt te staan.",
      },
    ],

    ctaTitle: "Hulp bij de aangifte erfbelasting?",
    ctaText:
      "In een vrijblijvend gesprek bekijken we uw situatie en leggen we uit hoe wij de aangifte en afwikkeling voor u verzorgen.",
    ctaLabel: "Plan een vrijblijvend gesprek",
  },

  kennisbank: {
    heroEyebrow: "Kennis & inzicht",
    heroTitle: "Kennisbank Nalatenschap & Erfenis",
    heroIntro:
      "Praktische artikelen en heldere uitleg om zelf alvast wijzer te worden. Begrijpelijke antwoorden op de meest gestelde vragen over nalatenschap en erfenis.",
    heroCta: "Stel uw vraag in een gratis gesprek",

    filterAll: "Alle artikelen",
    filterPrep: "Voorbereiding",
    filterSettle: "Afwikkeling",
    categoryPrep: "Voorbereiding",
    categorySettle: "Afwikkeling",
    readingTime: "lezen",
    readMore: "Lees meer",

    articles: [
      {
        title: "Wat doet een executeur precies?",
        excerpt:
          "De taken, verantwoordelijkheden en bevoegdheden van een executeur helder uitgelegd.",
        category: "afwikkeling" as const,
        readingTime: "5 min",
      },
      {
        title: "Hoe werkt erfbelasting?",
        excerpt: "Wie betaalt hoeveel, welke vrijstellingen gelden er en hoe doet u aangifte?",
        category: "afwikkeling" as const,
        readingTime: "6 min",
      },
      {
        title: "Levenstestament: waarom is het belangrijk?",
        excerpt: "Regel bij leven wie er namens u beslist als u dat zelf niet meer kunt.",
        category: "voorbereiding" as const,
        readingTime: "4 min",
      },
      {
        title: "Nalatenschap bij een samengesteld gezin",
        excerpt: "Voorkom onbedoelde gevolgen en zorg dat iedereen eerlijk wordt meegenomen.",
        category: "voorbereiding" as const,
        readingTime: "7 min",
      },
      {
        title: "Wat te doen bij overlijden: de checklist",
        excerpt: "Een overzichtelijk stappenplan voor de eerste dagen en weken na een overlijden.",
        category: "afwikkeling" as const,
        readingTime: "5 min",
      },
      {
        title: "Crypto en digitale bezittingen in een erfenis",
        excerpt:
          "Hoe gaat u om met cryptovaluta, accounts en digitale bezittingen in een nalatenschap?",
        category: "voorbereiding" as const,
        readingTime: "6 min",
      },
      {
        title: "Schenken bij leven: slim en eerlijk besparen",
        excerpt: "Hoe u met schenkingen erfbelasting kunt beperken, volledig binnen de regels.",
        category: "voorbereiding" as const,
        readingTime: "5 min",
      },
      {
        title: "Een erfenis verdelen zonder ruzie",
        excerpt: "Praktische tips om de verdeling eerlijk en in goede harmonie te laten verlopen.",
        category: "afwikkeling" as const,
        readingTime: "6 min",
      },
    ],

    ctaTitle: "Liever persoonlijk advies?",
    ctaText:
      "Onze kennisbank helpt u op weg, maar elke situatie is anders. Stel uw vraag gerust in een gratis en vrijblijvend adviesgesprek.",
  },

  overOns: {
    heroEyebrow: "Wie wij zijn",
    heroTitle: "Maak kennis met ons team van specialisten",
    heroIntro:
      "Bij De Erfeniswijzer staat u er niet alleen voor. Wij werken samen met executeurs, fiscalisten, notarissen, mediators, vermogensadviseurs en andere deskundigen die ieder vanuit hun eigen expertise bijdragen aan uw nalatenschap.",

    teamEyebrow: "Wie wij zijn",
    teamTitle: "Maak kennis met ons team van specialisten",
    teamIntro:
      "Bij De Erfeniswijzer staat u er niet alleen voor. Wij werken samen met notarissen, executeurs, fiscalisten, mediators en andere deskundigen die ieder vanuit hun eigen expertise bijdragen aan uw nalatenschap.",
    teamPortrait: "Portret van",
    team: [
      {
        name: "Zainul Habieb",
        role: "Oprichter & eigenaar De Erfeniswijzer",
        bio: "Zainul Habieb is oprichter en eigenaar van De Erfeniswijzer en is gecertificeerd nalatenschapscoach. In uw dossier brengt hij de verschillende onderdelen van een nalatenschap samen, bewaakt hij het overzicht en begeleidt hij cliënten gedurende het gehele traject. Waar specialistische kennis nodig is, zorgt hij dat de juiste deskundige wordt betrokken, zodat cliënten één centraal aanspreekpunt houden en tegelijkertijd de juiste expertise ontvangen.",
      },
      {
        name: "Gerard van de Kerkhof",
        role: "Registermediator & Adviseur",
        bio: "Gerard van de Kerkhof is directeur van het erkende opleidingsinstituut VCM Opleiders. Hij is full certified ADR-registermediator en trainer. Tientallen jaren praktijkervaring in mediation, conflictcoaching en professionele communicatie zorgen ervoor dat Gerard zich direct inleeft in ieders situatie. Binnen De Erfeniswijzer heeft Gerard een adviserende rol op het gebied van nalatenschap en mediation.",
      },
      {
        name: "Mark van Geffen",
        role: "Fiscaal adviseur nalatenschap",
        bio: "Mark van Geffen is eigenaar van Quintax Belastingadviseurs en is fiscaal adviseur. Binnen De Erfeniswijzer adviseert hij bij fiscale vraagstukken rondom nalatenschap, waaronder de aangifte erfbelasting, schenkbelasting en fiscale gevolgen van vermogensoverdracht. Zo helpt hij cliënten om ook de fiscale kant van hun nalatenschap zorgvuldig en overzichtelijk te regelen.",
      },
      {
        name: "Hans Sanders",
        role: "Zakelijke & digitale nalatenschap",
        bio: "Hans Sanders is algemeen directeur van Radeac Accountants & Adviseurs en heeft ruime ervaring met finance, bedrijfsvoering en strategische ondernemingsvraagstukken. Daarnaast is hij nalatenschapscoach en executeur. Binnen het domein van nalatenschappen ligt zijn specialisme onder meer bij bedrijfsopvolging, ondernemingsvermogen en digitale nalatenschap.",
      },
      {
        name: "Yussuf Abdi",
        role: "Jurist",
        bio: "Yussuf Abdi is jurist en oprichter van Abdi Juristen. Hij heeft ruime ervaring binnen de juridische sector en staat bekend om zijn persoonlijke en zorgvuldige benadering. Binnen De Erfeniswijzer is zijn juridische expertise inzetbaar bij vraagstukken die raken aan rechten, aansprakelijkheid, belangenbehartiging en andere juridische aspecten rondom een nalatenschap.",
      },
      {
        name: "Errol Moennoe",
        role: "Pensioen- en vermogensadviseur",
        bio: "Errol Moennoe is eigenaar van Hyposervice Finance. Als financieel adviseur brengt hij binnen het team van De Erfeniswijzer de financiële kant van het leven en nalaten in beeld. Hij adviseert over hypotheken, verzekeringen, pensioen en vermogensplanning. Ook is Errol actief als executeur. Die combinatie maakt hem een waardevolle specialist voor mensen die hun zaken bij leven goed willen regelen en voor nabestaanden die na een overlijden voor financiële keuzes staan.",
      },
    ],

    valuesEyebrow: "Onze waarden",
    valuesTitle: "Waar wij voor staan",
    values: [
      {
        title: "Persoonlijke aandacht",
        text: "Achter elk dossier zit een mens en een verhaal. Wij luisteren echt en nemen de tijd voor u.",
      },
      {
        title: "Deskundigheid",
        text: "Diepgaande kennis van erfrecht en fiscaliteit, vertaald naar heldere, begrijpelijke taal.",
      },
      {
        title: "Rust & duidelijkheid",
        text: "Wij brengen overzicht en kalmte, zodat u altijd weet waar u aan toe bent.",
      },
    ],
  },

  contact: {
    heroEyebrow: "Wij luisteren",
    heroTitle: "Neem contact met ons op",
    heroIntro:
      "Heeft u een vraag of wilt u uw situatie vrijblijvend bespreken? Neem gerust contact met ons op of plan een gesprek, telefonisch of gewoon bij u thuis, met een kop koffie.",

    directEyebrow: "Direct contact",
    directTitle: "Persoonlijk en zonder verplichtingen",
    directText:
      "Heeft u een vraag of wilt u kennismaken? Wij nemen rustig de tijd voor uw situatie en denken graag met u mee.",

    details: [
      { label: "Telefoon", value: "085 - 000 00 00", href: "tel:+31850000000" },
      { label: "E-mail", value: "info@erfeniswijzer.nl", href: "mailto:info@erfeniswijzer.nl" },
      { label: "Werkgebied", value: "Heel Nederland" },
      { label: "Bereikbaarheid", value: "Ma t/m vr 9.00 – 17.00 uur" },
    ],

    homeVisitTitle: "Liever een huisbezoek?",
    homeVisitText:
      "In een vertrouwde omgeving praat het vaak makkelijker over dit gevoelige onderwerp. Indien gewenst, komen wij graag bij u langs.",

    formTitle: "Stuur ons een bericht",
    formSubtitle: "Vul het formulier in en wij nemen binnen één werkdag contact met u op.",
    fieldName: "Naam",
    fieldNamePlaceholder: "Uw naam",
    fieldPhone: "Telefoon",
    fieldPhonePlaceholder: "06 - 12 34 56 78",
    fieldEmail: "E-mail",
    fieldEmailPlaceholder: "uw@email.nl",
    fieldSubject: "Waar gaat het over?",
    // `satisfies` koppelt deze waarden aan ContactSubject: wijkt er één af van
    // src/lib/contact.ts, dan faalt de build in plaats van het formulier.
    subjectOptions: [
      { value: "hulp-na-overlijden", label: "Hulp na overlijden" },
      { value: "bij-leven-regelen", label: "Bij leven regelen" },
      { value: "anders", label: "Anders" },
    ] satisfies readonly { value: ContactSubject; label: string }[],

    fieldMessage: "Bericht",
    fieldMessagePlaceholder: "Vertel ons kort waar wij u mee kunnen helpen…",
    submitLabel: "Verstuur bericht",
    privacy: "Wij gaan zorgvuldig en vertrouwelijk om met uw gegevens.",
    privacyLink: "Meer informatie vindt u in ons privacybeleid.",

    mapArea: "Ons werkgebied",
    mapNote: "Wij werken door heel Nederland en komen graag bij u thuis langs.",
    mapLink: "Bekijk hoe wij u kunnen helpen",
    mapTitle: "Kaart van het werkgebied van De Erfeniswijzer in Nederland",

    submitPending: "Bezig met verzenden…",
    toastTitle: "Bedankt! Uw bericht is verzonden.",
    toastDesc: "Wij nemen binnen één werkdag persoonlijk contact met u op.",
    errorToastTitle: "Verzenden is niet gelukt",
    errorToastDesc:
      "Er ging iets mis aan onze kant. Probeert u het zo nog eens, of mail ons rechtstreeks op info@erfeniswijzer.nl.",

    errorName: "Vul uw naam in.",
    errorNameMax: "Naam mag maximaal 100 tekens zijn.",
    errorPhone: "Vul een geldig telefoonnummer in.",
    errorPhoneMax: "Telefoonnummer mag maximaal 20 tekens zijn.",
    errorPhoneFormat: "Gebruik alleen cijfers en + ( ) - tekens.",
    errorEmail: "Vul een geldig e-mailadres in.",
    errorEmailMax: "E-mailadres mag maximaal 255 tekens zijn.",
    errorSubject: "Maak een keuze.",
    errorMessage: "Vertel ons kort waar wij u mee kunnen helpen.",
    errorMessageMax: "Bericht mag maximaal 1500 tekens zijn.",
  },

  gratisGids: {
    heroEyebrow: "Gratis download",
    heroTitle: "Download de gratis Erfeniswijzer Gids",
    heroIntro:
      "Een praktische checklist plus heldere uitleg over de belangrijkste stappen bij nalatenschap en erfenis. Zo zet u vandaag nog rustig de eerste stap.",
    heroBullets: [
      "Direct in uw mailbox — geen verplichtingen",
      "Geschreven in begrijpelijke taal",
      "Samengesteld door ervaren specialisten",
    ],

    formTitle: "Stuur mij de gratis gids",
    formSubtitle: "Vul uw naam en e-mailadres in, dan sturen wij de gids direct toe.",
    fieldName: "Naam",
    fieldNamePlaceholder: "Uw naam",
    fieldEmail: "E-mail",
    fieldEmailPlaceholder: "uw@email.nl",
    submitLabel: "Download de gratis gids",
    privacy: "Wij gaan zorgvuldig en vertrouwelijk om met uw gegevens.",

    submitPending: "Bezig met verzenden…",
    toastTitle: "Gelukt! De gids is onderweg.",
    toastDesc: "U ontvangt de Erfeniswijzer Gids binnen enkele minuten per e-mail.",
    errorToastTitle: "Aanvragen is niet gelukt",
    errorToastDesc:
      "Er ging iets mis aan onze kant. Probeert u het zo nog eens, of mail ons rechtstreeks op info@erfeniswijzer.nl.",

    contentsEyebrow: "Een voorproefje",
    contentsTitle: "Wat staat er in de gids?",
    contentsIntro:
      "Alles wat u nodig heeft om met vertrouwen te beginnen — overzichtelijk en zonder jargon.",
    contents: [
      {
        title: "Complete checklist",
        text: "Stap voor stap overzicht van alles wat u kunt regelen — niets blijft over het hoofd gezien.",
      },
      {
        title: "Uitleg per document",
        text: "Heldere uitleg over testament, levenstestament en volmachten, in gewone taal.",
      },
      {
        title: "Erfbelasting beperken",
        text: "Praktische tips om erfbelasting eerlijk en binnen de regels te verminderen.",
      },
      {
        title: "Gesprek met de familie",
        text: "Handvatten om het gesprek over nalaten open en zonder spanning te voeren.",
      },
    ],

    errorName: "Vul uw naam in.",
    errorNameMax: "Naam mag maximaal 100 tekens zijn.",
    errorEmail: "Vul een geldig e-mailadres in.",
    errorEmailMax: "E-mailadres mag maximaal 255 tekens zijn.",
  },

  bedankt: {
    heroTitle: "Hartelijk dank",
    heroIntro:
      "Uw bericht is goed bij ons aangekomen. Fijn dat u de stap heeft gezet — wij nemen het graag rustig met u door.",

    stepsEyebrow: "Wat gebeurt er nu?",
    stepsTitle: "U hoeft verder even niets te doen",
    steps: [
      {
        // Beloofde eerder "een bevestiging in uw mailbox" met "de gids als bijlage".
        // Allebei niet waar: de gids wordt nooit als bijlage verstuurd (er is nog
        // geen PDF), en de bevestigingsmail komt pas aan zodra erfeniswijzer.nl in
        // Resend geverifieerd is. Deze tekst belooft alleen wat er echt gebeurt.
        title: "Uw bericht staat genoteerd",
        text: "Wij hebben uw gegevens goed ontvangen en kijken er persoonlijk naar.",
      },
      {
        title: "Persoonlijk contact",
        text: "Binnen één werkdag nemen wij rustig en vrijblijvend contact met u op.",
      },
      {
        title: "Samen verder kijken",
        text: "We bespreken uw situatie en wensen, en vertellen hoe wij u kunnen ontzorgen.",
      },
    ],

    ctaKennisbank: "Lees onze kennisbank",
    ctaHome: "Terug naar home",
  },

  check: {
    heroEyebrow: "Gratis nalatenschapscheck",
    heroTitle: "Hoe goed is uw nalatenschap eigenlijk geregeld?",
    heroIntro:
      "Beantwoord vijf eenvoudige vragen en ontdek waar u staat. U ziet uw uitslag direct op het scherm.",
    startLabel: "Start uw persoonlijke nalatenschapscheck",
    disclaimer:
      "De check is gratis en vrijblijvend. Uw antwoorden blijven in uw eigen browser en worden niet opgeslagen of verstuurd.",

    progressLabel: "Vraag",
    ofLabel: "van",
    back: "Vorige vraag",
    restart: "Opnieuw beginnen",

    answerYes: "Ja",
    answerPartly: "Deels",
    answerNo: "Nee, nog niet",

    questions: [
      {
        title: "Heeft u een testament dat past bij uw huidige situatie?",
        help: "Denk aan wijzigingen zoals een nieuwe relatie, kinderen, een woning of een eigen bedrijf.",
        advice:
          "Leg vast wie wat erft. Een actueel testament voorkomt onduidelijkheid en zorgt dat uw wensen écht worden uitgevoerd.",
      },
      {
        title: "Heeft u een levenstestament of volmacht geregeld?",
        help: "Hierin legt u vast wie beslist over uw financiën en zorg als u dat zelf even niet meer kunt.",
        advice:
          "Met een levenstestament houdt u de regie, ook op momenten dat u zelf niet meer kunt beslissen.",
      },
      {
        title: "Zijn uw belangrijke documenten overzichtelijk op één plek te vinden?",
        help: "Polissen, bankgegevens, abonnementen, wachtwoorden en contactpersonen.",
        advice:
          "Breng uw documenten en gegevens samen in één dossier, zodat uw naasten later niet hoeven te zoeken.",
      },
      {
        title: "Weten uw naasten wat uw wensen zijn bij ziekte en na uw overlijden?",
        help: "Van medische wensen tot de uitvaart en persoonlijke bezittingen.",
        advice:
          "Zet uw wensen op papier en bespreek ze. Dat geeft uw naasten houvast op een moeilijk moment.",
      },
      {
        title: "Heeft u nagedacht over erfbelasting en een eerlijke verdeling?",
        help: "Denk aan schenkingen bij leven, vrijstellingen en de verdeling tussen erfgenamen.",
        advice:
          "Met tijdig advies bespaart u op een eerlijke manier erfbelasting en voorkomt u discussie tussen erfgenamen.",
      },
    ],

    resultEyebrow: "Uw uitslag",
    scoreSuffix: "van de 5 punten",
    levels: [
      {
        title: "Er is nog veel te winnen",
        text: "Op dit moment is er nog weinig vastgelegd. Dat betekent dat uw naasten later veel moeten uitzoeken. Goed nieuws: met een paar stappen brengt u daar snel rust en overzicht in.",
      },
      {
        title: "U bent goed op weg",
        text: "Een deel is geregeld, maar op belangrijke punten ontbreekt nog duidelijkheid. Juist die punten zorgen later vaak voor onzekerheid bij nabestaanden.",
      },
      {
        title: "Uw zaken zijn goed geregeld",
        text: "U heeft de belangrijkste zaken vastgelegd. Een periodieke controle blijft verstandig, want uw situatie en de regels veranderen.",
      },
    ],
    adviceTitle: "Waar u nog winst kunt behalen",
    allGoodTitle: "Mooi geregeld",
    allGoodText:
      "U heeft alle vijf de onderwerpen op orde. Wij kijken graag een keer met u mee of alles nog aansluit bij uw huidige situatie.",

    ctaTitle: "Wilt u weten wat er in úw situatie past?",
    ctaText:
      "In een vrijblijvend adviesgesprek nemen we uw uitslag rustig met u door en vertellen we welke stappen zinvol zijn.",
    ctaPrimary: "Gratis adviesgesprek aanvragen",
    ctaSecondary: "Bekijk het Persoonlijk Levensdossier",
  },
};

const en = {
  ...nl,
  lang: "en" as Lang,
  nav: {
    home: "Home",
    onzeBegeleiding: "Our guidance",
    bijLevenRegelen: "Plan ahead",
    hulpNaOverlijden: "Help after a death",
    executeurschap: "Executor services",
    mediation: "Estate mediation",
    erfbelasting: "Inheritance tax & filing",
    hulpBijErfenis: "Inheritance support",
    kennisbank: "Knowledge base",
    overOns: "About us",
    onsTeam: "Our team",
    contact: "Contact",
    gratisGids: "Free guide",
  },
  header: {
    cta: "Schedule a call",
    callCta: "Call us",
    openMenu: "Open menu",
    languageLabel: "Choose language",
  },
  footer: {
    tagline: "Clarity about your estate. Peace of mind for your loved ones.",
    quickLinks: "Quick links",
    contactTitle: "Contact",
    hours: "Mon-Fri 9:00 AM - 5:00 PM",
    copyright: "All rights reserved.",
    copyrightName: "The Inheritance Guide.",
    privacy: "Privacy policy",
    terms: "Terms and conditions",
    slogan: "Your estate, properly arranged",
  },
  cta: {
    defaultTitle: "Take the first step today",
    defaultText:
      "Do you want to arrange your estate properly, or do you need help after someone has died? Do not wait until the questions pile up. Tell us what is going on, and together we will see what you need.",
    defaultLabel: "Schedule a free introductory call",
    defaultContentHeroLabel: "Request a free consultation",
  },
  home: {
    ...nl.home,
    heroEyebrow: "Your estate, properly arranged",
    heroTitle: "The Inheritance Guide",
    heroIntro:
      "Personal guidance for preparing your estate and settling an inheritance. We take practical worries off your hands, so you and your loved ones can move forward with peace of mind.",
    heroCta: "I want to prepare my estate",
    heroSecondary: "I need help after a death",
    questionsEyebrow: "Guidance after a death",
    questionsTitle: "After the farewell, the searching often begins",
    questionsPrev: "Previous questions",
    questionsNext: "Next questions",
    questionsIntro:
      "A death does not only bring life to a halt. It also brings a long list of questions. In a period of grief, relatives are suddenly expected to keep an overview and take action.",
    questions: [
      "Where are the important documents?",
      "Which organisations need to be informed?",
      "Who are the heirs, and who may make decisions?",
      "What happens to subscriptions, accounts and digital assets?",
      "Which bank accounts, insurance policies and debts exist?",
      "What happens to the home and its contents?",
      "When does the inheritance tax return need to be filed?",
    ],
    questionsOutro:
      "The Inheritance Guide helps you map out the entire situation, gives clarity about what needs to be arranged and guides you step by step through settling the estate.",
    helpEyebrow: "Guidance after a death",
    helpTitle: "After the farewell, the searching often begins",
    helpIntro:
      "A death does not only bring life to a halt. It also brings a long list of questions. In a period of grief, relatives are suddenly expected to keep an overview and take action.",
    helpNetwork:
      "The Inheritance Guide helps you map out the entire situation, gives clarity about what needs to be arranged and guides you step by step through settling the estate.",
    helpItems: [
      "Where are the important documents?",
      "Which organisations need to be informed?",
      "Who are the heirs, and who may make decisions?",
      "What happens to subscriptions, accounts and digital assets?",
      "Which bank accounts, insurance policies and debts exist?",
      "What happens to the home and its contents?",
      "When does the inheritance tax return need to be filed?",
    ],
    helpCta: "View our guidance after a death",
    prepEyebrow: "Arrange things in advance",
    prepTitle: "Many worries later can be prevented today",
    prepIntro:
      "By clearly recording your estate and personal wishes now, you prevent others from having to search or decide later. Together we map out the important information and documents and bring them together in a personal estate file.",
    prepItems: [
      "Overview of your financial and administrative affairs",
      "Your wishes during illness and after death",
      "Everything clearly in one place",
      "Support for your loved ones",
    ],
    prepCta: "View the personal estate file",
    whyEyebrow: "Why The Inheritance Guide?",
    whyTitle: "Estate planning as a final act of love and care",
    whyIntro:
      "No one likes to think about death. Yet it is something we all face eventually. By arranging a number of matters properly now, you prevent uncertainty and unnecessary worry for your loved ones later.",
    reasons: [
      {
        title: "Peace and clarity",
        text: "Gain clear insight into your estate and know that the important matters have been properly arranged.",
      },
      {
        title: "Prevent conflict",
        text: "Clear agreements prevent unnecessary disputes and tension within the family.",
      },
      {
        title: "Security for later",
        text: "Bring your important affairs together clearly, so nothing is forgotten and everything is easy to find.",
      },
      {
        title: "Personal experts",
        text: "Guidance from experienced specialists who listen carefully to your story.",
      },
    ],
    servicesEyebrow: "Our guidance",
    servicesTitle: "The Inheritance Guide: one point of contact for your estate",
    servicesIntro:
      "Whether you want to arrange matters for later or need to settle an inheritance: The Inheritance Guide maps out what needs to happen, guides you through every step and involves the right specialist where needed. This gives you clarity and one trusted point of contact.",
    services: [
      {
        title: "Plan ahead",
        text: "Together we map out your personal situation, important documents and wishes, so your estate is arranged with care.",
        to: "/bij-leven-regelen",
      },
      {
        title: "Help after a death",
        text: "Practical guidance with settling an estate. We help you step by step, so you know what needs to be arranged.",
        to: "/hulp-bij-erfenis",
      },
      {
        title: "Executor services",
        text: "Need an independent executor? We guide the settlement of the estate carefully and according to the wishes of the deceased.",
        to: "/executeurschap",
      },
      {
        title: "Inheritance tax & filing",
        text: "We guide you through the inheritance tax return and help ensure a careful and fiscally responsible settlement.",
        to: "/erfbelasting-aangifte",
      },
    ],
    certTitle: "Our certifications and partners",
    certifications: [
      { caption: "ICR Certified Coach Register (ISO 9001 / ISO 17024)" },
      { caption: "ICA Associate Member (Compliance & Integrity)" },
      { caption: "ADR Quality Register (ISO 9001 / ISO 17024)" },
    ],
    scanEyebrow: "Free estate check",
    scanTitle: "Do you know how well your estate is arranged?",
    scanCompactText: "Answer five simple questions and discover where you stand.",
    scanCompactCta: "Start your free estate check",
    scanIntro:
      "Many people think everything is clear until they ask themselves a few concrete questions. With the free Estate Check, you discover in 2 minutes what is already well arranged and what may still need attention.",
    scanBullets: [
      "Only 5 short questions",
      "Immediate insight into your situation",
      "No obligation",
    ],
    scanCta: "Start your personal estate check",
    servicesMore: "More information",
    scanCardFooter: "You will see your personal overview directly on screen.",
    scanCardTitle: "Estate check",
    scanCardSub: "5 questions · 2 minutes · free",
    scanCardItems: [
      "Does your will still match your situation?",
      "Do you have a living will or power of attorney?",
      "Can your important documents be found?",
      "Do your loved ones know your wishes?",
      "Do you have insight into inheritance tax?",
    ],
    finalCtaTitle: "Do not postpone important matters until others have to solve them",
    finalCtaText:
      "Whether you are looking ahead or are in the middle of settling an inheritance, a first conversation can quickly bring peace and clarity.",
    finalCtaText2:
      "Tell us what is going on. Together we will see which guidance fits your situation.",
    finalCtaPrimary: "Schedule a free consultation",
  },
  hulp: {
    ...nl.hulp,
    heroEyebrow: "For relatives & executors",
    heroTitle: "We take worries off your hands",
    heroIntro:
      "Losing a loved one is hard enough. You do not have to carry the burden of settling the inheritance alone. We guide you through every step with warmth and expertise.",
    introEyebrow: "Guidance for relatives",
    introTitle: "Calm and clarity in a difficult period",
    introText:
      "During a period of grief, a lot comes at you. We bring calm and clarity, take practical matters off your hands and guide you step by step through settling the estate. This leaves room for farewell and healing.",
    sectionEyebrow: "A heavy task at a heavy moment",
    sectionTitle: "You do not have to do it alone",
    sectionText1:
      "After the loss of a loved one, many things suddenly need to be arranged: first the funeral, then the administration, the home and the inheritance. You have to deal with banks, insurers, notaries and other organisations while you need space for grief.",
    sectionText2:
      "We help you keep the overview and guide you step by step. As your steady point of contact, we take practical worries off your hands and involve the right specialists where needed.",
    burdensTitle: "Where we can support you",
    burdens: [
      "Arranging the funeral and related administration",
      "Informing banks, insurers and government bodies",
      "Mapping assets, debts and insurance policies",
      "Cancelling subscriptions, memberships and insurance policies",
      "Arranging matters around the home and its contents",
      "Involving notaries, estate agents and other specialists",
      "Handling digital accounts and online legacy",
      "Heir research and contact with heirs",
      "Inheritance tax return and payment",
      "Distribution of the estate",
    ],
    servicesEyebrow: "Tailored to your wishes",
    servicesTitle: "Choose the guidance that fits you",
    servicesIntro:
      "Every estate and every family is different. That is why you can leave certain matters to us or arrange them together with us. We tailor our guidance to what you need.",
    services: [
      {
        title: "Complete settlement of the estate",
        text: "Would you like to hand over as much of the practical settlement as possible? We keep the overview, maintain contact with all parties involved and make sure the necessary steps are completed with care.",
      },
      {
        title: "Guidance for relatives",
        text: "Would you like to stay involved, but need clarity and expert support? We guide you step by step, answer your questions and help with the matters that need to be arranged.",
      },
      {
        title: "Inheritance tax and filing",
        text: "We help collect the necessary information and guide the inheritance tax return. Where specialist tax expertise is needed, we involve a qualified adviser.",
      },
      {
        title: "Mediation in family conflicts",
        text: "An estate can intensify existing tensions or cause new disagreements. We help clarify interests and agreements and guide the conversation. If needed, we involve a specialised mediator.",
      },
    ],
    ctaTitle: "Leave the worries to us",
    ctaText:
      "Schedule a free, no-obligation consultation. We listen to your situation and calmly explain how we can help.",
  },
  bijleven: {
    ...nl.bijleven,
    heroEyebrow: "Clarity for later starts today",
    heroTitle: "Your estate fully mapped out",
    heroIntro:
      "By recording your personal wishes, important documents and financial information now, you give your loved ones clarity at a moment when they need it most.",
    heroCta: "Start with a personal consultation",
    whyEyebrow: "Why arrange it now?",
    whyTitle: "Will your loved ones know where to begin?",
    whyText:
      "As long as you can explain everything yourself, it may not seem like a problem. But in sudden illness or after death, your loved ones have to start searching, while they may not know what has been arranged or what your wishes were.",
    whyText2:
      "We help you create a complete overview now, so you stay in control and your loved ones have guidance later.",
    benefitsTitle: "What it gives you",
    benefits: [
      "Prevent uncertainty, conflict and stress for your loved ones",
      "Save inheritance tax in a fair way",
      "Stay in control of your assets and care",
      "The peace of knowing everything is properly recorded",
    ],
    overviewEyebrow: "Mapped out together",
    overviewTitle: "Together we bring everything clearly into view",
    overviewText:
      "Your administration, financial affairs and personal wishes are often spread across different places. Think of bank accounts, insurance policies, subscriptions, important documents and contact persons. Together we bring everything together and record what your loved ones need to know later.",
    overviewListTitle: "What it gives you",
    overviewList: [
      "A complete overview of your personal, financial and administrative affairs",
      "Important information and documents clearly in one place",
      "Clarity about your wishes during illness and after death",
      "Less worry and uncertainty for your loved ones",
      "Peace for yourself, because you know everything is properly recorded",
    ],
    checkEyebrow: "Free estate check",
    checkTitle: "How well is your estate actually arranged?",
    checkSubtitle: "Take the free estate check",
    checkText: "Answer five simple questions and discover where you stand.",
    checkCta: "Start your personal estate check",
    dossierEyebrow: "Everything in one place",
    dossierTitle: "Your personal estate file",
    dossierText1:
      "Together we map out your assets, debts, insurance policies, important documents, contact persons, heirs and personal wishes. You receive a clear file that helps your loved ones when they need it.",
    dossierText2:
      "After preparing it, we discuss what still needs attention. If a will, living will or specialist advice is needed, we help you with the next step.",
    dossierList: [
      "Your personal and financial situation clearly mapped out",
      "Important documents gathered in one clear place",
      "Insight into assets, debts and insurance policies",
      "Your wishes and important contact persons recorded",
      "Personal guidance from start to finish",
    ],
    priceTitle: "Complete Estate File for €599",
    priceItems: [
      "A complete overview of your personal, financial and administrative affairs",
      "Full insight into assets, debts and insurance policies",
      "All important documents clearly in one place",
      "Your wishes during illness and after death clearly recorded",
      "Option to prepare a will or living will",
      "Personal guidance from start to finish",
      "Clarity for your loved ones",
    ],
    priceText: "Do you have questions? We would be happy to meet and explain how we work.",
    priceCta: "Discuss your situation",
    quote: "Record today what you may not be able to explain later.",
    ctaLabel: "Start with a personal consultation",
  },
  executeurschap: {
    ...nl.executeurschap,
    heroEyebrow: "Independent executor services",
    heroTitle: "Settlement in trusted hands",
    heroIntro:
      "Need an independent executor? We guide the settlement of the estate carefully and fully in line with the wishes of the deceased.",
    heroCta: "Request a no-obligation consultation",
    whyEyebrow: "Why an executor?",
    whyTitle: "A neutral coordinator for the estate",
    whyText:
      "As executor, we take responsibility for settling the estate. This gives heirs room to breathe and ensures sensitive decisions are guided by an independent party.",
    benefitsTitle: "What we arrange for you",
    benefits: [
      "Inventory of assets, debts and obligations",
      "Contact with organisations, banks and the notary",
      "Management and practical settlement of the estate",
      "Clear communication with all heirs",
    ],
    topicsEyebrow: "Our approach",
    topicsTitle: "Careful, transparent and in line with the wishes",
    topics: [
      {
        title: "Independent",
        text: "As a neutral party, we act without personal interest, purely in the interest of the estate and the wishes of the deceased.",
      },
      {
        title: "Fully supported",
        text: "From administration to distribution: we take practical and legal tasks off your hands.",
      },
      {
        title: "Clear communication",
        text: "You and the heirs always know where you stand, in plain language and in good time.",
      },
    ],
    ctaTitle: "Need an independent executor?",
    ctaText:
      "In a no-obligation conversation, we discuss your situation and explain how we can fulfil the executor role with care.",
    ctaLabel: "Schedule a no-obligation call",
  },
  mediation: {
    ...nl.mediation,
    heroEyebrow: "Estate mediation",
    heroTitle: "Finding a solution together",
    heroIntro:
      "Disagreements between heirs? As independent mediators, we guide the conversation toward a solution everyone can support.",
    heroCta: "Request a no-obligation consultation",
    whyEyebrow: "Why mediation?",
    whyTitle: "Prevent a family rupture",
    whyText:
      "Emotions can run high around an estate. An independent mediator helps keep the conversation open, remove misunderstandings and reach agreements that do justice to everyone.",
    benefitsTitle: "What mediation gives you",
    benefits: [
      "Room for everyone's story and interests",
      "Clear agreements about practical and financial matters",
      "Less risk of escalation or legal proceedings",
      "A solution that preserves relationships as much as possible",
    ],
    topicsEyebrow: "Our approach",
    topicsTitle: "Calm, confidential and solution-focused",
    topics: [
      {
        title: "Impartial",
        text: "We do not take sides, but guide the conversation so everyone is heard.",
      },
      {
        title: "Confidential",
        text: "Everything discussed remains within the mediation. That creates room for honesty.",
      },
      {
        title: "Solution-focused",
        text: "We work toward concrete, supported agreements that preserve relationships as much as possible.",
      },
    ],
    ctaTitle: "Stuck around an inheritance?",
    ctaText:
      "In a no-obligation conversation, we explore whether mediation fits your situation and how we can help.",
    ctaLabel: "Schedule a no-obligation call",
  },
  erfbelasting: {
    ...nl.erfbelasting,
    heroEyebrow: "Inheritance tax & filing",
    heroTitle: "Careful and fiscally responsible",
    heroIntro:
      "We guide you through the inheritance tax return and help ensure a careful and fiscally responsible settlement of the estate.",
    heroCta: "Request a no-obligation consultation",
    whyEyebrow: "Why guidance?",
    whyTitle: "Avoid mistakes and do not pay too much",
    whyText:
      "The inheritance tax return is subject to strict rules and deadlines. We ensure a correct, timely filing and look at where inheritance tax can be limited within the rules.",
    benefitsTitle: "What we help you with",
    benefits: [
      "Correct and timely inheritance tax filing",
      "Overview of exemptions and rates",
      "Valuation of assets and the family home",
      "Fiscally responsible advice within the rules",
    ],
    topicsEyebrow: "Our approach",
    topicsTitle: "Clear, correct and on time",
    topics: [
      {
        title: "Complete filing",
        text: "We handle the inheritance tax return from start to finish, so you do not have to worry about it.",
      },
      {
        title: "Tax-aware",
        text: "We use exemptions and options within the rules, so as much as possible remains for the heirs.",
      },
      {
        title: "Arranged on time",
        text: "We monitor the Tax Administration's deadlines, so you are not caught by surprise.",
      },
    ],
    ctaTitle: "Need help with the inheritance tax return?",
    ctaText:
      "In a no-obligation conversation, we look at your situation and explain how we can handle the filing and settlement for you.",
    ctaLabel: "Schedule a no-obligation call",
  },
  kennisbank: {
    ...nl.kennisbank,
    heroEyebrow: "Knowledge & insight",
    heroTitle: "Inheritance & Estate Knowledge Base",
    heroIntro:
      "Practical articles and clear explanations to help you become better informed. Understandable answers to the most frequently asked questions about estates and inheritance.",
    heroCta: "Ask your question in a free consultation",
    filterAll: "All articles",
    filterPrep: "Preparation",
    filterSettle: "Settlement",
    categoryPrep: "Preparation",
    categorySettle: "Settlement",
    readingTime: "read",
    readMore: "Read more",
    articles: [
      {
        title: "What exactly does an executor do?",
        excerpt: "The duties, responsibilities and powers of an executor clearly explained.",
        category: "afwikkeling" as const,
        readingTime: "5 min",
      },
      {
        title: "How does inheritance tax work?",
        excerpt: "Who pays how much, which exemptions apply and how do you file a return?",
        category: "afwikkeling" as const,
        readingTime: "6 min",
      },
      {
        title: "Living will: why is it important?",
        excerpt:
          "Arrange during your lifetime who may decide on your behalf if you can no longer do so.",
        category: "voorbereiding" as const,
        readingTime: "4 min",
      },
      {
        title: "Estate planning in a blended family",
        excerpt: "Prevent unintended consequences and make sure everyone is treated fairly.",
        category: "voorbereiding" as const,
        readingTime: "7 min",
      },
      {
        title: "What to do after a death: the checklist",
        excerpt: "A clear step-by-step plan for the first days and weeks after a death.",
        category: "afwikkeling" as const,
        readingTime: "5 min",
      },
      {
        title: "Crypto and digital assets in an inheritance",
        excerpt: "How do you deal with cryptocurrency, accounts and digital assets in an estate?",
        category: "voorbereiding" as const,
        readingTime: "6 min",
      },
      {
        title: "Gifting during life: saving wisely and fairly",
        excerpt: "How gifts can reduce inheritance tax, fully within the rules.",
        category: "voorbereiding" as const,
        readingTime: "5 min",
      },
      {
        title: "Dividing an inheritance without conflict",
        excerpt: "Practical tips for dividing an estate fairly and in harmony.",
        category: "afwikkeling" as const,
        readingTime: "6 min",
      },
    ],
    ctaTitle: "Prefer personal advice?",
    ctaText:
      "Our knowledge base helps you get started, but every situation is different. Feel free to ask your question in a free, no-obligation consultation.",
  },
  overOns: {
    ...nl.overOns,
    heroEyebrow: "Who we are",
    heroTitle: "Meet our team of specialists",
    heroIntro:
      "At The Inheritance Guide, you are not alone. We work with executors, tax advisers, notaries, mediators, wealth advisers and other experts, each contributing their own expertise to your estate.",
    teamEyebrow: "Who we are",
    teamTitle: "Meet our team of specialists",
    teamIntro:
      "At The Inheritance Guide, you are not alone. We work with notaries, executors, tax advisers, mediators and other experts, each contributing their own expertise to your estate.",
    teamPortrait: "Portrait of",
    team: [
      {
        name: "Zainul Habieb",
        role: "Founder & owner of The Inheritance Guide",
        bio: "Zainul Habieb is founder and owner of The Inheritance Guide and a certified estate coach. In your file, he brings together the different parts of an estate, keeps the overview and guides clients throughout the entire process. Where specialist knowledge is needed, he ensures the right expert is involved, so clients keep one central point of contact while receiving the right expertise.",
      },
      {
        name: "Gerard van de Kerkhof",
        role: "Registered mediator & adviser",
        bio: "Gerard van de Kerkhof is director of the recognised training institute VCM Opleiders. He is a fully certified ADR registered mediator and trainer. Decades of practical experience in mediation, conflict coaching and professional communication help Gerard quickly understand every situation. Within The Inheritance Guide, Gerard advises on estate matters and mediation.",
      },
      {
        name: "Mark van Geffen",
        role: "Estate tax adviser",
        bio: "Mark van Geffen is owner of Quintax Belastingadviseurs and a tax adviser. Within The Inheritance Guide, he advises on tax questions around estates, including inheritance tax returns, gift tax and the fiscal consequences of transferring wealth. He helps clients arrange the tax side of their estate carefully and clearly.",
      },
      {
        name: "Hans Sanders",
        role: "Business & digital estate",
        bio: "Hans Sanders is managing director of Radeac Accountants & Adviseurs and has broad experience in finance, operations and strategic business issues. He is also an estate coach and executor. Within the estate domain, his specialisms include business succession, business assets and digital legacy.",
      },
      {
        name: "Yussuf Abdi",
        role: "Lawyer",
        bio: "Yussuf Abdi is a lawyer and founder of Abdi Juristen. He has broad experience in the legal sector and is known for his personal and careful approach. Within The Inheritance Guide, his legal expertise is available for questions involving rights, liability, representation of interests and other legal aspects around an estate.",
      },
      {
        name: "Errol Moennoe",
        role: "Pension and wealth adviser",
        bio: "Errol Moennoe is owner of Hyposervice Finance. As a financial adviser, he brings the financial side of life and legacy into focus for The Inheritance Guide. He advises on mortgages, insurance, pensions and wealth planning. Errol is also active as an executor. That combination makes him a valuable specialist for people who want to arrange their affairs during life and for relatives facing financial choices after a death.",
      },
    ],
    valuesEyebrow: "Our values",
    valuesTitle: "What we stand for",
    values: [
      {
        title: "Personal attention",
        text: "Behind every file is a person and a story. We truly listen and take the time for you.",
      },
      {
        title: "Expertise",
        text: "Deep knowledge of inheritance law and taxation, translated into clear, understandable language.",
      },
      {
        title: "Calm & clarity",
        text: "We bring overview and calm, so you always know where you stand.",
      },
    ],
  },
  contact: {
    ...nl.contact,
    heroEyebrow: "We listen",
    heroTitle: "Contact us",
    heroIntro:
      "Do you have a question or would you like to discuss your situation without obligation? Feel free to contact us or schedule a call, by phone or simply at your home over coffee.",
    directEyebrow: "Direct contact",
    directTitle: "Personal and without obligation",
    directText:
      "Do you have a question or would you like to get acquainted? We take the time for your situation and are happy to think along with you.",
    details: [
      { label: "Phone", value: "085 - 000 00 00", href: "tel:+31850000000" },
      { label: "Email", value: "info@erfeniswijzer.nl", href: "mailto:info@erfeniswijzer.nl" },
      { label: "Service area", value: "All of the Netherlands" },
      { label: "Availability", value: "Mon-Fri 9:00 AM - 5:00 PM" },
    ],
    homeVisitTitle: "Prefer a home visit?",
    homeVisitText:
      "In a familiar environment, it is often easier to talk about this sensitive subject. If desired, we are happy to visit you.",
    formTitle: "Send us a message",
    formSubtitle: "Fill in the form and we will contact you within one business day.",
    fieldName: "Name",
    fieldNamePlaceholder: "Your name",
    fieldPhone: "Phone",
    fieldPhonePlaceholder: "06 - 12 34 56 78",
    fieldEmail: "Email",
    fieldEmailPlaceholder: "you@email.com",
    fieldSubject: "What is it about?",
    subjectOptions: [
      { value: "hulp-na-overlijden", label: "Help after a death" },
      { value: "bij-leven-regelen", label: "Plan ahead" },
      { value: "anders", label: "Other" },
    ] satisfies readonly { value: ContactSubject; label: string }[],
    fieldMessage: "Message",
    fieldMessagePlaceholder: "Tell us briefly how we can help...",
    submitLabel: "Send message",
    privacy: "We handle your information carefully and confidentially.",
    privacyLink: "Read more in our privacy policy.",
    mapArea: "Our service area",
    mapNote: "We work throughout the Netherlands and are happy to visit you at home.",
    mapLink: "See how we can help you",
    mapTitle: "Map of The Inheritance Guide's service area in the Netherlands",
    submitPending: "Sending...",
    toastTitle: "Thank you! Your message has been sent.",
    toastDesc: "We will contact you personally within one business day.",
    errorToastTitle: "Sending failed",
    errorToastDesc:
      "Something went wrong on our side. Please try again shortly, or email us directly at info@erfeniswijzer.nl.",
    errorName: "Please enter your name.",
    errorNameMax: "Name may be at most 100 characters.",
    errorPhone: "Please enter a valid phone number.",
    errorPhoneMax: "Phone number may be at most 20 characters.",
    errorPhoneFormat: "Use only digits and + ( ) - characters.",
    errorEmail: "Please enter a valid email address.",
    errorEmailMax: "Email address may be at most 255 characters.",
    errorSubject: "Please choose an option.",
    errorMessage: "Tell us briefly how we can help.",
    errorMessageMax: "Message may be at most 1500 characters.",
  },
  gratisGids: {
    ...nl.gratisGids,
    heroEyebrow: "Free download",
    heroTitle: "Download the free Erfeniswijzer Guide",
    heroIntro:
      "A practical checklist plus clear explanations of the most important steps around estates and inheritance. This helps you take the first step calmly today.",
    heroBullets: [
      "Directly in your inbox - no obligation",
      "Written in understandable language",
      "Prepared by experienced specialists",
    ],
    formTitle: "Send me the free guide",
    formSubtitle: "Fill in your name and email address and we will send you the guide directly.",
    fieldName: "Name",
    fieldNamePlaceholder: "Your name",
    fieldEmail: "Email",
    fieldEmailPlaceholder: "you@email.com",
    submitLabel: "Download the free guide",
    privacy: "We handle your information carefully and confidentially.",
    submitPending: "Sending...",
    toastTitle: "Done! The guide is on its way.",
    toastDesc: "You will receive the Erfeniswijzer Guide by email within a few minutes.",
    errorToastTitle: "Request failed",
    errorToastDesc:
      "Something went wrong on our side. Please try again shortly, or email us directly at info@erfeniswijzer.nl.",
    contentsEyebrow: "A preview",
    contentsTitle: "What is in the guide?",
    contentsIntro: "Everything you need to begin with confidence - clear and without jargon.",
    contents: [
      {
        title: "Complete checklist",
        text: "A step-by-step overview of everything you can arrange, so nothing is overlooked.",
      },
      {
        title: "Explanation per document",
        text: "Clear explanation of wills, living wills and powers of attorney in plain language.",
      },
      {
        title: "Reducing inheritance tax",
        text: "Practical tips to reduce inheritance tax fairly and within the rules.",
      },
      {
        title: "Talking with family",
        text: "Guidance for discussing inheritance openly and without unnecessary tension.",
      },
    ],
    errorName: "Please enter your name.",
    errorNameMax: "Name may be at most 100 characters.",
    errorEmail: "Please enter a valid email address.",
    errorEmailMax: "Email address may be at most 255 characters.",
  },
  bedankt: {
    ...nl.bedankt,
    heroTitle: "Thank you",
    heroIntro:
      "Your message has reached us safely. We appreciate that you took this step, and we will calmly go through it with you.",
    stepsEyebrow: "What happens now?",
    stepsTitle: "You do not need to do anything else for now",
    steps: [
      {
        title: "Your message has been noted",
        text: "We have received your details and will review them personally.",
      },
      {
        title: "Personal contact",
        text: "Within one business day, we will contact you calmly and without obligation.",
      },
      {
        title: "Looking ahead together",
        text: "We discuss your situation and wishes, and explain how we can relieve you.",
      },
    ],
    ctaKennisbank: "Read our knowledge base",
    ctaHome: "Back to home",
  },
  check: {
    ...nl.check,
    heroEyebrow: "Free estate check",
    heroTitle: "How well is your estate actually arranged?",
    heroIntro:
      "Answer five simple questions and discover where you stand. You will see your result directly on screen.",
    startLabel: "Start your personal estate check",
    disclaimer:
      "The check is free and without obligation. Your answers remain in your own browser and are not stored or sent.",
    progressLabel: "Question",
    ofLabel: "of",
    back: "Previous question",
    restart: "Start again",
    answerYes: "Yes",
    answerPartly: "Partly",
    answerNo: "No, not yet",
    questions: [
      {
        title: "Do you have a will that fits your current situation?",
        help: "Think of changes such as a new relationship, children, a home or your own business.",
        advice:
          "Record who inherits what. An up-to-date will prevents uncertainty and ensures your wishes are truly carried out.",
      },
      {
        title: "Have you arranged a living will or power of attorney?",
        help: "This records who may decide about your finances and care if you temporarily cannot do so yourself.",
        advice:
          "With a living will, you stay in control, even at moments when you can no longer decide for yourself.",
      },
      {
        title: "Can your important documents be found clearly in one place?",
        help: "Policies, bank details, subscriptions, passwords and contact persons.",
        advice:
          "Bring your documents and details together in one file, so your loved ones do not have to search later.",
      },
      {
        title: "Do your loved ones know your wishes during illness and after your death?",
        help: "From medical wishes to the funeral and personal belongings.",
        advice:
          "Put your wishes in writing and discuss them. That gives your loved ones support at a difficult moment.",
      },
      {
        title: "Have you thought about inheritance tax and a fair distribution?",
        help: "Think of lifetime gifts, exemptions and distribution among heirs.",
        advice:
          "Timely advice can fairly reduce inheritance tax and prevent discussion among heirs.",
      },
    ],
    resultEyebrow: "Your result",
    scoreSuffix: "out of 5 points",
    levels: [
      {
        title: "There is still a lot to gain",
        text: "At the moment, little has been recorded. That means your loved ones may have to sort out a lot later. The good news: with a few steps, you can quickly bring calm and clarity.",
      },
      {
        title: "You are well on your way",
        text: "Part of it is arranged, but important points still lack clarity. Those points often create uncertainty for relatives later.",
      },
      {
        title: "Your affairs are well arranged",
        text: "You have recorded the most important matters. A periodic review remains wise, because your situation and the rules can change.",
      },
    ],
    adviceTitle: "Where you can still improve",
    allGoodTitle: "Nicely arranged",
    allGoodText:
      "You have all five topics in order. We would be happy to look along once to see whether everything still fits your current situation.",
    ctaTitle: "Would you like to know what fits your situation?",
    ctaText:
      "In a no-obligation consultation, we calmly discuss your result and explain which steps make sense.",
    ctaPrimary: "Request a free consultation",
    ctaSecondary: "View the Personal Life File",
  },
} satisfies typeof nl;

export const translations = { nl, en } as const;
export type Translations = typeof nl;
