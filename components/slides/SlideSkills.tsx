"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Brain,
  Sparkles,
  Layout,
  Server,
  Terminal,
  Database,
} from "lucide-react";
import { soundFx } from "@/utils/audio";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

interface SlideSkillsProps {
  onViewProjects: () => void;
}

export const SlideSkills: React.FC<SlideSkillsProps> = ({ onViewProjects }) => {
  const [activeCategory, setActiveCategory] = useState<number>(0);
  const skills = PORTFOLIO_DATA.skills;

  const getIcon = (name: string) => {
    switch (name) {
      case "brain":
        return <Brain className="w-5 h-5 text-amber-600" />;
      case "sparkles":
        return <Sparkles className="w-5 h-5 text-purple-600" />;
      case "layout":
        return <Layout className="w-5 h-5 text-blue-600" />;
      case "server":
        return <Server className="w-5 h-5 text-emerald-600" />;
      case "terminal":
        return <Terminal className="w-5 h-5 text-rose-600" />;
      case "database":
        return <Database className="w-5 h-5 text-cyan-600" />;
      default:
        return <Sparkles className="w-5 h-5 text-amber-600" />;
    }
  };

  return (
    <section className="relative w-full h-full min-h-screen flex items-center justify-center p-4 sm:p-8 md:p-12 lg:p-14 bg-white overflow-y-auto">
      {/* Outer rounded card container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full h-[84vh] max-h-[840px] rounded-3xl md:rounded-[32px] overflow-hidden shadow-2xl bg-white border border-neutral-200/80 p-6 sm:p-10 md:p-12 flex flex-col justify-between"
      >
        {/* Soft Ambient Glow */}
        <div className="absolute top-1/3 left-1/3 w-96 h-96 rounded-full bg-purple-500/5 blur-3xl pointer-events-none" />

        {/* Top Header */}
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-neutral-100 pb-5">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-500" />
              <span className="text-xs font-mono tracking-widest text-neutral-500 uppercase font-semibold">
                Technical Stack & Tooling
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight">
              Specialized Skills Matrix
            </h2>
          </div>

          <button
            onClick={() => {
              soundFx.playSlideTransition();
              onViewProjects();
            }}
            className="self-start sm:self-auto px-4 py-2 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-medium transition-colors cursor-pointer"
          >
            See Skills in Action →
          </button>
        </div>

        {/* 6-Cluster Skills Grid */}
        <div className="relative z-10 my-auto py-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((cat, idx) => {
            const isSelected = activeCategory === idx;

            return (
              <motion.div
                key={idx}
                whileHover={{ y: -3 }}
                onClick={() => {
                  soundFx.playTick();
                  setActiveCategory(idx);
                }}
                className={`p-5 rounded-2xl transition-all duration-300 cursor-pointer border ${
                  isSelected
                    ? "bg-neutral-50/90 border-neutral-900 shadow-md ring-1 ring-neutral-900/10"
                    : "bg-white border-neutral-200 hover:border-neutral-300 shadow-xs"
                }`}
              >
                {/* Category Header */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-neutral-100/90 flex items-center justify-center">
                      {getIcon(cat.iconName)}
                    </div>
                    <h3 className="font-bold text-sm text-neutral-950">
                      {cat.title}
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono text-neutral-400">
                    0{idx + 1}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs text-neutral-500 mb-3.5 leading-relaxed line-clamp-2">
                  {cat.description}
                </p>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg bg-neutral-100 border border-neutral-200/80 text-xs font-mono text-neutral-800 font-medium hover:bg-neutral-900 hover:text-white transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footer info line */}
        <div className="relative z-10 pt-4 border-t border-neutral-100 flex items-center justify-between text-[11px] font-mono text-neutral-500">
          <span>AI/ML • Generative AI & RAG • Frontend • Backend • Tools • Databases</span>
          <span>Verified Hands-On Proficiency</span>
        </div>
      </motion.div>
    </section>
  );
};
