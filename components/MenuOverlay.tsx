"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, ArrowUpRight } from "lucide-react";
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
  const { personal } = PORTFOLIO_DATA;

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
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
    { label: "HERO", slideIndex: 0 },
    { label: "ABOUT", slideIndex: 1 },
    { label: "FEATURED PROJECTS", slideIndex: 2 },
    { label: "SERVICES & CAPABILITIES", slideIndex: 3 },
    { label: "CONTACT & COLLABORATION", slideIndex: 4 },
    { label: "DIRECTORY & VERIFIED STATS", slideIndex: 5 },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-[#d5d5d3] p-[7px] text-neutral-950 md:bg-transparent md:p-0"
        >
          <div
            className="flex h-full w-full flex-col justify-between overflow-y-auto rounded-[22px] bg-white bg-cover bg-center bg-no-repeat p-6 shadow-[0_0_24px_rgba(0,0,0,0.08)] md:rounded-none md:bg-contain md:p-14 md:shadow-none"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255, 255, 255, 0.82), rgba(255, 255, 255, 0.82)), url("/menu-background.gif")',
            }}
          >
          {/* Top Bar inside menu */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="font-extrabold tracking-tight text-lg text-neutral-950">
                {personal.name}
              </span>
            </div>

            <button
              onClick={() => {
                soundFx.playTick();
                onClose();
              }}
              className="group flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-300 hover:border-neutral-950 text-xs font-mono tracking-widest uppercase transition-colors cursor-pointer"
            >
              <span>CLOSE</span>
              <X className="w-4 h-4 transition-transform group-hover:rotate-90" />
            </button>
          </div>

          {/* Main Navigation List */}
          <div className="my-auto py-8 max-w-4xl">
            <span className="text-[11px] font-mono tracking-widest text-[#FF8C00] uppercase font-semibold block mb-6">
              PORTFOLIO SECTIONS
            </span>

            <div className="space-y-4 md:space-y-5">
              {slideLinks.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * idx, duration: 0.4 }}
                  onClick={() => {
                    soundFx.playSlideTransition();
                    onSelectSlide(item.slideIndex);
                    onClose();
                  }}
                  className="group cursor-pointer flex items-center justify-between border-b border-neutral-200 py-3 hover:border-[#FF8C00] transition-colors"
                >
                  <div className="flex items-baseline gap-4 md:gap-8">
                    <span className="font-mono text-xs text-neutral-500 group-hover:text-[#FF8C00] transition-colors">
                      0{idx + 1}
                    </span>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-neutral-800 group-hover:text-neutral-950 group-hover:translate-x-2 transition-all duration-300">
                      {item.label}
                    </h2>
                  </div>
                </motion.div>
              ))}

              {/* Dedicated Activity Link */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.28, duration: 0.4 }}
              >
                <Link
                  href="/activity"
                  onClick={() => {
                    soundFx.playSlideTransition();
                    onClose();
                  }}
                  className="group cursor-pointer flex items-center justify-between border-b border-[#FF8C00]/30 py-3 hover:border-[#FF8C00] transition-colors"
                >
                  <div className="flex items-baseline gap-4 md:gap-8">
                    <span className="font-mono text-xs text-[#FF8C00] font-bold transition-colors">
                      ✦ 07
                    </span>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-[#FF8C00] group-hover:text-neutral-950 group-hover:translate-x-2 transition-all duration-300 flex items-center gap-2">
                      <span>ACTIVITY</span>
                      <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF8C00] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </h2>
                  </div>
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Footer inside menu */}
          <div className="pt-6 border-t border-neutral-200 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
            <div className="space-y-1.5">
              <span className="text-neutral-500 text-[11px] font-mono tracking-wider uppercase block">
                STATUS & LOCAL TIME
              </span>
              <p className="text-xs sm:text-sm font-medium">
                INDIA (IST) — <span className="font-mono text-[#FF8C00]">{time || "12:00 PM"}</span>
              </p>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs text-neutral-700 font-mono">
                  {personal.status}
                </span>
              </div>
            </div>

            {/* Quick Actions & Socials */}
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenContact();
                }}
                className="group inline-flex h-14 cursor-pointer items-center gap-7 rounded-full border border-white/90 bg-white py-1 pl-6 pr-1 text-neutral-950 shadow-[0_12px_28px_rgba(0,0,0,0.16),0_2px_0_rgba(0,0,0,0.75)] transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_16px_34px_rgba(0,0,0,0.2),0_2px_0_rgba(0,0,0,0.78)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF8C00] focus-visible:ring-offset-2 active:translate-y-0"
              >
                <span className="font-sans text-base font-bold tracking-[-0.02em]">
                  Initiate Contact
                </span>
                <span className="flex size-12 items-center justify-center rounded-full border border-neutral-200 bg-white shadow-sm transition-colors duration-300 group-hover:border-[#FF8C00]/50 group-hover:bg-[#fffaf3]">
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </span>
              </button>
            </div>
          </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
