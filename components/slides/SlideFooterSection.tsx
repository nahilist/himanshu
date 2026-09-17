"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Send, ChevronUp, Calendar, ArrowUpRight, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { soundFx } from "@/utils/audio";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

interface SlideFooterSectionProps {
  onScrollTop: () => void;
  onOpenResume: () => void;
}

export const SlideFooterSection: React.FC<SlideFooterSectionProps> = ({
  onScrollTop,
  onOpenResume,
}) => {
  const { personal, projects } = PORTFOLIO_DATA;

  return (
    <footer className="relative w-full h-full min-h-screen flex flex-col justify-between px-5 sm:px-10 md:px-14 lg:px-20 pt-16 sm:pt-20 md:pt-14 pb-6 sm:pb-8 bg-neutral-950 text-white overflow-y-auto overscroll-contain selection:bg-amber-400 selection:text-black">
      {/* Ambient Atmospheric Lighting & Precision Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#262626_1px,transparent_1px)] [background-size:24px_24px] opacity-35 pointer-events-none" />
      <div className="absolute top-1/4 -left-40 w-[28rem] h-[28rem] rounded-full bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-40 w-[28rem] h-[28rem] rounded-full bg-gradient-to-tl from-purple-500/10 via-pink-500/5 to-transparent blur-3xl pointer-events-none" />

      {/* 1. TOP SECTION: Headline + Dark Theme Identity */}
      <div className="relative z-10 pb-8 sm:pb-10 flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-neutral-800/90">
        {/* Left: Call to Action Headline + Direct Email */}
        <div className="max-w-2xl">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-[10.5px] sm:text-xs font-mono text-neutral-300 mb-4 sm:mb-6 shadow-2xs w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            <span className="tracking-widest uppercase font-semibold text-neutral-200">
              INITIATE COLLABORATION
            </span>
          </div>

          {/* Monumental Editorial Headline */}
          <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-light tracking-tight leading-[1.06] text-white">
            Is there an{" "}
            <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-orange-300">
              intelligent project
            </span>
            <br className="hidden sm:inline" />{" "}
            brewing in your{" "}
            <span className="font-serif italic font-normal text-neutral-500">
              mind?
            </span>
          </h2>

          {/* Direct Email Action Pill */}
          <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${personal.email}`}
              onClick={() => soundFx.playTick()}
              className="group relative inline-flex items-center gap-3 px-5 sm:px-6 py-3 rounded-full bg-neutral-900/90 hover:bg-neutral-850 border border-neutral-800 hover:border-neutral-700 transition-all duration-300 shadow-[0_8px_24px_rgba(0,0,0,0.4)] cursor-pointer"
            >
              <div className="w-7 h-7 rounded-full bg-amber-400 text-neutral-950 flex items-center justify-center group-hover:scale-110 transition-transform shadow-xs">
                <Send className="w-3.5 h-3.5 -rotate-45 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <span className="text-sm sm:text-base font-mono font-semibold tracking-tight text-white group-hover:text-amber-300 transition-colors">
                {personal.email}
              </span>
              <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest pl-1 hidden xs:inline">
                DIRECT INBOX ↗
              </span>
            </a>
          </div>
        </div>

        {/* Right: Author info & Live Status */}
        <div className="lg:text-right space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-800/50 text-[10.5px] font-mono text-emerald-400 mb-1">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>Available for Q3/Q4 Projects</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Himanshu Kumar
          </h3>
          <p className="text-xs text-neutral-400 font-mono">
            AI/ML &amp; Production Web Engineer • New Delhi, India
          </p>
        </div>
      </div>

      {/* 2. MIDDLE SECTION: 4 Navigation Directory Columns */}
      <div className="relative z-10 py-8 sm:py-10 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12 border-b border-neutral-800/90 text-xs font-mono">
        {/* Col 1: ABOUT HIMANSHU */}
        <div className="space-y-3">
          <span className="text-[10px] tracking-widest uppercase text-amber-400 font-bold block">
            ABOUT HIMANSHU
          </span>
          <ul className="space-y-2 text-neutral-300 font-sans text-xs sm:text-sm">
            <li className="text-neutral-400">B.Tech in AI &amp; ML (2022-2026)</li>
            <li className="text-neutral-400">Academic CGPA: 8.6 / 10.0</li>
            <li>
              <button
                onClick={() => {
                  soundFx.playTick();
                  onOpenResume();
                }}
                className="hover:text-amber-300 text-amber-400 transition-colors cursor-pointer font-semibold underline underline-offset-4 flex items-center gap-1"
              >
                <span>Curriculum Vitae</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </li>
            <li className="text-emerald-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Open for Internships</span>
            </li>
          </ul>
        </div>

        {/* Col 2: CORE PROJECTS */}
        <div className="space-y-3">
          <span className="text-[10px] tracking-widest uppercase text-amber-400 font-bold block">
            CORE PROJECTS
          </span>
          <ul className="space-y-2 text-neutral-300 font-sans text-xs sm:text-sm">
            {projects.slice(0, 5).map((p) => (
              <li key={p.id}>
                <a
                  href={p.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => soundFx.playTick()}
                  className="hover:text-white text-neutral-400 transition-colors flex items-center justify-between group"
                >
                  <span className="group-hover:translate-x-0.5 transition-transform truncate pr-2">
                    {p.title}
                  </span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 text-amber-400 transition-opacity shrink-0" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: KEY CAPABILITIES */}
        <div className="space-y-3">
          <span className="text-[10px] tracking-widest uppercase text-amber-400 font-bold block">
            KEY CAPABILITIES
          </span>
          <ul className="space-y-2 text-neutral-400 font-sans text-xs sm:text-sm">
            <li className="hover:text-neutral-200 transition-colors">PyTorch &amp; TensorFlow Models</li>
            <li className="hover:text-neutral-200 transition-colors">Generative AI, LLMs &amp; RAG</li>
            <li className="hover:text-neutral-200 transition-colors">Autonomous AI Agents</li>
            <li className="hover:text-neutral-200 transition-colors">Next.js 16, React &amp; Tailwind</li>
            <li className="hover:text-neutral-200 transition-colors">FastAPI &amp; High-Throughput APIs</li>
          </ul>
        </div>

        {/* Col 4: SOCIAL CHANNELS */}
        <div className="space-y-3">
          <span className="text-[10px] tracking-widest uppercase text-amber-400 font-bold block">
            CONNECT &amp; CODE
          </span>
          <ul className="space-y-2 text-neutral-300 font-sans text-xs sm:text-sm">
            <li>
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                onClick={() => soundFx.playTick()}
                className="hover:text-white text-neutral-400 flex items-center gap-2 transition-colors group"
              >
                <GithubIcon className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white transition-colors" />
                <span>GitHub (@himanshux64)</span>
              </a>
            </li>
            <li>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                onClick={() => soundFx.playTick()}
                className="hover:text-white text-neutral-400 flex items-center gap-2 transition-colors group"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white transition-colors" />
                <span>LinkedIn Profile</span>
              </a>
            </li>
            <li>
              <a
                href={personal.medium}
                target="_blank"
                rel="noreferrer"
                onClick={() => soundFx.playTick()}
                className="hover:text-white text-neutral-400 flex items-center gap-2 transition-colors group"
              >
                <span>Medium Articles</span>
                <ArrowUpRight className="w-3 h-3 opacity-60 group-hover:opacity-100 text-amber-400" />
              </a>
            </li>
            <li>
              <a
                href={personal.calendly}
                target="_blank"
                rel="noreferrer"
                onClick={() => soundFx.playTick()}
                className="hover:text-amber-300 text-amber-400 flex items-center gap-2 transition-colors font-semibold"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Schedule a Meeting</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* 3. GIANT BRAND IDENTITY: Emblem & Himanshu */}
      <div className="relative z-10 py-6 sm:py-8 md:py-10 flex flex-col items-center justify-center w-full overflow-hidden">
        {/* Subtle Brand Aura */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
          <div className="w-[32rem] h-[12rem] bg-gradient-to-r from-amber-500/10 via-white/5 to-purple-500/10 blur-3xl rounded-full" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 font-black text-white leading-none tracking-tighter"
        >
          <div className="relative w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 flex items-center justify-center">
            <Image
              src="/logo-monogram-white.png"
              alt="nahilist logo emblem"
              width={140}
              height={160}
              className="w-full h-full object-contain drop-shadow-[0_0_24px_rgba(255,255,255,0.18)]"
              priority
            />
          </div>

          <div className="text-[12vw] sm:text-[8vw] font-black tracking-tighter text-neutral-200 select-none hover:text-white transition-colors duration-300">
            HIMANSHU
          </div>
        </motion.div>
      </div>

      {/* 4. BOTTOM UTILITY & SCROLL TOP BAR */}
      <div className="relative z-10 pt-4 pb-2 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-[10px] sm:text-[11px] font-mono text-neutral-500 border-t border-neutral-900">
        {/* Social shortcuts */}
        <div className="flex items-center gap-2 text-xs font-semibold text-neutral-400">
          <a
            href={personal.github}
            target="_blank"
            rel="noreferrer"
            className="px-2.5 py-1 rounded-md bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white border border-neutral-800/80 transition-colors"
          >
            gh
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noreferrer"
            className="px-2.5 py-1 rounded-md bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white border border-neutral-800/80 transition-colors"
          >
            in
          </a>
          <a
            href={personal.medium}
            target="_blank"
            rel="noreferrer"
            className="px-2.5 py-1 rounded-md bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white border border-neutral-800/80 transition-colors"
          >
            med
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="px-2.5 py-1 rounded-md bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white border border-neutral-800/80 transition-colors"
          >
            mail
          </a>
        </div>

        {/* Legal Notices */}
        <div className="flex items-center gap-4 text-center sm:text-left text-neutral-500">
          <span>© 2026 Himanshu Kumar • All Rights Reserved</span>
        </div>

        {/* Functional SCROLL TOP Button */}
        <button
          onClick={() => {
            soundFx.playSlideTransition();
            onScrollTop();
          }}
          className="group flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 hover:bg-white text-neutral-300 hover:text-black border border-neutral-800 hover:border-white transition-all duration-300 cursor-pointer shadow-xs"
        >
          <span className="tracking-widest uppercase text-[10px] font-bold">SCROLL TOP</span>
          <ChevronUp className="w-3 h-3 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </footer>
  );
};

