"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { soundFx } from "@/utils/audio";

interface NavbarProps {
  onOpenMenu: () => void;
  onOpenContact: () => void;
  isMenuOpen: boolean;
  isAudioActive: boolean;
  onToggleAudio: () => void;
  theme?: "light" | "dark";
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenMenu,
  onOpenContact,
  isMenuOpen,
  isAudioActive,
  onToggleAudio,
  theme = "light",
}) => {
  const isDark = theme === "dark";

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-6 md:px-12 py-5 flex items-center justify-between pointer-events-none transition-colors duration-500">
      {/* Left section: nahilist Logo | Sound pill */}
      <div className="flex items-center gap-3.5 pointer-events-auto select-none">
        <div
          onClick={() => {
            soundFx.playTick();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="group cursor-pointer flex items-center gap-2.5 transition-all duration-300 hover:opacity-85"
        >
          {/* Logo Monogram from new PNG */}
          <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-lg overflow-hidden flex items-center justify-center">
            <Image
              src="/logo.png"
              alt="nahilist logo"
              width={48}
              height={48}
              className={`w-full h-full object-cover transition-all duration-300 ${
                isDark ? "invert contrast-125 brightness-110" : "mix-blend-multiply"
              }`}
              style={{ objectPosition: "50% 28%", transform: "scale(1.28)" }}
              priority
            />
          </div>

          {/* Logo Wordmark */}
          <span
            className={`font-black tracking-tight text-lg sm:text-xl lowercase transition-colors ${
              isDark ? "text-white" : "text-neutral-950"
            }`}
          >
            nahilist
          </span>
        </div>

        {/* Separator */}
        <span
          className={`font-light select-none transition-colors ${
            isDark ? "text-neutral-600" : "text-neutral-300"
          }`}
        >
          |
        </span>

        {/* Audio / ambient pill toggle matching ( - ) in reference */}
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
      <div className="flex items-center gap-4 pointer-events-auto">
        {/* Let's talk button */}
        <button
          onClick={() => {
            soundFx.playOpenModal();
            onOpenContact();
          }}
          className={`group relative flex items-center gap-1.5 text-xs md:text-sm font-medium transition-colors cursor-pointer ${
            isDark ? "text-neutral-200 hover:text-white" : "text-neutral-800 hover:text-neutral-950"
          }`}
        >
          <span
            className={`border-b pb-[1px] transition-all ${
              isDark
                ? "border-neutral-400 group-hover:border-white"
                : "border-neutral-800 group-hover:border-neutral-950"
            }`}
          >
            Let&apos;s talk
          </span>
          <ArrowUpRight className="w-3.5 h-3.5 text-amber-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
