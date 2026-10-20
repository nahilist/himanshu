"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Brain,
  Layout,
  Server,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  X,
  Layers,
  Cpu,
} from "lucide-react";
import { soundFx } from "@/utils/audio";
import { PORTFOLIO_DATA, ServiceItem } from "@/data/portfolioData";

interface SlideServicesSphereProps {
  onContactMe: () => void;
}

interface DisciplineAccent {
  badge: string;
  icon: React.ReactNode;
  borderGlow: string;
  accentBg: string;
  accentText: string;
  tagline: string;
}

const DISCIPLINE_ACCENTS: Record<string, DisciplineAccent> = {
  "ai-ml-dev": {
    badge: "DISCIPLINE 01",
    icon: <Brain className="w-4 h-4 text-amber-600" />,
    borderGlow: "hover:border-amber-500/80 hover:shadow-amber-500/15",
    accentBg: "bg-amber-50 border-amber-200/80",
    accentText: "text-amber-600",
    tagline: "Neural Models • Deep Learning • Vision",
  },
  "gen-ai-rag": {
    badge: "DISCIPLINE 02",
    icon: <Sparkles className="w-4 h-4 text-purple-600" />,
    borderGlow: "hover:border-purple-500/80 hover:shadow-purple-500/15",
    accentBg: "bg-purple-50 border-purple-200/80",
    accentText: "text-purple-600",
    tagline: "Vector Search • Agentic Workflows • LLMs",
  },
  "frontend-dev": {
    badge: "DISCIPLINE 03",
    icon: <Layout className="w-4 h-4 text-blue-600" />,
    borderGlow: "hover:border-blue-500/80 hover:shadow-blue-500/15",
    accentBg: "bg-blue-50 border-blue-200/80",
    accentText: "text-blue-600",
    tagline: "Next.js App Router • Micro-Interactions",
  },
  "fullstack-apps": {
    badge: "DISCIPLINE 04",
    icon: <Server className="w-4 h-4 text-emerald-600" />,
    borderGlow: "hover:border-emerald-500/80 hover:shadow-emerald-500/15",
    accentBg: "bg-emerald-50 border-emerald-200/80",
    accentText: "text-emerald-600",
    tagline: "High-Throughput APIs • Secure Auth & DBs",
  },
};

