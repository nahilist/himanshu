"use client";

import React from "react";

interface TopProgressBarProps {
  currentSlide: number;
  totalSlides: number;
  isDark?: boolean;
}

export const TopProgressBar: React.FC<TopProgressBarProps> = ({
  currentSlide,
  totalSlides,
  isDark = false,
}) => {
  const progressPercentage = ((currentSlide + 1) / totalSlides) * 100;

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-50 pointer-events-none h-[2.5px] w-full bg-transparent overflow-hidden"
    >
      {/* Background subtle track */}
      <div
        className={`absolute inset-0 transition-colors duration-500 ${
          isDark ? "bg-white/5" : "bg-neutral-900/5"
        }`}
      />

      {/* Dynamic expanding progress line */}
      <div
        className={`relative h-full transition-[width] duration-[650ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isDark
            ? "bg-gradient-to-r from-amber-400 via-white to-amber-300 shadow-[0_0_10px_rgba(251,191,36,0.8)]"
            : "bg-gradient-to-r from-neutral-900 via-neutral-950 to-amber-600 shadow-[0_0_8px_rgba(217,119,6,0.4)]"
        }`}
        style={{ width: `${progressPercentage}%` }}
      >
        {/* Glow tip at the leading edge */}
        <div
          className={`absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full blur-[2px] transition-colors ${
            isDark ? "bg-amber-300" : "bg-amber-500"
          }`}
        />
      </div>
    </div>
  );
};

