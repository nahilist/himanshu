"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { soundFx } from "@/utils/audio";
import { PORTFOLIO_DATA, ArchiveProject } from "@/data/portfolioData";

export const SlideProjectsArchive: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("ALL");
  const [selectedProject, setSelectedProject] = useState<ArchiveProject | null>(null);

  const filters = ["ALL", "UI/UX", "DEVELOPMENT", "BRANDING", "3D ANIMATION"];

  const filteredProjects = PORTFOLIO_DATA.archiveProjects.filter((p) =>
    activeFilter === "ALL" ? true : p.tags.includes(activeFilter)
  );

  return (
    <section className="relative w-full h-full min-h-screen flex flex-col justify-between p-6 md:p-14 bg-black text-white overflow-y-auto select-none">
      {/* Top Header & View All button matching Image 5 */}
      <div className="relative z-10 pt-16 md:pt-14 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10">
        <div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-white">
            Our Craft, Your Expression.
          </h2>
        </div>

        {/* View All Button matching Image 5 */}
        <button
          onClick={() => {
            soundFx.playTick();
            setActiveFilter("ALL");
          }}
          className="self-start sm:self-auto group flex items-center gap-2 px-4 py-2 rounded-full border border-white/25 hover:border-white text-xs font-mono tracking-widest uppercase transition-colors cursor-pointer"
        >
          <span>VIEW ALL</span>
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </div>

      {/* Filter Tabs matching Image 5 */}
      <div className="relative z-10 py-5 flex items-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar">
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

      {/* Projects Grid matching Images 3, 4 & 5 */}
      <div className="relative z-10 my-auto py-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="group cursor-pointer flex flex-col"
              onClick={() => {
                soundFx.playOpenModal();
                setSelectedProject(project);
              }}
            >
              {/* Card Visual Container */}
              <div className="relative w-full aspect-[16/10] rounded-2xl md:rounded-[24px] overflow-hidden border border-white/10 shadow-2xl transition-transform duration-500 group-hover:scale-[1.015]">
                {/* 1. HorizonX Preview (Image 5 Left) */}
                {project.previewType === "horizon" && (
                  <div className="w-full h-full bg-[#fbfbfb] text-neutral-900 p-5 sm:p-7 flex flex-col justify-between overflow-hidden">
                    <div className="flex items-center justify-between text-[10px] font-mono text-neutral-500 border-b border-neutral-200/80 pb-2.5">
                      <span className="font-extrabold text-neutral-900 tracking-wider">
                        HorizonX
                      </span>
                      <div className="hidden sm:flex items-center gap-3">
                        <span>Explore</span>
                        <span>Tools</span>
                        <span>Pricing</span>
                        <span>Docs</span>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-black text-white text-[9px]">
                        Sign Up
                      </span>
                    </div>

                    {/* Headline */}
                    <div className="text-center my-2">
                      <h4 className="text-lg sm:text-2xl font-black tracking-tight text-neutral-900 max-w-sm mx-auto leading-tight">
                        The premium UI & code library for the vibecoding era.
                      </h4>
                    </div>

                    {/* Fanned Cards Mockup Graphic */}
                    <div className="relative flex items-center justify-center py-2">
                      <div className="flex items-center justify-center -space-x-4 sm:-space-x-6">
                        <div className="w-14 sm:w-20 h-20 sm:h-28 rounded-lg bg-neutral-900 shadow-xl -rotate-12 border border-neutral-700 flex items-center justify-center text-[8px] text-white p-1">
                          TRANSFORM
                        </div>
                        <div className="w-14 sm:w-20 h-20 sm:h-28 rounded-lg bg-neutral-800 shadow-xl -rotate-6 border border-neutral-700 flex items-center justify-center text-[8px] text-white p-1">
                          WIREFRAME
                        </div>
                        <div className="w-16 sm:w-22 h-22 sm:h-30 rounded-lg bg-gradient-to-br from-cyan-600 to-blue-900 shadow-2xl z-10 border border-white/30 flex items-center justify-center text-[9px] text-white font-bold p-1">
                          DRIP 3D
                        </div>
                        <div className="w-14 sm:w-20 h-20 sm:h-28 rounded-lg bg-neutral-800 shadow-xl rotate-6 border border-neutral-700 flex items-center justify-center text-[8px] text-white p-1">
                          CYBER UI
                        </div>
                        <div className="w-14 sm:w-20 h-20 sm:h-28 rounded-lg bg-amber-700 shadow-xl rotate-12 border border-amber-500/50 flex items-center justify-center text-[8px] text-white p-1">
                          CAN REEL
                        </div>
                      </div>
                    </div>

                    {/* CTA pill buttons */}
                    <div className="flex items-center justify-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-black text-white text-[9px] font-semibold">
                        Subscribe — $24.99/mo
                      </span>
                      <span className="px-3 py-1 rounded-full border border-neutral-300 text-neutral-800 text-[9px] font-medium">
                        Explore Library
                      </span>
                    </div>
                  </div>
                )}

                {/* 2. The Social Elite Preview (Image 5 Right) */}
                {project.previewType === "social-elite" && (
                  <div className="w-full h-full bg-[#0d0d11] relative overflow-hidden flex flex-col justify-between p-6 sm:p-8">
                    {/* Atmospheric Stadium Concert with Fireworks simulation */}
                    <div className="absolute inset-0 bg-radial from-amber-600/30 via-neutral-900/90 to-black" />
                    <div className="absolute top-0 right-0 w-72 h-72 bg-amber-500/20 rounded-full blur-3xl" />
                    {/* Pyro sparks simulation */}
                    <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#ffd700_1px,transparent_1px)] [background-size:16px_16px]" />

                    {/* Top Agency credits */}
                    <div className="relative z-10 flex items-start justify-between text-[9px] font-mono text-neutral-300">
                      <div>
                        <span className="block font-bold">360° CREATIVE SERVICES</span>
                        <span className="text-neutral-400">PRODUCTION • CASTING • BRAND STRATEGISTS</span>
                      </div>
                      <span className="font-bold border border-white/20 px-2 py-0.5 rounded">
                        CONTACT [MENU]
                      </span>
                    </div>

                    {/* Giant Headline */}
                    <div className="relative z-10 my-auto text-center">
                      <h3 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white uppercase drop-shadow-lg">
                        THE SOCIAL ELITE
                      </h3>
                    </div>

                    {/* Stadium crowd silhouette */}
                    <div className="relative z-10 flex items-end justify-between text-[9px] font-mono text-neutral-400">
                      <span>INSTAGRAM • LINKEDIN</span>
                      <span>SCROLL TO EXPLORE ↓</span>
                    </div>
                  </div>
                )}

                {/* 3. The Social Inc Preview (Image 3 Left) */}
                {project.previewType === "social-inc" && (
                  <div className="w-full h-full bg-[#0a0714] relative overflow-hidden flex flex-col justify-between p-6 sm:p-8">
                    {/* Purple Neon Perspective Grid */}
                    <div
                      className="absolute inset-0 opacity-25"
                      style={{
                        backgroundImage: `linear-gradient(to right, #8b5cf6 1px, transparent 1px), linear-gradient(to bottom, #8b5cf6 1px, transparent 1px)`,
                        backgroundSize: "28px 28px",
                      }}
                    />

                    {/* Top In-App Header */}
                    <div className="relative z-10 flex items-center justify-between">
                      <div className="w-6 h-6 rounded-full border border-neutral-700 flex items-center justify-center text-[10px]">
                        ≡
                      </div>
                      <span className="font-extrabold tracking-widest text-xs text-fuchsia-400">
                        SOCIAL INC
                      </span>
                      <span className="px-3 py-1 rounded-full bg-white/10 text-[9px] font-mono">
                        CONTACT US
                      </span>
                    </div>

                    {/* Headline */}
                    <div className="relative z-10 my-auto text-center">
                      <h3 className="text-3xl sm:text-5xl font-black tracking-tight text-fuchsia-400 uppercase leading-none">
                        CONNECTING
                      </h3>
                      <div className="flex items-center justify-center gap-2 mt-2">
                        <span className="font-extrabold text-sm sm:text-lg text-white">
                          BRANDS
                        </span>
                        <span className="text-cyan-400 text-sm">❇</span>
                        <span className="font-bold text-xs sm:text-sm text-neutral-300">
                          IN THE SAFEST HANDS
                        </span>
                      </div>
                    </div>

                    {/* Floating Cards Mockup Graphic */}
                    <div className="relative z-10 flex justify-center items-center gap-3">
                      <div className="w-14 h-20 rounded-md bg-neutral-800 -rotate-12 border border-neutral-600 shadow-xl" />
                      <div className="w-16 h-22 rounded-md bg-neutral-900 border border-fuchsia-500/40 shadow-xl" />
                      <div className="w-14 h-20 rounded-md bg-neutral-800 rotate-12 border border-neutral-600 shadow-xl" />
                    </div>
                  </div>
                )}

                {/* 4. Munch Preview (Image 3 Right) */}
                {project.previewType === "munch" && (
                  <div className="w-full h-full bg-white text-neutral-900 p-6 sm:p-8 flex flex-col justify-between overflow-hidden">
                    {/* Top Bar */}
                    <div className="flex items-center justify-between text-[9px] font-mono text-neutral-500 border-b border-neutral-200 pb-2">
                      <span className="font-black text-sm text-neutral-900">munch</span>
                      <div className="hidden sm:flex items-center gap-3">
                        <span>• Menu</span>
                        <span>AIM Approach</span>
                        <span>Our Work</span>
                        <span>Brand Activation</span>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-black text-white text-[8px]">
                        Get in Touch
                      </span>
                    </div>

                    {/* Headline */}
                    <div className="text-center my-2">
                      <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 leading-tight">
                        Engineered for
                        <br />
                        Business <span className="text-rose-500">Results</span>
                      </h3>
                      <p className="text-[10px] text-neutral-500 mt-1 max-w-xs mx-auto">
                        Audience-first selection. Efficient strategy. Engaging Content.
                      </p>
                    </div>

                    {/* Row of curved portrait photo cards */}
                    <div className="flex items-center justify-center gap-2 overflow-hidden py-1">
                      <div className="w-12 sm:w-16 h-20 sm:h-24 rounded-2xl bg-amber-200 flex items-end justify-center pb-1 text-[8px] font-bold text-neutral-700">
                        CREATOR
                      </div>
                      <div className="w-12 sm:w-16 h-20 sm:h-24 rounded-2xl bg-emerald-700 flex items-end justify-center pb-1 text-[8px] font-bold text-white">
                        TALENT
                      </div>
                      <div className="w-12 sm:w-16 h-20 sm:h-24 rounded-2xl bg-neutral-800 flex items-end justify-center pb-1 text-[8px] font-bold text-white">
                        DIRECTOR
                      </div>
                      <div className="w-12 sm:w-16 h-20 sm:h-24 rounded-2xl bg-orange-400 flex items-end justify-center pb-1 text-[8px] font-bold text-neutral-900">
                        STRATEGY
                      </div>
                      <div className="w-12 sm:w-16 h-20 sm:h-24 rounded-2xl bg-rose-300 flex items-end justify-center pb-1 text-[8px] font-bold text-neutral-800">
                        ANALYST
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Card Labels matching Images 3 & 5 */}
              <div className="mt-3 flex flex-col items-start">
                <span className="text-[10px] font-mono tracking-wider text-neutral-500 uppercase">
                  {project.category}
                </span>
                <div className="flex items-center gap-1.5 mt-0.5 group-hover:text-amber-400 transition-colors">
                  <h4 className="text-lg sm:text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                    {project.title}
                  </h4>
                  <ArrowUpRight className="w-4 h-4 text-amber-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Bottom Center "VIEW ALL PROJECTS ↗" Button matching Image 4 */}
      <div className="relative z-10 pt-6 pb-12 flex justify-center">
        <button
          onClick={() => {
            soundFx.playOpenModal();
            setActiveFilter("ALL");
          }}
          className="group flex items-center gap-3 px-6 py-2.5 rounded-full border border-white/40 bg-black hover:border-white transition-all duration-300 cursor-pointer"
        >
          <span className="text-xs font-mono tracking-widest text-white uppercase font-medium">
            VIEW ALL PROJECTS
          </span>
          <div className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center transition-transform group-hover:rotate-45">
            <ArrowUpRight className="w-3.5 h-3.5" />
          </div>
        </button>
      </div>

      {/* Case Study Detail Lightbox */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-xl text-white"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="relative w-full max-w-3xl bg-neutral-900 rounded-3xl p-6 md:p-10 border border-white/15 shadow-2xl"
            >
              <div className="flex items-start justify-between border-b border-white/10 pb-4 mb-6">
                <div>
                  <span className="text-[10px] font-mono text-amber-400 tracking-widest uppercase block">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
                    {selectedProject.title}
                  </h3>
                </div>
                <button
                  onClick={() => {
                    soundFx.playTick();
                    setSelectedProject(null);
                  }}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-4 text-sm text-neutral-300 leading-relaxed">
                <p className="text-base sm:text-lg font-medium text-white">
                  {selectedProject.headline}
                </p>
                <p className="text-neutral-400">{selectedProject.subtext}</p>
                <div className="pt-4 flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-white/10 text-[10px] font-mono text-neutral-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex justify-end">
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-500 hover:bg-amber-400 text-black font-semibold text-xs font-mono transition-colors"
                >
                  <span>VISIT LIVE CASE STUDY</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

