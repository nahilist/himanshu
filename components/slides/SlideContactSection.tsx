"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Check, ArrowRight, Calendar, ExternalLink, Copy } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { soundFx } from "@/utils/audio";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export const SlideContactSection: React.FC = () => {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([
    "AI/ML Development",
  ]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    projectDetails: "",
  });

  const { personal } = PORTFOLIO_DATA;

  const interestOptions = [
    "AI/ML Development",
    "Generative AI & RAG",
    "Frontend Engineering",
    "Full-Stack Web App",
    "Internship Inquiry",
    "Collaboration",
  ];

  const toggleInterest = (tag: string) => {
    soundFx.playTick();
    setSelectedInterests((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const copyEmail = () => {
    soundFx.playTick();
    navigator.clipboard.writeText(personal.email);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
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
    }, 3500);
  };

  return (
    <section className="relative w-full h-full min-h-screen flex items-center justify-center p-4 sm:p-8 md:p-12 lg:p-14 bg-white">
      {/* Outer rounded card container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full h-[84vh] max-h-[840px] rounded-3xl md:rounded-[32px] overflow-hidden shadow-2xl bg-white border border-neutral-200/80 p-6 sm:p-10 md:p-14 flex flex-col justify-between"
      >
        {/* Soft Warm Ambient Lighting */}
        <div className="absolute -top-16 -left-16 w-80 h-80 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -right-16 w-96 h-96 rounded-full bg-orange-400/10 blur-3xl pointer-events-none" />

        {/* 2-Column Split: Left Contact Channels & Calendly | Right Inquiry Form */}
        <div className="relative z-10 w-full h-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* LEFT COLUMN: Get Started, Contact Links, Calendly */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full py-2">
            <div>
              {/* Badge: • Get Started */}
              <div className="flex items-center gap-2 text-xs md:text-sm font-semibold text-[#d97706] mb-3">
                <span className="w-2 h-2 rounded-full bg-[#d97706] animate-pulse" />
                <span>Get in Touch</span>
              </div>

              {/* Big Headline */}
              <h2 className="text-3xl sm:text-5xl md:text-[3.1rem] font-light tracking-tight text-neutral-900 leading-[1.08]">
                Let&apos;s build your next
                <br />
                <span className="font-bold text-neutral-950">intelligent project</span>
              </h2>

              {/* Divider */}
              <div className="w-16 h-[1.5px] bg-neutral-300 my-5" />

              {/* Subtitle */}
              <p className="text-xs sm:text-sm text-neutral-600 max-w-sm leading-relaxed mb-6">
                Available for software engineering internships, AI/ML research collaborations, and production web development.
              </p>

              {/* Optional Calendly Meeting Button */}
              <div className="mb-6">
                <a
                  href={personal.calendly}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-50 border border-amber-300/80 text-amber-900 text-xs font-mono font-medium hover:bg-amber-100 transition-colors cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-amber-700" />
                  <span>Schedule a 1:1 Video Call (Calendly)</span>
                  <ExternalLink className="w-3 h-3 text-amber-600" />
                </a>
              </div>
            </div>

            {/* Bottom Channels: Email, GitHub, LinkedIn, Medium */}
            <div className="pt-4 mt-auto space-y-3">
              {/* Email with copy button */}
              <div className="flex items-center gap-2 text-xs font-mono">
                <button
                  type="button"
                  onClick={copyEmail}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-50 border border-neutral-200 hover:border-black text-neutral-800 transition-colors cursor-pointer"
                >
                  <Mail className="w-3.5 h-3.5 text-neutral-500" />
                  <span>{personal.email}</span>
                  {isCopied ? (
                    <Check className="w-3.5 h-3.5 text-emerald-600 ml-1" />
                  ) : (
                    <Copy className="w-3.5 h-3.5 text-neutral-400 ml-1" />
                  )}
                </button>
              </div>

              {/* Social Channels Row */}
              <div className="flex items-center gap-2.5 pt-1">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noreferrer"
                  title="GitHub Profile"
                  className="w-8 h-8 rounded-full border border-neutral-300 hover:border-black flex items-center justify-center text-neutral-700 hover:text-black transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  title="LinkedIn Profile"
                  className="w-8 h-8 rounded-full border border-neutral-300 hover:border-blue-600 flex items-center justify-center text-neutral-700 hover:text-blue-600 transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={personal.medium}
                  target="_blank"
                  rel="noreferrer"
                  title="Medium Articles"
                  className="w-8 h-8 rounded-full border border-neutral-300 hover:border-black flex items-center justify-center text-[11px] font-serif font-black text-neutral-800 hover:text-black transition-colors"
                >
                  M
                </a>
                <span className="text-[11px] font-mono text-neutral-500 pl-1">
                  @himanshux64
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Let's Talk Inquiry Form */}
          <div className="lg:col-span-7 bg-white/60 backdrop-blur-xs p-2 sm:p-6 flex flex-col justify-center">
            <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-neutral-900 mb-5">
              Send a Direct Message
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
                <h4 className="text-lg font-bold text-neutral-900">Message Received</h4>
                <p className="text-xs text-neutral-500 mt-1 max-w-xs mx-auto">
                  Thank you, Himanshu Kumar will get back to your inquiry directly within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* 2x2 Input Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                  <div>
                    <label className="block text-[11px] font-mono text-neutral-500 mb-1">
                      Full name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Jane Doe"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full pb-1.5 bg-transparent border-b border-neutral-300 text-xs sm:text-sm text-neutral-900 focus:outline-none focus:border-black transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-neutral-500 mb-1">
                      Company / College
                    </label>
                    <input
                      type="text"
                      placeholder="Acme Inc / University"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full pb-1.5 bg-transparent border-b border-neutral-300 text-xs sm:text-sm text-neutral-900 focus:outline-none focus:border-black transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-neutral-500 mb-1">
                      Email address *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pb-1.5 bg-transparent border-b border-neutral-300 text-xs sm:text-sm text-neutral-900 focus:outline-none focus:border-black transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-neutral-500 mb-1">
                      Phone (Optional)
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pb-1.5 bg-transparent border-b border-neutral-300 text-xs sm:text-sm text-neutral-900 focus:outline-none focus:border-black transition-colors"
                    />
                  </div>
                </div>

                {/* Interest Pills Selection */}
                <div className="pt-1">
                  <span className="block text-[11px] font-mono text-neutral-500 mb-2">
                    I&apos;m Interested in
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {interestOptions.map((tag) => {
                      const isSelected = selectedInterests.includes(tag);
                      return (
                        <button
                          key={tag}
                          type="button"
                          onClick={() => toggleInterest(tag)}
                          className={`px-3.5 py-1 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
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
                <div>
                  <label className="block text-[11px] font-mono text-neutral-500 mb-1">
                    Tell us more about your project or role!
                  </label>
                  <textarea
                    rows={2}
                    placeholder="We'd love to collaborate on an AI/Web application..."
                    value={formData.projectDetails}
                    onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                    className="w-full pb-1.5 bg-transparent border-b border-neutral-300 text-xs sm:text-sm text-neutral-900 focus:outline-none focus:border-black transition-colors resize-none"
                  />
                </div>

                {/* Submit SEND button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="group w-full py-3.5 px-6 rounded-full bg-neutral-950 hover:bg-neutral-900 text-white font-mono text-xs tracking-widest uppercase flex items-center justify-center gap-2 shadow-lg transition-all duration-300 cursor-pointer"
                  >
                    <span>SEND MESSAGE</span>
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
