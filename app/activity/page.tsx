"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  X,
  ChevronLeft,
  ChevronRight,
  Languages,
} from "lucide-react";
import { ACTIVITY_DATA, ActivityItem } from "@/data/activityData";
import { ActivityHeader } from "@/components/activity/ActivityHeader";
import { ArchivalBookShelf } from "@/components/activity/ArchivalBookShelf";
import { soundFx } from "@/utils/audio";
import { useActivityLanguage } from "@/context/ActivityLanguageContext";

export default function ActivityPage() {
  const { language } = useActivityLanguage();
  const [selectedAuthor, setSelectedAuthor] = useState<string>("all");
  const [activeDossier, setActiveDossier] = useState<ActivityItem | null>(null);
  const [translatedItemIds, setTranslatedItemIds] = useState<Record<string, boolean>>({});

  const toggleItemTranslation = (id: string, e?: React.MouseEvent) => {
    e?.stopPropagation();
    soundFx.playTick();
    setTranslatedItemIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const isItemHindi = (item: ActivityItem) =>
    language === "hi" || !!translatedItemIds[item.id];

  const getItemTitle = (item: ActivityItem) =>
    isItemHindi(item) && item.title_hi ? item.title_hi : item.title;

  const getItemAuthor = (item: ActivityItem) =>
    isItemHindi(item) && item.authorOrOrigin_hi ? item.authorOrOrigin_hi : item.authorOrOrigin;

  const getItemArchetype = (item: ActivityItem) =>
    isItemHindi(item) && item.archetype_hi ? item.archetype_hi : item.archetype;

  const getItemCoreAxiom = (item: ActivityItem) =>
    isItemHindi(item) && item.coreAxiom_hi ? item.coreAxiom_hi : item.coreAxiom;

  const getItemExcerpt = (item: ActivityItem) =>
    isItemHindi(item) && item.hindiExcerpt ? item.hindiExcerpt : item.englishExcerpt;

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
    { id: "all", label: language === "hi" ? "सभी विचारक (6)" : "All Thinkers (6)" },
    { id: "J. Krishnamurti", label: language === "hi" ? "I. जे. कृष्णमूर्ति" : "I. J. Krishnamurti" },
    { id: "U.G. Krishnamurti", label: language === "hi" ? "II. यू.जी. कृष्णमूर्ति" : "II. U.G. Krishnamurti" },
    { id: "Osho", label: language === "hi" ? "III. ओशो (रजनीश)" : "III. Osho" },
    { id: "Bhagat Singh", label: language === "hi" ? "IV. भगत सिंह" : "IV. Bhagat Singh" },
    { id: "Gautama Buddha", label: language === "hi" ? "V. गौतम बुद्ध" : "V. Gautama Buddha" },
    { id: "Charvaka", label: language === "hi" ? "VI. चार्वाक लोकायत" : "VI. Charvaka Lokayata" },
  ];

  const philosophyItems = ACTIVITY_DATA.filter((item) => item.category === "philosophy");

  const filteredItems = philosophyItems.filter((item) => {
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

  // Traversal within the 6 treatises
  const activeIndex = activeDossier
    ? philosophyItems.findIndex((i) => i.id === activeDossier.id)
    : -1;

  const prevThinker =
    activeIndex > 0 ? philosophyItems[activeIndex - 1] : null;
  const nextThinker =
    activeIndex !== -1 && activeIndex < philosophyItems.length - 1
      ? philosophyItems[activeIndex + 1]
      : null;

  const handlePrevDossier = () => {
    if (prevThinker) {
      soundFx.playTick();
      setActiveDossier(prevThinker);
      scrollToTop();
    }
  };

  const handleNextDossier = () => {
    if (nextThinker) {
      soundFx.playTick();
      setActiveDossier(nextThinker);
      scrollToTop();
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#f5f5f5] selection:bg-white selection:text-black font-sans antialiased relative">
      {/* Triple Category Navigation Header */}
      <ActivityHeader currentSection="philosophy" />

      {/* Atmospheric Monochrome Vignette */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.03)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.85)_100%)]" />
      </div>

      {activeDossier ? (
        /* ===================================================================== */
        /* MODE A: FULL DESKTOP ARCHIVAL BROADSHEET TREATISE (NO MODAL / NO CARDS) */
        /* ===================================================================== */
        <motion.div
          key={activeDossier.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="relative z-10 w-full min-h-screen pb-32"
        >
          {/* Top Sticky Treatise Broadsheet Navigation Bar */}
          <div className="sticky top-0 z-50 w-full backdrop-blur-2xl bg-black/85 border-b border-white/[0.08] px-4 sm:px-8 lg:px-12 py-3.5 transition-all">
            <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
              {/* Left: Return to Archive */}
              <button
                onClick={() => {
                  soundFx.playTick();
                  setActiveDossier(null);
                }}
                className="group inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-neutral-400 hover:text-white transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
                <span>{language === "hi" ? "संग्रह पर लौटें" : "RETURN TO ARCHIVE"}</span>
              </button>

              {/* Center: Folio Progress & Section */}
              <div className="flex items-center gap-2 text-[11px] font-mono tracking-widest text-neutral-400">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                <span className="uppercase text-white font-semibold">
                  FOLIO {activeDossier.numeral} / VI
                </span>
                <span className="text-neutral-600 hidden sm:inline">•</span>
                <span className="hidden sm:inline uppercase text-neutral-400">{getItemArchetype(activeDossier)}</span>
              </div>

              {/* Right: Language Toggle & Navigation */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => toggleItemTranslation(activeDossier.id)}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/15 hover:border-white/40 bg-white/[0.03] hover:bg-white/10 text-[11px] font-mono text-neutral-300 hover:text-white transition-all cursor-pointer"
                  title="Toggle Hindi / English"
                >
                  <Languages className="w-3 h-3 text-neutral-400" />
                  <span>{isItemHindi(activeDossier) ? "ENGLISH" : "हिन्दी"}</span>
                </button>

                <div className="flex items-center gap-1 border-l border-white/10 pl-2">
                  <button
                    onClick={handlePrevDossier}
                    disabled={!prevThinker}
                    className="w-7 h-7 rounded-full bg-white/[0.04] hover:bg-white hover:text-black disabled:opacity-20 disabled:cursor-not-allowed border border-white/10 flex items-center justify-center transition-all cursor-pointer"
                    title="Previous Thinker"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={handleNextDossier}
                    disabled={!nextThinker}
                    className="w-7 h-7 rounded-full bg-white/[0.04] hover:bg-white hover:text-black disabled:opacity-20 disabled:cursor-not-allowed border border-white/10 flex items-center justify-center transition-all cursor-pointer"
                    title="Next Thinker"
                  >
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => {
                      soundFx.playTick();
                      setActiveDossier(null);
                    }}
                    className="w-7 h-7 rounded-full bg-white/[0.08] hover:bg-white hover:text-black border border-white/20 flex items-center justify-center transition-all cursor-pointer ml-1"
                    title="Close"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Majestic Editorial Monograph Spread */}
          <article className="w-full max-w-5xl mx-auto px-4 sm:px-8 lg:px-12 pt-12 sm:pt-20">
            {/* 1. Hero Frontispiece: Centered Medallion & Dignified Masthead */}
            <header className="text-center space-y-8 pb-14 border-b border-white/[0.08]">
              {/* Archival Medallion Portrait */}
              {activeDossier.authorImage && (
                <div className="relative mx-auto w-32 h-32 sm:w-44 sm:h-44 rounded-full overflow-hidden border-2 border-white/20 p-1.5 bg-neutral-950 shadow-[0_0_60px_rgba(255,255,255,0.08),inset_0_2px_4px_rgba(255,255,255,0.2)]">
                  <div className="relative w-full h-full rounded-full overflow-hidden">
                    <Image
                      src={activeDossier.authorImage}
                      alt={activeDossier.authorOrOrigin}
                      fill
                      priority
                      sizes="(max-width: 640px) 128px, 176px"
                      className="object-cover grayscale contrast-125 brightness-95"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>
              )}

              {/* Metadata Folio Pill */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/15 bg-white/[0.02] text-[11px] font-mono tracking-[0.22em] uppercase text-neutral-400">
                <span className="font-bold text-white">{activeDossier.numeral}</span>
                <span className="text-neutral-600">•</span>
                <span>{getItemArchetype(activeDossier)}</span>
                <span className="text-neutral-600">•</span>
                <span>{activeDossier.dateOrEra}</span>
              </div>

              {/* Author Name */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-light text-white tracking-tight leading-[1.05]">
                {getItemAuthor(activeDossier)}
              </h1>

              {/* Treatise Title */}
              <p className="text-xl sm:text-2xl lg:text-3xl font-serif italic text-neutral-300 font-light max-w-2xl mx-auto leading-relaxed">
                {getItemTitle(activeDossier)}
              </p>

              {/* Read Time */}
              <p className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
                {activeDossier.readTime}
              </p>
            </header>

            {/* 2. Central Axiom: Monumental Pull-Quote */}
            <div className="my-14 sm:my-20 relative py-12 px-6 sm:px-12 rounded-3xl bg-gradient-to-b from-white/[0.04] to-transparent border border-white/[0.08] text-center overflow-hidden shadow-sm">
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-[180px] sm:text-[240px] text-white/[0.02] select-none pointer-events-none leading-none">
                &ldquo;
              </span>
              <div className="relative z-10 max-w-3xl mx-auto space-y-4">
                <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-neutral-400 font-bold block">
                  {isItemHindi(activeDossier)
                    ? "मौलिक दार्शनिक सूत्र (CENTRAL AXIOM)"
                    : "FOUNDATIONAL CORE AXIOM"}
                </span>
                <p className="text-2xl sm:text-3xl lg:text-4xl font-serif italic text-white font-normal leading-[1.35]">
                  &ldquo;{getItemCoreAxiom(activeDossier)}&rdquo;
                </p>
              </div>
            </div>

            {/* 3. Original Sutra / Recorded Discourse Box */}
            {activeDossier.originalText && (
              <div className="my-12 p-8 sm:p-12 rounded-3xl bg-[#09090b] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative overflow-hidden space-y-5">
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-400 font-bold">
                    {isItemHindi(activeDossier)
                      ? "मूल ऐतिहासिक सूत्र / संकलित संवाद"
                      : "ORIGINAL HISTORICAL RECORD / PRIMARY SUTRA"}
                  </span>
                  <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest hidden sm:inline">
                    ARCHIVAL TRANSCRIPTION
                  </span>
                </div>
                <p className="text-xl sm:text-2xl font-serif text-neutral-100 leading-relaxed font-normal whitespace-pre-line">
                  {activeDossier.originalText}
                </p>
                {activeDossier.transliteration && (
                  <p className="text-xs sm:text-sm font-mono text-neutral-400 pt-4 border-t border-white/[0.06] italic leading-relaxed">
                    {activeDossier.transliteration}
                  </p>
                )}
              </div>
            )}

            {/* 4. Primary Unabridged Translation Excerpt */}
            <div className="my-16 max-w-3xl mx-auto space-y-6">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-400 font-bold block text-center">
                {isItemHindi(activeDossier) ? "प्रामाणिक अनअब्रिज्ड अनुवाद" : "PRIMARY UNABRIDGED TRANSLATION"}
              </span>
              <div className="text-2xl sm:text-3xl font-serif italic text-neutral-100 leading-[1.85] text-left sm:text-justify font-light">
                <p className="whitespace-pre-line">&ldquo;{getItemExcerpt(activeDossier)}&rdquo;</p>
              </div>
            </div>

            {/* Live Archival Bibliography & Works via Open Library */}
            <ArchivalBookShelf
              author={activeDossier.authorOrOrigin}
              language={language}
            />

            {/* 5. Colophon Delimiter */}
            <div className="py-12 flex items-center justify-center gap-3 text-neutral-600 select-none">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-700" />
              <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-700" />
            </div>

            {/* 6. Folio Navigation Tiles */}
            <footer className="pt-10 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 gap-6">
              {prevThinker && (
                <button
                  onClick={handlePrevDossier}
                  className="group p-6 sm:p-8 rounded-3xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.08] hover:border-white/20 transition-all text-left flex items-center justify-between cursor-pointer"
                >
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-500 block">
                      ← {language === "hi" ? "पिछला ग्रंथ" : "PREVIOUS FOLIO"}
                    </span>
                    <h4 className="text-xl sm:text-2xl font-serif text-white group-hover:text-neutral-200">
                      {getItemAuthor(prevThinker)}
                    </h4>
                    <p className="text-xs font-mono text-neutral-400">
                      {getItemArchetype(prevThinker)}
                    </p>
                  </div>
                  <ChevronLeft className="w-6 h-6 text-neutral-500 group-hover:text-white transition-colors" />
                </button>
              )}

              {nextThinker && (
                <button
                  onClick={handleNextDossier}
                  className="group p-6 sm:p-8 rounded-3xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.08] hover:border-white/20 transition-all text-right flex items-center justify-between cursor-pointer"
                >
                  <ChevronRight className="w-6 h-6 text-neutral-500 group-hover:text-white transition-colors" />
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-500 block">
                      {language === "hi" ? "अगला ग्रंथ" : "NEXT FOLIO"} →
                    </span>
                    <h4 className="text-xl sm:text-2xl font-serif text-white group-hover:text-neutral-200">
                      {getItemAuthor(nextThinker)}
                    </h4>
                    <p className="text-xs font-mono text-neutral-400">
                      {getItemArchetype(nextThinker)}
                    </p>
                  </div>
                </button>
              )}
            </footer>
          </article>
        </motion.div>
      ) : (
        /* ===================================================================== */
        /* MODE B: ALL 6 PHILOSOPHERS OVERVIEW - REFINED EDITORIAL GALLERY       */
        /* ===================================================================== */
        <main className="relative z-10 w-full max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-12 py-10 sm:py-16">
          {/* Minimalist Hero Section */}
          <div className="border-b border-white/[0.08] pb-10 sm:pb-14 mb-10 sm:mb-14">
            <div className="max-w-4xl space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.02] text-neutral-400 font-mono text-[11px] tracking-widest uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
                <span>
                  {language === "hi"
                    ? "दार्शनिक एकांत • भारतीय दर्शन"
                    : "INTELLECTUAL SANCTUARY • INDIAN DARSHANA"}
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white font-serif leading-[1.08]">
                {language === "hi" ? (
                  <>
                    भारतीय दर्शन एवं <br />
                    <span className="font-serif italic font-normal text-neutral-300">
                      क्रांतिकारी मीमांसा
                    </span>
                  </>
                ) : (
                  <>
                    Indian Philosophy &amp; <br />
                    <span className="font-serif italic font-normal text-neutral-300">
                      Radical Darshana
                    </span>
                  </>
                )}
              </h1>

              <p className="max-w-2xl text-base sm:text-lg font-serif text-neutral-400 leading-relaxed font-normal">
                {language === "hi"
                  ? "06 महान विचारक, अन्वेषक एवं लोकायत तर्कवादी जिन्होंने रूढ़ियों, धार्मिक भ्रमों और मनोवैज्ञानिक अनुकूलन को ध्वस्त किया।"
                  : "06 Legendary Iconoclasts, Seekers & Materialist Rationalists who dismantled dogmatic authority, theological illusions, and psychological conditioning."}
              </p>
            </div>

            {/* Master Switch Filter Bar */}
            <div className="mt-10 pt-6 border-t border-white/[0.06] flex flex-wrap items-center gap-2">
              {philosophers.map((phil) => (
                <button
                  key={phil.id}
                  onClick={() => {
                    soundFx.playTick();
                    setSelectedAuthor(phil.id);
                  }}
                  className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                    selectedAuthor === phil.id
                      ? "bg-white text-black font-semibold shadow-xs"
                      : "bg-white/[0.02] hover:bg-white/[0.06] text-neutral-400 hover:text-white border border-white/[0.08]"
                  }`}
                >
                  {phil.label}
                </button>
              ))}
            </div>
          </div>

          {/* The 6 Refined Editorial Cards (Spacious, Uncluttered, Premium) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-20">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, idx) => (
                <motion.article
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.35, delay: idx * 0.04 }}
                  onClick={() => handleOpenDossier(item)}
                  className="group relative rounded-3xl bg-[#09090b]/90 hover:bg-[#0d0d10] border border-white/[0.08] hover:border-white/25 p-7 sm:p-9 transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden shadow-xs hover:shadow-xl"
                >
                  <div className="space-y-6">
                    {/* Top Meta Line: Numeral + Archetype + Inline Translator */}
                    <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400 border-b border-white/[0.06] pb-4">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-white">{item.numeral}</span>
                        <span className="text-neutral-600">•</span>
                        <span className="tracking-widest uppercase">{getItemArchetype(item)}</span>
                      </div>

                      <div className="flex items-center gap-3">
                        <button
                          onClick={(e) => toggleItemTranslation(item.id, e)}
                          className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-white/[0.04] hover:bg-white/15 border border-white/10 text-neutral-300 hover:text-white transition-all cursor-pointer"
                          title="Toggle Hindi / English"
                        >
                          {isItemHindi(item) ? "EN" : "हिन्दी"}
                        </button>
                        <span className="text-neutral-500">{item.readTime}</span>
                      </div>
                    </div>

                    {/* Thinker Name, Era & Archival Portrait */}
                    <div className="flex items-start justify-between gap-5">
                      <div className="space-y-1.5">
                        <h3 className="text-2xl sm:text-3xl font-serif text-white font-normal tracking-tight group-hover:text-neutral-200 transition-colors">
                          {getItemAuthor(item)}
                        </h3>
                        <p className="text-xs font-mono text-neutral-500">
                          {item.dateOrEra}
                        </p>
                      </div>

                      {item.authorImage && (
                        <div className="relative w-16 h-20 sm:w-20 sm:h-24 shrink-0 rounded-2xl overflow-hidden border border-white/15 bg-neutral-900 group-hover:border-white/40 transition-all duration-500 shadow-md">
                          <Image
                            src={item.authorImage}
                            alt={item.authorOrOrigin}
                            fill
                            sizes="(max-width: 640px) 64px, 80px"
                            className="object-cover grayscale contrast-125 brightness-95 group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      )}
                    </div>

                    {/* Pure Quotation: Core Axiom (Clean, Unboxed Typography) */}
                    <div className="pt-2">
                      <p className="text-base sm:text-lg font-serif italic text-neutral-300 leading-relaxed">
                        &ldquo;{getItemCoreAxiom(item)}&rdquo;
                      </p>
                    </div>
                  </div>

                  {/* Subtle Bottom Link */}
                  <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-neutral-400 group-hover:text-neutral-200 transition-colors">
                    <span className="tracking-wider">
                      {isItemHindi(item) ? "विस्तृत ग्रंथ पढ़ें" : "Read Treatise"}
                    </span>
                    <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-white transition-transform group-hover:translate-x-1" />
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        </main>
      )}
    </div>
  );
}
