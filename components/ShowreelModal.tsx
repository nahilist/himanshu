"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, Pause, Volume2, VolumeX, Maximize2 } from "lucide-react";
import { soundFx } from "@/utils/audio";

interface ShowreelModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  category?: string;
}

export const ShowreelModal: React.FC<ShowreelModalProps> = ({
  isOpen,
  onClose,
  title,
  category = "Featured Production",
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(18);

  // Fake timeline progress when playing
  useEffect(() => {
    if (!isOpen || !isPlaying) return;
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 0.4));
    }, 100);
    return () => clearInterval(interval);
  }, [isOpen, isPlaying]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10 bg-neutral-950/90 backdrop-blur-xl"
        >
          {/* Main player box */}
          <motion.div
            initial={{ scale: 0.94, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.94, opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
            className="relative w-full max-w-5xl aspect-video bg-neutral-900 rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 shadow-2xl flex flex-col justify-between"
          >
            {/* Top Bar inside player */}
            <div className="flex items-center justify-between px-6 py-5 bg-gradient-to-b from-black/80 via-black/40 to-transparent z-20">
              <div>
                <span className="text-[11px] font-mono tracking-widest uppercase text-amber-500 font-semibold">
                  {category}
                </span>
                <h3 className="text-white text-base md:text-lg font-medium tracking-wide">
                  {title}
                </h3>
              </div>
              <button
                onClick={() => {
                  soundFx.playTick();
                  onClose();
                }}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close Showreel"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Simulated Cinematic Video Feed */}
            <div className="absolute inset-0 z-10 flex items-center justify-center overflow-hidden bg-radial from-neutral-800 to-black">
              {/* Dynamic ambient animation scene */}
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="absolute w-[600px] h-[600px] rounded-full bg-amber-500/15 blur-3xl animate-pulse" />
                <div className="absolute w-[400px] h-[400px] rounded-full bg-purple-600/15 blur-3xl" />

                {/* Animated graphic elements */}
                <div className="relative z-10 text-center select-none px-6">
                  <div className="inline-block px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md mb-4 text-xs font-mono text-neutral-300">
                    4K UHD • 60 FPS • MASTER REEL
                  </div>
                  <h2 className="text-3xl md:text-6xl font-black text-white tracking-tight">
                    {title}
                  </h2>
                  <p className="text-neutral-400 max-w-md mx-auto mt-3 text-xs md:text-sm">
                    Interactive motion showcase & creative engineering review.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Controls Bar */}
            <div className="relative z-20 px-6 py-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
              {/* Progress Scrub Bar */}
              <div className="w-full h-1.5 bg-white/20 hover:h-2.5 rounded-full overflow-hidden mb-4 cursor-pointer transition-all">
                <div
                  className="h-full bg-gradient-to-r from-amber-500 to-amber-300 rounded-full transition-all duration-100"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="flex items-center justify-between text-white text-xs">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => {
                      soundFx.playTick();
                      setIsPlaying(!isPlaying);
                    }}
                    className="p-2 rounded-full hover:bg-white/15 transition-colors cursor-pointer"
                  >
                    {isPlaying ? (
                      <Pause className="w-4 h-4 fill-white" />
                    ) : (
                      <Play className="w-4 h-4 fill-white" />
                    )}
                  </button>
                  <button
                    onClick={() => {
                      soundFx.playTick();
                      setIsMuted(!isMuted);
                    }}
                    className="p-2 rounded-full hover:bg-white/15 transition-colors cursor-pointer"
                  >
                    {isMuted ? (
                      <VolumeX className="w-4 h-4 text-neutral-400" />
                    ) : (
                      <Volume2 className="w-4 h-4 text-white" />
                    )}
                  </button>
                  <span className="font-mono text-neutral-400 text-[11px]">
                    00:{Math.floor(progress * 0.6).toString().padStart(2, "0")} / 01:00
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="hidden sm:inline text-neutral-400 font-mono text-[10px] tracking-wider uppercase">
                    HD • STEREO AUDIO
                  </span>
                  <button
                    onClick={() => soundFx.playTick()}
                    className="p-2 rounded-full hover:bg-white/15 transition-colors cursor-pointer"
                  >
                    <Maximize2 className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

