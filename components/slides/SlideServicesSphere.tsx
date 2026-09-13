"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tag, Code2, Crosshair, Gamepad2, Sparkles } from "lucide-react";
import { soundFx } from "@/utils/audio";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export const SlideServicesSphere: React.FC = () => {
  // State: 0 = "We Build Experiences That Breathe", 1 = "Made with Intention. Meant to Be Felt."
  const [viewState, setViewState] = useState<0 | 1>(0);
  const [activeDiscipline, setActiveDiscipline] = useState<string | null>(null);

  const services = PORTFOLIO_DATA.services;

  const toggleState = () => {
    soundFx.playTick();
    setViewState((prev) => (prev === 0 ? 1 : 0));
  };

  return (
    <section className="relative w-full h-full min-h-screen flex flex-col items-center justify-center p-6 md:p-14 bg-white overflow-hidden select-none">
      {/* Subtle warm ambient lighting on edges */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-amber-100/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-amber-100/40 blur-3xl pointer-events-none" />

      {/* State Switcher / Hint Badge */}
      <div className="absolute top-24 z-30 flex items-center gap-2">
        <button
          onClick={toggleState}
          className="group flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-100/80 hover:bg-neutral-900 hover:text-white text-[11px] font-mono tracking-wider uppercase text-neutral-600 transition-all duration-300 border border-neutral-200 cursor-pointer shadow-xs"
        >
          <Sparkles className="w-3 h-3 text-amber-500 group-hover:rotate-12 transition-transform" />
          <span>Toggle View: {viewState === 0 ? "Vision Mode" : "Intention Mode"}</span>
        </button>
      </div>

      {/* State 2 (Image 2): Split Top Headlines */}
      <AnimatePresence mode="wait">
        {viewState === 1 && (
          <motion.div
            key="split-header"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-24 md:top-28 inset-x-6 md:inset-x-16 z-20 flex flex-col md:flex-row items-start justify-between gap-4 pointer-events-none"
          >
            {/* Top-Left: "Made with Intention. Meant to Be Felt." */}
            <div className="max-w-md">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-neutral-900 leading-[1.12]">
                Made with Intention.
                <br />
                Meant to Be <span className="font-extrabold text-neutral-950">Felt.</span>
              </h2>
            </div>

            {/* Top-Right: "From the way words breathe to how animations flow..." */}
            <div className="max-w-xs md:text-right">
              <p className="text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed">
                {services.subtextB}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Center 3D Tactile Fuzzy Sphere Scene */}
      <div className="relative w-full max-w-2xl h-[420px] sm:h-[480px] md:h-[540px] flex items-center justify-center my-auto z-10">
        {/* Organic Fuzzy Sandy Sphere Graphic with procedural fur/particle depth */}
        <motion.div
          animate={{
            scale: [1, 1.03, 0.99, 1],
            rotate: [0, 4, -3, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative w-72 h-72 sm:w-96 sm:h-96 md:w-[420px] md:h-[420px] flex items-center justify-center rounded-full"
        >
          {/* Outer soft ambient depth */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#d5c3b0] via-[#eedecf] to-[#f7eee5] blur-sm shadow-[0_30px_70px_rgba(180,150,120,0.3)]" />

          {/* Procedural fibrous fur/hair particles using multi-layer SVG noise and radial gradient */}
          <div
            className="absolute inset-2 rounded-full overflow-hidden"
            style={{
              background:
                "radial-gradient(circle at 40% 35%, #fff0e2 0%, #e0cebd 35%, #c5b09d 70%, #a48c77 100%)",
            }}
          >
            {/* Fine procedural texture overlay resembling dense micro-fibers */}
            <div
              className="absolute inset-0 opacity-45 mix-blend-multiply"
              style={{
                backgroundImage: `radial-gradient(circle, #8a735c 0.75px, transparent 1px)`,
                backgroundSize: "6px 6px",
              }}
            />
            {/* Secondary noise layer */}
            <div
              className="absolute inset-0 opacity-30 mix-blend-overlay"
              style={{
                backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1.5px)`,
                backgroundSize: "9px 9px",
              }}
            />
            {/* Lighting highlight */}
            <div className="absolute top-4 left-8 w-44 h-44 rounded-full bg-white/40 blur-2xl pointer-events-none" />
          </div>

          {/* Micro-fur edge fringe simulation */}
          <div className="absolute -inset-2 rounded-full border-[10px] border-[#eedecf]/40 blur-[3px] pointer-events-none" />
        </motion.div>

        {/* State 1 (Image 1): Central Overlaid Headline */}
        <AnimatePresence mode="wait">
          {viewState === 0 && (
            <motion.div
              key="center-headline"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 flex flex-col items-center justify-center text-center z-20 px-4 pointer-events-none"
            >
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-extralight tracking-tight text-neutral-900 leading-[1.08]">
                We Build Experiences
                <br />
                <span className="font-medium text-neutral-950">That Breathe</span>
              </h1>
              <p className="mt-4 max-w-md text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed">
                {services.subtextA}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 4 Floating Discipline Pills Matching Image 1 & 2 */}
        {/* Top-Left: UI/UX */}
        <motion.button
          onClick={() => {
            soundFx.playTick();
            setActiveDiscipline(activeDiscipline === "ui-ux" ? null : "ui-ux");
          }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.96 }}
          className="absolute -top-3 sm:top-4 left-0 sm:left-4 z-20 flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md border border-neutral-200/90 shadow-lg hover:border-neutral-900 text-xs sm:text-sm font-medium text-neutral-900 transition-all cursor-pointer"
        >
          <Tag className="w-3.5 h-3.5 text-neutral-600" />
          <span>UI/UX</span>
        </motion.button>

        {/* Top-Right: Development */}
        <motion.button
          onClick={() => {
            soundFx.playTick();
            setActiveDiscipline(activeDiscipline === "development" ? null : "development");
          }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.96 }}
          className="absolute -top-3 sm:top-4 right-0 sm:right-4 z-20 flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md border border-neutral-200/90 shadow-lg hover:border-neutral-900 text-xs sm:text-sm font-medium text-neutral-900 transition-all cursor-pointer"
        >
          <Code2 className="w-3.5 h-3.5 text-neutral-600" />
          <span>Development</span>
        </motion.button>

        {/* Bottom-Left: Branding */}
        <motion.button
          onClick={() => {
            soundFx.playTick();
            setActiveDiscipline(activeDiscipline === "branding" ? null : "branding");
          }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.96 }}
          className="absolute -bottom-3 sm:bottom-4 left-0 sm:left-4 z-20 flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md border border-neutral-200/90 shadow-lg hover:border-neutral-900 text-xs sm:text-sm font-medium text-neutral-900 transition-all cursor-pointer"
        >
          <Crosshair className="w-3.5 h-3.5 text-neutral-600" />
          <span>Branding</span>
        </motion.button>

        {/* Bottom-Right: 3D Animation */}
        <motion.button
          onClick={() => {
            soundFx.playTick();
            setActiveDiscipline(activeDiscipline === "3d-animation" ? null : "3d-animation");
          }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.96 }}
          className="absolute -bottom-3 sm:bottom-4 right-0 sm:right-4 z-20 flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md border border-neutral-200/90 shadow-lg hover:border-neutral-900 text-xs sm:text-sm font-medium text-neutral-900 transition-all cursor-pointer"
        >
          <Gamepad2 className="w-3.5 h-3.5 text-neutral-600" />
          <span>3D Animation</span>
        </motion.button>
      </div>

      {/* Active Discipline Quick Drawer / Toast */}
      <AnimatePresence>
        {activeDiscipline && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-16 z-30 max-w-sm px-5 py-3 rounded-2xl bg-neutral-900/90 text-white backdrop-blur-md shadow-2xl text-center text-xs"
          >
            <span className="font-mono text-[10px] text-amber-400 uppercase tracking-widest block mb-0.5">
              {services.disciplines.find((d) => d.id === activeDiscipline)?.label}
            </span>
            <p className="text-neutral-300">
              {services.disciplines.find((d) => d.id === activeDiscipline)?.description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

