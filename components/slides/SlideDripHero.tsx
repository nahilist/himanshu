"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WatchShowreelBadge } from "@/components/WatchShowreelBadge";
import { soundFx } from "@/utils/audio";

interface SlideDripHeroProps {
  onOpenShowreel: () => void;
}

export const SlideDripHero: React.FC<SlideDripHeroProps> = ({ onOpenShowreel }) => {
  // Sub-view mode: 0 = Laptop Hero (Img 1), 1 = Bento Grid (Img 2), 2 = Craft Detail (Img 3)
  const [subView, setSubView] = useState<0 | 1 | 2>(0);

  const switchSubView = (index: 0 | 1 | 2) => {
    soundFx.playTick();
    setSubView(index);
  };

  return (
    <section className="relative w-full h-full min-h-screen flex flex-col items-center justify-center p-4 sm:p-8 md:p-12 lg:p-14 bg-white">
      {/* Sub-view Navigation Pills */}
      <div className="absolute top-20 z-30 flex items-center gap-2">
        <div className="flex items-center gap-1 p-1 rounded-full bg-neutral-100/90 border border-neutral-200/80 backdrop-blur-md shadow-xs">
          {[
            { label: "Hardware Showcase", id: 0 },
            { label: "Bento Architecture", id: 1 },
            { label: "Craft & Longevity", id: 2 },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => switchSubView(tab.id as 0 | 1 | 2)}
              className={`px-3 py-1 rounded-full text-[11px] font-mono tracking-wider transition-all duration-300 cursor-pointer ${
                subView === tab.id
                  ? "bg-neutral-900 text-white font-semibold shadow-xs"
                  : "text-neutral-600 hover:text-neutral-900"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Container */}
      <div className="relative w-full h-[82vh] max-h-[820px] rounded-3xl md:rounded-[32px] overflow-hidden shadow-2xl flex items-center justify-center">
        <AnimatePresence mode="wait">
          {/* 1. SUB-VIEW 0: Laptop Hero (Reference Image 1) */}
          {subView === 0 && (
            <motion.div
              key="laptop-view"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full h-full bg-[#121214] flex items-center justify-center overflow-hidden"
            >
              {/* Rocky landscape and lighting */}
              <div className="absolute inset-0 z-0 overflow-hidden bg-radial from-[#222226] via-[#141416] to-[#0a0a0c]">
                <div className="absolute -bottom-10 -left-20 w-[600px] h-[350px] bg-gradient-to-tr from-black via-neutral-900/80 to-transparent rounded-full blur-2xl opacity-80" />
                <div className="absolute -bottom-10 -right-20 w-[600px] h-[350px] bg-gradient-to-tl from-black via-neutral-900/80 to-transparent rounded-full blur-2xl opacity-80" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[450px] rounded-full bg-amber-700/10 blur-[100px] pointer-events-none" />

                <svg
                  className="absolute bottom-0 inset-x-0 w-full h-44 text-black/50 opacity-60 pointer-events-none"
                  viewBox="0 0 1200 240"
                  preserveAspectRatio="none"
                  fill="currentColor"
                >
                  <path d="M0 240L30 180L90 200L180 150L250 190L340 130L440 170L520 120L610 160L720 110L820 150L930 100L1020 140L1120 90L1200 130L1200 240Z" />
                </svg>
              </div>

              {/* 3D MacBook Pro Mockup */}
              <div className="relative z-10 w-[92%] max-w-4xl flex flex-col items-center">
                <div className="relative w-full aspect-[16/10] bg-[#0c0c0e] rounded-t-2xl border-[3px] border-neutral-700/60 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] overflow-hidden">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-3.5 bg-neutral-900 rounded-b-md z-30 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-neutral-950 border border-neutral-700 flex items-center justify-center">
                      <span className="w-0.5 h-0.5 rounded-full bg-cyan-500/80" />
                    </div>
                  </div>

                  <div className="relative z-20 h-6 px-4 bg-neutral-900/90 backdrop-blur-md flex items-center justify-between text-[9px] text-neutral-400 font-sans border-b border-white/5">
                    <div className="flex items-center gap-2">
                      <span className="text-neutral-300 font-semibold"></span>
                      <span className="text-neutral-200 font-medium">Finder</span>
                      <span className="hidden sm:inline">File</span>
                      <span className="hidden sm:inline">Edit</span>
                      <span className="hidden sm:inline">View</span>
                    </div>
                    <div className="flex items-center gap-2 font-mono text-[8px]">
                      <span>Mon Jun 24</span>
                      <span>9:41 AM</span>
                    </div>
                  </div>

                  <div className="relative w-full h-[calc(100%-24px)] bg-[#1e1a17] overflow-hidden flex flex-col justify-between">
                    <div className="h-7 px-3 bg-[#2a2521] border-b border-white/5 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-red-500/80" />
                        <span className="w-2 h-2 rounded-full bg-yellow-500/80" />
                        <span className="w-2 h-2 rounded-full bg-green-500/80" />
                      </div>
                      <div className="px-4 py-0.5 rounded-md bg-black/30 text-[9px] font-mono text-neutral-400 flex items-center gap-1">
                        <span>🔒</span>
                        <span>https://www.dripbottle.com</span>
                      </div>
                      <div className="w-10" />
                    </div>

                    <div className="px-6 py-3 flex items-center justify-between border-b border-white/5 bg-black/20">
                      <div className="flex items-center gap-4 text-[9px] text-neutral-300 tracking-wider">
                        <span>HOME</span>
                        <span>ABOUT</span>
                        <span>SHOP</span>
                      </div>
                      <span className="font-extrabold tracking-[0.2em] text-xs text-white">DRIP</span>
                      <div className="flex items-center gap-3 text-[9px] text-neutral-300">
                        <span>ACCOUNT</span>
                        <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 text-[8px]">
                          BUY NOW
                        </span>
                      </div>
                    </div>

                    <div className="relative flex-1 flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#241f1c] via-[#1a1715] to-[#12100e]">
                      <div className="w-48 h-48 rounded-full bg-amber-600/25 blur-3xl absolute" />
                      <div className="relative flex flex-col items-center">
                        <div className="w-28 h-18 rounded-t-2xl bg-gradient-to-r from-[#202022] via-[#3a3a40] to-[#1a1a1c] border-t border-white/20 shadow-xl flex items-center justify-center">
                          <div className="w-24 h-2 rounded-full bg-neutral-900/80 border border-neutral-700/50" />
                        </div>
                        <div className="w-20 h-4 bg-gradient-to-r from-neutral-400 via-neutral-200 to-neutral-500" />
                        <div className="w-36 h-32 rounded-t-3xl bg-gradient-to-r from-[#1c1a18] via-[#36322d] to-[#181614] border-t border-amber-200/20 shadow-2xl flex items-center justify-center">
                          <span className="font-mono text-neutral-500 text-[9px] tracking-widest uppercase">
                            STAINLESS 600ML
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative w-[104%] h-4 bg-gradient-to-b from-neutral-600 to-neutral-800 rounded-b-xl shadow-2xl flex justify-center">
                  <div className="w-24 h-1 bg-neutral-900 rounded-b-md" />
                </div>
              </div>

              <WatchShowreelBadge onOpen={onOpenShowreel} theme="dark" />
            </motion.div>
          )}

          {/* 2. SUB-VIEW 1: Bento Architecture (Reference Image 2) */}
          {subView === 1 && (
            <motion.div
              key="bento-view"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full h-full bg-[#9da2a6] p-2.5 sm:p-3.5 flex flex-col justify-between"
            >
              <div className="relative w-full h-full grid grid-cols-1 md:grid-cols-12 grid-rows-2 gap-2.5 sm:gap-3.5">
                {/* Top-Left */}
                <div className="md:col-span-6 rounded-2xl bg-[#c5b19c] p-6 flex flex-col justify-between overflow-hidden relative shadow-sm">
                  <div className="flex items-start justify-between z-10">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900 leading-none">
                        Stainless
                      </h3>
                      <span className="text-sm font-medium text-neutral-700 tracking-wide">
                        Steel
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-neutral-600 block leading-tight">Capacity</span>
                      <span className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
                        600ml
                      </span>
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="relative flex flex-col items-center">
                      <div className="w-28 h-20 rounded-2xl bg-gradient-to-b from-[#2b2724] via-[#1a1715] to-[#11100f] shadow-[0_20px_35px_rgba(0,0,0,0.45)] border-t border-amber-200/30 flex items-center justify-center">
                        <div className="w-20 h-1.5 rounded-full bg-amber-500/30 blur-[1px]" />
                      </div>
                      <div className="w-20 h-5 mt-1 rounded-sm bg-gradient-to-r from-neutral-400 via-neutral-200 to-neutral-500 border border-neutral-600 shadow-md" />
                    </div>
                  </div>
                </div>

                {/* Top-Right */}
                <div className="md:col-span-6 rounded-2xl bg-[#bca893] p-6 flex items-center justify-between overflow-hidden relative shadow-sm">
                  <div className="max-w-xs z-10">
                    <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900 leading-none">
                      UV-C
                    </h3>
                    <h4 className="text-lg font-medium text-neutral-800 mb-3">Water Bottle</h4>
                    <p className="text-[11px] sm:text-xs text-neutral-700 leading-relaxed max-w-[240px]">
                      Introducing our UV-C powered water bottle, the ultimate solution for clean, purified water on the go. With a button press, it purifies your water in 3 minutes, providing safe and clean drinking water everywhere.
                    </p>
                  </div>
                  <div className="relative h-full flex items-center justify-end pr-4">
                    <div className="w-20 sm:w-24 h-56 rounded-full bg-gradient-to-b from-[#181614] via-[#24211e] to-[#0d0c0a] shadow-2xl border-l border-amber-200/20" />
                  </div>
                </div>

                {/* Bottom-Left */}
                <div className="hidden md:flex md:col-span-2 rounded-2xl bg-[#c2ae9a] p-4 flex-col justify-end overflow-hidden relative shadow-sm">
                  <div className="w-12 h-32 rounded-t-xl bg-gradient-to-r from-[#201d1b] to-[#121110] mx-auto shadow-lg" />
                </div>

                {/* Bottom-Center */}
                <div className="md:col-span-7 rounded-2xl bg-[#0d0b17] p-6 flex flex-col justify-between overflow-hidden relative shadow-sm">
                  <div className="z-10">
                    <span className="text-sm font-medium text-neutral-400 block leading-tight">
                      Disinfection
                    </span>
                    <span className="text-sm font-medium text-neutral-400 block leading-tight">
                      Rate
                    </span>
                    <span className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                      99%
                    </span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="relative flex flex-col items-center">
                      <div className="absolute w-44 h-44 rounded-full bg-purple-600/35 blur-3xl" />
                      <div className="w-28 h-20 rounded-xl bg-neutral-900 border border-neutral-800 shadow-2xl flex items-center justify-center">
                        <div className="w-14 h-4 rounded-full bg-purple-500/20 border border-purple-400 shadow-[0_0_20px_#a855f7] flex items-center justify-center">
                          <div className="w-3 h-3 rounded-full bg-purple-300 blur-[2px]" />
                        </div>
                      </div>
                      <div className="w-20 h-6 mt-6 rounded-full bg-gradient-to-r from-neutral-800 via-purple-900/60 to-neutral-800 border border-purple-500/40 shadow-[0_0_15px_rgba(168,85,247,0.4)]" />
                    </div>
                  </div>
                </div>

                {/* Bottom-Right */}
                <div className="md:col-span-3 rounded-2xl bg-[#b9a590] p-6 flex flex-col justify-between overflow-hidden relative shadow-sm">
                  <div className="z-10">
                    <h3 className="text-2xl font-extrabold tracking-tight text-neutral-900 leading-none">
                      Stainless
                    </h3>
                    <span className="text-xs font-medium text-neutral-700">Steel</span>
                  </div>
                  <div className="absolute -bottom-4 right-4 flex flex-col items-center">
                    <div className="w-16 h-48 rounded-t-2xl bg-gradient-to-r from-[#171513] via-[#2a2622] to-[#100f0e] shadow-2xl border-t border-amber-200/20 flex items-center justify-center">
                      <span className="font-extrabold tracking-[0.25em] text-[10px] text-neutral-300 -rotate-90 select-none">
                        DRIP
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <WatchShowreelBadge onOpen={onOpenShowreel} theme="dark" />
            </motion.div>
          )}

          {/* 3. SUB-VIEW 2: Craft & Detail (Reference Image 3) */}
          {subView === 2 && (
            <motion.div
              key="detail-view"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full h-full bg-gradient-to-br from-[#caa788] via-[#b89a7d] to-[#a6886e] p-8 md:p-16 flex items-center justify-between"
            >
              <div className="absolute inset-0 bg-radial from-amber-200/20 via-transparent to-black/20 pointer-events-none" />

              <div className="relative z-10 w-full h-full flex flex-col md:flex-row items-center justify-between">
                <div className="w-full md:w-1/3 flex flex-col items-start justify-center">
                  <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] font-black text-neutral-950 tracking-tight leading-none">
                    Long
                  </h2>
                  <span className="text-3xl sm:text-5xl md:text-6xl font-light text-neutral-900 tracking-tight mt-1">
                    Lasting
                  </span>
                </div>

                <div className="w-full md:w-1/3 flex items-center justify-center my-6 md:my-0">
                  <motion.div
                    animate={{ y: [-6, 6, -6] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="relative flex flex-col items-center"
                  >
                    <div className="absolute -bottom-8 w-44 h-8 bg-black/40 rounded-full blur-xl" />
                    <div className="relative w-48 h-36 md:w-60 md:h-44 rounded-[28px] bg-gradient-to-b from-[#2e2a27] via-[#1a1715] to-[#100f0e] shadow-[0_25px_50px_rgba(0,0,0,0.5)] border-t border-amber-100/20 overflow-hidden flex items-center justify-center">
                      <div className="absolute inset-x-0 bottom-4 flex justify-center gap-1 opacity-20">
                        {Array.from({ length: 18 }).map((_, i) => (
                          <div key={i} className="w-1 h-6 bg-white rounded-full" />
                        ))}
                      </div>
                      <div className="absolute top-0 inset-x-8 h-2 bg-gradient-to-r from-transparent via-amber-200/40 to-transparent blur-[1px]" />
                    </div>
                    <div className="w-36 md:w-44 h-7 -mt-1 rounded-b-xl bg-gradient-to-r from-neutral-600 via-neutral-300 to-neutral-700 shadow-md border-t border-neutral-800" />
                  </motion.div>
                </div>

                <div className="w-full md:w-1/3 flex flex-col justify-center items-end text-left md:text-left">
                  <p className="max-w-xs text-xs sm:text-sm md:text-base text-neutral-900 leading-relaxed font-normal tracking-wide">
                    Crafted with premium quality materials coupled with a rubber padding to keep the bottle stable and clean. It not only looks stunning but also ensures longevity.
                  </p>
                </div>
              </div>

              <WatchShowreelBadge onOpen={onOpenShowreel} theme="dark" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
