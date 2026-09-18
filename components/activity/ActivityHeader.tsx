"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";
import { soundFx } from "@/utils/audio";

interface ActivityHeaderProps {
  currentSection?: string;
}

export const ActivityHeader: React.FC<ActivityHeaderProps> = () => {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-black/90 border-b border-white/10 transition-colors">
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-3.5 flex flex-col md:flex-row items-center justify-between gap-3">
        {/* Top Left: Logo + Breadcrumb */}
        <div className="w-full md:w-auto flex items-center justify-between md:justify-start gap-4">
          <Link
            href="/"
            onClick={() => soundFx.playTick()}
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <div className="relative h-8 w-auto flex items-center justify-center">
              <Image
                src="/logo-monogram-white.png"
                alt="Nahilist"
                width={32}
                height={38}
                className="h-7 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold tracking-tight text-sm text-white group-hover:text-neutral-300 transition-colors">
                NAHILIST
              </span>
              <span className="text-[9px] font-mono tracking-wider text-neutral-500 uppercase">
                Intellectual Sanctuary
              </span>
            </div>
          </Link>

          {/* Mobile Return CTA */}
          <Link
            href="/"
            onClick={() => soundFx.playTick()}
            className="md:hidden inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/20 bg-neutral-900 text-[11px] font-mono text-neutral-300 hover:text-white"
          >
            <ArrowLeft className="w-3 h-3 text-neutral-400" />
            <span>PORTFOLIO</span>
          </Link>
        </div>

        {/* Center Badge: Indian Radical Philosophy (Monochrome Luxury) */}
        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/15 text-xs font-mono text-neutral-300">
          <Compass className="w-3.5 h-3.5 text-neutral-300" />
          <span className="text-white font-medium">Indian Radical Philosophy</span>
          <span className="text-neutral-600">•</span>
          <span className="text-neutral-400">06 Core Thinkers</span>
        </div>

        {/* Right Desktop Return CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/"
            onClick={() => soundFx.playTick()}
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 hover:border-white bg-white/[0.04] hover:bg-white text-xs font-mono tracking-wider text-neutral-300 hover:text-black transition-all duration-300 cursor-pointer shadow-xs"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1 text-neutral-400 group-hover:text-black" />
            <span>BACK TO PORTFOLIO</span>
          </Link>
        </div>
      </div>
    </header>
  );
};
