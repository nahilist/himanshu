"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Compass,
  ExternalLink,
  ArrowRight,
  ArrowLeft,
  X,
  CheckCircle2,
  Layers,
  ChevronLeft,
  ChevronRight,
  Quote,
} from "lucide-react";
import { ACTIVITY_DATA, ActivityItem } from "@/data/activityData";
import { ActivityHeader } from "@/components/activity/ActivityHeader";
import { soundFx } from "@/utils/audio";

export default function ActivityPage() {
  const [selectedAuthor, setSelectedAuthor] = useState<string>("all");
  const [activeDossier, setActiveDossier] = useState<ActivityItem | null>(null);

  // Keyboard shortcut (ESC) to exit full-page treatise view
  useEffect(() => {
    if (activeDossier) {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          soundFx.playTick();
          setActiveDossier(null);
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [activeDossier]);

  const philosophers = [
    { id: "all", label: "All Thinkers (6)" },
    { id: "J. Krishnamurti", label: "I. J. Krishnamurti" },
    { id: "U.G. Krishnamurti", label: "II. U.G. Krishnamurti" },
    { id: "Osho", label: "III. Osho" },
    { id: "Bhagat Singh", label: "IV. Bhagat Singh" },
    { id: "Gautama Buddha", label: "V. Gautama Buddha" },
    { id: "Charvaka", label: "VI. Charvaka Lokayata" },
  ];

  const filteredItems = ACTIVITY_DATA.filter((item) => {
    if (selectedAuthor === "all") return true;
    return item.authorOrOrigin?.toLowerCase().includes(selectedAuthor.toLowerCase());
  });

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  };

  const handleOpenDossier = (item: ActivityItem) => {
    soundFx.playOpenModal();
    setActiveDossier(item);
    scrollToTop();
  };

  const handleNextDossier = () => {
    if (!activeDossier) return;
    const currentIndex = ACTIVITY_DATA.findIndex((i) => i.id === activeDossier.id);
    const nextItem = ACTIVITY_DATA[(currentIndex + 1) % ACTIVITY_DATA.length];
    soundFx.playTick();
    setActiveDossier(nextItem);
    scrollToTop();
  };

  const handlePrevDossier = () => {
    if (!activeDossier) return;
    const currentIndex = ACTIVITY_DATA.findIndex((i) => i.id === activeDossier.id);
    const prevItem = ACTIVITY_DATA[(currentIndex - 1 + ACTIVITY_DATA.length) % ACTIVITY_DATA.length];
    soundFx.playTick();
    setActiveDossier(prevItem);
    scrollToTop();
  };

  const activeIndex = activeDossier ? ACTIVITY_DATA.findIndex((i) => i.id === activeDossier.id) : -1;
  const prevThinker = activeIndex !== -1 ? ACTIVITY_DATA[(activeIndex - 1 + ACTIVITY_DATA.length) % ACTIVITY_DATA.length] : null;
  const nextThinker = activeIndex !== -1 ? ACTIVITY_DATA[(activeIndex + 1) % ACTIVITY_DATA.length] : null;

  return (
    <div className="relative min-h-screen w-full bg-[#050505] text-white selection:bg-white selection:text-black">
      {/* 1. ARCHITECTURAL BACKGROUND (PURE MONOCHROME SPECULAR TEXTURE) */}
      <div className="fixed inset-0 bg-[radial-gradient(#262626_1px,transparent_1px)] [background-size:32px_32px] opacity-35 pointer-events-none" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-b from-white/[0.04] via-white/[0.015] to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* 2. PERSISTENT EDITORIAL HEADER (Rendered in Overview Mode) */}
      {!activeDossier && <ActivityHeader currentSection="philosophy" />}

      {/* ===================================================================== */}
      {/* MODE A: FULL DESKTOP IMMERSIVE TREATISE PAGE VIEW (NOT IN A CARD!)   */}
      {/* ===================================================================== */}
      {activeDossier ? (
        <motion.div
          key={activeDossier.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full min-h-screen pb-24"
        >
          {/* Full-Width Sticky Reading Command Bar */}
          <div className="sticky top-0 z-40 w-full backdrop-blur-xl bg-black/90 border-b border-white/10 px-4 sm:px-8 lg:px-12 py-3.5 flex items-center justify-between gap-4 transition-all">
            {/* Left: Back to Gallery & Direct Portfolio Link */}
            <div className="flex items-center gap-2.5">
              <button
                onClick={() => {
                  soundFx.playTick();
                  setActiveDossier(null);
                }}
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 hover:border-white bg-white/[0.04] hover:bg-white text-xs font-mono tracking-wider text-neutral-300 hover:text-black transition-all cursor-pointer shadow-xs"
              >
                <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1 text-neutral-400 group-hover:text-black" />
                <span>← ALL PHILOSOPHERS</span>
              </button>

              <Link
                href="/"
                onClick={() => soundFx.playTick()}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 hover:border-white/30 text-[11px] font-mono text-neutral-400 hover:text-white transition-colors cursor-pointer"
                title="Return to Main Portfolio"
              >
                <span>PORTFOLIO</span>
                <ExternalLink className="w-3 h-3 text-neutral-500" />
              </Link>
            </div>

            {/* Center: Treatise Progress Badge */}
            <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-neutral-400">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span className="font-semibold text-white uppercase tracking-wider">
                TREATISE 0{activeIndex + 1} OF 06
              </span>
              <span className="text-neutral-600">•</span>
              <span className="text-neutral-400">{activeDossier.authorOrOrigin}</span>
            </div>

            {/* Right: Quick Next / Prev & Close Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrevDossier}
                className="w-9 h-9 rounded-full bg-white/[0.06] hover:bg-white hover:text-black border border-white/10 flex items-center justify-center transition-all cursor-pointer"
                title="Previous Thinker"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNextDossier}
                className="w-9 h-9 rounded-full bg-white/[0.06] hover:bg-white hover:text-black border border-white/10 flex items-center justify-center transition-all cursor-pointer"
                title="Next Thinker"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => {
                  soundFx.playTick();
                  setActiveDossier(null);
                }}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white hover:text-black border border-white/20 flex items-center justify-center transition-all cursor-pointer ml-2"
                title="Close and Return"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Expansive Full Desktop Broadsheet Spread */}
          <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 pt-8 sm:pt-14 space-y-12 sm:space-y-16">
            
            {/* 1. Full-Width Masthead Header */}
            <div className="border-b border-white/10 pb-10 sm:pb-14">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="w-9 h-9 rounded-full bg-white text-black font-mono font-bold text-sm flex items-center justify-center shadow-md">
                  {activeDossier.numeral}
                </span>
                <span className="px-3.5 py-1 rounded-full bg-white/[0.05] border border-white/15 text-xs font-mono tracking-widest text-neutral-300 uppercase font-semibold">
                  {activeDossier.archetype}
                </span>
                <span className="text-xs font-mono text-neutral-500">
                  {activeDossier.dateOrEra} • {activeDossier.readTime}
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-serif font-normal text-white leading-[1.04] tracking-tight mb-4">
                {activeDossier.authorOrOrigin}
              </h1>
              
              <p className="text-2xl sm:text-3xl lg:text-4xl font-serif italic text-neutral-300 font-light max-w-5xl leading-tight">
                {activeDossier.title}
              </p>

              {/* Full-Width Core Axiom Callout */}
              <div className="mt-8 p-6 sm:p-8 rounded-3xl bg-[#0a0a0c] border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.15)] flex items-start gap-4">
                <Quote className="w-8 h-8 text-neutral-500 shrink-0 mt-1 rotate-180" />
                <div>
                  <span className="font-mono text-[10px] tracking-widest uppercase text-neutral-400 font-bold block mb-1">
                    FOUNDATIONAL CORE AXIOM
                  </span>
                  <p className="text-xl sm:text-2xl lg:text-3xl font-serif italic text-white font-normal leading-snug">
                    &ldquo;{activeDossier.coreAxiom}&rdquo;
                  </p>
                </div>
              </div>
            </div>

            {/* 2. Full Desktop 2-Column Broadsheet Section */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              
              {/* Left Column: Primary Text, Callouts & Historical Sutras */}
              <div className="lg:col-span-7 space-y-8">
                
                {/* Original Sutra / Recorded Discourse Box */}
                {activeDossier.originalText && (
                  <div className="p-7 sm:p-9 rounded-3xl bg-[#09090b] border border-white/15 shadow-xl text-neutral-200 space-y-3">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 font-bold block">
                      ORIGINAL HISTORICAL RECORD / PRIMARY SUTRA
                    </span>
                    <p className="text-lg sm:text-xl font-serif text-white leading-relaxed font-normal whitespace-pre-line">
                      {activeDossier.originalText}
                    </p>
                    {activeDossier.transliteration && (
                      <p className="text-xs font-mono text-neutral-400 pt-3 border-t border-white/10 italic">
                        {activeDossier.transliteration}
                      </p>
                    )}
                  </div>
                )}

                {/* Primary Unabridged Translation Excerpt */}
                <div className="border-l-[4px] border-white pl-8 sm:pl-10 py-3 my-8 font-serif italic text-xl sm:text-2xl lg:text-3xl text-neutral-100 leading-relaxed">
                  <p className="whitespace-pre-line">&ldquo;{activeDossier.englishExcerpt}&rdquo;</p>
                </div>

                {/* Tags & Thematic Index */}
                <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-neutral-500 mr-2">THEMATIC PILLARS:</span>
                  {activeDossier.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3.5 py-1 rounded-full bg-white/[0.04] text-xs font-mono text-neutral-300 border border-white/15"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: Epistemic Architecture & Engineering Synthesis */}
              <div className="lg:col-span-5 space-y-8">
                
                {/* 4 Foundational Tenets Breakdown */}
                <div className="p-7 sm:p-9 rounded-3xl bg-[#0a0a0c] border border-white/15 shadow-xl space-y-4">
                  <span className="text-xs font-mono uppercase tracking-widest text-white font-bold block border-b border-white/10 pb-3">
                    FOUNDATIONAL EPISTEMIC TENETS
                  </span>
                  <div className="space-y-3 pt-1">
                    {activeDossier.coreTenets.map((tenet, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3.5 p-4 rounded-2xl bg-white/[0.03] border border-white/10"
                      >
                        <CheckCircle2 className="w-5 h-5 text-white shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm font-sans text-neutral-200 leading-relaxed">
                          {tenet}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Engineering Synthesis & Computational Reality */}
                <div className="p-7 sm:p-9 rounded-3xl bg-[#0a0a0c] border border-white/15 shadow-xl space-y-4">
                  <div className="flex items-center gap-2.5 border-b border-white/10 pb-3">
                    <Layers className="w-5 h-5 text-white" />
                    <span className="font-mono text-xs uppercase tracking-widest text-white font-bold">
                      ENGINEERING SYNTHESIS &amp; COMPUTATIONAL REALITY
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-sans font-normal">
                    {activeDossier.reflection}
                  </p>
                </div>
              </div>
            </div>

            {/* 3. Full Desktop Bottom Navigation Tiles */}
            <div className="pt-12 border-t border-white/15 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {prevThinker && (
                <button
                  onClick={handlePrevDossier}
                  className="group p-6 sm:p-8 rounded-3xl bg-[#0a0a0c] border border-white/10 hover:border-white/35 transition-all text-left flex items-center justify-between cursor-pointer"
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-500 block">
                      ← PREVIOUS TREATISE
                    </span>
                    <h4 className="text-xl sm:text-2xl font-serif text-white group-hover:text-neutral-200">
                      {prevThinker.authorOrOrigin}
                    </h4>
                    <p className="text-xs font-mono text-neutral-400">
                      {prevThinker.archetype}
                    </p>
                  </div>
                  <ChevronLeft className="w-6 h-6 text-neutral-500 group-hover:text-white transition-colors" />
                </button>
              )}

              {nextThinker && (
                <button
                  onClick={handleNextDossier}
                  className="group p-6 sm:p-8 rounded-3xl bg-[#0a0a0c] border border-white/10 hover:border-white/35 transition-all text-right flex items-center justify-between cursor-pointer"
                >
                  <ChevronRight className="w-6 h-6 text-neutral-500 group-hover:text-white transition-colors" />
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-500 block">
                      NEXT TREATISE →
                    </span>
                    <h4 className="text-xl sm:text-2xl font-serif text-white group-hover:text-neutral-200">
                      {nextThinker.authorOrOrigin}
                    </h4>
                    <p className="text-xs font-mono text-neutral-400">
                      {nextThinker.archetype}
                    </p>
                  </div>
                </button>
              )}
            </div>

            {/* Bottom Return Button */}
            <div className="pt-6 flex justify-center">
              <button
                onClick={() => {
                  soundFx.playTick();
                  setActiveDossier(null);
                }}
                className="px-8 py-3.5 rounded-full bg-white hover:bg-neutral-200 text-black font-mono text-xs font-bold tracking-widest uppercase transition-transform hover:scale-105 cursor-pointer shadow-md"
              >
                RETURN TO ALL 06 PHILOSOPHERS
              </button>
            </div>
          </div>
        </motion.div>
      ) : (
        /* ===================================================================== */
        /* MODE B: ALL 6 PHILOSOPHERS OVERVIEW WITH ROTATING ASTROLABE           */
        /* ===================================================================== */
        <main className="relative z-10 w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-10 sm:py-16">
          
          {/* Hero Section with Rotating Astrolabe */}
          <div className="border-b border-white/10 pb-12 sm:pb-16 mb-12 sm:mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Headline & Manifesto */}
              <div className="lg:col-span-8 space-y-6">
                <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/15 bg-white/[0.03] text-neutral-300 font-mono text-[11px] tracking-widest uppercase shadow-2xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  <span>INTELLECTUAL SANCTUARY • INDIAN DARSHANA</span>
                </div>

                <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight text-white font-serif leading-[1.04]">
                  Indian Philosophy &amp; <br />
                  <span className="font-serif italic font-normal text-neutral-300">
                    Radical Darshana
                  </span>
                </h1>

                <p className="max-w-2xl text-base sm:text-xl font-serif text-neutral-300 leading-relaxed font-normal">
                  06 Legendary Iconoclasts, Seekers &amp; Materialist Rationalists who dismantled dogmatic authority, theological illusions, and psychological conditioning.
                </p>
              </div>

              {/* Right: Rotating Astrolabe of Reason (Pure CSS Hardware Accelerated) */}
              <div className="lg:col-span-4 flex justify-center lg:justify-end">
                <div className="relative w-56 h-56 sm:w-64 sm:h-64 flex items-center justify-center select-none">
                  {/* Outer Ring 1 */}
                  <div className="absolute inset-0 rounded-full border border-dashed border-white/20 animate-[spin_60s_linear_infinite]" />
                  {/* Middle Ring 2 */}
                  <div className="absolute inset-4 rounded-full border border-white/10 animate-[spin_40s_linear_infinite_reverse]" />
                  {/* Inner Ring 3 */}
                  <div className="absolute inset-8 rounded-full border border-dashed border-white/25 animate-[spin_25s_linear_infinite]" />

                  {/* Central Obsidian Relic Core */}
                  <div className="relative w-28 h-28 rounded-full bg-neutral-950 border border-white/30 shadow-[0_0_40px_rgba(255,255,255,0.06),inset_0_1px_2px_rgba(255,255,255,0.2)] flex flex-col items-center justify-center text-center p-2">
                    <Compass className="w-6 h-6 text-white stroke-[1.5] mb-1" />
                    <span className="text-[8.5px] font-mono tracking-widest text-neutral-400 uppercase font-bold">
                      NAHILIST
                    </span>
                    <span className="text-[7.5px] font-mono text-neutral-500 uppercase">
                      DARSHANA
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Master Switch Filter Bar */}
            <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center gap-2 sm:gap-2.5">
              {philosophers.map((phil) => (
                <button
                  key={phil.id}
                  onClick={() => {
                    soundFx.playTick();
                    setSelectedAuthor(phil.id);
                  }}
                  className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                    selectedAuthor === phil.id
                      ? "bg-white text-black font-bold shadow-[0_4px_20px_rgba(255,255,255,0.2)] scale-[1.02]"
                      : "bg-white/[0.03] hover:bg-white/[0.08] text-neutral-400 hover:text-white border border-white/10"
                  }`}
                >
                  {phil.label}
                </button>
              ))}
            </div>
          </div>

          {/* The 6 Monolithic Obsidian Tablets (2-Column Luxury Grid) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mb-20">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, idx) => (
                <motion.article
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  onClick={() => handleOpenDossier(item)}
                  className="group relative rounded-3xl sm:rounded-[32px] bg-[#0a0a0c] border border-white/[0.09] hover:border-white/35 p-6 sm:p-9 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.9),inset_0_1px_1px_rgba(255,255,255,0.18)] cursor-pointer flex flex-col justify-between overflow-hidden"
                >
                  {/* Specular Hairline Top Highlight */}
                  <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />

                  {/* Ambient Sub-Surface Lustre on Hover */}
                  <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-white/[0.03] group-hover:bg-white/[0.06] blur-3xl transition-all duration-500 pointer-events-none" />

                  <div className="relative z-10 space-y-6">
                    {/* Top Meta Line: Numeral + Archetype + Era */}
                    <div className="flex items-center justify-between gap-3 border-b border-white/[0.08] pb-4">
                      <div className="flex items-center gap-2.5">
                        <span className="w-8 h-8 rounded-full bg-white/[0.06] border border-white/15 text-white font-mono text-xs font-bold flex items-center justify-center shadow-2xs">
                          {item.numeral}
                        </span>
                        <span className="text-[11px] font-mono tracking-widest uppercase text-neutral-400 font-semibold">
                          {item.archetype}
                        </span>
                      </div>

                      <span className="text-[11px] font-mono text-neutral-500">
                        {item.readTime}
                      </span>
                    </div>

                    {/* Thinker Name & Treatise Title */}
                    <div>
                      <h3 className="text-3xl sm:text-4xl font-serif text-white font-medium tracking-tight group-hover:text-neutral-100 transition-colors">
                        {item.authorOrOrigin}
                      </h3>
                      <p className="text-xs font-mono text-neutral-500 mt-1">
                        {item.dateOrEra}
                      </p>
                    </div>

                    {/* Core Axiom Callout */}
                    <div className="relative rounded-2xl bg-white/[0.02] border border-white/[0.07] p-4 sm:p-5">
                      <div className="text-[9.5px] font-mono tracking-widest uppercase text-neutral-400 font-bold mb-1.5">
                        CORE AXIOM
                      </div>
                      <p className="text-base sm:text-lg font-serif italic text-white/95 leading-snug">
                        &ldquo;{item.coreAxiom}&rdquo;
                      </p>
                    </div>

                    {/* Discourse Excerpt Preview */}
                    <p className="text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed line-clamp-3">
                      {item.englishExcerpt}
                    </p>

                    {/* 4 Foundational Tenets (2-Column Micro Grid) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                      {item.coreTenets.slice(0, 4).map((tenet, tIdx) => (
                        <div
                          key={tIdx}
                          className="flex items-start gap-2 text-[11px] font-mono text-neutral-400 bg-white/[0.02] px-3 py-2 rounded-xl border border-white/5"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-neutral-300 shrink-0 mt-1.5" />
                          <span className="line-clamp-1">{tenet}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action Row: Tags & Clickable Trigger */}
                  <div className="relative z-10 pt-6 mt-6 border-t border-white/[0.08] flex items-center justify-between gap-4">
                    <div className="flex flex-wrap items-center gap-1.5">
                      {item.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-full bg-white/[0.03] text-[10px] font-mono text-neutral-400 border border-white/10"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOpenDossier(item);
                      }}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-mono text-xs font-bold tracking-wider uppercase group-hover:bg-neutral-200 transition-all duration-300 shadow-sm shrink-0 cursor-pointer"
                    >
                      <span>INSPECT</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>

          {/* Editorial Return Banner */}
          <div className="py-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h4 className="text-xl sm:text-2xl font-serif font-light text-white">
                Return to Engineering &amp; Architecture Deck
              </h4>
              <p className="text-xs sm:text-sm text-neutral-400 mt-1">
                Explore production architectures, distributed systems, and modern AI implementations.
              </p>
            </div>

            <Link
              href="/"
              onClick={() => soundFx.playTick()}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white hover:bg-neutral-200 text-black font-mono text-xs font-bold tracking-widest uppercase transition-transform hover:scale-105 shrink-0 shadow-md"
            >
              <span>EXPLORE PORTFOLIO</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>
        </main>
      )}
    </div>
  );
}
