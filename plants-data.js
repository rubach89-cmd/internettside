// Plant database with comprehensive information
const plantsData = [
    {
        id: 'poteter',
        name: 'Poteter',
        icon: '🥔',
        category: 'Rotgrønnsaker',
        careLevel: 'medium',
        description: 'Poteter er en av de mest populære grønnsakene å dyrke i hagen. De er enkle å dyrke og gir god avling.',
        plantingMonths: [3, 4, 5], // Mars, April, Mai
        harvestMonths: [7, 8, 9], // Juli, August, September
        timing: 'Sett potetene i april-mai når jorden er varm nok (minst 7°C). Velg et solrikt sted.',
        sowing: 'Sett poteter med spirer oppover, 10-15 cm dype. Avstand: 30-40 cm mellom potetene i raden, 60-75 cm mellom radene.',
        care: 'Hypp opp jorden rundt plantene etter hvert som de vokser. Vann jevnlig, spesielt når knollene dannes. Lett gjødsling.',
        harvest: 'Høst når bladene begynner å visne (juli-september). Tidligpoteter kan høstes tidligere. La knollene tørke før lagring.',
        yieldPerPlant: 0.6, // kg per plante
        plantsPerM2: 4,
        rowSpacing: 70, // cm
        plantSpacing: 35 // cm
    },
    {
        id: 'tomater',
        name: 'Tomater',
        icon: '🍅',
        category: 'Fruktgrønnsaker',
        careLevel: 'high',
        description: 'Tomater trenger varme og mye sol. Best i drivhus eller veksthus i Norge.',
        plantingMonths: [4, 5], // April, Mai
        harvestMonths: [7, 8, 9], // Juli, August, September
        timing: 'Så frø innendørs i mars-april. Plant ut etter siste frost i mai-juni.',
        sowing: 'Så frø 0.5-1 cm dypt. Spir etter 7-14 dager ved 20-25°C. Plant ut når plantene har 4-6 blad.',
        care: 'Krever mye vann og næring. Støtt plantene med stokker. Fjern sideskudd på høye sorter. Gjødsle regelmessig.',
        harvest: 'Høst når tomatene er røde og modne (juli-september). Plukk jevnlig for å stimulere ny vekst.',
        yieldPerPlant: 4, // kg per plante
        plantsPerM2: 2.5,
        rowSpacing: 80, // cm
        plantSpacing: 50 // cm
    },
    {
        id: 'gulrotter',
        name: 'Gulrøtter',
        icon: '🥕',
        category: 'Rotgrønnsaker',
        careLevel: 'low',
        description: 'Gulrøtter er lettdyrkede og tåler norsk klima godt. Foretrekker dyp, løs jord.',
        plantingMonths: [4, 5, 6], // April, Mai, Juni
        harvestMonths: [7, 8, 9, 10], // Juli-Oktober
        timing: 'Så direkte i jorda fra april til juni. Kan såes flere ganger for løpende avling.',
        sowing: 'Så tynt i rader, 1-2 cm dypt. Avstand: 25-30 cm mellom radene. Tynn ut til 3-5 cm mellom plantene.',
        care: 'Lett å dyrke. Hold jorden jevnt fuktig. Litt gjødsling. Luke regelmessig.',
        harvest: 'Høst når gulrøttene har ønsket størrelse (juli-oktober). Kan stå lenge i jorda.',
        yieldPerPlant: 0.15, // kg per plante
        plantsPerM2: 50,
        rowSpacing: 25, // cm
        plantSpacing: 4 // cm
    },
    {
        id: 'salat',
        name: 'Salat',
        icon: '🥬',
        category: 'Bladgrønnsaker',
        careLevel: 'low',
        description: 'Salat er en av de raskeste grønnsakene å dyrke. Passer godt for begynnere.',
        plantingMonths: [3, 4, 5, 6, 7], // Mars-Juli
        harvestMonths: [5, 6, 7, 8, 9], // Mai-September
        timing: 'Så innendørs fra mars eller direkte i jorda fra april. Kan såes flere ganger.',
        sowing: 'Så tynt, 0.5 cm dypt. Avstand: 25 cm mellom radene, 20-25 cm mellom plantene.',
        care: 'Trenger jevn vanning. Lite gjødsling. Vokser raskt - klar etter 6-8 uker.',
        harvest: 'Høst når hodene er faste (mai-september). Plukk ytterblad eller hele hoder.',
        yieldPerPlant: 0.3, // kg per plante
        plantsPerM2: 12,
        rowSpacing: 25, // cm
        plantSpacing: 25 // cm
    },
    {
        id: 'agurk',
        name: 'Agurk',
        icon: '🥒',
        category: 'Fruktgrønnsaker',
        careLevel: 'medium',
        description: 'Agurk trenger varme og vann. Best i drivhus i Norge.',
        plantingMonths: [4, 5], // April, Mai
        harvestMonths: [7, 8, 9], // Juli, August, September
        timing: 'Så innendørs i april-mai. Plant ut når det er trygt varmt (etter 10. juni).',
        sowing: 'Så 2-3 cm dypt. Plant ut med 40-50 cm avstand. Trenger god plass.',
        care: 'Vann rikelig og jevnt. Gjødsle regelmessig. Kan klatres på stativ for å spare plass.',
        harvest: 'Høst når agurkene har riktig størrelse (juli-september). Plukk ofte for fortsatt produksjon.',
        yieldPerPlant: 5, // kg per plante
        plantsPerM2: 2,
        rowSpacing: 100, // cm
        plantSpacing: 50 // cm
    },
    {
        id: 'erter',
        name: 'Erter',
        icon: '🫛',
        category: 'Belgvekster',
        careLevel: 'low',
        description: 'Erter er kuldetolerante og kan såes tidlig. Binder nitrogen i jorda.',
        plantingMonths: [3, 4, 5], // Mars, April, Mai
        harvestMonths: [6, 7, 8], // Juni, Juli, August
        timing: 'Så direkte i jorda fra mars-mai. Tåler lett frost.',
        sowing: 'Så 3-5 cm dypt. Avstand: 40 cm mellom radene, 5-8 cm i raden. Trenger støtte.',
        care: 'Lett å dyrke. Trenger lite gjødsling (binder nitrogen). Sett opp støtte for plantene.',
        harvest: 'Høst når belgene er faste og fulle (juni-august). Plukk jevnlig for fortsatt produksjon.',
        yieldPerPlant: 0.2, // kg per plante
        plantsPerM2: 20,
        rowSpacing: 40, // cm
        plantSpacing: 5 // cm
    },
    {
        id: 'løk',
        name: 'Løk',
        icon: '🧅',
        category: 'Løkvekster',
        careLevel: 'low',
        description: 'Løk er lett å dyrke fra sett. Trives i solrik beliggenhet.',
        plantingMonths: [4, 5], // April, Mai
        harvestMonths: [8, 9], // August, September
        timing: 'Sett løksett i april-mai når jorden er tørr nok til å arbeide.',
        sowing: 'Sett løksettene 2-3 cm dypt med spissen opp. Avstand: 25-30 cm mellom radene, 10 cm i raden.',
        care: 'Luke godt. Trenger lite vann og gjødsling. Hold området lukefritt.',
        harvest: 'Høst når bladene legger seg (august-september). Tørk godt før lagring.',
        yieldPerPlant: 0.12, // kg per løk
        plantsPerM2: 40,
        rowSpacing: 25, // cm
        plantSpacing: 10 // cm
    },
    {
        id: 'squash',
        name: 'Squash',
        icon: '🥒',
        category: 'Fruktgrønnsaker',
        careLevel: 'medium',
        description: 'Squash er produktiv og lett å dyrke, men krever god plass.',
        plantingMonths: [5], // Mai
        harvestMonths: [7, 8, 9], // Juli, August, September
        timing: 'Så innendørs i mai eller direkte ute når det er varmt (etter 10. juni).',
        sowing: 'Så 2-3 cm dypt. Plant ut med 80-100 cm avstand. Trenger mye plass.',
        care: 'Vann jevnlig ved røttene. Gjødsle regelmessig. Produktiv plante som gir mye avling.',
        harvest: 'Høst når squashen er 15-20 cm lang (juli-september). Plukk ofte for ny vekst.',
        yieldPerPlant: 8, // kg per plante
        plantsPerM2: 1,
        rowSpacing: 100, // cm
        plantSpacing: 100 // cm
    },
    {
        id: 'brokkoli',
        name: 'Brokkoli',
        icon: '🥦',
        category: 'Kålvekster',
        careLevel: 'medium',
        description: 'Brokkoli er næringsrik og trives i kjølig vær. God høstgrønnsak.',
        plantingMonths: [4, 5, 6], // April, Mai, Juni
        harvestMonths: [8, 9, 10], // August, September, Oktober
        timing: 'Så innendørs i april-mai. Plant ut i juni for høstavling.',
        sowing: 'Så 1 cm dypt. Plant ut med 50 cm avstand når plantene har 4-5 blad.',
        care: 'Trenger jevn vanning og god gjødsling. Beskytt mot kålorm med nett.',
        harvest: 'Høst hovedhodene når de er faste (august-oktober). Sideskudd gir ny avling.',
        yieldPerPlant: 0.6, // kg per plante
        plantsPerM2: 4,
        rowSpacing: 50, // cm
        plantSpacing: 50 // cm
    },
    {
        id: 'gressløk',
        name: 'Gressløk',
        icon: '🌿',
        category: 'Urter',
        careLevel: 'low',
        description: 'Gressløk er flerårig og lett å dyrke. Kan høstes hele sesongen.',
        plantingMonths: [3, 4, 5], // Mars, April, Mai
        harvestMonths: [4, 5, 6, 7, 8, 9], // April-September
        timing: 'Så direkte ute fra mars eller plant ferdig plante.',
        sowing: 'Så tynt i klumper. Kan også deles fra eksisterende planter.',
        care: 'Svært lett å dyrke. Trenger lite stell. Vann ved tørke.',
        harvest: 'Klipp av blad etter behov hele sesongen. Blomster er også spiselige.',
        yieldPerPlant: 0.5, // kg per plante per sesong
        plantsPerM2: 10,
        rowSpacing: 30, // cm
        plantSpacing: 30 // cm
    },
    {
        id: 'jordbær',
        name: 'Jordbær',
        icon: '🍓',
        category: 'Bær',
        careLevel: 'medium',
        description: 'Jordbær er flerårige og gir bær i flere år. Populær hagebær.',
        plantingMonths: [4, 5, 8], // April, Mai, August
        harvestMonths: [6, 7], // Juni, Juli
        timing: 'Plant om våren (april-mai) eller sensommer (august).',
        sowing: 'Plant med 25-30 cm avstand. Rot-kronen skal være i nivå med jordoverflaten.',
        care: 'Halm under plantene. Vann jevnlig. Gjødsle etter høsting. Beskytt mot fugler.',
        harvest: 'Høst når bærene er røde (juni-juli). Plukk flere ganger per uke.',
        yieldPerPlant: 0.5, // kg per plante
        plantsPerM2: 5,
        rowSpacing: 60, // cm
        plantSpacing: 30 // cm
    },
    {
        id: 'gresskar',
        name: 'Gresskar',
        icon: '🎃',
        category: 'Fruktgrønnsaker',
        careLevel: 'medium',
        description: 'Gresskar trenger mye plass og varme, men er moro å dyrke.',
        plantingMonths: [5], // Mai
        harvestMonths: [9, 10], // September, Oktober
        timing: 'Så innendørs i mai. Plant ut når det er trygt varmt (etter 10. juni).',
        sowing: 'Så 2-3 cm dypt. Plant ut med 1-2 meter avstand. Trenger enormt med plass.',
        care: 'Vann rikelig. Gjødsle godt. Kan beskjæres til 2-3 frukter for større gresskar.',
        harvest: 'Høst før frost (september-oktober). Skallet skal være hardt. God lagringsfrukt.',
        yieldPerPlant: 10, // kg per plante
        plantsPerM2: 0.5,
        rowSpacing: 200, // cm
        plantSpacing: 200 // cm
    }
];

