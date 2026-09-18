export interface ActivityItem {
  id: string;
  title: string;
  category: "philosophy" | "poetry" | "stories" | "reading-shelf";
  subCategory?: "indian" | "western" | "classical" | "modern";
  authorOrOrigin: string;
  archetype: string;
  numeral: string;
  coreAxiom: string;
  originalText?: string;
  transliteration?: string;
  englishExcerpt: string;
  reflection: string;
  coreTenets: string[];
  dateOrEra: string;
  tags: string[];
  readTime: string;
}

export const ACTIVITY_NAV_LINKS = [
  { href: "/activity", label: "Philosophy & Darshana", id: "philosophy" },
] as const;

export const ACTIVITY_DATA: ActivityItem[] = [
  // =========================================================================
  // --- 1. J. KRISHNAMURTI: THE OBSERVER IS THE OBSERVED & PATHLESS LAND ---
  // =========================================================================
  {
    id: "jk-krishnamurti-pathless-land",
    title: "Truth is a Pathless Land: The Observer is the Observed",
    category: "philosophy",
    subCategory: "indian",
    authorOrOrigin: "J. Krishnamurti",
    archetype: "The Radical Inquirer",
    numeral: "I",
    coreAxiom: "Truth is a pathless land; the observer is the observed.",
    originalText: `Truth is a pathless land, and you cannot approach it by any path whatsoever, by any religion, by any sect. Truth, being limitless, unconditioned, unapproachable by any path whatsoever, cannot be organized; nor should any organization be formed to lead or to coerce people along any particular path.`,
    englishExcerpt:
      "The moment you have a belief, a dogma, or a fixed conclusion, you have ceased to observe. Observation without the observer—without the past, without the continuous accumulation of psychological residue—is the only state where radical transformation occurs.",
    reflection:
      "In computational thinking and system design, our legacy assumptions and rigid mental models blind us to emergent realities. Krishnamurti’s core insight—that the observer is the observed—demands unconditioned awareness: approaching every problem, distributed architecture, and neural model without the distorting baggage of prior dogma.",
    coreTenets: [
      "Observation without the distorting lens of the accumulated observer",
      "Rejection of spiritual authority, organized cults, and dogma",
      "Direct perception of reality unmediated by psychological time",
      "Transformation occurs only in the silent lucidity of the present",
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
    title: "The Natural State: Total Deconstruction of the Spiritual Search",
    category: "philosophy",
    subCategory: "indian",
    authorOrOrigin: "U.G. Krishnamurti",
    archetype: "The Biological Realist",
    numeral: "II",
    coreAxiom: "The search for permanence and enlightenment is itself the disease.",
    originalText: `There is no 'beyond'. There is no soul, no mind, no enlightenment. What is left when you drop all your questions and the search for answers is the natural functioning of this biological organism. The search for permanence and security is itself the disease.`,
    englishExcerpt:
      "You are trying to be something other than what you are. That is the whole misery of man. The demand to understand, to be enlightened, to be free, is the very momentum that keeps you trapped in the illusion of psychological continuity.",
    reflection:
      "U.G. was the ultimate iconoclast who dismantled every romanticized spiritual delusion with surgical biological realism. In engineering terms: there is no ghost in the machine. Cognition is an organic substrate processing inputs. Shedding the pretentious vanity of self-importance liberates the builder to focus purely on functional, empirical truth.",
    coreTenets: [
      "The physical organism functions perfectly in its natural, unconditioned state",
      "Total deconstruction of all gurus, spiritual goals, and psychological crutches",
      "Thought is memory looping continuously on physical hardware",
      "No cosmic beyond exists; drop the questions and artificial friction ceases",
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
    title: "Zorba the Buddha: The Synthesis of Earthly Vitality & Silent Awareness",
    category: "philosophy",
    subCategory: "indian",
    authorOrOrigin: "Osho (Bhagwan Shree Rajneesh)",
    archetype: "The Rebel Mystic",
    numeral: "III",
    coreAxiom: "Zorba the Buddha: Celebrate the material earth with silent, meditative awareness.",
    originalText: `Never belong to any crowd, never belong to any nation, never belong to any religion. Belong to the whole existence. Why limit yourself to small things when the whole is available?`,
    englishExcerpt:
      "I celebrate the whole human being: Zorba who loves the earth, the dance, the material reality; and Buddha who embodies meditative silence, stillness, and luminous consciousness. When science and silence embrace, when material craft meets meditative awareness, the true rebel is born.",
    reflection:
      "Osho’s 'Zorba the Buddha' resolves the artificial division between material mastery and inner stillness. Building world-class software and intelligent systems demands the intense, hungry craftsmanship of Zorba, while architectural clarity and calm resilience demand the unperturbed silence of the Buddha.",
    coreTenets: [
      "Reconciliation of material creative passion (Zorba) with inner stillness (Buddha)",
      "Unconditioned rebellion against ideological conformity and inherited guilt",
      "Witnessing consciousness (Sakshi) active amidst intense engineering engagement",
      "Freedom from societal dogmas; total presence and celebratory agency",
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
    title: "Why I Am an Atheist: Independent Thinking & Ruthless Rationalism",
    category: "philosophy",
    subCategory: "indian",
    authorOrOrigin: "Bhagat Singh (Lahore Central Jail, 1930)",
    archetype: "The Revolutionary Rationalist",
    numeral: "IV",
    coreAxiom: "Merciless criticism and independent thinking are the two pillars of progress.",
    originalText: `Any man who stands for progress has to criticize, disbelieve and challenge every item of the old faith. Item by item he has to analyze every nook and corner of prevailing faith. If after considerable reasoning, he is led to believe in any theory, his faith is welcomed. His reasoning can be mistaken, but it is open to correction, because reason is the guiding star of his life.`,
    englishExcerpt:
      "Merciless criticism and independent thinking are the two indispensable qualities of revolutionary thinking. Because I have discarded blind faith and divine crutches, I stand on my own feet. It is not vanity; it is reason and courage.",
    reflection:
      "Beyond his revolutionary martyrdom, Bhagat Singh was a towering rationalist philosopher. His jail treatise 'Why I Am an Atheist' is an uncompromising defense of empirical reason over comfortable superstitions. For an engineer and builder, progress demands the intellectual courage to interrogate established consensus and take sovereign responsibility for one’s creations.",
    coreTenets: [
      "Ruthless interrogation of traditional dogmas, rituals, and blind beliefs",
      "Sovereign reliance on empirical reason and intellectual integrity",
      "Atheism understood not as vanity, but as scientific clarity and moral courage",
      "Uncompromising dedication to systemic progress and human dignity",
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
    title: "Kalama Sutta & Anatta: Radical Empiricism & The Non-Static Self",
    category: "philosophy",
    subCategory: "indian",
    authorOrOrigin: "Gautama Buddha — Shramana Tradition",
    archetype: "The Empirical Sage",
    numeral: "V",
    coreAxiom: "Believe nothing without personal verification; identity is a dynamic process (Anatta).",
    originalText: `मा अनुस्सवेन, मा परम्पराय, मा इतिकिराय, मा पिटकसम्पदानेन... अत्तना व जानेय्याथ।`,
    transliteration: "Mā anussavena, mā paramparāya, mā itikirāya, mā piṭakasampadānena... attanā va jāneyyātha.",
    englishExcerpt:
      "Do not go by oral tradition, by lineage of teaching, by hearsay, by a collection of scriptures, or by the authority of an elder. When you know for yourselves that certain things are wholesome and conducive to benefit and happiness, only then accept and abide by them.",
    reflection:
      "The Buddha was humanity’s first great empirical investigator of mind and reality. His doctrine of Anatta (non-self) reveals that identity is not a fixed, immutable kernel, but a dynamic, relational network of dependent co-arising processes (Pratityasamutpada). This mirrors modern distributed computing: states emerge from interaction, not permanent essence.",
    coreTenets: [
      "Kalama Sutta principle: verify through personal observation and empirical reason",
      "Anatta (Non-Self): consciousness is a relational network of events, not a static core",
      "Pratityasamutpada: dependent origination governs computational and physical systems",
      "The Middle Way: navigating beyond dogma with relentless present awareness",
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
    title: "Charvaka Lokayata: Radical Empiricism & Direct Perception (Pratyaksha)",
    category: "philosophy",
    subCategory: "indian",
    authorOrOrigin: "Brihaspati Tradition — Charvaka / Lokayata",
    archetype: "The Materialist Radical",
    numeral: "VI",
    coreAxiom: "Direct perception (Pratyaksha) is the sole truth; reject metaphysical speculation.",
    originalText: `यावज्जीवेत्सुखं जीवेद् ऋणं कृत्वा घृतं पिबेत्।
भस्मीभूतस्य देहस्य पुनरागमनं कुतः॥`,
    transliteration: "Yāvaj-jīvet sukhaṁ jīved ṛṇaṁ kṛtvā ghṛtaṁ pibet | Bhasmībhūtasya dehasya punarāgamanaṁ kutaḥ ||",
    englishExcerpt:
      "Direct sensory perception (Pratyaksha) is the sole valid means of authentic knowledge. What cannot be observed or empirically verified cannot be dogmatically asserted. Live lucidly in this tangible, material world, free from the manipulation of priests and speculative heavens.",
    reflection:
      "Centuries before modern Western scientific materialism, the ancient Indian Charvakas championed ruthless empirical skepticism. In artificial intelligence and software engineering, this is the golden rule of telemetry: never trust untested assertions or marketing mysticism; ground all truth in observable data, verifiable benchmarks, and real-world performance.",
    coreTenets: [
      "Pratyaksha Pramana: direct sensory verification is the sole epistemological basis",
      "Rejection of metaphysical speculation, unseen realms, and ritual exploitation",
      "Naturalism and material physical reality as the ground of all existence",
      "Grounded rationalism: anchor every hypothesis in observable, repeatable evidence",
    ],
    dateOrEra: "Ancient Indian Materialist Darshana (c. 600 BCE)",
    tags: ["Charvaka", "Lokayata", "Materialism", "Pratyaksha", "Rationalism", "Atheism"],
    readTime: "3 min read",
  },
];
