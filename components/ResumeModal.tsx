"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, Printer, ExternalLink, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { soundFx } from "@/utils/audio";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const { personal, about, skills, projects } = PORTFOLIO_DATA;

  const handlePrint = () => {
    soundFx.playTick();
    window.print();
  };

  const handleDownload = () => {
    soundFx.playTick();
    // Trigger download or fallback to print/save
    const link = document.createElement("a");
    link.href = PORTFOLIO_DATA.resume.downloadUrl;
    link.download = PORTFOLIO_DATA.resume.fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 bg-black/85 backdrop-blur-xl overflow-y-auto"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 320, damping: 30 }}
            className="relative w-full max-w-4xl max-h-[90vh] bg-white text-neutral-900 rounded-2xl md:rounded-3xl shadow-2xl border border-neutral-200 overflow-hidden flex flex-col my-auto"
          >
            {/* Top Modal Controls Bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 bg-neutral-50/80 backdrop-blur-md sticky top-0 z-20">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-mono text-xs font-semibold text-neutral-700 uppercase tracking-wider">
                  Curriculum Vitae • Himanshu Kumar
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <button
                  onClick={handlePrint}
                  title="Print Resume"
                  className="p-2 rounded-lg text-neutral-600 hover:text-black hover:bg-neutral-200/80 transition-colors cursor-pointer text-xs flex items-center gap-1.5"
                >
                  <Printer className="w-4 h-4" />
                  <span className="hidden sm:inline">Print</span>
                </button>

                <button
                  onClick={handleDownload}
                  className="px-3.5 py-1.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white transition-colors cursor-pointer text-xs font-medium flex items-center gap-1.5 shadow-sm"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </button>

                <button
                  onClick={() => {
                    soundFx.playTick();
                    onClose();
                  }}
                  className="p-2 rounded-lg text-neutral-500 hover:text-black hover:bg-neutral-200/80 transition-colors cursor-pointer"
                  aria-label="Close Resume"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Scrollable Printable Resume Sheet */}
            <div className="p-6 sm:p-10 overflow-y-auto space-y-8 font-sans leading-relaxed selection:bg-amber-100">
              {/* Resume Header */}
              <div className="border-b border-neutral-200 pb-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                  <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-950">
                    {personal.name}
                  </h1>
                  <span className="font-mono text-sm font-semibold text-amber-700">
                    {personal.role}
                  </span>
                </div>

                <p className="text-sm text-neutral-600 mt-2 max-w-2xl leading-relaxed">
                  {about.careerObjective}
                </p>

                {/* Contact links bar */}
                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-600 mt-4">
                  <a
                    href={`mailto:${personal.email}`}
                    className="flex items-center gap-1.5 hover:text-neutral-950 transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-neutral-500" />
                    <span>{personal.email}</span>
                  </a>
                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 hover:text-neutral-950 transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5 text-neutral-500" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 hover:text-neutral-950 transition-colors"
                  >
                    <LinkedinIcon className="w-3.5 h-3.5 text-neutral-500" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>

              {/* Education Section */}
              <div className="space-y-3">
                <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-500 font-bold border-b border-neutral-100 pb-1">
                  Education
                </h2>
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1">
                  <div>
                    <h3 className="text-base font-bold text-neutral-900">{about.degree}</h3>
                    <p className="text-xs text-neutral-600">{about.college}</p>
                  </div>
                  <div className="text-left sm:text-right text-xs font-mono">
                    <span className="font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200/60 block sm:inline">
                      CGPA: {about.cgpa}
                    </span>
                    <span className="text-neutral-500 block mt-0.5">{about.currentYear} (2022-2026)</span>
                  </div>
                </div>
              </div>

              {/* Technical Skills Matrix */}
              <div className="space-y-3">
                <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-500 font-bold border-b border-neutral-100 pb-1">
                  Technical Skills
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {skills.map((cat, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-neutral-50 border border-neutral-150">
                      <span className="font-bold text-neutral-900 block mb-1.5">{cat.title}:</span>
                      <div className="flex flex-wrap gap-1.5">
                        {cat.skills.map((s, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 rounded-md bg-white border border-neutral-200 text-[11px] font-mono text-neutral-700"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Projects */}
              <div className="space-y-4">
                <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-500 font-bold border-b border-neutral-100 pb-1">
                  Featured Projects
                </h2>
                <div className="space-y-4">
                  {projects.map((proj) => (
                    <div key={proj.id} className="p-4 rounded-xl border border-neutral-200/80 bg-neutral-50/50">
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-bold text-neutral-950 text-sm">{proj.title}</h3>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-200 text-neutral-800">
                            {proj.category}
                          </span>
                        </div>
                        <div className="flex items-center gap-3 text-xs font-mono">
                          <a
                            href={proj.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="text-neutral-600 hover:text-black flex items-center gap-1"
                          >
                            <GithubIcon className="w-3 h-3" /> Code
                          </a>
                          <a
                            href={proj.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="text-amber-700 hover:text-amber-900 flex items-center gap-1 font-semibold"
                          >
                            <ExternalLink className="w-3 h-3" /> Demo
                          </a>
                        </div>
                      </div>

                      <p className="text-xs text-neutral-700 mb-2 leading-relaxed">
                        {proj.whatIBuilt}
                      </p>

                      <div className="flex flex-wrap gap-1">
                        {proj.technologies.map((t, i) => (
                          <span key={i} className="text-[10px] font-mono text-neutral-500 bg-white px-1.5 py-0.5 rounded border border-neutral-200">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Experience & Certifications */}
              <div className="space-y-3">
                <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-500 font-bold border-b border-neutral-100 pb-1">
                  Experience & Leadership
                </h2>
                <div className="space-y-3 text-xs">
                  <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-150">
                    <div className="flex justify-between font-bold text-neutral-900">
                      <span>Independent AI/ML Project Developer</span>
                      <span className="font-mono text-neutral-500">2023 — Present</span>
                    </div>
                    <p className="text-neutral-600 mt-1">
                      Architected and deployed 15+ open-source AI models, RAG pipelines, and full-stack Next.js applications with 25+ public repositories.
                    </p>
                  </div>
                  <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-150">
                    <div className="flex justify-between font-bold text-neutral-900">
                      <span>Lead Frontend & ML Contributor — AI Hackathon Finalist</span>
                      <span className="font-mono text-neutral-500">2024</span>
                    </div>
                    <p className="text-neutral-600 mt-1">
                      Designed and built real-time inference user interfaces connected to FastAPI model microservices under rapid 36-hour hackathon deadlines.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
