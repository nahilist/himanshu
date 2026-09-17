"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft, Compass, Feather, BookOpen, Bookmark, LayoutGrid } from "lucide-react";
import { soundFx } from "@/utils/audio";
import { ACTIVITY_NAV_LINKS } from "@/data/activityData";

interface ActivityHeaderProps {
  currentSection?: string;
}

export const ActivityHeader: React.FC<ActivityHeaderProps> = () => {
  const pathname = usePathname();

  const getIcon = (id: string) => {
    switch (id) {
      case "all":
        return <LayoutGrid className="w-3.5 h-3.5" />;
      case "philosophy":
        return <Compass className="w-3.5 h-3.5 text-amber-400" />;
      case "poetry":
        return <Feather className="w-3.5 h-3.5 text-pink-400" />;
      case "stories":
        return <BookOpen className="w-3.5 h-3.5 text-cyan-400" />;
      case "reading-shelf":
        return <Bookmark className="w-3.5 h-3.5 text-emerald-400" />;
      default:
        return null;
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-[#070709]/85 border-b border-white/10">
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
              <span className="font-extrabold tracking-tight text-sm text-white group-hover:text-amber-400 transition-colors">
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
            <ArrowLeft className="w-3 h-3 text-amber-400" />
            <span>PORTFOLIO</span>
          </Link>
        </div>

        {/* Center Sub-Navigation Tabs */}
        <nav className="flex items-center gap-1.5 overflow-x-auto max-w-full py-1 scrollbar-none">
          {ACTIVITY_NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/activity"
                ? pathname === "/activity"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => soundFx.playTick()}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wide transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? "bg-amber-400 text-black font-semibold shadow-xs"
                    : "bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white border border-transparent hover:border-white/10"
                }`}
              >
                {getIcon(link.id)}
                <span>{link.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Right Desktop Return CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/"
            onClick={() => soundFx.playTick()}
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 hover:border-amber-400/80 bg-neutral-900/90 hover:bg-neutral-800 text-xs font-mono tracking-wider text-neutral-300 hover:text-white transition-all duration-300 cursor-pointer shadow-sm"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1 text-amber-400" />
            <span>BACK TO PORTFOLIO</span>
          </Link>
        </div>
      </div>
    </header>
  );
};
