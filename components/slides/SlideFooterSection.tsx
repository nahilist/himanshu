"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Send, ChevronUp } from "lucide-react";
import { soundFx } from "@/utils/audio";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

interface SlideFooterSectionProps {
  onScrollTop: () => void;
}

export const SlideFooterSection: React.FC<SlideFooterSectionProps> = ({ onScrollTop }) => {
  const footer = PORTFOLIO_DATA.footer;

  return (
    <footer className="relative w-full h-full min-h-screen flex flex-col justify-between p-6 sm:p-10 md:p-14 bg-black text-white overflow-y-auto select-none">
      {/* 1. TOP SECTION: Headline + Awards Badges matching Images 2 & 3 */}
      <div className="relative z-10 pt-16 md:pt-14 pb-10 flex flex-col lg:flex-row lg:items-start justify-between gap-8 border-b border-neutral-800">
        {/* Left: Call to Action Headline + Email */}
        <div className="max-w-xl">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight leading-[1.08] text-white">
            Is there a fascinating
            <br />
            project brewing <span className="text-neutral-500">in your</span>
            <br />
            <span className="text-neutral-500">mind?</span>
          </h2>

          {/* Direct Email Link with Send Icon */}
          <div className="mt-8">
            <a
              href={`mailto:${PORTFOLIO_DATA.brand.email}`}
              className="inline-flex items-center gap-3 text-xl sm:text-3xl font-bold tracking-tight text-white hover:text-amber-400 transition-colors group"
            >
              <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center group-hover:scale-110 transition-transform">
                <Send className="w-4 h-4 -rotate-45" />
              </div>
              <span className="border-b-2 border-transparent group-hover:border-amber-400">
                {PORTFOLIO_DATA.brand.email}
              </span>
            </a>
          </div>
        </div>

        {/* Right: Award-Winning Studio Badges matching Images 2 & 3 */}
        <div className="lg:text-right space-y-4">
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
              Award-winning studio
            </h3>
            <p className="text-xs text-neutral-400 font-mono mt-1">
              Recognized by the world&apos;s leading design communities
            </p>
          </div>

          {/* Badges Row: AWWWARDS • THE WEBBY AWARDS • CSSDesignAwards */}
          <div className="flex items-center lg:justify-end gap-5 sm:gap-7 pt-2 flex-wrap">
            {/* AWWWARDS */}
            <div className="flex items-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity">
              <span className="font-serif font-black tracking-widest text-sm sm:text-base text-white">
                AWWWARDS<span className="text-amber-500">·</span>
              </span>
            </div>

            {/* THE WEBBY AWARDS */}
            <div className="flex items-center gap-2 px-2.5 py-1 border border-neutral-700 rounded bg-neutral-900/60 opacity-80 hover:opacity-100 transition-opacity">
              <div className="w-2.5 h-4 bg-white/80 rounded-xs" />
              <div className="text-left font-mono text-[9px] leading-tight text-neutral-300">
                <span className="font-bold block">THE</span>
                <span>WEBBY</span>
                <span className="text-[7px] block text-neutral-400">AWARDS</span>
              </div>
            </div>

            {/* CSSDesignAwards */}
            <div className="flex items-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity">
              <div className="w-4 h-4 rounded-full border-2 border-white flex items-center justify-center font-mono text-[8px] font-bold">
                S
              </div>
              <span className="font-sans font-bold text-xs sm:text-sm text-neutral-200">
                CSS<span className="font-light text-neutral-400">DesignAwards</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. MIDDLE SECTION: 4 Navigation Columns matching Images 2 & 3 */}
      <div className="relative z-10 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 border-b border-neutral-800 text-xs font-mono">
        {/* Col 1: ABOUT US */}
        <div className="space-y-3">
          <span className="text-[10px] tracking-widest uppercase text-neutral-500 font-bold block">
            ABOUT US
          </span>
          <ul className="space-y-2 text-neutral-300 font-sans text-sm">
            {footer.aboutUs.map((item, i) => (
              <li key={i}>
                <button
                  onClick={() => soundFx.playTick()}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 2: SERVICES */}
        <div className="space-y-3">
          <span className="text-[10px] tracking-widest uppercase text-neutral-500 font-bold block">
            SERVICES
          </span>
          <ul className="space-y-2 text-neutral-300 font-sans text-sm">
            {footer.services.map((item, i) => (
              <li key={i}>
                <button
                  onClick={() => soundFx.playTick()}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: OTHER SERVICES */}
        <div className="space-y-3">
          <span className="text-[10px] tracking-widest uppercase text-neutral-500 font-bold block">
            OTHER SERVICES
          </span>
          <ul className="space-y-2 text-neutral-300 font-sans text-sm">
            {footer.otherServices.map((item, i) => (
              <li key={i}>
                <button
                  onClick={() => soundFx.playTick()}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4: SOCIAL MEDIA */}
        <div className="space-y-3">
          <span className="text-[10px] tracking-widest uppercase text-neutral-500 font-bold block">
            SOCIAL MEDIA
          </span>
          <ul className="space-y-2 text-neutral-300 font-sans text-sm">
            {footer.socialMedia.map((item, i) => (
              <li key={i}>
                <a
                  href={`https://${item.toLowerCase()}.com`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 3. GIANT BRAND IDENTITY: nahilist Monogram & Typography */}
      <div className="relative z-10 py-8 sm:py-14 flex flex-col items-center justify-center w-full overflow-hidden select-none">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full flex flex-col items-center justify-center gap-6"
        >
          {/* Full Logo Presentation (emblem + wordmark) */}
          <div className="relative w-44 h-44 sm:w-60 sm:h-60 md:w-72 md:h-72 flex items-center justify-center">
            <Image
              src="/logo.png"
              alt="nahilist logo"
              width={320}
              height={320}
              className="w-full h-full object-contain invert contrast-125 brightness-110"
              priority
            />
          </div>
        </motion.div>
      </div>

      {/* 4. BOTTOM UTILITY & SCROLL TOP BAR */}
      <div className="relative z-10 pt-6 pb-2 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono text-neutral-500">
        {/* Social shortcut abbreviations */}
        <div className="flex items-center gap-4 text-xs font-bold text-neutral-400">
          <span className="hover:text-white transition-colors cursor-pointer">f</span>
          <span className="hover:text-white transition-colors cursor-pointer">yt</span>
          <span className="hover:text-white transition-colors cursor-pointer">in</span>
          <span className="hover:text-white transition-colors cursor-pointer">X</span>
          <span className="hover:text-white transition-colors cursor-pointer">tt</span>
        </div>

        {/* Legal Notices */}
        <div className="flex items-center gap-4 text-center sm:text-left">
          <span>2026 NAHILIST. All rights reserved</span>
          <span className="hover:text-neutral-300 transition-colors cursor-pointer">
            Privacy Policy
          </span>
          <span className="hover:text-neutral-300 transition-colors cursor-pointer">
            Terms & Conditions
          </span>
        </div>

        {/* Functional SCROLL TOP Button */}
        <button
          onClick={() => {
            soundFx.playSlideTransition();
            onScrollTop();
          }}
          className="group flex items-center gap-1.5 text-neutral-300 hover:text-white transition-colors cursor-pointer"
        >
          <span className="tracking-widest uppercase">SCROLL TOP</span>
          <div className="w-5 h-5 rounded-full border border-neutral-600 group-hover:border-white flex items-center justify-center transition-colors">
            <ChevronUp className="w-3 h-3 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </button>
      </div>
    </footer>
  );
};
