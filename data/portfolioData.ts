export interface ProjectItem {
  id: string;
  title: string;
  category: "AI/ML" | "AI/ML & GenAI" | "Frontend" | "Full Stack";
  problemStatement: string;
  whatIBuilt: string;
  technologies: string[];
  keyFeatures: string[];
  githubUrl: string;
  liveUrl: string;
  badge: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: string[];
  description: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  deliverables: string[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Himanshu Kumar",
    role: "AI/ML & Frontend Developer",
    shortIntro:
      "",
    status: "Available for Select Projects & Roles",
    location: "India",
    email: "himanshukx64@gmail.com",
    github: "https://github.com/nahilist",
    linkedin: "https://linkedin.com/in/himanshux64",
    medium: "https://medium.com/@himanshux64",
    calendly: "https://calendly.com/himanshukumar-dev/30min",
  },

  about: {
    degree: "B.Tech in Artificial Intelligence & Machine Learning (AI & ML)",
    college: "Sanskriti University, Mathura, India",
    currentYear: "4th Year",
    bio: [
      "I'm an AI & ML student and Frontend Developer focused on building intelligent solutions and clean, modern web experiences.",
      "I enjoy turning ideas into real-world products through AI, engineering, and frontend development.",
    ],
    careerObjective:
      "I'm an AI & ML student and Frontend Developer focused on building intelligent solutions and clean, modern web experiences. I enjoy turning ideas into real-world products through AI, engineering, and frontend development.",
    availability: "Actively seeking Summer/Winter 2025-2026 Internships and high-impact collaborative projects.",
    highlights: [
      { label: "Degree", value: "B.Tech AI & ML" },
      { label: "Academic Standing", value: "4th Year (2022-2026)" },
      { label: "Focus", value: "GenAI, RAG & Next.js" },
      { label: "Status", value: "Open for Internships" },
    ],
  },

  skills: [
    {
      title: "AI / Machine Learning",
      iconName: "brain",
      skills: ["Python", "TensorFlow", "PyTorch", "Scikit-learn"],
      description:
        "Developing predictive algorithms, computer vision pipelines, statistical modeling, and deep neural networks.",
    },
    {
      title: "Generative AI",
      iconName: "sparkles",
      skills: ["LLM", "RAG", "AI Agents", "LangChain"],
      description:
        "Building context-aware retrieval engines, vector search pipelines, autonomous agentic workflows, and prompt engineering.",
    },
    {
      title: "Frontend Engineering",
      iconName: "layout",
      skills: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "Tailwind CSS"],
      description:
        "Crafting pixel-perfect, accessible, and responsive user interfaces with server-side rendering and smooth physics animations.",
    },
    {
      title: "Backend Development",
      iconName: "server",
      skills: ["Django", "FastAPI"],
      description:
        "Designing high-throughput asynchronous REST APIs, microservices, authentication systems, and model-serving backends.",
    },
    {
      title: "Developer Tools",
      iconName: "terminal",
      skills: ["Git", "GitHub", "Docker", "Jupyter", "Google Colab"],
      description:
        "Version control workflows, reproducible containerized environments, and interactive exploratory data analysis.",
    },
    {
      title: "Databases & Storage",
      iconName: "database",
      skills: ["MongoDB", "SQLite", "Supabase"],
      description:
        "Designing relational schemas, document-based stores, vector embeddings databases, and real-time backend synchronization.",
    },
  ] as SkillCategory[],

  projects: [
    {
      id: "elementum-3d",
      title: "Elementum 3D",
      category: "Frontend",
      badge: "118 Chemical Elements",
      problemStatement:
        "Traditional 2D periodic tables make it difficult to visualize complex 3D atomic structures, electron orbital clouds, and chemical properties of the 118 elements.",
      whatIBuilt:
        "An immersive WebGL 3D interactive periodic table exploring all 118 chemical elements, featuring real-time quantum orbital visualization, atomic lattices, and physical shaders.",
      technologies: ["Next.js", "Three.js", "Tailwind CSS", "Framer Motion"],
      keyFeatures: [
        "Interactive 3D atomic models & electron orbital clouds for 118 elements",
        "Custom GLSL shader materials with physical light refraction and glow",
        "Responsive canvas optimization maintaining 60 FPS across devices",
        "Comprehensive elemental data explorer with elemental group filtering",
      ],
      githubUrl: "https://github.com/nahilist/elementum-3d",
      liveUrl: "https://elementum-3d.vercel.app",
    },
    {
      id: "atlas-invisible-systems",
      title: "ATLAS — The Invisible Systems",
      category: "Full Stack",
      badge: "Distributed Architecture",
      problemStatement:
        "Monitoring complex multi-tier asynchronous automated systems in enterprise environments is often fragmented across disjointed logging consoles.",
      whatIBuilt:
        "A centralized systems visualization and telemetry platform simulating and monitoring distributed microservices, message queues, and health statuses.",
      technologies: ["Next.js", "FastAPI", "Python", "Supabase", "Tailwind CSS"],
      keyFeatures: [
        "Real-time pipeline health telemetry with live status streaming",
        "Interactive node-graph topology visualization",
        "Automated anomaly detection triggering diagnostic alerts",
        "Role-based access control with secure Supabase authentication",
      ],
      githubUrl: "https://github.com/nahilist/atlas-systems",
      liveUrl: "https://atlas-invisible-systems.vercel.app/?system=INTERNET&view=OVERVIEW&camera=OVERVIEW",
    },
    {
      id: "digit-classifier",
      title: "Handwritten Digit Classifier",
      category: "AI/ML & GenAI",
      badge: "SVHN Computer Vision",
      problemStatement:
        "Deploying deep convolutional neural networks into low-latency, interactive web browsers requires model quantization and responsive inference pipelines.",
      whatIBuilt:
        "An interactive end-to-end computer vision application that classifies drawn and SVHN digits in real-time, displaying live class confidence probabilities and feature maps.",
      technologies: ["PyTorch", "Python", "TensorFlow", "OpenCV", "Streamlit"],
      keyFeatures: [
        "Deep CNN trained on SVHN/MNIST with high validation accuracy",
        "Smooth drawing canvas with automatic centering and bounding-box normalization",
        "Real-time probability distribution chart for all 10 digits",
        "Layer activation visualization showing model focus areas",
      ],
      githubUrl: "https://github.com/nahilist/digit-classifier",
      liveUrl: "https://handwritten-digit-svhn-32x32.streamlit.app/",
    },
    {
      id: "ai-notes-summarizer",
      title: "AI Notes Summarizer",
      category: "AI/ML & GenAI",
      badge: "Generative AI & RAG",
      problemStatement:
        "Students and researchers struggle to rapidly distill hours of lecture transcripts, long-form PDF papers, and unstructured study notes into actionable summaries.",
      whatIBuilt:
        "An intelligent Generative AI summarization assistant leveraging RAG and LangChain to parse dense notes, generate executive summaries, and generate quiz flashcards.",
      technologies: ["LangChain", "LLM", "RAG", "FastAPI", "React", "Python"],
      keyFeatures: [
        "Multi-document PDF & text parsing with semantic chunking",
        "Context-grounded question answering with source citation pills",
        "Automated flashcard generation for spaced repetition",
        "Export to Markdown, PDF, and Notion-compatible formats",
      ],
      githubUrl: "https://github.com/nahilist/ai-notes-summarizer",
      liveUrl: "https://ai-notes-summarizer-pisq.onrender.com/",
    },
    {
      id: "smart-ewaste-repairability",
      title: "Smart E-Waste Repairability",
      category: "AI/ML & GenAI",
      badge: "Sustainability AI",
      problemStatement:
        "Over 50 million tons of e-waste are discarded annually because consumers lack transparent information regarding repair costs, modularity, and part availability.",
      whatIBuilt:
        "A machine learning diagnostic and scoring web system that calculates a repairability index for consumer electronics and provides step-by-step disassembly guides.",
      technologies: ["Python", "Scikit-learn", "Pandas", "Django", "Streamlit"],
      keyFeatures: [
        "Predictive repairability score calculated via Random Forest regression",
        "Component breakdown checklist with cost-benefit analysis",
        "Searchable database of certified local e-waste recycling hubs",
        "Environmental impact calculator measuring carbon offset",
      ],
      githubUrl: "https://github.com/nahilist/ewaste-repairability",
      liveUrl: "https://e-waste-predictor-100x.streamlit.app/",
    },
    {
      id: "target-groww",
      title: "Target Groww",
      category: "Frontend",
      badge: "FinTech Dashboard",
      problemStatement:
        "Modern retail investors need high-speed, uncluttered financial dashboards to track portfolio allocations, SIP growth, and stock metrics in real-time.",
      whatIBuilt:
        "A responsive financial investment analytics dashboard mimicking premier FinTech platforms with real-time stock simulation, CAGR calculators, and interactive charts.",
      technologies: ["React", "Next.js", "Tailwind CSS", "JavaScript", "Chart.js"],
      keyFeatures: [
        "Interactive SIP & Lumpsum compound interest growth projection calculator",
        "Dynamic asset allocation donut chart with rebalancing indicators",
        "Dark/Light high-contrast financial theme optimized for night trading",
        "Zero-latency client-side caching for instant metric recalculations",
      ],
      githubUrl: "https://github.com/nahilist/target-groww",
      liveUrl: "https://target-groww.vercel.app",
    },
    {
      id: "geoverse",
      title: "Geoverse Trade Ventures",
      category: "Frontend",
      badge: "Industrial Trade & Logistics",
      problemStatement:
        "Industrial manufacturing powerhouses and energy plants require transparent, reliable bulk coal procurement and multimodal logistics without delivery bottlenecks.",
      whatIBuilt:
        "A premier corporate web platform and procurement portal for industrial coal supply and multimodal logistics across India, featuring grade specs and inquiry workflows.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Turbopack"],
      keyFeatures: [
        "Interactive coal product specification explorer & grade comparison",
        "Multimodal supply chain logistics tracking & inquiry pipeline",
        "Responsive luxury corporate UI with fluid micro-interactions",
        "Sub-second TTFB with high-speed Turbopack build optimization",
      ],
      githubUrl: "https://github.com/nahilist",
      liveUrl: "https://www.geoverse.in/",
    },
  ] as ProjectItem[],

  experienceEducation: [
    {
      type: "education",
      period: "2022 — 2026",
      title: "B.Tech in Artificial Intelligence & Machine Learning",
      organization: "Engineering & Technology Institute",
      grade: "Final Year",
      description:
        "Focused coursework in Deep Learning, Natural Language Processing, Data Structures & Algorithms, Computer Vision, Operating Systems, and Distributed Computing.",
    },
    {
      type: "experience",
      period: "2023 — Present",
      title: "Independent AI/ML & Full-Stack Developer",
      organization: "Open Source & Autonomous Projects",
      grade: "25+ Repositories",
      description:
        "Built production-ready Generative AI systems, RAG document pipelines, deep learning models, and modern Next.js client web applications.",
    },
    {
      type: "experience",
      period: "2024",
      title: "Lead Frontend & ML Contributor",
      organization: "University AI Hackathon Team",
      grade: "Finalist Rank",
      description:
        "Spearheaded UI/UX architecture and integrated FastAPI backend inference pipelines into responsive client interfaces under 36-hour sprint constraints.",
    },
  ],

  services: [
    {
      id: "ai-ml-dev",
      title: "AI/ML Application Development",
      description:
        "Designing custom machine learning models, training deep learning pipelines (PyTorch/TensorFlow), and creating computer vision or predictive classification solutions.",
      deliverables: ["Custom Model Training", "Data Preprocessing & Evaluation", "RESTful Model Serving"],
    },
    {
      id: "gen-ai-rag",
      title: "Generative AI & RAG Solutions",
      description:
        "Building intelligent retrieval-augmented generation pipelines, custom agentic workflows, and semantic document search systems using LangChain and LLMs.",
      deliverables: ["Vector Search Pipelines", "Multi-Agent Workflows", "Prompt Engineering & Evaluation"],
    },
    {
      id: "frontend-dev",
      title: "Modern Frontend Development",
      description:
        "Engineering responsive, accessible, ultra-fast web interfaces using Next.js, React, TypeScript, Tailwind CSS, and fluid Framer Motion animations.",
      deliverables: ["Next.js App Router Architecture", "Responsive & Accessible UI", "Micro-Interactions"],
    },
    {
      id: "fullstack-apps",
      title: "Full-Stack Web Applications",
      description:
        "Developing scalable end-to-end applications from database design (Supabase/MongoDB) and Python APIs (FastAPI/Django) to interactive user interfaces.",
      deliverables: ["Full-Stack Architecture", "Database Schema Design", "Secure Authentication"],
    },
  ] as ServiceItem[],

  statistics: [
    { label: "Completed Projects", value: "15+", subtext: "Production & Academic Works" },
    { label: "Technologies Mastered", value: "20+", subtext: "AI/ML, Web, Tools & DBs" },
    { label: "GitHub Repositories", value: "25+", subtext: "Open Source Codebases" },
    { label: "Hands-on Learning", value: "2+ Years", subtext: "Continuous Practical Practice" },
  ],

  resume: {
    fileName: "Himanshu_Kumar_Resume.pdf",
    viewUrl: "https://drive.google.com/file/d/1yGZ26o7WLiyysw6PWk2mlbnqs5TQLeUf/view?usp=drivesdk",
    previewUrl: "https://drive.google.com/file/d/1yGZ26o7WLiyysw6PWk2mlbnqs5TQLeUf/preview",
    downloadUrl: "https://drive.google.com/file/d/1yGZ26o7WLiyysw6PWk2mlbnqs5TQLeUf/view?usp=drivesdk",
    lastUpdated: "September 2025",
  },
};
