"use client";

import React from "react";
import { motion } from "framer-motion";
import { WatchShowreelBadge } from "@/components/WatchShowreelBadge";

interface SlideDripBentoProps {
  onOpenShowreel: () => void;
}

export const SlideDripBento: React.FC<SlideDripBentoProps> = ({ onOpenShowreel }) => {
  return (
    <section className="relative w-full h-full min-h-screen flex items-center justify-center p-4 sm:p-8 md:p-12 lg:p-14 bg-white select-none">
      {/* Outer rounded card container matching Image 2 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full h-[82vh] max-h-[820px] rounded-3xl md:rounded-[32px] overflow-hidden shadow-2xl bg-[#9da2a6] p-2.5 sm:p-3.5 flex flex-col justify-between"
      >
        {/* Bento Grid layout */}
        <div className="relative w-full h-full grid grid-cols-1 md:grid-cols-12 grid-rows-2 gap-2.5 sm:gap-3.5">
          {/* 1. Top-Left Card: Stainless Steel & 600ml */}
          <div className="md:col-span-6 rounded-2xl bg-[#c5b19c] p-6 flex flex-col justify-between overflow-hidden relative shadow-sm">
            {/* Top Bar inside card */}
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
                <span className="text-xs text-neutral-600 block leading-tight">
                  Capacity
                </span>
                <span className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
                  600ml
                </span>
              </div>
            </div>

            {/* 3D Floating Bottle Cap Graphic in Center */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="relative flex flex-col items-center">
                {/* Floating Lid with rubber grip and gold reflection */}
                <div className="w-28 h-20 rounded-2xl bg-gradient-to-b from-[#2b2724] via-[#1a1715] to-[#11100f] shadow-[0_20px_35px_rgba(0,0,0,0.45)] border-t border-amber-200/30 flex items-center justify-center">
                  <div className="w-20 h-1.5 rounded-full bg-amber-500/30 blur-[1px]" />
                </div>
                {/* Threaded steel inner collar */}
                <div className="w-20 h-5 mt-1 rounded-sm bg-gradient-to-r from-neutral-400 via-neutral-200 to-neutral-500 border border-neutral-600 shadow-md" />
              </div>
            </div>
          </div>

          {/* 2. Top-Right Card: UV-C Water Bottle */}
          <div className="md:col-span-6 rounded-2xl bg-[#bca893] p-6 flex items-center justify-between overflow-hidden relative shadow-sm">
            <div className="max-w-xs z-10">
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900 leading-none">
                UV-C
              </h3>
              <h4 className="text-lg font-medium text-neutral-800 mb-3">
                Water Bottle
              </h4>
              <p className="text-[11px] sm:text-xs text-neutral-700 leading-relaxed max-w-[240px]">
                Introducing our UV-C powered water bottle, the ultimate solution for clean, purified water on the go. With a button press, it purifies your water in 3 minutes, providing safe and clean drinking water everywhere.
              </p>
            </div>

            {/* Bottle Silhouette in right side */}
            <div className="relative h-full flex items-center justify-end pr-4">
              <div className="w-20 sm:w-24 h-56 rounded-full bg-gradient-to-b from-[#181614] via-[#24211e] to-[#0d0c0a] shadow-2xl border-l border-amber-200/20" />
            </div>
          </div>

          {/* 3. Bottom-Left Card */}
          <div className="hidden md:flex md:col-span-2 rounded-2xl bg-[#c2ae9a] p-4 flex-col justify-end overflow-hidden relative shadow-sm">
            <div className="w-12 h-32 rounded-t-xl bg-gradient-to-r from-[#201d1b] to-[#121110] mx-auto shadow-lg" />
          </div>

          {/* 4. Bottom-Center Card: Disinfection Rate 99% with UV chamber */}
          <div className="md:col-span-7 rounded-2xl bg-[#0d0b17] p-6 flex flex-col justify-between overflow-hidden relative shadow-sm">
            {/* Top Left Label */}
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

            {/* UV-C Chamber Visual with glowing purple neon */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="relative flex flex-col items-center">
                {/* Purple UV Glow aura */}
                <div className="absolute w-44 h-44 rounded-full bg-purple-600/35 blur-3xl" />

                {/* Cap Chamber */}
                <div className="w-28 h-20 rounded-xl bg-neutral-900 border border-neutral-800 shadow-2xl flex items-center justify-center">
                  {/* Glowing LED Ring */}
                  <div className="w-14 h-4 rounded-full bg-purple-500/20 border border-purple-400 shadow-[0_0_20px_#a855f7] flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-purple-300 blur-[2px]" />
                  </div>
                </div>

                {/* Lower reflection base */}
                <div className="w-20 h-6 mt-6 rounded-full bg-gradient-to-r from-neutral-800 via-purple-900/60 to-neutral-800 border border-purple-500/40 shadow-[0_0_15px_rgba(168,85,247,0.4)]" />
              </div>
            </div>
          </div>

          {/* 5. Bottom-Right Card: Stainless Steel Upright Bottle */}
          <div className="md:col-span-3 rounded-2xl bg-[#b9a590] p-6 flex flex-col justify-between overflow-hidden relative shadow-sm">
            <div className="z-10">
              <h3 className="text-2xl font-extrabold tracking-tight text-neutral-900 leading-none">
                Stainless
              </h3>
              <span className="text-xs font-medium text-neutral-700">Steel</span>
            </div>

            {/* Standing bottle with DRIP vertical brand text */}
            <div className="absolute -bottom-4 right-4 flex flex-col items-center">
              <div className="w-16 h-48 rounded-t-2xl bg-gradient-to-r from-[#171513] via-[#2a2622] to-[#100f0e] shadow-2xl border-t border-amber-200/20 flex items-center justify-center">
                <span className="font-extrabold tracking-[0.25em] text-[10px] text-neutral-300 -rotate-90 select-none">
                  DRIP
                </span>
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

