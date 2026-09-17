"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  Compass,
  Feather,
  BookOpen,
  Bookmark,
  ArrowUpRight,
  ExternalLink,
} from "lucide-react";
import { ACTIVITY_DATA } from "@/data/activityData";
import { ActivityHeader } from "@/components/activity/ActivityHeader";
import { soundFx } from "@/utils/audio";

export default function ActivityPage() {
  const philosophyCount = ACTIVITY_DATA.filter((i) => i.category === "philosophy").length;
  const poetryCount = ACTIVITY_DATA.filter((i) => i.category === "poetry").length;
  const storiesCount = ACTIVITY_DATA.filter((i) => i.category === "stories").length;
  const shelfCount = ACTIVITY_DATA.filter((i) => i.category === "reading-shelf").length;

  const sections = [
    {
      num: "01",
      title: "Philosophy",
      subtitle: "Indian Darshana & Western Tradition",
      desc: "From the non-dual insights of Advaita and Buddhist Shunyata to Nietzschean active nihilism, Camus's absurdism, and Marcus Aurelius's inner stillness.",
      href: "/activity/philosophy",
      icon: <Compass className="w-5 h-5 text-amber-400" />,
      badge: `${philosophyCount} Treatises`,
      pill: "Vedanta, Shunyata, Nihilism & Stoicism",
      accent: "text-amber-300",
      borderHover: "hover:border-amber-500/50",
    },
    {
      num: "02",
      title: "Poetry & Verse",
      subtitle: "Ghalib, Faiz, Jaun Elia & Frost",
      desc: "Original Urdu Nastaliq calligraphy and classical verses exploring the paradoxical nature of existence, resistance, sovereign selfhood, and divergent paths.",
      href: "/activity/poetry",
      icon: <Feather className="w-5 h-5 text-pink-400" />,
      badge: `${poetryCount} Selections`,
      pill: "Urdu Ghazals & Modern Verse",
      accent: "text-pink-300",
      borderHover: "hover:border-pink-500/50",
    },
    {
      num: "03",
      title: "Stories & Fables",
      subtitle: "Kafka, Borges, Dostoevsky, Premchand & Manto",
      desc: "Parables of infinite libraries, existential gatekeepers, human contradictions, and the raw tragedy of arbitrary borders and social deprivation.",
      href: "/activity/stories",
      icon: <BookOpen className="w-5 h-5 text-cyan-400" />,
      badge: `${storiesCount} Parables`,
      pill: "Psychological & Existential Fiction",
      accent: "text-cyan-300",
      borderHover: "hover:border-cyan-500/50",
    },
    {
      num: "04",
      title: "Reading Shelf & Other",
      subtitle: "Living Library, Marginalia & Annotations",
      desc: "Active reading notes across cognitive science strange loops, existentialist essays, and magical realism. Bridging mathematical logic and consciousness.",
      href: "/activity/other",
      icon: <Bookmark className="w-5 h-5 text-emerald-400" />,
      badge: `${shelfCount} Volumes`,
      pill: "Living Library & Marginalia",
      accent: "text-emerald-300",
      borderHover: "hover:border-emerald-500/50",
    },
  ];

  return (
    <div className="relative h-screen w-full bg-[#070709] text-white overflow-y-auto overscroll-contain selection:bg-amber-500/20 selection:text-amber-200">
      {/* Ambient background subtle lighting */}
      <div className="fixed top-0 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/[0.04] rounded-full blur-[140px] pointer-events-none" />
      <div className="fixed bottom-0 right-1/4 translate-y-1/2 w-[600px] h-[600px] bg-purple-600/[0.04] rounded-full blur-[140px] pointer-events-none" />

      {/* Grid grain overlay */}
      <div
        className="fixed inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* 1. SHARED EDITORIAL HEADER */}
      <ActivityHeader currentSection="all" />

      {/* 2. MAIN FULL-WIDTH CONTAINER */}
      <main className="relative z-10 w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-10 sm:py-16">
        {/* Hero Broadside Header */}
        <div className="border-b border-white/10 pb-10 sm:pb-16 mb-12 sm:mb-16">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 font-mono text-[11px] tracking-widest uppercase mb-6">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>INTELLECTUAL SANCTUARY • DISPATCHES FROM THE MIND</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight text-white font-serif leading-[1.08]">
                Poetry, Philosophy, Stories &amp; Marginalia
              </h1>
            </div>

            <div className="max-w-xl lg:pb-2 text-sm sm:text-base text-neutral-400 font-sans leading-relaxed">
              <p>
                Beyond algorithms, distributed servers, and neural architectures lies the human
                subconscious. An expansive repository of the literature, Indian &amp; Western
                philosophical traditions, and existential inquiries that inform my worldview and craft.
              </p>
              <div className="mt-4 flex items-center gap-4 text-xs font-mono text-neutral-500">
                <span>INDEX OF 4 DISCIPLINES</span>
                <span>•</span>
                <span>EXPANDED EDITORIAL ARCHIVE</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3. FULL-DESKTOP BROADSHEET EDITORIAL DIRECTORY (MINIMAL CARDS, PURE TYPOGRAPHY) */}
        <div className="mb-20">
          <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs font-mono tracking-widest uppercase text-neutral-500">
            <span>SECTIONS</span>
            <span className="hidden md:inline">FOCUS &amp; CORE CANON</span>
            <span className="hidden lg:inline">SUMMARY DISPATCH</span>
            <span>EXPLORE</span>
          </div>

          <div className="divide-y divide-white/10">
            {sections.map((sec, idx) => (
              <motion.div
                key={sec.href}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
              >
                <Link
                  href={sec.href}
                  onClick={() => soundFx.playTick()}
                  className="group block py-8 sm:py-10 lg:py-12 transition-all duration-300 hover:bg-white/[0.02] -mx-4 sm:-mx-8 lg:-mx-12 px-4 sm:px-8 lg:px-12 cursor-pointer"
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-start lg:items-center">
                    {/* Index & Number */}
                    <div className="md:col-span-3 lg:col-span-3 flex items-start gap-4">
                      <span className="font-mono text-xl sm:text-2xl text-neutral-600 group-hover:text-amber-400 font-light transition-colors">
                        {sec.num}
                      </span>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono tracking-wider uppercase text-neutral-500">
                            {sec.pill}
                          </span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-white group-hover:text-amber-200 transition-colors mt-1">
                          {sec.title}
                        </h2>
                      </div>
                    </div>

                    {/* Subtitle / Focus */}
                    <div className="md:col-span-4 lg:col-span-3">
                      <span className={`text-xs font-mono uppercase tracking-wide block ${sec.accent}`}>
                        {sec.subtitle}
                      </span>
                      <span className="text-xs font-mono text-neutral-500 mt-1 block">
                        {sec.badge}
                      </span>
                    </div>

                    {/* Rich Summary Spread */}
                    <div className="md:col-span-4 lg:col-span-5 text-xs sm:text-sm text-neutral-400 leading-relaxed font-sans pr-4">
                      <p>{sec.desc}</p>
                    </div>

                    {/* Arrow / Action CTA */}
                    <div className="md:col-span-1 lg:col-span-1 flex md:justify-end items-center">
                      <div className="flex items-center gap-2 px-3.5 py-2 rounded-full border border-white/10 group-hover:border-amber-400/80 bg-neutral-900/60 group-hover:bg-neutral-800 text-xs font-mono text-neutral-300 group-hover:text-white transition-all">
                        <span className="hidden md:inline lg:hidden">VIEW</span>
                        <ArrowUpRight className="w-4 h-4 text-amber-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 4. BROADSHEET ESSAY: THE NAHILIST THESIS */}
        <div className="border-t border-b border-white/10 py-12 sm:py-16 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-4">
              <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 font-bold block mb-2">
                THE NAHILIST MANIFESTO
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-white leading-tight">
                Why an Engineer Reads Ghalib, Nagarjuna, Kafka &amp; Nietzsche
              </h3>
              <p className="text-xs font-mono text-neutral-500 mt-3">
                Synthesis of Technical Logic and Human Subconscious
              </p>
            </div>

            <div className="lg:col-span-8 space-y-4 text-sm sm:text-base text-neutral-400 font-sans leading-relaxed">
              <p>
                Software engineering and artificial intelligence deal with logic, syntax, and computational graphs.
                Yet software is ultimately designed by human beings for human beings. Without philosophical depth,
                engineering becomes sterile compliance.
              </p>
              <p>
                From <span className="text-amber-200">Indian Philosophy</span>, we take the discipline of <em>Nishkama Karma</em>—committing
                to relentless precision in action while freeing ourselves from egoistic obsession with the fruits.
                From <span className="text-amber-200">Nagarjuna</span>, we learn that no node in a system has an independent self-nature;
                meaning arises solely through relational co-emergence.
              </p>
              <p>
                From <span className="text-amber-200">Western Active Nihilism</span> and <span className="text-amber-200">Camus</span>, we
                derive creative agency: the courage to build sublime architectures into the void. And from Urdu verse and classic parables,
                we retain an emotional vocabulary that machines can never simulate.
              </p>
            </div>
          </div>
        </div>

        {/* 5. RETURN BANNER */}
        <div className="py-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h4 className="text-xl sm:text-2xl font-serif font-light text-white">
              Return to Engineering &amp; Portfolio Deck
            </h4>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1">
              Explore 3D WebGL systems, machine learning architectures, and production applications.
            </p>
          </div>

          <Link
            href="/"
            onClick={() => soundFx.playTick()}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-amber-400 hover:bg-amber-300 text-black font-mono text-xs font-bold tracking-widest uppercase transition-transform hover:scale-105 shrink-0"
          >
            <span>EXPLORE PORTFOLIO</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </div>
      </main>
    </div>
  );
}
