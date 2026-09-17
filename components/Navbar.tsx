"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, FileText } from "lucide-react";
import { soundFx } from "@/utils/audio";

interface NavbarProps {
  onOpenMenu: () => void;
  onOpenContact: () => void;
  onOpenResume: () => void;
  isMenuOpen: boolean;
  isAudioActive: boolean;
  onToggleAudio: () => void;
  theme?: "light" | "dark";
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenMenu,
  onOpenContact,
  onOpenResume,
  isMenuOpen,
  isAudioActive,
  onToggleAudio,
  theme = "light",
}) => {
  const isDark = theme === "dark";

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-6 md:px-12 py-3.5 sm:py-5 flex items-center justify-between pointer-events-none transition-colors duration-500">
      {/* Left section: Logo | Sound pill */}
      <div className="flex items-center gap-2 sm:gap-3.5 pointer-events-auto select-none">
        <div
          onClick={() => {
            soundFx.playTick();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="group cursor-pointer flex items-center gap-2 sm:gap-2.5 transition-all duration-300 hover:opacity-85"
        >
          {/* Premium Logo Monogram & Wordmark */}
          <div className="flex items-center gap-2 sm:gap-3 transition-transform duration-300 group-hover:scale-[1.02]">
            {/* Geometric Monogram Emblem (Large & Razor Sharp) */}
            <div className="relative h-8 sm:h-10 md:h-12 w-auto flex items-center justify-center">
              <Image
                src={isDark ? "/logo-monogram-white.png" : "/logo-monogram.png"}
                alt="nahilist emblem"
                width={48}
                height={56}
                className="h-7.5 sm:h-9 md:h-11 w-auto object-contain transition-all duration-300 drop-shadow-sm"
                priority
              />
            </div>

            {/* Signature Wordmark */}
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

      {/* Right section: Resume | Let's talk ↗ | Hamburger icon */}
      <div className="flex items-center gap-3.5 sm:gap-4 pointer-events-auto">
        {/* View Resume Button */}
        <button
          onClick={() => {
            soundFx.playOpenModal();
            onOpenResume();
          }}
          className={`group hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono tracking-wide transition-colors cursor-pointer border ${
            isDark
              ? "border-white/20 hover:border-white text-neutral-200"
              : "border-neutral-300 hover:border-black text-neutral-700 hover:text-black"
          }`}
        >
          <FileText className="w-3 h-3 text-amber-500" />
          <span>Resume</span>
        </button>

        {/* Luxury "Let's talk" Primary CTA Button */}
        <button
          onClick={() => {
            soundFx.playOpenModal();
            onOpenContact();
          }}
          className={`group relative inline-flex items-center gap-2 px-3.5 sm:px-4.5 py-1.5 sm:py-2 rounded-full font-bold text-xs sm:text-sm tracking-tight transition-all duration-300 cursor-pointer shadow-xs hover:shadow-md hover:scale-[1.03] active:scale-[0.98] ${
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
          className={`font-light select-none transition-colors ${
            isDark ? "text-neutral-600" : "text-neutral-300"
          }`}
        >
          |
        </span>

        {/* 2-bar minimalist Hamburger menu icon */}
        <button
          onClick={() => {
            soundFx.playTick();
            onOpenMenu();
          }}
          className="group p-1 flex flex-col justify-center items-end gap-1.5 w-7 h-6 cursor-pointer focus:outline-none"
          aria-label="Open Menu"
        >
          <span
            className={`h-[1.75px] transition-all duration-300 rounded-full ${
              isDark ? "bg-white" : "bg-neutral-900"
            } ${isMenuOpen ? "w-6 rotate-45 translate-y-[4.5px]" : "w-6 group-hover:w-5"}`}
          />
          <span
            className={`h-[1.75px] transition-all duration-300 rounded-full ${
              isDark ? "bg-white" : "bg-neutral-900"
            } ${isMenuOpen ? "w-6 -rotate-45 -translate-y-[4px]" : "w-4 group-hover:w-6"}`}
          />
        </button>
      </div>
    </header>
  );
};
