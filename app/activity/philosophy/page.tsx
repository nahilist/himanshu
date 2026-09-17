"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Compass, ArrowUpRight } from "lucide-react";
import { ACTIVITY_DATA } from "@/data/activityData";
import { ActivityHeader } from "@/components/activity/ActivityHeader";
import { soundFx } from "@/utils/audio";

export default function PhilosophyPage() {
  const [activeTradition, setActiveTradition] = useState<"all" | "indian" | "western">("all");

  const philosophyItems = ACTIVITY_DATA.filter((item) => {
    if (item.category !== "philosophy") return false;
    if (activeTradition === "all") return true;
    return item.subCategory === activeTradition;
  });

  return (
    <div className="relative h-screen w-full bg-[#070709] text-white overflow-y-auto overscroll-contain selection:bg-amber-500/20 selection:text-amber-200">
      {/* Ambient background subtle lighting */}
      <div className="fixed top-0 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/[0.03] rounded-full blur-[140px] pointer-events-none" />
      <div className="fixed bottom-0 right-1/4 translate-y-1/2 w-[600px] h-[600px] bg-purple-600/[0.03] rounded-full blur-[140px] pointer-events-none" />

      {/* Grid texture */}
      <div
        className="fixed inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* 1. SHARED EDITORIAL HEADER */}
      <ActivityHeader currentSection="philosophy" />

      {/* 2. FULL-WIDTH CONTAINER */}
      <main className="relative z-10 w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-10 sm:py-16">
        {/* Header Section */}
        <div className="border-b border-white/10 pb-8 sm:pb-12 mb-8 sm:mb-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 font-mono text-[11px] tracking-widest uppercase mb-4">
                <Compass className="w-3.5 h-3.5 text-amber-400" />
                <span>METAPHYSICS, EPISTEMOLOGY &amp; AGENCY</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight text-white font-serif leading-tight">
                Philosophy: Indian Darshana &amp; Western Tradition
              </h1>
            </div>

            <p className="max-w-md text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed lg:pb-1">
              Ancient Indian insights on non-duality and selfless action synthesized with Western
              existential agency and absurdism. Conceptual lenses for distributed architecture and creative will.
            </p>
          </div>

          {/* Filter Bar (All, Indian, Western) */}
          <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap items-center gap-2 sm:gap-3">
            <button
              onClick={() => {
                soundFx.playTick();
                setActiveTradition("all");
              }}
              className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider uppercase transition-all cursor-pointer ${
                activeTradition === "all"
                  ? "bg-amber-400 text-black font-bold shadow-xs"
                  : "bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white border border-white/10"
              }`}
            >
              All Traditions ({ACTIVITY_DATA.filter((i) => i.category === "philosophy").length})
            </button>

            <button
              onClick={() => {
                soundFx.playTick();
                setActiveTradition("indian");
              }}
              className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider uppercase transition-all cursor-pointer ${
                activeTradition === "indian"
                  ? "bg-amber-400 text-black font-bold shadow-xs"
                  : "bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white border border-white/10"
              }`}
            >
              ✦ Indian Darshana (Vedanta, Gita, Shunyata, Charvaka)
            </button>

            <button
              onClick={() => {
                soundFx.playTick();
                setActiveTradition("western");
              }}
              className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider uppercase transition-all cursor-pointer ${
                activeTradition === "western"
                  ? "bg-amber-400 text-black font-bold shadow-xs"
                  : "bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white border border-white/10"
              }`}
            >
              ✦ Western Tradition (Nietzsche, Camus, Stoics, Spinoza)
            </button>
          </div>
        </div>

        {/* 3. EXPANSIVE FULL-WIDTH BROADSHEET LIST (MINIMAL CARDS, PURE EDITORIAL LAYOUT) */}
        <div className="divide-y divide-white/10">
          <AnimatePresence mode="popLayout">
            {philosophyItems.map((item, idx) => (
              <motion.article
                key={item.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
                className="py-10 sm:py-14 lg:py-16 -mx-4 sm:-mx-8 lg:-mx-12 px-4 sm:px-8 lg:px-12 transition-colors hover:bg-white/[0.015]"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
                  {/* Left Column: Meta, Author, Era & Tags */}
                  <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-4">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-[10px] font-semibold uppercase tracking-wider">
                        <Compass className="w-3 h-3 text-amber-400" />
                        <span>{item.subCategory === "indian" ? "Indian Darshana" : "Western Tradition"}</span>
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl sm:text-2xl font-serif text-white font-medium">
                        {item.authorOrOrigin}
                      </h3>
                      <p className="text-xs font-mono text-neutral-500 mt-1">
                        {item.dateOrEra} • {item.readTime}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-1.5 pt-2">
                      {item.tags.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-0.5 rounded-full bg-white/5 text-[10px] font-mono text-neutral-400"
                        >
                          #{t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Title, Quotes & Personal Synthesis */}
                  <div className="lg:col-span-8 space-y-6">
                    {/* Title */}
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-normal text-white leading-tight">
                      {item.title}
                    </h2>

                    {/* Original Sanskrit or Primary Text */}
                    {item.originalText && (
                      <div className="p-5 sm:p-6 rounded-2xl bg-black/40 border border-amber-500/20 text-neutral-200 font-serif text-lg sm:text-xl leading-relaxed">
                        <p className="whitespace-pre-line text-amber-200/90 font-medium">
                          {item.originalText}
                        </p>
                        {item.transliteration && (
                          <p className="text-xs font-mono text-neutral-400 mt-2.5 italic">
                            {item.transliteration}
                          </p>
                        )}
                      </div>
                    )}

                    {/* Primary Translation Excerpt */}
                    <div className="border-l-2 border-amber-400/80 pl-6 sm:pl-8 py-1 my-4 font-serif italic text-base sm:text-xl text-neutral-300 leading-relaxed">
                      <p className="whitespace-pre-line">&ldquo;{item.englishExcerpt}&rdquo;</p>
                    </div>

                    {/* Personal Reflection & System Synthesis */}
                    <div className="pt-4 border-t border-white/5">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-amber-400 font-bold block mb-2">
                        Personal Reflection &amp; System Architecture Synthesis
                      </span>
                      <p className="text-xs sm:text-sm md:text-base text-neutral-400 leading-relaxed font-sans">
                        {item.reflection}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* 4. FOOTER NAVIGATION */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/activity"
            onClick={() => soundFx.playTick()}
            className="text-xs font-mono text-neutral-400 hover:text-white transition-colors"
          >
            ← Back to Activity Overview
          </Link>

          <Link
            href="/activity/poetry"
            onClick={() => soundFx.playTick()}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-pink-500/10 border border-pink-500/30 hover:border-pink-500/60 text-pink-300 text-xs font-mono font-bold tracking-wider uppercase transition-all hover:scale-105"
          >
            <span>NEXT: POETRY &amp; VERSE</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </main>
    </div>
  );
}
