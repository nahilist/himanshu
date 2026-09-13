"use client";

import React from "react";
import { soundFx } from "@/utils/audio";

interface WatchShowreelBadgeProps {
  onOpen: () => void;
  title?: string;
  theme?: "light" | "dark";
}

export const WatchShowreelBadge: React.FC<WatchShowreelBadgeProps> = ({
  onOpen,
  theme = "dark",
}) => {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
      <button
        onClick={(e) => {
          e.stopPropagation();
          soundFx.playOpenModal();
          onOpen();
        }}
        className={`pointer-events-auto group flex items-center gap-4 px-6 py-3 rounded-full transition-all duration-500 transform hover:scale-105 active:scale-95 ${
          theme === "dark"
            ? "text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)]"
            : "text-neutral-900 drop-shadow-[0_4px_16px_rgba(255,255,255,0.8)]"
        }`}
      >
        {/* Play Icon triangle outline matching reference */}
        <div className="relative flex items-center justify-center">
          <svg
            className="w-8 h-8 md:w-10 md:h-10 transition-transform duration-300 group-hover:scale-110"
            viewBox="0 0 48 48"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon
              points="14 8 40 24 14 40 14 8"
              className="fill-white/10 group-hover:fill-white/30 transition-colors"
            />
          </svg>
        </div>

        {/* Separator */}
        <span
          className={`text-xl md:text-2xl font-extralight select-none ${
            theme === "dark" ? "text-white/80" : "text-neutral-800"
          }`}
        >
          |
        </span>

        {/* Title */}
        <span
          className={`tracking-[0.18em] text-lg md:text-2xl font-light uppercase whitespace-nowrap ${
            theme === "dark" ? "text-white" : "text-neutral-900"
          }`}
        >
          WATCH SHOWREEL
        </span>
      </button>
    </div>
  );
};

