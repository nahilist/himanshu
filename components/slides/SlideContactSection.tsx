"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Send,
} from "lucide-react";
import { soundFx } from "@/utils/audio";

export const SlideContactSection: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    projectDetails: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    soundFx.playTick();

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      soundFx.playOpenModal();

      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          fullName: "",
          company: "",
          email: "",
          phone: "",
          projectDetails: "",
        });
      }, 4000);
    }, 550);
  };

  return (
    <section className="relative w-full h-full min-h-screen flex flex-col justify-between px-4 sm:px-8 md:px-14 lg:px-20 pt-16 sm:pt-20 md:pt-14 pb-4 sm:pb-8 bg-white overflow-y-auto overscroll-contain selection:bg-amber-100 selection:text-neutral-900">
      {/* Subtle Ambient Background Watermark & Lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 -left-32 w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-gradient-to-br from-amber-200/20 via-orange-100/10 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-gradient-to-tl from-purple-200/20 via-pink-100/10 to-transparent blur-3xl pointer-events-none" />

      {/* MAIN 2-COLUMN STUDIO CONTENT */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex-1 flex flex-col justify-center my-auto py-2 sm:py-4">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 lg:gap-14 items-center">
          
          {/* LEFT COLUMN: Editorial Headline */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100/90 border border-neutral-200/80 text-[10.5px] sm:text-xs font-mono text-neutral-800 mb-2.5 sm:mb-4 shadow-2xs w-fit">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span className="font-semibold tracking-wide">Get in Touch</span>
            </div>

            {/* Big Bold Editorial Headline */}
            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-[3.35rem] font-light tracking-tight text-neutral-950 leading-[1.1] lg:leading-[1.05]">
              Let&apos;s build your next{" "}
              <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-amber-950 via-amber-800 to-amber-900 block sm:inline">
                intelligent project.
              </span>
            </h2>
          </div>

          {/* RIGHT COLUMN: Luxury Architectural Inquiry Form Card */}
          <div className="lg:col-span-7 relative bg-gradient-to-b from-white via-white/95 to-neutral-50/90 backdrop-blur-xl rounded-[24px] sm:rounded-[36px] p-4 sm:p-7 md:p-8 border border-neutral-200/90 shadow-[0_16px_45px_rgba(0,0,0,0.04),0_1px_2px_rgba(0,0,0,0.02)] ring-1 ring-black/[0.03] overflow-hidden">
            {/* Subtle Ambient Sheen */}
            <div className="absolute -top-16 -right-16 w-40 h-40 bg-gradient-to-bl from-amber-200/30 via-transparent to-transparent rounded-full pointer-events-none blur-2xl" />

            {/* Card Top Header */}
            <div className="relative z-10 flex items-center justify-between border-b border-neutral-200/80 pb-3 mb-3.5 sm:mb-5">
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-neutral-950">
                  Send a Direct Message
                </h3>
                <p className="text-[11px] sm:text-xs font-mono text-neutral-500 mt-0.5">
                  Direct inquiry to Himanshu Kumar
                </p>
              </div>

              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-[10.5px] sm:text-xs font-mono font-medium text-emerald-800 shadow-2xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>Replies within 24h</span>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="py-10 sm:py-14 px-4 text-center rounded-2xl bg-white border border-neutral-200/90 shadow-sm"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-600 flex items-center justify-center mx-auto mb-3 shadow-xs">
                    <Check className="w-6 h-6 stroke-[2.5]" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold tracking-tight text-neutral-950">
                    Message Dispatched Successfully
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-600 mt-1 max-w-xs mx-auto leading-relaxed">
                    Thank you! Your inquiry has been sent directly to Himanshu. Expect a response within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-2.5 sm:space-y-3.5 relative z-10"
                >
                  {/* Clean 2-Column Responsive Precision Wells */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3.5">
                    {/* Field 1: Your Name */}
                    <div className="group/field relative rounded-xl sm:rounded-2xl bg-white border border-neutral-200/90 hover:border-neutral-300 focus-within:border-neutral-950 focus-within:ring-2 sm:focus-within:ring-4 focus-within:ring-neutral-950/[0.03] transition-all duration-200 p-2.5 sm:p-3 shadow-2xs">
                      <label className="block text-[10px] sm:text-[10.5px] font-mono tracking-wider uppercase font-semibold text-neutral-500 mb-0.5 sm:mb-1 transition-colors group-focus-within/field:text-neutral-950">
                        Your Name <span className="text-amber-600 font-bold">*</span>
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="Jane Doe"
                        value={formData.fullName}
                        onFocus={() => soundFx.playTick()}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        className="w-full bg-transparent text-xs sm:text-sm text-neutral-950 placeholder:text-neutral-400 placeholder:italic focus:outline-none font-sans"
                      />
                    </div>

                    {/* Field 2: Company / Organization */}
                    <div className="group/field relative rounded-xl sm:rounded-2xl bg-white border border-neutral-200/90 hover:border-neutral-300 focus-within:border-neutral-950 focus-within:ring-2 sm:focus-within:ring-4 focus-within:ring-neutral-950/[0.03] transition-all duration-200 p-2.5 sm:p-3 shadow-2xs">
                      <label className="block text-[10px] sm:text-[10.5px] font-mono tracking-wider uppercase font-semibold text-neutral-500 mb-0.5 sm:mb-1 transition-colors group-focus-within/field:text-neutral-950">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        placeholder="Acme Inc / University"
                        value={formData.company}
                        onFocus={() => soundFx.playTick()}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        className="w-full bg-transparent text-xs sm:text-sm text-neutral-950 placeholder:text-neutral-400 placeholder:italic focus:outline-none font-sans"
                      />
                    </div>

                    {/* Field 3: Email Address */}
                    <div className="group/field relative rounded-xl sm:rounded-2xl bg-white border border-neutral-200/90 hover:border-neutral-300 focus-within:border-neutral-950 focus-within:ring-2 sm:focus-within:ring-4 focus-within:ring-neutral-950/[0.03] transition-all duration-200 p-2.5 sm:p-3 shadow-2xs">
                      <label className="block text-[10px] sm:text-[10.5px] font-mono tracking-wider uppercase font-semibold text-neutral-500 mb-0.5 sm:mb-1 transition-colors group-focus-within/field:text-neutral-950">
                        Email Address <span className="text-amber-600 font-bold">*</span>
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="jane@company.com"
                        value={formData.email}
                        onFocus={() => soundFx.playTick()}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full bg-transparent text-xs sm:text-sm text-neutral-950 placeholder:text-neutral-400 placeholder:italic focus:outline-none font-sans"
                      />
                    </div>

                    {/* Field 4: Phone / Telegram (Optional) */}
                    <div className="group/field relative rounded-xl sm:rounded-2xl bg-white border border-neutral-200/90 hover:border-neutral-300 focus-within:border-neutral-950 focus-within:ring-2 sm:focus-within:ring-4 focus-within:ring-neutral-950/[0.03] transition-all duration-200 p-2.5 sm:p-3 shadow-2xs">
                      <label className="block text-[10px] sm:text-[10.5px] font-mono tracking-wider uppercase font-semibold text-neutral-500 mb-0.5 sm:mb-1 transition-colors group-focus-within/field:text-neutral-950">
                        Phone / Telegram (Optional)
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onFocus={() => soundFx.playTick()}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full bg-transparent text-xs sm:text-sm text-neutral-950 placeholder:text-neutral-400 placeholder:italic focus:outline-none font-sans"
                      />
                    </div>
                  </div>

                  {/* Field 5: Message / Project Goals */}
                  <div className="group/field relative rounded-xl sm:rounded-2xl bg-white border border-neutral-200/90 hover:border-neutral-300 focus-within:border-neutral-950 focus-within:ring-2 sm:focus-within:ring-4 focus-within:ring-neutral-950/[0.03] transition-all duration-200 p-2.5 sm:p-3 shadow-2xs">
                    <label className="block text-[10px] sm:text-[10.5px] font-mono tracking-wider uppercase font-semibold text-neutral-500 mb-0.5 sm:mb-1 transition-colors group-focus-within/field:text-neutral-950">
                      Message / Project Goals
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Tell me about your project, timeline, or engineering challenge..."
                      value={formData.projectDetails}
                      onFocus={() => soundFx.playTick()}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          projectDetails: e.target.value,
                        })
                      }
                      className="w-full bg-transparent text-xs sm:text-sm text-neutral-950 placeholder:text-neutral-400 placeholder:italic focus:outline-none resize-none font-sans leading-relaxed h-14 sm:h-20"
                    />
                  </div>

                  {/* Submit CTA Button & Security Footnote */}
                  <div className="pt-1 space-y-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="relative group w-full py-3 sm:py-3.5 px-5 rounded-full bg-neutral-950 hover:bg-neutral-900 active:scale-[0.99] text-white font-mono text-xs sm:text-[12.5px] tracking-widest uppercase flex items-center justify-center gap-2.5 shadow-[0_8px_20px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.18)] transition-all duration-300 cursor-pointer overflow-hidden disabled:opacity-75"
                    >
                      {/* Hover ambient sheen */}
                      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none" />

                      <span className="relative z-10 font-bold tracking-widest">
                        {isSubmitting ? "TRANSMITTING BRIEF..." : "SEND INQUIRY"}
                      </span>
                      <div className="relative z-10 w-6 h-6 rounded-full bg-neutral-800 group-hover:bg-amber-400 text-amber-400 group-hover:text-neutral-950 flex items-center justify-center transition-all duration-300 shadow-2xs">
                        {isSubmitting ? (
                          <Send className="w-3 h-3 animate-pulse" />
                        ) : (
                          <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5" />
                        )}
                      </div>
                    </button>

                    <div className="flex items-center justify-center gap-1.5 text-[10px] sm:text-[10.5px] font-mono text-neutral-400">
                      <ShieldCheck className="w-3.5 h-3.5 text-neutral-400" />
                      <span>256-Bit Encrypted • Direct Dispatch • Zero Brokers</span>
                    </div>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* 3. BOTTOM FOOTER BAR */}
      <div className="relative z-10 w-full max-w-7xl mx-auto pt-2.5 sm:pt-3 pb-1 flex items-center justify-center sm:justify-between text-[10.5px] sm:text-[11px] font-mono text-neutral-400 border-t border-neutral-200/70 shrink-0">
        <span className="text-center sm:text-left">
          Himanshu Kumar • AI &amp; ML Engineer • Based in India
        </span>
        <span className="hidden sm:inline">
          Designed with Editorial Precision
        </span>
      </div>
    </section>
  );
};


