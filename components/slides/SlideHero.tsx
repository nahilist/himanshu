"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

interface SlideHeroProps {
  onViewProjects?: () => void;
  onOpenResume?: () => void;
  onContactMe?: () => void;
}

export const SlideHero: React.FC<SlideHeroProps> = () => {
  const { personal } = PORTFOLIO_DATA;

  return (
    <section className="relative w-full h-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 md:px-12 bg-white overflow-hidden">
      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center justify-center pt-2 sm:pt-4">
        {/* Portrait Image with aligned Amber Glow */}
        <div className="relative flex items-center justify-center mb-4 sm:mb-6">
          {/* Diffused amber aura positioned precisely behind the person on all screen sizes */}
          <div className="absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none -z-10">
            <motion.div
              animate={{
                scale: [1, 1.08, 0.98, 1],
                opacity: [0.85, 1, 0.8, 0.85],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-[340px] h-[340px] sm:w-[460px] sm:h-[460px] md:w-[580px] md:h-[580px] rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(255, 120, 20, 0.85) 0%, rgba(255, 160, 50, 0.52) 36%, rgba(255, 210, 150, 0.24) 58%, rgba(255, 255, 255, 0) 75%)",
                filter: "blur(40px)",
              }}
            />
          </div>

          {/* Cutout Portrait Image - enlarged on mobile for bold prominence with soft bottom fade */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-[17rem] h-[19.5rem] sm:w-[19rem] sm:h-[22rem] md:w-[21rem] md:h-[24rem] lg:w-[23rem] lg:h-[26.5rem] flex items-end justify-center select-none pointer-events-none"
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, black 0%, black 76%, transparent 99%)",
              maskImage:
                "linear-gradient(to bottom, black 0%, black 76%, transparent 99%)",
            }}
          >
            <Image
              src="/pic-remove-background.png"
              alt={personal.name}
              fill
              sizes="(max-width: 640px) 272px, (max-width: 768px) 304px, (max-width: 1024px) 336px, 368px"
              priority
              className="object-contain object-bottom drop-shadow-2xl"
            />
          </motion.div>
        </div>

        {/* Candidate Greeting & Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-light tracking-tight leading-[1.06] text-neutral-900"
        >
          <span>Hello, I am </span>
          <span className="font-extrabold tracking-normal text-neutral-950 block sm:inline">
            {personal.name}
          </span>
        </motion.h1>

        {/* Role Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-3 sm:mt-5 flex items-center justify-center gap-2 sm:gap-2.5 text-sm sm:text-xl md:text-2xl lg:text-3xl font-normal text-neutral-800"
        >
          <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500 shrink-0" />
          <span className="font-mono tracking-tight font-semibold bg-gradient-to-r from-neutral-900 via-amber-700 to-neutral-900 bg-clip-text text-transparent">
            {personal.role}
          </span>
        </motion.div>
      </div>
    </section>
  );
};
