export interface ActivityItem {
  id: string;
  title: string;
  title_hi?: string;
  category: "philosophy" | "poetry" | "stories" | "reading-shelf";
  subCategory?: "indian" | "western" | "classical" | "modern";
  authorOrOrigin: string;
  authorOrOrigin_hi?: string;
  archetype: string;
  archetype_hi?: string;
  numeral: string;
  coreAxiom: string;
  coreAxiom_hi?: string;
  originalText?: string;
  transliteration?: string;
  englishExcerpt: string;
  hindiExcerpt?: string;
  reflection: string;
  reflection_hi?: string;
  coreTenets: string[];
  coreTenets_hi?: string[];
  dateOrEra: string;
  tags: string[];
  readTime: string;
  authorImage?: string;
}

export const ACTIVITY_NAV_LINKS = [
  { href: "/activity", label: "Indian Philosophy", label_hi: "भारतीय दर्शन", id: "philosophy" },
  { href: "/activity/poetry", label: "Poetry & Verse", label_hi: "काव्य एवं पद्य", id: "poetry" },
  { href: "/activity/stories", label: "Stories & Parables", label_hi: "कहानियाँ एवं दृष्टांत", id: "stories" },
] as const;

export const ACTIVITY_DATA: ActivityItem[] = [
  // =========================================================================
  // --- 1. J. KRISHNAMURTI: THE OBSERVER IS THE OBSERVED & PATHLESS LAND ---
  // =========================================================================
  {
    id: "jk-krishnamurti-pathless-land",
    authorImage: "/authors/jk-krishnamurti.jpg",
    title: "Truth is a Pathless Land: The Observer is the Observed",
    title_hi: "सत्य एक मार्गहीन भूमि है: द्रष्टा ही दृश्य है",
    category: "philosophy",
    subCategory: "indian",
    authorOrOrigin: "J. Krishnamurti",
    authorOrOrigin_hi: "जे. कृष्णमूर्ति",
    archetype: "The Radical Inquirer",
    archetype_hi: "कट्टर अन्वेषक",
    numeral: "I",
    coreAxiom: "Truth is a pathless land; the observer is the observed.",
    coreAxiom_hi: "सत्य एक मार्गहीन भूमि है; द्रष्टा ही दृश्य है।",
    originalText: `Truth is a pathless land, and you cannot approach it by any path whatsoever, by any religion, by any sect. Truth, being limitless, unconditioned, unapproachable by any path whatsoever, cannot be organized; nor should any organization be formed to lead or to coerce people along any particular path.`,
    englishExcerpt:
      "The moment you have a belief, a dogma, or a fixed conclusion, you have ceased to observe. Observation without the observer—without the past, without the continuous accumulation of psychological residue—is the only state where radical transformation occurs.",
    hindiExcerpt:
      "जैसे ही आपके पास कोई विश्वास, कोई रूढ़ि या कोई निश्चित निष्कर्ष होता है, आप देखना बंद कर देते हैं। बिना द्रष्टा के अवलोकन—अतीत के बिना, संचित मनोवैज्ञानिक अवशेषों के बिना—केवल वही स्थिति है जहाँ आमूलचूल आंतरिक रूपांतरण घटित होता है।",
    reflection:
      "In computational thinking and system design, our legacy assumptions and rigid mental models blind us to emergent realities. Krishnamurti’s core insight—that the observer is the observed—demands unconditioned awareness: approaching every problem, distributed architecture, and neural model without the distorting baggage of prior dogma.",
    reflection_hi:
      "सिस्टम डिजाइन और सॉफ्टवेयर वास्तुकला में, हमारी पुरानी मान्यताएं और मानसिक मॉडल हमें उभरती वास्तविकताओं के प्रति अंधा कर देते हैं। कृष्णमूर्ति की यह अंतर्दृष्टि—कि द्रष्टा ही दृश्य है—अशर्त जागरूकता की मांग करती है: हर समस्या और तंत्र को बिना किसी पूर्व पूर्वाग्रह के देखना।",
    coreTenets: [
      "Observation without the distorting lens of the accumulated observer",
      "Rejection of spiritual authority, organized cults, and dogma",
      "Direct perception of reality unmediated by psychological time",
      "Transformation occurs only in the silent lucidity of the present",
    ],
    coreTenets_hi: [
      "संचित द्रष्टा के पूर्वाग्रही चश्मे के बिना शुद्ध अवलोकन",
      "आध्यात्मिक सत्ता, संगठित संप्रदायों और रूढ़ियों का पूर्ण खंडन",
      "मनोवैज्ञानिक समय की मध्यस्थता के बिना यथार्थ का सीधा साक्षात्कार",
      "रूपांतरण केवल वर्तमान की मौन स्पष्टता में ही संभव है",
    ],
    dateOrEra: "20th Century Radical Inquirer (1895–1986)",
    tags: ["J. Krishnamurti", "Pathless Land", "Unconditioned Mind", "Direct Observation", "Sovereign Freedom"],
    readTime: "4 min read",
  },

  // =========================================================================
  // --- 2. U.G. KRISHNAMURTI: THE NATURAL STATE & BIOLOGICAL REALITY ---
  // =========================================================================
  {
    id: "ug-krishnamurti-natural-state",
    authorImage: "/authors/ug-krishnamurti.jpg",
    title: "The Natural State: Total Deconstruction of the Spiritual Search",
    title_hi: "स्वाभाविक अवस्था: आध्यात्मिक खोज का संपूर्ण विखंडन",
    category: "philosophy",
    subCategory: "indian",
    authorOrOrigin: "U.G. Krishnamurti",
    authorOrOrigin_hi: "यू.जी. कृष्णमूर्ति",
    archetype: "The Biological Realist",
    archetype_hi: "जैविक यथार्थवादी",
    numeral: "II",
    coreAxiom: "The search for permanence and enlightenment is itself the disease.",
    coreAxiom_hi: "स्थायित्व और आत्मज्ञान की खोज ही अपने आप में सबसे बड़ा रोग है।",
    originalText: `There is no 'beyond'. There is no soul, no mind, no enlightenment. What is left when you drop all your questions and the search for answers is the natural functioning of this biological organism. The search for permanence and security is itself the disease.`,
    englishExcerpt:
      "You are trying to be something other than what you are. That is the whole misery of man. The demand to understand, to be enlightened, to be free, is the very momentum that keeps you trapped in the illusion of psychological continuity.",
    hindiExcerpt:
      "आप वह बनने का प्रयास कर रहे हैं जो आप नहीं हैं। यही मनुष्य का संपूर्ण दुख है। समझने, प्रबुद्ध होने, मुक्त होने की लालसा ही वह निरंतर गति है जो आपको मनोवैज्ञानिक निरंतरता के भ्रम में बांधे रखती है।",
    reflection:
      "U.G. was the ultimate iconoclast who dismantled every romanticized spiritual delusion with surgical biological realism. In engineering terms: there is no ghost in the machine. Cognition is an organic substrate processing inputs. Shedding the pretentious vanity of self-importance liberates the builder to focus purely on functional, empirical truth.",
    reflection_hi:
      "यू.जी. ने हर काल्पनिक आध्यात्मिक भ्रम को कठोर जैविक यथार्थवाद से ध्वस्त कर दिया। मशीन में कोई भूत नहीं है; चेतना केवल एक जैविक आधार है जो इनपुट को संसाधित करता है। कृत्रिम अहंकार को त्यागना ही वास्तविक सत्य को देखने की स्वतंत्रता देता है।",
    coreTenets: [
      "The physical organism functions perfectly in its natural, unconditioned state",
      "Total deconstruction of all gurus, spiritual goals, and psychological crutches",
      "Thought is memory looping continuously on physical hardware",
      "No cosmic beyond exists; drop the questions and artificial friction ceases",
    ],
    coreTenets_hi: [
      "भौतिक शरीर अपनी अशर्त, प्राकृतिक अवस्था में स्वतः पूर्ण कार्य करता है",
      "सभी गुरुओं, आध्यात्मिक लक्ष्यों और मनोवैज्ञानिक वैसाखियों का खंडन",
      "विचार केवल भौतिक मस्तिष्क पर लगातार लूप होती स्मृति है",
      "कोई पारलौकिक आयाम नहीं है; प्रश्नों को त्यागते ही कृत्रिम संघर्ष समाप्त हो जाता है",
    ],
    dateOrEra: "20th Century Iconoclast (1918–2007)",
    tags: ["U.G. Krishnamurti", "The Natural State", "Biological Realism", "Anti-Dogma", "Demystification"],
    readTime: "4 min read",
  },

  // =========================================================================
  // --- 3. OSHO: ZORBA THE BUDDHA & REBEL CONSCIOUSNESS ---
  // =========================================================================
  {
    id: "osho-zorba-the-buddha",
    authorImage: "/authors/osho.jpg",
    title: "Zorba the Buddha: The Synthesis of Earthly Vitality & Silent Awareness",
    title_hi: "ज़ोरबा द बुद्धा: भौतिक जीवंतता और मौन बोध का समन्वय",
    category: "philosophy",
    subCategory: "indian",
    authorOrOrigin: "Osho (Bhagwan Shree Rajneesh)",
    authorOrOrigin_hi: "ओशो (रजनीश)",
    archetype: "The Rebel Mystic",
    archetype_hi: "विद्रोही ध्यानी",
    numeral: "III",
    coreAxiom: "Zorba the Buddha: Celebrate the material earth with silent, meditative awareness.",
    coreAxiom_hi: "ज़ोरबा द बुद्धा: सांसारिक उत्सव को मौन और ध्यानपूर्ण बोध के साथ जीएं।",
    originalText: `Never belong to any crowd, never belong to any nation, never belong to any religion. Belong to the whole existence. Why limit yourself to small things when the whole is available?`,
    englishExcerpt:
      "I celebrate the whole human being: Zorba who loves the earth, the dance, the material reality; and Buddha who embodies meditative silence, stillness, and luminous consciousness. When science and silence embrace, when material craft meets meditative awareness, the true rebel is born.",
    hindiExcerpt:
      "मैं संपूर्ण मनुष्य का उत्सव मनाता हूँ: ज़ोरबा जो पृथ्वी, नृत्य और भौतिक यथार्थ से प्रेम करता है; और बुद्ध जो ध्यानी मौन, स्थिरता और प्रकाशमान चेतना का प्रतीक हैं। जब भौतिक शिल्प मौन बोध से मिलता है, तभी वास्तविक विद्रोही जन्म लेता है।",
    reflection:
      "Osho’s 'Zorba the Buddha' resolves the artificial division between material mastery and inner stillness. Building world-class software and intelligent systems demands the intense, hungry craftsmanship of Zorba, while architectural clarity and calm resilience demand the unperturbed silence of the Buddha.",
    reflection_hi:
      "ओशो का 'ज़ोरबा द बुद्धा' भौतिक कुशलता और आंतरिक शांति के बीच के कृत्रिम विभाजन को समाप्त करता है। विश्वस्तरीय निर्माण के लिए ज़ोरबा की भूख और बुद्ध की अडिग शांति दोनों अनिवार्य हैं।",
    coreTenets: [
      "Reconciliation of material creative passion (Zorba) with inner stillness (Buddha)",
      "Unconditioned rebellion against ideological conformity and inherited guilt",
      "Witnessing consciousness (Sakshi) active amidst intense engineering engagement",
      "Freedom from societal dogmas; total presence and celebratory agency",
    ],
    coreTenets_hi: [
      "रचनात्मक भौतिक जुनून (ज़ोरबा) और आंतरिक मौन (बुद्ध) का समन्वय",
      "वैचारिक अंधानुकरण और पारंपरिक अपराधबोध के विरुद्ध अशर्त विद्रोह",
      "सक्रिय कर्म के बीच साक्षी भाव (साक्षी चेतना) की निरंतर उपस्थिति",
      "सामाजिक रूढ़ियों से मुक्ति; वर्तमान क्षण में पूर्ण उत्सव",
    ],
    dateOrEra: "20th Century Rebel Philosopher (1931–1990)",
    tags: ["Osho", "Zorba the Buddha", "Rebel Mind", "Consciousness", "Synthesis"],
    readTime: "3 min read",
  },

  // =========================================================================
  // --- 4. BHAGAT SINGH: REASON, REALISM & REVOLUTIONARY WILL ---
  // =========================================================================
  {
    id: "bhagat-singh-why-i-am-an-atheist",
    authorImage: "/authors/bhagat-singh.jpg",
    title: "Why I Am an Atheist: Independent Thinking & Ruthless Rationalism",
    title_hi: "मैं नास्तिक क्यों हूँ: स्वतंत्र चिंतन और निर्मम तर्कवाद",
    category: "philosophy",
    subCategory: "indian",
    authorOrOrigin: "Bhagat Singh (Lahore Central Jail, 1930)",
    authorOrOrigin_hi: "भगत सिंह (लाहौर सेंट्रल जेल, 1930)",
    archetype: "The Revolutionary Rationalist",
    archetype_hi: "क्रांतिकारी तर्कवादी",
    numeral: "IV",
    coreAxiom: "Merciless criticism and independent thinking are the two pillars of progress.",
    coreAxiom_hi: "निर्मम आलोचना और स्वतंत्र विचार—ये दोनों प्रगति के दो अनिवार्य स्तंभ हैं।",
    originalText: `Any man who stands for progress has to criticize, disbelieve and challenge every item of the old faith. Item by item he has to analyze every nook and corner of prevailing faith. If after considerable reasoning, he is led to believe in any theory, his faith is welcomed. His reasoning can be mistaken, but it is open to correction, because reason is the guiding star of his life.`,
    englishExcerpt:
      "Merciless criticism and independent thinking are the two indispensable qualities of revolutionary thinking. Because I have discarded blind faith and divine crutches, I stand on my own feet. It is not vanity; it is reason and courage.",
    hindiExcerpt:
      "जो भी व्यक्ति प्रगति के लिए खड़ा होता है, उसे प्राचीन विश्वास के हर पहलू की आलोचना करनी होगी और उसे चुनौती देनी होगी। जब मैंने अंधविश्वास और दैवीय वैसाखियों को त्याग दिया, तब मैं अपने पैरों पर खड़ा हुआ। यह अहंकार नहीं; यह विवेक और साहस है।",
    reflection:
      "Beyond his revolutionary martyrdom, Bhagat Singh was a towering rationalist philosopher. His jail treatise 'Why I Am an Atheist' is an uncompromising defense of empirical reason over comfortable superstitions. For an engineer and builder, progress demands the intellectual courage to interrogate established consensus and take sovereign responsibility for one’s creations.",
    reflection_hi:
      "भगत सिंह एक महान क्रांतिकारी होने के साथ-साथ प्रखर तर्कवादी दार्शनिक भी थे। उनकी कृति 'मैं नास्तिक क्यों हूँ' आरामदायक अंधविश्वासों के स्थान पर वैज्ञानिक तर्क की अडिग वकालत है।",
    coreTenets: [
      "Ruthless interrogation of traditional dogmas, rituals, and blind beliefs",
      "Sovereign reliance on empirical reason and intellectual integrity",
      "Atheism understood not as vanity, but as scientific clarity and moral courage",
      "Uncompromising dedication to systemic progress and human dignity",
    ],
    coreTenets_hi: [
      "पारंपरिक रूढ़ियों, कर्मकांडों और अंधविश्वासों की निर्मम समीक्षा",
      "वैज्ञानिक तर्क और बौद्धिक प्रामाणिकता पर संप्रभु निर्भरता",
      "नास्तिकता अहंकार नहीं, बल्कि स्पष्टता और नैतिक साहस है",
      "मानव गरिमा और व्यवस्थागत प्रगति के प्रति अटूट समर्पण",
    ],
    dateOrEra: "Modern Indian Rationalist Philosophy (1907–1931)",
    tags: ["Bhagat Singh", "Why I Am An Atheist", "Rationalism", "Independent Thinking", "Courage"],
    readTime: "4 min read",
  },

  // =========================================================================
  // --- 5. GAUTAMA BUDDHA: KALAMA SUTTA & RADICAL EMPIRICAL INQUIRY ---
  // =========================================================================
  {
    id: "buddha-kalama-sutta-anatta",
    authorImage: "/authors/gautama-buddha.jpg",
    title: "Kalama Sutta & Anatta: Radical Empiricism & The Non-Static Self",
    title_hi: "कालामा सुत्त और अनात्त: प्रत्यक्ष अनुभववाद और गतिशील चेतना",
    category: "philosophy",
    subCategory: "indian",
    authorOrOrigin: "Gautama Buddha — Shramana Tradition",
    authorOrOrigin_hi: "गौतम बुद्ध (श्रमण परंपरा)",
    archetype: "The Empirical Sage",
    archetype_hi: "अनुभववादी मुनि",
    numeral: "V",
    coreAxiom: "Believe nothing without personal verification; identity is a dynamic process (Anatta).",
    coreAxiom_hi: "स्वयं परखे बिना कुछ भी मत मानो; पहचान एक निरंतर प्रवाह है (अनात्त)।",
    originalText: `मा अनुस्सवेन, मा परम्पराय, मा इतिकिराय, मा पिटकसम्पदानेन... अत्तना व जानेय्याथ।`,
    transliteration: "Mā anussavena, mā paramparāya, mā itikirāya, mā piṭakasampadānena... attanā va jāneyyātha.",
    englishExcerpt:
      "Do not go by oral tradition, by lineage of teaching, by hearsay, by a collection of scriptures, or by the authority of an elder. When you know for yourselves that certain things are wholesome and conducive to benefit and happiness, only then accept and abide by them.",
    hindiExcerpt:
      "केवल परंपरा, अनुश्रुति या धर्मग्रंथों के आधार पर किसी बात को स्वीकार मत करो। जब तुम स्वयं अपने विवेक और अनुभव से जानो कि ये बातें कल्याणकारी और सत्य हैं, तभी उन्हें स्वीकार करो और उनके अनुसार आचरण करो।",
    reflection:
      "The Buddha was humanity’s first great empirical investigator of mind and reality. His doctrine of Anatta (non-self) reveals that identity is not a fixed, immutable kernel, but a dynamic, relational network of dependent co-arising processes (Pratityasamutpada). This mirrors modern distributed computing: states emerge from interaction, not permanent essence.",
    reflection_hi:
      "बुद्ध मानवता के प्रथम महान अनुभववादी अन्वेषक थे। उनका 'अनात्त' (अनात्म) का सिद्धांत बताता है कि अस्मिता कोई स्थिर जड़ नहीं, बल्कि अन्योन्याश्रित प्रक्रियाओं (प्रतीत्यसमुत्पाद) का एक गतिशील ताना-बाना है।",
    coreTenets: [
      "Kalama Sutta principle: verify through personal observation and empirical reason",
      "Anatta (Non-Self): consciousness is a relational network of events, not a static core",
      "Pratityasamutpada: dependent origination governs computational and physical systems",
      "The Middle Way: navigating beyond dogma with relentless present awareness",
    ],
    coreTenets_hi: [
      "कालामा सुत्त का सूत्र: स्वयं के प्रत्यक्ष निरीक्षण और विवेक से कसौटी पर परखना",
      "अनात्त (अनात्म): चेतना परस्पर जुड़ी घटनाओं का जाल है, कोई स्थिर सत्ता नहीं",
      "प्रतीत्यसमुत्पाद: कारणों और संबंधों पर आधारित कार्य-कारण व्यवस्था",
      "मध्यम मार्ग: समस्त अतिवादी हठधर्मिता से परे वर्तमान में सजग रहना",
    ],
    dateOrEra: "Ancient Indian Shramana Philosophy (c. 6th–5th Century BCE)",
    tags: ["Gautama Buddha", "Kalama Sutta", "Anatta", "Empirical Inquiry", "Pratityasamutpada"],
    readTime: "4 min read",
  },

  // =========================================================================
  // --- 6. CHARVAKA: LOKAYATA MATERIALISM & RADICAL SENSORY TRUTH ---
  // =========================================================================
  {
    id: "charvaka-lokayata-materialism",
    authorImage: "/authors/charvaka.jpg",
    title: "Charvaka Lokayata: Radical Empiricism & Direct Perception (Pratyaksha)",
    title_hi: "चार्वाक लोकायत: प्रत्यक्ष प्रमाण और संवेदी सत्य",
    category: "philosophy",
    subCategory: "indian",
    authorOrOrigin: "Brihaspati Tradition — Charvaka / Lokayata",
    authorOrOrigin_hi: "बृहस्पति परंपरा — चार्वाक / लोकायत",
    archetype: "The Materialist Radical",
    archetype_hi: "लोकायत भौतिकवादी",
    numeral: "VI",
    coreAxiom: "Direct perception (Pratyaksha) is the sole truth; reject metaphysical speculation.",
    coreAxiom_hi: "केवल प्रत्यक्ष प्रमाण (प्रत्यक्ष) ही सत्य है; काल्पनिक अटकलों को खारिज करो।",
    originalText: `यावज्जीवेत्सुखं जीवेद् ऋणं कृत्वा घृतं पिबेत्।
भस्मीभूतस्य देहस्य पुनरागमनं कुतः॥`,
    transliteration: "Yāvaj-jīvet sukhaṁ jīved ṛṇaṁ kṛtvā ghṛtaṁ pibet | Bhasmībhūtasya dehasya punarāgamanaṁ kutaḥ ||",
    englishExcerpt:
      "Direct sensory perception (Pratyaksha) is the sole valid means of authentic knowledge. What cannot be observed or empirically verified cannot be dogmatically asserted. Live lucidly in this tangible, material world, free from the manipulation of priests and speculative heavens.",
    hindiExcerpt:
      "प्रत्यक्ष संवेदी अनुभव ही वास्तविक ज्ञान का एकमात्र प्रामाणिक आधार है। जिसे देखा या अनुभव द्वारा सत्यापित नहीं किया जा सकता, उसे अंधविश्वास की तरह थोपा नहीं जा सकता। इस प्रत्यक्ष संसार में पुरोहितों के छल से मुक्त होकर विवेकपूर्वक जियो।",
    reflection:
      "Centuries before modern Western scientific materialism, the ancient Indian Charvakas championed ruthless empirical skepticism. In artificial intelligence and software engineering, this is the golden rule of telemetry: never trust untested assertions or marketing mysticism; ground all truth in observable data, verifiable benchmarks, and real-world performance.",
    reflection_hi:
      "आधुनिक वैज्ञानिक भौतिकवाद से सहस्राब्दियों पूर्व, भारतीय चार्वाक परंपरा ने निर्मम संशयवाद की नींव रखी। इंजीनियरिंग में यह टेलीमेट्री का नियम है: कभी किसी अप्रमाणित दावे पर विश्वास मत करो; सत्य को प्रत्यक्ष आंकड़ों पर परखो।",
    coreTenets: [
      "Pratyaksha Pramana: direct sensory verification is the sole epistemological basis",
      "Rejection of metaphysical speculation, unseen realms, and ritual exploitation",
      "Naturalism and material physical reality as the ground of all existence",
      "Grounded rationalism: anchor every hypothesis in observable, repeatable evidence",
    ],
    coreTenets_hi: [
      "प्रत्यक्ष प्रमाण: प्रत्यक्ष संवेदी सत्यापन ही ज्ञान का एकमात्र वैध आधार है",
      "काल्पनिक परलोक, अनदेखी शक्तियों और धार्मिक शोषण का पूर्ण बहिष्कार",
      "भौतिक यथार्थ और प्रकृति ही संपूर्ण अस्तित्व की वास्तविक धुरी है",
      "तर्कसंगत प्रत्यक्षवाद: हर परिकल्पना को प्रत्यक्ष साक्ष्य पर कसना",
    ],
    dateOrEra: "Ancient Indian Materialist Darshana (c. 600 BCE)",
    tags: ["Charvaka", "Lokayata", "Materialism", "Pratyaksha", "Rationalism", "Atheism"],
    readTime: "3 min read",
  },

  // =========================================================================
  // --- POETRY & VERSE: ONTOLOGY, METAPHOR & EXISTENCE ---
  // =========================================================================
  {
    id: "ghalib-na-tha-kuch-to",
    authorImage: "/authors/ghalib.jpg",
    title: "Na Tha Kuch To Khuda Tha — The Paradox of Existence",
    title_hi: "न था कुछ तो ख़ुदा था — वजूद का रहस्य",
    category: "poetry",
    subCategory: "classical",
    authorOrOrigin: "Mirza Asadullah Khan Ghalib",
    authorOrOrigin_hi: "मिर्ज़ा असदुल्लाह ख़ाँ 'ग़ालिब'",
    archetype: "The Lyrical Ontologist",
    archetype_hi: "अस्तित्ववादी शायर",
    numeral: "I",
    coreAxiom: "When there was nothing, God was; had nothing been, God would have been.",
    coreAxiom_hi: "न था कुछ तो ख़ुदा था, कुछ न होता तो ख़ुदा होता; डुबोया मुझ को होने ने, न होता मैं तो क्या होता।",
    originalText: `نہ تھا کچھ تو خدا تھا، کچھ نہ ہوتا تو خدا ہوتا
ڈبویا مجھ کو ہونے نے، نہ ہوتا میں تو کیا ہوتا`,
    transliteration:
      "Na thā kuchh to Ḳhudā thā, kuchh na hotā to Ḳhudā hotā | Daboyā mujhko hone ne, na hotā maiñ to kyā hotā",
    englishExcerpt:
      "When there was nothing, there was God; had nothing been, God would have been.\nMy very being was my drowning; had I not existed, what would I have been?",
    hindiExcerpt:
      "जब कुछ भी अस्तित्व में न था, तब भी परम शून्य में परमात्मा था। मेरे अपने अस्तित्व और चेतना ने ही मुझे इस सांसारिक उलझन में डुबो दिया; यदि मेरा यह 'होना' ही न होता, तो भला क्या होता?",
    reflection:
      "Ghalib’s verse encapsulates the ultimate existential irony: the sheer burden and consciousness of 'being'. In systems philosophy, before data or computation exists, there is unconditioned silent potential; the emergence of consciousness creates both beauty and irreversible existential friction.",
    reflection_hi:
      "ग़ालिब का यह शेर अस्तित्व के सबसे बड़े विरोधाभास को उजागर करता है। चेतना का जन्म अपने साथ अपार सुंदरता और अपार अस्तित्ववादी वेदना दोनों लेकर आता है।",
    coreTenets: [
      "Ontological irony: consciousness as both miracle and existential burden",
      "The paradox of being set against the void of non-existence",
      "Sublime defiance of dogmatic certainty through razor-sharp verse",
      "Intimacy with suffering, time, and unconditioned inquiry",
    ],
    coreTenets_hi: [
      "अस्तित्व का विडंबनापूर्ण बोध: चेतना वरदान भी है और अस्तित्व का भार भी",
      "शून्य और अस्तित्व के बीच का गहरा दार्शनिक अंतर्द्वंद्व",
      "रूढ़िवादी निश्चितताओं पर कविता का तीखा और बेबाक कटाक्ष",
      "दुख, समय और निस्सीम जिज्ञासा के साथ आंतरिक एकात्मता",
    ],
    dateOrEra: "19th Century Classical Urdu Ghazal",
    tags: ["Ghalib", "Urdu Poetry", "Ontology", "Ghazal", "Nihilism"],
    readTime: "3 min read",
  },
  {
    id: "faiz-hum-dekhenge",
    authorImage: "/authors/faiz.jpg",
    title: "Hum Dekhenge — The Inevitable Triumph of Truth",
    title_hi: "हम देखेंगे — सत्य की अवश्यंभावी विजय",
    category: "poetry",
    subCategory: "modern",
    authorOrOrigin: "Faiz Ahmad Faiz",
    authorOrOrigin_hi: "फ़ैज़ अहमद फ़ैज़",
    archetype: "The Prophetic Humanist",
    archetype_hi: "क्रांतिकारी मानवतावादी",
    numeral: "II",
    coreAxiom: "We shall bear witness; it is inevitable that we too shall see.",
    coreAxiom_hi: "हम देखेंगे, लाज़िम है कि हम भी देखेंगे; वह दिन कि जिसका वादा है।",
    originalText: `ہم دیکھیں گے، لازم ہے کہ ہم بھی دیکھیں گے
وہ دن کہ جس کا وعدہ ہے، جو لوحِ ازل پہ لکھا ہے`,
    transliteration:
      "Hum dekheñge, lāzim hai ke hum bhī dekheñge | Woh din ke jis kā wa'ada hai, jo lauh-e-azal pe likhā hai",
    englishExcerpt:
      "We shall bear witness, it is inevitable that we too shall see;\nThe day that was promised, inscribed upon eternity's slate.\nWhen the crowns of tyrants shall be cast down, and the thrones of oppression overturned.",
    hindiExcerpt:
      "हम देखेंगे, यह तय है कि हम भी देखेंगे—वह दिन जिसका अनंत काल से वादा है। जब ज़ुल्म और तानाशाही के तख्त गिरा दिए जाएंगे और सत्य का प्रकाश फैलेगा।",
    reflection:
      "Faiz transforms poetic resistance into mathematical certainty. Truth does not compromise with tyranny or ignorance. For engineers and thinkers building through turbulent landscapes, it is an enduring anthem of steadfast dignity and clarity over systemic noise.",
    reflection_hi:
      "फ़ैज़ प्रतिरोध को गणितीय अनिवार्यता में बदल देते हैं। झूठ और अत्याचार चाहे कितने भी विशाल हों, सत्य का प्रकटीकरण अवश्यंभावी है।",
    coreTenets: [
      "The mathematical inevitability of truth dispelling oppressive illusions",
      "Lyrical resistance as an ethical duty of the sovereign creator",
      "Unyielding faith in human dignity and collective liberation",
      "Transforming personal sorrow into public courage and resolve",
    ],
    coreTenets_hi: [
      "अन्याय और पाखंड पर सत्य की विजय की गणितीय अनिवार्यता",
      "रचनात्मक प्रतिरोध: एक सजग सृजक का नैतिक कर्तव्य",
      "मानवीय गरिमा और सामूहिक मुक्ति में अटूट विश्वास",
      "व्यक्तिगत वेदना को सार्वजनिक साहस और संकल्प में रूपांतरित करना",
    ],
    dateOrEra: "Modernist Urdu Resistance Poetry (20th Century)",
    tags: ["Faiz", "Resistance", "Lyrical Verse", "Truth", "Courage"],
    readTime: "3 min read",
  },
  {
    id: "jaun-elia-nihilism",
    authorImage: "/authors/jaun-elia.jpg",
    title: "Shayad — The Anatomy of Self-Disillusionment",
    title_hi: "शायद — मोहभंग और शून्यता का विश्लेषण",
    category: "poetry",
    subCategory: "modern",
    authorOrOrigin: "Jaun Elia",
    authorOrOrigin_hi: "जौन एलिया",
    archetype: "The Radical Melancholic",
    archetype_hi: "विषादवादी दार्शनिक",
    numeral: "III",
    coreAxiom: "What cruelty that your countenance only returns to my memory when I strain to recall.",
    coreAxiom_hi: "क्या सितम है कि अब तिरी सूरत, ग़ौर करने पे याद आती है।",
    originalText: `کیا ستم ہے کہ اب تری صورت
غور کرنے پہ یاد آتی ہے
عمر گزرے گی امتحان میں کیا
داغ ہی دیں گے مجھ کو دان میں کیا`,
    transliteration:
      "Kyā sitam hai ke ab tirī sūrat / Ghaur karne pe yaad aatī hai | Umr guzregī imtihān meñ kyā / Dāġh hī deñge mujh ko dān meñ kyā",
    englishExcerpt:
      "What a cruelty it is that your countenance\nOnly returns to my memory when I consciously strain to recall.\nI was the ruin of my own empire of thought, watching the architecture of affection crumble into indifference.",
    hindiExcerpt:
      "कैसी विडंबना है कि अब तुम्हारा चेहरा भी मुझे तभी याद आता है जब मैं ज़बरदस्ती याद करने की कोशिश करता हूँ। मैं अपने ही वैचारिक साम्राज्य के खंडहरों में खड़ा होकर देख रहा हूँ कि कैसे प्रेम का महल उदासीनता में बिखर गया।",
    reflection:
      "Jaun Elia brought raw, philosophical nihilism into modern Urdu poetry. He refuses comforting illusions or convenient reconciliations. He dissects how memories decay, how identities erode, and how the human condition remains inescapably absurd.",
    reflection_hi:
      "जौन एलिया ने आधुनिक शायरी में बेबाक, कच्चा शून्यवाद प्रस्तुत किया। वे किसी भी सुविधाजनक दिलासे को स्वीकार नहीं करते। वे दिखाते हैं कि कैसे स्मृतियां क्षीण होती हैं और अकेलापन ही मनुष्य का अंतिम यथार्थ है।",
    coreTenets: [
      "Unflinching dissection of memory and psychological entropy",
      "Rejection of comfortable sentimental illusions and false peace",
      "Radical intellectual honesty regarding loneliness and absurdity",
      "The tragedy of outliving one's own burning passions",
    ],
    coreTenets_hi: [
      "स्मृति के क्षरण और मनोवैज्ञानिक शून्य का निर्मम चीरफाड़",
      "भावुक भ्रमों और झूठी शांति के सुविधाजनक मुखौटों का बहिष्कार",
      "अकेलेपन और निरर्थकता के प्रति निर्भीक बौद्धिक ईमानदारी",
      "अपने ही अंतर्द्वंद्वों और बुझते हुए जुनून को देखने की त्रासदी",
    ],
    dateOrEra: "Contemporary Urdu Philosophical Poetry",
    tags: ["Jaun Elia", "Urdu Poetry", "Existential Melancholy", "Nihilism"],
    readTime: "3 min read",
  },
  {
    id: "iqbal-khudi",
    authorImage: "/authors/iqbal.jpg",
    title: "Khudi: The Architecture of the Sovereign Self",
    title_hi: "ख़ुदी: संप्रभु आत्म का निर्माण",
    category: "poetry",
    subCategory: "classical",
    authorOrOrigin: "Allama Muhammad Iqbal — Asrar-e-Khudi",
    authorOrOrigin_hi: "अल्लामा मुहम्मद इक़बाल (असरार-ए-ख़ुदी)",
    archetype: "The Sovereign Architect of Will",
    archetype_hi: "संकल्प का संप्रभु शिल्पी",
    numeral: "IV",
    coreAxiom: "Elevate your selfhood to such heights that God Himself asks: What is your supreme will?",
    coreAxiom_hi: "ख़ुदी को कर बुलंद इतना कि हर तक़दीर से पहले, ख़ुदा बंदे से ख़ुद पूछे बता तेरी रज़ा क्या है।",
    originalText: `خودی کو کر بلند اتنا کہ ہر تقدیر سے پہلے
خدا بندے سے خود پوچھے بتا تیری رضا کیا ہے`,
    transliteration:
      "Khudī ko kar buland itnā ke har taqdīr se pehle / Ḳhudā bande se ḳhud pūchhe batā terī razā kyā hai",
    englishExcerpt:
      "Elevate your selfhood (Khudi) to such sublime heights that before decreeing your destiny,\nGod Himself shall ask you: Speak, what is your supreme desire?\nDo not dissolve into passive fatalism; forge the singular spark of your sovereign will.",
    hindiExcerpt:
      "अपने आत्म-गौरव और संकल्प (ख़ुदी) को ऐसी ऊंचाइयों पर ले जाओ कि भाग्य लिखने से पहले विधाता तुमसे स्वयं पूछे: बोल, तेरी मर्ज़ी क्या है? भाग्यवादी लाचारी में मत बिखर जाओ; अपने संप्रभु संकल्प को गढ़ो।",
    reflection:
      "Iqbal's doctrine of Khudi is the antithesis of fatalistic surrender. Synthesizing Eastern mysticism with dynamic agency, he demands continuous self-cultivation, mastery, and creative impact. For engineers, it is a directive to build with sovereign intent.",
    reflection_hi:
      "इक़बाल का 'ख़ुदी' का सिद्धांत लाचार भाग्यवाद का पुरज़ोर खंडन है। वे निष्क्रिय समर्पण के विरुद्ध निरंतर आत्म-निर्माण, संप्रभु इच्छाशक्ति और रचनात्मक पराक्रम की मांग करते हैं।",
    coreTenets: [
      "Active creative agency over passive fatalism and resignation",
      "Continuous self-fortification and intellectual mastery",
      "Dynamic transformation of circumstances through sovereign will",
      "Synthesis of analytical rigor with uncompromising spiritual depth",
    ],
    coreTenets_hi: [
      "लाचार भाग्यवाद के स्थान पर सक्रिय रचनात्मक संकल्प और पुरुषार्थ",
      "निरंतर आत्म-परिष्कार और बौद्धिक संप्रभुता का निर्माण",
      "अपने संकल्प की शक्ति से प्रतिकूल परिस्थितियों को रूपांतरित करना",
      "तार्किक कठोरता के साथ आध्यात्मिक गहराई का अद्वितीय संश्लेषण",
    ],
    dateOrEra: "Early 20th Century Philosophical Verse",
    tags: ["Iqbal", "Khudi", "Sovereignty", "Agency", "Will"],
    readTime: "3 min read",
  },
  {
    id: "frost-two-roads",
    authorImage: "/authors/frost.jpg",
    title: "The Road Not Taken — Divergence as Sovereign Destiny",
    title_hi: "वह मार्ग जो चुना नहीं गया — चयन का संप्रभु दायित्व",
    category: "poetry",
    subCategory: "western",
    authorOrOrigin: "Robert Frost",
    authorOrOrigin_hi: "रॉबर्ट फ्रॉस्ट",
    archetype: "The Solitary Pathmaker",
    archetype_hi: "एकाकी पथनिर्माता",
    numeral: "V",
    coreAxiom: "Two roads diverged in a wood, and I—I took the one less traveled by, and that has made all the difference.",
    coreAxiom_hi: "जंगल में दो रास्ते अलग हुए, और मैंने वह चुना जिस पर कम लोग चले थे, और उसी ने सारा अंतर पैदा कर दिया।",
    englishExcerpt:
      "Two roads diverged in a yellow wood,\nAnd sorry I could not travel both\nAnd be one traveler, long I stood\nAnd looked down one as far as I could...\nI took the one less traveled by,\nAnd that has made all the difference.",
    hindiExcerpt:
      "पीले वन में दो रास्ते अलग दिशाओं में फूट रहे थे। अकेला यात्री होने के कारण मैं दोनों पर नहीं चल सकता था। मैंने वह रास्ता चुना जिस पर कम पदचिह्न थे, और इसी एक निर्णय ने मेरे जीवन की संपूर्ण दिशा बदल दी।",
    reflection:
      "Frost captures the existential weight of irreversible branching decisions. In software architecture, research, and life, every choice prunes an infinite graph of possibilities. Choosing the rigorous, solitary, unconventional path defines authentic craftsmanship.",
    reflection_hi:
      "फ्रॉस्ट अपरिवर्तनीय निर्णयों के अस्तित्ववादी भार को दर्शाते हैं। जीवन और वास्तुकला में, हर चुनाव अनंत संभावनाओं को छांटता है। लीक से हटकर कठिन, अनछुआ मार्ग चुनना ही प्रामाणिक शिल्प को जन्म देता है।",
    coreTenets: [
      "Irreversible bifurcation and the moral weight of autonomous choice",
      "The quiet fortitude required for independent craftsmanship",
      "Skepticism toward crowded consensus and conventional routes",
      "Finding existential clarity in solitary, uncharted landscapes",
    ],
    coreTenets_hi: [
      "स्वतंत्र निर्णय और उसके अपरिवर्तनीय परिणामों का नैतिक भार",
      "स्वतंत्र शिल्प और एकाकी पथ पर चलने का अटूट धैर्य",
      "भीड़-भाड़ वाले सुविधाजनक रास्तों के प्रति सजग संशयवाद",
      "अनजान और अनछुए परिदृश्यों में अस्तित्ववादी स्पष्टता खोजना",
    ],
    dateOrEra: "20th Century American Verse",
    tags: ["Robert Frost", "Choice", "Independence", "Verse", "Craft"],
    readTime: "2 min read",
  },

  // =========================================================================
  // --- STORIES & PARABLES: LABYRINTHS, POWER & EXISTENTIAL DILEMMAS ---
  // =========================================================================
  {
    id: "kafka-before-the-law",
    authorImage: "/authors/kafka.jpg",
    title: "Before the Law — The Tragedy of Awaited Permission",
    title_hi: "क़ानून के समक्ष — अनुमति की प्रतीक्षा की त्रासदी",
    category: "stories",
    subCategory: "modern",
    authorOrOrigin: "Franz Kafka — The Trial",
    authorOrOrigin_hi: "फ़्रांज़ काफ़्का (द ट्रायल)",
    archetype: "The Parabolist of Absurdity",
    archetype_hi: "विसंगति का कथाकार",
    numeral: "I",
    coreAxiom: "This entrance was meant solely for you; now I am going to shut it.",
    coreAxiom_hi: "यह दरवाज़ा केवल तुम्हारे लिए ही था; अब मैं इसे हमेशा के लिए बंद करने जा रहा हूँ।",
    englishExcerpt:
      "Before the law stands a doorkeeper. To this doorkeeper there comes a man from the country and prays for admittance to the Law. But the doorkeeper says that he cannot grant admittance at the moment... The man waits for days, for decades. At the hour of death, the doorkeeper shouts into his ear: 'No one else could ever be admitted here, for this entrance was meant solely for you. I am now going to shut it.'",
    hindiExcerpt:
      "क़ानून के दरवाज़े पर एक दरबान खड़ा है। गाँव से आया एक व्यक्ति प्रवेश की अनुमति मांगता है। दरबान कहता है—अभी नहीं। वह व्यक्ति दशकों तक प्रतीक्षा करता रहता है। मृत्यु की घड़ी में दरबान उसके कान में चिल्लाता है: 'यहाँ कोई और प्रवेश नहीं पा सकता था, क्योंकि यह दरवाज़ा केवल तुम्हारे लिए बना था। अब मैं इसे बंद कर रहा हूँ।'",
    reflection:
      "Kafka lays bare the tragic folly of waiting for external permission. In creative engineering, entrepreneurship, and intellectual pursuit, waiting for institutions or gatekeepers to validate your entry guarantees lifelong stagnation. The gate exists for you to walk through.",
    reflection_hi:
      "काफ़्का बाहरी अनुमति की प्रतीक्षा करने की घातक भूल को उजागर करते हैं। सृजन या जीवन में, यदि आप किसी संस्थान या दरबान की हरी झंडी का इंतज़ार करेंगे, तो जीवन बीत जाएगा। दरवाज़ा आपका था, आपको सीधे गुज़र जाना चाहिए था।",
    coreTenets: [
      "The illusion of institutional permission and spiritual gatekeeping",
      "The paralyzing danger of passive psychological postponement",
      "The labyrinthine absurdity of bureaucratic authority",
      "The imperative of sovereign action before the threshold closes",
    ],
    coreTenets_hi: [
      "संस्थागत अनुमति और मनोवैज्ञानिक द्वारपालों का घातक भ्रम",
      "निष्क्रिय स्थगन और प्रतीक्षा करने का जानलेवा संकट",
      "नौकरशाही और सामाजिक सत्ताओं की भूलभुलैया जैसी निरर्थकता",
      "द्वार बंद होने से पहले संप्रभुतापूर्वक भीतर प्रवेश करने की अनिवार्यता",
    ],
    dateOrEra: "Modernist Parable (1915)",
    tags: ["Kafka", "Parable", "Agency", "Absurdism", "Existentialism"],
    readTime: "4 min read",
  },
  {
    id: "borges-library-babel",
    authorImage: "/authors/borges.jpg",
    title: "The Library of Babel — Vector Spaces of the Infinite",
    title_hi: "बेबेल का पुस्तकालय — अनंतता के बहुआयामी आयाम",
    category: "stories",
    subCategory: "modern",
    authorOrOrigin: "Jorge Luis Borges — Ficciones",
    authorOrOrigin_hi: "होर्हे लुइस बोर्गेस (फ़िकसिओनेस)",
    archetype: "The Architect of Infinitude",
    archetype_hi: "अनंतता का वास्तुकार",
    numeral: "II",
    coreAxiom: "The universe, which others call the Library, is composed of an infinite number of hexagonal galleries.",
    coreAxiom_hi: "ब्रह्मांड, जिसे दूसरे पुस्तकालय कहते हैं, अनंत षट्कोणीय दीर्घाओं से बना है।",
    englishExcerpt:
      "The universe (which others call the Library) is composed of an indefinite and perhaps infinite number of hexagonal galleries... Every possible combination of orthographic symbols exists within its shelves: the detailed history of the future, the archangel’s autobiographies, the veracious catalog of the Library, thousands of false catalogs... Somewhere in the vastness lies the book that explains the Library.",
    hindiExcerpt:
      "यह ब्रह्मांड अनंत षट्कोणीय दीर्घाओं का पुस्तकालय है। इन अलमारियों पर अक्षरों के हर संभव संयोजन मौजूद हैं: भविष्य का संपूर्ण इतिहास, देवदूतों की आत्मकथाएँ, हज़ारों झूठी सूचियाँ... और कहीं इस असीम विस्तार में वह पुस्तक भी दबी है जो इस संपूर्ण पुस्तकालय का रहस्य खोलती है।",
    reflection:
      "Borges predicted high-dimensional vector spaces and modern generative AI decades before transformers were invented. In an infinite combinatorial ocean of tokens, noise is everywhere; the true engineering art is defining the exact objective function that extracts signal from the void.",
    reflection_hi:
      "बोर्गेस ने आधुनिक जनरेटिव एआई और हाई-डायमेंशनल वेक्टर स्पेस की भविष्यवाणी दशकों पहले कर दी थी। अनंत संभावनाओं के शोर में सच्चा शिल्प यह पहचानना है कि व्यर्थ शोर से सही संकेत (सिग्नल) कैसे निकाला जाए।",
    coreTenets: [
      "Combinatorial infinity and the illusion of exhaustive knowledge",
      "High-dimensional information geometry and latent embeddings",
      "The search for signal amid cosmological generative noise",
      "The quiet melancholy of navigating boundless permutations",
    ],
    coreTenets_hi: [
      "संभावनाओं की अनंतता और संपूर्ण ज्ञान की भ्रामक तृष्णा",
      "सूचना ज्यामिति, बहुआयामी स्पेस और अप्रकट संबंध",
      "अनंत जनरेटिव शोर के महासागर में सत्य का संकेत खोजना",
      "असीम संभावनाओं के बीच एकाकी यात्रा का शांत सौंदर्य",
    ],
    dateOrEra: "Philosophical Fiction (1941)",
    tags: ["Borges", "Infinite Libraries", "Vector Spaces", "Information Theory"],
    readTime: "5 min read",
  },
  {
    id: "dostoevsky-underground-man",
    authorImage: "/authors/dostoevsky.jpg",
    title: "Notes from Underground — The Rebellion Against Pure Utility",
    title_hi: "तहख़ाने से नोट्स — विशुद्ध उपयोगितावाद के विरुद्ध विद्रोह",
    category: "stories",
    subCategory: "classical",
    authorOrOrigin: "Fyodor Dostoevsky",
    authorOrOrigin_hi: "फ्योदोर दोस्तोएव्स्की",
    archetype: "The Psychoscientist of Irrationality",
    archetype_hi: "अतार्किकता का मनोविज्ञानी",
    numeral: "III",
    coreAxiom: "Man is not a piano key; he will act irrationally solely to prove he is free.",
    coreAxiom_hi: "मनुष्य कोई पियानो की कुंजी नहीं है; वह केवल यह साबित करने के लिए अतार्किक आचरण करेगा कि वह स्वतंत्र है।",
    englishExcerpt:
      "I am a sick man... I am a spiteful man. I believe my liver is diseased. You believe in a Crystal Palace of reason, an arithmetic where two times two makes four. But gentlemen, what if man desires destruction, chaos, and suffering purely to assert his individuality against mathematical deterministic confinement?",
    hindiExcerpt:
      "मैं एक बीमार आदमी हूँ... मैं एक कुटिल आदमी हूँ। आप तर्क के कांच के महल में विश्वास करते हैं, जहाँ दो और दो चार होते हैं। लेकिन महोदयों, क्या होगा यदि मनुष्य केवल अपने स्वतंत्र अस्तित्व को सिद्ध करने के लिए गणितीय नियमों को तोड़कर विनाश और अराजकता को चुन ले?",
    reflection:
      "Dostoevsky shatters the naive delusion of pure utilitarian rationalism. Human beings cannot be reduced to clean cost functions or linear programming. We retain an intractable yearning for freedom that defies optimization—a crucial reality for system architects designing for humans.",
    reflection_hi:
      "दोस्तोएव्स्की विशुद्ध उपयोगितावादी तर्कवाद के खोखलेपन को चीर कर रख देते हैं। मनुष्य को केवल गणितीय समीकरणों या लाभ-हानि के एल्गोरिदम में नहीं बांधा जा सकता। हमारी स्वतंत्रता की तड़प हर तार्किक सीमा को पार कर जाती है।",
    coreTenets: [
      "The limitations of clean utilitarian models and algorithmic optimization",
      "The human demand for chaotic autonomy over sterile perfection",
      "The psychological labyrinth of ressentiment and self-contradiction",
      "Designing systems that respect the irreducible mystery of human will",
    ],
    coreTenets_hi: [
      "विशुद्ध उपयोगितावादी मॉडलों और एल्गोरिथमिक अनुकूलन की सीमाएं",
      "निर्जीव पूर्णता पर अराजक मानवीय स्वायत्तता की प्राथमिकता",
      "मनोवैज्ञानिक अंतर्द्वंद्व और आत्म-विरोधाभास की गहन भूलभुलैया",
      "मानवीय इच्छाशक्ति के अनसुलझे रहस्य का सम्मान करने वाली प्रणालियाँ",
    ],
    dateOrEra: "Russian Psychological Realism (1864)",
    tags: ["Dostoevsky", "Psychological Realism", "Free Will", "Human Nature"],
    readTime: "5 min read",
  },
  {
    id: "manto-toba-tek-singh",
    authorImage: "/authors/manto.jpg",
    title: "Toba Tek Singh — The No-Man's Land of Belonging",
    title_hi: "टोबा टेक सिंह — लावारिस ज़मीन का संप्रभु वजूद",
    category: "stories",
    subCategory: "modern",
    authorOrOrigin: "Saadat Hasan Manto",
    authorOrOrigin_hi: "सआदत हसन मंटो",
    archetype: "The Chronicler of Collective Lunacy",
    archetype_hi: "सामूहिक उन्माद का इतिहासकार",
    numeral: "IV",
    coreAxiom: "On a bit of earth that had no name, lay Toba Tek Singh.",
    coreAxiom_hi: "ज़मीन के उस बेनाम टुकड़े पर, जिसका कोई मुल्क न था, टोबा टेक सिंह पड़ा था।",
    englishExcerpt:
      "There, behind barbed wire, on one side lay India and behind more wire on the other side lay Pakistan. In between, on a bit of earth that had no name, lay Toba Tek Singh. For fifteen years he had not slept; in the freezing dawn between two newly minted nations, he chose the nameless earth rather than submit to arbitrary geopolitical insanity.",
    hindiExcerpt:
      "कांटेदार तारों के एक तरफ़ हिंदुस्तान था और दूसरी तरफ़ पाकिस्तान। बीच में, ज़मीन के उस टुकड़े पर जिसका कोई नाम न था, टोबा टेक सिंह औंधे मुंह पड़ा था। पंद्रह वर्षों से वह सोया नहीं था; दो नवजात देशों की सीमा पर, उसने किसी पागल सत्ता की अधीनता स्वीकार करने के बजाय उस लावारिस ज़मीन पर प्राण त्यागना चुना।",
    reflection:
      "Manto exposes how clinical bureaucratic decisions tear living human reality apart. The asylum inmates are the only sane observers of a society consumed by communal frenzy. It is the supreme subcontinental allegory of displacement, identity, and the sanctuary of borderless earth.",
    reflection_hi:
      "मंटो दिखाते हैं कि कैसे दफ्तरों में खींची गई लकीरें जीवंत मानवीय संवेदनाओं को चीर देती हैं। पागलखाने के कैदी उस समाज से कहीं अधिक समझदार साबित होते हैं जो मजहबी नफ़रत में अंधा हो चुका था।",
    coreTenets: [
      "The catastrophic absurdity of clinical bureaucratic cartography",
      "The clarity of the outcast set against societal mass hysteria",
      "Belonging as an existential condition rather than a passport stamp",
      "The quiet dignity of choosing the nameless borderland",
    ],
    coreTenets_hi: [
      "कागज़ी नक्शों और राजनीतिक सरहदों की विनाशकारी निरर्थकता",
      "सामूहिक उन्माद के बीच बहिष्कृत व्यक्ति की स्पष्ट और गहरी अंतर्दृष्टि",
      "पहचान किसी पासपोर्ट की मोहताज नहीं, बल्कि आत्मिक संप्रभुता है",
      "विभाजनकारी राजनीति के आगे झुकने के बजाय बेनाम ज़मीन को चुनना",
    ],
    dateOrEra: "Subcontinental Fiction (1955)",
    tags: ["Manto", "Partition Literature", "Absurdity", "Humanity", "Identity"],
    readTime: "5 min read",
  },
  {
    id: "premchand-kafan",
    authorImage: "/authors/premchand.jpg",
    title: "Kafan (The Shroud) — The Demystification of Poverty",
    title_hi: "कफ़न — दरिद्रता और सामाजिक ढोंग का अनावरण",
    category: "stories",
    subCategory: "classical",
    authorOrOrigin: "Munshi Premchand",
    authorOrOrigin_hi: "मुंशी प्रेमचंद",
    archetype: "The Unsparing Realist",
    archetype_hi: "निर्मम यथार्थवादी",
    numeral: "V",
    coreAxiom: "In life, not a stitch of cloth to cover her body; in death, a brand-new shroud that will burn to ash.",
    coreAxiom_hi: "जीते जी तन ढकने को चीथड़ा न मिला; मरने पर नया कफ़न चाहिए जो जलकर राख हो जाएगा।",
    englishExcerpt:
      "Madhav and Ghisu sat outside the hut while Budhiya died in agony inside. When she passed, they begged across the village to buy her funeral shroud. Having collected enough, they entered a tavern instead. Why buy a piece of cloth that will only be reduced to ashes, while the living starve?",
    hindiExcerpt:
      "माधव और घीसू झोपड़े के बाहर बैठे थे और बुधिया भीतर प्रसव पीड़ा से दम तोड़ रही थी। जब वह मर गई, तो उन्होंने कफ़न के लिए गाँव भर से चंदा माँगा। पैसे इकट्ठे होते ही वे सीधे मधुशाला जा पहुँचे। जीते जी जिसे तन ढकने को कपड़ा न मिला, मरने पर उसके कफ़न पर पैसे क्यों फूँके जाएं जो सिर्फ़ राख होना है?",
    reflection:
      "Premchand refuses to romanticize poverty. He demonstrates how systemic, generational deprivation strips away human sentimentality and exposes social hypocrisy. It is a merciless critique of feudal sanctimony and religious guilt.",
    reflection_hi:
      "प्रेमचंद दरिद्रता का रूमानीकरण करने से साफ इनकार करते हैं। वे दिखाते हैं कि कैसे पीढ़ियों के शोषण ने मनुष्य से संवेदना तक छीन ली है। यह सामंती ढोंग और धार्मिक पाखंड पर एक निर्मम प्रहार है।",
    coreTenets: [
      "The brutal demystification of romanticized suffering and poverty",
      "Exposure of societal hypocrisy and empty moral posturing",
      "Survival psychology under chronic, multi-generational abandonment",
      "Uncompromising realism that demands structural change",
    ],
    coreTenets_hi: [
      "कष्ट और दरिद्रता के झूठे रूमानीकरण का निर्मम खंडन",
      "समाज के खोखले पाखंड और नैतिक दिखावे का बेबाक अनावरण",
      "पीढ़ियों के अभाव और उपेक्षा में जीवित रहने का मनोवैज्ञानिक यथार्थ",
      "खोखली संवेदनाओं के बजाय बुनियादी व्यवस्थागत परिवर्तन की मांग",
    ],
    dateOrEra: "Hindi/Urdu Realist Literature (1936)",
    tags: ["Premchand", "Realism", "Social Critique", "Subcontinental Literature"],
    readTime: "4 min read",
  },
];
