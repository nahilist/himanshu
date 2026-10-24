"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, ArrowUpRight, ChevronDown } from "lucide-react";
import { GithubIcon, InstagramIcon, LinkedinIcon } from "@/components/Icons";
import TechText from "@/components/TechText";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { projects } from "@/lib/projects";

const navItems = [
  { label: "Work", count: "07", href: "#work" },
  { label: "Skills", count: "06", href: "#skills" },
  { label: "Experience", count: "2y+", href: "#experience" },
  { label: "Contact", count: "", href: "#contact" },
];

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com/himanshux64", icon: InstagramIcon },
  { label: "LinkedIn", href: PORTFOLIO_DATA.personal.linkedin, icon: LinkedinIcon },
  { label: "GitHub", href: PORTFOLIO_DATA.personal.github, icon: GithubIcon },
];

function ArrowBubble() {
  return (
    <span className="relative flex size-8 shrink-0 overflow-hidden rounded-full border border-neutral-200 bg-white shadow-sm">
      <ArrowRight className="absolute left-1/2 top-1/2 size-4 -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 group-hover:translate-x-6" />
      <ArrowRight className="absolute left-1/2 top-1/2 size-4 -translate-x-8 -translate-y-1/2 transition-transform duration-300 group-hover:-translate-x-1/2" />
    </span>
  );
}

function SectionHeading({ children, backdrop, align = "center", dark = false }: { children: React.ReactNode; backdrop: string; align?: "left" | "center"; dark?: boolean }) {
  return (
    <div className={`relative ${align === "center" ? "flex justify-center" : ""}`}>
      <span aria-hidden="true" className={`pointer-events-none absolute ${align === "center" ? "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" : "left-0 top-1/2 -translate-y-1/2"} select-none whitespace-nowrap font-extrabold uppercase tracking-tight ${dark ? "text-white/[0.04]" : "text-black/[0.04]"}`} style={{ fontSize: "clamp(3.5rem, 12vw, 11rem)" }}>{backdrop}</span>
      <h2 className="relative text-3xl font-bold uppercase tracking-tight sm:text-4xl md:text-5xl"><span>/</span>{children}</h2>
    </div>
  );
}

