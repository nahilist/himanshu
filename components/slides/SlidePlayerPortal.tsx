"use client";

import React from "react";
import { motion } from "framer-motion";
import { WatchShowreelBadge } from "@/components/WatchShowreelBadge";
import { Plus } from "lucide-react";

interface SlidePlayerPortalProps {
  onOpenShowreel: () => void;
}

export const SlidePlayerPortal: React.FC<SlidePlayerPortalProps> = ({ onOpenShowreel }) => {
  return (
    <section className="relative w-full h-full min-h-screen flex items-center justify-center p-4 sm:p-8 md:p-12 lg:p-14 bg-white select-none">
      {/* Outer rounded card container matching Image 5 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full h-[82vh] max-h-[820px] rounded-3xl md:rounded-[32px] overflow-hidden shadow-2xl bg-[#141416] p-4 sm:p-6 md:p-10 flex items-center justify-center"
      >
        {/* Ambient Top Studio Lighting */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-amber-500/10 blur-[120px] pointer-events-none" />

        {/* 3-Phone Presentation Grid */}
        <div className="relative z-10 w-full max-w-5xl h-full grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 items-center">
          {/* 1. Left Screen: Dark UI Sports Recruitment Card */}
          <div className="h-full max-h-[640px] rounded-2xl md:rounded-[24px] bg-[#0c0c0e] border border-neutral-800 p-5 flex flex-col justify-between overflow-hidden relative shadow-xl">
            {/* Top In-App Header */}
            <div className="flex items-center justify-between border-b border-neutral-800/80 pb-3">
              <div className="flex items-center gap-1.5">
                <div className="w-5 h-5 rounded-md bg-amber-400 flex items-center justify-center text-[10px] font-black text-black">
                  P
                </div>
                <span className="font-extrabold text-[10px] tracking-wider text-neutral-200">
                  PLAYER PORTAL
                </span>
              </div>
              <div className="flex flex-col gap-1 w-4 items-end">
                <span className="w-3.5 h-[1.5px] bg-amber-400 rounded-full" />
                <span className="w-2.5 h-[1.5px] bg-amber-400 rounded-full" />
              </div>
            </div>

            {/* Headline */}
            <div className="my-3">
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#cca344] tracking-tight uppercase leading-tight">
                INTRODUCING THE FUTURE OF SPORTS RECRUITMENT
              </h3>
            </div>

            {/* Tilted Athlete Trading Card Graphic */}
            <div className="relative my-auto flex items-center justify-center py-4">
              <motion.div
                whileHover={{ rotate: -12, scale: 1.05 }}
                className="w-40 sm:w-44 h-56 rounded-xl bg-gradient-to-br from-[#ffd000] via-[#eab308] to-[#ca8a04] p-2.5 shadow-2xl -rotate-6 border border-yellow-200/40 text-black flex flex-col justify-between"
              >
                <div className="flex items-center justify-between text-[9px] font-mono font-bold">
                  <span>#15 PEYTON</span>
                  <span>BASEBALL</span>
                </div>
                <div className="my-auto text-center">
                  <div className="w-20 h-20 rounded-full bg-black/20 mx-auto flex items-center justify-center font-black text-2xl text-neutral-900 border border-black/30">
                    JP
                  </div>
                  <span className="font-black text-sm block mt-1 tracking-tight">
                    JORDAN PEYTON
                  </span>
                  <span className="text-[9px] font-mono uppercase text-neutral-800">
                    DIVISION 1 PROSPECT
                  </span>
                </div>
                <div className="flex justify-between items-center text-[8px] font-mono border-t border-black/20 pt-1">
                  <span>CLASS 2026</span>
                  <span>TOP 1% SPEED</span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* 2. Center Screen: 3D Perspective iPhone with Yellow Screen */}
          <div className="hidden md:flex h-full max-h-[670px] flex-col items-center justify-center relative">
            <motion.div
              animate={{
                y: [-4, 4, -4],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative w-64 h-[520px] rounded-[38px] bg-gradient-to-b from-neutral-300 via-neutral-400 to-neutral-600 p-2 shadow-[0_30px_70px_rgba(0,0,0,0.8)] border border-neutral-300/40"
            >
              {/* Dynamic Island Screen */}
              <div className="w-full h-full rounded-[32px] bg-[#d99709] overflow-hidden flex flex-col justify-between p-4 relative shadow-inner">
                {/* Dynamic Island Pill */}
                <div className="w-24 h-4 bg-black rounded-full mx-auto mt-1 flex items-center justify-end px-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/80 animate-pulse" />
                </div>

                {/* Big typographic background watermark */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                  <span className="text-8xl font-black tracking-tighter text-black">
                    AYER
                  </span>
                </div>

                {/* Center Brand Logo */}
                <div className="relative z-10 text-center my-auto flex flex-col items-center">
                  <div className="w-16 h-16 rounded-2xl bg-black flex items-center justify-center shadow-xl mb-3">
                    <span className="text-amber-400 font-black text-3xl">P</span>
                  </div>
                  <h4 className="font-extrabold tracking-widest text-xs uppercase text-black">
                    PLAYER PORTAL
                  </h4>
                </div>

                {/* Bottom Home Indicator */}
                <div className="w-28 h-1 bg-black/60 rounded-full mx-auto mb-1" />
              </div>
            </motion.div>
          </div>

          {/* 3. Right Screen: Yellow UI Workflow & Video */}
          <div className="h-full max-h-[640px] rounded-2xl md:rounded-[24px] bg-[#cca316] border border-amber-500/30 p-5 flex flex-col justify-between overflow-hidden relative shadow-xl text-black">
            {/* Top In-App Header */}
            <div className="flex items-center justify-between border-b border-black/15 pb-3">
              <div className="flex items-center gap-1.5">
                <div className="w-5 h-5 rounded-md bg-black flex items-center justify-center text-[10px] font-black text-amber-400">
                  P
                </div>
                <span className="font-black text-[10px] tracking-wider text-black">
                  PLAYER PORTAL
                </span>
              </div>
              <div className="flex flex-col gap-1 w-4 items-end">
                <span className="w-3.5 h-[1.5px] bg-black rounded-full" />
                <span className="w-2.5 h-[1.5px] bg-black rounded-full" />
              </div>
            </div>

            {/* Target Audience Pill Tags matching Image 5 */}
            <div className="space-y-2 my-2">
              <div className="flex items-center gap-2 p-2 rounded-xl bg-black/10 backdrop-blur-xs font-bold text-[10px] sm:text-[11px] tracking-tight text-neutral-900">
                <div className="w-4 h-4 rounded-full bg-black/20 flex items-center justify-center">
                  <Plus className="w-2.5 h-2.5" />
                </div>
                <span>PARENTS/3RD PARTY ACCOUNT MANAGERS</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-xl bg-black/10 backdrop-blur-xs font-bold text-[10px] sm:text-[11px] tracking-tight text-neutral-900">
                <div className="w-4 h-4 rounded-full bg-black/20 flex items-center justify-center">
                  <Plus className="w-2.5 h-2.5" />
                </div>
                <span>SCOUTS/RECRUITERS</span>
              </div>
            </div>

            {/* Let's Start Headline & Subtext */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-black leading-none mb-2">
                LET&apos;S START
              </h2>
              <p className="text-[10px] sm:text-[11px] font-medium text-neutral-900 leading-snug">
                NEVER BEFORE HAS IT BEEN SO EASY TO MANAGE AN ATHLETE&apos;S JOURNEY IN ONE APPLICATION
              </p>
            </div>

            {/* Bottom App Video Thumbnail Card matching Image 5 */}
            <div className="mt-3 rounded-xl bg-neutral-950 p-2 overflow-hidden shadow-md">
              <div className="w-full h-16 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-between px-3 text-white text-[9px] font-mono">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-amber-400 text-black flex items-center justify-center font-bold text-[10px]">
                    ▶
                  </div>
                  <div>
                    <span className="font-bold text-white block">Game Film 2025</span>
                    <span className="text-neutral-400 text-[8px]">Inning 7 Highlight</span>
                  </div>
                </div>
                <span className="text-amber-400 font-bold">02:14</span>
              </div>
            </div>
          </div>
        </div>

        {/* Centered "▷ | WATCH SHOWREEL" overlay */}
        <WatchShowreelBadge onOpen={onOpenShowreel} theme="dark" />
      </motion.div>
    </section>
  );
};

