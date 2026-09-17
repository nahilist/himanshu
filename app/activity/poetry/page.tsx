"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Feather, ArrowUpRight, Compass } from "lucide-react";
import { ACTIVITY_DATA } from "@/data/activityData";
import { ActivityHeader } from "@/components/activity/ActivityHeader";
import { soundFx } from "@/utils/audio";

export default function PoetryPage() {
  const poetryItems = ACTIVITY_DATA.filter((item) => item.category === "poetry");

  return (
    <div className="relative h-screen w-full bg-[#070709] text-white overflow-y-auto overscroll-contain selection:bg-pink-500/20 selection:text-pink-200">
      {/* Ambient background subtle lighting */}
      <div className="fixed top-0 left-1/3 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/[0.03] rounded-full blur-[140px] pointer-events-none" />
      <div className="fixed bottom-0 right-1/4 translate-y-1/2 w-[600px] h-[600px] bg-amber-500/[0.03] rounded-full blur-[140px] pointer-events-none" />

      {/* Grid texture */}
      <div
        className="fixed inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* 1. SHARED EDITORIAL HEADER */}
      <ActivityHeader currentSection="poetry" />

      {/* 2. FULL-WIDTH CONTAINER */}
      <main className="relative z-10 w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-10 sm:py-16">
        {/* Header Section */}
        <div className="border-b border-white/10 pb-8 sm:pb-12 mb-8 sm:mb-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-pink-500/30 bg-pink-500/10 text-pink-300 font-mono text-[11px] tracking-widest uppercase mb-4">
                <Feather className="w-3.5 h-3.5 text-pink-400" />
                <span>LYRICISM, METAPHOR &amp; EXISTENCE</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight text-white font-serif leading-tight">
                Poetry &amp; Verse
              </h1>
            </div>

            <p className="max-w-md text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed lg:pb-1">
              Where mathematical logic gives way to the unsayable. Classical Urdu ghazals,
              modernist resistance, and existential verse from Mirza Ghalib, Faiz Ahmad Faiz, Jaun Elia, and Robert Frost.
            </p>
          </div>
        </div>

        {/* 3. FULL-WIDTH BROADSHEET POETRY LIST (MINIMAL CARDS) */}
        <div className="divide-y divide-white/10">
          {poetryItems.map((item, idx) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="py-10 sm:py-14 lg:py-16 -mx-4 sm:-mx-8 lg:-mx-12 px-4 sm:px-8 lg:px-12 transition-colors hover:bg-white/[0.015]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
                {/* Left Column: Poet, Era, Tags */}
                <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-4">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-pink-500/30 bg-pink-500/10 text-pink-300 text-[10px] font-semibold uppercase tracking-wider">
                    <Feather className="w-3 h-3 text-pink-400" />
                    <span>Verse Anthology</span>
                  </span>

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

                {/* Right Column: Title, Urdu Calligraphy & English Verse */}
                <div className="lg:col-span-8 space-y-6">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-normal text-white leading-tight">
                    {item.title}
                  </h2>

                  {/* Urdu Calligraphy / Original Script Block */}
                  {item.originalText && (
                    <div className="p-6 sm:p-8 rounded-2xl bg-black/40 border border-pink-500/20 text-right font-serif text-xl sm:text-3xl text-pink-200/95 leading-[2.2] tracking-wide">
                      <p className="whitespace-pre-line">{item.originalText}</p>
                    </div>
                  )}

                  {/* English Translation */}
                  <div className="border-l-2 border-pink-400/80 pl-6 sm:pl-8 py-1 my-4 font-serif italic text-base sm:text-xl text-neutral-300 leading-relaxed">
                    <p className="whitespace-pre-line">&ldquo;{item.englishExcerpt}&rdquo;</p>
                  </div>

                  {/* Personal Reflection */}
                  <div className="pt-4 border-t border-white/5">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-pink-400 font-bold block mb-2">
                      Personal Reflection &amp; Resonance
                    </span>
                    <p className="text-xs sm:text-sm md:text-base text-neutral-400 leading-relaxed font-sans">
                      {item.reflection}
                    </p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* 4. FOOTER NAVIGATION */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/activity/philosophy"
            onClick={() => soundFx.playTick()}
            className="inline-flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-white transition-colors"
          >
            <Compass className="w-3.5 h-3.5 text-amber-400" />
            <span>PREVIOUS: PHILOSOPHY</span>
          </Link>

          <Link
            href="/activity/stories"
            onClick={() => soundFx.playTick()}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 hover:border-cyan-500/60 text-cyan-300 text-xs font-mono font-bold tracking-wider uppercase transition-all hover:scale-105"
          >
            <span>NEXT: STORIES &amp; FABLES</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </main>
    </div>
  );
}
