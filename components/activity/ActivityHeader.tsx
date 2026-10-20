"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Compass, Feather, BookOpen } from "lucide-react";
import { soundFx } from "@/utils/audio";
import { ACTIVITY_NAV_LINKS } from "@/data/activityData";
import { useActivityLanguage } from "@/context/ActivityLanguageContext";

interface ActivityHeaderProps {
  currentSection?: "philosophy" | "poetry" | "stories";
}

export const ActivityHeader: React.FC<ActivityHeaderProps> = ({
  currentSection = "philosophy",
}) => {
  const { language, setLanguage } = useActivityLanguage();

  const getIcon = (id: string) => {
    switch (id) {
      case "philosophy":
        return <Compass className="w-3.5 h-3.5" />;
      case "poetry":
        return <Feather className="w-3.5 h-3.5" />;
      case "stories":
        return <BookOpen className="w-3.5 h-3.5" />;
      default:
        return null;
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-black/90 border-b border-white/10 transition-colors">
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-3 flex flex-col md:flex-row items-center justify-between gap-3">
        {/* Top Left: Brand + Breadcrumb */}
        <div className="w-full md:w-auto flex items-center justify-between md:justify-start gap-4">
          <Link
            href="/"
            onClick={() => soundFx.playTick()}
            className="flex items-center gap-2.5 group cursor-pointer shrink-0"
          >
            <div className="flex flex-col">
              <span className="font-extrabold tracking-tight text-sm text-white group-hover:text-neutral-300 transition-colors">
                NAHILIST
              </span>
              <span className="text-[9px] font-mono tracking-wider text-neutral-500 uppercase">
                {language === "hi" ? "दार्शनिक एकांत" : "Intellectual Sanctuary"}
              </span>
            </div>
          </Link>

          {/* Mobile Right: Language Switcher + Return */}
          <div className="flex md:hidden items-center gap-2">
            {/* Mobile Language Switcher */}
            <div className="flex items-center p-0.5 rounded-full bg-white/[0.06] border border-white/15">
              <button
                onClick={() => {
                  soundFx.playTick();
                  setLanguage("en");
                }}
                className={`px-2 py-0.5 rounded-full text-[10px] font-mono transition-all ${
                  language === "en"
                    ? "bg-white text-black font-bold"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => {
                  soundFx.playTick();
                  setLanguage("hi");
                }}
                className={`px-2 py-0.5 rounded-full text-[10px] font-mono transition-all ${
                  language === "hi"
                    ? "bg-white text-black font-bold"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                हिन्दी
              </button>
            </div>

            {/* Mobile Return CTA */}
            <Link
              href="/"
              onClick={() => soundFx.playTick()}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/20 bg-neutral-900 text-[11px] font-mono text-neutral-300 hover:text-white"
            >
              <ArrowLeft className="w-3 h-3 text-neutral-400" />
              <span>FOLIO</span>
            </Link>
          </div>
        </div>

        {/* Center: Triple Category Navigation Tabs */}
        <nav className="flex items-center gap-1 p-1 rounded-full bg-white/[0.04] border border-white/15 backdrop-blur-md">
          {ACTIVITY_NAV_LINKS.map((tab) => {
            const isActive = currentSection === tab.id;
            const tabLabel = language === "hi" && tab.label_hi ? tab.label_hi : tab.label;
            return (
              <Link
                key={tab.id}
                href={tab.href}
                onClick={() => soundFx.playTick()}
                className={`flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-full font-mono text-xs tracking-wider transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-white text-black font-bold shadow-sm"
                    : "text-neutral-400 hover:text-white hover:bg-white/[0.08]"
                }`}
              >
                {getIcon(tab.id)}
                <span>{tabLabel}</span>
              </Link>
            );
          })}
        </nav>

        {/* Right Desktop CTAs: Language Switcher + Back */}
        <div className="hidden md:flex items-center gap-3">
          {/* Global Language Toggle Switcher */}
          <div className="flex items-center p-1 rounded-full bg-white/[0.05] border border-white/15 backdrop-blur-md shadow-xs">
            <button
              onClick={() => {
                soundFx.playTick();
                setLanguage("en");
              }}
              className={`px-3 py-1 rounded-full text-xs font-mono font-medium transition-all cursor-pointer ${
                language === "en"
                  ? "bg-white text-black font-bold shadow-xs"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => {
                soundFx.playTick();
                setLanguage("hi");
              }}
              className={`px-3 py-1 rounded-full text-xs font-mono font-medium transition-all cursor-pointer ${
                language === "hi"
                  ? "bg-white text-black font-bold shadow-xs"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              हिन्दी
            </button>
          </div>

          {/* Back to Portfolio Button */}
          <Link
            href="/"
            onClick={() => soundFx.playTick()}
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 hover:border-white bg-white/[0.04] hover:bg-white text-xs font-mono tracking-wider text-neutral-300 hover:text-black transition-all duration-300 cursor-pointer shadow-xs"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1 text-neutral-400 group-hover:text-black" />
            <span>{language === "hi" ? "पोर्टफोलियो" : "BACK TO PORTFOLIO"}</span>
          </Link>
        </div>
      </div>
    </header>
  );
};
