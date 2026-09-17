"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Brain, Cpu, Layout, Server, CheckCircle2, ArrowRight } from "lucide-react";
import { soundFx } from "@/utils/audio";
import { PORTFOLIO_DATA, ServiceItem } from "@/data/portfolioData";

interface SlideServicesSphereProps {
  onContactMe: () => void;
}

export const SlideServicesSphere: React.FC<SlideServicesSphereProps> = ({ onContactMe }) => {
  const [activeService, setActiveService] = useState<ServiceItem | null>(null);
  const { services } = PORTFOLIO_DATA;

  // Prevent background slide navigation when service detail modal is open
  useEffect(() => {
    if (activeService) {
      document.body.setAttribute("data-modal-open", "true");
      return () => {
        document.body.removeAttribute("data-modal-open");
      };
    }
  }, [activeService]);

  const getServiceIcon = (id: string) => {
    switch (id) {
      case "ai-ml-dev":
        return <Brain className="w-4 h-4 text-amber-600" />;
      case "gen-ai-rag":
        return <Sparkles className="w-4 h-4 text-purple-600" />;
      case "frontend-dev":
        return <Layout className="w-4 h-4 text-blue-600" />;
      case "fullstack-apps":
        return <Server className="w-4 h-4 text-emerald-600" />;
      default:
        return <Cpu className="w-4 h-4 text-amber-600" />;
    }
  };

  return (
    <section className="relative w-full h-full min-h-screen flex flex-col items-center justify-center p-6 md:p-14 bg-white overflow-hidden">
      {/* Subtle warm ambient lighting */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-amber-100/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-purple-100/30 blur-3xl pointer-events-none" />

      {/* Top Header */}
      <div className="absolute top-20 md:top-24 inset-x-6 md:inset-x-14 z-20 flex items-center justify-between border-b border-neutral-100 pb-4">
        <div>
          <div className="flex items-center gap-2 mb-0.5">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
            <span className="text-xs font-mono tracking-widest text-neutral-500 uppercase font-semibold">
              Capabilities & Services
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight">
            AI Engineering & Web Services
          </h2>
        </div>
      </div>

      {/* Center 3D Tactile Fuzzy Sphere Scene with 4 Service Pills */}
      <div className="relative w-full max-w-3xl h-[420px] sm:h-[480px] md:h-[520px] flex items-center justify-center my-auto z-10 pt-16">
        {/* Organic Fuzzy Sandy Sphere Graphic */}
        <motion.div
          animate={{
            scale: [1, 1.03, 0.99, 1],
            rotate: [0, 4, -3, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[380px] md:h-[380px] flex items-center justify-center rounded-full"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#d5c3b0] via-[#eedecf] to-[#f7eee5] blur-sm shadow-[0_30px_70px_rgba(180,150,120,0.3)]" />

          <div
            className="absolute inset-2 rounded-full overflow-hidden"
            style={{
              background:
                "radial-gradient(circle at 40% 35%, #fff0e2 0%, #e0cebd 35%, #c5b09d 70%, #a48c77 100%)",
            }}
          >
            <div
              className="absolute inset-0 opacity-45 mix-blend-multiply"
              style={{
                backgroundImage: `radial-gradient(circle, #8a735c 0.75px, transparent 1px)`,
                backgroundSize: "6px 6px",
              }}
            />
            <div
              className="absolute inset-0 opacity-30 mix-blend-overlay"
              style={{
                backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1.5px)`,
                backgroundSize: "9px 9px",
              }}
            />
            <div className="absolute top-4 left-8 w-40 h-40 rounded-full bg-white/40 blur-2xl pointer-events-none" />
          </div>

          <div className="absolute -inset-2 rounded-full border-[10px] border-[#eedecf]/40 blur-[3px] pointer-events-none" />
        </motion.div>

        {/* Center Typography superimposed */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20 px-4 pointer-events-none">
          <span className="text-[10px] font-mono uppercase tracking-widest text-amber-700 font-bold bg-white/70 px-3 py-1 rounded-full border border-neutral-200 backdrop-blur-xs mb-2">
            Click Any Service To Inspect
          </span>
          <h3 className="text-3xl sm:text-5xl md:text-6xl font-extralight tracking-tight text-neutral-900 leading-tight">
            We Build Systems
            <br />
            <span className="font-bold text-neutral-950">That Scale</span>
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-neutral-600 max-w-sm">
            Fusing intelligent machine models with robust web engineering.
          </p>
        </div>

        {/* 5 Floating Service Pills */}
        {/* 1. AI/ML App Development (Top-Left) */}
        <motion.button
          onClick={() => {
            soundFx.playOpenModal();
            setActiveService(services[0]);
          }}
          whileHover={{ scale: 1.05 }}
          className="absolute top-4 sm:top-8 left-2 sm:left-6 z-20 flex items-center gap-2 px-4 py-2 rounded-full bg-white/95 backdrop-blur-md border border-neutral-200 shadow-md hover:border-neutral-900 text-xs sm:text-sm font-medium text-neutral-900 transition-all cursor-pointer"
        >
          {getServiceIcon(services[0].id)}
          <span>{services[0].title}</span>
        </motion.button>

        {/* 2. Generative AI & RAG (Top-Right) */}
        <motion.button
          onClick={() => {
            soundFx.playOpenModal();
            setActiveService(services[1]);
          }}
          whileHover={{ scale: 1.05 }}
          className="absolute top-4 sm:top-8 right-2 sm:right-6 z-20 flex items-center gap-2 px-4 py-2 rounded-full bg-white/95 backdrop-blur-md border border-neutral-200 shadow-md hover:border-neutral-900 text-xs sm:text-sm font-medium text-neutral-900 transition-all cursor-pointer"
        >
          {getServiceIcon(services[1].id)}
          <span>{services[1].title}</span>
        </motion.button>

        {/* 3. Frontend Development (Bottom-Left) */}
        <motion.button
          onClick={() => {
            soundFx.playOpenModal();
            setActiveService(services[2]);
          }}
          whileHover={{ scale: 1.05 }}
          className="absolute bottom-6 sm:bottom-10 left-2 sm:left-6 z-20 flex items-center gap-2 px-4 py-2 rounded-full bg-white/95 backdrop-blur-md border border-neutral-200 shadow-md hover:border-neutral-900 text-xs sm:text-sm font-medium text-neutral-900 transition-all cursor-pointer"
        >
          {getServiceIcon(services[2].id)}
          <span>{services[2].title}</span>
        </motion.button>

        {/* 4. Full-Stack Web Applications (Bottom-Right) */}
        <motion.button
          onClick={() => {
            soundFx.playOpenModal();
            setActiveService(services[3]);
          }}
          whileHover={{ scale: 1.05 }}
          className="absolute bottom-6 sm:bottom-10 right-2 sm:right-6 z-20 flex items-center gap-2 px-4 py-2 rounded-full bg-white/95 backdrop-blur-md border border-neutral-200 shadow-md hover:border-neutral-900 text-xs sm:text-sm font-medium text-neutral-900 transition-all cursor-pointer"
        >
          {getServiceIcon(services[3].id)}
          <span>{services[3].title}</span>
        </motion.button>
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {activeService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            data-modal="true"
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-neutral-200 text-neutral-900"
            >
              <div className="flex items-start justify-between border-b border-neutral-100 pb-4 mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-neutral-100 flex items-center justify-center">
                    {getServiceIcon(activeService.id)}
                  </div>
                  <div>
                    <h3 className="font-bold text-base sm:text-lg text-neutral-950">
                      {activeService.title}
                    </h3>
                  </div>
                </div>
                <button
                  onClick={() => setActiveService(null)}
                  className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center cursor-pointer text-xs"
                >
                  ✕
                </button>
              </div>

              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-5">
                {activeService.description}
              </p>

              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 font-bold block mb-2.5">
                  Key Deliverables
                </span>
                <div className="space-y-2">
                  {activeService.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 p-2.5 rounded-xl bg-neutral-50 border border-neutral-100 text-xs font-medium text-neutral-800"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between">
                <button
                  onClick={() => setActiveService(null)}
                  className="text-xs font-mono text-neutral-500 hover:text-neutral-900 cursor-pointer"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setActiveService(null);
                    onContactMe();
                  }}
                  className="px-4 py-2 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-medium flex items-center gap-1.5 cursor-pointer shadow-sm"
                >
                  <span>Request Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
