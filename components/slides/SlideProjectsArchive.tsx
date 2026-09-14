"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { soundFx } from "@/utils/audio";
import { PORTFOLIO_DATA, ProjectItem } from "@/data/portfolioData";
import { ProjectDetailModal } from "@/components/ProjectDetailModal";

export const SlideProjectsArchive: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("ALL");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filters = ["ALL", "AI/ML & GenAI", "FRONTEND", "FULL STACK"];
  const projects = PORTFOLIO_DATA.projects;

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === "ALL") return true;
    if (activeFilter === "AI/ML & GenAI") return p.category === "AI/ML & GenAI";
    if (activeFilter === "FRONTEND") return p.category === "Frontend";
    if (activeFilter === "FULL STACK") return p.category === "Full Stack";
    return true;
  });

  return (
    <section className="relative w-full h-full min-h-screen flex flex-col justify-between p-6 md:p-14 bg-black text-white overflow-y-auto select-none">
      {/* Top Header matching dark theme */}
      <div className="relative z-10 pt-16 md:pt-14 pb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
            <span className="text-xs font-mono tracking-widest text-amber-400 uppercase font-semibold">
              Engineered Works & Research
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-white">
            Featured Projects.
          </h2>
        </div>

        <div className="text-xs font-mono text-neutral-400 sm:text-right">
          <span className="text-amber-400 font-bold block sm:inline">6 Core Production Projects</span>
          <span className="hidden sm:inline"> • </span>
          <span>Click any card for full details</span>
        </div>
      </div>

      {/* Category Filter Tabs */}
      <div className="relative z-10 py-4 flex items-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar">
        {filters.map((filter) => {
          const isActive = activeFilter === filter;
          return (
            <button
              key={filter}
              onClick={() => {
                soundFx.playTick();
                setActiveFilter(filter);
              }}
              className={`px-5 py-2 rounded-full text-xs font-mono tracking-wider transition-all duration-300 cursor-pointer whitespace-nowrap ${
                isActive
                  ? "bg-[#ff6600] text-white font-semibold shadow-lg shadow-orange-600/30"
                  : "bg-transparent text-neutral-400 hover:text-white border border-neutral-800 hover:border-neutral-600"
              }`}
            >
              {filter}
            </button>
          );
        })}
      </div>

      {/* 6 Projects Grid */}
      <div className="relative z-10 my-auto py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="group cursor-pointer flex flex-col rounded-2xl bg-neutral-900/90 border border-white/10 hover:border-amber-500/50 transition-all duration-300 overflow-hidden shadow-xl p-5 justify-between"
              onClick={() => {
                soundFx.playOpenModal();
                setSelectedProject(project);
              }}
            >
              {/* Project Card Header */}
              <div>
                <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400 mb-3">
                  <span className="px-2 py-0.5 rounded-full bg-white/10 text-amber-400 font-semibold border border-white/5">
                    {project.badge}
                  </span>
                  <span>{project.category}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-amber-400 transition-colors mb-2 tracking-tight">
                  {project.title}
                </h3>

                <p className="text-xs text-neutral-400 leading-relaxed line-clamp-3 mb-4">
                  {project.whatIBuilt}
                </p>
              </div>

              {/* Technologies & Action Links */}
              <div className="pt-4 border-t border-white/10">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.slice(0, 3).map((t, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded-md bg-white/5 text-[10px] font-mono text-neutral-300 border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-1.5 py-0.5 rounded-md bg-white/5 text-[10px] font-mono text-neutral-500">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between text-xs font-mono pt-1">
                  <div className="flex items-center gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-neutral-400 hover:text-white flex items-center gap-1 transition-colors"
                      title="GitHub Repository"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-amber-400 hover:text-amber-300 flex items-center gap-1 transition-colors font-semibold"
                      title="Live Website"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live</span>
                    </a>
                  </div>

                  <span className="text-[11px] text-neutral-500 group-hover:text-neutral-300 transition-colors flex items-center gap-1">
                    <span>Inspect</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Footer info line */}
      <div className="relative z-10 pt-4 pb-8 flex items-center justify-between text-[11px] font-mono text-neutral-500 border-t border-white/10">
        <span>Click any project to view problem statements, solutions, and architectural details</span>
        <span>GitHub: @himanshux64</span>
      </div>

      {/* Deep-Dive Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
