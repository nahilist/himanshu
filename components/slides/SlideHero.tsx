"use client";

import React from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export const SlideHero: React.FC = () => {
  const heroData = PORTFOLIO_DATA.slides[0];

  return (
    <section className="relative w-full h-full min-h-screen flex flex-col items-center justify-center px-6 md:px-12 bg-white overflow-hidden select-none">
      {/* Soft diffused sunset/amber radial aura matching Image 4 */}
      <div className="absolute top-[28%] left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0">
        <motion.div
          animate={{
            scale: [1, 1.08, 0.98, 1],
            opacity: [0.75, 0.9, 0.7, 0.75],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-[340px] h-[340px] sm:w-[500px] sm:h-[500px] md:w-[620px] md:h-[620px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(255, 120, 20, 0.75) 0%, rgba(255, 160, 50, 0.45) 32%, rgba(255, 210, 150, 0.2) 55%, rgba(255, 255, 255, 0) 72%)",
            filter: "blur(40px)",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center justify-center pt-8">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.4rem] font-light tracking-tight leading-[1.08] text-neutral-900"
        >
          <span>From </span>
          <span className="font-extrabold tracking-normal text-neutral-950 font-serif md:font-sans">
            Ideas
          </span>
          <span> to Impactful</span>
          <br className="hidden sm:inline" />
          <span className="block sm:inline sm:ml-4">Experiences</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 md:mt-8 max-w-xl text-neutral-500 text-xs sm:text-sm md:text-base font-normal leading-relaxed tracking-wide"
        >
          {heroData.description}
        </motion.p>
      </div>
    </section>
  );
};

