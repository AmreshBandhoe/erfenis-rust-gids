export type ArticleCategory = "voorbereiding" | "afwikkeling";

export interface ArticleSection {
  heading?: string;
  paragraphs: string[];
}

export interface KnowledgeArticle {
  slug: string;
  title: string;
  excerpt: string;
  category: ArticleCategory;
  readingTime: string;
  sections: ArticleSection[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const knowledgeArticles: KnowledgeArticle[] = [
  {
    slug: "wat-doet-een-executeur-precies",
    title: "Wat doet een executeur precies?",
    excerpt:
      "Na een overlijden komen er veel zaken tegelijk op de nabestaanden af. Een executeur kan het beheer van de nalatenschap op zich nemen en zo structuur brengen in de afwikkeling.…",
    category: "afwikkeling",
    readingTime: "3 min",
    sections: [
      {
        paragraphs: [
          "Na een overlijden komen er veel zaken tegelijk op de nabestaanden af. Een executeur kan het beheer van de nalatenschap op zich nemen en zo structuur brengen in de afwikkeling. Maar wat mag een executeur precies doen? Dat hangt af van de wet én van wat de overledene in het testament heeft bepaald.",
        ],
      },
      {
        heading: "De belangrijkste taken",
        paragraphs: [
          "Een executeur wordt in een testament benoemd en moet die benoeming aanvaarden. Meestal brengt de executeur de bezittingen en schulden in kaart, beheert hij de nalatenschap, betaalt hij de schulden die tijdens zijn beheer moeten worden voldaan en verzorgt hij de aangifte erfbelasting. Denk aan het verzamelen van bankgegevens, het opvragen van openstaande rekeningen en het contact met instanties. Soms krijgt de executeur in het testament ook de opdracht om de uitvaart te regelen.",
          "De executeur moet de erfgenamen informeren en uiteindelijk rekening en verantwoording afleggen. Een duidelijke boedelbeschrijving en een goed overzicht van inkomsten en uitgaven helpen daarbij.",
        ],
      },
      {
        heading: "Mag een executeur de erfenis verdelen?",
        paragraphs: [
          "Een gewone executeur beheert de nalatenschap en maakt haar klaar voor de verdeling. Hij beslist niet automatisch zelfstandig wie welke bezitting krijgt. De verdeling gebeurt in beginsel door de erfgenamen samen, met inachtneming van het testament en de wet. Heeft de overledene in het testament een verdergaande bevoegdheid geregeld, bijvoorbeeld een afwikkelingsbewind, dan kan de rol van de aangewezen persoon ruimer zijn. Laat daarom altijd het testament beoordelen voordat u uitgaat van de bevoegdheden van een executeur.",
          "Een notaris heeft weer een andere rol: die kan adviseren, documenten opstellen en zo nodig een verklaring van erfrecht verzorgen. De notaris neemt het beheer niet vanzelf over.",
        ],
      },
      {
        heading: "Wanneer is ondersteuning prettig?",
        paragraphs: [
          "Vooral wanneer er meerdere erfgenamen, een woning, een onderneming of onduidelijke schulden zijn, is een goed aanspreekpunt waardevol. De Erfeniswijzer helpt de werkzaamheden in kaart te brengen en de afwikkeling te organiseren. Voor vragen over de precieze bevoegdheden in een testament schakelen wij waar nodig een notaris in.",
          "Wilt u weten wie in uw situatie wat mag regelen? Neem contact op met De Erfeniswijzer.",
        ],
      },
    ],
  },
  {
    slug: "hoe-werkt-erfbelasting",
    title: "Hoe werkt erfbelasting?",
    excerpt:
      "Een erfenis ontvangen betekent niet automatisch dat u erfbelasting betaalt. Eerst moet duidelijk zijn wat u erft, wat daarvan de waarde is en welke vrijstelling voor u geldt. Pas…",
    category: "afwikkeling",
    readingTime: "3 min",
    sections: [
      {
        paragraphs: [
          "Een erfenis ontvangen betekent niet automatisch dat u erfbelasting betaalt. Eerst moet duidelijk zijn wat u erft, wat daarvan de waarde is en welke vrijstelling voor u geldt. Pas over het deel boven die vrijstelling kan erfbelasting verschuldigd zijn.",
        ],
      },
      {
        heading: "Van nalatenschap naar uw erfdeel",
        paragraphs: [
          "De nalatenschap bestaat uit bezittingen en schulden. Denk aan bankrekeningen, een woning, beleggingen en persoonlijke leningen. Voor de belasting is vervolgens van belang welk deel u uit de nalatenschap verkrijgt. De fiscale waarde van een woning kent eigen regels. Ook een uitkering uit een levensverzekering kan onder omstandigheden meetellen, zelfs als deze rechtstreeks aan een begunstigde wordt betaald. Daarom is een volledig overzicht nodig vóór u een berekening maakt.",
          "Iedere erfgenaam heeft een eigen vrijstelling. De hoogte hangt onder meer af van de relatie met de overledene. Partners hebben doorgaans een veel hogere vrijstelling dan kinderen; voor andere erfgenamen gelden weer andere bedragen. Over de belastbare verkrijging gelden tarieven die eveneens van de relatie en de hoogte van het bedrag afhangen. De Belastingdienst publiceert de bedragen per jaar van overlijden.",
        ],
      },
      {
        heading: "Wie doet aangifte en wanneer?",
        paragraphs: [
          "De Belastingdienst stuurt vaak een aangiftebrief. Ook zonder brief kan aangifte nodig zijn wanneer u meer verkrijgt dan de toepasselijke vrijstelling. Is er een executeur, dan verzorgt die doorgaans de aangifte. Anders stemmen de erfgenamen af wie dit oppakt.",
          "Bij een overlijden in 2026 ligt de inleverdatum in de aangiftebrief twintig maanden na de overlijdensdatum. Voor overlijdens in 2025 of eerder gold doorgaans een termijn van acht maanden. Kijk dus altijd naar het overlijdensjaar en de datum in de brief; een oude checklist kan u op het verkeerde spoor zetten.",
        ],
      },
      {
        heading: "Eerst overzicht, dan aangifte",
        paragraphs: [
          "Verzamel bankstanden, gegevens over de woning, schulden, schenkingen en eventuele verzekeringen. Leg ook vast wie erfgenaam is en wat ieder volgens het testament of de wet krijgt. De Erfeniswijzer helpt om deze informatie overzichtelijk te verzamelen en schakelt voor een complexe fiscale berekening zo nodig een fiscalist in.",
          "Wilt u weten welke gegevens voor de aangifte ontbreken? Wij helpen u het dossier compleet te maken.",
        ],
      },
    ],
  },
  {
    slug: "levenstestament-waarom-is-het-belangrijk",
    title: "Levenstestament: waarom is het belangrijk?",
    excerpt:
      "Wie regelt uw bankzaken als u dat tijdelijk of blijvend zelf niet meer kunt? En wie bespreekt uw wensen met zorgverleners wanneer u niet meer in staat bent om daarover te…",
    category: "voorbereiding",
    readingTime: "3 min",
    sections: [
      {
        paragraphs: [
          "Wie regelt uw bankzaken als u dat tijdelijk of blijvend zelf niet meer kunt? En wie bespreekt uw wensen met zorgverleners wanneer u niet meer in staat bent om daarover te beslissen? Met een levenstestament kunt u vooraf vastleggen wie namens u mag handelen en binnen welke grenzen.",
        ],
      },
      {
        heading: "Een testament voor tijdens uw leven",
        paragraphs: [
          "Een gewoon testament werkt na overlijden. Een levenstestament gaat juist over de periode waarin u nog leeft. U kunt daarin een of meer vertegenwoordigers aanwijzen voor financiële, persoonlijke en medische zaken. Bijvoorbeeld voor het betalen van rekeningen, contact met de bank, het beheer van een woning of het overleggen met artsen wanneer u zelf niet meer wilsbekwaam bent voor een beslissing.",
          "U kunt ook vastleggen hoe de vertegenwoordiger verantwoording aflegt en of iemand toezicht houdt. Dat is verstandig: een volmacht geeft veel vertrouwen én veel verantwoordelijkheid. Bespreek medische wensen daarnaast met uw arts, zodat die bekend zijn en passend worden vastgelegd.",
        ],
      },
      {
        heading: "Waarom wachten risico geeft",
        paragraphs: [
          "Zonder passende volmacht kan het nodig worden om via de rechter een bewindvoerder of mentor te laten benoemen. Ook wanneer u een partner heeft, kan voor bepaalde handelingen een rechterlijke regeling nodig zijn. Door tijdig keuzes te maken, geeft u uw naasten duidelijkheid en houdt u zelf regie over wie u vertegenwoordigt.",
          "Het document moet worden opgesteld terwijl u begrijpt wat u beslist. De notaris beoordeelt bij het opstellen of u wilsbekwaam bent. Wacht daarom niet totdat een acute situatie ontstaat.",
        ],
      },
      {
        heading: "Begin met de juiste vragen",
        paragraphs: [
          "Wie vertrouwt u deze rol toe? Is een vervanger nodig? Welke beslissingen mogen zij zelfstandig nemen? Waar liggen uw documenten en met wie moeten zij contact opnemen? De Erfeniswijzer helpt deze vragen en uw financiële en praktische informatie vooraf in kaart te brengen. De notaris verzorgt het levenstestament zelf.",
          "Wilt u overzicht vóór het gesprek met de notaris? Wij denken met u mee over wat u wilt regelen.",
        ],
      },
    ],
  },
  {
    slug: "nalatenschap-bij-een-samengesteld-gezin",
    title: "Nalatenschap bij een samengesteld gezin",
    excerpt:
      "In een samengesteld gezin voelt iedereen zich misschien familie, maar voor het erfrecht maakt de wet onderscheid. Een stiefkind erft niet automatisch van een stiefouder. Ook de…",
    category: "voorbereiding",
    readingTime: "3 min",
    sections: [
      {
        paragraphs: [
          "In een samengesteld gezin voelt iedereen zich misschien familie, maar voor het erfrecht maakt de wet onderscheid. Een stiefkind erft niet automatisch van een stiefouder. Ook de positie van een nieuwe partner en kinderen uit een eerdere relatie verdient aandacht. Juist daarom is het verstandig om tijdig te bespreken wat u voor ieder van hen wilt regelen.",
        ],
      },
      {
        heading: "Wie erft er zonder testament?",
        paragraphs: [
          "De uitkomst hangt af van uw familiebanden en uw relatievorm. Bent u getrouwd of heeft u een geregistreerd partnerschap en zijn er kinderen, dan geldt in veel gevallen de wettelijke verdeling: de langstlevende krijgt de goederen en schulden van de nalatenschap, terwijl de kinderen een geldvordering krijgen. Kinderen van uw partner die juridisch niet uw kinderen zijn, erven zonder testament in beginsel niet van u.",
          "Woont u samen zonder huwelijk of geregistreerd partnerschap? Dan wordt uw partner niet automatisch erfgenaam. Een samenlevingscontract alleen maakt iemand ook niet tot erfgenaam. Dat onderscheid kan grote gevolgen hebben voor de woning en de financiële zekerheid van de achterblijvende partner.",
        ],
      },
      {
        heading: "Wat kunt u vooraf regelen?",
        paragraphs: [
          "In een testament kunt u stiefkinderen iets nalaten, een erfgenaam benoemen of afspraken maken die passen bij uw gezin. Soms biedt vruchtgebruik van een woning een oplossing: de kinderen erven de woning, terwijl de partner deze onder voorwaarden mag blijven gebruiken. Welke keuze passend is, hangt af van de eigendom van de woning, eerdere testamenten, huwelijkse voorwaarden en de wensen van alle betrokkenen.",
          "Houd ook rekening met de positie van eigen kinderen. Een kind dat in een testament is onterfd, kan onder voorwaarden nog aanspraak maken op de legitieme portie: een recht op geld, geen recht op specifieke spullen.",
        ],
      },
      {
        heading: "Rust begint met duidelijkheid",
        paragraphs: [
          "Breng eerst in kaart wie juridisch familie van wie is, van wie de bezittingen zijn en welke afspraken al bestaan. De Erfeniswijzer helpt om dit overzicht en uw wensen te ordenen. Een notaris vertaalt de keuzes vervolgens naar een juridisch passend testament.",
          "Wilt u weten welke vragen u in uw gezin moet bespreken? Neem contact op voor een eerste overzicht.",
        ],
      },
    ],
  },
  {
    slug: "wat-te-doen-bij-overlijden-de-checklist",
    title: "Wat te doen bij overlijden: de checklist",
    excerpt:
      "Na een overlijden hoeft u niet alles tegelijk te regelen. Sommige zaken vragen direct aandacht; andere kunnen wachten totdat duidelijk is wie bevoegd is en hoe de nalatenschap…",
    category: "afwikkeling",
    readingTime: "3 min",
    sections: [
      {
        paragraphs: [
          "Na een overlijden hoeft u niet alles tegelijk te regelen. Sommige zaken vragen direct aandacht; andere kunnen wachten totdat duidelijk is wie bevoegd is en hoe de nalatenschap eruitziet. Deze volgorde helpt u om het overzicht te bewaren.",
        ],
      },
      {
        heading: "De eerste dagen",
        paragraphs: [
          "Neem contact op met een arts voor de vaststelling van het overlijden en schakel een uitvaartverzorger in als u daarbij hulp wilt. Het overlijden moet bij de gemeente worden aangegeven; vaak verzorgt de uitvaartondernemer dit. Zoek de belangrijkste documenten bij elkaar, zoals identiteitsgegevens, verzekeringsinformatie en eventuele uitvaartwensen. Zorg ook dat de woning veilig is en dat huisdieren of personen die afhankelijk waren van de overledene worden opgevangen.",
        ],
      },
      {
        heading: "Daarna: wie mag wat regelen?",
        paragraphs: [
          "Ga na of er een testament is en of daarin een executeur is benoemd. Een notaris kan het Centraal Testamentenregister raadplegen. Maak een eerste overzicht van bankrekeningen, bezittingen, schulden, verzekeringen en lopende verplichtingen. Meld het overlijden bij relevante instanties en aanbieders, maar zeg niet gedachteloos alles op: sommige overeenkomsten of verzekeringen zijn nog nodig tijdens de afwikkeling.",
          "Bent u erfgenaam? Kies niet te snel tussen zuiver aanvaarden, beneficiair aanvaarden of verwerpen. Wie goederen van de nalatenschap verkoopt of voor zichzelf meeneemt, kan daardoor de erfenis zuiver aanvaarden. De uitvaart uit de nalatenschap betalen is volgens de Rijksoverheid een uitzondering. Twijfelt u over schulden, vraag dan eerst advies.",
        ],
      },
      {
        heading: "De weken daarna",
        paragraphs: [
          "Vraag waar nodig een verklaring van erfrecht aan, beheer de nalatenschap volgens de geldende bevoegdheden en maak een volledige boedelbeschrijving. Regel vervolgens openstaande schulden, belastingzaken en, wanneer dat mogelijk is, de verdeling. Spreek met de erfgenamen af wie contact houdt met instanties en waar documenten worden bewaard.",
          "De Erfeniswijzer helpt om de stappen te plannen, informatie te verzamelen en te bewaken wat al is geregeld. Zo hoeft u in een moeilijke periode niet alles zelf te overzien.",
          "Heeft u net een overlijden meegemaakt? Wij helpen u bepalen wat als eerste aandacht vraagt.",
        ],
      },
    ],
  },
  {
    slug: "crypto-en-digitale-bezittingen-in-een-erfenis",
    title: "Crypto en digitale bezittingen in een erfenis",
    excerpt:
      "Een nalatenschap bestaat tegenwoordig uit meer dan een huis, een bankrekening en spullen. Denk ook aan cryptovaluta, online beleggingen, domeinnamen, foto’s in de cloud en…",
    category: "voorbereiding",
    readingTime: "3 min",
    sections: [
      {
        paragraphs: [
          "Een nalatenschap bestaat tegenwoordig uit meer dan een huis, een bankrekening en spullen. Denk ook aan cryptovaluta, online beleggingen, domeinnamen, foto’s in de cloud en accounts met lopende abonnementen. Zonder overzicht kunnen nabestaanden waarde missen of geen toegang krijgen tot belangrijke informatie.",
        ],
      },
      {
        heading: "Wat hoort bij de digitale nalatenschap?",
        paragraphs: [
          "Sommige digitale bezittingen hebben financiële waarde, zoals crypto, een webwinkel of een domeinnaam. Andere zijn vooral persoonlijk waardevol, zoals foto’s, e-mails en sociale media. Er kunnen ook digitale schulden of doorlopende kosten zijn. De rechten van nabestaanden verschillen per platform en contract. Het feit dat iemand een account gebruikte, betekent niet automatisch dat een ander het account zomaar mag overnemen.",
          "Bij cryptovaluta is toegang een bijzonder aandachtspunt. Wie de benodigde sleutels of herstelgegevens niet kan vinden, kan mogelijk niet bij het vermogen. Tegelijk mogen zulke gegevens niet onbeveiligd in een testament of een gemakkelijk toegankelijk document staan.",
        ],
      },
      {
        heading: "Wat kunt u bij leven doen?",
        paragraphs: [
          "Maak een overzicht van platforms, wallets, apparaten, domeinnamen en belangrijke bestanden. Noteer wat ermee moet gebeuren en wie de juiste contactpersoon is. Bewaar toegangsgegevens veilig en leg apart vast hoe een bevoegd persoon ze na uw overlijden kan vinden. Werk het overzicht regelmatig bij. Een notaris kan met u bespreken welke wensen in een testament thuishoren; voor praktische toegangsgegevens is een veilige, aanpasbare bewaarwijze nodig.",
        ],
      },
      {
        heading: "Wat doen nabestaanden na overlijden?",
        paragraphs: [
          "Begin met een inventarisatie van apparaten, administratie, bankafschriften en bekende platforms. Verplaats of verdeel digitale waarde niet voordat duidelijk is wie bevoegd is, welke schulden er zijn en hoe de erfenis is aanvaard. Documenteer gevonden tegoeden en de waardering voor de aangifte erfbelasting. Bij vragen over de fiscale verwerking kan een specialist helpen.",
          "De Erfeniswijzer neemt digitale bezittingen mee in het overzicht van uw nalatenschap en helpt nabestaanden om niets over het hoofd te zien.",
          "Wilt u uw digitale nalatenschap beter in kaart brengen? Neem contact op.",
        ],
      },
    ],
  },
  {
    slug: "schenken-bij-leven-slim-en-eerlijk-besparen",
    title: "Schenken bij leven: slim en eerlijk besparen",
    excerpt:
      "Schenken kan een mooie manier zijn om iemand nu al te helpen. Soms vermindert het ook de latere erfbelasting. Toch is een schenking pas verstandig als zij past bij uw eigen…",
    category: "voorbereiding",
    readingTime: "3 min",
    sections: [
      {
        paragraphs: [
          "Schenken kan een mooie manier zijn om iemand nu al te helpen. Soms vermindert het ook de latere erfbelasting. Toch is een schenking pas verstandig als zij past bij uw eigen financiële zekerheid, uw gezin en de fiscale regels. Alleen naar de belastingbesparing kijken geeft een onvolledig beeld.",
        ],
      },
      {
        heading: "Hoe werken de vrijstellingen?",
        paragraphs: [
          "Voor schenkingen bestaan jaarlijkse vrijstellingen. De hoogte hangt af van de relatie tussen schenker en ontvanger en wordt per kalenderjaar vastgesteld. Voor ouders die aan hun kind schenken geldt een andere vrijstelling dan voor bijvoorbeeld grootouders of vrienden. Daarnaast bestaan onder voorwaarden eenmalig verhoogde vrijstellingen. Controleer steeds het bedrag en de voorwaarden voor het jaar waarin u daadwerkelijk schenkt. Soms moet de ontvanger aangifte schenkbelasting doen, ook om een verhoogde vrijstelling toe te passen.",
          "Een schenking kort voor overlijden vraagt extra aandacht. Overlijdt de schenker binnen 180 dagen, dan wordt de schenking voor de erfbelasting in beginsel behandeld als onderdeel van de erfenis. Schenken op het laatste moment levert daardoor niet vanzelf een belastingvoordeel op.",
        ],
      },
      {
        heading: "Leg ook de bedoeling vast",
        paragraphs: [
          "Was het geld bedoeld als voorschot op een toekomstige erfenis? Wilt u dat een schenking privévermogen van uw kind blijft? Zijn er andere kinderen en wilt u voorkomen dat zij later verschillend terugkijken op de afspraken? Bespreek zulke vragen vooraf en leg vast wat u beslist. Houd ook rekening met uw eigen uitgaven, zorgkosten en de mogelijkheid dat u het geschonken bedrag later zelf nodig heeft.",
          "Bij een woning, onderneming, lening die wordt kwijtgescholden of een schenking onder voorwaarden spelen aanvullende regels. Laat die situaties vooraf door een notaris of fiscalist beoordelen.",
        ],
      },
      {
        heading: "Een passend schenkplan",
        paragraphs: [
          "De Erfeniswijzer helpt uw bezittingen, eerdere schenkingen en wensen in kaart te brengen. Zo kunt u met een notaris of fiscalist gericht bespreken wat juridisch en fiscaal verstandig is, zonder de persoonlijke kant uit het oog te verliezen.",
          "Wilt u schenken, maar eerst weten wat dit voor uw nalatenschap betekent? Wij brengen de vragen voor u op een rij.",
        ],
      },
    ],
  },
  {
    slug: "een-erfenis-verdelen-zonder-ruzie",
    title: "Een erfenis verdelen zonder ruzie",
    excerpt:
      "Bij een erfenis gaat het zelden alleen om geld. Een fotoalbum, sieraad of ouderlijk huis kan voor verschillende erfgenamen iets anders betekenen. Tegelijk moeten bezittingen en…",
    category: "afwikkeling",
    readingTime: "3 min",
    sections: [
      {
        paragraphs: [
          "Bij een erfenis gaat het zelden alleen om geld. Een fotoalbum, sieraad of ouderlijk huis kan voor verschillende erfgenamen iets anders betekenen. Tegelijk moeten bezittingen en schulden volgens het testament en de wet worden afgehandeld. Rust ontstaat meestal wanneer iedereen weet wat er is, wie beslissingen mag nemen en hoe die beslissingen tot stand komen.",
        ],
      },
      {
        heading: "Begin met de juridische basis",
        paragraphs: [
          "Controleer eerst of er een testament is, wie de erfgenamen zijn en of een executeur is benoemd. Bekijk ook of de wettelijke verdeling van toepassing is: dan krijgen kinderen doorgaans een geldvordering op de langstlevende partner en vindt er niet meteen een gewone verdeling van alle goederen plaats. De uitkomst hangt af van de gezinssituatie en het testament.",
          "Voordat erfgenamen goederen onderling verdelen, moeten zij zicht hebben op schulden, lopende kosten en belastingen. Bij beneficiaire aanvaarding gelden bovendien regels voor de vereffening. Geef dus geen geld uit de boedel weg en verdeel geen waardevolle spullen op basis van een onvolledig overzicht.",
        ],
      },
      {
        heading: "Spreek één werkwijze af",
        paragraphs: [
          "Maak samen een boedelbeschrijving. Leg vast hoe bezittingen worden gewaardeerd, welke stukken voor iedereen beschikbaar zijn en wie contact houdt met banken of de notaris. Geef ieder de gelegenheid om aan te geven welke spullen bijzondere emotionele waarde hebben. Zet afspraken over verkoop, toedeling en verrekening op papier. Dit voorkomt dat een mondeling gesprek later verschillend wordt herinnerd.",
          "Blijven erfgenamen het oneens over de waarde van een woning of onderneming? Een onafhankelijke taxatie kan helpen. Loopt het gesprek over emoties of oude verhoudingen vast, dan kan begeleiding door een onafhankelijke mediator zinvol zijn.",
        ],
      },
      {
        heading: "Niemand hoeft alles alleen te dragen",
        paragraphs: [
          "Een executeur kan de nalatenschap beheren en voorbereiden op verdeling, maar heeft niet automatisch de bevoegdheid om de verdeling zelfstandig te bepalen. De Erfeniswijzer helpt het overzicht te bewaren, de stappen te organiseren en de communicatie tussen betrokkenen helder te houden. Waar juridisch advies of mediation nodig is, betrekken wij de juiste specialist.",
          "Wilt u de nalatenschap zorgvuldig afwikkelen met duidelijkheid voor alle erfgenamen? Neem contact op.",
        ],
      },
    ],
  },
  {
    slug: "erfenis-aanvaarden-beneficiair-aanvaarden-of-verwerpen-wat-kiest-u",
    title: "Erfenis aanvaarden, beneficiair aanvaarden of verwerpen: wat kiest u?",
    excerpt:
      "U hoort dat u erfgenaam bent. Dat kan goed nieuws zijn, maar u weet misschien nog niet welke schulden de overledene had. Voordat u beslist, is het belangrijk om de drie…",
    category: "afwikkeling",
    readingTime: "3 min",
    sections: [
      {
        paragraphs: [
          "U hoort dat u erfgenaam bent. Dat kan goed nieuws zijn, maar u weet misschien nog niet welke schulden de overledene had. Voordat u beslist, is het belangrijk om de drie mogelijkheden te begrijpen.",
        ],
      },
      {
        heading: "Zuiver aanvaarden",
        paragraphs: [
          "U accepteert de hele nalatenschap: de bezittingen én de schulden. Blijken de schulden groter dan de bezittingen, dan kunt u voor het tekort met uw eigen vermogen aansprakelijk worden. Zuiver aanvaarden kan uitdrukkelijk, maar ook blijken uit uw gedrag, bijvoorbeeld als u goederen uit de nalatenschap verkoopt of voor uzelf meeneemt.",
        ],
      },
      {
        heading: "Beneficiair aanvaarden",
        paragraphs: [
          "U aanvaardt de erfenis onder het voorrecht van boedelbeschrijving. Schulden worden dan volgens de regels uit de nalatenschap betaald. U hoeft een tekort in beginsel niet uit eigen vermogen aan te vullen, mits de nalatenschap zorgvuldig volgens de vereffeningsregels wordt afgehandeld. Deze keuze geeft bescherming, maar brengt ook verplichtingen en mogelijk extra kosten met zich mee.",
        ],
      },
      {
        heading: "Verwerpen",
        paragraphs: [
          "U ontvangt niets en bent niet betrokken bij de afwikkeling als erfgenaam. Let op: door uw verwerping kunnen uw kinderen in uw plaats erfgenaam worden. Bij minderjarige kinderen gelden bijzondere regels. Vraag daarom advies voordat u een verklaring indient.",
          "Beneficiair aanvaarden en verwerpen regelt u via een verklaring bij de rechtbank. Twijfelt u nog? Breng eerst de bezittingen en mogelijke schulden in kaart en ga voorzichtig om met goederen van de overledene. Het betalen van de uitvaart uit de nalatenschap leidt volgens de Rijksoverheid op zichzelf niet tot zuivere aanvaarding.",
          "De Erfeniswijzer helpt u het eerste overzicht te maken. Voor de keuze en de juridische gevolgen kunt u een notaris raadplegen.",
        ],
      },
    ],
  },
  {
    slug: "wat-is-een-verklaring-van-erfrecht-en-wanneer-heeft-u-die-nodig",
    title: "Wat is een verklaring van erfrecht en wanneer heeft u die nodig?",
    excerpt:
      "Een verklaring van erfrecht is een document van de notaris. Daarin staat wie is overleden, wie de erfgenamen zijn en wie bevoegd is om de nalatenschap te vertegenwoordigen. Dat…",
    category: "afwikkeling",
    readingTime: "3 min",
    sections: [
      {
        paragraphs: [
          "Een verklaring van erfrecht is een document van de notaris. Daarin staat wie is overleden, wie de erfgenamen zijn en wie bevoegd is om de nalatenschap te vertegenwoordigen. Dat kan bijvoorbeeld een executeur of een gemachtigde erfgenaam zijn.",
        ],
      },
      {
        heading: "Waarom vraagt een bank erom?",
        paragraphs: [
          "Een bank moet weten aan wie zij informatie en toegang mag geven. De verklaring helpt om vast te stellen wie namens de nalatenschap mag handelen. Ook bij de verkoop van een geërfde woning kan zij nodig zijn. De notaris onderzoekt hiervoor onder meer de gezinssituatie, eventuele testamenten en de positie van de erfgenamen.",
          "Een verklaring van erfrecht is niet bij ieder overlijden verplicht. Of een bank haar verlangt, hangt af van de omstandigheden en het beleid van die bank. Vraag daarom eerst welke documenten daadwerkelijk nodig zijn voordat u kosten maakt.",
        ],
      },
      {
        heading: "Wat kunt u alvast verzamelen?",
        paragraphs: [
          "Zorg voor de akte van overlijden, gegevens van de partner en kinderen, bekende testamentgegevens en contactgegevens van de betrokkenen. Meld ook als een erfgenaam al is overleden, in het buitenland woont of nog minderjarig is. De notaris vertelt welke aanvullende stukken nodig zijn.",
          "Een verklaring van erfrecht is iets anders dan een testament. Het testament legt de wensen van de overledene vast; de verklaring beschrijft wie na het overlijden volgens de wet en het testament bevoegd is.",
          "De Erfeniswijzer helpt u de benodigde informatie te verzamelen en het contact met de notaris en de bank te organiseren.",
        ],
      },
    ],
  },
  {
    slug: "hoe-weet-u-of-er-een-testament-is",
    title: "Hoe weet u of er een testament is?",
    excerpt:
      "Niet iedere overledene vertelt zijn naasten dat er een testament bestaat. Soms ligt er een kopie tussen de administratie, soms is niet bekend bij welke notaris het testament is…",
    category: "afwikkeling",
    readingTime: "3 min",
    sections: [
      {
        paragraphs: [
          "Niet iedere overledene vertelt zijn naasten dat er een testament bestaat. Soms ligt er een kopie tussen de administratie, soms is niet bekend bij welke notaris het testament is gemaakt. U kunt dit laten nagaan via het Centraal Testamentenregister.",
        ],
      },
      {
        heading: "Wat staat in het register?",
        paragraphs: [
          "Het register vermeldt of iemand een testament heeft laten opstellen en bij welke notaris dat is gebeurd. De inhoud van het testament staat er niet in. Met die informatie kan de betrokken notaris of een andere notaris het testament opvragen en beoordelen wie recht heeft op inzage.",
          "Voor een aanvraag na overlijden zijn gegevens van de overledene en een bewijs van overlijden nodig. Gebruik de volledige officiële naam, zoals geregistreerd bij de gemeente. Een oude kopie die thuis wordt gevonden is nuttig, maar controleer altijd of er later nog een testament is gemaakt.",
        ],
      },
      {
        heading: "Geen testament gevonden?",
        paragraphs: [
          "Dan bepaalt het wettelijk erfrecht wie de erfgenamen zijn. Dat betekent niet dat u meteen weet wie wat kan opeisen. De uitkomst hangt onder meer af van de aanwezigheid van een echtgenoot of geregistreerde partner en van kinderen. Ook voor de afwikkeling kan nog een verklaring van erfrecht nodig zijn.",
          "Begin dus met de vraag óf er een testament is. Pas daarna kunt u de taken, bevoegdheden en aanspraken goed in kaart brengen. De Erfeniswijzer helpt u deze stappen op volgorde te zetten en verwijst voor de uitleg van een testament naar de notaris.",
        ],
      },
    ],
  },
  {
    slug: "wat-gebeurt-er-met-een-huis-en-hypotheek-na-overlijden",
    title: "Wat gebeurt er met een huis en hypotheek na overlijden?",
    excerpt:
      "Een geërfde woning roept direct vragen op. Wie mag er blijven wonen? Wie betaalt de hypotheek? Moet het huis worden verkocht? Het antwoord hangt af van de eigendom, de…",
    category: "afwikkeling",
    readingTime: "3 min",
    sections: [
      {
        paragraphs: [
          "Een geërfde woning roept direct vragen op. Wie mag er blijven wonen? Wie betaalt de hypotheek? Moet het huis worden verkocht? Het antwoord hangt af van de eigendom, de gezinssituatie, het testament en de keuze om de erfenis te aanvaarden.",
        ],
      },
      {
        heading: "Breng eerst de positie van de woning in kaart",
        paragraphs: [
          "Controleer wie eigenaar is, of er een hypotheek loopt en of een partner mede eigenaar of mede schuldenaar is. Kijk ook of er een overlijdensrisicoverzekering bestaat en aan wie die eventueel uitkeert. Meld het overlijden aan de hypotheekverstrekker en vraag welke stukken en betalingen nodig zijn. De vaste lasten lopen doorgaans door.",
        ],
      },
      {
        heading: "Wanneer kan de woning worden verkocht?",
        paragraphs: [
          "Dat hangt af van wie bevoegd is en wie eigenaar wordt. Soms krijgt de langstlevende partner de woning op grond van de wettelijke verdeling. In andere gevallen moeten erfgenamen gezamenlijk beslissen. Een executeur mag de woning niet automatisch naar eigen inzicht verkopen of verdelen; het testament en de reden van de verkoop zijn van belang.",
          "Verkoop of verdeling kan ook gevolgen hebben voor schulden en belastingen. Onderzoek daarom eerst de gehele nalatenschap, zeker wanneer de hypotheek hoger lijkt dan de waarde van de woning. Laat bij twijfel de mogelijkheden van beneficiair aanvaarden beoordelen.",
        ],
      },
      {
        heading: "Houd ruimte voor een zorgvuldig besluit",
        paragraphs: [
          "Verzamel de hypotheekstukken, eigendomsgegevens, verzekeringen en een realistische waardebepaling. Leg vast wie de lopende kosten betaalt zolang er nog geen besluit is genomen. De Erfeniswijzer helpt het overzicht en de contacten te organiseren; de notaris, hypotheekadviseur en fiscalist kunnen de specialistische vragen beantwoorden.",
        ],
      },
    ],
  },
  {
    slug: "wat-is-een-kindsdeel-en-wanneer-wordt-het-uitbetaald",
    title: "Wat is een kindsdeel en wanneer wordt het uitbetaald?",
    excerpt:
      "Na het overlijden van een ouder vragen kinderen vaak: wanneer krijg ik mijn erfdeel? Het antwoord kan anders zijn dan zij verwachten. Als de wettelijke verdeling geldt, krijgt de…",
    category: "afwikkeling",
    readingTime: "3 min",
    sections: [
      {
        paragraphs: [
          "Na het overlijden van een ouder vragen kinderen vaak: wanneer krijg ik mijn erfdeel? Het antwoord kan anders zijn dan zij verwachten. Als de wettelijke verdeling geldt, krijgt de langstlevende echtgenoot of geregistreerde partner de bezittingen en schulden van de nalatenschap. De kinderen krijgen in plaats daarvan een geldvordering.",
        ],
      },
      {
        heading: "Een erfdeel op papier",
        paragraphs: [
          "De vordering vertegenwoordigt de waarde van het erfdeel van het kind. Zij is in de regel pas opeisbaar bij het overlijden van de langstlevende partner. Er bestaan wettelijke uitzonderingen en een testament kan binnen de wettelijke grenzen aanvullende momenten of voorwaarden regelen. Een kindsdeel is dus niet altijd een bedrag dat direct op een kinderrekening wordt gestort.",
          "Neem een eenvoudig voorbeeld. Een echtpaar heeft twee kinderen en de nalatenschap van de eerst overleden ouder bedraagt, na aftrek van schulden, € 90.000. Als ieder van de drie erfgenamen voor een gelijk deel erft, bedraagt het uitgangspunt per erfdeel € 30.000. De daadwerkelijke vordering en de fiscale waarde kunnen anders uitvallen door het testament, de omvang van de nalatenschap en eventuele renteafspraken.",
        ],
      },
      {
        heading: "Waarom moet u het vastleggen?",
        paragraphs: [
          "Jaren later kan het moeilijk zijn om te reconstrueren wat ieder kind nog tegoed heeft. Maak daarom bij het eerste overlijden een overzicht van bezittingen, schulden, erfgenamen en de berekende vorderingen. Bewaar ook afspraken over rente en tussentijdse betalingen. Dit is van belang voor de afwikkeling én voor de erfbelasting.",
          "De Erfeniswijzer helpt de relevante documenten en vragen bijeen te brengen. Voor het vaststellen van de juridische en fiscale positie kan een notaris of fiscalist nodig zijn.",
        ],
      },
    ],
  },
  {
    slug: "wat-gebeurt-er-met-uw-erfenis-als-u-geen-testament-heeft",
    title: "Wat gebeurt er met uw erfenis als u geen testament heeft?",
    excerpt:
      "Zonder testament geldt het wettelijk erfrecht. Dat geeft een basis, maar die basis sluit niet altijd aan op wat iemand zelf had gewild. Vooral bij samenwonen, een samengesteld…",
    category: "voorbereiding",
    readingTime: "3 min",
    sections: [
      {
        paragraphs: [
          "Zonder testament geldt het wettelijk erfrecht. Dat geeft een basis, maar die basis sluit niet altijd aan op wat iemand zelf had gewild. Vooral bij samenwonen, een samengesteld gezin of een bijzondere wens over een woning kan het verschil groot zijn.",
        ],
      },
      {
        heading: "Wie zijn de erfgenamen?",
        paragraphs: [
          "De wet bepaalt een volgorde van familieleden die kunnen erven. Heeft u een echtgenoot of geregistreerde partner en kinderen, dan zijn zij doorgaans erfgenamen en geldt meestal de wettelijke verdeling. De langstlevende ontvangt dan de goederen en schulden; de kinderen krijgen een geldvordering. Heeft u geen partner of kinderen, dan komen andere familieleden volgens de wettelijke volgorde in beeld.",
          "Een ongehuwde partner met wie u samenwoont wordt niet automatisch erfgenaam. Ook een stiefkind erft niet automatisch van een stiefouder. Dat kan betekenen dat juist de mensen met wie u uw dagelijks leven deelt, zonder testament geen deel uitmaken van uw nalatenschap.",
        ],
      },
      {
        heading: "Wanneer is een testament zinvol?",
        paragraphs: [
          "Een testament biedt ruimte om erfgenamen aan te wijzen, een executeur te benoemen en keuzes voor uw partner, kinderen of andere naasten vast te leggen. U kunt ook afspraken maken over bepaalde bezittingen of het beheer van een erfenis voor een kind. Sommige wettelijke rechten van kinderen blijven relevant, ook als u anders wilt verdelen.",
          "Begin met een overzicht van uw gezin, bezittingen, schulden en wensen. De Erfeniswijzer helpt u helder te krijgen welke vragen u aan de notaris wilt voorleggen. De notaris stelt het testament op en beoordeelt wat juridisch mogelijk is.",
        ],
      },
    ],
  },
  {
    slug: "wat-is-het-verschil-tussen-een-testament-en-een-levenstestament",
    title: "Wat is het verschil tussen een testament en een levenstestament?",
    excerpt:
      "De namen lijken op elkaar, maar de documenten werken op verschillende momenten. Een levenstestament gaat over uw belangen tijdens uw leven. Een gewoon testament bepaalt wat er met…",
    category: "voorbereiding",
    readingTime: "3 min",
    sections: [
      {
        paragraphs: [
          "De namen lijken op elkaar, maar de documenten werken op verschillende momenten. Een levenstestament gaat over uw belangen tijdens uw leven. Een gewoon testament bepaalt wat er met uw nalatenschap gebeurt na uw overlijden.",
        ],
      },
      {
        heading: "Het levenstestament",
        paragraphs: [
          "Hierin kunt u een vertegenwoordiger aanwijzen voor de situatie waarin u bepaalde beslissingen zelf niet meer kunt nemen. Denk aan bankzaken, het beheer van een woning en uw persoonlijke of medische wensen. U kunt grenzen aan de volmacht stellen en vastleggen wie toezicht houdt. Het document eindigt bij overlijden; de vertegenwoordiger wordt daarmee niet automatisch executeur.",
        ],
      },
      {
        heading: "Het testament",
        paragraphs: [
          "Hierin legt u bij de notaris vast wie uw erfgenamen zijn, wat u wilt nalaten en wie na uw overlijden de nalatenschap beheert. U kunt bijvoorbeeld een executeur aanwijzen, een legaat opnemen of de positie van een partner of stiefkind regelen. Na overlijden spelen daarnaast de wet en de daadwerkelijke inhoud van het testament een rol.",
          "Veel mensen hebben aan één van beide documenten niet genoeg. Een testament regelt bijvoorbeeld niet wie namens u handelt als u tijdens uw leven niet meer zelf kunt beslissen. Een levenstestament bepaalt op zijn beurt niet wie uw goederen na overlijden erft.",
          "De Erfeniswijzer helpt uw situatie en wensen op een rij te zetten voordat u met de notaris spreekt. Begin bij de vraag: wie moet namens mij kunnen handelen, en wie wil ik later iets nalaten?",
        ],
      },
    ],
  },
  {
    slug: "wanneer-is-het-verstandig-om-uw-testament-aan-te-passen",
    title: "Wanneer is het verstandig om uw testament aan te passen?",
    excerpt:
      "Een testament verloopt niet doordat er jaren verstrijken. Juist daarom kan een oud testament onbedoeld blijven gelden terwijl uw leven inmiddels sterk is veranderd.",
    category: "voorbereiding",
    readingTime: "3 min",
    sections: [
      {
        paragraphs: [
          "Een testament verloopt niet doordat er jaren verstrijken. Juist daarom kan een oud testament onbedoeld blijven gelden terwijl uw leven inmiddels sterk is veranderd.",
        ],
      },
      {
        heading: "Momenten om het opnieuw te bekijken",
        paragraphs: [
          "Een huwelijk, geregistreerd partnerschap, scheiding of nieuwe relatie kan aanleiding zijn. Hetzelfde geldt voor de geboorte van kinderen of kleinkinderen, een overlijden in de familie, een onderneming, een verhuizing naar het buitenland of een grote verandering in vermogen. Controleer ook of de benoemde executeur nog beschikbaar en geschikt is.",
          "Een scheiding of nieuw huwelijk verandert de inhoud van uw testament niet vanzelf op de manier die u misschien verwacht. Ga daarom niet alleen af op wat destijds uw bedoeling was. Laat de notaris beoordelen hoe de tekst nu uitwerkt.",
        ],
      },
      {
        heading: "Wat kunt u zelf voorbereiden?",
        paragraphs: [
          "Schrijf op wat sinds het opstellen is veranderd en wat u nu voor uw partner, kinderen of anderen wilt bereiken. Neem eerdere testamenten en relevante afspraken mee, zoals huwelijkse voorwaarden of een samenlevingscontract. Kijk ook naar uw levenstestament: misschien moet de gekozen vertegenwoordiger daar worden aangepast.",
          "Wilt u iets wijzigen, dan regelt u dit via de notaris. Het verscheuren van uw eigen kopie maakt een notarieel testament niet ongeldig. De Erfeniswijzer helpt u de veranderingen en vragen vooraf te ordenen, zodat u gericht met de notaris kunt spreken.",
        ],
      },
    ],
  },
  {
    slug: "wie-zorgt-er-voor-uw-minderjarige-kinderen-als-u-overlijdt",
    title: "Wie zorgt er voor uw minderjarige kinderen als u overlijdt?",
    excerpt:
      "Voor ouders is dit vaak de belangrijkste vraag over hun nalatenschap. Wie neemt de zorg over als u er niet meer bent? Daarbij gaat het om twee verschillende zaken: wie krijgt het…",
    category: "voorbereiding",
    readingTime: "3 min",
    sections: [
      {
        paragraphs: [
          "Voor ouders is dit vaak de belangrijkste vraag over hun nalatenschap. Wie neemt de zorg over als u er niet meer bent? Daarbij gaat het om twee verschillende zaken: wie krijgt het gezag over het kind, en wie beheert het vermogen dat het kind erft?",
        ],
      },
      {
        heading: "Gezag en voogdij",
        paragraphs: [
          "Als een ouder overlijdt en de andere ouder nog gezag heeft, blijft die ouder in beginsel verantwoordelijk. Voor de situatie waarin geen ouder met gezag meer beschikbaar is, kunt u een voogd aanwijzen in een testament of via het gezagsregister. De aangewezen persoon wordt gevraagd of hij of zij de voogdij aanvaardt. Bespreek uw keuze dus vooraf en denk ook aan een vervanger.",
        ],
      },
      {
        heading: "Het erfdeel van uw kind",
        paragraphs: [
          "Een minderjarig kind kan erven, maar kan niet zelfstandig alle beslissingen over een nalatenschap nemen. U kunt in een testament onder voorwaarden een bewind over het erfdeel laten opnemen en iemand aanwijzen die het beheert. De persoon die voor uw kind zorgt en de persoon die het vermogen beheert hoeven niet dezelfde te zijn.",
        ],
      },
      {
        heading: "Wat helpt in de praktijk?",
        paragraphs: [
          "Leg naast de juridische afspraken ook praktische informatie vast: belangrijke contactpersonen, school, medische bijzonderheden, verzekeringen en documenten. Zorg dat deze informatie veilig bewaard en vindbaar is. Een Persoonlijk Levensdossier van De Erfeniswijzer kan helpen om dit overzicht te maken. De aanwijzing van een voogd en het regelen van testamentair bewind bespreekt u met de notaris.",
        ],
      },
    ],
  },
  {
    slug: "wat-kunt-u-nu-al-vastleggen-om-uw-nabestaanden-werk-te-besparen",
    title: "Wat kunt u nu al vastleggen om uw nabestaanden werk te besparen?",
    excerpt:
      "Nabestaanden hebben na een overlijden vaak vooral behoefte aan antwoorden. Waar staan de verzekeringspapieren? Welke rekeningen zijn er? Wie moet worden gebeld? Een goed overzicht…",
    category: "voorbereiding",
    readingTime: "3 min",
    sections: [
      {
        paragraphs: [
          "Nabestaanden hebben na een overlijden vaak vooral behoefte aan antwoorden. Waar staan de verzekeringspapieren? Welke rekeningen zijn er? Wie moet worden gebeld? Een goed overzicht neemt hun verdriet niet weg, maar voorkomt dat zij belangrijke informatie moeten zoeken terwijl er al zoveel op hen afkomt.",
        ],
      },
      {
        heading: "Begin bij de basis",
        paragraphs: [
          "Noteer uw contactpersonen, belangrijke documenten, bankrekeningen, verzekeringen, bezittingen en schulden. Voeg lopende verplichtingen toe, zoals een hypotheek, huur, abonnementen en leningen. Beschrijf waar uw testament of levenstestament kan worden gevonden en bij welke notaris u bent geweest. Bewaar geen onbeveiligde lijst met wachtwoorden tussen papieren die voor iedereen toegankelijk zijn.",
        ],
      },
      {
        heading: "Leg ook uw wensen vast",
        paragraphs: [
          "Denk aan de uitvaart, persoonlijke spullen en digitale accounts. Een overzicht van uw wensen is waardevol voor uw naasten, maar heeft niet automatisch dezelfde juridische werking als een testament. Wilt u erfgenamen benoemen of de verdeling van uw nalatenschap veranderen, bespreek dat dan met de notaris.",
        ],
      },
      {
        heading: "Houd het bruikbaar",
        paragraphs: [
          "Een dossier dat niemand kan vinden, helpt weinig. Laat een vertrouwd persoon weten waar het overzicht veilig is opgeslagen en werk het bij na belangrijke veranderingen. De Erfeniswijzer helpt u met het Persoonlijk Levensdossier om deze informatie stap voor stap te verzamelen en ontbrekende onderwerpen zichtbaar te maken.",
          "U hoeft niet alles in één dag te regelen. Begin met de documenten waar nabestaanden het eerst naar zullen zoeken.",
        ],
      },
    ],
  },
  {
    slug: "wat-gebeurt-er-met-de-erfenis-van-uw-kinderen-als-uw-partner-later-een-nieuwe-relatie-krijgt",
    title:
      "Wat gebeurt er met de erfenis van uw kinderen als uw partner later een nieuwe relatie krijgt?",
    excerpt:
      "Veel ouders willen hun partner na overlijden financiële rust geven én zeker weten dat hun kinderen uiteindelijk krijgen wat voor hen is bedoeld. Bij een nieuwe relatie van de…",
    category: "voorbereiding",
    readingTime: "3 min",
    sections: [
      {
        paragraphs: [
          "Veel ouders willen hun partner na overlijden financiële rust geven én zeker weten dat hun kinderen uiteindelijk krijgen wat voor hen is bedoeld. Bij een nieuwe relatie van de langstlevende partner kunnen deze wensen ingewikkeld worden. De uitkomst hangt af van de wettelijke verdeling, eigendom, eerdere afspraken en het testament.",
        ],
      },
      {
        heading: "De positie van de kinderen",
        paragraphs: [
          "Bij de wettelijke verdeling krijgen kinderen na het eerste overlijden een geldvordering op de langstlevende partner. Die vordering blijft van belang, ook wanneer die partner later opnieuw trouwt of samenwoont. De opeisbaarheid en eventuele rente moeten aan de hand van de wet en het testament worden bekeken.",
          "Een nieuwe partner wordt door de nieuwe relatie niet automatisch erfgenaam van de al overleden ouder. Wel kan een later huwelijk of een keuze over gezamenlijk vermogen invloed hebben op wat er bij het tweede overlijden aanwezig is en hoe ingewikkeld de afwikkeling wordt.",
        ],
      },
      {
        heading: "Wat kunt u vooraf bespreken?",
        paragraphs: [
          "Een notaris kan met u kijken naar rente over kindsvorderingen, momenten waarop een vordering opeisbaar wordt, vruchtgebruik, een uitsluitingsclausule en andere passende testamentaire bepalingen. Niet iedere constructie past bij ieder gezin. Een regeling die kinderen zekerheid geeft, moet ook uitvoerbaar blijven voor de partner die achterblijft.",
          "Breng daarom de woning, het vermogen, bestaande testamenten en de gezinssituatie eerst in kaart. De Erfeniswijzer helpt u de belangen en vragen te ordenen voordat u keuzes juridisch laat vastleggen.",
        ],
      },
    ],
  },
  {
    slug: "welke-schulden-horen-bij-een-nalatenschap",
    title: "Welke schulden horen bij een nalatenschap?",
    excerpt:
      "Bij een nalatenschap denkt men vaak eerst aan een huis, spaargeld en spullen. Voor een goed beeld moeten ook de schulden worden gevonden. Pas wanneer beide kanten bekend zijn,…",
    category: "afwikkeling",
    readingTime: "3 min",
    sections: [
      {
        paragraphs: [
          "Bij een nalatenschap denkt men vaak eerst aan een huis, spaargeld en spullen. Voor een goed beeld moeten ook de schulden worden gevonden. Pas wanneer beide kanten bekend zijn, kunt u beoordelen wat de nalatenschap waard is en welke stappen veilig zijn.",
        ],
      },
      {
        heading: "Denk breder dan leningen",
        paragraphs: [
          "Een hypotheek of persoonlijke lening is duidelijk herkenbaar. Maar er kunnen ook openstaande rekeningen, creditcardschulden, belastingschulden, achterstallige vaste lasten en nog te betalen uitvaartkosten zijn. Soms bestaat er een vordering van kinderen uit de nalatenschap van een eerder overleden ouder. Ook een schenking op papier kan een schuldpositie opleveren. De precieze juridische behandeling verschilt per post.",
          "Controleer bankafschriften, belastingbrieven, contracten en correspondentie. Vraag bij banken en andere partijen gericht naar openstaande verplichtingen. Houd ook rekening met bedragen die nog niet definitief zijn, zoals belastingaanslagen.",
        ],
      },
      {
        heading: "Wat als er meer schulden zijn dan bezittingen?",
        paragraphs: [
          "Aanvaard de erfenis niet overhaast zuiver. Beneficiair aanvaarden kan bescherming bieden tegen een tekort, maar dan moet de nalatenschap volgens de regels worden vereffend. Schuldeisers hebben daarbij een andere positie dan erfgenamen die alvast goederen willen verdelen.",
          "De Erfeniswijzer helpt om de financiële gegevens te verzamelen en een overzicht van bezittingen en schulden op te bouwen. Vraag juridisch advies wanneer schulden onduidelijk zijn of wanneer u twijfelt over de keuze om te aanvaarden.",
        ],
      },
    ],
  },
  {
    slug: "wat-mag-u-doen-voordat-u-een-erfenis-heeft-aanvaard",
    title: "Wat mag u doen voordat u een erfenis heeft aanvaard?",
    excerpt:
      "Na een overlijden wilt u vanzelfsprekend handelen. Het huis moet veilig blijven, de uitvaart moet worden geregeld en er komen rekeningen binnen. Toch is voorzichtigheid nodig…",
    category: "afwikkeling",
    readingTime: "3 min",
    sections: [
      {
        paragraphs: [
          "Na een overlijden wilt u vanzelfsprekend handelen. Het huis moet veilig blijven, de uitvaart moet worden geregeld en er komen rekeningen binnen. Toch is voorzichtigheid nodig zolang u niet heeft gekozen of u de erfenis zuiver aanvaardt, beneficiair aanvaardt of verwerpt.",
        ],
      },
      {
        heading: "Wat vraagt extra oplettendheid?",
        paragraphs: [
          "Verkoop geen goederen uit de nalatenschap en neem ze niet voor uzelf mee. Gebruik het geld van de overledene niet alsof het al uw erfdeel is. Zulke handelingen kunnen worden gezien als zuivere aanvaarding, met mogelijke aansprakelijkheid voor schulden tot gevolg. Het betalen van de uitvaart uit de nalatenschap is volgens de Rijksoverheid op zichzelf een uitzondering.",
          "U kunt wel informatie verzamelen, een eerste inventarisatie maken en zorgen dat bezittingen niet verloren gaan. Documenteer wat u doet en waarom. Wanneer direct handelen nodig is om schade te voorkomen, is het verstandig vooraf juridisch advies te vragen over de juiste uitvoering.",
        ],
      },
      {
        heading: "Beslis pas met een eerste overzicht",
        paragraphs: [
          "Vraag na of er een testament en een executeur zijn. Onderzoek bankrekeningen, leningen, openstaande kosten en de woning. Is de financiële situatie onzeker, bespreek beneficiaire aanvaarding met een notaris. Let bij verwerping ook op de positie van kinderen die daardoor erfgenaam kunnen worden.",
          "De Erfeniswijzer helpt u de praktische stappen te scheiden van besluiten die juridische gevolgen kunnen hebben. Zo houdt u ruimte om een weloverwogen keuze te maken.",
        ],
      },
    ],
  },
  {
    slug: "hoe-maakt-u-een-boedelbeschrijving",
    title: "Hoe maakt u een boedelbeschrijving?",
    excerpt:
      "Een boedelbeschrijving is een overzicht van de bezittingen en schulden van de overledene. Zij vormt de basis voor het beheer, de afwikkeling, de belastingaangifte en uiteindelijk…",
    category: "afwikkeling",
    readingTime: "3 min",
    sections: [
      {
        paragraphs: [
          "Een boedelbeschrijving is een overzicht van de bezittingen en schulden van de overledene. Zij vormt de basis voor het beheer, de afwikkeling, de belastingaangifte en uiteindelijk de verdeling. Een goede beschrijving hoeft niet ingewikkeld te beginnen, maar moet wel volledig en controleerbaar worden opgebouwd.",
        ],
      },
      {
        heading: "Verzamel informatie per categorie",
        paragraphs: [
          "Begin met bankrekeningen en contant geld. Voeg daarna de woning, beleggingen, voertuigen, waardevolle spullen en eventuele zakelijke belangen toe. Noteer aan de andere kant de hypotheek, leningen, openstaande rekeningen, belastingen en andere verplichtingen. Vergeet digitale bezittingen en vorderingen niet. Maak bij iedere post duidelijk op welke datum de waarde ziet en welk document die waarde ondersteunt.",
          "Bij een gezamenlijke rekening of gezamenlijk eigendom behoort niet vanzelf het volledige saldo of goed tot de nalatenschap. De eigendomsverhouding en afspraken moeten worden onderzocht. Voor een woning en bijzondere bezittingen gelden soms specifieke waarderingsregels.",
        ],
      },
      {
        heading: "Houd wijzigingen bij",
        paragraphs: [
          "Noteer ook betalingen en ontvangsten na overlijden. Bewaar facturen, bankafschriften en taxaties bij het overzicht. Werk met één centrale versie, zodat betrokkenen niet elk een ander bedrag gebruiken. Als er een executeur is, behoort het opstellen van een boedelbeschrijving doorgaans tot zijn werkzaamheden. Bij beneficiaire aanvaarding kunnen aanvullende vereffeningsregels gelden.",
          "De Erfeniswijzer helpt de gegevens te verzamelen, te rubriceren en ontbrekende stukken te signaleren. Een notaris of fiscalist kan beoordelen welke waardering en vorm voor uw situatie nodig zijn.",
        ],
      },
    ],
  },
  {
    slug: "wat-gebeurt-er-met-bankrekeningen-en-automatische-incassos-na-overlijden",
    title: "Wat gebeurt er met bankrekeningen en automatische incasso’s na overlijden?",
    excerpt:
      "Een bankrekening verdwijnt niet op het moment van overlijden. Tegelijk mag niet iedereen die eerder toegang had de rekening blijven gebruiken. Wat er precies gebeurt, hangt af van…",
    category: "afwikkeling",
    readingTime: "3 min",
    sections: [
      {
        paragraphs: [
          "Een bankrekening verdwijnt niet op het moment van overlijden. Tegelijk mag niet iedereen die eerder toegang had de rekening blijven gebruiken. Wat er precies gebeurt, hangt af van het type rekening, de relatie met de rekeninghouder en de regels van de bank.",
        ],
      },
      {
        heading: "Meld het overlijden aan de bank",
        paragraphs: [
          "De bank krijgt het overlijden niet altijd automatisch door. Na de melding kan zij een rekening op naam van de overledene blokkeren voor bepaalde handelingen. Zij vraagt doorgaans documenten voordat iemand namens de nalatenschap toegang krijgt. Bij een gezamenlijke en of rekening kan de andere rekeninghouder meestal blijven beschikken, maar dat zegt nog niets over welk deel van het saldo tot de nalatenschap behoort. Een gewone machtiging eindigt bij overlijden van de volmachtgever.",
        ],
      },
      {
        heading: "Controleer welke betalingen doorlopen",
        paragraphs: [
          "Maak een lijst van automatische incasso’s, periodieke overboekingen en inkomsten. Sommige lasten blijven nodig, zoals woonlasten en verzekeringen. Andere abonnementen kunnen worden beëindigd. Neem niet aan dat iedere betaling na de overlijdensdatum automatisch stopt of automatisch moet worden teruggeboekt. Bespreek met de bank welke betalingen in de tussentijd mogelijk zijn, waaronder uitvaartkosten.",
          "Bewaar bankafschriften van rond de overlijdensdatum. Die helpen bij het vinden van verzekeringen, schulden en digitale abonnementen en bij het vaststellen van de omvang van de nalatenschap.",
          "De Erfeniswijzer helpt u de rekeningen en doorlopende betalingen overzichtelijk te maken en het contact met de bank te coördineren.",
        ],
      },
    ],
  },
  {
    slug: "een-kind-onterven-wat-betekent-de-legitieme-portie",
    title: "Een kind onterven: wat betekent de legitieme portie?",
    excerpt:
      "Een ouder kan in een testament bepalen dat een kind geen erfgenaam is. Daarmee verdwijnt niet ieder recht van dat kind. Onder voorwaarden kan het onterfde kind aanspraak maken op…",
    category: "voorbereiding",
    readingTime: "3 min",
    sections: [
      {
        paragraphs: [
          "Een ouder kan in een testament bepalen dat een kind geen erfgenaam is. Daarmee verdwijnt niet ieder recht van dat kind. Onder voorwaarden kan het onterfde kind aanspraak maken op de legitieme portie.",
        ],
      },
      {
        heading: "Recht op geld, niet op spullen",
        paragraphs: [
          "De legitieme portie is een geldvordering. Zij geeft geen recht op een specifiek sieraad, de woning of een plaats aan tafel bij de verdeling van de inboedel. Als uitgangspunt gaat het om de helft van de waarde van het wettelijke erfdeel dat het kind zonder testament zou hebben gehad. De daadwerkelijke berekening kan ingewikkelder zijn: ook bepaalde schenkingen en schulden spelen een rol.",
          "Het kind moet zelf een beroep doen op de legitieme portie. Daarvoor geldt een termijn van vijf jaar na overlijden. Wanneer de vordering opeisbaar is, hangt onder meer af van de gezinssituatie en eventuele testamentaire bepalingen. Een notaris kan die positie beoordelen.",
        ],
      },
      {
        heading: "Voorkom nieuwe onduidelijkheid",
        paragraphs: [
          "Wilt u een kind onterven, bespreek dan ook wat uw bedoeling is voor uw partner en andere kinderen. Kijk naar eerdere schenkingen en leg relevante documenten zorgvuldig vast. Voor nabestaanden is het na overlijden belangrijk om het testament en de informatie die nodig is voor een berekening niet te negeren, ook als familieleden jarenlang geen contact hadden.",
          "De Erfeniswijzer helpt de familieverhoudingen, documenten en praktische vervolgstappen in kaart te brengen. De juridische beoordeling en berekening van de legitieme portie horen bij een notaris of erfrechtspecialist.",
        ],
      },
    ],
  },
];

export const serviceFaqs: Record<string, FaqItem[]> = {
  bijleven: [
    {
      question: "Wat moet ik bij leven regelen voor mijn nalatenschap?",
      answer:
        "Een goede voorbereiding begint met overzicht. Breng in kaart wat u bezit, welke schulden en verzekeringen u heeft, waar belangrijke documenten liggen en wie uw contactpersonen zijn. Denk ook aan bankrekeningen, een woning, pensioen, digitale accounts en persoonlijke wensen voor later. Vervolgens kunt u bekijken of juridische documenten nodig zijn, zoals een testament of levenstestament. Door deze zaken bij leven te regelen, voorkomt u dat uw naasten later zelf moeten uitzoeken wat er is en wat uw wensen waren. Een persoonlijk levensdossier kan helpen om al deze informatie overzichtelijk op één plek vast te leggen.",
    },
    {
      question: "Heb ik een testament nodig en wat gebeurt er als ik geen testament heb?",
      answer:
        "Een testament is niet verplicht. Wanneer u geen testament heeft, bepaalt de wet wie uw erfgenamen zijn en hoe uw nalatenschap wordt verdeeld. Dat kan prima aansluiten bij uw wensen, maar dat hoeft niet. Een testament kan bijvoorbeeld belangrijk zijn wanneer u ongehuwd samenwoont, iemand anders wilt laten erven, een kind wilt onterven, een executeur wilt benoemen of specifieke bezittingen wilt nalaten. Een testament wordt altijd bij een notaris opgesteld. Het is daarom verstandig eerst te bekijken wat er volgens de wet in uw situatie zou gebeuren en vervolgens te beoordelen of u daarvan wilt afwijken.",
    },
    {
      question: "Wat is het verschil tussen een testament en een levenstestament?",
      answer:
        "Een testament regelt wat er na uw overlijden met uw nalatenschap gebeurt. U kunt daarin bijvoorbeeld erfgenamen aanwijzen, legaten opnemen en een executeur benoemen. Een levenstestament is juist bedoeld voor de periode waarin u nog leeft, maar uw zaken mogelijk niet meer zelf kunt regelen. Daarin kunt u vastleggen wie namens u financiële, persoonlijke of medische zaken mag regelen. Het ene document vervangt het andere dus niet. Een testament werkt na overlijden, terwijl een levenstestament tijdens uw leven van belang kan zijn. Beide documenten kunnen bij de notaris worden opgesteld en kunnen onderdeel zijn van een bredere voorbereiding op later.",
    },
    {
      question: "Wie erft mijn nalatenschap als ik niets heb geregeld?",
      answer:
        "Heeft u geen testament, dan bepaalt de wet wie uw erfgenamen zijn. Echtgenoten, geregistreerde partners en kinderen behoren tot de eerste groep erfgenamen. Bij een gehuwde of geregistreerde partner met kinderen geldt in beginsel de wettelijke verdeling. De langstlevende krijgt de goederen en schulden, terwijl de kinderen een geldvordering krijgen. Zijn er geen erfgenamen in deze groep, dan kijkt de wet achtereenvolgens naar onder andere ouders, broers, zussen en verdere familie. Een ongehuwde samenwonende partner is niet automatisch erfgenaam. Wilt u een andere verdeling, dan kan een testament nodig zijn.",
    },
    {
      question: "Wat kan ik nu al vastleggen om het mijn nabestaanden later makkelijker te maken?",
      answer:
        "U kunt veel meer vastleggen dan alleen wie later van u erft. Denk aan een overzicht van bankrekeningen, verzekeringen, schulden, belangrijke documenten, abonnementen, digitale accounts, contactpersonen en uitvaartwensen. Ook kunt u aangeven waar documenten te vinden zijn en welke personen uw naasten kunnen benaderen. In een persoonlijk levensdossier kan deze informatie overzichtelijk worden samengebracht. Voor zaken met juridische gevolgen, zoals de benoeming van erfgenamen of een executeur, is een testament nodig. Door praktische informatie en juridische regelingen goed op elkaar af te stemmen, voorkomt u dat nabestaanden na uw overlijden onnodig veel moeten uitzoeken.",
    },
  ],
  hulp: [
    {
      question: "Wat moet ik als eerste regelen na een overlijden?",
      answer:
        "Na een overlijden moeten eerst de directe zaken rondom het overlijden en de uitvaart worden geregeld. Voor de nalatenschap is het vervolgens belangrijk om vast te stellen of er een testament is, wie de erfgenamen zijn en welke bezittingen en schulden aanwezig zijn. Maak niet te snel gebruik van bezittingen uit de nalatenschap en verkoop of verdeel deze niet voordat duidelijk is hoe u met de erfenis wilt omgaan. Als erfgenaam kunt u namelijk kiezen tussen zuiver aanvaarden, beneficiair aanvaarden of verwerpen. Daarna kan de verdere inventarisatie en afwikkeling van de nalatenschap beginnen.",
    },
    {
      question: "Hoe kom ik erachter of de overledene een testament had?",
      answer:
        "U kunt bij het Centraal Testamentenregister navragen of iemand een testament heeft laten opstellen. Het register vermeldt of er een testament bestaat, wanneer dit is gemaakt en bij welke notaris. Het register geeft niet aan wat er in het testament staat. Wanneer een testament aanwezig is, kan een notaris de inhoud opvragen en beoordelen welke direct belanghebbenden daarover geïnformeerd mogen worden. Het opvragen bij het Centraal Testamentenregister is kosteloos en kan in veel gevallen digitaal. Het is verstandig dit vroeg in de afwikkeling te doen, omdat het testament kan bepalen wie erfgenamen zijn en of er een executeur is benoemd.",
    },
    {
      question: "Moet ik een erfenis altijd aanvaarden?",
      answer:
        "Nee. Als erfgenaam heeft u in beginsel drie mogelijkheden. U kunt de erfenis zuiver aanvaarden, beneficiair aanvaarden of verwerpen. Bij zuivere aanvaarding accepteert u zowel bezittingen als schulden. Bij beneficiaire aanvaarding wordt de nalatenschap volgens wettelijke regels vereffend en bent u in beginsel beschermd tegen een tekort uit de nalatenschap. Bij verwerping bent u geen erfgenaam meer en ontvangt u niets. Welke keuze passend is, hangt af van de situatie. Zolang u nog geen keuze heeft gemaakt, is het verstandig voorzichtig om te gaan met goederen en betalingen uit de nalatenschap.",
    },
    {
      question: "Wanneer heb ik een verklaring van erfrecht nodig?",
      answer:
        "Een verklaring van erfrecht is een notariële verklaring waarin onder andere staat wie de erfgenamen zijn en wie bevoegd is om namens de nalatenschap op te treden. Banken en andere instanties kunnen hierom vragen voordat zij toegang geven tot rekeningen of informatie. Ook bij een woning kan een verklaring van erfrecht van belang zijn. U heeft zo'n verklaring echter niet in iedere nalatenschap nodig. Soms is bijvoorbeeld een overlijdensakte voldoende. De notaris onderzoekt voordat de verklaring wordt afgegeven onder andere de burgerlijke stand, het Centraal Testamentenregister en de positie van de erfgenamen.",
    },
    {
      question: "Wie regelt de afwikkeling van een nalatenschap?",
      answer:
        "Wie de nalatenschap afwikkelt, hangt af van de situatie. Is in het testament een executeur benoemd en heeft deze zijn benoeming aanvaard, dan voert de executeur de taken uit die aan hem zijn toegekend. Is er geen executeur, dan ligt de afwikkeling in beginsel bij de erfgenamen. Zij kunnen één persoon machtigen om bepaalde werkzaamheden namens hen te verrichten en kunnen ook een notaris of andere deskundige inschakelen. Bij beneficiaire aanvaarding kan daarnaast sprake zijn van vereffening. De Erfeniswijzer kan helpen om de verschillende werkzaamheden in kaart te brengen en het overzicht tijdens de afwikkeling te bewaken.",
    },
  ],
  executeurschap: [
    {
      question: "Wat doet een executeur bij de afwikkeling van een nalatenschap?",
      answer:
        "Een executeur wordt in een testament benoemd om werkzaamheden rond de nalatenschap uit te voeren. Een gewone executeur beheert de nalatenschap, brengt bezittingen en schulden in kaart en betaalt schulden die tijdens het beheer uit de nalatenschap moeten worden voldaan. Ook kan de executeur bijvoorbeeld legaten afgeven en de aangifte erfbelasting verzorgen. De precieze taken hangen af van de wet én van wat in het testament is bepaald. Een gewone executeur bereidt de nalatenschap in feite voor op de uiteindelijke verdeling. Zodra het beheer is afgerond, zijn in beginsel de erfgenamen verantwoordelijk voor de verdeling van wat resteert.",
    },
    {
      question: "Welke bevoegdheden heeft een executeur?",
      answer:
        "De bevoegdheden van een executeur worden bepaald door de wet en het testament. Een gewone executeur mag goederen van de nalatenschap beheren en schulden voldoen die tijdens het beheer moeten worden betaald. Tijdens dit beheer vertegenwoordigt de executeur de erfgenamen bij de uitvoering van zijn taak. De erfgenamen kunnen over goederen die onder het beheer van de executeur vallen niet zonder meer zelfstandig beschikken. Het testament kan aanvullende regels en bevoegdheden bevatten. Daarom is het bij iedere nalatenschap belangrijk om niet alleen te kijken naar de titel “executeur”, maar vooral naar de precieze bepalingen die in het testament zijn opgenomen.",
    },
    {
      question: "Mag een executeur zelfstandig de erfenis verdelen of bezittingen verkopen?",
      answer:
        "Een gewone executeur mag de nalatenschap niet automatisch zelfstandig verdelen. De uiteindelijke verdeling ligt normaal gesproken bij de erfgenamen. Een executeur kan wel goederen verkopen wanneer dat nodig is om schulden van de nalatenschap te betalen, waarbij het testament aanvullende voorwaarden kan stellen. Heeft de overledene de executeur daarnaast als afwikkelingsbewindvoerder benoemd en verdergaande bevoegdheden toegekend, dan kan deze onder omstandigheden ook zelfstandig verdelen of goederen overdragen. Daarom moet altijd eerst het testament worden bekeken. De benaming van de functie alleen zegt niet voldoende over wat iemand daadwerkelijk mag doen.",
    },
    {
      question:
        "Wat is het verschil tussen een executeur, een executeur testamentair en een executeur afwikkelingsbewindvoerder?",
      answer:
        "Met “executeur testamentair” wordt in de praktijk meestal de executeur bedoeld die in een testament is benoemd. De term wordt tegenwoordig vooral als oudere benaming gebruikt. Een gewone executeur beheert de nalatenschap en zorgt onder andere voor het betalen van schulden en het voorbereiden van de nalatenschap op verdeling. Een executeur die daarnaast als afwikkelingsbewindvoerder is benoemd, kan verdergaande bevoegdheden krijgen. Zo kan in het testament worden bepaald dat deze persoon ook zelfstandig de nalatenschap mag verdelen. Het precieze verschil zit daarom niet alleen in de functienaam, maar vooral in de bevoegdheden die in het testament zijn vastgelegd.",
    },
    {
      question: "Wat kost een executeur en wie betaalt de kosten?",
      answer:
        "De vergoeding van een executeur kan in het testament worden bepaald. De overledene kan bijvoorbeeld vastleggen dat de executeur een bepaald bedrag, een uurtarief of juist geen vergoeding ontvangt. Staat hierover niets in het testament, dan bepaalt de wet dat de executeur in beginsel recht heeft op één procent van de waarde van het vermogen van de overledene op de sterfdag. De vergoeding en andere kosten die verband houden met de uitvoering van het executeurschap komen in beginsel ten laste van de nalatenschap. Bij een professionele executeur is het daarom verstandig vooraf duidelijk te krijgen welke regeling uit het testament van toepassing is en welke aanvullende kosten kunnen ontstaan.",
    },
  ],
  mediation: [
    {
      question: "Wat is nalatenschapsmediation en wanneer kan het helpen?",
      answer:
        "Nalatenschapsmediation is begeleiding door een onafhankelijke mediator wanneer betrokkenen een conflict hebben over een erfenis of de afwikkeling daarvan. De mediator beslist niet wie gelijk heeft, maar begeleidt de gesprekken en helpt partijen zelf naar oplossingen te zoeken. Mediation kan bijvoorbeeld zinvol zijn wanneer communicatie tussen erfgenamen is vastgelopen, wanneer verschil van mening bestaat over de verdeling of wanneer oude familieproblemen de afwikkeling bemoeilijken. Anders dan een rechter kan een mediator ook aandacht besteden aan belangen en emoties achter het juridische geschil. Deelname aan mediation is vrijwillig en vereist bereidheid van de betrokken partijen om met elkaar in gesprek te gaan.",
    },
    {
      question: "Bij welke conflicten over een erfenis kan mediation worden ingezet?",
      answer:
        "Mediation kan bij uiteenlopende conflicten rondom een nalatenschap worden ingezet. Denk aan onenigheid over de verdeling van geld of inboedel, de verkoop of overname van een woning, de waardering van bezittingen, de uitvoering van een testament of de manier waarop een executeur zijn werkzaamheden uitvoert. Ook spanningen rondom schenkingen, onterving of de communicatie tussen erfgenamen kunnen aanleiding zijn voor mediation. Daarbij hoeft het conflict niet uitsluitend juridisch te zijn. Juist wanneer familieverhoudingen en emoties een belangrijke rol spelen, kan mediation ruimte bieden om zowel de praktische als persoonlijke kanten van het geschil te bespreken.",
    },
    {
      question: "Moeten alle erfgenamen meewerken aan mediation?",
      answer:
        "Mediation is vrijwillig. Niemand kan worden verplicht om eraan deel te nemen. Wanneer een oplossing gevolgen heeft voor alle erfgenamen, is het doorgaans wel noodzakelijk dat alle betrokken personen die over dat onderwerp moeten beslissen aan de oplossing meewerken. Anders kan een afspraak niet zomaar namens een afwezige erfgenaam worden gemaakt. In sommige situaties kan mediation ook beginnen met een deel van de betrokkenen of kunnen bepaalde onderdelen afzonderlijk worden besproken. De mediator beoordeelt vooraf wie voor een zinvol traject aan tafel moeten zitten. Ook wanneer er al een rechtszaak loopt, kan mediation alleen plaatsvinden wanneer de betrokken partijen daarmee instemmen.",
    },
    {
      question: "Wat gebeurt er als één erfgenaam niet wil meewerken?",
      answer:
        "Omdat mediation vrijwillig is, kan een erfgenaam niet worden gedwongen om deel te nemen. Wanneer de medewerking van die erfgenaam noodzakelijk is om tot een volledige oplossing of verdeling te komen, kan het ontbreken daarvan betekenen dat mediation het gehele conflict niet kan oplossen. Er kan dan worden bekeken of overleg op een andere manier mogelijk is. Komt u er gezamenlijk niet uit over de verdeling van een nalatenschap, dan kan uiteindelijk een civiele procedure nodig zijn waarin de rechter een beslissing neemt. Ook tijdens een gerechtelijke procedure kan mediation later alsnog worden geprobeerd wanneer alle betrokkenen daarvoor openstaan.",
    },
    {
      question: "Wat kost nalatenschapsmediation en wie betaalt de mediator?",
      answer:
        "Voor nalatenschapsmediation bestaat geen vast algemeen tarief. De kosten hangen onder andere af van het uurtarief van de mediator, de complexiteit van het conflict, het aantal betrokken personen en het aantal gesprekken dat nodig is. Vooraf worden afspraken gemaakt over het tarief en over de manier waarop de kosten tussen de partijen worden verdeeld. Vaak worden de kosten gezamenlijk gedragen, maar partijen kunnen hierover andere afspraken maken. Wanneer er al een gerechtelijke procedure loopt, kan het mediationbureau van de rechtbank helpen bij het vinden van een geschikte mediator waarbij ook het tarief wordt meegenomen. Vraag daarom vooraf altijd om duidelijke informatie over tarieven en mogelijke bijkomende kosten.",
    },
  ],
  erfbelasting: [
    {
      question: "Moet ik erfbelasting betalen over een erfenis?",
      answer:
        "Of u erfbelasting moet betalen, hangt af van de waarde van wat u erft en uw relatie tot de overledene. Iedere categorie erfgenaam heeft een bepaalde vrijstelling. Erft u minder dan of evenveel als de vrijstelling die voor u geldt, dan betaalt u over die verkrijging geen erfbelasting. Erft u meer, dan wordt erfbelasting berekend over het bedrag boven de vrijstelling. Ook het belastingtarief verschilt per relatie tot de overledene. Een partner en een kind worden bijvoorbeeld anders behandeld dan een broer, zus of vriend. De vrijstellingen en tarieven worden periodiek aangepast, waardoor altijd naar het jaar van overlijden moet worden gekeken.",
    },
    {
      question: "Wanneer moet ik aangifte erfbelasting doen?",
      answer:
        "De Belastingdienst stuurt meestal binnen enkele maanden na het overlijden een brief waarin staat of aangifte erfbelasting moet worden gedaan. De uiterste datum staat in deze brief. Voor overlijdens in 2026 geldt een aangiftetermijn van twintig maanden na de overlijdensdatum. Dit is langer dan voor overlijdens in eerdere jaren. Ook wanneer u geen aangiftebrief heeft ontvangen, kan aangifte verplicht zijn wanneer u meer erft dan uw vrijstelling. Het is daarom verstandig niet uitsluitend op een brief te wachten, maar zelf te controleren of aangifte nodig is. Bij bijzondere omstandigheden kan onder voorwaarden uitstel mogelijk zijn.",
    },
    {
      question: "Hoeveel erfbelasting moet ik betalen en welke vrijstelling geldt voor mij?",
      answer:
        "De hoogte van de erfbelasting hangt af van uw relatie tot de overledene en de waarde van uw verkrijging. Voor 2026 geldt bijvoorbeeld een vrijstelling van € 828.035 voor een echtgenoot, geregistreerde partner of kwalificerende samenwonende partner. Voor een kind, pleegkind of stiefkind bedraagt de vrijstelling € 26.230. Voor ouders, kleinkinderen en andere erfgenamen gelden andere bedragen. Over het deel van de erfenis dat boven uw vrijstelling uitkomt, kan erfbelasting verschuldigd zijn. De percentages verschillen eveneens per categorie en omvang van de verkrijging. Omdat bedragen jaarlijks kunnen wijzigen, moet altijd het jaar van overlijden als uitgangspunt worden genomen.",
    },
    {
      question: "Wie moet de aangifte erfbelasting doen?",
      answer:
        "Is in het testament een executeur aangewezen, dan doet de executeur in beginsel aangifte erfbelasting voor alle erfgenamen. Is er geen executeur, dan kunnen de erfgenamen samen bepalen wie de aangifte verzorgt. Eén erfgenaam kan de aangifte voor alle erfgenamen doen, maar erfgenamen kunnen in bepaalde situaties ook afzonderlijk aangifte doen. Een gezamenlijke aangifte kan praktisch zijn omdat dan beter zichtbaar is of de volledige nalatenschap correct is verwerkt. Ook wanneer iemand anders de aangifte verzorgt, blijft het belangrijk dat alle benodigde informatie over bezittingen, schulden en verkrijgers beschikbaar is en dat de gegevens in de aangifte juist zijn.",
    },
    {
      question:
        "Welke bezittingen, schulden en kosten moet ik opnemen in de aangifte erfbelasting?",
      answer:
        "Voor de aangifte moet eerst de waarde van de nalatenschap worden bepaald. Daarbij kunnen onder andere banktegoeden, beleggingen, een woning, andere bezittingen, vorderingen en eventueel buitenlands vermogen relevant zijn. Daartegenover staan schulden zoals hypotheken, leningen en bepaalde openstaande verplichtingen. Ook normale uitvaartkosten kunnen onder voorwaarden worden afgetrokken, verminderd met een eventuele uitkering uit een uitvaartverzekering. Niet iedere kostenpost die tijdens de afwikkeling ontstaat is aftrekbaar. Zo zijn bijvoorbeeld notariskosten voor een verklaring van erfrecht en het loon van een executeur volgens de Belastingdienst niet als uitvaartkosten aftrekbaar.",
    },
  ],
};

export const englishKnowledgeArticles: KnowledgeArticle[] = [
  {
    slug: "wat-doet-een-executeur-precies",
    title: "What exactly does an executor do?",
    excerpt:
      "After a death, many matters come at relatives at once. An executor can manage the estate and bring structure to the settlement.",
    category: "afwikkeling",
    readingTime: "3 min",
    sections: [
      {
        paragraphs: [
          "After a death, many matters come at relatives at once. An executor can take charge of managing the estate and bring structure to the settlement. What an executor may do depends on the law and on what the deceased person recorded in the will.",
        ],
      },
      {
        heading: "The main duties",
        paragraphs: [
          "An executor is appointed in a will and must accept that appointment. In most cases, the executor lists the assets and debts, manages the estate, pays debts that must be paid during that management and prepares the inheritance tax return. This may include collecting bank details, requesting outstanding invoices and contacting organisations. Sometimes the will also instructs the executor to arrange the funeral.",
          "The executor must inform the heirs and eventually account for the work carried out. A clear estate inventory and a careful overview of income and expenses help with that.",
        ],
      },
      {
        heading: "May an executor divide the inheritance?",
        paragraphs: [
          "An ordinary executor manages the estate and prepares it for distribution. That does not automatically mean the executor independently decides who receives which asset. In principle, distribution is done by the heirs together, taking account of the will and the law. If the will gives broader powers, for example through settlement administration, the role may be wider. Always have the will reviewed before assuming what an executor may do.",
          "A notary has a different role: a notary can advise, prepare documents and, where needed, issue a certificate of inheritance. A notary does not automatically take over management of the estate.",
        ],
      },
      {
        heading: "When is support useful?",
        paragraphs: [
          "Support is especially valuable when there are several heirs, a home, a business or unclear debts. The Inheritance Guide helps map out the work and organise the settlement. Where questions arise about exact powers under a will, we involve a notary where needed.",
          "Would you like to know who may arrange what in your situation? Contact The Inheritance Guide.",
        ],
      },
    ],
  },
  {
    slug: "hoe-werkt-erfbelasting",
    title: "How does inheritance tax work?",
    excerpt:
      "Receiving an inheritance does not automatically mean you pay inheritance tax. First, the inheritance, its value and the applicable exemption must be clear.",
    category: "afwikkeling",
    readingTime: "3 min",
    sections: [
      {
        paragraphs: [
          "Receiving an inheritance does not automatically mean you pay inheritance tax. First, it must be clear what you inherit, what it is worth and which exemption applies to you. Tax may only be due on the amount above that exemption.",
        ],
      },
      {
        heading: "From estate to your share",
        paragraphs: [
          "The estate consists of assets and debts, such as bank accounts, a home, investments and personal loans. For tax purposes, it matters which part of the estate you receive. Homes have specific valuation rules. A life insurance payout may also count in some circumstances, even if it is paid directly to a beneficiary. A complete overview is therefore needed before making a calculation.",
          "Every heir has their own exemption. The amount depends in part on the relationship with the deceased. Partners usually have a much higher exemption than children; other heirs have different amounts. Tax rates also depend on the relationship and the size of the taxable amount. The Dutch Tax Administration publishes the amounts for each year of death.",
        ],
      },
      {
        heading: "Who files and when?",
        paragraphs: [
          "The Tax Administration often sends a tax return letter. Even without a letter, a return may be needed if you inherit more than your exemption. If there is an executor, the executor usually files the return. Otherwise, the heirs decide together who will handle it.",
          "For deaths in 2026, the filing deadline in the tax return letter is twenty months after the date of death. For deaths in 2025 or earlier, the deadline was usually eight months. Always check the year of death and the date in the letter; an old checklist can send you in the wrong direction.",
        ],
      },
      {
        heading: "First an overview, then the return",
        paragraphs: [
          "Collect bank balances, home details, debts, gifts and any insurance policies. Also record who the heirs are and what each receives under the will or the law. The Inheritance Guide helps collect this information clearly and involves a tax specialist for complex calculations where needed.",
          "Would you like to know which information is still missing for the return? We help you complete the file.",
        ],
      },
    ],
  },
  {
    slug: "levenstestament-waarom-is-het-belangrijk",
    title: "Living will: why is it important?",
    excerpt:
      "A living will records who may act for you if you can no longer arrange financial, personal or medical matters yourself.",
    category: "voorbereiding",
    readingTime: "3 min",
    sections: [
      {
        paragraphs: [
          "Who arranges your banking if you temporarily or permanently cannot do so yourself? Who discusses your wishes with healthcare providers if you cannot decide? A living will lets you record in advance who may act on your behalf and within which limits.",
        ],
      },
      {
        heading: "A will for during your lifetime",
        paragraphs: [
          "An ordinary will takes effect after death. A living will concerns the period while you are still alive. You can appoint one or more representatives for financial, personal and medical matters, such as paying bills, contacting the bank, managing a home or speaking with doctors if you are no longer legally capable of making a decision.",
          "You can also record how the representative must account for their actions and whether someone supervises them. That is wise: a power of attorney gives a lot of trust and a lot of responsibility. Discuss medical wishes with your doctor as well, so they are known and recorded appropriately.",
        ],
      },
      {
        heading: "Why waiting creates risk",
        paragraphs: [
          "Without a suitable power of attorney, it may become necessary to ask the court to appoint an administrator or mentor. Even if you have a partner, court involvement may be needed for certain actions. By making choices in time, you give your loved ones clarity and stay in control of who represents you.",
          "The document must be prepared while you understand what you are deciding. The notary assesses your capacity when preparing it. Do not wait until an acute situation arises.",
        ],
      },
      {
        heading: "Start with the right questions",
        paragraphs: [
          "Who do you trust with this role? Is a substitute needed? Which decisions may they make independently? Where are your documents and whom should they contact? The Inheritance Guide helps map out these questions and your financial and practical information in advance. The notary prepares the living will itself.",
          "Would you like clarity before speaking with the notary? We help you think through what you want to arrange.",
        ],
      },
    ],
  },
  {
    slug: "nalatenschap-bij-een-samengesteld-gezin",
    title: "Estate planning in a blended family",
    excerpt:
      "In a blended family, inheritance law can produce unexpected outcomes. Stepchildren do not automatically inherit from a stepparent.",
    category: "voorbereiding",
    readingTime: "3 min",
    sections: [
      {
        paragraphs: [
          "In a blended family, everyone may feel like family, but inheritance law makes distinctions. A stepchild does not automatically inherit from a stepparent. The position of a new partner and children from a previous relationship also deserves attention. That is why it is wise to discuss in time what you want to arrange for each person.",
        ],
      },
      {
        heading: "Who inherits without a will?",
        paragraphs: [
          "The outcome depends on family ties and relationship status. If you are married or in a registered partnership and have children, the statutory division often applies: the surviving partner receives the assets and debts of the estate, while the children receive a monetary claim. Children of your partner who are not legally your children do not, in principle, inherit from you without a will.",
          "If you live together without marriage or registered partnership, your partner is not automatically an heir. A cohabitation agreement alone does not make someone an heir either. That difference can have major consequences for the home and the financial security of the surviving partner.",
        ],
      },
      {
        heading: "What can you arrange in advance?",
        paragraphs: [
          "In a will, you can leave something to stepchildren, appoint an heir or make arrangements that fit your family. Sometimes usufruct of a home can help: the children inherit the home while the partner may continue using it under conditions. The right choice depends on ownership of the home, earlier wills, marital terms and the wishes of everyone involved.",
          "Also consider the position of your own children. A child disinherited in a will may still be able to claim the forced heirship portion: a right to money, not to specific items.",
        ],
      },
      {
        heading: "Clarity brings calm",
        paragraphs: [
          "First map out who is legally related to whom, who owns which assets and which agreements already exist. The Inheritance Guide helps organise this overview and your wishes. A notary then translates the choices into a legally suitable will.",
          "Would you like to know which questions your family should discuss? Contact us for an initial overview.",
        ],
      },
    ],
  },
  {
    slug: "wat-te-doen-bij-overlijden-de-checklist",
    title: "What to do after a death: the checklist",
    excerpt:
      "After a death, not everything has to be arranged at once. This order helps you keep an overview.",
    category: "afwikkeling",
    readingTime: "3 min",
    sections: [
      {
        paragraphs: [
          "After a death, you do not have to arrange everything at once. Some matters require immediate attention; others can wait until it is clear who is authorised and what the estate looks like. This order helps you keep an overview.",
        ],
      },
      {
        heading: "The first days",
        paragraphs: [
          "Contact a doctor to confirm the death and involve a funeral director if you want help with the funeral. The death must be registered with the municipality; the funeral director often arranges this. Gather the most important documents, such as identity details, insurance information and any funeral wishes. Also make sure the home is secure and that pets or people who depended on the deceased are cared for.",
        ],
      },
      {
        heading: "After that: who may arrange what?",
        paragraphs: [
          "Check whether there is a will and whether an executor has been appointed. A notary can consult the Central Wills Register. Make an initial overview of bank accounts, assets, debts, insurance policies and ongoing obligations. Report the death to relevant organisations and providers, but do not cancel everything automatically: some agreements or insurance policies may still be needed during settlement.",
          "Are you an heir? Do not choose too quickly between unconditional acceptance, beneficial acceptance or rejection. Selling estate assets or taking them for yourself can mean you have accepted the inheritance unconditionally. Paying the funeral from the estate is an exception according to the Dutch government. If you are unsure about debts, seek advice first.",
        ],
      },
      {
        heading: "The following weeks",
        paragraphs: [
          "Where needed, request a certificate of inheritance, manage the estate according to the applicable powers and prepare a complete estate inventory. Then arrange outstanding debts, tax matters and, where possible, distribution. Agree with the heirs who maintains contact with organisations and where documents are kept.",
          "The Inheritance Guide helps plan the steps, gather information and monitor what has already been arranged. That way, you do not have to oversee everything yourself during a difficult period.",
          "Have you just experienced a death? We help you determine what needs attention first.",
        ],
      },
    ],
  },
  {
    slug: "crypto-en-digitale-bezittingen-in-een-erfenis",
    title: "Crypto and digital assets in an inheritance",
    excerpt:
      "An estate now includes more than a home, bank account and belongings. Digital assets require their own overview.",
    category: "voorbereiding",
    readingTime: "3 min",
    sections: [
      {
        paragraphs: [
          "An estate now consists of more than a home, a bank account and belongings. Think also of cryptocurrency, online investments, domain names, cloud photos and accounts with ongoing subscriptions. Without an overview, relatives may miss value or be unable to access important information.",
        ],
      },
      {
        heading: "What belongs to the digital estate?",
        paragraphs: [
          "Some digital assets have financial value, such as crypto, an online shop or a domain name. Others are mainly personally valuable, such as photos, emails and social media. There may also be digital debts or ongoing costs. Relatives' rights differ by platform and contract. The fact that someone used an account does not automatically mean someone else may take it over.",
          "Access is a particular concern with cryptocurrency. If the required keys or recovery details cannot be found, the value may be lost. At the same time, such details should not be placed unsecured in a will or an easily accessible document.",
        ],
      },
      {
        heading: "What can you do during life?",
        paragraphs: [
          "Make an overview of platforms, wallets, devices, domain names and important files. Record what should happen to them and who the right contact person is. Store access details securely and separately record how an authorised person can find them after your death. Update the overview regularly. A notary can discuss which wishes belong in a will; practical access details require a secure and changeable storage method.",
        ],
      },
      {
        heading: "What should relatives do after death?",
        paragraphs: [
          "Start by inventorying devices, administration, bank statements and known platforms. Do not move or distribute digital value before it is clear who is authorised, which debts exist and how the inheritance has been accepted. Document found balances and values for the inheritance tax return. A specialist can help with tax questions.",
          "The Inheritance Guide includes digital assets in the estate overview and helps relatives avoid overlooking anything.",
          "Would you like to map out your digital estate better? Contact us.",
        ],
      },
    ],
  },
  {
    slug: "schenken-bij-leven-slim-en-eerlijk-besparen",
    title: "Gifting during life: saving wisely and fairly",
    excerpt:
      "Gifts can help someone now and sometimes reduce later inheritance tax, but they should fit your own security and family situation.",
    category: "voorbereiding",
    readingTime: "3 min",
    sections: [
      {
        paragraphs: [
          "Giving during life can be a meaningful way to help someone now. Sometimes it also reduces later inheritance tax. But a gift is only sensible if it fits your own financial security, your family and the tax rules. Looking only at tax savings gives an incomplete picture.",
        ],
      },
      {
        heading: "How do exemptions work?",
        paragraphs: [
          "Annual exemptions apply to gifts. The amount depends on the relationship between giver and recipient and is set per calendar year. Parents gifting to a child have a different exemption from, for example, grandparents or friends. There are also one-off increased exemptions under conditions. Always check the amount and conditions for the year in which you actually make the gift. Sometimes the recipient must file a gift tax return, including to use an increased exemption.",
          "A gift shortly before death needs extra attention. If the giver dies within 180 days, the gift is generally treated as part of the inheritance for inheritance tax purposes. A last-minute gift therefore does not automatically create a tax advantage.",
        ],
      },
      {
        heading: "Record the intention too",
        paragraphs: [
          "Was the money intended as an advance on a future inheritance? Do you want the gift to remain your child's private property? Are there other children, and do you want to prevent them from later looking differently at the arrangements? Discuss such questions in advance and record what you decide. Also consider your own expenses, care costs and the possibility that you may need the gifted amount later.",
          "Additional rules may apply to a home, a business, a forgiven loan or a conditional gift. Have those situations assessed in advance by a notary or tax adviser.",
        ],
      },
      {
        heading: "A suitable gifting plan",
        paragraphs: [
          "The Inheritance Guide helps map out your assets, earlier gifts and wishes. That allows you to discuss with a notary or tax adviser what is legally and fiscally sensible, without losing sight of the personal side.",
          "Would you like to make gifts, but first understand what this means for your estate? We put the questions in order for you.",
        ],
      },
    ],
  },
  {
    slug: "een-erfenis-verdelen-zonder-ruzie",
    title: "Dividing an inheritance without conflict",
    excerpt:
      "An inheritance is rarely only about money. Clear information and agreed working methods help prevent conflict.",
    category: "afwikkeling",
    readingTime: "3 min",
    sections: [
      {
        paragraphs: [
          "An inheritance is rarely only about money. A photo album, piece of jewellery or parental home can mean different things to different heirs. At the same time, assets and debts must be handled under the will and the law. Calm usually arises when everyone knows what exists, who may make decisions and how those decisions are made.",
        ],
      },
      {
        heading: "Start with the legal basis",
        paragraphs: [
          "First check whether there is a will, who the heirs are and whether an executor has been appointed. Also check whether the statutory division applies: children then usually receive a monetary claim against the surviving partner and there is not immediately an ordinary distribution of all assets. The outcome depends on the family situation and the will.",
          "Before heirs divide goods among themselves, they need insight into debts, ongoing costs and taxes. Beneficial acceptance also brings rules for settlement. Do not give away estate money or distribute valuable items based on an incomplete overview.",
        ],
      },
      {
        heading: "Agree on one method",
        paragraphs: [
          "Prepare an estate inventory together. Record how assets are valued, which documents are available to everyone and how choices will be made. For emotionally valuable items, it can help to first list wishes before assigning values or drawing lots.",
          "Use one central contact person where possible, but keep all heirs informed. Written summaries after conversations prevent later misunderstandings. If communication is already tense, involve a neutral adviser or mediator in time.",
        ],
      },
      {
        heading: "Keep the overview",
        paragraphs: [
          "The Inheritance Guide helps create structure, collect documents and clarify the steps. This makes the process less dependent on memory, assumptions or emotion.",
          "Would you like to divide an estate carefully? We help you create a clear route.",
        ],
      },
    ],
  },
  {
    slug: "erfenis-aanvaarden-beneficiair-aanvaarden-of-verwerpen-wat-kiest-u",
    title: "Accepting, beneficially accepting or rejecting an inheritance: what do you choose?",
    excerpt:
      "As an heir, you usually have three choices. The safest option depends on the assets, debts and uncertainty in the estate.",
    category: "afwikkeling",
    readingTime: "3 min",
    sections: [
      {
        paragraphs: [
          "As an heir, you generally have three options: accept unconditionally, accept beneficially or reject. The choice has legal consequences. That is why it is wise to first create an initial overview of assets and debts.",
        ],
      },
      {
        heading: "Unconditional acceptance",
        paragraphs: [
          "With unconditional acceptance, you accept the assets and the debts. If the estate turns out negative, you may become personally liable for debts. Certain conduct can also be seen as unconditional acceptance, such as selling estate goods or taking them for yourself.",
        ],
      },
      {
        heading: "Beneficial acceptance",
        paragraphs: [
          "With beneficial acceptance, the estate is settled according to legal rules and you are generally protected against a shortfall. This can be sensible when debts are unclear. It does mean that the estate must be handled carefully and that creditors have to be respected.",
        ],
      },
      {
        heading: "Rejection",
        paragraphs: [
          "If you reject, you are no longer an heir and receive nothing. Rejection can have consequences for your children or other family members who may then move up in the order of succession. Seek advice before making that choice.",
          "The Inheritance Guide helps separate urgent practical steps from choices with legal consequences, so you can decide with more confidence.",
        ],
      },
    ],
  },
  {
    slug: "wat-is-een-verklaring-van-erfrecht-en-wanneer-heeft-u-die-nodig",
    title: "What is a certificate of inheritance and when do you need one?",
    excerpt:
      "A certificate of inheritance is a notarial document showing who the heirs are and who may act for the estate.",
    category: "afwikkeling",
    readingTime: "3 min",
    sections: [
      {
        paragraphs: [
          "A certificate of inheritance is a notarial document stating, among other things, who the heirs are and who is authorised to act on behalf of the estate. Banks and other organisations may ask for it before giving access to accounts or information.",
        ],
      },
      {
        heading: "What does the notary check?",
        paragraphs: [
          "The notary investigates the civil status records, the Central Wills Register, the will if one exists and the position of the heirs. If an executor has been appointed, the certificate can also record that person's authority.",
          "The certificate does not itself divide the inheritance. It mainly proves who may act and who is involved.",
        ],
      },
      {
        heading: "Is it always required?",
        paragraphs: [
          "Not always. Sometimes a death certificate is enough, especially for simple situations or small balances. For a home, multiple heirs, a will or uncertainty about authority, a certificate is often needed.",
          "The Inheritance Guide helps determine which organisations need which documents, so you do not request more than necessary but also do not get stuck.",
        ],
      },
    ],
  },
  {
    slug: "hoe-weet-u-of-er-een-testament-is",
    title: "How do you know whether there is a will?",
    excerpt:
      "The Central Wills Register records whether a will exists, when it was made and which notary holds it.",
    category: "afwikkeling",
    readingTime: "3 min",
    sections: [
      {
        paragraphs: [
          "After a death, it is important to know whether there is a will. The will can determine who the heirs are, whether an executor has been appointed and which wishes the deceased recorded.",
        ],
      },
      {
        heading: "The Central Wills Register",
        paragraphs: [
          "In the Netherlands, you can ask the Central Wills Register whether someone made a will. The register states whether a will exists, when it was made and at which notary. It does not show the contents of the will.",
          "If a will exists, a notary can request and assess it. The notary determines who is entitled to receive information about its contents.",
        ],
      },
      {
        heading: "Why early checking matters",
        paragraphs: [
          "Do not assume that old family arrangements or verbal wishes are enough. A will can change who may act and who inherits. Checking early prevents work from being done from the wrong starting point.",
          "The Inheritance Guide helps include this check in the first steps after death and helps you understand which follow-up questions to ask the notary.",
        ],
      },
    ],
  },
  {
    slug: "wat-gebeurt-er-met-een-huis-en-hypotheek-na-overlijden",
    title: "What happens to a home and mortgage after death?",
    excerpt:
      "A home and mortgage usually require careful coordination between heirs, bank, insurer, notary and sometimes an estate agent.",
    category: "afwikkeling",
    readingTime: "3 min",
    sections: [
      {
        paragraphs: [
          "A home often forms a major part of an estate. After death, ownership, mortgage obligations, insurance and practical management must be clarified. Do not assume that the home can immediately be sold, occupied or emptied without checking authority.",
        ],
      },
      {
        heading: "First establish who may act",
        paragraphs: [
          "Check whether there is a will, who the heirs are and whether an executor has been appointed. The Land Registry, bank and notary may need documentation before changes can be made. If there is a surviving partner, the statutory division or the will may affect the position.",
        ],
      },
      {
        heading: "Mortgage and ongoing costs",
        paragraphs: [
          "Mortgage payments, insurance, utilities and maintenance may continue. Inform the bank and insurer in time, but do not cancel essential cover too quickly. A life insurance policy linked to the mortgage can also be relevant.",
          "The Inheritance Guide helps bring together the documents, contacts and decisions around the home, so the heirs can make careful choices.",
        ],
      },
    ],
  },
  {
    slug: "wat-is-een-kindsdeel-en-wanneer-wordt-het-uitbetaald",
    title: "What is a child's share and when is it paid?",
    excerpt:
      "Under the statutory division, children often receive a monetary claim that is not immediately payable.",
    category: "afwikkeling",
    readingTime: "3 min",
    sections: [
      {
        paragraphs: [
          "The term child's share is often used for the part a child is entitled to from a parent's estate. Under the statutory division, the surviving partner receives the assets and debts, while the children receive a monetary claim.",
        ],
      },
      {
        heading: "Not always immediately payable",
        paragraphs: [
          "In many situations, the child's claim is only payable later, for example when the surviving partner dies, becomes bankrupt or enters debt restructuring. A will can contain additional rules. Interest may also be relevant.",
          "The exact amount depends on the size of the estate, the number of heirs, debts and any provisions in the will.",
        ],
      },
      {
        heading: "Why recording matters",
        paragraphs: [
          "It is important to record the claims clearly, even if no money is paid immediately. This prevents uncertainty at the second death or when family circumstances change.",
          "The Inheritance Guide helps collect the information needed to calculate and document the position, together with the notary where needed.",
        ],
      },
    ],
  },
  {
    slug: "wat-gebeurt-er-met-uw-erfenis-als-u-geen-testament-heeft",
    title: "What happens to your estate if you do not have a will?",
    excerpt:
      "If there is no will, the law decides who inherits. That may fit your wishes, but not always.",
    category: "voorbereiding",
    readingTime: "3 min",
    sections: [
      {
        paragraphs: [
          "If you do not have a will, the law determines who your heirs are. That may fit your wishes, but it does not always do so. The outcome depends on your family situation and relationship status.",
        ],
      },
      {
        heading: "The legal order",
        paragraphs: [
          "Spouses, registered partners and children are in the first group of heirs. If there is a partner and children, the statutory division often applies. If there are no heirs in this group, the law looks at parents, siblings and more distant relatives.",
          "An unmarried cohabiting partner is not automatically an heir. A stepchild is also not automatically your heir unless you arrange this.",
        ],
      },
      {
        heading: "When a will may be needed",
        paragraphs: [
          "A will can be important if you live together unmarried, have a blended family, want to appoint an executor, want to leave something to someone outside the legal order or want to make specific arrangements for your partner or children.",
          "The Inheritance Guide helps map out your family, assets, debts and wishes. A notary prepares the will and assesses what is legally possible.",
        ],
      },
    ],
  },
  {
    slug: "wat-is-het-verschil-tussen-een-testament-en-een-levenstestament",
    title: "What is the difference between a will and a living will?",
    excerpt:
      "The names are similar, but the documents work at different times and answer different questions.",
    category: "voorbereiding",
    readingTime: "3 min",
    sections: [
      {
        paragraphs: [
          "The names sound similar, but the documents work at different moments. A living will concerns your interests during your lifetime. An ordinary will determines what happens to your estate after your death.",
        ],
      },
      {
        heading: "The living will",
        paragraphs: [
          "In a living will, you can appoint a representative for situations in which you can no longer make certain decisions yourself. Think of banking, managing a home and personal or medical wishes. You can set limits on the power of attorney and record who supervises. The document ends at death; the representative does not automatically become executor.",
        ],
      },
      {
        heading: "The will",
        paragraphs: [
          "In a will, prepared by a notary, you record who your heirs are, what you want to leave and who manages the estate after your death. You can appoint an executor, include a legacy or arrange the position of a partner or stepchild. After death, both the law and the actual contents of the will matter.",
          "Many people need both documents. A will does not determine who acts for you during life if you can no longer decide. A living will does not determine who inherits your assets after death.",
          "The Inheritance Guide helps put your situation and wishes in order before you speak with a notary.",
        ],
      },
    ],
  },
  {
    slug: "wanneer-is-het-verstandig-om-uw-testament-aan-te-passen",
    title: "When is it wise to update your will?",
    excerpt:
      "A will does not expire with time, but life changes can make an old will produce unintended results.",
    category: "voorbereiding",
    readingTime: "3 min",
    sections: [
      {
        paragraphs: [
          "A will does not expire simply because years pass. That is precisely why an old will can continue to apply unintentionally, even though your life has changed significantly.",
        ],
      },
      {
        heading: "Moments to review it",
        paragraphs: [
          "Marriage, registered partnership, divorce or a new relationship can be reasons to review your will. The same applies to the birth of children or grandchildren, a death in the family, a business, a move abroad or a major change in assets. Also check whether the appointed executor is still available and suitable.",
          "A divorce or new marriage does not automatically change your will in the way you might expect. Do not rely only on what you intended at the time. Ask a notary to assess how the wording works now.",
        ],
      },
      {
        heading: "What can you prepare yourself?",
        paragraphs: [
          "Write down what has changed since the will was made and what you now want to achieve for your partner, children or others. Bring earlier wills and relevant agreements, such as marital terms or a cohabitation agreement. Also look at your living will: the chosen representative may need updating.",
          "Changes are made through the notary. Tearing up your own copy does not invalidate a notarial will. The Inheritance Guide helps organise the changes and questions beforehand.",
        ],
      },
    ],
  },
  {
    slug: "wie-zorgt-er-voor-uw-minderjarige-kinderen-als-u-overlijdt",
    title: "Who cares for your minor children if you die?",
    excerpt:
      "For parents, this is often the most important estate question: who cares for the children, and who manages what they inherit?",
    category: "voorbereiding",
    readingTime: "3 min",
    sections: [
      {
        paragraphs: [
          "For parents, this is often the most important question about their estate. Who takes over care if you are no longer there? Two different matters are involved: who receives parental authority or guardianship, and who manages the assets the child inherits?",
        ],
      },
      {
        heading: "Authority and guardianship",
        paragraphs: [
          "If one parent dies and the other parent still has parental authority, that parent generally remains responsible. For the situation in which no parent with authority is available, you can appoint a guardian in a will or through the custody register. The appointed person is asked whether they accept guardianship. Discuss your choice in advance and consider a substitute.",
        ],
      },
      {
        heading: "Your child's inheritance",
        paragraphs: [
          "A minor child can inherit, but cannot independently make all decisions about an estate. In a will, you can arrange administration over the child's share and appoint someone to manage it. The person caring for your child and the person managing the assets do not have to be the same person.",
        ],
      },
      {
        heading: "What helps in practice?",
        paragraphs: [
          "In addition to legal arrangements, record practical information: important contacts, school, medical details, insurance and documents. Make sure the information is stored safely and can be found. A Personal Life File from The Inheritance Guide can help create this overview. Appointment of a guardian and testamentary administration are discussed with the notary.",
        ],
      },
    ],
  },
  {
    slug: "wat-kunt-u-nu-al-vastleggen-om-uw-nabestaanden-werk-te-besparen",
    title: "What can you record now to spare your relatives work later?",
    excerpt:
      "A clear overview does not remove grief, but it prevents relatives from having to search for important information.",
    category: "voorbereiding",
    readingTime: "3 min",
    sections: [
      {
        paragraphs: [
          "After a death, relatives often need answers most of all. Where are the insurance papers? Which accounts exist? Who needs to be called? A good overview does not take away their grief, but it prevents them from having to search for important information while so much is already coming at them.",
        ],
      },
      {
        heading: "Start with the basics",
        paragraphs: [
          "Record your contact persons, important documents, bank accounts, insurance policies, assets and debts. Add ongoing obligations such as mortgage, rent, subscriptions and loans. Describe where your will or living will can be found and which notary you visited. Do not keep an unsecured password list among papers accessible to everyone.",
        ],
      },
      {
        heading: "Record your wishes too",
        paragraphs: [
          "Think of the funeral, personal belongings and digital accounts. An overview of wishes is valuable for your loved ones, but it does not automatically have the same legal effect as a will. If you want to appoint heirs or change the distribution of your estate, discuss this with a notary.",
        ],
      },
      {
        heading: "Keep it usable",
        paragraphs: [
          "A file no one can find is of little help. Let a trusted person know where the overview is safely stored and update it after important changes. The Inheritance Guide helps you gather this information step by step and identify missing subjects.",
          "You do not have to arrange everything in one day. Start with the documents relatives will look for first.",
        ],
      },
    ],
  },
  {
    slug: "wat-gebeurt-er-met-de-erfenis-van-uw-kinderen-als-uw-partner-later-een-nieuwe-relatie-krijgt",
    title:
      "What happens to your children's inheritance if your partner later starts a new relationship?",
    excerpt:
      "Many parents want to protect both the surviving partner and the children. A new relationship can make that more complex.",
    category: "voorbereiding",
    readingTime: "3 min",
    sections: [
      {
        paragraphs: [
          "Many parents want to give their partner financial peace after death and also make sure their children ultimately receive what was intended for them. If the surviving partner later starts a new relationship, these wishes can become complex. The outcome depends on the statutory division, ownership, earlier agreements and the will.",
        ],
      },
      {
        heading: "The children's position",
        paragraphs: [
          "Under the statutory division, children receive a monetary claim against the surviving partner after the first death. That claim remains relevant even if the partner later remarries or cohabits. Whether it is payable and whether interest applies must be assessed under the law and the will.",
          "A new partner does not automatically become heir of the parent who already died. But a later marriage or choices about joint assets can affect what is present at the second death and how complex the settlement becomes.",
        ],
      },
      {
        heading: "What can you discuss in advance?",
        paragraphs: [
          "A notary can discuss interest on children's claims, moments when a claim becomes payable, usufruct, exclusion clauses and other suitable provisions. Not every construction fits every family. A rule that gives children certainty must also remain workable for the surviving partner.",
          "First map out the home, assets, existing wills and family situation. The Inheritance Guide helps organise interests and questions before choices are legally recorded.",
        ],
      },
    ],
  },
  {
    slug: "welke-schulden-horen-bij-een-nalatenschap",
    title: "Which debts belong to an estate?",
    excerpt:
      "A good estate overview includes both assets and debts. Only then can safe next steps be chosen.",
    category: "afwikkeling",
    readingTime: "3 min",
    sections: [
      {
        paragraphs: [
          "When thinking about an estate, people often first think of a house, savings and belongings. For a proper picture, the debts must also be found. Only when both sides are known can you assess the value of the estate and which steps are safe.",
        ],
      },
      {
        heading: "Think beyond loans",
        paragraphs: [
          "A mortgage or personal loan is easy to recognise. But there may also be unpaid bills, credit card debts, tax debts, overdue fixed costs and funeral costs still to be paid. Sometimes there is a claim from children arising from the estate of an earlier deceased parent. A paper gift can also create a debt position. The exact legal treatment differs by item.",
          "Check bank statements, tax letters, contracts and correspondence. Ask banks and other parties specifically about outstanding obligations. Also allow for amounts that are not yet final, such as tax assessments.",
        ],
      },
      {
        heading: "What if debts exceed assets?",
        paragraphs: [
          "Do not accept the inheritance unconditionally in haste. Beneficial acceptance can protect against a shortfall, but then the estate must be settled according to the rules. Creditors have a different position from heirs who already want to divide goods.",
          "The Inheritance Guide helps collect financial information and build an overview of assets and debts. Ask legal advice when debts are unclear or when you are unsure whether to accept.",
        ],
      },
    ],
  },
  {
    slug: "wat-mag-u-doen-voordat-u-een-erfenis-heeft-aanvaard",
    title: "What may you do before accepting an inheritance?",
    excerpt:
      "You may need to act after a death, but some actions can have legal consequences for acceptance.",
    category: "afwikkeling",
    readingTime: "3 min",
    sections: [
      {
        paragraphs: [
          "After a death, you naturally want to act. The home must remain safe, the funeral must be arranged and bills arrive. Still, caution is needed as long as you have not chosen whether to accept unconditionally, accept beneficially or reject the inheritance.",
        ],
      },
      {
        heading: "What requires extra attention?",
        paragraphs: [
          "Do not sell estate goods and do not take them for yourself. Do not use the deceased person's money as if it is already your inheritance. Such actions can be seen as unconditional acceptance, with possible liability for debts. Paying the funeral from the estate is, according to the Dutch government, an exception in itself.",
          "You can collect information, make an initial inventory and ensure assets are not lost. Document what you do and why. If immediate action is needed to prevent damage, it is wise to ask legal advice beforehand about the right way to proceed.",
        ],
      },
      {
        heading: "Decide only after an initial overview",
        paragraphs: [
          "Ask whether there is a will and an executor. Investigate bank accounts, loans, outstanding costs and the home. If the financial situation is uncertain, discuss beneficial acceptance with a notary. If rejecting, also consider the position of children who may then become heirs.",
          "The Inheritance Guide helps separate practical steps from decisions with legal consequences, so you have room to make a considered choice.",
        ],
      },
    ],
  },
  {
    slug: "hoe-maakt-u-een-boedelbeschrijving",
    title: "How do you prepare an estate inventory?",
    excerpt:
      "An estate inventory lists the assets and debts and forms the basis for management, tax and distribution.",
    category: "afwikkeling",
    readingTime: "3 min",
    sections: [
      {
        paragraphs: [
          "An estate inventory is an overview of the deceased person's assets and debts. It forms the basis for management, settlement, the tax return and ultimately distribution. A good inventory does not have to start in a complicated way, but it must be built completely and verifiably.",
        ],
      },
      {
        heading: "Collect information by category",
        paragraphs: [
          "Start with bank accounts and cash. Then add the home, investments, vehicles, valuable items and any business interests. On the other side, record the mortgage, loans, unpaid bills, taxes and other obligations. Do not forget digital assets and claims. For every item, make clear which date the value relates to and which document supports that value.",
          "For a joint account or joint ownership, the full balance or asset does not automatically belong to the estate. Ownership shares and agreements must be investigated. Homes and special assets may have specific valuation rules.",
        ],
      },
      {
        heading: "Track changes",
        paragraphs: [
          "Also record payments and receipts after death. Keep invoices, bank statements and valuations with the overview. Work with one central version, so those involved do not each use different figures. If there is an executor, preparing an estate inventory is usually part of their work. Beneficial acceptance can bring additional settlement rules.",
          "The Inheritance Guide helps collect and classify the information and identify missing documents. A notary or tax adviser can assess which valuation and form are needed in your situation.",
        ],
      },
    ],
  },
  {
    slug: "wat-gebeurt-er-met-bankrekeningen-en-automatische-incassos-na-overlijden",
    title: "What happens to bank accounts and direct debits after death?",
    excerpt:
      "A bank account does not disappear at death, but access and payments must be handled carefully.",
    category: "afwikkeling",
    readingTime: "3 min",
    sections: [
      {
        paragraphs: [
          "A bank account does not disappear at the moment of death. At the same time, not everyone who previously had access may continue using it. What happens depends on the type of account, the relationship with the account holder and the bank's rules.",
        ],
      },
      {
        heading: "Report the death to the bank",
        paragraphs: [
          "The bank does not always automatically learn of the death. After notification, it may block an account in the deceased person's name for certain actions. It usually asks for documents before someone can access the estate on its behalf. With a joint account, the other account holder can often continue using it, but that says nothing yet about which part of the balance belongs to the estate. An ordinary power of attorney ends when the person granting it dies.",
        ],
      },
      {
        heading: "Check which payments continue",
        paragraphs: [
          "Make a list of direct debits, periodic transfers and income. Some costs remain necessary, such as housing costs and insurance. Other subscriptions can be ended. Do not assume that every payment after the date of death automatically stops or must automatically be reversed. Discuss with the bank which payments are possible in the meantime, including funeral costs.",
          "Keep bank statements around the date of death. They help identify insurance policies, debts and digital subscriptions and determine the size of the estate.",
          "The Inheritance Guide helps make accounts and ongoing payments clear and coordinate contact with the bank.",
        ],
      },
    ],
  },
  {
    slug: "een-kind-onterven-wat-betekent-de-legitieme-portie",
    title: "Disinheriting a child: what does the forced heirship portion mean?",
    excerpt:
      "A disinherited child may still have a monetary claim under the forced heirship rules.",
    category: "voorbereiding",
    readingTime: "3 min",
    sections: [
      {
        paragraphs: [
          "A parent can state in a will that a child is not an heir. That does not remove every right of that child. Under conditions, the disinherited child may claim the forced heirship portion.",
        ],
      },
      {
        heading: "A right to money, not to items",
        paragraphs: [
          "The forced heirship portion is a monetary claim. It does not give a right to a specific piece of jewellery, the home or a seat at the table when household goods are divided. As a starting point, it is half the value of the statutory share the child would have had without a will. The actual calculation can be more complex: certain gifts and debts also play a role.",
          "The child must claim the forced heirship portion themselves. A five-year period after death applies. When the claim is payable depends partly on the family situation and any provisions in the will. A notary can assess that position.",
        ],
      },
      {
        heading: "Prevent new uncertainty",
        paragraphs: [
          "If you want to disinherit a child, also discuss your intention for your partner and other children. Look at earlier gifts and record relevant documents carefully. After death, relatives should not ignore the will and the information needed for a calculation, even if family members had no contact for years.",
          "The Inheritance Guide helps map out family relationships, documents and practical next steps. Legal assessment and calculation of the forced heirship portion belong with a notary or inheritance law specialist.",
        ],
      },
    ],
  },
];

export const knowledgeArticlesByLang = {
  nl: knowledgeArticles,
  en: englishKnowledgeArticles,
} as const;

export const englishServiceFaqs: Record<string, FaqItem[]> = {
  bijleven: [
    {
      question: "What should I arrange during my lifetime for my estate?",
      answer:
        "Good preparation starts with an overview. Map out what you own, which debts and insurance policies you have, where important documents are kept and who your contact persons are. Also think about bank accounts, a home, pensions, digital accounts and personal wishes for later. You can then consider whether legal documents are needed, such as a will or living will. Arranging these matters during your lifetime prevents loved ones from having to find out later what exists and what your wishes were. A personal life file can help bring all this information together in one clear place.",
    },
    {
      question: "Do I need a will and what happens if I do not have one?",
      answer:
        "A will is not mandatory. If you do not have one, the law determines who your heirs are and how your estate is divided. That may fit your wishes, but it may not. A will can be important if you live together unmarried, want someone else to inherit, want to disinherit a child, appoint an executor or leave specific assets to someone. A will is always prepared by a notary. It is sensible to first understand what would happen under the law in your situation and then decide whether you want to depart from that.",
    },
    {
      question: "What is the difference between a will and a living will?",
      answer:
        "A will determines what happens to your estate after death. You can appoint heirs, include legacies and appoint an executor. A living will is for the period while you are alive but may no longer be able to manage your affairs yourself. It lets you record who may arrange financial, personal or medical matters on your behalf. One document does not replace the other. A will works after death, while a living will can matter during life. Both can be prepared by a notary and can be part of broader preparation for later.",
    },
    {
      question: "Who inherits my estate if I have arranged nothing?",
      answer:
        "If you do not have a will, the law determines who your heirs are. Spouses, registered partners and children are in the first group of heirs. If there is a married or registered partner with children, the statutory division usually applies: the surviving partner receives the assets and debts, while the children receive a monetary claim. If there are no heirs in this group, the law looks at parents, siblings and more distant relatives. An unmarried cohabiting partner is not automatically an heir. If you want a different distribution, a will may be needed.",
    },
    {
      question: "What can I record now to make things easier for my loved ones later?",
      answer:
        "You can record much more than who inherits from you. Think of an overview of bank accounts, insurance policies, debts, important documents, subscriptions, digital accounts, contact persons and funeral wishes. You can also state where documents can be found and which people your loved ones can approach. A personal life file can bring this information together clearly. For matters with legal effect, such as appointing heirs or an executor, a will is needed. By aligning practical information and legal arrangements, you prevent relatives from having to search unnecessarily after your death.",
    },
  ],
  hulp: [
    {
      question: "What should I arrange first after a death?",
      answer:
        "After a death, the first matters are those directly related to the death and funeral. For the estate, it is then important to establish whether there is a will, who the heirs are and which assets and debts exist. Do not use estate assets too quickly and do not sell or divide them before it is clear how you want to deal with the inheritance. As an heir, you can choose between unconditional acceptance, beneficial acceptance and rejection. After that, the further inventory and settlement of the estate can begin.",
    },
    {
      question: "How do I find out whether the deceased had a will?",
      answer:
        "You can ask the Central Wills Register whether someone made a will. The register shows whether a will exists, when it was made and at which notary. It does not show what is in the will. If a will exists, a notary can request its contents and assess which directly interested parties may be informed. Requesting information from the register is free and can often be done digitally. It is wise to do this early because the will may determine who the heirs are and whether an executor has been appointed.",
    },
    {
      question: "Do I always have to accept an inheritance?",
      answer:
        "No. As an heir, you generally have three options. You can accept unconditionally, accept beneficially or reject the inheritance. With unconditional acceptance, you accept both assets and debts. With beneficial acceptance, the estate is settled under legal rules and you are generally protected against a shortfall. With rejection, you are no longer an heir and receive nothing. The right choice depends on the situation. As long as you have not chosen, be careful with estate goods and payments.",
    },
    {
      question: "When do I need a certificate of inheritance?",
      answer:
        "A certificate of inheritance is a notarial statement that shows, among other things, who the heirs are and who may act on behalf of the estate. Banks and other organisations may ask for it before giving access to accounts or information. It can also matter when there is a home. You do not need such a certificate in every estate; sometimes a death certificate is enough. Before issuing it, the notary investigates the civil status records, the Central Wills Register and the position of the heirs.",
    },
    {
      question: "Who arranges the settlement of an estate?",
      answer:
        "Who settles the estate depends on the situation. If an executor has been appointed in the will and accepts the role, the executor performs the duties assigned to them. If there is no executor, settlement generally lies with the heirs. They can authorise one person to perform certain tasks on their behalf and can also involve a notary or other expert. Beneficial acceptance may also involve formal settlement rules. The Inheritance Guide can help map out the work and keep an overview during settlement.",
    },
  ],
  executeurschap: [
    {
      question: "What does an executor do when settling an estate?",
      answer:
        "An executor is appointed in a will to carry out work around the estate. An ordinary executor manages the estate, identifies assets and debts and pays debts that must be paid during management. The executor may also deliver legacies and prepare the inheritance tax return. The exact duties depend on the law and on the will. An ordinary executor essentially prepares the estate for final distribution. Once management is complete, the heirs are generally responsible for distributing what remains.",
    },
    {
      question: "What powers does an executor have?",
      answer:
        "An executor's powers are determined by law and the will. An ordinary executor may manage estate assets and pay debts that must be paid during management. During this management, the executor represents the heirs for the execution of their task. The heirs cannot simply dispose of goods under the executor's management. The will may contain additional rules and powers. In every estate, it is therefore important to look not only at the title executor, but especially at the exact provisions in the will.",
    },
    {
      question: "May an executor independently divide the inheritance or sell assets?",
      answer:
        "An ordinary executor may not automatically divide the estate independently. Final distribution normally lies with the heirs. An executor may sell goods if needed to pay estate debts, subject to any additional conditions in the will. If the deceased also appointed the executor as settlement administrator with broader powers, that person may in some circumstances distribute or transfer assets independently. The will must therefore always be reviewed first. The function title alone does not say enough about what someone may actually do.",
    },
    {
      question:
        "What is the difference between an executor, testamentary executor and settlement administrator?",
      answer:
        "In practice, testamentary executor usually means the executor appointed in a will. The term is mostly an older expression. An ordinary executor manages the estate and handles tasks such as paying debts and preparing the estate for distribution. An executor who is also appointed as settlement administrator can receive broader powers. The will may state that this person may also distribute the estate independently. The real difference is therefore not only the job title, but the powers recorded in the will.",
    },
    {
      question: "What does an executor cost and who pays?",
      answer:
        "The executor's fee can be determined in the will. The deceased may have recorded a fixed amount, an hourly rate or no fee. If the will says nothing, Dutch law generally gives the executor a right to one percent of the value of the deceased person's assets on the date of death. The fee and other costs connected with the executor's work are generally paid from the estate. With a professional executor, it is wise to clarify in advance which arrangement applies under the will and which additional costs may arise.",
    },
  ],
  mediation: [
    {
      question: "What is estate mediation and when can it help?",
      answer:
        "Estate mediation is guidance by an independent mediator when those involved have a conflict about an inheritance or its settlement. The mediator does not decide who is right, but guides the conversations and helps parties find solutions themselves. Mediation can be useful when communication between heirs has broken down, when there is disagreement about distribution or when old family issues complicate settlement. Unlike a judge, a mediator can also address interests and emotions behind the legal dispute. Participation is voluntary and requires willingness to talk.",
    },
    {
      question: "For which inheritance conflicts can mediation be used?",
      answer:
        "Mediation can be used for many conflicts around an estate. Examples include disagreement about the division of money or household goods, sale or takeover of a home, valuation of assets, execution of a will or how an executor performs their duties. Tensions around gifts, disinheritance or communication between heirs can also lead to mediation. The conflict does not have to be purely legal. Especially when family relationships and emotions play a major role, mediation can create space to discuss both practical and personal sides.",
    },
    {
      question: "Do all heirs have to participate in mediation?",
      answer:
        "Mediation is voluntary. No one can be forced to participate. If a solution affects all heirs, it is usually necessary that all people who must decide on that subject cooperate. Otherwise, an agreement cannot simply be made on behalf of an absent heir. In some situations, mediation can start with part of those involved or certain subjects can be discussed separately. The mediator assesses in advance who should be at the table for a meaningful process. Even if court proceedings have already started, mediation can only take place if the parties agree.",
    },
    {
      question: "What happens if one heir does not want to cooperate?",
      answer:
        "Because mediation is voluntary, an heir cannot be forced to participate. If that heir's cooperation is necessary for a complete solution or distribution, the lack of cooperation may mean mediation cannot resolve the whole conflict. It can then be considered whether consultation is possible in another way. If you cannot jointly resolve the distribution of an estate, civil proceedings may ultimately be needed in which a judge decides. Mediation can still be tried later during court proceedings if all parties are open to it.",
    },
    {
      question: "What does estate mediation cost and who pays the mediator?",
      answer:
        "There is no fixed general rate for estate mediation. Costs depend on the mediator's hourly rate, the complexity of the conflict, the number of people involved and the number of meetings needed. Agreements are made in advance about the rate and how costs are divided between parties. Often the costs are shared, but parties can make different arrangements. If court proceedings are already pending, the court mediation office can help find a suitable mediator and provide information about rates. Always ask in advance for clear information about fees and possible additional costs.",
    },
  ],
  erfbelasting: [
    {
      question: "Do I have to pay inheritance tax on an inheritance?",
      answer:
        "Whether you must pay inheritance tax depends on the value of what you inherit and your relationship to the deceased. Each category of heir has an exemption. If you inherit less than or equal to your exemption, you pay no inheritance tax on that acquisition. If you inherit more, tax is calculated on the amount above the exemption. The tax rate also differs by relationship to the deceased. A partner and a child are treated differently from a sibling or friend. Exemptions and rates are adjusted periodically, so the year of death must always be used.",
    },
    {
      question: "When do I have to file an inheritance tax return?",
      answer:
        "The Dutch Tax Administration usually sends a letter within a few months after death stating whether an inheritance tax return must be filed. The deadline is in that letter. For deaths in 2026, the filing period is twenty months after the date of death. This is longer than for earlier years. Even if you have not received a letter, filing may be required if you inherit more than your exemption. It is therefore wise not to wait only for a letter, but to check yourself whether a return is needed. Extension may be possible under conditions.",
    },
    {
      question: "How much inheritance tax must I pay and which exemption applies to me?",
      answer:
        "The amount of inheritance tax depends on your relationship to the deceased and the value of your acquisition. For 2026, for example, the exemption for a spouse, registered partner or qualifying cohabiting partner is €828,035. For a child, foster child or stepchild, the exemption is €26,230. Parents, grandchildren and other heirs have other amounts. Tax may be due on the part of the inheritance above your exemption. The percentages also differ by category and amount. Because amounts can change each year, always use the year of death as the starting point.",
    },
    {
      question: "Who must file the inheritance tax return?",
      answer:
        "If an executor has been appointed in the will, the executor generally files the inheritance tax return for all heirs. If there is no executor, the heirs can decide together who handles the return. One heir can file for all heirs, but in some situations heirs can also file separately. A joint return can be practical because it shows more clearly whether the entire estate has been processed correctly. Even if someone else prepares the return, it remains important that all necessary information about assets, debts and recipients is available and correct.",
    },
    {
      question: "Which assets, debts and costs must be included in the inheritance tax return?",
      answer:
        "For the return, the value of the estate must first be determined. This may include bank balances, investments, a home, other assets, claims and possible foreign assets. Against this stand debts such as mortgages, loans and certain outstanding obligations. Normal funeral costs can sometimes be deducted, reduced by any funeral insurance payout. Not every cost arising during settlement is deductible. For example, notary fees for a certificate of inheritance and executor fees are not deductible as funeral costs according to the Tax Administration.",
    },
  ],
};

export const serviceFaqsByLang = {
  nl: serviceFaqs,
  en: englishServiceFaqs,
} as const;
