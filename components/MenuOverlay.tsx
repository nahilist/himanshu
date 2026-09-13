"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight } from "lucide-react";
import { soundFx } from "@/utils/audio";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectSlide: (index: number) => void;
  onOpenContact: () => void;
}

export const MenuOverlay: React.FC<MenuOverlayProps> = ({
  isOpen,
  onClose,
  onSelectSlide,
  onOpenContact,
}) => {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "America/New_York",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const slideLinks = [
    { label: "PHILOSOPHY & ETHOS", subtitle: "From Ideas to Impactful Experiences", slideIndex: 0 },
    { label: "DRIP — PRODUCT SHOWCASE", subtitle: "3D Hardware & Smart Hydration", slideIndex: 1 },
    { label: "DRIP — BENTO ARCHITECTURE", subtitle: "UV-C 99% Sanitization System", slideIndex: 2 },
    { label: "DRIP — CRAFT & LONGEVITY", subtitle: "Long Lasting Materiality", slideIndex: 3 },
    { label: "PLAYER PORTAL", subtitle: "Future of Sports Recruitment", slideIndex: 4 },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-neutral-950/95 text-white backdrop-blur-2xl flex flex-col justify-between p-6 md:p-14 overflow-y-auto"
        >
          {/* Top Bar inside menu */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="font-extrabold tracking-[0.25em] text-lg text-white">M D X</span>
              <span className="text-neutral-500 font-mono text-xs">/ ARCHIVE 2025</span>
            </div>
            <button
              onClick={() => {
                soundFx.playTick();
                onClose();
              }}
              className="group flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 hover:border-white text-xs font-mono tracking-widest uppercase transition-colors cursor-pointer"
            >
              <span>CLOSE</span>
              <X className="w-4 h-4 transition-transform group-hover:rotate-90" />
            </button>
          </div>

          {/* Main Navigation List */}
          <div className="my-auto py-10 max-w-4xl">
            <span className="text-[11px] font-mono tracking-widest text-amber-500 uppercase font-semibold block mb-6">
              INDEX OF WORKS & SECTIONS
            </span>

            <div className="space-y-4 md:space-y-6">
              {slideLinks.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * idx, duration: 0.4 }}
                  onClick={() => {
                    soundFx.playSlideTransition();
                    onSelectSlide(item.slideIndex);
                    onClose();
                  }}
                  className="group cursor-pointer flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-white/10 pb-4 hover:border-amber-400 transition-colors"
                >
                  <div className="flex items-baseline gap-4 md:gap-8">
                    <span className="font-mono text-xs text-neutral-500 group-hover:text-amber-400 transition-colors">
                      0{idx + 1}
                    </span>
                    <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-neutral-200 group-hover:text-white group-hover:translate-x-2 transition-all duration-300">
                      {item.label}
                    </h2>
                  </div>
                  <span className="text-xs text-neutral-400 font-mono mt-1 sm:mt-0 opacity-70 group-hover:opacity-100 transition-opacity">
                    {item.subtitle}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Footer inside menu */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
            <div className="space-y-2">
              <span className="text-neutral-500 text-[11px] font-mono tracking-wider uppercase block">
                LOCATION & TIME
              </span>
              <p className="text-sm font-medium">
                NEW YORK (EST) — <span className="font-mono text-amber-400">{time || "12:00:00 PM"}</span>
              </p>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs text-neutral-300 font-mono">
                  {PORTFOLIO_DATA.brand.status}
                </span>
              </div>
            </div>

            {/* Socials & Let's talk */}
            <div className="flex flex-wrap items-center gap-5 text-xs font-mono">
              {PORTFOLIO_DATA.socials.map((soc, i) => (
                <a
                  key={i}
                  href={soc.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  {soc.label}
                </a>
              ))}
              <button
                onClick={() => {
                  onClose();
                  onOpenContact();
                }}
                className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-neutral-900 font-sans font-semibold hover:bg-amber-400 transition-colors cursor-pointer"
              >
                <span>Initiate Project</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