export function NavsoulHome() {
  const [activeSkill, setActiveSkill] = useState(0);
  const { personal, skills, experienceEducation } = PORTFOLIO_DATA;

  const movePortraitReveal = (event: React.PointerEvent<HTMLDivElement>) => {
    const portrait = event.currentTarget;
    const bounds = portrait.getBoundingClientRect();
    portrait.style.setProperty("--portrait-x", `${event.clientX - bounds.left}px`);
    portrait.style.setProperty("--portrait-y", `${event.clientY - bounds.top}px`);
  };

  return (
    <main className="navsoul-page min-h-screen w-full p-3 sm:p-5 md:p-6">
      <div className="relative overflow-hidden rounded-[1.75rem] bg-white/95 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.25)] backdrop-blur-sm md:rounded-[2.25rem]">
        <section id="home" className="relative flex min-h-[calc(100svh-2rem)] flex-col px-5 pb-5 pt-6 sm:px-8 sm:pb-7 sm:pt-8 md:px-10 md:pb-8 md:pt-10">
          <nav className="relative z-50 flex items-center justify-end lg:justify-center" aria-label="Primary navigation">
            <ul className="hidden items-center gap-8 lg:flex">
              {navItems.map((item) => <li key={item.label}><a className="inline-flex items-baseline gap-1 text-sm font-medium text-neutral-700 hover:text-black" href={item.href}>{item.label}{item.count && <span className="text-xs text-neutral-400">[{item.count}]</span>}</a></li>)}
            </ul>
          </nav>

          <div className="relative mt-4 hidden flex-1 md:block">
            <div className="pointer-events-none absolute inset-x-0 top-2 flex h-[clamp(190px,24vw,300px)] justify-center">
              <div className="pointer-events-auto h-full w-[clamp(340px,58vw,720px)]">
                <TechText text="Nahilist" fontFamily={'"Segoe Script", "Brush Script MT", cursive'} fontWeight={500} fontSize={260} letterSpacing={-0.1} color="#171717" accentColor="#525252" reveal="letter" intro="assemble" introDuration={1.8} clickKick guides={false} style={{}} />
              </div>
            </div>

            <div onPointerEnter={movePortraitReveal} onPointerDown={movePortraitReveal} onPointerMove={movePortraitReveal} className="hero-portrait absolute bottom-0 left-1/2 z-10 h-[62vh] w-[clamp(350px,32vw,448px)] -translate-x-1/2 translate-y-6 select-none">
              <Image src="/pic-remove-background.webp" alt={personal.name} fill priority sizes="448px" className="pointer-events-none object-contain object-bottom grayscale" />
              <Image src="/pic-remove-background.webp" alt="" aria-hidden="true" fill priority sizes="448px" className="portrait-color-layer pointer-events-none object-contain object-bottom" />
            </div>

            <div className="absolute bottom-2 left-0 z-20">
              <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">Software Engineer</h1>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-neutral-500">Building digital products that are fast, reliable, and user-focused.</p>
              <a href="#contact" className="group mt-5 inline-flex items-center gap-3 rounded-full bg-white py-2.5 pl-6 pr-2.5 shadow-[0_10px_28px_-10px_rgba(0,0,0,0.45)] ring-1 ring-black/5"><span className="font-semibold">Let&apos;s collaborate</span><ArrowBubble /></a>
            </div>

            <div className="absolute bottom-2 right-0 z-20 flex flex-col gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="group flex h-10 w-44 items-center justify-between rounded-full bg-white px-4 shadow-[0_8px_22px_rgba(0,0,0,0.12)] ring-1 ring-black/5"><span className="flex items-center gap-2 text-sm font-semibold"><Icon className="size-4" />{label}</span><ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" /></a>)}
            </div>
          </div>

          <div className="flex flex-1 flex-col justify-center md:hidden">
            <div className="h-36 w-full"><TechText text="Nahilist" fontFamily={'"Segoe Script", "Brush Script MT", cursive'} fontWeight={500} fontSize={180} letterSpacing={-0.1} color="#171717" intro="assemble" guides={false} style={{}} /></div>
            <div onPointerDown={movePortraitReveal} onPointerMove={movePortraitReveal} className="hero-portrait relative mx-auto -mt-1 h-60 w-52 select-none">
              <Image src="/pic-remove-background.webp" alt={personal.name} fill priority sizes="208px" className="object-contain object-bottom grayscale" />
              <Image src="/pic-remove-background.webp" alt="" aria-hidden="true" fill sizes="208px" className="portrait-color-layer object-contain object-bottom" />
            </div>
            <div className="mt-2 text-center"><h1 className="text-2xl font-semibold">Software Engineer</h1><p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-neutral-500">Building digital products that are fast, reliable, and user-focused.</p></div>
            <div className="mx-auto mt-8 grid w-full max-w-sm grid-cols-2 gap-2.5"><a href="#contact" className="flex h-10 items-center justify-between rounded-full bg-white px-4 text-sm font-semibold shadow-md ring-1 ring-black/5">Collaborate<ArrowRight className="size-4" /></a>{socialLinks.map(({ label, href, icon: Icon }) => <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="flex h-10 items-center gap-2 rounded-full bg-white px-4 text-sm font-semibold shadow-sm ring-1 ring-black/5"><Icon className="size-4" />{label}</a>)}</div>
          </div>
        </section>

        <section id="work" className="relative px-5 py-16 sm:px-8 sm:py-20 md:px-10 md:py-28">
          <SectionHeading backdrop="Portfolio">Selected Work</SectionHeading>
          <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-2 md:gap-y-16">
            {projects.map((project) => <Link href={`/projects/${project.id}`} key={project.id} className="group block"><div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-100 ring-1 ring-black/5"><Image src={project.image.src} alt={project.image.alt} fill sizes="(min-width: 768px) 45vw, 90vw" className="object-cover transition-transform duration-700 group-hover:scale-105" /><span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide backdrop-blur-sm">{project.category}</span><span className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/10"><span className="flex size-14 scale-50 items-center justify-center rounded-full bg-white opacity-0 shadow-lg transition-all group-hover:scale-100 group-hover:opacity-100"><ArrowUpRight className="size-5" /></span></span></div><h3 className="mt-4 text-lg font-semibold md:text-xl">{project.title}</h3><div className="mt-3 flex flex-wrap gap-2"><span className="rounded-full border border-black/10 px-3 py-1 text-xs text-neutral-600">{project.badge}</span><span className="rounded-full border border-black/10 px-3 py-1 text-xs text-neutral-600">View case study</span></div></Link>)}
          </div>
        </section>

        <section id="skills" className="relative px-5 py-16 sm:px-8 sm:py-20 md:px-10 md:py-28">
          <SectionHeading backdrop="Skills" align="left">Skills</SectionHeading>
          <div className="mt-10 sm:mt-14">{skills.map((skill, index) => { const active = activeSkill === index; return <div key={skill.title} className={`rounded-2xl transition-colors ${active ? "bg-neutral-800 text-white" : "border-b border-black/10"}`}><button type="button" aria-expanded={active} onClick={() => setActiveSkill(active ? -1 : index)} className="flex w-full items-center justify-between gap-4 px-2 py-5 text-left sm:px-6 sm:py-6"><span className="text-2xl font-semibold uppercase tracking-tight sm:text-3xl md:text-4xl">{skill.title}</span><span className={`flex size-9 shrink-0 items-center justify-center rounded-full ${active ? "bg-white text-black" : "text-black"}`}><ChevronDown className={`size-5 transition-transform ${active ? "rotate-180" : ""}`} /></span></button>{active && <div className="px-2 pb-7 sm:px-6 sm:pb-8"><p className="max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">{skill.description}</p><div className="mt-4 flex flex-wrap gap-2">{skill.skills.map((item) => <span key={item} className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/75">{item}</span>)}</div></div>}</div>; })}</div>
        </section>

        <section id="experience" className="relative rounded-b-[1.75rem] bg-neutral-900 px-5 py-16 text-white sm:px-8 sm:py-20 md:rounded-b-[2.25rem] md:px-10 md:py-28">
          <SectionHeading backdrop="Experience" align="left" dark>Experience</SectionHeading>
          <div className="mt-12 space-y-12 sm:mt-16">{experienceEducation.map((item) => <article key={`${item.period}-${item.title}`} className="border-t border-white/10 pt-8 sm:pt-10"><div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between"><div><h3 className="text-2xl font-semibold sm:text-3xl">{item.organization}</h3><p className="mt-1.5 text-sm text-white/50">{item.title}</p></div><span className="text-sm text-white/50">{item.period}</span></div><p className="mt-6 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">{item.description}</p><span className="mt-6 inline-flex rounded-full border border-white/15 px-3 py-1.5 text-xs text-white/70">{item.grade}</span></article>)}</div>
        </section>
      </div>

      <footer id="contact" className="relative">
        <div className="flex flex-col items-center px-6 py-24 text-center sm:py-28 md:py-36">
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 shadow-sm ring-1 ring-black/5"><span className="relative flex size-2.5"><span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-60" /><span className="relative inline-flex size-2.5 rounded-full bg-emerald-500" /></span><span className="text-sm font-medium">Available for New Project</span></div>
          <h2 className="mt-7 text-4xl font-bold uppercase tracking-tight sm:text-5xl md:text-6xl">Have a project in mind?</h2>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-neutral-600 sm:text-base">Together, we can create something clear and impactful. Let&apos;s collaborate to bring your ideas to life — fast, reliable, and built to last.</p>
          <a href={`mailto:${personal.email}`} className="group mt-8 inline-flex items-center gap-3 rounded-full bg-white py-2.5 pl-6 pr-2.5 shadow-md ring-1 ring-black/5"><span className="font-semibold">Contact Me</span><ArrowBubble /></a>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-3"><Link href="/" className="rounded-full bg-neutral-950 px-5 py-3 text-sm font-semibold text-white">{personal.name}</Link>{socialLinks.map(({ label, href, icon: Icon }) => <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-full bg-white px-4 py-3 text-sm font-semibold shadow-sm ring-1 ring-black/5"><Icon className="size-4" />{label}</a>)}</div>
        </div>
      </footer>
    </main>
  );
}
