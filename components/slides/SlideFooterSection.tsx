"use client";

import React, { useState } from "react";
import {
  Send,
  ChevronUp,
  Copy,
  Check,
} from "lucide-react";
import {
  GithubIcon,
  LinkedinIcon,
  XIcon,
  YoutubeIcon,
  FacebookIcon,
} from "@/components/Icons";
import { soundFx } from "@/utils/audio";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

interface SlideFooterSectionProps {
  onScrollTop: () => void;
  onOpenResume?: () => void;
}

export const SlideFooterSection: React.FC<SlideFooterSectionProps> = ({
  onScrollTop,
  onOpenResume,
}) => {
  const { personal } = PORTFOLIO_DATA;
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(personal.email);
    soundFx.playOpenModal();
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2200);
  };

  return (
    <footer className="relative w-full h-full min-h-screen flex flex-col justify-between px-6 sm:px-10 md:px-14 lg:px-20 pt-24 sm:pt-28 md:pt-32 pb-6 sm:pb-8 bg-black text-white overflow-y-auto overscroll-contain selection:bg-white selection:text-black">
      {/* 1. TOP SECTION: Monumental Headline */}
      <div className="pb-6 sm:pb-10">
        <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] xl:text-[4.6rem] font-light tracking-tight leading-[1.06] text-white">
          Is there an{" "}
          <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-orange-300">
            intelligent project
          </span>
          <br className="hidden sm:inline" />{" "}
          brewing in your{" "}
          <span className="font-serif italic font-normal text-neutral-500">
            mind?
          </span>
        </h2>
      </div>

      {/* 2. ULTRA-PREMIUM EXECUTIVE EMAIL CONSOLE */}
      <div className="pb-8 sm:pb-12 flex flex-col md:flex-row md:items-center justify-between gap-5">
        {/* The Executive Dispatch Capsule */}
        <div className="group relative inline-flex items-center gap-3 sm:gap-4 p-2 sm:p-2.5 pr-4 sm:pr-6 rounded-2xl sm:rounded-full bg-neutral-900/90 hover:bg-neutral-900 border border-neutral-800 hover:border-neutral-700 shadow-2xl backdrop-blur-2xl transition-all duration-300 w-fit">
          {/* Subtle Ambient Hover Glow */}
          <div className="absolute -inset-0.5 rounded-2xl sm:rounded-full bg-gradient-to-r from-amber-500/20 via-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm pointer-events-none -z-10" />

          {/* Primary Clickable Mailto Action */}
          <a
            href={`mailto:${personal.email}`}
            onClick={() => soundFx.playTick()}
            className="flex items-center gap-3 sm:gap-4 group/link"
          >
            {/* Animated Interactive Icon Pod */}
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-full bg-white text-black flex items-center justify-center shrink-0 shadow-md transition-all duration-300 group-hover:scale-105 group-hover:bg-amber-400">
              <Send className="w-4 h-4 sm:w-5 sm:h-5 -rotate-45 ml-0.5 text-neutral-950 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>

            {/* Email Address & Subtitle */}
            <div className="flex flex-col text-left pr-1 sm:pr-2">
              <span className="text-[10px] sm:text-[10.5px] font-mono tracking-widest uppercase text-neutral-400 font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>DIRECT INBOX • SAY HELLO</span>
              </span>
              <span className="text-base xs:text-lg sm:text-2xl md:text-[1.65rem] font-bold tracking-tight text-white group-hover/link:text-amber-300 transition-colors font-sans">
                {personal.email}
              </span>
            </div>
          </a>

          {/* Divider */}
          <div className="hidden xs:block h-7 w-[1px] bg-neutral-800 my-auto mx-1" />

          {/* Tactile 1-Click Copy Button with Visual Feedback */}
          <button
            onClick={handleCopyEmail}
            title="Copy email address"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg sm:rounded-full bg-neutral-800/80 hover:bg-neutral-700 text-neutral-300 hover:text-white transition-all duration-200 font-mono text-xs cursor-pointer shrink-0"
          >
            {isCopied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400 font-semibold text-[11px]">COPIED</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-neutral-400" />
                <span className="hidden sm:inline text-[11px] font-medium tracking-wide">COPY</span>
              </>
            )}
          </button>
        </div>

        {/* Right: Operational Status / Dispatch SLA */}
        <div className="hidden md:flex items-center gap-3.5 text-neutral-400 text-xs font-mono">
          <div className="flex flex-col items-end">
            <span className="text-[10px] tracking-widest uppercase text-neutral-500 font-semibold">
              ESTIMATED SLA
            </span>
            <span className="text-neutral-300 text-xs font-medium">
              &lt; 24h Response Guaranteed
            </span>
          </div>
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        </div>
      </div>

      {/* 3. DIRECTORY COLUMNS */}
      <div className="py-10 sm:py-12 md:py-16 border-t border-b border-neutral-850">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 md:gap-16 lg:gap-24">

          {/* Col 2: SERVICES */}
          <div>
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold block mb-5">
              SERVICES
            </span>
            <ul className="space-y-3 text-sm sm:text-[15px] font-sans text-neutral-200">
              <li className="hover:text-white transition-colors cursor-pointer">UI/UX</li>
              <li className="hover:text-white transition-colors cursor-pointer">Custom web dev</li>
              <li className="hover:text-white transition-colors cursor-pointer">Branding</li>
              <li className="hover:text-white transition-colors cursor-pointer">3D animation</li>
              <li className="hover:text-white transition-colors cursor-pointer">App Development</li>
              <li className="hover:text-white transition-colors cursor-pointer">Business automation</li>
            </ul>
          </div>

          {/* Col 3: OTHER SERVICES */}
          <div>
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold block mb-5">
              OTHER SERVICES
            </span>
            <ul className="space-y-3 text-sm sm:text-[15px] font-sans text-neutral-200">
              <li className="hover:text-white transition-colors cursor-pointer">3D Web Design</li>
              <li className="hover:text-white transition-colors cursor-pointer">3D Rendering</li>
              <li className="hover:text-white transition-colors cursor-pointer">Web App Development</li>
              <li className="hover:text-white transition-colors cursor-pointer">E-commerce Development</li>
              <li className="hover:text-white transition-colors cursor-pointer">Brand Identity</li>
              <li className="hover:text-white transition-colors cursor-pointer">Motion Design</li>
            </ul>
          </div>

          {/* Col 4: SOCIAL MEDIA */}
          <div>
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold block mb-5">
              SOCIAL MEDIA
            </span>
            <ul className="space-y-3 text-sm sm:text-[15px] font-sans text-neutral-200">
              <li>
                <a
                  href="https://tiktok.com/@himanshux64"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Tiktok
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/himanshux64"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Linkedin
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Youtube
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/himanshux64"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  X
                </a>
              </li>
              {onOpenResume && (
                <li>
                  <button
                    onClick={() => {
                      soundFx.playTick();
                      onOpenResume();
                    }}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Resume
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>

      {/* 4. BRAND WORDMARK */}
      <div className="py-6 sm:py-8 md:py-10 flex items-center justify-center w-full select-none overflow-hidden">
        <div className="w-full text-[11.5vw] sm:text-[11vw] md:text-[10.5vw] font-black tracking-normal sm:tracking-[0.02em] text-white leading-none uppercase text-center select-none">
          NAHILIST
        </div>
      </div>

      {/* 5. BOTTOM UTILITY BAR (Reference: Monochrome Icons Left | Copyright & Legal Center | SCROLL TOP Right) */}
      <div className="pt-6 pb-2 flex flex-col sm:flex-row items-center justify-between gap-5 text-xs text-neutral-400 font-sans border-t border-neutral-900">
        {/* Left: Minimalist Monochrome Social Icons (f, yt, in, x, gh) */}
        <div className="flex items-center gap-5 sm:gap-6 text-neutral-400 order-2 sm:order-1">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundFx.playTick()}
            title="Facebook"
            className="hover:text-white transition-colors cursor-pointer"
          >
            <FacebookIcon className="w-4 h-4" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundFx.playTick()}
            title="YouTube"
            className="hover:text-white transition-colors cursor-pointer"
          >
            <YoutubeIcon className="w-4 h-4" />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundFx.playTick()}
            title="LinkedIn"
            className="hover:text-white transition-colors cursor-pointer"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href="https://x.com/himanshux64"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundFx.playTick()}
            title="X"
            className="hover:text-white transition-colors cursor-pointer"
          >
            <XIcon className="w-4 h-4" />
          </a>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundFx.playTick()}
            title="GitHub"
            className="hover:text-white transition-colors cursor-pointer"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
        </div>

        {/* Center: Copyright */}
        <div className="text-[11px] sm:text-xs text-neutral-400 order-1 sm:order-2 text-center">
          <span>2026 NAHILIST. All rights reserved</span>
        </div>

        {/* Right: SCROLL TOP with circle arrow */}
        <button
          onClick={() => {
            soundFx.playSlideTransition();
            onScrollTop();
          }}
          className="group flex items-center gap-2 text-neutral-300 hover:text-white transition-colors cursor-pointer text-[11px] font-mono tracking-widest uppercase order-3"
        >
          <span>SCROLL TOP</span>
          <div className="w-5 h-5 rounded-full border border-neutral-600 group-hover:border-white flex items-center justify-center transition-colors">
            <ChevronUp className="w-3 h-3 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </button>
      </div>
    </footer>
  );
};