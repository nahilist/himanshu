"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, ArrowRight } from "lucide-react";
import { soundFx } from "@/utils/audio";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

interface SlideAboutProps {
  onContactMe: () => void;
  onViewSkills: () => void;
}

export const SlideAbout: React.FC<SlideAboutProps> = ({ onContactMe, onViewSkills }) => {
  const { about, personal, experienceEducation } = PORTFOLIO_DATA;

  return (
    <section className="relative w-full h-full min-h-screen flex items-center justify-center p-4 sm:p-8 md:p-12 lg:p-14 bg-white select-none overflow-y-auto">
      {/* Outer rounded card container matching portfolio design system */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full h-[84vh] max-h-[840px] rounded-3xl md:rounded-[32px] overflow-hidden shadow-2xl bg-white border border-neutral-200/80 p-6 sm:p-10 md:p-12 flex flex-col justify-between"
      >
        {/* Ambient Top Glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

        {/* Header Badge */}
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-neutral-100 pb-5">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
            <span className="text-xs font-mono tracking-widest text-neutral-500 uppercase font-semibold">
              Profile & Academic Background
            </span>
          </div>

          {/* Availability Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Open for Internships & Collaborations</span>
          </div>
        </div>

        {/* Main Content Grid: Left Career Objective & Stats | Right Education & Timeline */}
        <div className="relative z-10 my-auto py-4 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Headline & Career Objective */}
          <div className="lg:col-span-6 space-y-5">
            <div>
              <span className="text-xs font-mono text-amber-700 uppercase font-semibold tracking-wider block mb-1">
                About Himanshu Kumar
              </span>
              <h2 className="text-2xl sm:text-4xl md:text-[2.6rem] font-bold text-neutral-950 tracking-tight leading-tight">
                Engineering intelligent models with intuitive user experiences.
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              {about.careerObjective}
            </p>

            {/* Quick Metrics Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
              {about.highlights.map((h, i) => (
                <div key={i} className="p-3 rounded-2xl bg-neutral-50 border border-neutral-200/80">
                  <span className="text-[10px] font-mono text-neutral-500 block uppercase">
                    {h.label}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-neutral-900 mt-0.5 block">
                    {h.value}
                  </span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => {
                  soundFx.playSlideTransition();
                  onViewSkills();
                }}
                className="px-5 py-2.5 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-medium flex items-center gap-2 shadow-sm transition-colors cursor-pointer"
              >
                <span>Explore Technical Skills</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => {
                  soundFx.playSlideTransition();
                  onContactMe();
                }}
                className="px-5 py-2.5 rounded-full bg-white hover:bg-neutral-50 border border-neutral-300 text-neutral-900 text-xs font-medium transition-colors cursor-pointer"
              >
                Let&apos;s Connect
              </button>
            </div>
          </div>

          {/* Right Column: Education & Experience Cards */}
          <div className="lg:col-span-6 space-y-3.5">
            <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest block mb-2 font-semibold">
              Academic & Project Journey
            </span>

            {experienceEducation.map((item, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-2xl bg-neutral-50/70 border border-neutral-200/90 hover:border-neutral-400 transition-colors"
              >
                <div className="flex items-start justify-between gap-2 mb-1.5">
                  <div className="flex items-center gap-2">
                    {item.type === "education" ? (
                      <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center">
                        <GraduationCap className="w-4 h-4" />
                      </div>
                    ) : (
                      <div className="w-7 h-7 rounded-lg bg-neutral-900 text-white flex items-center justify-center">
                        <Briefcase className="w-3.5 h-3.5" />
                      </div>
                    )}
                    <div>
                      <h4 className="font-bold text-xs sm:text-sm text-neutral-950">
                        {item.title}
                      </h4>
                      <span className="text-[11px] text-neutral-500 font-medium">
                        {item.organization}
                      </span>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white border border-neutral-200 text-neutral-700 font-semibold block">
                      {item.grade}
                    </span>
                    <span className="text-[10px] font-mono text-neutral-400 mt-0.5 block">
                      {item.period}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-neutral-600 leading-relaxed pl-9">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer info line */}
        <div className="relative z-10 pt-4 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-neutral-500">
          <span>Bachelor of Technology • Artificial Intelligence & Machine Learning</span>
          <span>{personal.location} • Status: {personal.status}</span>
        </div>
      </motion.div>
    </section>
  );
};
