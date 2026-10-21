"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  House,
  Mail,
  Sparkles,
} from "lucide-react";
import { GithubIcon, InstagramIcon, LinkedinIcon } from "@/components/Icons";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { soundFx } from "@/utils/audio";

interface SlideHeroProps {
  onViewProjects?: () => void;
  onOpenResume?: () => void;
  onContactMe?: () => void;
  onNavigate?: (index: number) => void;
}

const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com/himanshux64",
    icon: InstagramIcon,
  },
  {
    label: "LinkedIn",
    href: PORTFOLIO_DATA.personal.linkedin,
    icon: LinkedinIcon,
  },
  {
    label: "GitHub",
    href: PORTFOLIO_DATA.personal.github,
    icon: GithubIcon,
  },
];

export const SlideHero: React.FC<SlideHeroProps> = ({
  onContactMe,
  onNavigate,
}) => {
  const { personal } = PORTFOLIO_DATA;
  const mobileNavItems = [
    { label: "Home", icon: House, slide: 0 },
    { label: "Work", icon: BriefcaseBusiness, slide: 2 },
    { label: "Skills", icon: Sparkles, slide: 3 },
    { label: "Story", icon: BookOpen, slide: 1 },
    { label: "Contact", icon: Mail, slide: 4 },
  ];

  const playAndContact = () => {
    soundFx.playOpenModal();
    onContactMe?.();
  };

  return (
    <section className="relative h-full min-h-0 w-full overflow-hidden bg-[#d5d5d3] p-[7px] text-neutral-950 md:bg-[#f7f7f5] md:p-0">
      <div className="relative h-full w-full overflow-hidden rounded-t-[22px] border border-white/80 bg-[#f9f9f8] shadow-[0_0_24px_rgba(0,0,0,0.08)] md:rounded-none md:border-0 md:bg-[#f7f7f5] md:shadow-none">
        {/* Oversized signature-style brand */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="pointer-events-none absolute left-1/2 top-[8.5%] z-0 -translate-x-1/2 whitespace-nowrap text-[20vw] leading-none tracking-[-0.1em] md:top-[7%] md:text-[17vw] lg:top-[-1%] lg:text-[14.5vw]"
          style={{
            fontFamily: '"Segoe Script", "Brush Script MT", cursive',
            fontWeight: 500,
          }}
        >
          Nahilist
        </motion.h1>

        {/* Central portrait */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="pointer-events-none absolute bottom-[52.5%] left-1/2 top-[20%] z-10 h-auto min-h-0 w-[55%] max-w-[15rem] -translate-x-1/2 select-none md:bottom-0 md:top-auto md:h-[73vh] md:w-[38vw] md:max-w-[32rem]"
        >
          <Image
            src="/pic-remove-background.png"
            alt={personal.name}
            fill
            sizes="(max-width: 767px) 55vw, 38vw"
            priority
            className="object-contain object-bottom grayscale contrast-[1.08]"
          />
        </motion.div>

        {/* Role and introduction */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
          className="absolute left-1/2 top-[50%] z-20 w-[88%] -translate-x-1/2 text-center md:bottom-[6.5%] md:left-[4.2%] md:top-auto md:w-auto md:max-w-[20rem] md:translate-x-0 md:text-left"
        >
          <h2 className="text-lg font-extrabold tracking-[-0.04em] sm:text-xl md:text-2xl lg:text-[2rem]">
            {personal.role}
          </h2>
          <button
            type="button"
            onClick={playAndContact}
            className="group mt-5 hidden h-14 items-center gap-8 rounded-full bg-white py-1 pl-6 pr-1 shadow-[0_12px_28px_rgba(0,0,0,0.16),0_2px_0_rgba(0,0,0,0.75)] transition-transform hover:-translate-y-0.5 md:inline-flex"
          >
            <span className="text-base font-bold">Let&apos;s collaborate</span>
            <span className="flex size-12 items-center justify-center rounded-full border border-neutral-200 bg-white shadow-sm">
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </button>
        </motion.div>

        {/* Compact mobile action grid */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
          className="absolute left-1/2 top-[61%] z-30 grid w-[88%] -translate-x-1/2 grid-cols-2 gap-2 md:hidden"
        >
          <button
            type="button"
            onClick={playAndContact}
            className="group flex h-10 items-center justify-between rounded-full bg-white pl-4 pr-1.5 text-[11px] font-bold shadow-[0_8px_18px_rgba(0,0,0,0.12),0_1.5px_0_rgba(0,0,0,0.65)]"
          >
            <span>Collaborate</span>
            <span className="flex size-7 items-center justify-center rounded-full border border-neutral-200">
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
            </span>
          </button>

          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundFx.playTick()}
              className="group flex h-10 items-center justify-between rounded-full bg-white pl-3.5 pr-1.5 text-[11px] font-semibold shadow-[0_8px_18px_rgba(0,0,0,0.12),0_1.5px_0_rgba(0,0,0,0.65)]"
            >
              <span className="flex items-center gap-1.5">
                <Icon className="size-3.5" />
                {label}
              </span>
              <span className="flex size-7 items-center justify-center rounded-full border border-neutral-200">
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>
            </a>
          ))}
        </motion.div>

        {/* Desktop social links */}
        <motion.nav
          aria-label="Social links"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-[6.5%] right-[4%] z-30 hidden flex-col gap-3 md:flex"
        >
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundFx.playTick()}
              className="group flex h-11 w-44 items-center justify-between rounded-full bg-white px-4 shadow-[0_9px_20px_rgba(0,0,0,0.13),0_2px_0_rgba(0,0,0,0.75)] transition-transform hover:-translate-y-0.5"
            >
              <span className="flex items-center gap-2">
                <Icon className="size-4" />
                <span className="text-sm font-semibold">{label}</span>
              </span>
              <span className="ml-3 flex size-7 items-center justify-center rounded-full border border-neutral-200 shadow-sm">
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>
            </a>
          ))}
        </motion.nav>

        {/* Mobile bottom navigation */}
        <nav
          aria-label="Portfolio sections"
          className="mobile-safe-bottom absolute left-1/2 z-30 flex h-14 w-[88%] -translate-x-1/2 items-center justify-around rounded-full bg-white px-2 shadow-[0_8px_30px_rgba(0,0,0,0.12)] md:hidden"
        >
          {mobileNavItems.map(({ label, icon: Icon, slide }) => {
            const isActive = slide === 0;

            return (
              <button
                key={label}
                type="button"
                onClick={() => {
                  soundFx.playTick();
                  onNavigate?.(slide);
                }}
                className={`flex min-w-10 flex-col items-center justify-center gap-0.5 rounded-2xl px-2 py-1.5 text-[8px] transition-colors ${
                  isActive
                    ? "bg-neutral-950 text-white"
                    : "text-neutral-500 hover:text-neutral-950"
                }`}
              >
                <Icon className="size-3.5" />
                <span>{label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </section>
  );
};
