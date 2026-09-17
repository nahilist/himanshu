"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Send, ChevronUp, Calendar } from "lucide-react";
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
    <footer className="relative w-full h-full min-h-screen flex flex-col justify-between p-6 sm:p-10 md:p-14 bg-black text-white overflow-y-auto overscroll-contain">
      {/* 1. TOP SECTION: Headline + Dark theme identity */}
      <div className="relative z-10 pt-16 md:pt-14 pb-10 flex flex-col lg:flex-row lg:items-start justify-between gap-8 border-b border-neutral-800">
        {/* Left: Call to Action Headline + Email */}
        <div className="max-w-xl">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight leading-[1.08] text-white">
            Is there an intelligent
            <br />
            project brewing <span className="text-neutral-500">in your</span>
            <br />
            <span className="text-neutral-500">mind?</span>
          </h2>

          {/* Direct Email Link with Send Icon */}
          <div className="mt-8">
            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center gap-3 text-lg sm:text-2xl font-bold tracking-tight text-white hover:text-amber-400 transition-colors group"
            >
              <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center group-hover:scale-110 transition-transform">
                <Send className="w-4 h-4 -rotate-45" />
              </div>
              <span className="border-b-2 border-transparent group-hover:border-amber-400">
                {personal.email}
              </span>
            </a>
          </div>
        </div>

        {/* Right: Author info */}
        <div className="lg:text-right space-y-1">
          <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
            Himanshu Kumar
          </h3>
          <p className="text-xs text-neutral-400 font-mono">
            AI/ML & Frontend Developer • B.Tech AI & ML
          </p>
        </div>
      </div>

      {/* 2. MIDDLE SECTION: 4 Navigation Directory Columns */}
      <div className="relative z-10 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 border-b border-neutral-800 text-xs font-mono">
        {/* Col 1: ABOUT HIMANSHU */}
        <div className="space-y-3">
          <span className="text-[10px] tracking-widest uppercase text-amber-500 font-bold block">
            ABOUT HIMANSHU
          </span>
          <ul className="space-y-2 text-neutral-300 font-sans text-sm">
            <li>B.Tech in AI & ML (2022-2026)</li>
            <li>Academic CGPA: 8.6 / 10.0</li>
            <li>
              <button
                onClick={onOpenResume}
                className="hover:text-amber-400 text-amber-300 transition-colors cursor-pointer font-semibold underline"
              >
                View Curriculum Vitae →
              </button>
            </li>
            <li>Open for Internships</li>
          </ul>
        </div>

        {/* Col 2: FEATURED PROJECTS */}
        <div className="space-y-3">
          <span className="text-[10px] tracking-widest uppercase text-amber-500 font-bold block">
            CORE PROJECTS
          </span>
          <ul className="space-y-2 text-neutral-300 font-sans text-sm">
            {projects.slice(0, 5).map((p) => (
              <li key={p.id}>
                <a
                  href={p.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {p.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: KEY CAPABILITIES */}
        <div className="space-y-3">
          <span className="text-[10px] tracking-widest uppercase text-amber-500 font-bold block">
            KEY CAPABILITIES
          </span>
          <ul className="space-y-2 text-neutral-300 font-sans text-sm">
            <li>PyTorch & TensorFlow Models</li>
            <li>Generative AI, LLMs & RAG</li>
            <li>Autonomous AI Agents</li>
            <li>Next.js, React & Tailwind CSS</li>
            <li>FastAPI & Django Backends</li>
          </ul>
        </div>

        {/* Col 4: SOCIAL CHANNELS */}
        <div className="space-y-3">
          <span className="text-[10px] tracking-widest uppercase text-amber-500 font-bold block">
            CONNECT & CODE
          </span>
          <ul className="space-y-2 text-neutral-300 font-sans text-sm">
            <li>
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white flex items-center gap-1.5 transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub (@himanshux64)</span>
              </a>
            </li>
            <li>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white flex items-center gap-1.5 transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                <span>LinkedIn Profile</span>
              </a>
            </li>
            <li>
              <a
                href={personal.medium}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white flex items-center gap-1.5 transition-colors"
              >
                <span>Medium Technical Articles</span>
              </a>
            </li>
            <li>
              <a
                href={personal.calendly}
                target="_blank"
                rel="noreferrer"
                className="hover:text-amber-400 text-amber-300 flex items-center gap-1.5 transition-colors"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Schedule a Meeting</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* 3. GIANT BRAND IDENTITY: Emblem & Himanshu Kumar */}
      <div className="relative z-10 py-8 sm:py-12 flex flex-col items-center justify-center w-full overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 font-black text-white leading-none tracking-tighter"
        >
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 flex items-center justify-center">
            <Image
              src="/logo-monogram-white.png"
              alt="nahilist logo emblem"
              width={180}
              height={210}
              className="w-full h-full object-contain drop-shadow-[0_0_24px_rgba(255,255,255,0.15)]"
              priority
            />
          </div>

          <div className="text-[10vw] sm:text-[8vw] font-black tracking-tighter text-neutral-100 select-none hover:text-white transition-colors">
            HIMANSHU
          </div>
        </motion.div>
      </div>

      {/* 4. BOTTOM UTILITY & SCROLL TOP BAR */}
      <div className="relative z-10 pt-6 pb-2 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono text-neutral-500">
        {/* Social shortcuts */}
        <div className="flex items-center gap-4 text-xs font-bold text-neutral-400">
          <a href={personal.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">gh</a>
          <a href={personal.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">in</a>
          <a href={personal.medium} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">med</a>
          <a href={`mailto:${personal.email}`} className="hover:text-white transition-colors">mail</a>
        </div>

        {/* Legal Notices */}
        <div className="flex items-center gap-4 text-center sm:text-left">
          <span>© 2026 Himanshu Kumar. Built with Next.js, Tailwind CSS & Framer Motion.</span>
        </div>

        {/* Functional SCROLL TOP Button */}
        <button
          onClick={() => {
            soundFx.playSlideTransition();
            onScrollTop();
          }}
          className="group flex items-center gap-1.5 text-neutral-300 hover:text-white transition-colors cursor-pointer"
        >
          <span className="tracking-widest uppercase">SCROLL TOP</span>
          <div className="w-5 h-5 rounded-full border border-neutral-600 group-hover:border-white flex items-center justify-center transition-colors">
            <ChevronUp className="w-3 h-3 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </button>
      </div>
    </footer>
  );
};
