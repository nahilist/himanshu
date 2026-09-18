"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { TopProgressBar } from "@/components/TopProgressBar";
import { MenuOverlay } from "@/components/MenuOverlay";
import { ContactModal } from "@/components/ContactModal";
import { ResumeModal } from "@/components/ResumeModal";

import { SlideHero } from "@/components/slides/SlideHero";
import { SlideAbout } from "@/components/slides/SlideAbout";
import { SlideProjectsArchive } from "@/components/slides/SlideProjectsArchive";
import { SlideServicesSphere } from "@/components/slides/SlideServicesSphere";
import { SlideContactSection } from "@/components/slides/SlideContactSection";
import { SlideFooterSection } from "@/components/slides/SlideFooterSection";
import { soundFx } from "@/utils/audio";

export default function PortfolioPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isAudioActive, setIsAudioActive] = useState(false);

  const totalSlides = 6;
  const isScrollingRef = useRef(false);
  const touchStartXRef = useRef<number | null>(null);
  const touchStartYRef = useRef<number | null>(null);
  const scrollContainerRef = useRef<HTMLElement | null>(null);
  const startScrollTopRef = useRef<number>(0);
  const startCanScrollDownRef = useRef<boolean>(false);
  const startCanScrollUpRef = useRef<boolean>(false);

  // Helper to detect if a target or any of its ancestors has scrollable overflow content
  const getScrollableAncestor = useCallback((element: HTMLElement | null): HTMLElement | null => {
    let curr = element;
    while (curr && curr !== document.body && curr !== document.documentElement) {
      if (curr.scrollHeight > curr.clientHeight + 16) {
        const style = window.getComputedStyle(curr);
        const overflowY = style.overflowY;
        if (overflowY === "auto" || overflowY === "scroll") {
          return curr;
        }
      }
      curr = curr.parentElement;
    }
    return null;
  }, []);

  // Slides 2 (Projects Archive) and 5 (Grand Finale Footer) are luxury dark theme
  const isDarkSlide = currentSlide === 2 || currentSlide === 5;

  const changeSlide = useCallback(
    (newIndex: number) => {
      if (newIndex < 0 || newIndex >= totalSlides) return;
      setDirection(newIndex > currentSlide ? 1 : -1);
      setCurrentSlide(newIndex);
      soundFx.playSlideTransition();
    },
    [currentSlide, totalSlides]
  );

  const nextSlide = useCallback(() => {
    if (currentSlide < totalSlides - 1) {
      changeSlide(currentSlide + 1);
    }
  }, [currentSlide, totalSlides, changeSlide]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      changeSlide(currentSlide - 1);
    }
  }, [currentSlide, changeSlide]);

  // Check if any modal or scrollable overlay is currently open
  const isModalActive = useCallback((target?: HTMLElement | null) => {
    if (isMenuOpen || isContactOpen || isResumeOpen) return true;
    if (typeof document !== "undefined") {
      if (document.body.getAttribute("data-modal-open") === "true") return true;
      if (target?.closest("[data-modal='true'], [role='dialog']")) return true;
      if (document.querySelector("[data-modal='true'], [role='dialog']")) return true;
    }
    return false;
  }, [isMenuOpen, isContactOpen, isResumeOpen]);

  // Lock window scroll on homepage slide deck
  useEffect(() => {
    const prevHtmlOverflow = document.documentElement.style.overflow;
    const prevBodyOverflow = document.body.style.overflow;
    const prevBodyHeight = document.body.style.height;

    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    document.body.style.height = "100%";

    return () => {
      document.documentElement.style.overflow = prevHtmlOverflow;
      document.body.style.overflow = prevBodyOverflow;
      document.body.style.height = prevBodyHeight;
    };
  }, []);

  // Wheel listener for smooth slide transitions (respects internal slide scrolling)
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const target = e.target as HTMLElement | null;
      if (isModalActive(target)) return;

      if (isScrollingRef.current) return;
      if (Math.abs(e.deltaY) < 25) return;

      const scrollable = getScrollableAncestor(target);
      if (scrollable) {
        const maxScroll = scrollable.scrollHeight - scrollable.clientHeight;
        if (e.deltaY > 0) {
          // User scrolling down - allow natural scrolling if not at bottom edge
          const canScrollDown = scrollable.scrollTop < maxScroll - 8;
          if (canScrollDown) return;
        } else {
          // User scrolling up - allow natural scrolling if not at top edge
          const canScrollUp = scrollable.scrollTop > 8;
          if (canScrollUp) return;
        }
      }

      isScrollingRef.current = true;
      if (e.deltaY > 0) {
        nextSlide();
      } else {
        prevSlide();
      }

      setTimeout(() => {
        isScrollingRef.current = false;
      }, 500);
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [isModalActive, nextSlide, prevSlide, getScrollableAncestor]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isModalActive()) return;

      if (e.key === "ArrowDown" || e.key === "ArrowRight" || e.key === "PageDown") {
        nextSlide();
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft" || e.key === "PageUp") {
        prevSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalActive, nextSlide, prevSlide]);

  // Touch gesture navigation for mobile / tablet (allows smooth internal scrolling of long slides)
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length !== 1) return;
      const touch = e.touches[0];
      touchStartXRef.current = touch.clientX;
      touchStartYRef.current = touch.clientY;

      const target = e.target as HTMLElement | null;
      const scrollable = getScrollableAncestor(target);
      scrollContainerRef.current = scrollable;

      if (scrollable) {
        startScrollTopRef.current = scrollable.scrollTop;
        const maxScroll = scrollable.scrollHeight - scrollable.clientHeight;
        startCanScrollDownRef.current = scrollable.scrollTop < maxScroll - 8;
        startCanScrollUpRef.current = scrollable.scrollTop > 8;
      } else {
        startCanScrollDownRef.current = false;
        startCanScrollUpRef.current = false;
      }
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const target = e.target as HTMLElement | null;
      if (isModalActive(target)) return;
      if (touchStartYRef.current === null || touchStartXRef.current === null) return;

      const touch = e.changedTouches[0];
      const diffX = touchStartXRef.current - touch.clientX;
      const diffY = touchStartYRef.current - touch.clientY;

      const scrollContainer = scrollContainerRef.current;
      const canScrollDownAtStart = startCanScrollDownRef.current;
      const canScrollUpAtStart = startCanScrollUpRef.current;
      const startScrollTop = startScrollTopRef.current;

      touchStartXRef.current = null;
      touchStartYRef.current = null;
      scrollContainerRef.current = null;

      // Ignore horizontal swipes (allow horizontal interaction or accidental sideways gestures)
      if (Math.abs(diffX) > Math.abs(diffY)) return;

      // Minimum vertical distance required to trigger a slide transition
      if (Math.abs(diffY) < 55) return;

      if (scrollContainer) {
        const currentScrollTop = scrollContainer.scrollTop;
        const maxScroll = scrollContainer.scrollHeight - scrollContainer.clientHeight;
        const hasMeaningfulOverflow = maxScroll > 16;

        if (hasMeaningfulOverflow) {
          if (diffY > 0) {
            // User swiped UP (intended to scroll DOWN)
            // If container could scroll down at start or actually scrolled during gesture, do NOT transition!
            if (canScrollDownAtStart || currentScrollTop > startScrollTop + 4) {
              return;
            }
            // Only trigger next slide if we are already at the bottom boundary
            if (currentScrollTop < maxScroll - 8) {
              return;
            }
          } else {
            // User swiped DOWN (intended to scroll UP)
            // If container could scroll up at start or actually scrolled during gesture, do NOT transition!
            if (canScrollUpAtStart || currentScrollTop < startScrollTop - 4) {
              return;
            }
            // Only trigger prev slide if we are already at the top boundary
            if (currentScrollTop > 8) {
              return;
            }
          }
        }
      }

      if (diffY > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    };

    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isModalActive, nextSlide, prevSlide, getScrollableAncestor]);

  const toggleAudio = () => {
    const isMuted = soundFx.toggleMute();
    setIsAudioActive(!isMuted);
  };

  // Slide animation variants
  const slideVariants = {
    enter: (direction: number) => ({
      y: direction > 0 ? "15%" : "-15%",
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      y: "0%",
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.45,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
    exit: (direction: number) => ({
      y: direction > 0 ? "-15%" : "15%",
      opacity: 0,
      scale: 0.98,
      transition: {
        duration: 0.35,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    }),
  };

  return (
    <main
      className={`relative w-screen h-screen overflow-hidden font-sans transition-colors duration-500 ${
        isDarkSlide ? "bg-black text-white" : "bg-white text-neutral-900"
      }`}
    >
      {/* Sleek Top Edge Scroll Progress Line */}
      <TopProgressBar
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        isDark={isDarkSlide}
      />

      {/* 1. Persistent Top Navbar */}
      <Navbar
        onOpenMenu={() => setIsMenuOpen(true)}
        onOpenContact={() => changeSlide(4)}
        onOpenResume={() => setIsResumeOpen(true)}
        isMenuOpen={isMenuOpen}
        isAudioActive={isAudioActive}
        onToggleAudio={toggleAudio}
        theme={isDarkSlide ? "dark" : "light"}
      />

      {/* 2. Fullscreen Animated Slide Engine */}
      <div className="relative w-full h-full">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 w-full h-full will-change-transform transform-gpu"
          >
            {/* Slide 0: Hero Section */}
            {currentSlide === 0 && (
              <SlideHero
                onViewProjects={() => changeSlide(2)}
                onOpenResume={() => setIsResumeOpen(true)}
                onContactMe={() => changeSlide(4)}
              />
            )}

            {/* Slide 1: About Me & Philosophy */}
            {currentSlide === 1 && (
              <SlideAbout
                onContactMe={() => changeSlide(4)}
                onViewProjects={() => changeSlide(2)}
              />
            )}

            {/* Slide 2: Featured Projects (Archive with Filters & Modals) */}
            {currentSlide === 2 && <SlideProjectsArchive />}

            {/* Slide 3: Services & Capabilities (3D Sphere & Stats) */}
            {currentSlide === 3 && (
              <SlideServicesSphere onContactMe={() => changeSlide(4)} />
            )}

            {/* Slide 4: Contact Section (Form, Email, Socials, Calendly) */}
            {currentSlide === 4 && <SlideContactSection />}

            {/* Slide 5: Grand Finale Footer (Stats, Directory, Scroll Top) */}
            {currentSlide === 5 && (
              <SlideFooterSection
                onScrollTop={() => changeSlide(0)}
                onOpenResume={() => setIsResumeOpen(true)}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 3. Fullscreen Editorial Menu */}
      <MenuOverlay
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onSelectSlide={changeSlide}
        onOpenContact={() => changeSlide(4)}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* 5. Resume Hub Lightbox Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* 6. Quick Contact Modal (Fallback) */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </main>
  );
}
