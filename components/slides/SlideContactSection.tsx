"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { Mail, Check, ArrowRight } from "lucide-react";
import { soundFx } from "@/utils/audio";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export const SlideContactSection: React.FC = () => {
  const [selectedInterests, setSelectedInterests] = useState<string[]>(["UI/UX"]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    projectDetails: "",
  });

  const interestOptions = [
    "UI/UX",
    "Development",
    "Branding",
    "3D Animation",
    "Business automation",
  ];

  const toggleInterest = (tag: string) => {
    soundFx.playTick();
    setSelectedInterests((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundFx.playOpenModal();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        fullName: "",
        company: "",
        email: "",
        phone: "",
        projectDetails: "",
      });
    }, 3000);
  };

  return (
    <section className="relative w-full h-full min-h-screen flex items-center justify-center p-4 sm:p-8 md:p-12 lg:p-14 bg-white select-none">
      {/* Outer rounded card container matching Batch 3 Image 1 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full h-[84vh] max-h-[840px] rounded-3xl md:rounded-[32px] overflow-hidden shadow-2xl bg-white border border-neutral-200/80 p-6 sm:p-10 md:p-14 flex flex-col justify-between"
      >
        {/* Soft Warm Ambient Lighting on Top-Left and Bottom-Right */}
        <div className="absolute -top-16 -left-16 w-80 h-80 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -right-16 w-96 h-96 rounded-full bg-orange-400/10 blur-3xl pointer-events-none" />

        {/* 2-Column Split: Left Pitch | Right Form */}
        <div className="relative z-10 w-full h-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* LEFT COLUMN: Get Started & Pitch */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full py-2">
            <div>
              {/* Badge: • Get Started */}
              <div className="flex items-center gap-2 text-xs md:text-sm font-semibold text-[#d97706] mb-4">
                <span className="w-2 h-2 rounded-full bg-[#d97706] animate-pulse" />
                <span>Get Started</span>
              </div>

              {/* Big Headline */}
              <h2 className="text-3xl sm:text-5xl md:text-[3.25rem] font-light tracking-tight text-neutral-900 leading-[1.08]">
                Let&apos;s build your next
                <br />
                <span className="font-normal text-neutral-950">award winning project</span>
              </h2>

              {/* Divider */}
              <div className="w-16 h-[1.5px] bg-neutral-300 my-6" />

              {/* Subtitle */}
              <p className="text-xs sm:text-sm text-neutral-500 max-w-sm leading-relaxed">
                Turn your vision into a digital experience that stands out.
              </p>
            </div>

            {/* Bottom Socials & Direct Email matching Image 1 */}
            <div className="pt-8 mt-auto space-y-4">
              {/* Social Icons row */}
              <div className="flex items-center gap-2.5">
                {[
                  { label: "TikTok", icon: "TT" },
                  { label: "Instagram", icon: "IG" },
                  { label: "X", icon: "X" },
                  { label: "Facebook", icon: "FB" },
                  { label: "YouTube", icon: "YT" },
                  { label: "LinkedIn", icon: "IN" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    title={item.label}
                    className="w-7 h-7 rounded-full border border-neutral-300 flex items-center justify-center text-[9px] font-mono font-bold text-neutral-600 hover:text-black hover:border-black transition-colors cursor-pointer"
                  >
                    {item.icon}
                  </div>
                ))}
              </div>

              {/* Email link */}
              <a
                href={`mailto:${PORTFOLIO_DATA.brand.email}`}
                className="group flex items-center gap-2 text-xs font-mono text-neutral-700 hover:text-black transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-neutral-500 group-hover:text-black" />
                <span className="border-b border-transparent group-hover:border-black">
                  {PORTFOLIO_DATA.brand.email}
                </span>
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: Let's Talk Inquiry Form */}
          <div className="lg:col-span-7 bg-white/60 backdrop-blur-xs p-2 sm:p-6 flex flex-col justify-center">
            <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-neutral-900 mb-6">
              Let&apos;s talk
            </h3>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center rounded-2xl bg-neutral-50 border border-neutral-200"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-neutral-900">Inquiry Dispatched</h4>
                <p className="text-xs text-neutral-500 mt-1 max-w-xs mx-auto">
                  Thank you! Our studio director will review your project and get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* 2x2 Input Fields with Underline Styling */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-[11px] font-mono text-neutral-500 mb-1">
                      Full name
                    </label>
                    <input
                      required
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full pb-1.5 bg-transparent border-b border-neutral-300 text-xs sm:text-sm text-neutral-900 focus:outline-none focus:border-black transition-colors"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-[11px] font-mono text-neutral-500 mb-1">
                      Company
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full pb-1.5 bg-transparent border-b border-neutral-300 text-xs sm:text-sm text-neutral-900 focus:outline-none focus:border-black transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-[11px] font-mono text-neutral-500 mb-1">
                      Email
                    </label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pb-1.5 bg-transparent border-b border-neutral-300 text-xs sm:text-sm text-neutral-900 focus:outline-none focus:border-black transition-colors"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-[11px] font-mono text-neutral-500 mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pb-1.5 bg-transparent border-b border-neutral-300 text-xs sm:text-sm text-neutral-900 focus:outline-none focus:border-black transition-colors"
                    />
                  </div>
                </div>

                {/* Interest Pills Selection */}
                <div className="pt-2">
                  <span className="block text-[11px] font-mono text-neutral-500 mb-2.5">
                    I&apos;m Interested on
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {interestOptions.map((tag) => {
                      const isSelected = selectedInterests.includes(tag);
                      return (
                        <button
                          key={tag}
                          type="button"
                          onClick={() => toggleInterest(tag)}
                          className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                            isSelected
                              ? "bg-neutral-950 text-white shadow-xs"
                              : "bg-white text-neutral-700 border border-neutral-300 hover:border-neutral-500"
                          }`}
                        >
                          {tag}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Project Details Textarea */}
                <div className="pt-2">
                  <label className="block text-[11px] font-mono text-neutral-500 mb-1">
                    Tell us more about your project!
                  </label>
                  <textarea
                    rows={2}
                    value={formData.projectDetails}
                    onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                    className="w-full pb-1.5 bg-transparent border-b border-neutral-300 text-xs sm:text-sm text-neutral-900 focus:outline-none focus:border-black transition-colors resize-none"
                  />
                </div>

                {/* Submit SEND button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="group w-full py-3.5 px-6 rounded-full bg-neutral-950 hover:bg-neutral-900 text-white font-mono text-xs tracking-widest uppercase flex items-center justify-center gap-2 shadow-lg transition-all duration-300 cursor-pointer"
                  >
                    <span>SEND</span>
                    <ArrowRight className="w-4 h-4 text-[#f59e0b] transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

