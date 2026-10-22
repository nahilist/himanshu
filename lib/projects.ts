import { PORTFOLIO_DATA, type ProjectItem } from "@/data/portfolioData";

const images: Record<string, { src: string; alt: string; caption: string }> = {
  "elementum-3d": { src: "/projects/elementum_periodic.webp", alt: "Elementum 3D interactive periodic table interface", caption: "The Elementum 3D periodic-table explorer." },
  "atlas-invisible-systems": { src: "/projects/atlas_systems.webp", alt: "ATLAS systems monitoring dashboard", caption: "The ATLAS systems visualisation dashboard." },
  "digit-classifier": { src: "/projects/digit_classifier.webp", alt: "Handwritten digit classifier drawing and prediction interface", caption: "The digit input and model-prediction interface." },
  "ai-notes-summarizer": { src: "/projects/ai_notes.webp", alt: "AI Notes Summarizer document workspace", caption: "The AI-assisted notes and summarisation workspace." },
  "smart-ewaste-repairability": { src: "/projects/smart_ewaste.webp", alt: "Smart E-Waste repairability assessment interface", caption: "The repairability assessment and guidance interface." },
  "target-groww": { src: "/projects/target_groww.webp", alt: "Target Groww investment dashboard", caption: "The responsive investment analytics dashboard." },
  geoverse: { src: "/projects/geoverse.webp", alt: "Geoverse Trade Ventures website", caption: "The Geoverse industrial trade and logistics website." },
};

export type PortfolioProject = ProjectItem & { image: { src: string; alt: string; caption: string } };

export const projects: PortfolioProject[] = PORTFOLIO_DATA.projects.map((project) => ({
  ...project,
  image: images[project.id],
}));

export const getProject = (slug: string) => projects.find((project) => project.id === slug);

