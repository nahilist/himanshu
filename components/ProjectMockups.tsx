"use client";

import React from "react";
import Image from "next/image";

// -------------------------------------------------------------
// ULTRA-REALISTIC MINIMAL PROJECT SHOWCASE
// Minimal, text-free, cinematic imagery for every project
// -------------------------------------------------------------

interface MinimalProjectImageProps {
  src: string;
  alt: string;
  accentColor?: string;
}

export const MinimalProjectImage: React.FC<MinimalProjectImageProps> = ({
  src,
  alt,
  accentColor = "rgba(255, 255, 255, 0.12)",
}) => (
  <div className="relative w-full h-full overflow-hidden bg-neutral-950 select-none">
    {/* Ultra-realistic high-resolution minimal image */}
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 650px"
      className="object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
      priority={false}
    />

    {/* Subtle dark ambient gradient vignette for depth */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/15 pointer-events-none transition-opacity duration-500 group-hover:opacity-60" />

    {/* Subtle ambient accent glow on hover */}
    <div
      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
      style={{
        background: `radial-gradient(circle at 50% 10%, ${accentColor} 0%, transparent 65%)`,
      }}
    />
  </div>
);

export const MockupElementum3D: React.FC = () => (
  <MinimalProjectImage
    src="/projects/elementum_periodic.jpg"
    alt="Elementum 3D - 118 Elements 3D Periodic Table"
    accentColor="rgba(56, 189, 248, 0.22)"
  />
);

export const MockupTargetGroww: React.FC = () => (
  <MinimalProjectImage
    src="/projects/target_groww.jpg"
    alt="Target Groww - FinTech Kinetic Growth Wave"
    accentColor="rgba(16, 185, 129, 0.18)"
  />
);

export const MockupAtlasSystems: React.FC = () => (
  <MinimalProjectImage
    src="/projects/atlas_systems.jpg"
    alt="ATLAS Invisible Systems - Minimal Datacenter Infrastructure"
    accentColor="rgba(6, 182, 212, 0.18)"
  />
);

export const MockupDigitClassifier: React.FC = () => (
  <MinimalProjectImage
    src="/projects/digit_classifier.jpg"
    alt="Handwritten Digit Classifier - Neural Synaptic Network"
    accentColor="rgba(168, 85, 247, 0.18)"
  />
);

export const MockupAiNotes: React.FC = () => (
  <MinimalProjectImage
    src="/projects/ai_notes.jpg"
    alt="AI Notes Summarizer - Crystalline Knowledge Synthesis"
    accentColor="rgba(245, 158, 11, 0.18)"
  />
);

export const MockupSmartEwaste: React.FC = () => (
  <MinimalProjectImage
    src="/projects/smart_ewaste.jpg"
    alt="Smart E-Waste Repairability - Macro Modular Microchip"
    accentColor="rgba(16, 185, 129, 0.18)"
  />
);

export const MockupGeoverse: React.FC = () => (
  <MinimalProjectImage
    src="/projects/geoverse.jpg"
    alt="Geoverse Trade Ventures - Industrial Freight Logistics at Sunset"
    accentColor="rgba(245, 158, 11, 0.18)"
  />
);

export const projectMockups: Record<string, React.ReactNode> = {
  geoverse: <MockupGeoverse />,
  "elementum-3d": <MockupElementum3D />,
  "target-groww": <MockupTargetGroww />,
  "atlas-invisible-systems": <MockupAtlasSystems />,
  "digit-classifier": <MockupDigitClassifier />,
  "ai-notes-summarizer": <MockupAiNotes />,
  "smart-ewaste-repairability": <MockupSmartEwaste />,
};

export const categoryTags: Record<string, string> = {
  geoverse: "INDUSTRIAL B2B / LOGISTICS PLATFORM",
  "elementum-3d": "3D INTERACTIVE / 118 ELEMENTS",
  "target-groww": "UI/UX / DEVELOPMENT",
  "atlas-invisible-systems": "SYSTEMS ARCHITECTURE / CLOUD",
  "digit-classifier": "AI / COMPUTER VISION",
  "ai-notes-summarizer": "GENAI / RAG PIPELINES",
  "smart-ewaste-repairability": "ML / SUSTAINABILITY AI",
};
