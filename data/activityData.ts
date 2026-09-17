export interface ActivityItem {
  id: string;
  title: string;
  category: "philosophy" | "poetry" | "stories" | "reading-shelf";
  subCategory?: "indian" | "western" | "classical" | "modern";
  authorOrOrigin?: string;
  originalText?: string;
  transliteration?: string;
  englishExcerpt: string;
  reflection: string;
  dateOrEra: string;
  tags: string[];
  readTime: string;
}

export const ACTIVITY_NAV_LINKS = [
  { href: "/activity", label: "Overview", id: "all" },
  { href: "/activity/philosophy", label: "Philosophy", id: "philosophy" },
  { href: "/activity/poetry", label: "Poetry & Verse", id: "poetry" },
  { href: "/activity/stories", label: "Stories & Fables", id: "stories" },
  { href: "/activity/other", label: "Other & Shelf", id: "reading-shelf" },
] as const;

export const ACTIVITY_DATA: ActivityItem[] = [
  // ==========================================
  // --- PHILOSOPHY: INDIAN TRADITION (DARSHANA) ---
  // ==========================================
  {
    id: "nishkama-karma-gita",
    title: "Nishkama Karma: Action Free from the Burden of Fruit",
    category: "philosophy",
    subCategory: "indian",
    authorOrOrigin: "Bhagavad Gita (Chapter 2, Verse 47)",
    originalText: `कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।
मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥`,
    transliteration: "Karmany-evādhikāras te mā phaleṣu kadāchana...",
    englishExcerpt:
      "You have a right only to work, never to its fruits. Let not the fruit of action be your motive, nor let your attachment be to inaction.",
    reflection:
      "In software and AI engineering, attachment to immediate validation, hype cycles, or market reaction poisons genuine craftsmanship. Nishkama Karma is the purest discipline: committing absolute focus to the algorithmic architecture and the act of coding itself, while remaining radically detached from vanity or outcome.",
    dateOrEra: "Ancient Indian Classical Darshana",
    tags: ["Indian Philosophy", "Bhagavad Gita", "Nishkama Karma", "Discipline", "Agency"],
    readTime: "3 min read",
  },
  {
    id: "nagarjuna-shunyata",
    title: "Shunyata & Pratityasamutpada: The Web of Emptiness",
    category: "philosophy",
    subCategory: "indian",
    authorOrOrigin: "Nagarjuna — Mulamadhyamakakarika",
    originalText: `यः प्रतीत्यसमुत्पादः शून्यतां तां प्रचक्ष्महे।
सा प्रज्ञप्तिरुपादाय प्रतिपत्सैव मध्यमा॥`,
    transliteration: "Yah pratityasamutpadah shunyataam tam prachakshmahe...",
    englishExcerpt:
      "Whatever is dependently co-arisen, that is explained to be emptiness. That, being a dependent designation, is itself the Middle Way.",
    reflection:
      "Nagarjuna's insight that nothing has independent, isolated self-nature (svabhava) is the exact ontological blueprint of distributed systems and modern graph neural networks. Every component gains identity only through relation to the whole. To understand 'the void' (Shunyata) is not despair, but freedom from dogmatic fixity.",
    dateOrEra: "Buddhist Madhyamaka Philosophy (2nd Century CE)",
    tags: ["Indian Philosophy", "Buddhism", "Nagarjuna", "Shunyata", "Relationality"],
    readTime: "4 min read",
  },
  {
    id: "advaita-shankara",
    title: "Aham Brahmasmi: The Dissolution of Observer & System",
    category: "philosophy",
    subCategory: "indian",
    authorOrOrigin: "Adi Shankara — Advaita Vedanta & Brihadaranyaka Upanishad",
    originalText: `अहं ब्रह्मास्मि — अयमात्मा ब्रह्म`,
    transliteration: "Aham Brahmasmi — Ayam Atma Brahma",
    englishExcerpt:
      "I am the Absolute Totality. The underlying consciousness that witnesses the world is non-different from the ground of reality itself.",
    reflection:
      "Advaita eliminates dualistic friction between the creator and the artifact. When designing computational architectures or training neural models, the programmer is not merely an external observer manipulating an alien machine, but an expressive extension of nature modeling itself.",
    dateOrEra: "Advaita Vedanta (8th Century CE)",
    tags: ["Indian Philosophy", "Advaita", "Adi Shankara", "Upanishads", "Non-duality"],
    readTime: "3 min read",
  },
  {
    id: "charvaka-lokayata-empiricism",
    title: "Charvaka Lokayata: Radical Empiricism & Present Reality",
    category: "philosophy",
    subCategory: "indian",
    authorOrOrigin: "Brihaspati Tradition — Lokayata Philosophy",
    englishExcerpt:
      "Only perception is the valid means of knowledge. What cannot be sensed or directly observed cannot be dogmatically asserted as truth. Live with clear lucidity in this empirical world.",
    reflection:
      "Ancient India was not merely metaphysical; the Charvakas were fierce rationalists who discarded dogmatic dogma in favor of empirical verification. In modern data science, this translates to rigorous empirical testing: never accept assumptions without verifiable telemetry and observable ground truth.",
    dateOrEra: "Ancient Indian Materialism (c. 600 BCE)",
    tags: ["Indian Philosophy", "Charvaka", "Lokayata", "Empiricism", "Rationalism"],
    readTime: "3 min read",
  },

  // ==========================================
  // --- PHILOSOPHY: WESTERN TRADITION ---
  // ==========================================
  {
    id: "active-nihilism-creation",
    title: "On Active Nihilism: The Void as Pure Canvas",
    category: "philosophy",
    subCategory: "western",
    authorOrOrigin: "Friedrich Nietzsche — Will to Power & Zarathustra",
    englishExcerpt:
      "Nihilism is not the end of meaning; it is the liberation from dogmatic constraints. If the universe possesses no inherent script, every line of code, every architectural choice, and every act of creation becomes an unmediated declaration of will.",
    reflection:
      "When building complex systems and artificial intelligence, one realizes that logic is neutral. The philosophy of 'Nahilist' stems not from despondency, but from radical creative agency: recognizing that absence of cosmic order invites us to engineer our own sublime structures.",
    dateOrEra: "19th Century Continental Philosophy",
    tags: ["Western Philosophy", "Nihilism", "Nietzsche", "Existential Agency", "Ontology"],
    readTime: "3 min read",
  },
  {
    id: "absurdist-hero-camus",
    title: "The Absurd Architect: Sisyphus and the Machine",
    category: "philosophy",
    subCategory: "western",
    authorOrOrigin: "Albert Camus — The Myth of Sisyphus",
    englishExcerpt:
      "The struggle itself toward the heights is enough to fill a man's heart. One must imagine Sisyphus happy.",
    reflection:
      "In software engineering and AI research, we repeatedly push boulders up steep hills: models fail to converge, dependencies fracture, edge cases surface. Camus reminds us that true dignity lies in loving the friction of the climb itself, turning repetitive iteration into an art form.",
    dateOrEra: "20th Century Absurdism",
    tags: ["Western Philosophy", "Camus", "Absurdism", "Perseverance", "Mindset"],
    readTime: "4 min read",
  },
  {
    id: "marcus-aurelius-stillness",
    title: "The Citadel Within: Finding Quiet in Distributed Chaos",
    category: "philosophy",
    subCategory: "western",
    authorOrOrigin: "Marcus Aurelius — Meditations",
    englishExcerpt:
      "Nowhere can man find a quieter or more untroubled retreat than in his own soul. Constantly then give yourself this retreat, and renew yourself.",
    reflection:
      "In an era dominated by hyper-connected telemetry, notifications, and instant synthetic outputs, the ancient Stoic discipline of inner detachment preserves cognitive depth. Before writing a single line of architecture, cultivate unshakeable stillness.",
    dateOrEra: "Stoic Philosophy (2nd Century CE)",
    tags: ["Western Philosophy", "Stoicism", "Meditations", "Clarity", "Mindfulness"],
    readTime: "2 min read",
  },
  {
    id: "spinoza-deus-sive-natura",
    title: "Substance & System: God as the Unified Algorithm",
    category: "philosophy",
    subCategory: "western",
    authorOrOrigin: "Baruch Spinoza — Ethics",
    englishExcerpt:
      "Whatever is, is in God, and nothing can be or be conceived without God (Deus sive Natura — God or Nature).",
    reflection:
      "Spinoza’s geometric deduction of nature as a single, coherent mathematical substance mirrors the modern view of physical and computational universes governed by invariant conservation laws and deterministic state transitions.",
    dateOrEra: "17th Century Rationalism",
    tags: ["Western Philosophy", "Spinoza", "Rationalism", "Pantheism", "Mathematics"],
    readTime: "3 min read",
  },

  // ==========================================
  // --- POETRY & VERSE ---
  // ==========================================
  {
    id: "ghalib-na-tha-kuch-to",
    title: "Na Tha Kuch To Khuda Tha — The Paradox of Existence",
    category: "poetry",
    authorOrOrigin: "Mirza Asadullah Khan Ghalib",
    originalText: `نہ تھا کچھ تو خدا تھا، کچھ نہ ہوتا تو خدا ہوتا
ڈبویا مجھ کو ہونے نے، نہ ہوتا میں تو کیا ہوتا`,
    englishExcerpt:
      "When there was nothing, there was God; had nothing been, God would have been.\nMy very being was my drowning; had I not existed, what would I have been?",
    reflection:
      "Ghalib’s verse encapsulates the ultimate existential irony: the sheer weight and consciousness of 'being'. It is a timeless meditation on ontology that resonates deeply with anyone contemplating the birth of intelligence from mathematical silence.",
    dateOrEra: "19th Century Urdu Ghazal",
    tags: ["Ghalib", "Urdu Poetry", "Existential Verse", "Ghazal"],
    readTime: "2 min read",
  },
  {
    id: "faiz-hum-dekhenge",
    title: "Hum Dekhenge — The Inevitability of Truth",
    category: "poetry",
    authorOrOrigin: "Faiz Ahmad Faiz",
    originalText: `ہم دیکھیں گے، لازم ہے کہ ہم بھی دیکھیں گے
وہ دن کہ جس کا وعدہ ہے، جو لوحِ ازل پہ لکھا ہے`,
    englishExcerpt:
      "We shall bear witness, it is inevitable that we too shall see;\nThe day that was promised, inscribed upon eternity's slate.",
    reflection:
      "Faiz's lyricism transforms political hope into transcendent prophecy. Beyond politics, it speaks to an unwavering faith in human resilience and the inevitable surfacing of clarity over obscurity.",
    dateOrEra: "Modernist Urdu Poetry",
    tags: ["Faiz Ahmad Faiz", "Resistance", "Lyrical Verse", "Hope"],
    readTime: "3 min read",
  },
  {
    id: "jaun-elia-nihilism",
    title: "Shayad — The Melancholy of Self-Awareness",
    category: "poetry",
    authorOrOrigin: "Jaun Elia",
    originalText: `کیا ستم ہے کہ اب تری صورت
غور کرنے پہ یاد آتی ہے`,
    englishExcerpt:
      "What a cruelty it is that your countenance,\nOnly returns to my memory when I consciously strain to recall.",
    reflection:
      "Jaun Elia brought raw, unflinching existential philosophy into Urdu poetry. He does not sugarcoat loss, absurdity, or the erosion of identity across time. His lines cut through comfortable illusions like a razor.",
    dateOrEra: "Contemporary Urdu Poetry",
    tags: ["Jaun Elia", "Urdu Poetry", "Existential Melancholy", "Verse"],
    readTime: "2 min read",
  },
  {
    id: "iqbal-khudi",
    title: "Khudi: The Architecture of the Sovereign Self",
    category: "poetry",
    authorOrOrigin: "Allama Muhammad Iqbal — Asrar-e-Khudi",
    originalText: `خودی کو کر بلند اتنا کہ ہر تقدیر سے پہلے
خدا بندے سے خود پوچھے بتا تیری رضا کیا ہے`,
    englishExcerpt:
      "Elevate your selfhood (Khudi) to such sublime heights that before decreeing your destiny,\nGod Himself shall ask you: Speak, what is your supreme desire?",
    reflection:
      "Iqbal's concept of Khudi is the antithesis of fatalism. It is an affirmative demand for self-cultivation, sovereign agency, and mastery over one's craft and circumstance.",
    dateOrEra: "Early 20th Century Philosophical Poetry",
    tags: ["Allama Iqbal", "Khudi", "Agency", "Sovereign Mind"],
    readTime: "2 min read",
  },
  {
    id: "frost-two-roads",
    title: "The Road Not Taken: Divergence as Calling",
    category: "poetry",
    authorOrOrigin: "Robert Frost",
    englishExcerpt:
      "Two roads diverged in a wood, and I—\nI took the one less traveled by,\nAnd that has made all the difference.",
    reflection:
      "Choosing independent craftsmanship, deep machine learning research, and an unconventional multidisciplinary path is inherently lonely yet immensely rewarding. Frost’s imagery celebrates the quiet courage of embracing uncharted trajectories.",
    dateOrEra: "20th Century American Verse",
    tags: ["Robert Frost", "Choice", "Independence", "Verse"],
    readTime: "2 min read",
  },

  // ==========================================
  // --- STORIES & FABLES ---
  // ==========================================
  {
    id: "borges-library-babel",
    title: "The Endless Hexagons of Babel",
    category: "stories",
    authorOrOrigin: "Jorge Luis Borges — The Library of Babel",
    englishExcerpt:
      "The universe (which others call the Library) is composed of an indefinite and perhaps infinite number of hexagonal galleries... In each hexagon there are twenty shelves, and on each shelf thirty-five books of uniform size.",
    reflection:
      "Borges anticipated modern vector embedding spaces and generative token distributions decades before transformers existed. The story is a chilling, poetic allegory of navigating infinite permutations of information in search of genuine truth.",
    dateOrEra: "Philosophical Fiction (1941)",
    tags: ["Borges", "Infinite Libraries", "Generative Tokens", "Allegory"],
    readTime: "5 min read",
  },
  {
    id: "kafka-before-the-law",
    title: "Before the Law: The Waiting Seeker",
    category: "stories",
    authorOrOrigin: "Franz Kafka — The Trial",
    englishExcerpt:
      "Before the law stands a doorkeeper. To this doorkeeper there comes a man from the country and prays for admittance... 'No one else could ever be admitted here, for this entrance was meant solely for you. I am now going to shut it.'",
    reflection:
      "Kafka exposes the tragic folly of waiting for external permission. Whether in creative engineering or life, the threshold is uniquely ours—waiting for a green light from gatekeepers is the surest guarantee of never entering.",
    dateOrEra: "Modernist Parable (1915)",
    tags: ["Kafka", "Parable", "Agency", "Existential Dread"],
    readTime: "4 min read",
  },
  {
    id: "dostoevsky-underground-man",
    title: "Notes from the Labyrinth of Human Contradiction",
    category: "stories",
    authorOrOrigin: "Fyodor Dostoevsky — Notes from Underground",
    englishExcerpt:
      "I am a sick man... I am a spiteful man. I am an unattractive man. I believe my liver is diseased... But what can a decent man speak of with the greatest pleasure? Answer: Of himself.",
    reflection:
      "Dostoevsky dismantles the illusion of pure rationalism. Humans cannot be modeled as simple utility-maximizing algorithms; we possess irrational desires, longing for freedom even at the cost of our own comfort. A vital text for anyone designing systems for human hearts.",
    dateOrEra: "Russian Classic Fiction (1864)",
    tags: ["Dostoevsky", "Psychological Realism", "Rationalism", "Human Nature"],
    readTime: "5 min read",
  },
  {
    id: "premchand-kafan",
    title: "Kafan (The Shroud): The Tragedy of Extreme Deprivation",
    category: "stories",
    authorOrOrigin: "Munshi Premchand — Kafan",
    englishExcerpt:
      "What a strange society this is! Those who toil day and night have nothing, while those who exploit their sweat live in luxury. And in death, a piece of cloth is demanded that will simply burn to ashes.",
    reflection:
      "Premchand’s unvarnished realism pierces through bourgeois sentimentality. It portrays human nature stripped of social pretenses when crushed by socio-economic despair, serving as a reminder of the real human realities beneath abstract technological progress.",
    dateOrEra: "Hindi/Urdu Realist Fiction (1936)",
    tags: ["Premchand", "Indian Literature", "Realism", "Social Critique"],
    readTime: "4 min read",
  },
  {
    id: "manto-toba-tek-singh",
    title: "Toba Tek Singh: The Lunacy of Arbitrary Borders",
    category: "stories",
    authorOrOrigin: "Saadat Hasan Manto",
    englishExcerpt:
      "There, behind barbed wire, on one side lay India and on behind more wire on the other side lay Pakistan. In between, on a bit of earth that had no name, lay Toba Tek Singh.",
    reflection:
      "Manto's masterpiece reveals how clinical bureaucratic decisions tear human psyches apart. The insane asylum inmates are wiser than the politicians drawing lines on maps. A profound study of belonging, exile, and the no-man's-land between ideologies.",
    dateOrEra: "Subcontinental Fiction (1955)",
    tags: ["Manto", "Partition Literature", "Absurdity", "Humanity"],
    readTime: "5 min read",
  },

  // ==========================================
  // --- READING SHELF & OTHER ---
  // ==========================================
  {
    id: "reading-sisyphus",
    title: "The Myth of Sisyphus",
    category: "reading-shelf",
    authorOrOrigin: "Albert Camus",
    englishExcerpt:
      "A profound examination of suicide, the absurd, and how to live with relentless lucidity without divine reassurance.",
    reflection:
      "Currently revisiting the chapter on 'Absurd Creation'. The artist is the supreme absurdist hero because creation requires immense effort with no promise of cosmic permanence.",
    dateOrEra: "Book Annotation • Completed",
    tags: ["Philosophy", "Absurdism", "Reading Shelf"],
    readTime: "Reading Notes",
  },
  {
    id: "reading-beyond-good-evil",
    title: "Beyond Good and Evil",
    category: "reading-shelf",
    authorOrOrigin: "Friedrich Nietzsche",
    englishExcerpt:
      "Prelude to a Philosophy of the Future. An unsparing deconstruction of conventional morality, truth, and philosophical dogmatism.",
    reflection:
      "Essential study on the 'Will to Power' and perspectivism. Teaches one to interrogate the hidden assumptions behind every established paradigm, including technology.",
    dateOrEra: "Book Annotation • Active Reading",
    tags: ["Philosophy", "Nietzsche", "Reading Shelf"],
    readTime: "Reading Notes",
  },
  {
    id: "reading-kafka-on-the-shore",
    title: "Kafka on the Shore",
    category: "reading-shelf",
    authorOrOrigin: "Haruki Murakami",
    englishExcerpt:
      "Magical realism woven with classical tragedy, wandering cats, fish raining from the sky, and journeys into personal subconscious labyrinths.",
    reflection:
      "Murakami’s atmospheric silence and surreal liminal spaces inspire the calm, meditative micro-interactions I build into frontend interfaces.",
    dateOrEra: "Book Annotation • Completed",
    tags: ["Fiction", "Magical Realism", "Reading Shelf"],
    readTime: "Reading Notes",
  },
  {
    id: "reading-godel-escher-bach",
    title: "Gödel, Escher, Bach: An Eternal Golden Braid",
    category: "reading-shelf",
    authorOrOrigin: "Douglas Hofstadter",
    englishExcerpt:
      "A metaphorical exploration of how cognition, recursive strange loops, and meaning emerge from formal meaningless rules.",
    reflection:
      "The foundational bridge between formal mathematical logic, cognitive science, and computational self-reference. Shows how an 'I' can arise from a substrate that contains no 'I'.",
    dateOrEra: "Cognitive Science & Logic • Core Canon",
    tags: ["Computation", "Strange Loops", "Cognition", "Reading Shelf"],
    readTime: "Reading Notes",
  },
];