export const SlideServicesSphere: React.FC<SlideServicesSphereProps> = ({ onContactMe }) => {
  const [activeService, setActiveService] = useState<ServiceItem | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const { services } = PORTFOLIO_DATA;

  // Track viewport to avoid running expensive desktop animation loops on mobile
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 640);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent background slide navigation when service detail modal is open
  useEffect(() => {
    if (activeService) {
      document.body.setAttribute("data-modal-open", "true");
      return () => {
        document.body.removeAttribute("data-modal-open");
      };
    }
  }, [activeService]);

  const getAccent = (id: string): DisciplineAccent => {
    return (
      DISCIPLINE_ACCENTS[id] || {
        badge: "DISCIPLINE",
        icon: <Cpu className="w-4 h-4 text-amber-600" />,
        borderGlow: "hover:border-neutral-900",
        accentBg: "bg-neutral-50 border-neutral-200",
        accentText: "text-neutral-900",
        tagline: "Applied Engineering",
      }
    );
  };

  // Helper for desktop floating positions (sm and above)
  const getDesktopPillPosition = (index: number) => {
    switch (index) {
      case 0: // Top-Left
        return "top-4 md:top-8 left-2 md:left-6";
      case 1: // Top-Right
        return "top-4 md:top-8 right-2 md:right-6";
      case 2: // Bottom-Left
        return "bottom-4 md:bottom-8 left-2 md:left-6";
      case 3: // Bottom-Right
        return "bottom-4 md:bottom-8 right-2 md:right-6";
      default:
        return "";
    }
  };

  return (
    <section className="relative w-full h-full min-h-screen flex flex-col items-center justify-between p-3.5 sm:p-8 md:p-12 lg:p-16 bg-white overflow-y-auto sm:overflow-hidden overscroll-contain">
      {/* Background Architectural Canvas & Ambient Lighting (Hidden on mobile to save GPU fill-rate) */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />
      <div className="hidden sm:block absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-gradient-to-br from-amber-200/30 via-orange-100/15 to-transparent blur-3xl pointer-events-none" />
      <div className="hidden sm:block absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-gradient-to-tl from-purple-200/20 via-pink-100/10 to-transparent blur-3xl pointer-events-none" />

      {/* 1. TOP HEADER */}
      <div className="relative z-20 w-full max-w-6xl mx-auto pt-16 sm:pt-24 md:pt-14 pb-2.5 sm:pb-4 border-b border-neutral-200/70 flex flex-col sm:flex-row sm:items-end justify-between gap-2 sm:gap-3 shrink-0">
        <div>
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200/80 text-[10px] sm:text-xs font-mono text-neutral-800 mb-1.5 sm:mb-2 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            <span className="tracking-widest uppercase font-semibold">
              CAPABILITIES &amp; ARCHITECTURE
            </span>
          </div>

          {/* Large Bold Headline */}
          <h2 className="text-xl xs:text-2xl sm:text-4xl md:text-[2.65rem] font-medium tracking-tight text-neutral-950 leading-[1.12]">
            AI Engineering{" "}
            <span className="font-serif italic font-normal text-amber-900">
              &amp;
            </span>{" "}
            Modern Web Craft
          </h2>
        </div>

        {/* Right Studio Badge */}
        <div className="hidden sm:flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-neutral-50 border border-neutral-200/80 text-xs font-mono text-neutral-600 shadow-2xs">
          <Layers className="w-3.5 h-3.5 text-amber-600" />
          <span className="tracking-wide">04 Core Disciplines</span>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* 2. RESPONSIVE CENTER EXPERIENCE                               */}
      {/* ------------------------------------------------------------- */}

      {/* A. MOBILE ADAPTIVE DECK (< sm: 640px) */}
      {!isDesktop && (
        <div className="flex sm:hidden flex-col items-center justify-center w-full max-w-sm mx-auto my-auto py-1 z-10 gap-2.5">
          {/* Top 2 Capsules on Mobile (Clean solid high-opacity surface for smooth GPU compositing) */}
          <div className="flex flex-col gap-2 w-full">
            {services.slice(0, 2).map((service, index) => {
              const accent = getAccent(service.id);
              return (
                <button
                  key={service.id}
                  onClick={() => {
                    soundFx.playOpenModal();
                    setActiveService(service);
                  }}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-full bg-white/98 border border-neutral-200 shadow-xs active:scale-[0.98] transition-all cursor-pointer ${accent.borderGlow}`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center border shrink-0 ${accent.accentBg}`}
                    >
                      {accent.icon}
                    </div>
                    <div className="flex items-center gap-1.5 min-w-0">
                      <span className="text-[10px] font-mono text-neutral-400 font-bold shrink-0">
                        0{index + 1}
                      </span>
                      <span className="text-xs font-semibold text-neutral-900 tracking-tight truncate">
                        {service.title}
                      </span>
                    </div>
                  </div>

                  <div className="w-6 h-6 rounded-full bg-neutral-100 text-neutral-700 flex items-center justify-center shrink-0 ml-2 shadow-2xs">
                    <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Center 3D Sphere on Mobile - Ultra-optimized CSS animations (0% JS overhead) */}
          <div className="relative w-44 h-44 my-0.5 flex items-center justify-center select-none transform-gpu">
            {/* Orbital Gyroscope Ring - hardware-accelerated CSS rotation */}
            <div
              className="absolute w-48 h-48 rounded-full border border-dashed border-amber-400/40 pointer-events-none animate-[spin_50s_linear_infinite]"
            />

            {/* Sandy Sphere - Hardware-accelerated CSS breathing pulse */}
            <div
              className="relative w-40 h-40 flex items-center justify-center rounded-full animate-[pulse_10s_ease-in-out_infinite]"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#d5c3b0] via-[#eedecf] to-[#f7eee5] shadow-[0_12px_32px_rgba(180,150,120,0.28)]" />

              <div
                className="absolute inset-1.5 rounded-full overflow-hidden"
                style={{
                  background:
                    "radial-gradient(circle at 38% 32%, #fff5ea 0%, #e0cebd 36%, #c5b09d 70%, #a48c77 100%)",
                }}
              >
                {/* Clean, high-performance stippled texture without mix-blend penalty */}
                <div
                  className="absolute inset-0 opacity-25"
                  style={{
                    backgroundImage: `radial-gradient(circle, #8a735c 0.8px, transparent 1px)`,
                    backgroundSize: "6px 6px",
                  }}
                />
                <div className="absolute top-2.5 left-5 w-20 h-20 rounded-full bg-white/45 blur-lg pointer-events-none" />
              </div>

              <div className="absolute -inset-0.5 rounded-full border-[3px] border-[#eedecf]/50 pointer-events-none" />
            </div>

            {/* Clean Typography inside sphere */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-3 pointer-events-none select-none">
              <span className="text-[8px] font-mono uppercase tracking-widest text-amber-800 font-bold bg-white/90 px-2 py-0.5 rounded-full border border-amber-200/80 mb-1 shadow-2xs">
                ✦ TAP TO INSPECT
              </span>
              <h3 className="text-sm font-light tracking-tight text-neutral-950 leading-[1.1]">
                Intelligent Systems,
                <br />
                <span className="font-serif italic font-normal text-amber-950">
                  Engineered to Scale
                </span>
              </h3>
            </div>
          </div>

          {/* Bottom 2 Capsules on Mobile */}
          <div className="flex flex-col gap-2 w-full">
            {services.slice(2, 4).map((service, index) => {
              const accent = getAccent(service.id);
              return (
                <button
                  key={service.id}
                  onClick={() => {
                    soundFx.playOpenModal();
                    setActiveService(service);
                  }}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-full bg-white/98 border border-neutral-200 shadow-xs active:scale-[0.98] transition-all cursor-pointer ${accent.borderGlow}`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center border shrink-0 ${accent.accentBg}`}
                    >
                      {accent.icon}
                    </div>
                    <div className="flex items-center gap-1.5 min-w-0">
                      <span className="text-[10px] font-mono text-neutral-400 font-bold shrink-0">
                        0{index + 3}
                      </span>
                      <span className="text-xs font-semibold text-neutral-900 tracking-tight truncate">
                        {service.title}
                      </span>
                    </div>
                  </div>

                  <div className="w-6 h-6 rounded-full bg-neutral-100 text-neutral-700 flex items-center justify-center shrink-0 ml-2 shadow-2xs">
                    <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* B. DESKTOP KINETIC ORBITAL SCENE (sm and above: >= 640px) - ONLY MOUNTED ON DESKTOP */}
      {isDesktop && (
        <div className="hidden sm:flex relative w-full max-w-4xl h-[480px] md:h-[540px] items-center justify-center my-auto z-10 select-none">
          {/* Orbital Gyroscope Rings */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute w-[440px] h-[440px] md:w-[500px] md:h-[500px] rounded-full border border-dashed border-amber-300/35 pointer-events-none"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
            className="absolute w-[480px] h-[480px] md:w-[560px] md:h-[560px] rounded-full border border-neutral-200/50 pointer-events-none"
          />

          {/* Organic Fuzzy Sandy Sphere */}
          <motion.div
            animate={{
              scale: [1, 1.025, 0.985, 1],
              rotate: [0, 3, -2, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative w-72 h-72 md:w-[380px] md:h-[380px] flex items-center justify-center rounded-full"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#d5c3b0] via-[#eedecf] to-[#f7eee5] blur-xs shadow-[0_30px_70px_rgba(180,150,120,0.32)]" />

            <div
              className="absolute inset-2 rounded-full overflow-hidden"
              style={{
                background:
                  "radial-gradient(circle at 38% 32%, #fff5ea 0%, #e0cebd 36%, #c5b09d 70%, #a48c77 100%)",
              }}
            >
              <div
                className="absolute inset-0 opacity-40 mix-blend-multiply"
                style={{
                  backgroundImage: `radial-gradient(circle, #8a735c 0.75px, transparent 1px)`,
                  backgroundSize: "6px 6px",
                }}
              />
              <div
                className="absolute inset-0 opacity-25 mix-blend-overlay"
                style={{
                  backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1.5px)`,
                  backgroundSize: "9px 9px",
                }}
              />
              <div className="absolute top-4 left-8 w-36 h-36 rounded-full bg-white/45 blur-2xl pointer-events-none" />
            </div>

            <div className="absolute -inset-2 rounded-full border-[10px] border-[#eedecf]/40 blur-[3px] pointer-events-none" />
          </motion.div>

          {/* Center Editorial Statement on Desktop */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20 px-4 pointer-events-none select-none">
            <span className="text-[10px] font-mono uppercase tracking-widest text-amber-800 font-bold bg-white/85 px-3 py-1 rounded-full border border-amber-200/80 backdrop-blur-xs mb-2.5 shadow-2xs">
              ✦ CLICK TO INSPECT
            </span>
            <h3 className="text-3xl md:text-[3.25rem] font-light tracking-tight text-neutral-950 leading-[1.06]">
              Intelligent Systems,
              <br />
              <span className="font-serif italic font-normal text-amber-950">
                Engineered to Scale
              </span>
            </h3>
            <p className="mt-2 text-xs md:text-sm text-neutral-600 max-w-sm font-medium leading-relaxed">
              Select any discipline capsule to inspect architecture, stack &amp; deliverables.
            </p>
          </div>

          {/* 4 Floating Corner Capsules on Desktop */}
          {services.slice(0, 4).map((service, index) => {
            const accent = getAccent(service.id);
            const positionClass = getDesktopPillPosition(index);

            return (
              <motion.button
                key={service.id}
                onClick={() => {
                  soundFx.playOpenModal();
                  setActiveService(service);
                }}
                onMouseEnter={() => soundFx.playTick()}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`group absolute z-20 flex items-center gap-3 pl-3.5 pr-2.5 py-2.5 rounded-full bg-white/90 hover:bg-white backdrop-blur-xl border border-neutral-200/90 shadow-[0_6px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_14px_34px_rgba(0,0,0,0.12)] transition-all duration-300 cursor-pointer ${positionClass} ${accent.borderGlow}`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center border transition-transform duration-300 group-hover:scale-110 shrink-0 ${accent.accentBg}`}
                >
                  {accent.icon}
                </div>

                <div className="flex flex-col text-left pr-0.5">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-mono text-neutral-400 font-bold">
                      0{index + 1}
                    </span>
                    <span className="text-sm font-semibold text-neutral-900 group-hover:text-neutral-950 tracking-tight whitespace-nowrap">
                      {service.title}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-neutral-500 font-normal">
                    {accent.tagline}
                  </span>
                </div>

                <div className="w-7 h-7 rounded-full bg-neutral-100 text-neutral-700 group-hover:bg-neutral-950 group-hover:text-white flex items-center justify-center transition-all duration-300 group-hover:rotate-45 shrink-0 shadow-2xs">
                  <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
              </motion.button>
            );
          })}
        </div>
      )}

      {/* 3. BOTTOM FOOTER BAR */}
      <div className="relative z-20 w-full max-w-6xl mx-auto pt-3 pb-2 flex items-center justify-center sm:justify-between text-[11px] font-mono text-neutral-500 border-t border-neutral-200/60 shrink-0 select-none">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
          <span className="tracking-widest uppercase text-[10px] sm:text-[11px]">
            Production-Ready Architectures
          </span>
        </div>

        <div className="hidden sm:flex items-center gap-1 text-neutral-400">
          <span>Scroll down to connect</span>
          <ArrowRight className="w-3.5 h-3.5 ml-1 -rotate-45" />
        </div>
      </div>

      {/* ----------------------------------------------------------- */}
      {/* ULTRA-LUXURY SERVICE DETAIL MODAL                           */}
      {/* ----------------------------------------------------------- */}
      <AnimatePresence>
        {activeService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            data-modal="true"
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-neutral-100/90 backdrop-blur-xl"
            onClick={() => {
              soundFx.playTick();
              setActiveService(null);
            }}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 20 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto bg-white rounded-[28px] sm:rounded-[36px] p-6 sm:p-9 shadow-2xl border border-neutral-200/90 text-neutral-900"
            >
              {/* Internal Ambient Quartz Lighting */}
              <div className="absolute -top-24 -right-24 w-60 h-60 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

              {/* Top Meta Row */}
              <div className="flex items-center justify-between border-b border-neutral-100 pb-4 mb-5">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500" />
                  <span className="text-[11px] font-mono tracking-widest text-neutral-500 uppercase font-semibold">
                    {getAccent(activeService.id).badge} • OVERVIEW
                  </span>
                </div>

                <button
                  onClick={() => {
                    soundFx.playTick();
                    setActiveService(null);
                  }}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-neutral-100 hover:bg-neutral-950 hover:text-white flex items-center justify-center transition-all duration-300 cursor-pointer group shadow-2xs"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" />
                </button>
              </div>

              {/* Service Emblem + Title */}
              <div className="flex items-center gap-3.5 sm:gap-4 mb-4">
                <div
                  className={`w-11 h-11 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center border shadow-xs shrink-0 ${getAccent(activeService.id).accentBg}`}
                >
                  {React.cloneElement(
                    getAccent(activeService.id).icon as React.ReactElement<{ className?: string }>,
                    { className: "w-5 h-5 sm:w-6 sm:h-6" }
                  )}
                </div>
                <div>
                  <h3 className="text-lg sm:text-2xl font-bold tracking-tight text-neutral-950">
                    {activeService.title}
                  </h3>
                  <p className="text-xs font-mono text-neutral-500">
                    {getAccent(activeService.id).tagline}
                  </p>
                </div>
              </div>

              {/* Service Detailed Narrative */}
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-6 font-normal">
                {activeService.description}
              </p>

              {/* Key Deliverables Cards */}
              <div className="mb-6 sm:mb-8">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-500 font-bold block">
                    Key Architectural Deliverables
                  </span>
                  <span className="text-[10px] font-mono text-neutral-400">
                    {activeService.deliverables.length} Milestones
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-2.5">
                  {activeService.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="group/item flex items-center justify-between p-3 sm:p-3.5 rounded-2xl bg-neutral-50/90 hover:bg-neutral-100/80 border border-neutral-200/70 transition-all duration-200"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full bg-white border border-neutral-200/80 text-[10.5px] font-mono font-bold text-neutral-700 flex items-center justify-center shadow-2xs">
                          0{idx + 1}
                        </span>
                        <span className="text-xs sm:text-sm font-semibold text-neutral-900">
                          {item}
                        </span>
                      </div>
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 opacity-80 group-hover/item:opacity-100 transition-opacity" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action Controls */}
              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between gap-3">
                <button
                  onClick={() => {
                    soundFx.playTick();
                    setActiveService(null);
                  }}
                  className="px-3.5 py-2 rounded-full text-xs font-mono text-neutral-600 hover:text-neutral-950 transition-colors cursor-pointer"
                >
                  Dismiss
                </button>

                <button
                  onClick={() => {
                    soundFx.playSlideTransition();
                    setActiveService(null);
                    onContactMe();
                  }}
                  className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-neutral-950 hover:bg-neutral-800 text-white text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group"
                >
                  <span>Request Discipline</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
