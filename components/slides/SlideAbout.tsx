"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { soundFx } from "@/utils/audio";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

interface SlideAboutProps {
  onContactMe: () => void;
  onViewSkills: () => void;
}

export const SlideAbout: React.FC<SlideAboutProps> = ({ onContactMe, onViewSkills }) => {
  const { about, personal } = PORTFOLIO_DATA;

  return (
    <section className="relative w-full h-full min-h-screen flex flex-col justify-between pl-6 pr-6 sm:pl-14 sm:pr-12 md:pl-24 md:pr-16 lg:pl-36 lg:pr-24 pt-20 sm:pt-24 md:pt-28 pb-20 sm:pb-12 md:pb-14 bg-white overflow-y-auto">
      {/* Main Content: Naturally positioned from top without awkward center float */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-5xl flex flex-col items-start space-y-5 sm:space-y-7 mt-2 sm:mt-6 md:mt-8"
      >
        {/* Subtle Category & Status Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 border border-neutral-200/80 text-neutral-800 text-[11px] sm:text-xs font-mono">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>About Himanshu • Open for Opportunities</span>
        </div>

        {/* Primary Bold Statement */}
        <div className="space-y-4 sm:space-y-5 max-w-4xl">
          <h2 className="text-[1.65rem] sm:text-3xl md:text-5xl lg:text-[3.15rem] font-extrabold text-neutral-950 tracking-tight leading-[1.22] text-balance">
            {about.bio[0]}
          </h2>
          <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-neutral-600 font-normal leading-relaxed max-w-3xl">
            {about.bio[1]}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <button
            onClick={() => {
              soundFx.playSlideTransition();
              onViewSkills();
            }}
            className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-neutral-950 hover:bg-neutral-800 text-white text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
          >
            <span>Explore Technical Skills</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => {
              soundFx.playSlideTransition();
              onContactMe();
            }}
            className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-white hover:bg-neutral-50 border border-neutral-300 hover:border-neutral-900 text-neutral-900 text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center cursor-pointer shadow-xs"
          >
            Let&apos;s Connect
          </button>
        </div>
      </motion.div>

      {/* Minimal Footer Line: Anchored cleanly at the bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 pt-6 sm:pt-8 border-t border-neutral-100 w-full max-w-5xl flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] sm:text-xs font-mono text-neutral-400 mt-8"
      >
        <span>Bachelor of Technology • AI &amp; ML</span>
        <span>Based in {personal.location} • Available Worldwide</span>
      </motion.div>
    </section>
  );
};
