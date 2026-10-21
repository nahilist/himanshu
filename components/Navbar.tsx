"use client";

import React from "react";
import Image from "next/image";
import { MenuButton } from "@/components/MenuButton";
import { soundFx } from "@/utils/audio";

interface NavbarProps {
  onOpenMenu: () => void;
  onOpenResume?: () => void;
  onNavigate?: (index: number) => void;
  currentSlide?: number;
  isAudioActive: boolean;
  onToggleAudio: () => void;
  theme?: "light" | "dark";
  heroMode?: boolean;
  hideOnMobile?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenMenu,
  onNavigate,
  currentSlide = 0,
  isAudioActive,
  onToggleAudio,
  theme = "light",
  heroMode = false,
  hideOnMobile = false,
}) => {
  const isDark = theme === "dark";

  return (
    <header
      aria-hidden={heroMode}
      className={`fixed top-0 left-0 right-0 z-40 px-5 py-5 sm:px-6 md:px-12 sm:py-5 ${
        hideOnMobile ? "hidden sm:flex" : "flex"
      } items-center justify-between transition-all duration-500 ease-out ${
        heroMode
          ? "pointer-events-none -translate-y-full opacity-0"
          : "pointer-events-none translate-y-0 opacity-100"
      }`}
    >
      {/* Left section: Logo | Sound pill */}
      <div className="flex items-center gap-2 pointer-events-auto select-none md:hidden">
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

      {/* Centered desktop navigation */}
      <nav
        aria-label="Primary portfolio navigation"
        className="pointer-events-auto absolute left-1/2 top-6 hidden h-11 w-[420px] max-w-[calc(100vw-2rem)] -translate-x-1/2 items-center justify-center gap-1 rounded-full border border-neutral-200/80 bg-white/95 px-1.5 shadow-[0_8px_24px_rgba(0,0,0,0.10)] backdrop-blur-xl md:flex"
      >
        {[
          { label: "Work", meta: "07", slide: 2 },
          { label: "Skills", meta: "06", slide: 3 },
          { label: "Experience", meta: "2y+", slide: 1 },
          { label: "Contact", meta: "", slide: 4 },
        ].map((item) => {
          const isActive = currentSlide === item.slide;

          return (
            <button
              key={item.label}
              type="button"
              onClick={() => {
                soundFx.playSlideTransition();
                onNavigate?.(item.slide);
              }}
              className={`flex h-8 items-center rounded-full px-4 text-sm font-semibold transition-colors ${
                isActive
                  ? "text-neutral-950"
                  : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-950"
              }`}
            >
              <span>{item.label}</span>
              {item.meta && (
                <span className="ml-1 text-[10px] text-neutral-400">
                  [{item.meta}]
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Right section: menu control */}
      <div className="flex items-center gap-3.5 pointer-events-auto">
        <MenuButton
          isDark={isDark}
          onClick={() => {
            soundFx.playTick();
            onOpenMenu();
          }}
        />
      </div>
    </header>
  );
};
