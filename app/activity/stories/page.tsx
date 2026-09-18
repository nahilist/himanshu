"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  ArrowRight,
  ArrowLeft,
  X,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Quote,
} from "lucide-react";
import { ACTIVITY_DATA, ActivityItem } from "@/data/activityData";
import { ActivityHeader } from "@/components/activity/ActivityHeader";
import { soundFx } from "@/utils/audio";

export default function StoriesPage() {
  const [selectedAuthor, setSelectedAuthor] = useState<string>("all");
  const [activeDossier, setActiveDossier] = useState<ActivityItem | null>(null);

  const storiesItems = ACTIVITY_DATA.filter((item) => item.category === "stories");

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

  const authors = [
    { id: "all", label: "All Authors (5)" },
    { id: "Kafka", label: "I. Franz Kafka" },
    { id: "Borges", label: "II. Jorge Luis Borges" },
    { id: "Dostoevsky", label: "III. Fyodor Dostoevsky" },
    { id: "Manto", label: "IV. Saadat Hasan Manto" },
    { id: "Premchand", label: "V. Munshi Premchand" },
  ];

  const filteredItems = storiesItems.filter((item) => {
    if (selectedAuthor === "all") return true;
    return item.authorOrOrigin.toLowerCase().includes(selectedAuthor.toLowerCase());
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
    const currentIndex = storiesItems.findIndex((i) => i.id === activeDossier.id);
    const nextItem = storiesItems[(currentIndex + 1) % storiesItems.length];
    soundFx.playTick();
    setActiveDossier(nextItem);
    scrollToTop();
  };

  const handlePrevDossier = () => {
    if (!activeDossier) return;
    const currentIndex = storiesItems.findIndex((i) => i.id === activeDossier.id);
    const prevItem = storiesItems[(currentIndex - 1 + storiesItems.length) % storiesItems.length];
    soundFx.playTick();
    setActiveDossier(prevItem);
    scrollToTop();
  };

  const activeIndex = activeDossier ? storiesItems.findIndex((i) => i.id === activeDossier.id) : -1;
  const prevItem = activeIndex !== -1 ? storiesItems[(activeIndex - 1 + storiesItems.length) % storiesItems.length] : null;
  const nextItem = activeIndex !== -1 ? storiesItems[(activeIndex + 1) % storiesItems.length] : null;

  return (
    <div className="relative min-h-screen w-full bg-[#050505] text-white selection:bg-white selection:text-black">
      {/* 1. ARCHITECTURAL BACKGROUND (PURE MONOCHROME SPECULAR TEXTURE) */}
      <div className="fixed inset-0 bg-[radial-gradient(#262626_1px,transparent_1px)] [background-size:32px_32px] opacity-35 pointer-events-none" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-b from-white/[0.04] via-white/[0.015] to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* 2. PERSISTENT EDITORIAL HEADER (Overview Mode) */}
      {!activeDossier && <ActivityHeader currentSection="stories" />}

      {/* ===================================================================== */}
      {/* MODE A: FULL DESKTOP IMMERSIVE STORY TREATISE VIEW                    */}
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
            {/* Left: Back to Stories & Direct Portfolio Link */}
            <div className="flex items-center gap-2.5">
              <button
                onClick={() => {
                  soundFx.playTick();
                  setActiveDossier(null);
                  scrollToTop();
                }}
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 hover:border-white bg-white/[0.04] hover:bg-white text-xs font-mono tracking-wider text-neutral-300 hover:text-black transition-all cursor-pointer shadow-xs"
              >
                <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1 text-neutral-400 group-hover:text-black" />
                <span>← ALL STORIES</span>
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

            {/* Center: Story Progress Badge */}
            <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-neutral-400">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span className="font-semibold text-white uppercase tracking-wider">
                PARABLE 0{activeIndex + 1} OF 05
              </span>
              <span className="text-neutral-600">•</span>
              <span className="text-neutral-400">{activeDossier.authorOrOrigin}</span>
            </div>

            {/* Right: Quick Next / Prev & Close Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrevDossier}
                className="w-9 h-9 rounded-full bg-white/[0.06] hover:bg-white hover:text-black border border-white/10 flex items-center justify-center transition-all cursor-pointer"
                title="Previous Story"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNextDossier}
                className="w-9 h-9 rounded-full bg-white/[0.06] hover:bg-white hover:text-black border border-white/10 flex items-center justify-center transition-all cursor-pointer"
                title="Next Story"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => {
                  soundFx.playTick();
                  setActiveDossier(null);
                  scrollToTop();
                }}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white hover:text-black border border-white/20 flex items-center justify-center transition-all cursor-pointer ml-2"
                title="Close and Return"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Expansive Broadsheet Content Spread */}
          <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 pt-8 sm:pt-14 space-y-12 sm:space-y-16">
            {/* Masthead Header with Grand Archival Portrait */}
            <div className="border-b border-white/10 pb-10 sm:pb-14">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Text Column */}
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
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

                  <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-serif font-light text-white tracking-tight leading-[1.04]">
                    {activeDossier.authorOrOrigin}
                  </h1>
                  <p className="text-lg sm:text-2xl font-serif text-neutral-400 mt-2 max-w-4xl leading-snug">
                    {activeDossier.title}
                  </p>
                </div>

                {/* Right: Grand Archival Portrait */}
                {activeDossier.authorImage && (
                  <div className="lg:col-span-4 flex justify-start lg:justify-end">
                    <div className="relative group w-44 h-56 sm:w-52 sm:h-64 rounded-3xl overflow-hidden border border-white/20 bg-neutral-950 p-1.5 shadow-[0_20px_50px_rgba(0,0,0,0.8),inset_0_1px_2px_rgba(255,255,255,0.2)]">
                      <div className="relative w-full h-full rounded-[22px] overflow-hidden">
                        <Image
                          src={activeDossier.authorImage}
                          alt={activeDossier.authorOrOrigin}
                          fill
                          priority
                          sizes="(max-width: 640px) 176px, 208px"
                          className="object-cover grayscale contrast-125 brightness-95 group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                        <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-[10px] font-mono text-neutral-300 px-2 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/10">
                          <span className="uppercase font-bold tracking-wider">{activeDossier.archetype}</span>
                          <span className="text-neutral-400">{activeDossier.numeral}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Core Axiom Banner */}
              <div className="mt-8 p-6 sm:p-8 rounded-3xl bg-[#0a0a0c] border border-white/15 relative overflow-hidden">
                <div className="flex items-start gap-4">
                  <Quote className="w-8 h-8 text-neutral-500 shrink-0 mt-1" />
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-400 font-bold block">
                      CENTRAL PARABOLIC AXIOM
                    </span>
                    <p className="text-xl sm:text-2xl lg:text-3xl font-serif italic text-white leading-relaxed">
                      &ldquo;{activeDossier.coreAxiom}&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Two-Column Editorial Broadsheet Spread */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              {/* Left Column: Parable Excerpt */}
              <div className="lg:col-span-7 space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 uppercase tracking-widest">
                    <span className="w-1.5 h-1.5 rounded-full bg-white" />
                    <span>CANONICAL EXCERPT &amp; NARRATIVE CORE</span>
                  </div>

                  <div className="p-8 sm:p-10 rounded-3xl bg-[#0a0a0c] border border-white/15 space-y-4 font-serif text-lg sm:text-xl text-neutral-200 leading-relaxed italic shadow-inner">
                    <p className="whitespace-pre-line">&ldquo;{activeDossier.englishExcerpt}&rdquo;</p>
                  </div>
                </div>

                {/* Thematic Tags */}
                <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-2">
                  {activeDossier.tags.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full bg-white/[0.04] text-xs font-mono text-neutral-400 border border-white/10"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: Tenets & Engineering Synthesis */}
              <div className="lg:col-span-5 space-y-8">
                {/* 4 Epistemic Tenets */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 uppercase tracking-widest">
                    <span className="w-1.5 h-1.5 rounded-full bg-white" />
                    <span>04 PHILOSOPHICAL &amp; ARCHITECTURAL TENETS</span>
                  </div>

                  <div className="space-y-3">
                    {activeDossier.coreTenets.map((tenet, idx) => (
                      <div
                        key={idx}
                        className="p-5 rounded-2xl bg-[#0a0a0c] border border-white/10 space-y-1 hover:border-white/25 transition-colors"
                      >
                        <span className="text-[10px] font-mono text-neutral-500 font-bold">
                          TENET 0{idx + 1}
                        </span>
                        <p className="text-xs sm:text-sm font-serif text-neutral-200 leading-relaxed">
                          {tenet}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Engineering & Systems Reflection */}
                <div className="space-y-4 pt-6 border-t border-white/10">
                  <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 uppercase tracking-widest">
                    <span className="w-1.5 h-1.5 rounded-full bg-white" />
                    <span>SYSTEMS EPISTEMOLOGY &amp; COGNITIVE RESONANCE</span>
                  </div>

                  <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/10">
                    <p className="text-sm sm:text-base font-serif text-neutral-300 leading-relaxed font-normal">
                      {activeDossier.reflection}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Next / Prev Nav Tiles */}
            <div className="pt-12 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {prevItem && (
                <button
                  onClick={handlePrevDossier}
                  className="group p-6 sm:p-8 rounded-3xl bg-[#0a0a0c] border border-white/10 hover:border-white/35 transition-all text-left flex items-center justify-between cursor-pointer"
                >
                  <ChevronLeft className="w-6 h-6 text-neutral-500 group-hover:text-white transition-colors" />
                  <div className="space-y-1 text-right">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-500 block">
                      ← PREVIOUS PARABLE
                    </span>
                    <h4 className="text-xl sm:text-2xl font-serif text-white group-hover:text-neutral-200">
                      {prevItem.authorOrOrigin}
                    </h4>
                  </div>
                </button>
              )}

              {nextItem && (
                <button
                  onClick={handleNextDossier}
                  className="group p-6 sm:p-8 rounded-3xl bg-[#0a0a0c] border border-white/10 hover:border-white/35 transition-all text-right flex items-center justify-between cursor-pointer sm:col-start-2"
                >
                  <div className="space-y-1 text-left">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-500 block">
                      NEXT PARABLE →
                    </span>
                    <h4 className="text-xl sm:text-2xl font-serif text-white group-hover:text-neutral-200">
                      {nextItem.authorOrOrigin}
                    </h4>
                  </div>
                  <ChevronRight className="w-6 h-6 text-neutral-500 group-hover:text-white transition-colors" />
                </button>
              )}
            </div>

            {/* Bottom Return Button */}
            <div className="pt-6 flex justify-center">
              <button
                onClick={() => {
                  soundFx.playTick();
                  setActiveDossier(null);
                  scrollToTop();
                }}
                className="px-8 py-3.5 rounded-full bg-white hover:bg-neutral-200 text-black font-mono text-xs font-bold tracking-widest uppercase transition-transform hover:scale-105 cursor-pointer shadow-md"
              >
                RETURN TO ALL 05 STORIES
              </button>
            </div>
          </div>
        </motion.div>
      ) : (
        /* ===================================================================== */
        /* MODE B: ALL 5 STORIES OVERVIEW GRID                                   */
        /* ===================================================================== */
        <main className="relative z-10 w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-10 sm:py-16">
          {/* Hero Section */}
          <div className="border-b border-white/10 pb-12 sm:pb-16 mb-12 sm:mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              <div className="lg:col-span-8 space-y-6">
                <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/15 bg-white/[0.03] text-neutral-300 font-mono text-[11px] tracking-widest uppercase shadow-2xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  <span>INTELLECTUAL SANCTUARY • STORIES &amp; PARABLES</span>
                </div>

                <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight text-white font-serif leading-[1.04]">
                  Stories, Parables &amp; <br />
                  <span className="font-serif italic font-normal text-neutral-300">
                    Existential Dilemmas
                  </span>
                </h1>

                <p className="max-w-2xl text-base sm:text-xl font-serif text-neutral-300 leading-relaxed font-normal">
                  Labyrinths of infinity, the tragedy of awaited permission, and the rebellion of human will. Parables from Kafka, Borges, Dostoevsky, Manto, and Premchand.
                </p>
              </div>

              {/* Right Emblem */}
              <div className="lg:col-span-4 flex justify-center lg:justify-end">
                <div className="relative w-52 h-52 sm:w-60 sm:h-60 flex items-center justify-center select-none">
                  <div className="absolute inset-0 rounded-full border border-dashed border-white/20 animate-[spin_60s_linear_infinite]" />
                  <div className="absolute inset-6 rounded-full border border-white/10 animate-[spin_40s_linear_infinite_reverse]" />
                  <div className="relative w-28 h-28 rounded-full bg-neutral-950 border border-white/30 shadow-[0_0_40px_rgba(255,255,255,0.06),inset_0_1px_2px_rgba(255,255,255,0.2)] flex flex-col items-center justify-center text-center p-2">
                    <BookOpen className="w-6 h-6 text-white stroke-[1.5] mb-1" />
                    <span className="text-[8.5px] font-mono tracking-widest text-neutral-400 uppercase font-bold">
                      NAHILIST
                    </span>
                    <span className="text-[7.5px] font-mono text-neutral-500 uppercase">
                      STORIES
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Filter Bar */}
            <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center gap-2 sm:gap-2.5">
              {authors.map((a) => (
                <button
                  key={a.id}
                  onClick={() => {
                    soundFx.playTick();
                    setSelectedAuthor(a.id);
                  }}
                  className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                    selectedAuthor === a.id
                      ? "bg-white text-black font-bold shadow-[0_4px_20px_rgba(255,255,255,0.2)] scale-[1.02]"
                      : "bg-white/[0.03] hover:bg-white/[0.08] text-neutral-400 hover:text-white border border-white/10"
                  }`}
                >
                  {a.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tablets Grid */}
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
                  <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />
                  <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-white/[0.03] group-hover:bg-white/[0.06] blur-3xl transition-all duration-500 pointer-events-none" />

                  <div className="relative z-10 space-y-6">
                    <div className="flex items-center justify-between gap-3 border-b border-white/[0.08] pb-4">
                      <div className="flex items-center gap-2.5">
                        <span className="w-8 h-8 rounded-full bg-white/[0.06] border border-white/15 text-white font-mono text-xs font-bold flex items-center justify-center">
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

                    {/* Thinker Name & Treatise Title with Portrait */}
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-1">
                        <h3 className="text-3xl sm:text-4xl font-serif text-white font-medium tracking-tight group-hover:text-neutral-100 transition-colors">
                          {item.authorOrOrigin}
                        </h3>
                        <p className="text-xs font-mono text-neutral-500">
                          {item.dateOrEra}
                        </p>
                      </div>

                      {item.authorImage && (
                        <div className="relative w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-2xl overflow-hidden border border-white/20 bg-neutral-900 group-hover:border-white/50 group-hover:scale-105 transition-all duration-500 shadow-md">
                          <Image
                            src={item.authorImage}
                            alt={item.authorOrOrigin}
                            fill
                            sizes="(max-width: 640px) 64px, 80px"
                            className="object-cover grayscale contrast-125 brightness-95 group-hover:contrast-110 group-hover:brightness-105 transition-all duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                        </div>
                      )}
                    </div>

                    {/* Core Axiom */}
                    <div className="relative rounded-2xl bg-white/[0.02] border border-white/[0.07] p-4 sm:p-5">
                      <div className="text-[9.5px] font-mono tracking-widest uppercase text-neutral-400 font-bold mb-1.5">
                        CENTRAL PARABOLIC AXIOM
                      </div>
                      <p className="text-base sm:text-lg font-serif italic text-white/95 leading-snug">
                        &ldquo;{item.coreAxiom}&rdquo;
                      </p>
                    </div>

                    {/* Excerpt */}
                    <p className="text-xs sm:text-sm text-neutral-400 font-serif leading-relaxed line-clamp-3 italic">
                      &ldquo;{item.englishExcerpt}&rdquo;
                    </p>

                    {/* 4 Tenets */}
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

                  {/* Bottom Action Row */}
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

          {/* Navigation to Other Sections */}
          <div className="py-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
            <Link
              href="/activity/poetry"
              onClick={() => soundFx.playTick()}
              className="inline-flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>PREVIOUS: POETRY &amp; VERSE</span>
            </Link>

            <Link
              href="/activity"
              onClick={() => soundFx.playTick()}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white hover:bg-neutral-200 text-black font-mono text-xs font-bold tracking-widest uppercase transition-transform hover:scale-105 shrink-0 shadow-md"
            >
              <span>EXPLORE INDIAN PHILOSOPHY</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </main>
      )}
    </div>
  );
}
