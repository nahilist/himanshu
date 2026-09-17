"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, FileText, ArrowUpRight, ShieldCheck } from "lucide-react";
import { soundFx } from "@/utils/audio";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const resumeUrl = PORTFOLIO_DATA.resume.viewUrl;
  const previewUrl = PORTFOLIO_DATA.resume.previewUrl;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-black/85 backdrop-blur-xl overflow-hidden"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              soundFx.playTick();
              onClose();
            }
          }}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 320, damping: 30 }}
            className="relative w-full max-w-5xl h-[88vh] bg-neutral-950 text-white rounded-2xl md:rounded-3xl shadow-2xl border border-neutral-800 overflow-hidden flex flex-col"
          >
            {/* Top Modal Header */}
            <div className="flex items-center justify-between px-5 sm:px-7 py-3.5 border-b border-neutral-850 bg-neutral-900/90 backdrop-blur-md sticky top-0 z-20">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <div className="flex items-center gap-2 font-mono text-xs text-neutral-300">
                  <FileText className="w-3.5 h-3.5 text-amber-400" />
                  <span className="font-semibold text-white tracking-wider uppercase">
                    Resume
                  </span>
                  <span className="text-neutral-600 hidden sm:inline">•</span>
                  <span className="text-neutral-400 hidden sm:inline">Google Drive</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundFx.playTick()}
                  className="px-3.5 py-1.5 rounded-full bg-amber-400 hover:bg-amber-300 text-neutral-950 transition-all font-mono text-xs font-semibold flex items-center gap-1.5 shadow-sm group cursor-pointer"
                >
                  <span>Open in Google Drive</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <button
                  onClick={() => {
                    soundFx.playTick();
                    onClose();
                  }}
                  className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Embedded Google Drive PDF Viewer */}
            <div className="relative flex-1 w-full bg-neutral-900 overflow-hidden flex flex-col">
              <iframe
                src={previewUrl}
                title="Himanshu Resume"
                className="w-full flex-1 border-0 bg-neutral-900"
                allow="autoplay"
              />

              {/* Bottom Quick-Access Bar */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-5 py-3 border-t border-neutral-850 bg-neutral-950 text-xs font-mono text-neutral-400">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Google Drive Document</span>
                </div>

                <div className="flex items-center gap-2 sm:gap-4">
                  <span className="text-neutral-500 text-[11px] sm:text-xs">
                    If preview is slow or blocked:
                  </span>
                  <a
                    href={resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => soundFx.playTick()}
                    className="text-amber-400 hover:text-amber-300 underline font-medium flex items-center gap-1 cursor-pointer text-xs"
                  >
                    <span>Click here to open link</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
