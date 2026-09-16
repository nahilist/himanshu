"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  X,
  Sparkles,
  Layers,
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { soundFx } from "@/utils/audio";
import { PORTFOLIO_DATA, ProjectItem } from "@/data/portfolioData";
import { ProjectDetailModal } from "@/components/ProjectDetailModal";

import { projectMockups, categoryTags } from "@/components/ProjectMockups";

export const SlideProjectsArchive: React.FC = () => {
  const projects = PORTFOLIO_DATA.projects;

  // Pairs of projects to showcase in the 2-column view
  // Pair 0: Elementum 3D (Dark Neon) + Target Groww (Clean White) -> EXACT match to user's reference image!
  const projectPairs = [
    [projects[0], projects[5]], // Elementum 3D & Target Groww
    [projects[1], projects[2]], // Atlas Systems & Digit Classifier
    [projects[3], projects[4]], // AI Notes & Smart E-Waste
  ];

  const [currentPairIndex, setCurrentPairIndex] = useState<number>(0);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isArchiveOpen, setIsArchiveOpen] = useState<boolean>(false);
  const [activeFilter, setActiveFilter] = useState<string>("ALL");

  // Prevent global portfolio slide navigation when archive or project detail modal is open
  React.useEffect(() => {
    if (isArchiveOpen || selectedProject) {
      document.body.setAttribute("data-modal-open", "true");
      return () => {
        document.body.removeAttribute("data-modal-open");
      };
    }
  }, [isArchiveOpen, selectedProject]);

  const currentPair = projectPairs[currentPairIndex] || projectPairs[0];

  const handleNextPair = () => {
    soundFx.playTick();
    setCurrentPairIndex((prev) => (prev + 1) % projectPairs.length);
  };

  const handlePrevPair = () => {
    soundFx.playTick();
    setCurrentPairIndex((prev) => (prev - 1 + projectPairs.length) % projectPairs.length);
  };

  const filteredArchiveProjects = projects.filter((p) => {
    if (activeFilter === "ALL") return true;
    if (activeFilter === "AI/ML & GenAI") return p.category === "AI/ML & GenAI";
    if (activeFilter === "FRONTEND") return p.category === "Frontend";
    if (activeFilter === "FULL STACK") return p.category === "Full Stack";
    return true;
  });

  return (
    <section className="relative w-full h-full min-h-screen flex flex-col justify-between px-6 sm:px-10 md:px-14 lg:px-16 py-8 md:py-12 bg-black text-white overflow-y-auto">
      {/* Top Header / Subtle Breadcrumb */}
      <div className="relative z-10 pt-10 sm:pt-6 flex items-center justify-between text-xs font-mono text-neutral-400">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-amber-500" />
          <span className="tracking-widest uppercase font-semibold text-neutral-300">
            SELECTED WORKS
          </span>
        </div>

        {/* Pair Pagination Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={handlePrevPair}
            className="w-7 h-7 rounded-full border border-neutral-800 hover:border-white hover:text-white flex items-center justify-center transition-colors cursor-pointer text-neutral-400"
            aria-label="Previous pair"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>
          <span className="text-[11px] font-mono tracking-widest text-neutral-500">
            0{currentPairIndex + 1} / 0{projectPairs.length}
          </span>
          <button
            onClick={handleNextPair}
            className="w-7 h-7 rounded-full border border-neutral-800 hover:border-white hover:text-white flex items-center justify-center transition-colors cursor-pointer text-neutral-400"
            aria-label="Next pair"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* 2 SHOWCASE CARDS (Exact match to reference screenshot) */}
      <div className="relative z-10 my-auto py-6 sm:py-8 w-full max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPairIndex}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch w-full"
          >
            {currentPair.map((project) => {
              const categoryTag = categoryTags[project.id] || "UI/UX / DEVELOPMENT";

              return (
                <div
                  key={project.id}
                  className="group flex flex-col cursor-pointer"
                  onClick={() => {
                    soundFx.playOpenModal();
                    setSelectedProject(project);
                  }}
                >
                  {/* Rounded Preview Container */}
                  <div className="relative w-full aspect-[16/10] sm:aspect-[16/9.5] rounded-2xl sm:rounded-3xl lg:rounded-[28px] overflow-hidden border border-neutral-800/90 shadow-2xl transition-all duration-500 group-hover:border-neutral-700 group-hover:shadow-neutral-900/80">
                    <div className="w-full h-full transform transition-transform duration-700 ease-out group-hover:scale-[1.02]">
                      {projectMockups[project.id] || (
                        <div className="w-full h-full bg-neutral-900 flex items-center justify-center">
                          <span className="text-sm font-mono text-neutral-400">
                            {project.title}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Metadata below preview (Exact format from screenshot) */}
                  <div className="mt-4 sm:mt-5">
                    {/* Category Label: UI/UX / DEVELOPMENT */}
                    <span className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-neutral-400 block font-normal">
                      {categoryTag}
                    </span>

                    {/* Title + Slanted Orange Arrow: Project Name ↗ */}
                    <div className="mt-1.5 flex items-center justify-between">
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-normal tracking-tight text-white group-hover:text-amber-400 transition-colors flex items-center gap-2">
                        <span>{project.title}</span>
                        {/* Slanted Arrow ↗ in accent orange/salmon */}
                        <span className="text-[#ff6600] text-2xl sm:text-3xl font-light transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                          ↗
                        </span>
                      </h3>

                      {/* Direct Live Link Action */}
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="opacity-0 group-hover:opacity-100 transition-opacity text-xs font-mono text-neutral-400 hover:text-white flex items-center gap-1"
                        title="Open Live Preview"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">Live</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* BOTTOM CENTER PILL: [ VIEW ALL PROJECTS ↗ ] (Exact match to reference screenshot) */}
      <div className="relative z-10 pt-4 pb-4 sm:pb-2 flex items-center justify-center">
        <button
          onClick={() => {
            soundFx.playTick();
            setIsArchiveOpen(true);
          }}
          className="group inline-flex items-center gap-3.5 pl-6 pr-2 py-2 rounded-full border border-neutral-700/80 bg-neutral-950/80 hover:bg-neutral-900 hover:border-neutral-500 transition-all duration-300 cursor-pointer shadow-xl backdrop-blur-md"
        >
          <span className="text-[11px] sm:text-xs font-mono tracking-widest uppercase font-semibold text-neutral-200 group-hover:text-white">
            VIEW ALL PROJECTS
          </span>

          {/* White Circular Badge with Arrow inside */}
          <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-45">
            <ArrowUpRight className="w-4 h-4 text-black stroke-[2.5]" />
          </div>
        </button>
      </div>

      {/* ----------------------------------------------------------- */}
      {/* ALL PROJECTS ARCHIVE MODAL (Triggered by VIEW ALL PROJECTS) */}
      {/* ----------------------------------------------------------- */}
      <AnimatePresence>
        {isArchiveOpen && (
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
              className="relative w-full max-w-7xl h-[92vh] bg-black text-white rounded-3xl p-6 sm:p-10 border border-neutral-800 shadow-2xl flex flex-col justify-between overflow-hidden"
            >
              {/* Modal Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-800 pb-5 mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff6600]" />
                    <span className="text-xs font-mono tracking-widest text-[#ff6600] uppercase font-semibold">
                      Complete Project Archive
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-4xl font-normal tracking-tight text-white">
                    All Engineered Works & Research
                  </h3>
                </div>

                {/* Close Button / Back to Spotlight */}
                <button
                  onClick={() => {
                    soundFx.playTick();
                    setIsArchiveOpen(false);
                  }}
                  className="group inline-flex items-center gap-3 px-5 py-2 rounded-full border border-neutral-700 bg-neutral-900/80 hover:bg-neutral-800 hover:border-white transition-all text-xs font-mono tracking-wider uppercase cursor-pointer self-start sm:self-auto"
                >
                  <span>BACK TO SPOTLIGHT</span>
                  <div className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center transition-transform group-hover:scale-110">
                    <X className="w-3.5 h-3.5" />
                  </div>
                </button>
              </div>

              {/* Category Filters */}
              <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-4 no-scrollbar">
                {["ALL", "AI/ML & GenAI", "FRONTEND", "FULL STACK"].map((f) => {
                  const isActive = activeFilter === f;
                  return (
                    <button
                      key={f}
                      onClick={() => {
                        soundFx.playTick();
                        setActiveFilter(f);
                      }}
                      className={`px-4 py-1.5 rounded-full text-xs font-mono tracking-wider transition-colors cursor-pointer whitespace-nowrap ${
                        isActive
                          ? "bg-[#ff6600] text-white font-semibold shadow-lg shadow-orange-600/30"
                          : "bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800"
                      }`}
                    >
                      {f}
                    </button>
                  );
                })}
              </div>

              {/* All Projects Grid in Exact Same Luxury Reference Style */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 overflow-y-auto pr-2 pb-6">
                {filteredArchiveProjects.map((project) => {
                  const categoryTag = categoryTags[project.id] || "UI/UX / DEVELOPMENT";

                  return (
                    <div
                      key={project.id}
                      className="group flex flex-col cursor-pointer"
                      onClick={() => {
                        soundFx.playOpenModal();
                        setSelectedProject(project);
                      }}
                    >
                      {/* Rounded Preview Container */}
                      <div className="relative w-full aspect-[16/10] sm:aspect-[16/9.5] rounded-2xl sm:rounded-3xl lg:rounded-[28px] overflow-hidden border border-neutral-800/90 shadow-2xl transition-all duration-500 group-hover:border-neutral-700 group-hover:shadow-neutral-900/80 bg-neutral-950">
                        <div className="w-full h-full transform transition-transform duration-700 ease-out group-hover:scale-[1.02]">
                          {projectMockups[project.id] || (
                            <div className="w-full h-full bg-neutral-900 flex items-center justify-center">
                              <span className="text-sm font-mono text-neutral-400">
                                {project.title}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Metadata below preview (Exact format from screenshot) */}
                      <div className="mt-4 sm:mt-5">
                        {/* Category Label: UI/UX / DEVELOPMENT */}
                        <span className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-neutral-400 block font-normal">
                          {categoryTag}
                        </span>

                        {/* Title + Slanted Orange Arrow: Project Name ↗ */}
                        <div className="mt-1.5 flex items-center justify-between">
                          <h3 className="text-2xl sm:text-3xl font-normal tracking-tight text-white group-hover:text-amber-400 transition-colors flex items-center gap-2">
                            <span>{project.title}</span>
                            {/* Slanted Arrow ↗ in accent orange/salmon */}
                            <span className="text-[#ff6600] text-2xl sm:text-3xl font-light transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                              ↗
                            </span>
                          </h3>

                          {/* Direct Actions: GitHub & Live */}
                          <div className="flex items-center gap-3 text-xs font-mono">
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="text-neutral-400 hover:text-white flex items-center gap-1 transition-colors"
                              title="GitHub Repository"
                            >
                              <GithubIcon className="w-3.5 h-3.5" />
                              <span className="hidden sm:inline">Code</span>
                            </a>
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="text-[#ff6600] hover:text-amber-300 flex items-center gap-1 transition-colors font-semibold"
                              title="Live Website"
                            >
                              <ExternalLink className="w-3.5 h-3.5" />
                              <span className="hidden sm:inline">Live</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Deep-Dive Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
