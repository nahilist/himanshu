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
  const touchStartYRef = useRef<number | null>(null);

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

  // Wheel listener for smooth slide transitions
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const target = e.target as HTMLElement | null;
      if (isModalActive(target)) return;

      if (isScrollingRef.current) return;
      if (Math.abs(e.deltaY) < 30) return;

      isScrollingRef.current = true;
      if (e.deltaY > 0) {
        nextSlide();
      } else {
        prevSlide();
      }

      setTimeout(() => {
        isScrollingRef.current = false;
      }, 750);
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [isModalActive, nextSlide, prevSlide]);

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

  // Touch gesture navigation for mobile / tablet
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      touchStartYRef.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const target = e.target as HTMLElement | null;
      if (isModalActive(target)) return;
      if (touchStartYRef.current === null) return;

      const touchEndY = e.changedTouches[0].clientY;
      const diffY = touchStartYRef.current - touchEndY;

      if (Math.abs(diffY) > 50) {
        if (diffY > 0) {
          nextSlide();
        } else {
          prevSlide();
        }
      }
      touchStartYRef.current = null;
    };

    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isModalActive, nextSlide, prevSlide]);

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
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
    exit: (direction: number) => ({
      y: direction > 0 ? "-15%" : "15%",
      opacity: 0,
      scale: 0.98,
      transition: {
        duration: 0.5,
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
            className="absolute inset-0 w-full h-full"
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
