export interface ProjectSlide {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  showreelTitle?: string;
  videoUrl?: string;
}

export interface ArchiveProject {
  id: string;
  title: string;
  category: string;
  tags: string[];
  headline: string;
  subtext: string;
  previewType: "horizon" | "social-elite" | "social-inc" | "munch";
  link: string;
}

export const PORTFOLIO_DATA = {
  brand: {
    name: "M D X",
    tagline: "Digital Design & Creative Engineering",
    email: "hello@mdx.so",
    location: "NEW YORK / TOKYO",
    status: "AVAILABLE FOR SELECT PROJECTS",
  },
  services: {
    titleA: "We Build Experiences That Breathe",
    subtextA:
      "Because lasting experiences aren't made by chance — they're shaped with purpose.",
    titleB: "Made with Intention. Meant to Be Felt.",
    subtextB:
      "From the way words breathe to how animations flow, every part is made to resonate.",
    disciplines: [
      {
        id: "ui-ux",
        label: "UI/UX",
        icon: "tag",
        position: "top-left",
        description:
          "Human-centric interaction design, design systems, and friction-free user flows.",
      },
      {
        id: "development",
        label: "Development",
        icon: "code",
        position: "top-right",
        description:
          "Modern Next.js engineering, WebGL, smooth animations, and high performance.",
      },
      {
        id: "branding",
        label: "Branding",
        icon: "crosshair",
        position: "bottom-left",
        description:
          "Iconic visual identity, typography curation, and distinct art direction.",
      },
      {
        id: "3d-animation",
        label: "3D Animation",
        icon: "gamepad",
        position: "bottom-right",
        description:
          "Photorealistic 3D product renders, kinetic typography, and motion design.",
      },
    ],
  },
  archiveProjects: [
    {
      id: "horizon-x",
      title: "HorizonX",
      category: "UI/UX / DEVELOPMENT",
      tags: ["ALL", "UI/UX", "DEVELOPMENT"],
      headline: "The premium UI & code library for the vibecoding era.",
      subtext:
        "Browse a library of UI kits, components and Figma files for real projects. Download what you need, then make it yours.",
      previewType: "horizon",
      link: "https://mdx.so/projects/horizon-x?id=1024",
    },
    {
      id: "the-social-elite",
      title: "The Social Elite",
      category: "UI/UX / DEVELOPMENT",
      tags: ["ALL", "BRANDING", "3D ANIMATION"],
      headline: "THE SOCIAL ELITE",
      subtext:
        "360° CREATIVE SERVICES • PRODUCTION • CASTING • BRAND STRATEGISTS",
      previewType: "social-elite",
      link: "https://mdx.so/projects/the-social-elite?id=2825",
    },
    {
      id: "the-social-inc",
      title: "The Social Inc",
      category: "UI/UX / DEVELOPMENT",
      tags: ["ALL", "UI/UX", "DEVELOPMENT"],
      headline: "CONNECTING BRANDS IN THE SAFEST HANDS",
      subtext:
        "Innovative creator platform connecting global brands with verified digital storytellers.",
      previewType: "social-inc",
      link: "https://mdx.so/projects/the-social-inc?id=3301",
    },
    {
      id: "munch",
      title: "Munch",
      category: "UI/UX / DEVELOPMENT",
      tags: ["ALL", "DEVELOPMENT", "BRANDING"],
      headline: "Engineered for Business Results",
      subtext:
        "Audience-first selection. Efficient strategy. Engaging Content. Thorough monitoring. Data-driven amplification.",
      previewType: "munch",
      link: "https://mdx.so/projects/munch?id=4920",
    },
  ] as ArchiveProject[],
  footer: {
    aboutUs: ["Awards", "Team", "Vision", "Projects", "Recruiting", "Blog"],
    services: [
      "UI/UX",
      "Custom web dev",
      "Branding",
      "3D animation",
      "App Development",
      "Business automation",
    ],
    otherServices: [
      "3D Web Design",
      "3D Rendering",
      "Web App Development",
      "E-commerce Development",
      "Brand Identity",
      "Motion Design",
    ],
    socialMedia: [
      "Tiktok",
      "Instagram",
      "Linkedin",
      "Youtube",
      "Facebook",
      "X",
    ],
  },
  slides: [
    {
      id: "hero",
      title: "Philosophy",
      headlinePart1: "From",
      headlineHighlight: "Ideas",
      headlinePart2: "to Impactful",
      headlinePart3: "Experiences",
      description:
        "Every project begins with your vision. We design, develop, and refine until every detail delivers.",
    },
    {
      id: "services",
      title: "Services & Ethos",
      category: "Capabilities",
    },
    {
      id: "drip-hero",
      title: "DRIP — Smart Hydration",
      category: "Industrial Design / E-Commerce",
      client: "DRIP Bottle Co.",
      year: "2025",
      showreelTitle: "DRIP SHOWREEL 2025",
      description:
        "A next-generation self-cleaning water bottle engineered with medical-grade UV-C LED sterilization and precision stainless steel.",
    },
    {
      id: "player-portal",
      title: "PLAYER PORTAL",
      category: "Mobile Application / Sports Tech",
      client: "Athletics Next",
      year: "2025",
      showreelTitle: "PLAYER PORTAL APP REEL",
      headline: "INTRODUCING THE FUTURE OF SPORTS RECRUITMENT",
      actionHeadline: "LET'S START",
      actionSubtext:
        "NEVER BEFORE HAS IT BEEN SO EASY TO MANAGE AN ATHLETE'S JOURNEY IN ONE APPLICATION",
      audiences: [
        "PARENTS/3RD PARTY ACCOUNT MANAGERS",
        "SCOUTS/RECRUITERS",
        "ATHLETES & COACHES",
      ],
    },
    {
      id: "archive",
      title: "Our Craft, Your Expression",
      category: "Selected Works",
    },
    {
      id: "contact",
      title: "Initiate Project",
      category: "Inquiries",
    },
    {
      id: "footer",
      title: "Studio Directory & Awards",
      category: "Index",
    },
  ],
  navigation: [
    { label: "01 / Philosophy", slideIndex: 0 },
    { label: "02 / Services & Sphere", slideIndex: 1 },
    { label: "03 / DRIP Case Study", slideIndex: 2 },
    { label: "04 / Player Portal App", slideIndex: 3 },
    { label: "05 / Works Archive", slideIndex: 4 },
    { label: "06 / Get Started", slideIndex: 5 },
    { label: "07 / Studio Index & Awards", slideIndex: 6 },
  ],
  socials: [
    { label: "Twitter / X", href: "https://x.com" },
    { label: "Instagram", href: "https://instagram.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "YouTube", href: "https://youtube.com" },
    { label: "TikTok", href: "https://tiktok.com" },
    { label: "Facebook", href: "https://facebook.com" },
  ],
};
