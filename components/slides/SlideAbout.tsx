"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Terminal, Code2 } from "lucide-react";
import { soundFx } from "@/utils/audio";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

interface SlideAboutProps {
  onContactMe: () => void;
  onViewProjects: () => void;
}

export const SlideAbout: React.FC<SlideAboutProps> = ({ onContactMe, onViewProjects }) => {
  const { about, personal } = PORTFOLIO_DATA;

  return (
    <section className="relative w-full h-full min-h-[100dvh] flex flex-col justify-center pl-6 pr-6 sm:pl-14 sm:pr-12 md:pl-24 md:pr-16 lg:pl-36 lg:pr-24 pt-20 pb-16 sm:py-20 bg-white overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-5xl flex flex-col items-start space-y-6 sm:space-y-7 my-auto"
      >
        {/* Category & Availability Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 border border-neutral-200/80 text-neutral-800 text-[11px] sm:text-xs font-mono">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>About Himanshu • Open for Opportunities</span>
        </div>

        {/* Primary Bold Statement */}
        <div className="space-y-4 sm:space-y-5 max-w-4xl">
          <h2 className="text-[1.85rem] xs:text-[2.05rem] sm:text-3xl md:text-5xl lg:text-[3.15rem] font-black text-neutral-950 tracking-tight leading-[1.2] text-balance">
            I&apos;m an <span className="text-neutral-950">AI &amp; ML student</span> and <span className="text-neutral-950">Frontend Developer</span> focused on building <span className="underline decoration-amber-400/80 decoration-2 underline-offset-4">intelligent solutions</span> and clean, modern web experiences.
          </h2>

          {/* Supportive Editorial Philosophy Accent */}
          <div className="border-l-[3px] border-amber-500 pl-4 sm:pl-5 py-1.5 max-w-3xl">
            <p className="text-base sm:text-xl md:text-2xl lg:text-[1.65rem] font-medium text-neutral-800 tracking-tight leading-relaxed">
              I enjoy turning <span className="font-semibold text-neutral-950">ideas into real-world products</span> through AI, engineering, and frontend development.
            </p>
          </div>
        </div>

        {/* Core Competency Chips - fills mobile viewport gracefully */}
        <div className="flex flex-wrap items-center gap-2 pt-1 sm:pt-2">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-50 border border-neutral-200/90 text-neutral-800 text-[11px] sm:text-xs font-mono font-medium">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Intelligent AI &amp; ML</span>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-50 border border-neutral-200/90 text-neutral-800 text-[11px] sm:text-xs font-mono font-medium">
            <Code2 className="w-3.5 h-3.5 text-neutral-900" />
            <span>Modern Frontend &amp; Next.js</span>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-50 border border-neutral-200/90 text-neutral-800 text-[11px] sm:text-xs font-mono font-medium">
            <Terminal className="w-3.5 h-3.5 text-emerald-600" />
            <span>Product Engineering</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col xs:flex-row sm:flex-row items-stretch sm:items-center gap-3 pt-2 sm:pt-3 w-full sm:w-auto">
          <button
            onClick={() => {
              soundFx.playSlideTransition();
              onViewProjects();
            }}
            className="px-6 sm:px-7 py-3.5 rounded-full bg-neutral-950 hover:bg-neutral-800 text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
          >
            <span>Explore Projects</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => {
              soundFx.playSlideTransition();
              onContactMe();
            }}
            className="px-6 sm:px-7 py-3.5 rounded-full bg-white hover:bg-neutral-50 border border-neutral-300 hover:border-neutral-900 text-neutral-900 text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center justify-center cursor-pointer shadow-xs"
          >
            Let&apos;s Connect
          </button>
        </div>

        {/* Cohesive Footer Details */}
        <div className="pt-6 sm:pt-8 border-t border-neutral-200/70 w-full max-w-4xl flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 text-xs font-mono text-neutral-500 mt-2">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            <span>Bachelor of Technology • AI &amp; ML</span>
          </div>
          <div className="flex items-center gap-2 text-neutral-400">
            <span>Based in {personal.location}</span>
            <span>•</span>
            <span>Available Worldwide</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
