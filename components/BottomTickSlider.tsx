"use client";

import React from "react";
import { motion } from "framer-motion";
import { soundFx } from "@/utils/audio";

interface BottomTickSliderProps {
  totalSlides: number;
  currentSlide: number;
  onSelectSlide: (index: number) => void;
  theme?: "light" | "dark";
}

export const BottomTickSlider: React.FC<BottomTickSliderProps> = ({
  totalSlides,
  currentSlide,
  onSelectSlide,
  theme = "light",
}) => {
  const isDark = theme === "dark";

  return (
    <nav
      aria-label="Slide pagination"
      className="fixed bottom-6 left-0 right-0 z-40 flex justify-center items-end pointer-events-auto select-none"
    >
      <div
        className={`flex items-end gap-5 px-5 py-2.5 rounded-full backdrop-blur-xs transition-colors duration-500 ${
          isDark
            ? "bg-neutral-900/60 hover:bg-neutral-900/90 border border-white/10"
            : "bg-white/40 hover:bg-white/70"
        }`}
      >
        {Array.from({ length: totalSlides }).map((_, idx) => {
          const isActive = currentSlide === idx;

          return (
            <button
              key={idx}
              onClick={() => {
                soundFx.playSlideTransition();
                onSelectSlide(idx);
              }}
              className="group relative flex items-end justify-center w-3 h-8 cursor-pointer focus:outline-none"
              aria-label={`Go to slide ${idx + 1}`}
              aria-current={isActive ? "step" : undefined}
            >
              {/* The vertical tick mark */}
              <motion.div
                initial={false}
                animate={{
                  height: isActive ? 26 : 14,
                  width: isActive ? 1.75 : 1.25,
                  backgroundColor: isDark
                    ? isActive
                      ? "#ffffff"
                      : "#52525b"
                    : isActive
                    ? "#18181b"
                    : "#a1a1aa",
                  opacity: isActive ? 1 : 0.45,
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 28,
                }}
                className={`rounded-full transition-opacity ${
                  isDark
                    ? "group-hover:opacity-90 group-hover:bg-white"
                    : "group-hover:opacity-90 group-hover:bg-neutral-800"
                }`}
              />
            </button>
          );
        })}
      </div>
    </nav>
  );
};
