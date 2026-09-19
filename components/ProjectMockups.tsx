"use client";

import React from "react";
import Image from "next/image";
import { Sparkles } from "lucide-react";

// -------------------------------------------------------------
// ULTRA-REALISTIC BESPOKE PROJECT SHOWCASE MOCKUPS
// Reusable across SlideProjectsArchive and ProjectDetailModal
// -------------------------------------------------------------

export const MockupElementum3D: React.FC = () => (
  <div className="w-full h-full bg-[#05020c] relative overflow-hidden flex flex-col justify-between p-4 sm:p-6 select-none">
    {/* Grid floor effect with perspective */}
    <div
      className="absolute inset-0 opacity-25 pointer-events-none"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(236, 72, 153, 0.25) 1px, transparent 1px),
                          linear-gradient(to bottom, rgba(168, 85, 247, 0.25) 1px, transparent 1px)`,
        backgroundSize: "32px 32px",
        transform: "perspective(320px) rotateX(48deg) translateY(45px) scale(1.6)",
      }}
    />

    {/* Ambient Glow */}
    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-fuchsia-600/25 rounded-full blur-3xl pointer-events-none" />

    {/* Top Navbar */}
    <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-neutral-400">
      <div className="w-6 h-6 rounded-full border border-neutral-700 flex items-center justify-center">
        <div className="w-2.5 h-2.5 rounded-full bg-neutral-300" />
      </div>
      <div className="text-center font-bold tracking-widest text-xs uppercase text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]">
        <span className="bg-gradient-to-r from-fuchsia-400 via-pink-300 to-indigo-300 bg-clip-text text-transparent">
          ELEMENTUM
        </span>
      </div>
      <div className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-[9px] font-semibold tracking-wider">
        CONTACT US
      </div>
    </div>

    {/* Central Typography Showcase */}
    <div className="relative z-10 my-auto text-center py-1">
      <h4 className="text-3xl sm:text-5xl md:text-4xl lg:text-5xl font-black tracking-tight uppercase text-white drop-shadow-[0_0_24px_rgba(217,70,239,0.7)]">
        <span className="bg-gradient-to-r from-pink-400 via-fuchsia-400 to-purple-300 bg-clip-text text-transparent">
          CONNECTING
        </span>
      </h4>
      <p className="text-[10px] sm:xs font-mono uppercase tracking-widest text-neutral-300 mt-1 font-semibold">
        BRANDS <span className="text-cyan-400 font-bold">✱</span> IN THE SAFEST HANDS
      </p>

      {/* Floating 3D Tilted Photo Cards */}
      <div className="relative mt-3 sm:mt-5 h-24 sm:h-32 flex items-center justify-center gap-2 sm:gap-3">
        <div className="relative w-12 sm:w-16 h-18 sm:h-24 rounded-xl overflow-hidden border border-white/20 shadow-2xl transform -rotate-14 -translate-y-2 bg-neutral-900 transition-transform duration-500 hover:rotate-0">
          <Image
            src="/projects/elem_1.jpg"
            alt="WebGL Cyber Aesthetic"
            fill
            sizes="(max-width: 640px) 48px, 64px"
            className="object-cover brightness-90 contrast-125"
          />
        </div>
        <div className="relative w-14 sm:w-20 h-20 sm:h-26 rounded-xl overflow-hidden border border-fuchsia-400/50 shadow-2xl shadow-fuchsia-950 transform -rotate-4 -translate-y-3 bg-neutral-900 transition-transform duration-500 hover:rotate-0">
          <Image
            src="/projects/elem_2.jpg"
            alt="3D Architecture"
            fill
            sizes="(max-width: 640px) 56px, 80px"
            className="object-cover brightness-95 contrast-125"
          />
        </div>
        <div className="relative w-14 sm:w-20 h-20 sm:h-26 rounded-xl overflow-hidden border border-purple-400/50 shadow-2xl shadow-purple-950 transform rotate-4 -translate-y-3 bg-neutral-900 transition-transform duration-500 hover:rotate-0">
          <Image
            src="/projects/elem_3.jpg"
            alt="Glass Distortion Shader"
            fill
            sizes="(max-width: 640px) 56px, 80px"
            className="object-cover brightness-95 contrast-125"
          />
        </div>
        <div className="relative w-12 sm:w-16 h-18 sm:h-24 rounded-xl overflow-hidden border border-white/20 shadow-2xl transform rotate-14 -translate-y-2 bg-neutral-900 transition-transform duration-500 hover:rotate-0">
          <Image
            src="/projects/elem_4.jpg"
            alt="Minimalist Art"
            fill
            sizes="(max-width: 640px) 48px, 64px"
            className="object-cover brightness-90 contrast-125"
          />
        </div>
      </div>
    </div>

    {/* Bottom Footer Bar */}
    <div className="relative z-10 flex items-center justify-between text-[9px] font-mono text-neutral-400 pt-1">
      <div className="flex items-center gap-2 text-neutral-500">
        <span>INSTAGRAM</span>
        <span>•</span>
        <span>GITHUB</span>
        <span>•</span>
        <span>LINKEDIN</span>
      </div>
      <span className="text-neutral-400 font-semibold tracking-wider">
        SCROLL TO EXPLORE ⤓
      </span>
    </div>
  </div>
);

export const MockupTargetGroww: React.FC = () => (
  <div className="w-full h-full bg-[#fdfdfd] text-neutral-900 relative overflow-hidden flex flex-col justify-between p-4 sm:p-6 select-none">
    {/* Top Navbar */}
    <div className="relative z-10 flex items-center justify-between text-[10px] font-sans">
      <div className="flex items-center gap-1.5">
        <span className="font-black text-base sm:text-lg tracking-tighter text-neutral-950">
          munch<span className="text-rose-600">.</span>
        </span>
      </div>

      <div className="hidden sm:flex items-center gap-4 text-[10px] font-medium text-neutral-500">
        <span className="text-neutral-900 font-semibold">● Home</span>
        <span>AIM Approach</span>
        <span>Our Work</span>
        <span>Brand Activation</span>
      </div>

      <div className="px-3.5 py-1 rounded-full bg-neutral-950 text-white text-[9px] font-semibold tracking-wide shadow-xs">
        Get in Touch
      </div>
    </div>

    {/* Central Typography Showcase */}
    <div className="relative z-10 my-auto text-center py-1">
      <h4 className="text-2xl sm:text-4xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-neutral-950 leading-tight">
        Engineered for
        <br />
        Business <span className="text-rose-600 font-bold">Results</span>
      </h4>
      <p className="text-[9px] sm:text-[10.5px] text-neutral-500 max-w-md mx-auto mt-1 leading-relaxed">
        Audience-first selection, Efficient strategy, Engaging Content, Thorough monitoring, Data-driven amplification.
      </p>

      {/* 6 Rounded Pill Portrait Cards */}
      <div className="mt-3 sm:mt-5 flex items-center justify-center gap-1.5 sm:gap-2.5 overflow-hidden px-1">
        <div className="relative w-11 sm:w-15 h-20 sm:h-28 rounded-2xl sm:rounded-3xl overflow-hidden border border-neutral-200/80 shadow-xs transform -translate-y-1">
          <Image
            src="/projects/groww_1.jpg"
            alt="Creator Portrait"
            fill
            sizes="(max-width: 640px) 44px, 60px"
            className="object-cover"
          />
        </div>
        <div className="relative w-12 sm:w-16 h-22 sm:h-30 rounded-2xl sm:rounded-3xl overflow-hidden border border-neutral-200/80 shadow-sm transform -translate-y-2">
          <Image
            src="/projects/groww_2.jpg"
            alt="Creator Portrait"
            fill
            sizes="(max-width: 640px) 48px, 64px"
            className="object-cover"
          />
        </div>
        <div className="relative w-13 sm:w-18 h-24 sm:h-32 rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-neutral-900 shadow-md transform -translate-y-3">
          <Image
            src="/projects/groww_3.jpg"
            alt="Creator Portrait"
            fill
            sizes="(max-width: 640px) 52px, 72px"
            className="object-cover"
          />
        </div>
        <div className="relative w-13 sm:w-18 h-24 sm:h-32 rounded-2xl sm:rounded-3xl overflow-hidden border border-neutral-200/80 shadow-md transform -translate-y-3">
          <Image
            src="/projects/groww_4.jpg"
            alt="Creator Portrait"
            fill
            sizes="(max-width: 640px) 52px, 72px"
            className="object-cover"
          />
        </div>
        <div className="relative w-12 sm:w-16 h-22 sm:h-30 rounded-2xl sm:rounded-3xl overflow-hidden border border-neutral-200/80 shadow-sm transform -translate-y-2">
          <Image
            src="/projects/groww_5.jpg"
            alt="Creator Portrait"
            fill
            sizes="(max-width: 640px) 48px, 64px"
            className="object-cover"
          />
        </div>
        <div className="relative w-11 sm:w-15 h-20 sm:h-28 rounded-2xl sm:rounded-3xl overflow-hidden border border-neutral-200/80 shadow-xs transform -translate-y-1">
          <Image
            src="/projects/groww_6.jpg"
            alt="Creator Portrait"
            fill
            sizes="(max-width: 640px) 44px, 60px"
            className="object-cover"
          />
        </div>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="relative z-10 flex items-center justify-between text-[9px] font-mono text-neutral-400 border-t border-neutral-200/60 pt-2">
      <span>NEXT.JS / FINANCIAL ENGINE</span>
      <span className="text-neutral-700 font-bold">ALPHA AMPLIFICATION ↗</span>
    </div>
  </div>
);

export const MockupAtlasSystems: React.FC = () => (
  <div className="w-full h-full bg-[#050912] text-white relative overflow-hidden flex flex-col justify-between p-4 sm:p-6 select-none">
    <div className="absolute inset-0 opacity-25">
      <Image
        src="/projects/atlas_server.jpg"
        alt="Datacenter Server Racks"
        fill
        sizes="(max-width: 768px) 100vw, 650px"
        className="object-cover"
      />
    </div>
    <div className="absolute inset-0 bg-gradient-to-t from-[#050912] via-[#050912]/80 to-[#050912]/90 pointer-events-none" />

    <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-neutral-400">
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
        <span className="font-bold text-cyan-300">ATLAS TELEMETRY</span>
      </div>
      <div className="px-2.5 py-0.5 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 text-[9px] font-bold">
        DISTRIBUTED NODES
      </div>
    </div>

    <div className="relative z-10 my-auto text-center py-2">
      <h4 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white uppercase">
        THE INVISIBLE <span className="text-cyan-400">SYSTEMS</span>
      </h4>
      <p className="text-[10px] sm:text-xs font-mono text-neutral-300 mt-1">
        Autonomous Microservices Telemetry & Anomaly Diagnosis
      </p>

      <div className="mt-4 p-3.5 rounded-2xl bg-neutral-950/80 border border-cyan-500/30 max-w-sm mx-auto flex items-center justify-around gap-2 font-mono text-[9px] backdrop-blur-md shadow-2xl">
        <div className="text-center">
          <span className="text-cyan-400 font-bold block text-sm sm:text-base">12ms</span>
          <span className="text-neutral-500 text-[8px]">LATENCY</span>
        </div>
        <div className="h-6 w-px bg-neutral-800" />
        <div className="text-center">
          <span className="text-emerald-400 font-bold block text-sm sm:text-base">99.98%</span>
          <span className="text-neutral-500 text-[8px]">UPTIME</span>
        </div>
        <div className="h-6 w-px bg-neutral-800" />
        <div className="text-center">
          <span className="text-amber-400 font-bold block text-sm sm:text-base">48 NODES</span>
          <span className="text-neutral-500 text-[8px]">SYNCHRONIZED</span>
        </div>
      </div>
    </div>

    <div className="relative z-10 flex items-center justify-between text-[9px] font-mono text-neutral-400 border-t border-neutral-800/80 pt-2">
      <span>FASTAPI / PYTHON / SUPABASE</span>
      <span className="text-cyan-400 font-semibold">ALL SYSTEMS NOMINAL ●</span>
    </div>
  </div>
);

export const MockupDigitClassifier: React.FC = () => (
  <div className="w-full h-full bg-[#0a0c16] text-white relative overflow-hidden flex flex-col justify-between p-4 sm:p-6 select-none">
    <div className="absolute inset-0 opacity-20">
      <Image
        src="/projects/ai_neural.jpg"
        alt="Neural Network Graph"
        fill
        sizes="(max-width: 768px) 100vw, 650px"
        className="object-cover"
      />
    </div>
    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c16] via-[#0a0c16]/85 to-[#0a0c16]/90 pointer-events-none" />

    <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-neutral-400">
      <span className="text-purple-400 font-bold">MNIST VISION CORE</span>
      <span className="px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 text-[9px] font-bold">
        CNN CONVOLUTION
      </span>
    </div>

    <div className="relative z-10 my-auto flex items-center justify-center gap-4 sm:gap-6 py-2">
      <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-neutral-950 border-2 border-purple-500/60 flex items-center justify-center shadow-xl shadow-purple-950 relative">
        <span className="text-5xl sm:text-6xl font-black text-white font-mono drop-shadow-[0_0_16px_rgba(168,85,247,0.9)]">
          7
        </span>
        <span className="absolute bottom-1.5 right-2 text-[8px] font-mono text-purple-400">
          28x28
        </span>
      </div>

      <div className="space-y-1.5 font-mono text-[9px]">
        <div className="text-xs font-bold text-white mb-1">PREDICTION MAP</div>
        <div className="flex items-center gap-2">
          <span className="w-3 text-purple-300 font-bold">7</span>
          <div className="w-24 sm:w-32 h-2.5 rounded-full bg-neutral-800 overflow-hidden">
            <div className="w-[99.2%] h-full bg-purple-500 rounded-full shadow-sm" />
          </div>
          <span className="text-purple-300 font-bold">99.2%</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 text-neutral-500">1</span>
          <div className="w-24 sm:w-32 h-2.5 rounded-full bg-neutral-800 overflow-hidden">
            <div className="w-[6%] h-full bg-neutral-600 rounded-full" />
          </div>
          <span className="text-neutral-500">0.4%</span>
        </div>
      </div>
    </div>

    <div className="relative z-10 flex items-center justify-between text-[9px] font-mono text-neutral-400 border-t border-neutral-800/80 pt-2">
      <span>PYTORCH / TENSORFLOW / OPENCV</span>
      <span className="text-emerald-400 font-semibold">VALIDATION: 99.2% ✓</span>
    </div>
  </div>
);

export const MockupAiNotes: React.FC = () => (
  <div className="w-full h-full bg-[#080d19] text-white relative overflow-hidden flex flex-col justify-between p-4 sm:p-6 select-none">
    <div className="absolute inset-0 opacity-20">
      <Image
        src="/projects/ai_notes.jpg"
        alt="Study Workspace"
        fill
        sizes="(max-width: 768px) 100vw, 650px"
        className="object-cover"
      />
    </div>
    <div className="absolute inset-0 bg-gradient-to-t from-[#080d19] via-[#080d19]/85 to-[#080d19]/90 pointer-events-none" />

    <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-neutral-400">
      <span className="text-amber-400 font-bold">RAG ENGINE v2.4</span>
      <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-[9px] font-bold">
        LANGCHAIN + LLM
      </span>
    </div>

    <div className="relative z-10 my-auto text-center py-2">
      <h4 className="text-xl sm:text-3xl font-extrabold tracking-tight text-white uppercase">
        INTELLIGENT <span className="text-amber-400">NOTE SYNTHESIS</span>
      </h4>
      <div className="mt-3.5 p-3 rounded-2xl bg-white/5 border border-white/10 max-w-sm mx-auto text-left space-y-1.5 font-mono text-[9px] text-neutral-300 backdrop-blur-sm">
        <div className="flex items-center gap-2 text-amber-400 text-[10px] font-semibold">
          <Sparkles className="w-3 h-3" />
          <span>Executive Summary Generated</span>
        </div>
        <p className="line-clamp-2 text-neutral-400 leading-relaxed">
          Vectorized 42-page research document. Extracted 8 core architectural takeaways and 15 flashcards with source grounding.
        </p>
      </div>
    </div>

    <div className="relative z-10 flex items-center justify-between text-[9px] font-mono text-neutral-400 border-t border-neutral-800/80 pt-2">
      <span>LANGCHAIN / FASTAPI / REACT</span>
      <span className="text-amber-400 font-semibold">EMBEDDING COMPLETE ↗</span>
    </div>
  </div>
);

export const MockupSmartEwaste: React.FC = () => (
  <div className="w-full h-full bg-[#05140e] text-white relative overflow-hidden flex flex-col justify-between p-4 sm:p-6 select-none">
    <div className="absolute inset-0 opacity-20">
      <Image
        src="/projects/ewaste_chip.jpg"
        alt="Electronics Motherboard"
        fill
        sizes="(max-width: 768px) 100vw, 650px"
        className="object-cover"
      />
    </div>
    <div className="absolute inset-0 bg-gradient-to-t from-[#05140e] via-[#05140e]/85 to-[#05140e]/90 pointer-events-none" />

    <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-emerald-400">
      <span className="font-bold">SUSTAINABILITY AI</span>
      <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[9px] font-bold">
        REPAIRABILITY INDEX
      </span>
    </div>

    <div className="relative z-10 my-auto text-center py-2">
      <h4 className="text-xl sm:text-3xl font-extrabold tracking-tight text-white uppercase">
        CIRCULAR <span className="text-emerald-400">ELECTRONICS</span>
      </h4>
      <div className="mt-3.5 flex items-center justify-center gap-4">
        <div className="w-16 h-16 rounded-2xl bg-emerald-500/15 border border-emerald-500/40 flex flex-col items-center justify-center text-center shadow-lg shadow-emerald-950">
          <span className="text-2xl font-black text-emerald-400">88</span>
          <span className="text-[7px] font-mono text-neutral-400">INDEX SCORE</span>
        </div>
        <div className="text-left font-mono text-[9px] text-neutral-300 space-y-1">
          <div className="text-emerald-400 font-bold">GRADE A — MODULAR</div>
          <div className="text-neutral-400">Disassembly: 12 minutes</div>
          <div className="text-neutral-400">Carbon Offset: 3.2 kg CO₂</div>
        </div>
      </div>
    </div>

    <div className="relative z-10 flex items-center justify-between text-[9px] font-mono text-neutral-400 border-t border-neutral-800/80 pt-2">
      <span>DJANGO / SCIKIT-LEARN / PANDAS</span>
      <span className="text-emerald-400 font-semibold">ECO HUB VERIFIED ✓</span>
    </div>
  </div>
);

export const MockupGeoverse: React.FC = () => (
  <div className="w-full h-full bg-[#080d14] text-white relative overflow-hidden flex flex-col justify-between p-4 sm:p-6 select-none">
    {/* High-res cinematic background image */}
    <div className="absolute inset-0">
      <Image
        src="/projects/geoverse.jpg"
        alt="Geoverse Trade Ventures - Industrial Logistics & Energy Supply"
        fill
        sizes="(max-width: 768px) 100vw, 650px"
        className="object-cover object-center"
      />
    </div>

    {/* Cinematic Gradient Overlays for optimal readability and luxury finish */}
    <div className="absolute inset-0 bg-gradient-to-t from-[#04080e]/95 via-[#04080e]/40 to-[#04080e]/75 pointer-events-none" />

    {/* Top Navbar */}
    <div className="relative z-10 flex items-center justify-between text-[10px] font-mono">
      <div className="flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
        <span className="font-bold tracking-widest uppercase text-white">
          GEOVERSE <span className="text-amber-400 font-normal text-[9px]">TRADE VENTURES</span>
        </span>
      </div>
      <div className="px-2.5 py-0.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-[9px] font-semibold tracking-wider backdrop-blur-md">
        INDUSTRIAL SUPPLY & LOGISTICS
      </div>
    </div>

    {/* Central Typography & Key Telemetry Badge */}
    <div className="relative z-10 my-auto text-center py-2">
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 border border-white/15 text-[9px] font-mono text-neutral-300 backdrop-blur-md mb-2">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        <span>PAN-INDIA BULK COAL PROCUREMENT</span>
      </div>

      <h4 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white uppercase drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
        POWERING <span className="text-amber-400">INDUSTRIES</span>
      </h4>
      <p className="text-[10px] sm:text-xs font-mono text-amber-200/90 tracking-wider mt-0.5 font-medium italic">
        Delivering Growth Through Dependable Fuel Supply
      </p>

      {/* Floating 3-Metric Industrial HUD */}
      <div className="mt-3.5 p-2.5 sm:p-3 rounded-2xl bg-black/70 border border-amber-500/30 max-w-sm mx-auto flex items-center justify-around gap-2 font-mono text-[9px] backdrop-blur-md shadow-2xl">
        <div className="text-center">
          <span className="text-amber-400 font-bold block text-xs sm:text-sm">10k+ MT</span>
          <span className="text-neutral-400 text-[8px]">CAPABILITY</span>
        </div>
        <div className="h-6 w-px bg-neutral-800" />
        <div className="text-center">
          <span className="text-emerald-400 font-bold block text-xs sm:text-sm">5 SECTORS</span>
          <span className="text-neutral-400 text-[8px]">POWER & CEMENT</span>
        </div>
        <div className="h-6 w-px bg-neutral-800" />
        <div className="text-center">
          <span className="text-cyan-400 font-bold block text-xs sm:text-sm">MULTIMODAL</span>
          <span className="text-neutral-400 text-[8px]">RAIL & ROAD</span>
        </div>
      </div>
    </div>

    {/* Bottom Footer Bar */}
    <div className="relative z-10 flex items-center justify-between text-[9px] font-mono text-neutral-300 border-t border-white/15 pt-2">
      <span>NEXT.JS / TYPESCRIPT / TURBOPACK</span>
      <span className="text-amber-400 font-semibold tracking-wider flex items-center gap-1">
        GEOVERSE.IN ↗
      </span>
    </div>
  </div>
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
  "elementum-3d": "UI/UX / DEVELOPMENT",
  "target-groww": "UI/UX / DEVELOPMENT",
  "atlas-invisible-systems": "SYSTEMS ARCHITECTURE / CLOUD",
  "digit-classifier": "AI / COMPUTER VISION",
  "ai-notes-summarizer": "GENAI / RAG PIPELINES",
  "smart-ewaste-repairability": "ML / SUSTAINABILITY AI",
};
