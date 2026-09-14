"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, Sparkles } from "lucide-react";
import { soundFx } from "@/utils/audio";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

interface SlideHeroProps {
  onViewProjects: () => void;
  onOpenResume: () => void;
  onContactMe: () => void;
}

export const SlideHero: React.FC<SlideHeroProps> = ({
  onViewProjects,
  onOpenResume,
  onContactMe,
}) => {
  const { personal, about } = PORTFOLIO_DATA;

  return (
    <section className="relative w-full h-full min-h-screen flex flex-col items-center justify-center px-6 md:px-12 bg-white overflow-hidden select-none">
      {/* Soft diffused sunset/amber radial aura matching reference design */}
      <div className="absolute top-[28%] left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0">
        <motion.div
          animate={{
            scale: [1, 1.08, 0.98, 1],
            opacity: [0.75, 0.9, 0.7, 0.75],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-[340px] h-[340px] sm:w-[500px] sm:h-[500px] md:w-[640px] md:h-[640px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(255, 120, 20, 0.75) 0%, rgba(255, 160, 50, 0.45) 32%, rgba(255, 210, 150, 0.2) 55%, rgba(255, 255, 255, 0) 72%)",
            filter: "blur(40px)",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center justify-center pt-8">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neutral-200/90 bg-white/80 backdrop-blur-md shadow-xs mb-6 text-xs font-mono"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-neutral-700 font-medium">{personal.status}</span>
        </motion.div>

        {/* Candidate Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-light tracking-tight leading-[1.06] text-neutral-900"
        >
          <span>Hello, I&apos;m </span>
          <span className="font-extrabold tracking-normal text-neutral-950 block sm:inline">
            {personal.name}
          </span>
        </motion.h1>

        {/* Role Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-3 flex items-center justify-center gap-2 text-xl sm:text-2xl md:text-3xl font-normal text-neutral-800"
        >
          <Sparkles className="w-5 h-5 text-amber-500" />
          <span className="font-mono tracking-tight font-semibold bg-gradient-to-r from-neutral-900 via-amber-700 to-neutral-900 bg-clip-text text-transparent">
            {personal.role}
          </span>
        </motion.div>

        {/* Short Introduction */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-5 max-w-2xl text-neutral-600 text-xs sm:text-sm md:text-base font-normal leading-relaxed tracking-wide"
        >
          {personal.shortIntro}
        </motion.p>

        {/* Quick Academic Tag */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-3 text-[11px] font-mono text-neutral-500"
        >
          <span>{about.degree}</span> • <span className="text-amber-700 font-semibold">CGPA: {about.cgpa}</span>
        </motion.div>

        {/* The 3 Action Buttons requested: View Projects, Download Resume, Contact Me */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4"
        >
          {/* Button 1: View Projects */}
          <button
            onClick={() => {
              soundFx.playSlideTransition();
              onViewProjects();
            }}
            className="group px-6 py-3 rounded-full bg-neutral-950 hover:bg-neutral-800 text-white text-xs sm:text-sm font-medium tracking-wide flex items-center gap-2 shadow-lg transition-all duration-300 cursor-pointer"
          >
            <span>View Projects</span>
            <ArrowDown className="w-3.5 h-3.5 text-amber-400 group-hover:translate-y-0.5 transition-transform" />
          </button>

          {/* Button 2: Download Resume */}
          <button
            onClick={() => {
              soundFx.playOpenModal();
              onOpenResume();
            }}
            className="group px-6 py-3 rounded-full bg-white hover:bg-neutral-50 text-neutral-900 border border-neutral-300 hover:border-neutral-900 text-xs sm:text-sm font-medium tracking-wide flex items-center gap-2 shadow-xs transition-all duration-300 cursor-pointer"
          >
            <Download className="w-3.5 h-3.5 text-neutral-600 group-hover:text-black group-hover:-translate-y-0.5 transition-transform" />
            <span>View / Download Resume</span>
          </button>

          {/* Button 3: Contact Me */}
          <button
            onClick={() => {
              soundFx.playSlideTransition();
              onContactMe();
            }}
            className="group px-6 py-3 rounded-full bg-amber-500 hover:bg-amber-400 text-neutral-950 text-xs sm:text-sm font-semibold tracking-wide flex items-center gap-2 shadow-md transition-all duration-300 cursor-pointer"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Contact Me</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};
