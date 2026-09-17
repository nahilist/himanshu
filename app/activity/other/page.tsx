"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Bookmark, ExternalLink, BookOpen } from "lucide-react";
import { ACTIVITY_DATA } from "@/data/activityData";
import { ActivityHeader } from "@/components/activity/ActivityHeader";
import { soundFx } from "@/utils/audio";

export default function OtherPage() {
  const shelfItems = ACTIVITY_DATA.filter((item) => item.category === "reading-shelf");

  return (
    <div className="relative h-screen w-full bg-[#070709] text-white overflow-y-auto overscroll-contain selection:bg-emerald-500/20 selection:text-emerald-200">
      {/* Ambient background subtle lighting */}
      <div className="fixed top-0 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/[0.03] rounded-full blur-[140px] pointer-events-none" />
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
      <ActivityHeader currentSection="reading-shelf" />

      {/* 2. FULL-WIDTH CONTAINER */}
      <main className="relative z-10 w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-10 sm:py-16">
        {/* Header Section */}
        <div className="border-b border-white/10 pb-8 sm:pb-12 mb-8 sm:mb-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 font-mono text-[11px] tracking-widest uppercase mb-4">
                <Bookmark className="w-3.5 h-3.5 text-emerald-400" />
                <span>CANON, MARGINALIA &amp; CONTINUOUS INQUIRY</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight text-white font-serif leading-tight">
                Reading Shelf &amp; Other Notes
              </h1>
            </div>

            <p className="max-w-md text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed lg:pb-1">
              A living catalog of treatises, cognitive science explorations, and marginalia.
              Exploring how consciousness, meaning, and creative will arise from complex formal systems.
            </p>
          </div>
        </div>

        {/* 3. FULL-WIDTH BROADSHEET CATALOG (MINIMAL CARDS, EXPANSIVE EDITORIAL LAYOUT) */}
        <div className="divide-y divide-white/10">
          {shelfItems.map((item, idx) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="py-8 sm:py-10 lg:py-12 -mx-4 sm:-mx-8 lg:-mx-12 px-4 sm:px-8 lg:px-12 transition-colors hover:bg-white/[0.015]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
                {/* Col 1-3: Status, Author & Meta */}
                <div className="lg:col-span-3 space-y-3">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-[10px] font-semibold uppercase tracking-wider">
                    <Bookmark className="w-3 h-3 text-emerald-400" />
                    <span>{item.dateOrEra.split("•")[1]?.trim() || "Reading"}</span>
                  </span>

                  <div>
                    <h3 className="text-lg sm:text-xl font-serif text-white font-medium">
                      {item.authorOrOrigin}
                    </h3>
                    <p className="text-xs font-mono text-neutral-500 mt-0.5">
                      {item.dateOrEra}
                    </p>
                  </div>
                </div>

                {/* Col 4-7: Title & Core Premise */}
                <div className="lg:col-span-4 space-y-3">
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif font-normal text-white leading-snug">
                    {item.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-neutral-300 font-sans leading-relaxed">
                    {item.englishExcerpt}
                  </p>
                </div>

                {/* Col 8-12: Marginalia Synthesis & Tags */}
                <div className="lg:col-span-5 space-y-3">
                  <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/5 font-sans text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-emerald-400 font-bold block mb-1.5">
                      Personal Marginalia &amp; Synthesis
                    </span>
                    <p>{item.reflection}</p>
                  </div>

                  <div className="flex flex-wrap items-center gap-1.5 pt-1">
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
              </div>
            </motion.article>
          ))}
        </div>

        {/* 4. FOOTER RETURN BANNER */}
        <div className="mt-16 py-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h4 className="text-xl sm:text-2xl font-serif font-light text-white">
              Return to Engineering Portfolio Deck
            </h4>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1">
              Machine learning architectures, WebGL graphics, and software systems.
            </p>
          </div>

          <div className="flex items-center gap-4 justify-center">
            <Link
              href="/activity/stories"
              onClick={() => soundFx.playTick()}
              className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-400 hover:text-white transition-colors"
            >
              <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
              <span>PREVIOUS: STORIES</span>
            </Link>

            <Link
              href="/"
              onClick={() => soundFx.playTick()}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-400 hover:bg-emerald-300 text-black font-mono text-xs font-bold tracking-widest uppercase transition-transform hover:scale-105 shrink-0"
            >
              <span>EXPLORE PORTFOLIO</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
