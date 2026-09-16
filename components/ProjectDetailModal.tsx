"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { soundFx } from "@/utils/audio";
import { ProjectItem } from "@/data/portfolioData";
import { projectMockups, categoryTags } from "@/components/ProjectMockups";

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    if (project) {
      document.body.setAttribute("data-modal-open", "true");
      return () => {
        document.body.removeAttribute("data-modal-open");
      };
    }
  }, [project]);

  if (!project) return null;

  const categoryTag = categoryTags[project.id] || "UI/UX / DEVELOPMENT";

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        data-modal="true"
        role="dialog"
        aria-modal="true"
        onWheelCapture={(e) => e.stopPropagation()}
        onTouchStartCapture={(e) => e.stopPropagation()}
        onTouchEndCapture={(e) => e.stopPropagation()}
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-black/95 backdrop-blur-2xl overflow-y-auto"
      >
        <motion.div
          initial={{ scale: 0.97, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.97, opacity: 0, y: 20 }}
          transition={{ type: "spring", stiffness: 320, damping: 28 }}
          className="relative w-full max-w-5xl max-h-[92vh] bg-black text-white rounded-3xl p-6 sm:p-10 border border-neutral-800 shadow-2xl flex flex-col justify-between overflow-y-auto"
        >
          {/* Top Header */}
          <div className="flex items-start justify-between border-b border-neutral-800 pb-5 mb-6">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-2 h-2 rounded-full bg-[#ff6600]" />
                <span className="text-[11px] font-mono tracking-widest uppercase text-neutral-400 font-medium">
                  {categoryTag}
                </span>
                <span className="text-neutral-600 font-mono text-[11px]">•</span>
                <span className="text-[11px] font-mono text-amber-400 font-semibold">
                  {project.badge}
                </span>
              </div>

              {/* Title with orange slanted arrow */}
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-normal tracking-tight text-white flex items-center gap-2.5">
                <span>{project.title}</span>
                <span className="text-[#ff6600] font-light">↗</span>
              </h2>
            </div>

            {/* Close Button */}
            <button
              onClick={() => {
                soundFx.playTick();
                onClose();
              }}
              className="group inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-neutral-700 bg-neutral-900/80 hover:bg-neutral-800 hover:border-white transition-all text-xs font-mono tracking-wider uppercase cursor-pointer"
            >
              <span>CLOSE</span>
              <div className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center transition-transform group-hover:scale-110">
                <X className="w-3.5 h-3.5" />
              </div>
            </button>
          </div>

          {/* Hero Viewport (Large realistic project preview) */}
          <div className="relative w-full aspect-[16/10] sm:aspect-[16/8.5] rounded-2xl sm:rounded-3xl overflow-hidden border border-neutral-800/90 shadow-2xl bg-neutral-950 mb-8 shrink-0">
            {projectMockups[project.id] || (
              <div className="w-full h-full bg-neutral-900 flex items-center justify-center text-sm font-mono text-neutral-400">
                {project.title}
              </div>
            )}
          </div>

          {/* Architectural Content Grid (Studio Editorial Layout) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 py-2">
            {/* Left: Challenge & Solution */}
            <div className="space-y-6">
              {/* Challenge */}
              <div>
                <span className="text-[10px] font-mono tracking-widest text-[#ff6600] uppercase font-bold block mb-2">
                  01 / THE CHALLENGE
                </span>
                <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
                  {project.problemStatement}
                </p>
              </div>

              {/* Engineering Solution */}
              <div>
                <span className="text-[10px] font-mono tracking-widest text-[#ff6600] uppercase font-bold block mb-2">
                  02 / ENGINEERING SOLUTION
                </span>
                <p className="text-sm sm:text-base text-neutral-200 leading-relaxed font-light">
                  {project.whatIBuilt}
                </p>
              </div>
            </div>

            {/* Right: Core Capabilities & Tech Stack */}
            <div className="space-y-6">
              {/* Key Features */}
              <div>
                <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase font-bold block mb-3">
                  03 / CORE CAPABILITIES
                </span>
                <ul className="space-y-2.5">
                  {project.keyFeatures.map((feature, idx) => (
                    <li
                      key={idx}
                      className="p-3 rounded-xl bg-neutral-900/60 border border-neutral-800/80 flex items-start gap-3 text-xs sm:text-sm text-neutral-300"
                    >
                      <span className="text-[10px] font-mono text-amber-400 font-bold shrink-0 mt-0.5">
                        0{idx + 1}
                      </span>
                      <span className="leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase font-bold block mb-2.5">
                  04 / TECHNOLOGIES & TOOLING
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Action Bar */}
          <div className="mt-8 pt-6 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs font-mono text-neutral-500">
              Architected & Developed by Himanshu Kumar
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-neutral-700 bg-neutral-900 hover:bg-neutral-800 hover:border-white text-xs font-mono tracking-wider uppercase text-white transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>Source Code</span>
              </a>

              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 sm:flex-initial group inline-flex items-center justify-center gap-3 pl-6 pr-2 py-2 rounded-full border border-[#ff6600]/80 bg-[#ff6600]/10 hover:bg-[#ff6600] hover:text-black text-white transition-all duration-300 shadow-lg"
              >
                <span className="text-xs font-mono tracking-wider uppercase font-semibold">
                  Launch Live Demo
                </span>
                <div className="w-7 h-7 rounded-full bg-white text-black flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-45">
                  <ArrowUpRight className="w-3.5 h-3.5 text-black stroke-[2.5]" />
                </div>
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
