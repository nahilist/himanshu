"use client";

import React from "react";
import Image from "next/image";
import {
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  House,
  Mail,
  Sparkles,
} from "lucide-react";
import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
} from "@/components/Icons";
import { soundFx } from "@/utils/audio";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

interface SlideFooterSectionProps {
  onScrollTop: () => void;
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

export const SlideFooterSection: React.FC<SlideFooterSectionProps> = ({
  onScrollTop,
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

  return (
    <footer className="relative flex h-full min-h-screen w-full items-center justify-center overflow-x-hidden overflow-y-auto overscroll-contain bg-[#e9e9e7] px-5 pb-28 pt-16 text-neutral-950 selection:bg-neutral-950 selection:text-white sm:px-8 sm:py-24">
      {/* Soft monochrome atmosphere */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-[8%] -top-[18%] h-[70%] w-[62%] rounded-full bg-white/90 blur-[90px]" />
        <div className="absolute -right-[12%] -top-[12%] h-[68%] w-[58%] rounded-full bg-neutral-300/80 blur-[110px]" />
        <div className="absolute bottom-[-30%] left-[12%] h-[72%] w-[50%] rounded-full bg-white blur-[100px]" />
        <div className="absolute bottom-[-18%] right-[-5%] h-[58%] w-[48%] rounded-full bg-neutral-400/35 blur-[95px]" />
        <div className="absolute left-[38%] top-[4%] h-[90%] w-[20%] rotate-12 bg-white/40 blur-[60px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(163,163,163,0.12)_100%)]" />
      </div>

      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center text-center">
        {/* Availability badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/90 px-4 py-2 text-xs font-semibold shadow-sm backdrop-blur-md sm:text-sm">
          <span className="relative flex size-2.5">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-50" />
            <span className="relative inline-flex size-2.5 rounded-full bg-emerald-500" />
          </span>
          <span>Available for New Project</span>
        </div>

        {/* Primary message */}
        <h2 className="mt-7 max-w-5xl text-3xl font-black uppercase leading-[0.95] tracking-[-0.055em] sm:mt-9 sm:text-[clamp(2.3rem,7vw,5.1rem)]">
          Have a project in mind?
        </h2>
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-neutral-500 sm:text-base md:text-lg">
          Together, we can create something clear and impactful. Let&apos;s
          collaborate to bring your ideas to life — fast, reliable, and built
          to last.
        </p>

        {/* Contact CTA */}
        <button
          type="button"
          onClick={() => {
            soundFx.playSlideTransition();
            onContactMe?.();
          }}
          className="group mt-8 hidden h-14 items-center gap-8 rounded-full border border-white bg-white py-1 pl-7 pr-1 shadow-[0_14px_28px_rgba(0,0,0,0.18),0_2px_0_rgba(0,0,0,0.65)] transition-transform hover:-translate-y-0.5 sm:mt-9 md:inline-flex"
        >
          <span className="text-sm font-bold sm:text-base">Contact Me</span>
          <span className="flex size-12 items-center justify-center rounded-full border border-neutral-200 bg-white shadow-sm">
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </span>
        </button>

        {/* Compact mobile actions */}
        <div className="mt-8 grid w-full max-w-[19rem] grid-cols-2 gap-2.5 md:hidden">
          <button
            type="button"
            onClick={() => {
              soundFx.playSlideTransition();
              onContactMe?.();
            }}
            className="group flex h-10 items-center justify-between rounded-full bg-white pl-4 pr-1.5 text-[11px] font-bold shadow-[0_8px_18px_rgba(0,0,0,0.12),0_1.5px_0_rgba(0,0,0,0.65)]"
          >
            <span>Contact Me</span>
            <span className="flex size-7 items-center justify-center rounded-full border border-neutral-200">
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
            </span>
          </button>

          <button
            type="button"
            onClick={() => {
              soundFx.playSlideTransition();
              onScrollTop();
            }}
            className="flex h-10 items-center gap-2.5 rounded-full bg-neutral-950 px-3 text-white shadow-lg"
          >
            <span className="relative size-6 overflow-hidden rounded-full bg-neutral-800">
              <Image
                src="/pic-remove-background.png"
                alt=""
                fill
                sizes="24px"
                className="object-cover object-top grayscale"
              />
            </span>
            <span className="text-[11px] font-semibold">{personal.name}</span>
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

          <a
            href={`mailto:${personal.email}`}
            onClick={() => soundFx.playTick()}
            className="group flex h-10 items-center justify-between rounded-full bg-white pl-3.5 pr-1.5 text-[11px] font-semibold shadow-[0_8px_18px_rgba(0,0,0,0.12),0_1.5px_0_rgba(0,0,0,0.65)]"
          >
            <span className="flex items-center gap-1.5">
              <Mail className="size-3.5" />
              Email
            </span>
            <span className="flex size-7 items-center justify-center rounded-full border border-neutral-200">
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
            </span>
          </a>
        </div>

        {/* Desktop identity and social links */}
        <nav
          aria-label="Contact and social links"
          className="mt-12 hidden max-w-4xl flex-wrap items-center justify-center gap-3 md:flex"
        >
          <button
            type="button"
            onClick={() => {
              soundFx.playSlideTransition();
              onScrollTop();
            }}
            className="flex h-11 items-center gap-2.5 rounded-full bg-neutral-950 px-3.5 pr-5 text-white shadow-lg transition-transform hover:-translate-y-0.5"
          >
            <span className="relative size-7 overflow-hidden rounded-full bg-neutral-800">
              <Image
                src="/pic-remove-background.png"
                alt=""
                fill
                sizes="28px"
                className="object-cover object-top grayscale"
              />
            </span>
            <span className="text-sm font-semibold">{personal.name}</span>
          </button>

          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundFx.playTick()}
              className="group flex h-11 items-center gap-3 rounded-full bg-white py-1 pl-4 pr-1 shadow-[0_9px_20px_rgba(0,0,0,0.13),0_2px_0_rgba(0,0,0,0.65)] transition-transform hover:-translate-y-0.5"
            >
              <span className="flex items-center gap-2 text-sm font-semibold">
                <Icon className="size-4" />
                {label}
              </span>
              <span className="flex size-9 items-center justify-center rounded-full border border-neutral-200">
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>
            </a>
          ))}

          <a
            href={`mailto:${personal.email}`}
            onClick={() => soundFx.playTick()}
            className="group flex h-11 items-center gap-3 rounded-full bg-white py-1 pl-4 pr-1 shadow-[0_9px_20px_rgba(0,0,0,0.13),0_2px_0_rgba(0,0,0,0.65)] transition-transform hover:-translate-y-0.5"
          >
            <span className="flex items-center gap-2 text-sm font-semibold">
              <Mail className="size-4" />
              Email
            </span>
            <span className="flex size-9 items-center justify-center rounded-full border border-neutral-200">
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
            </span>
          </a>
        </nav>
      </div>

      {/* Mobile bottom navigation */}
      <nav
        aria-label="Portfolio sections"
        className="absolute bottom-3 left-1/2 z-30 flex h-14 w-[88%] max-w-[20rem] -translate-x-1/2 items-center justify-around rounded-full bg-white px-2 shadow-[0_8px_30px_rgba(0,0,0,0.14)] md:hidden"
      >
        {mobileNavItems.map(({ label, icon: Icon, slide }) => {
          const isActive = slide === 4;

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
    </footer>
  );
};
