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
