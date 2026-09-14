"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, CheckCircle2, Sparkles, AlertCircle } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { soundFx } from "@/utils/audio";
import { ProjectItem } from "@/data/portfolioData";

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-xl overflow-y-auto"
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ type: "spring", stiffness: 320, damping: 28 }}
          className="relative w-full max-w-3xl bg-neutral-950 text-white rounded-3xl p-6 sm:p-10 border border-white/15 shadow-2xl overflow-hidden my-auto"
        >
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Top Bar */}
          <div className="flex items-start justify-between border-b border-white/10 pb-5 mb-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-mono tracking-widest text-amber-400 uppercase font-semibold px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20">
                  {project.badge}
                </span>
                <span className="text-[10px] font-mono text-neutral-400">
                  • {project.category}
                </span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                {project.title}
              </h2>
            </div>

            <button
              onClick={() => {
                soundFx.playTick();
                onClose();
              }}
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-6 text-sm">
            {/* Problem Statement Card */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-2 text-rose-400 text-xs font-mono font-semibold uppercase tracking-wider mb-1.5">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>Problem Statement</span>
              </div>
              <p className="text-neutral-300 leading-relaxed text-xs sm:text-sm">
                {project.problemStatement}
              </p>
            </div>

            {/* What Was Built */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-mono font-semibold uppercase tracking-wider mb-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Engineering Solution</span>
              </div>
              <p className="text-neutral-200 leading-relaxed text-xs sm:text-sm">
                {project.whatIBuilt}
              </p>
            </div>

            {/* Key Features */}
            <div>
              <h4 className="text-xs font-mono text-neutral-400 uppercase tracking-widest mb-3">
                Key Architectural Features
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.keyFeatures.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-xs text-neutral-300 p-2 rounded-xl bg-white/5 border border-white/5"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div>
              <h4 className="text-xs font-mono text-neutral-400 uppercase tracking-widest mb-2.5">
                Technologies & Frameworks
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full bg-white/10 text-xs font-mono text-neutral-200 border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Links */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-end gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-white/20 hover:border-white text-xs font-mono tracking-wider uppercase text-white transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Source Code</span>
              </a>

              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-amber-500 hover:bg-amber-400 text-black font-semibold text-xs font-mono tracking-wider uppercase transition-colors shadow-lg"
              >
                <span>Launch Live Project</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
