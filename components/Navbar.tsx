"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { soundFx } from "@/utils/audio";

interface NavbarProps {
  onOpenMenu: () => void;
  onOpenContact: () => void;
  onOpenResume?: () => void;
  isMenuOpen: boolean;
  isAudioActive: boolean;
  onToggleAudio: () => void;
  theme?: "light" | "dark";
  heroMode?: boolean;
  hideOnMobile?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenMenu,
  onOpenContact,
  isMenuOpen,
  isAudioActive,
  onToggleAudio,
  theme = "light",
  heroMode = false,
  hideOnMobile = false,
}) => {
  const isDark = theme === "dark";

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 px-5 py-5 sm:px-6 md:px-12 sm:py-5 ${hideOnMobile ? "hidden sm:flex" : "flex"} items-center justify-between pointer-events-none transition-colors duration-500`}>
      {/* Left section: Logo | Sound pill */}
      <div className={`${heroMode ? "hidden sm:flex" : "flex"} items-center gap-2 sm:gap-3.5 pointer-events-auto select-none`}>
        <div
          onClick={() => {
            soundFx.playTick();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="group cursor-pointer flex items-center gap-2 sm:gap-2.5 transition-all duration-300 hover:opacity-85"
        >
          {/* Signature Wordmark */}
          <div className="flex items-center transition-transform duration-300 group-hover:scale-[1.02]">
            <div className="relative h-3.5 sm:h-4.5 w-auto flex items-center opacity-90 group-hover:opacity-100 transition-opacity">
              <Image
                src={isDark ? "/logo-wordmark-white.png" : "/logo-wordmark.png"}
                alt="nahilist wordmark"
                width={105}
                height={24}
                className="h-3 sm:h-4 w-auto object-contain transition-all duration-300"
                priority
              />
            </div>
          </div>
        </div>

        {/* Separator */}
        <span
          className={`font-light select-none text-xs sm:text-sm transition-colors ${
            isDark ? "text-neutral-600" : "text-neutral-300"
          }`}
        >
          |
        </span>

        {/* Audio / ambient pill toggle */}
        <button
          onClick={onToggleAudio}
          title={isAudioActive ? "Mute audio" : "Enable ambient sound"}
          className={`group relative flex items-center justify-center h-6 px-3 rounded-full border backdrop-blur-sm transition-all duration-300 cursor-pointer ${
            isDark
              ? "border-white/20 bg-neutral-900/80 hover:border-white text-white"
              : "border-neutral-300/80 bg-white/70 hover:border-neutral-900 text-neutral-900"
          }`}
          aria-label="Toggle Sound"
        >
          <div className="flex items-center gap-1">
            {isAudioActive ? (
              <div className="flex items-center gap-[2px] h-3">
                <span
                  className={`w-[2px] h-2.5 rounded-full animate-[pulse_0.8s_ease-in-out_infinite] ${
                    isDark ? "bg-white" : "bg-neutral-900"
                  }`}
                />
                <span
                  className={`w-[2px] h-3.5 rounded-full animate-[pulse_0.6s_ease-in-out_infinite_0.2s] ${
                    isDark ? "bg-white" : "bg-neutral-900"
                  }`}
                />
                <span
                  className={`w-[2px] h-1.5 rounded-full animate-[pulse_0.9s_ease-in-out_infinite_0.4s] ${
                    isDark ? "bg-white" : "bg-neutral-900"
                  }`}
                />
              </div>
            ) : (
              <span
                className={`w-2.5 h-[1.5px] rounded-full transition-colors ${
                  isDark
                    ? "bg-neutral-400 group-hover:bg-white"
                    : "bg-neutral-400 group-hover:bg-neutral-900"
                }`}
              />
            )}
          </div>
        </button>
      </div>

      {/* Right section: Let's talk ↗ | Hamburger icon */}
      <div className="flex items-center gap-3.5 sm:gap-4 pointer-events-auto">
        {/* Luxury "Let's talk" Primary CTA Button */}
        <button
          onClick={() => {
            soundFx.playOpenModal();
            onOpenContact();
          }}
          className={`${heroMode ? "hidden sm:inline-flex" : "inline-flex"} group relative items-center gap-2 px-3.5 sm:px-4.5 py-1.5 sm:py-2 rounded-full font-bold text-xs sm:text-sm tracking-tight transition-all duration-300 cursor-pointer shadow-xs hover:shadow-md hover:scale-[1.03] active:scale-[0.98] ${
            isDark
              ? "bg-white text-black hover:bg-neutral-100 shadow-white/5"
              : "bg-neutral-950 text-white hover:bg-neutral-800 shadow-black/10"
          }`}
          aria-label="Let's talk"
        >
          {/* Subtle live availability pulse dot */}
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>

          <span className="font-bold tracking-tight whitespace-nowrap">
            Let&apos;s talk
          </span>

          <ArrowUpRight
            className={`w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
              isDark ? "text-neutral-900" : "text-[#ff6600]"
            }`}
          />
        </button>

        {/* Separator */}
        <span
          className={`${heroMode ? "hidden sm:inline" : "inline"} font-light select-none transition-colors ${
            isDark ? "text-neutral-600" : "text-neutral-300"
          }`}
        >
          |
        </span>

        {/* Ultra-Premium 3-Dot Executive Menu Capsule */}
        <button
          onClick={() => {
            soundFx.playTick();
            onOpenMenu();
          }}
          className={`group relative flex items-center justify-center gap-2 h-9 ${heroMode ? "w-9 px-0 sm:w-auto sm:px-3.5" : "px-3 sm:px-3.5"} rounded-full border backdrop-blur-md transition-all duration-300 cursor-pointer shadow-xs hover:shadow-md hover:scale-[1.03] active:scale-[0.98] ${
            isDark
              ? "border-white/20 bg-neutral-950/80 hover:border-white/50 hover:bg-neutral-900 text-white"
              : "border-neutral-200 bg-white/80 hover:border-neutral-400 hover:bg-white text-neutral-900 shadow-neutral-950/5"
          }`}
          aria-label="Open Menu"
        >
          {/* Subtle Ambient Sheen */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          {/* Micro "MENU" / "CLOSE" Label */}
          <span className={`${heroMode ? "hidden sm:inline" : "inline"} font-mono text-[10.5px] sm:text-[11px] font-semibold tracking-widest uppercase opacity-80 group-hover:opacity-100 transition-opacity`}>
            {isMenuOpen ? "CLOSE" : "MENU"}
          </span>

          {/* 3-Dot Precision Array with Dynamic States */}
          <div className={`flex ${heroMode ? "flex-col gap-[2px] pl-0 sm:flex-row sm:gap-1.5 sm:pl-0.5" : "items-center gap-1 sm:gap-1.5 pl-0.5"}`}>
            <span
              className={`${heroMode ? "h-px w-3 rounded-none sm:h-1.5 sm:w-1.5 sm:rounded-full" : "w-1.5 h-1.5 rounded-full"} transition-all duration-300 ${
                isMenuOpen
                  ? "bg-[#ff6600] scale-110"
                  : isDark
                  ? "bg-white group-hover:scale-125 group-hover:bg-[#ff6600]"
                  : "bg-neutral-950 group-hover:scale-125 group-hover:bg-[#ff6600]"
              }`}
            />
            <span
              className={`${heroMode ? "h-px w-3 rounded-none sm:h-1.5 sm:w-1.5 sm:rounded-full" : "w-1.5 h-1.5 rounded-full"} transition-all duration-300 delay-75 ${
                isMenuOpen
                  ? "bg-amber-400 scale-110"
                  : isDark
                  ? "bg-white/80 group-hover:scale-125 group-hover:bg-amber-400"
                  : "bg-neutral-950/80 group-hover:scale-125 group-hover:bg-amber-400"
              }`}
            />
            <span
              className={`${heroMode ? "h-px w-3 rounded-none sm:h-1.5 sm:w-1.5 sm:rounded-full" : "w-1.5 h-1.5 rounded-full"} transition-all duration-300 delay-150 ${
                isMenuOpen
                  ? "bg-[#ff6600] scale-110"
                  : isDark
                  ? "bg-white/60 group-hover:scale-125 group-hover:bg-[#ff6600]"
                  : "bg-neutral-950/60 group-hover:scale-125 group-hover:bg-[#ff6600]"
              }`}
            />
          </div>
        </button>
      </div>
    </header>
  );
};
