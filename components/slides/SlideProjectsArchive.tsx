"use client";

import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  House,
  Mail,
  Sparkles,
  X,
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { categoryTags, projectMockups } from "@/components/ProjectMockups";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { soundFx } from "@/utils/audio";

const filters = ["ALL", "AI/ML & GenAI", "FRONTEND", "FULL STACK"] as const;

interface SlideProjectsArchiveProps {
  onNavigate?: (index: number) => void;
}

const getProjectHost = (url: string) => {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "Live project";
  }
};

export const SlideProjectsArchive: React.FC<SlideProjectsArchiveProps> = ({
  onNavigate,
}) => {
  const projects = PORTFOLIO_DATA.projects;
  const projectPairs = [
    [projects[0], projects[5]],
    [projects[6], projects[1]],
    [projects[2], projects[3]],
    [projects[4]],
  ];

  const [currentPairIndex, setCurrentPairIndex] = useState(0);
  const [isArchiveOpen, setIsArchiveOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState<string>("ALL");
  const touchStartXRef = useRef<number | null>(null);
  const touchStartYRef = useRef<number | null>(null);
  const mobileNavItems = [
    { label: "Home", icon: House, slide: 0 },
    { label: "Work", icon: BriefcaseBusiness, slide: 2 },
    { label: "Skills", icon: Sparkles, slide: 3 },
    { label: "Story", icon: BookOpen, slide: 1 },
    { label: "Contact", icon: Mail, slide: 4 },
  ];

  useEffect(() => {
    if (!isArchiveOpen) return;

    document.body.setAttribute("data-modal-open", "true");
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsArchiveOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.removeAttribute("data-modal-open");
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isArchiveOpen]);

  const currentPair = projectPairs[currentPairIndex] || projectPairs[0];
  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "ALL") return true;
    if (activeFilter === "FRONTEND") return project.category === "Frontend";
    if (activeFilter === "FULL STACK") return project.category === "Full Stack";
    return project.category === activeFilter;
  });

  const showPair = (direction: number) => {
    soundFx.playTick();
    setCurrentPairIndex(
      (currentPairIndex + direction + projectPairs.length) % projectPairs.length,
    );
  };

  const handleCardTouchStart = (event: React.TouchEvent) => {
    touchStartXRef.current = event.touches[0].clientX;
    touchStartYRef.current = event.touches[0].clientY;
  };

  const handleCardTouchEnd = (event: React.TouchEvent) => {
    if (touchStartXRef.current === null || touchStartYRef.current === null) return;

    const differenceX = touchStartXRef.current - event.changedTouches[0].clientX;
    const differenceY = touchStartYRef.current - event.changedTouches[0].clientY;
    touchStartXRef.current = null;
    touchStartYRef.current = null;

    if (Math.abs(differenceX) > Math.abs(differenceY) && Math.abs(differenceX) > 45) {
      showPair(differenceX > 0 ? 1 : -1);
    }
  };

  const openArchive = () => {
    soundFx.playTick();
    setIsArchiveOpen(true);
  };

  return (
    <section className="portfolio-slide-card relative h-full min-h-0 w-full overflow-y-auto overscroll-contain bg-[#fdfdfc] text-neutral-950">
      <div className="relative z-10 mx-auto flex min-h-full w-full max-w-[1800px] flex-col px-4 pb-28 pt-6 sm:px-6 sm:pb-12 sm:pt-28 md:px-6 md:pt-20 lg:px-8">
        <header className="relative flex min-h-[72px] shrink-0 items-start justify-center sm:min-h-[142px] md:min-h-[115px]">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-[-0.25rem] -translate-x-1/2 whitespace-nowrap text-[clamp(3.8rem,14vw,13rem)] font-black uppercase leading-none tracking-[-0.09em] text-neutral-950/[0.035] sm:top-[-1.1rem]"
          >
            Portfolio
          </span>
          <div className="relative z-10 flex flex-col items-center pt-1 sm:pt-4">
            <p className="mb-2 hidden font-mono text-[9px] font-semibold uppercase tracking-[0.28em] text-neutral-400 sm:block sm:text-[10px]">
              Projects / 2023—2026
            </p>
            <h2 className="text-[clamp(1.75rem,4.3vw,4.8rem)] font-black uppercase leading-none tracking-[-0.055em]">
              /Selected Work
            </h2>
          </div>
        </header>

        <div className="mb-5 flex shrink-0 items-end justify-between sm:mb-7">
          <button
            type="button"
            onClick={openArchive}
            className="group relative pb-2 text-xs font-medium text-neutral-800 sm:text-sm"
          >
            Real Product
            <span className="absolute inset-x-0 bottom-0 h-px origin-left bg-neutral-950 transition-transform duration-300 group-hover:scale-x-75" />
          </button>

          <div className="hidden items-center gap-2.5 text-neutral-500 md:flex md:gap-3">
            <span className="mr-1 font-mono text-[9px] tracking-[0.18em] sm:text-[10px]">
              0{currentPairIndex + 1} / 0{projectPairs.length}
            </span>
            <button
              type="button"
              onClick={() => showPair(-1)}
              className="flex size-8 items-center justify-center rounded-full border border-neutral-300 transition-colors hover:border-neutral-950 hover:text-neutral-950 sm:size-9"
              aria-label="Previous projects"
            >
              <ChevronLeft className="size-3.5" />
            </button>
            <button
              type="button"
              onClick={() => showPair(1)}
              className="flex size-8 items-center justify-center rounded-full border border-neutral-300 transition-colors hover:border-neutral-950 hover:text-neutral-950 sm:size-9"
              aria-label="Next projects"
            >
              <ChevronRight className="size-3.5" />
            </button>
          </div>
        </div>

        <div
          onTouchStart={handleCardTouchStart}
          onTouchEnd={handleCardTouchEnd}
          className="relative z-10 w-full flex-1"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPairIndex}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
              className={`grid h-full grid-cols-1 items-start gap-8 sm:gap-10 md:grid-cols-2 md:gap-5 lg:gap-6 ${
                currentPair.length === 1 ? "md:mx-auto md:max-w-[calc(50%-0.625rem)] md:grid-cols-1" : ""
              }`}
            >
              {currentPair.map((project) => {
                const category = categoryTags[project.id] || "DESIGN / DEVELOPMENT";

                return (
                  <article
                    key={project.id}
                    className="group min-w-0"
                  >
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => soundFx.playTick()}
                      aria-label={`Open ${project.title}`}
                      className="relative block aspect-[4/3] overflow-hidden rounded-[14px] bg-neutral-100 shadow-[0_8px_30px_rgba(0,0,0,0.07)] ring-1 ring-black/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 sm:rounded-[18px] md:aspect-auto md:h-[clamp(500px,68vh,650px)]"
                    >
                      <div className="absolute inset-0 scale-100 transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.015]">
                        {projectMockups[project.id]}
                      </div>
                      <span className="absolute left-1/2 top-1/2 flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-neutral-950 opacity-0 shadow-[0_12px_35px_rgba(0,0,0,0.18)] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110 group-hover:opacity-100 sm:size-16">
                        <ArrowUpRight className="size-5 sm:size-6" />
                      </span>
                    </a>

                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => soundFx.playTick()}
                      className="mt-3 block focus-visible:outline-none sm:mt-4"
                    >
                      <h3 className="truncate text-[17px] font-semibold tracking-[-0.035em] text-neutral-900 transition-colors group-hover:text-neutral-600 sm:text-xl lg:text-2xl">
                        {project.title}
                      </h3>
                    </a>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <span className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-[9px] text-neutral-500 sm:text-[10px]">
                        {category}
                      </span>
                      <span className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-[9px] text-neutral-500 sm:text-[10px]">
                        {getProjectHost(project.liveUrl)}
                      </span>
                    </div>
                  </article>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          type="button"
          onClick={openArchive}
          className="group mx-auto mt-8 hidden shrink-0 items-center gap-3 rounded-full border border-neutral-300 bg-white py-2 pl-5 pr-2 shadow-sm transition-all hover:border-neutral-950 hover:shadow-md md:inline-flex"
        >
          <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.18em] sm:text-[10px]">
            View all projects
          </span>
          <span className="flex size-7 items-center justify-center rounded-full bg-neutral-950 text-white transition-transform group-hover:rotate-45">
            <ArrowUpRight className="size-3.5" />
          </span>
        </button>
      </div>

      <nav
        aria-label="Portfolio sections"
        className="mobile-safe-bottom fixed left-1/2 z-40 flex h-14 w-[88%] max-w-[20rem] -translate-x-1/2 items-center justify-around rounded-full bg-white px-2 shadow-[0_8px_30px_rgba(0,0,0,0.14)] md:hidden"
      >
        {mobileNavItems.map(({ label, icon: Icon, slide }) => {
          const isActive = slide === 2;

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

      <AnimatePresence>
        {isArchiveOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            data-modal="true"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-archive-title"
            onWheelCapture={(event) => event.stopPropagation()}
            onTouchStartCapture={(event) => event.stopPropagation()}
            onTouchEndCapture={(event) => event.stopPropagation()}
            className="fixed inset-0 z-50 overflow-y-auto bg-neutral-950/35 p-2 backdrop-blur-xl sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.98, opacity: 0, y: 18 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.98, opacity: 0, y: 18 }}
              transition={{ type: "spring", stiffness: 320, damping: 28 }}
              className="mx-auto flex min-h-[calc(100dvh-1rem)] w-full max-w-7xl flex-col rounded-3xl bg-[#f8f8f6] p-4 text-neutral-950 shadow-2xl sm:min-h-[calc(100dvh-3rem)] sm:p-8 md:p-10"
            >
              <div className="flex items-start justify-between gap-5 border-b border-neutral-200 pb-5">
                <div>
                  <p className="mb-2 font-mono text-[9px] font-semibold uppercase tracking-[0.22em] text-neutral-500">
                    Complete project archive
                  </p>
                  <h3 id="project-archive-title" className="text-3xl font-black tracking-[-0.05em] sm:text-5xl">
                    All selected work
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setIsArchiveOpen(false)}
                  className="flex size-10 shrink-0 items-center justify-center rounded-full border border-neutral-300 bg-white transition-colors hover:border-neutral-950"
                  aria-label="Close project archive"
                >
                  <X className="size-4" />
                </button>
              </div>

              <div className="my-5 flex flex-wrap gap-2">
                {filters.map((filter) => (
                  <button
                    type="button"
                    key={filter}
                    onClick={() => {
                      soundFx.playTick();
                      setActiveFilter(filter);
                    }}
                    className={`rounded-full border px-4 py-2 font-mono text-[9px] font-semibold tracking-[0.12em] transition-colors ${
                      activeFilter === filter
                        ? "border-neutral-950 bg-neutral-950 text-white"
                        : "border-neutral-300 bg-white text-neutral-600 hover:border-neutral-950 hover:text-neutral-950"
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 gap-8 pb-4 md:grid-cols-2">
                {filteredProjects.map((project) => (
                  <article key={project.id} className="group">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => soundFx.playTick()}
                      className="relative block aspect-[16/10] overflow-hidden rounded-2xl bg-neutral-900 shadow-lg"
                    >
                      <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                        {projectMockups[project.id]}
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
                      <span className="absolute bottom-4 right-4 flex size-10 items-center justify-center rounded-full bg-white text-black transition-transform group-hover:rotate-45">
                        <ArrowUpRight className="size-4" />
                      </span>
                    </a>
                    <p className="mt-4 font-mono text-[9px] uppercase tracking-[0.14em] text-neutral-500">
                      {categoryTags[project.id]}
                    </p>
                    <div className="mt-1 flex items-center justify-between gap-4">
                      <h4 className="text-xl font-bold tracking-[-0.035em] sm:text-2xl">{project.title}</h4>
                      <div className="flex shrink-0 items-center gap-3 text-neutral-500">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition-colors hover:text-neutral-950"
                          aria-label={`${project.title} source code`}
                        >
                          <GithubIcon className="size-4" />
                        </a>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition-colors hover:text-neutral-950"
                          aria-label={`Open ${project.title}`}
                        >
                          <ExternalLink className="size-4" />
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
