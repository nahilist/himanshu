"use client";

import React from "react";
import { motion } from "framer-motion";
import { WatchShowreelBadge } from "@/components/WatchShowreelBadge";

interface SlideDripDetailProps {
  onOpenShowreel: () => void;
}

export const SlideDripDetail: React.FC<SlideDripDetailProps> = ({ onOpenShowreel }) => {
  return (
    <section className="relative w-full h-full min-h-screen flex items-center justify-center p-4 sm:p-8 md:p-12 lg:p-14 bg-white select-none">
      {/* Outer rounded card container matching Image 3 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full h-[82vh] max-h-[820px] rounded-3xl md:rounded-[32px] overflow-hidden shadow-2xl bg-gradient-to-br from-[#caa788] via-[#b89a7d] to-[#a6886e] p-8 md:p-16 flex items-center justify-between"
      >
        {/* Subtle warm lighting texture */}
        <div className="absolute inset-0 bg-radial from-amber-200/20 via-transparent to-black/20 pointer-events-none" />

        {/* 3-Column Layout: Left Headline | Center 3D Lid | Right Editorial Copy */}
        <div className="relative z-10 w-full h-full flex flex-col md:flex-row items-center justify-between">
          {/* Left: Bold "Long Lasting" Typography */}
          <div className="w-full md:w-1/3 flex flex-col items-start justify-center">
            <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] font-black text-neutral-950 tracking-tight leading-none">
              Long
            </h2>
            <span className="text-3xl sm:text-5xl md:text-6xl font-light text-neutral-900 tracking-tight mt-1">
              Lasting
            </span>
          </div>

          {/* Center: 3D Product Cap Render Graphic */}
          <div className="w-full md:w-1/3 flex items-center justify-center my-6 md:my-0">
            <motion.div
              animate={{
                y: [-6, 6, -6],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative flex flex-col items-center"
            >
              {/* Soft Ground Shadow */}
              <div className="absolute -bottom-8 w-44 h-8 bg-black/40 rounded-full blur-xl" />

              {/* Realistic Matte Black Lid */}
              <div className="relative w-48 h-36 md:w-60 md:h-44 rounded-[28px] bg-gradient-to-b from-[#2e2a27] via-[#1a1715] to-[#100f0e] shadow-[0_25px_50px_rgba(0,0,0,0.5)] border-t border-amber-100/20 overflow-hidden flex items-center justify-center">
                {/* Rubber textured grip ribs */}
                <div className="absolute inset-x-0 bottom-4 flex justify-center gap-1 opacity-20">
                  {Array.from({ length: 18 }).map((_, i) => (
                    <div key={i} className="w-1 h-6 bg-white rounded-full" />
                  ))}
                </div>

                {/* Ambient top light curve */}
                <div className="absolute top-0 inset-x-8 h-2 bg-gradient-to-r from-transparent via-amber-200/40 to-transparent blur-[1px]" />
              </div>

              {/* Lower threaded collar ring */}
              <div className="w-36 md:w-44 h-7 -mt-1 rounded-b-xl bg-gradient-to-r from-neutral-600 via-neutral-300 to-neutral-700 shadow-md border-t border-neutral-800" />
            </motion.div>
          </div>

          {/* Right: Editorial Paragraph Text */}
          <div className="w-full md:w-1/3 flex flex-col justify-center items-end text-left md:text-left">
            <p className="max-w-xs text-xs sm:text-sm md:text-base text-neutral-900 leading-relaxed font-normal tracking-wide">
              Crafted with premium quality materials coupled with a rubber padding to keep the bottle stable and clean. It not only looks stunning but also ensures longevity.
            </p>
          </div>
        </div>

        {/* Centered "▷ | WATCH SHOWREEL" overlay */}
        <WatchShowreelBadge onOpen={onOpenShowreel} theme="dark" />
      </motion.div>
    </section>
  );
};