// Monthly activities data
const monthlyActivities = {
    0: [ // Januar
        { plant: 'Alle', activity: 'Planlegging av årets hage. Bestill frø og utstyr.' },
        { plant: 'Jordbær', activity: 'Planlegg nye jordbærbed.' }
    ],
    1: [ // Februar
        { plant: 'Alle', activity: 'Fortsett planlegging. Sjekk lagret utstyr.' },
        { plant: 'Tomater', activity: 'Forbered oppstart av tomatfrø mot slutten av måneden.' }
    ],
    2: [ // Mars
        { plant: 'Tomater', activity: 'Så tomatfrø innendørs.' },
        { plant: 'Salat', activity: 'Så salat innendørs eller i kaldbed.' },
        { plant: 'Erter', activity: 'Så erter direkte ute mot slutten av måneden.' },
        { plant: 'Gressløk', activity: 'Så gressløk eller del eksisterende planter.' }
    ],
    3: [ // April
        { plant: 'Poteter', activity: 'Sett poteter når jorden er varm nok.' },
        { plant: 'Gulrøtter', activity: 'Så gulrøtter direkte i jorda.' },
        { plant: 'Løk', activity: 'Sett løksett når jorden er tørr.' },
        { plant: 'Salat', activity: 'Så salat direkte ute.' },
        { plant: 'Agurk', activity: 'Så agurk innendørs.' },
        { plant: 'Tomater', activity: 'Plant om tomatplanter til større potter.' },
        { plant: 'Brokkoli', activity: 'Så brokkoli innendørs.' },
        { plant: 'Jordbær', activity: 'Plant nye jordbærplanter.' }
    ],
    4: [ // Mai
        { plant: 'Poteter', activity: 'Fortsett setting av poteter. Hypp opp tidlige poteter.' },
        { plant: 'Tomater', activity: 'Plant ut tomater i drivhus. Vurder uteplanting mot slutten.' },
        { plant: 'Agurk', activity: 'Plant ut agurk i drivhus.' },
        { plant: 'Squash', activity: 'Så squash innendørs.' },
        { plant: 'Gresskar', activity: 'Så gresskar innendørs.' },
        { plant: 'Gulrøtter', activity: 'Fortsett såing av gulrøtter.' },
        { plant: 'Salat', activity: 'Så salat for løpende avling.' },
        { plant: 'Erter', activity: 'Fortsett såing av erter.' }
    ],
    5: [ // Juni
        { plant: 'Alle', activity: 'Plant ut alle frostømfintlige planter.' },
        { plant: 'Agurk', activity: 'Plant ut agurk ute hvis værforhold tillater.' },
        { plant: 'Squash', activity: 'Plant ut squash.' },
        { plant: 'Gresskar', activity: 'Plant ut gresskar.' },
        { plant: 'Gulrøtter', activity: 'Siste såing for høstavling.' },
        { plant: 'Brokkoli', activity: 'Plant ut brokkoli for høstavling.' },
        { plant: 'Jordbær', activity: 'Høst de første jordbærene!' },
        { plant: 'Erter', activity: 'Høst de første ertene!' }
    ],
    6: [ // Juli
        { plant: 'Poteter', activity: 'Høst tidligpoteter. Fortsett hypping.' },
        { plant: 'Tomater', activity: 'Høst tomater. Fjern sideskudd. Vann og gjødsle.' },
        { plant: 'Agurk', activity: 'Høst agurk jevnlig.' },
        { plant: 'Squash', activity: 'Høst squash når de er passe store.' },
        { plant: 'Gulrøtter', activity: 'Høst tidlige gulrøtter.' },
        { plant: 'Salat', activity: 'Høst salat. Så ny runde.' },
        { plant: 'Jordbær', activity: 'Fortsett høsting. Fjern dårlige blad.' },
        { plant: 'Erter', activity: 'Høst erter.' }
    ],
    7: [ // August
        { plant: 'Poteter', activity: 'Høst hovedavling av poteter.' },
        { plant: 'Tomater', activity: 'Høst tomater.' },
        { plant: 'Agurk', activity: 'Høst agurk.' },
        { plant: 'Squash', activity: 'Høst squash.' },
        { plant: 'Gulrøtter', activity: 'Høst gulrøtter.' },
        { plant: 'Løk', activity: 'Høst løk når bladene legger seg.' },
        { plant: 'Jordbær', activity: 'Plant nye jordbærplanter.' },
        { plant: 'Erter', activity: 'Høst siste erter.' }
    ],
    8: [ // September
        { plant: 'Poteter', activity: 'Høst siste poteter før frost.' },
        { plant: 'Tomater', activity: 'Høst alle grønne tomater før frost.' },
        { plant: 'Gulrøtter', activity: 'Høst gulrøtter før frost.' },
        { plant: 'Løk', activity: 'Tørk og lagre innhøstet løk.' },
        { plant: 'Brokkoli', activity: 'Høst brokkoli.' },
        { plant: 'Gresskar', activity: 'Høst gresskar før frost.' }
    ],
    9: [ // Oktober
        { plant: 'Alle', activity: 'Rydd hagebed. Kompost planterester.' },
        { plant: 'Gulrøtter', activity: 'Høst siste gulrøtter.' },
        { plant: 'Brokkoli', activity: 'Høst siste brokkoli.' },
        { plant: 'Gresskar', activity: 'Høst og lagre gresskar.' }
    ],
    10: [ // November
        { plant: 'Alle', activity: 'Dekk til bed med kompost eller løv.' },
        { plant: 'Alle', activity: 'Rens og lagre hageverktøy.' }
    ],
    11: [ // Desember
        { plant: 'Alle', activity: 'Hvileperiode. Planlegg neste sesong!' }
    ]
};
