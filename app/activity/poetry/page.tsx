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

export default function PoetryPage() {
  const { language } = useActivityLanguage();
  const [selectedPoet, setSelectedPoet] = useState<string>("all");
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

  const poets = [
    { id: "all", label: language === "hi" ? "सभी 5 कवि" : "All Poets (5)" },
    { id: "Ghalib", label: language === "hi" ? "I. मिर्ज़ा ग़ालिब" : "I. Mirza Ghalib" },
    { id: "Faiz", label: language === "hi" ? "II. फ़ैज़ अहमद फ़ैज़" : "II. Faiz Ahmad Faiz" },
    { id: "Jaun", label: language === "hi" ? "III. जौन एलिया" : "III. Jaun Elia" },
    { id: "Iqbal", label: language === "hi" ? "IV. अल्लामा इक़बाल" : "IV. Allama Iqbal" },
    { id: "Frost", label: language === "hi" ? "V. रॉबर्ट फ्रॉस्ट" : "V. Robert Frost" },
  ];

  const poetryItems = ACTIVITY_DATA.filter((item) => item.category === "poetry");

  const filteredItems = poetryItems.filter((item) => {
    if (selectedPoet === "all") return true;
    return item.authorOrOrigin.toLowerCase().includes(selectedPoet.toLowerCase());
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

  const activeIndex = activeDossier
    ? poetryItems.findIndex((i) => i.id === activeDossier.id)
    : -1;

  const prevPoet =
    activeIndex > 0 ? poetryItems[activeIndex - 1] : null;
  const nextPoet =
    activeIndex !== -1 && activeIndex < poetryItems.length - 1
      ? poetryItems[activeIndex + 1]
      : null;

  const handlePrevDossier = () => {
    if (prevPoet) {
      soundFx.playTick();
      setActiveDossier(prevPoet);
      scrollToTop();
    }
  };

  const handleNextDossier = () => {
    if (nextPoet) {
      soundFx.playTick();
      setActiveDossier(nextPoet);
      scrollToTop();
    }
  };

  return (
    <div className="activity-shell relative min-h-screen overflow-x-hidden bg-[#070709] text-neutral-100 antialiased selection:bg-white selection:text-black">
      <ActivityHeader currentSection="poetry" />

      {/* Atmospheric Monochrome Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.03)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.85)_100%)]" />
      </div>

      {activeDossier ? (
        /* ===================================================================== */
        /* MODE A: FULL DESKTOP ARCHIVAL BROADSHEET VERSE VIEW                   */
        /* ===================================================================== */
        <motion.div
          key={activeDossier.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="relative z-10 w-full min-h-screen pb-32"
        >
          {/* Top Sticky Verse Navigation Bar */}
          <div className="sticky top-0 z-50 w-full backdrop-blur-2xl bg-black/85 border-b border-white/[0.08] px-4 sm:px-6 lg:px-4 py-3.5 transition-all">
            <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
              {/* Left: Return to Archive */}
              <button
                onClick={() => {
                  soundFx.playTick();
                  setActiveDossier(null);
                  scrollToTop();
                }}
                className="group inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-neutral-400 hover:text-white transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
                <span>{language === "hi" ? "काव्य संग्रह पर लौटें" : "RETURN TO POETRY"}</span>
              </button>

              {/* Center: Verse Progress */}
              <div className="flex items-center gap-2 text-[11px] font-mono tracking-widest text-neutral-400">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                <span className="uppercase text-white font-semibold">
                  FOLIO {activeDossier.numeral} / V
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
                    disabled={!prevPoet}
                    className="w-7 h-7 rounded-full bg-white/[0.04] hover:bg-white hover:text-black disabled:opacity-20 disabled:cursor-not-allowed border border-white/10 flex items-center justify-center transition-all cursor-pointer"
                    title="Previous Poet"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={handleNextDossier}
                    disabled={!nextPoet}
                    className="w-7 h-7 rounded-full bg-white/[0.04] hover:bg-white hover:text-black disabled:opacity-20 disabled:cursor-not-allowed border border-white/10 flex items-center justify-center transition-all cursor-pointer"
                    title="Next Poet"
                  >
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => {
                      soundFx.playTick();
                      setActiveDossier(null);
                      scrollToTop();
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
          <article className="mx-auto w-full max-w-none px-4 pt-12 sm:px-6 sm:pt-20 lg:px-0">
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
                      className="object-cover object-top grayscale contrast-125 brightness-95"
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

              {/* Poet Name */}
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

            {/* 2. Central Poetic Axiom: Monumental Pull-Quote */}
            <div className="my-14 sm:my-20 relative py-12 px-6 sm:px-12 rounded-3xl bg-gradient-to-b from-white/[0.04] to-transparent border border-white/[0.08] text-center overflow-hidden shadow-sm">
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-[180px] sm:text-[240px] text-white/[0.02] select-none pointer-events-none leading-none">
                &ldquo;
              </span>
              <div className="relative z-10 max-w-3xl mx-auto space-y-4">
                <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-neutral-400 font-bold block">
                  {isItemHindi(activeDossier)
                    ? "काव्य का मूल सूत्र (CENTRAL AXIOM)"
                    : "CENTRAL POETIC AXIOM"}
                </span>
                <p className="text-2xl sm:text-3xl lg:text-4xl font-serif italic text-white font-normal leading-[1.35]">
                  &ldquo;{getItemCoreAxiom(activeDossier)}&rdquo;
                </p>
              </div>
            </div>

            {/* 3. Archival Calligraphic / Original Verse Plate */}
            {activeDossier.originalText && (
              <div className="mx-auto my-12 max-w-5xl p-8 sm:p-12 rounded-3xl bg-[#09090b] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative overflow-hidden space-y-5">
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-400 font-bold">
                    {isItemHindi(activeDossier) ? "मूल रचना / सुलेखीय अभिलेख" : "ORIGINAL SCRIPT / CALLIGRAPHIC RECORD"}
                  </span>
                  <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest hidden sm:inline">
                    ARCHIVAL VERSE
                  </span>
                </div>
                <p className="text-2xl sm:text-3xl font-serif text-white leading-loose whitespace-pre-line text-right" dir="rtl">
                  {activeDossier.originalText}
                </p>
                {activeDossier.transliteration && (
                  <p className="text-xs sm:text-sm font-mono text-neutral-400 pt-4 border-t border-white/[0.06] italic leading-relaxed">
                    {activeDossier.transliteration}
                  </p>
                )}
              </div>
            )}

            {/* 4. Primary Translation Excerpt */}
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
              {prevPoet && (
                <button
                  onClick={handlePrevDossier}
                  className="group p-6 sm:p-8 rounded-3xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.08] hover:border-white/20 transition-all text-left flex items-center justify-between cursor-pointer"
                >
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-500 block">
                      ← {language === "hi" ? "पिछला कवि" : "PREVIOUS POET"}
                    </span>
                    <h4 className="text-xl sm:text-2xl font-serif text-white group-hover:text-neutral-200">
                      {getItemAuthor(prevPoet)}
                    </h4>
                    <p className="text-xs font-mono text-neutral-400">
                      {getItemArchetype(prevPoet)}
                    </p>
                  </div>
                  <ChevronLeft className="w-6 h-6 text-neutral-500 group-hover:text-white transition-colors" />
                </button>
              )}

              {nextPoet && (
                <button
                  onClick={handleNextDossier}
                  className="group p-6 sm:p-8 rounded-3xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.08] hover:border-white/20 transition-all text-right flex items-center justify-between cursor-pointer"
                >
                  <ChevronRight className="w-6 h-6 text-neutral-500 group-hover:text-white transition-colors" />
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-500 block">
                      {language === "hi" ? "अगला कवि" : "NEXT POET"} →
                    </span>
                    <h4 className="text-xl sm:text-2xl font-serif text-white group-hover:text-neutral-200">
                      {getItemAuthor(nextPoet)}
                    </h4>
                    <p className="text-xs font-mono text-neutral-400">
                      {getItemArchetype(nextPoet)}
                    </p>
                  </div>
                </button>
              )}
            </footer>
          </article>
        </motion.div>
      ) : (
        /* ===================================================================== */
        /* MODE B: ALL POETS OVERVIEW - REFINED EDITORIAL GALLERY                */
        /* ===================================================================== */
        <main className="relative z-10 mx-auto w-full max-w-none px-4 py-10 sm:px-6 sm:py-16 lg:px-0">
          {/* Minimalist Hero Section */}
          <div className="border-b border-white/[0.08] pb-10 sm:pb-14 mb-10 sm:mb-14">
            <div className="max-w-4xl space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.02] text-neutral-400 font-mono text-[11px] tracking-widest uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
                <span>
                  {language === "hi"
                    ? "दार्शनिक एकांत • काव्य एवं पद्य"
                    : "INTELLECTUAL SANCTUARY • POETRY & VERSE"}
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white font-serif leading-[1.08]">
                {language === "hi" ? (
                  <>
                    काव्य, रूपक एवं <br />
                    <span className="font-serif italic font-normal text-neutral-300">
                      अस्तित्व का रहस्य
                    </span>
                  </>
                ) : (
                  <>
                    Poetry, Metaphor &amp; <br />
                    <span className="font-serif italic font-normal text-neutral-300">
                      Ontological Irony
                    </span>
                  </>
                )}
              </h1>

              <p className="max-w-2xl text-base sm:text-lg font-serif text-neutral-400 leading-relaxed font-normal">
                {language === "hi"
                  ? "05 कालजयी कवि जिन्होंने अस्तित्व के विरोधाभास, संप्रभु इच्छाशक्ति और मानवीय वेदना को अमर छंदों में पिरोया।"
                  : "05 Master Poets who captured the existential paradox of existence, sovereign agency, and the quiet dignity of chosen paths."}
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="mt-10 pt-6 border-t border-white/[0.06] flex flex-wrap items-center gap-2">
              {poets.map((poet) => (
                <button
                  key={poet.id}
                  onClick={() => {
                    soundFx.playTick();
                    setSelectedPoet(poet.id);
                  }}
                  className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                    selectedPoet === poet.id
                      ? "bg-white text-black font-semibold shadow-xs"
                      : "bg-white/[0.02] hover:bg-white/[0.06] text-neutral-400 hover:text-white border border-white/[0.08]"
                  }`}
                >
                  {poet.label}
                </button>
              ))}
            </div>
          </div>

          {/* Grid of Poetry Tablets (Spacious, Uncluttered, Premium) */}
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
                    {/* Top Meta Line */}
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

                    {/* Poet Name, Era & Archival Portrait */}
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
                            className="object-cover object-top grayscale contrast-125 brightness-95 group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      )}
                    </div>

                    {/* Pure Poetic Axiom Quotation */}
                    <div className="pt-2">
                      <p className="text-base sm:text-lg font-serif italic text-neutral-300 leading-relaxed">
                        &ldquo;{getItemCoreAxiom(item)}&rdquo;
                      </p>
                    </div>
                  </div>

                  {/* Subtle Bottom Link */}
                  <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-neutral-400 group-hover:text-neutral-200 transition-colors">
                    <span className="tracking-wider">
                      {isItemHindi(item) ? "विस्तृत काव्य पढ़ें" : "Read Complete Verse"}
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
