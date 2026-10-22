"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  House,
  Mail,
  Sparkles,
} from "lucide-react";
import { GithubIcon, InstagramIcon, LinkedinIcon } from "@/components/Icons";
import { MenuButton } from "@/components/MenuButton";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { soundFx } from "@/utils/audio";

interface SlideHeroProps {
  onContactMe?: () => void;
  onOpenMenu?: () => void;
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
  onOpenMenu,
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
    <section className="portfolio-slide-card relative h-full min-h-0 w-full overflow-hidden text-neutral-950">
      <div className="relative h-full w-full overflow-hidden rounded-[22px] border border-white/80 bg-[#f9f9f8] shadow-[0_0_24px_rgba(0,0,0,0.08)] md:rounded-none md:border-0 md:bg-[#f7f7f5] md:shadow-none">
        <div className="absolute right-4 top-4 z-40 md:right-12 md:top-6">
          <MenuButton
            onClick={() => {
              soundFx.playTick();
              onOpenMenu?.();
            }}
          />
        </div>

        {/* Oversized signature-style brand */}
        <div
          aria-hidden="true"
          className="hero-reveal hero-reveal-down hero-center-x pointer-events-none absolute left-1/2 top-[8.5%] z-0 whitespace-nowrap text-[20vw] leading-none tracking-[-0.1em] md:top-[7%] md:text-[17vw] lg:top-[-1%] lg:text-[14.5vw]"
          style={{
            fontFamily: '"Segoe Script", "Brush Script MT", cursive',
            fontWeight: 500,
          }}
        >
          Nahilist
        </div>

        {/* Central portrait */}
        <div
          className="hero-reveal hero-reveal-up hero-center-x pointer-events-none absolute left-1/2 top-[20%] z-10 h-[28vh] min-h-[10rem] w-[55%] max-w-[15rem] select-none md:bottom-0 md:top-auto md:h-[73vh] md:w-[38vw] md:max-w-[32rem]"
          style={{ animationDelay: "120ms" }}
        >
          <Image
            src="/pic-remove-background.webp"
            alt={personal.name}
            fill
            sizes="(max-width: 767px) 55vw, 38vw"
            priority
            className="object-contain object-bottom grayscale contrast-[1.08]"
          />
        </div>

        {/* Role and introduction */}
        <div
          className="hero-reveal hero-reveal-left hero-mobile-center-x absolute left-1/2 top-[53%] z-20 w-[88%] text-center md:bottom-[6.5%] md:left-[4.2%] md:top-auto md:w-auto md:max-w-[20rem] md:text-left"
          style={{ animationDelay: "320ms" }}
        >
          <h1 id="home-heading" className="text-lg font-extrabold tracking-[-0.04em] sm:text-xl md:text-2xl lg:text-[2rem]">
            {personal.name} <span className="block text-[0.7em] tracking-[-0.02em] text-neutral-600">{personal.role} &middot; Nahilist</span>
          </h1>
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
          <nav aria-label="Profile pages" className="mt-5 hidden gap-4 text-sm font-semibold md:flex">
            <Link className="underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-900" href="/projects">Projects</Link>
            <Link className="underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-900" href="/about">About</Link>
            <Link className="underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-900" href="/contact">Contact</Link>
          </nav>
        </div>

        {/* Compact mobile action grid */}
        <div
          className="hero-reveal hero-reveal-up hero-center-x absolute left-1/2 top-[61%] z-30 grid w-[88%] grid-cols-2 gap-2 md:hidden"
          style={{ animationDelay: "420ms" }}
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
        </div>

        {/* Desktop social links */}
        <nav
          aria-label="Social links"
          className="hero-reveal hero-reveal-right absolute bottom-[6.5%] right-[4%] z-30 hidden flex-col gap-3 md:flex"
          style={{ animationDelay: "420ms" }}
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
        </nav>

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
