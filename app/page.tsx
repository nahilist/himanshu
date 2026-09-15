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
import { SlideSkills } from "@/components/slides/SlideSkills";
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

  const totalSlides = 7;
  const isScrollingRef = useRef(false);
  const touchStartYRef = useRef<number | null>(null);

  // Slides 3 (Projects Archive) and 6 (Grand Finale Footer) are luxury dark theme
  const isDarkSlide = currentSlide === 3 || currentSlide === 6;

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

  // Wheel listener for smooth slide transitions
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isMenuOpen || isContactOpen || isResumeOpen) return;

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
  }, [isMenuOpen, isContactOpen, isResumeOpen, nextSlide, prevSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isMenuOpen || isContactOpen || isResumeOpen) return;

      if (e.key === "ArrowDown" || e.key === "ArrowRight" || e.key === "PageDown") {
        nextSlide();
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft" || e.key === "PageUp") {
        prevSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen, isContactOpen, isResumeOpen, nextSlide, prevSlide]);

  // Touch gesture navigation for mobile / tablet
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      touchStartYRef.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (isMenuOpen || isContactOpen || isResumeOpen) return;
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
  }, [isMenuOpen, isContactOpen, isResumeOpen, nextSlide, prevSlide]);

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
        onOpenContact={() => changeSlide(5)}
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
            {/* Slide 0: Hero Section (Himanshu Kumar, AI/ML & Frontend, 3 CTAs) */}
            {currentSlide === 0 && (
              <SlideHero
                onViewProjects={() => changeSlide(3)}
                onOpenResume={() => setIsResumeOpen(true)}
                onContactMe={() => changeSlide(5)}
              />
            )}

            {/* Slide 1: About Me & Education (B.Tech AI & ML, CGPA 8.6, Objective) */}
            {currentSlide === 1 && (
              <SlideAbout
                onContactMe={() => changeSlide(5)}
                onViewSkills={() => changeSlide(2)}
              />
            )}

            {/* Slide 2: Specialized Skills Matrix (6 Categories) */}
            {currentSlide === 2 && (
              <SlideSkills onViewProjects={() => changeSlide(3)} />
            )}

            {/* Slide 3: Featured Projects (The 6 Projects with Filters & Modals) */}
            {currentSlide === 3 && <SlideProjectsArchive />}

            {/* Slide 4: Services & Capabilities (3D Sphere & Stats) */}
            {currentSlide === 4 && (
              <SlideServicesSphere onContactMe={() => changeSlide(5)} />
            )}

            {/* Slide 5: Contact Section (Form, Email, Socials, Calendly) */}
            {currentSlide === 5 && <SlideContactSection />}

            {/* Slide 6: Grand Finale Footer (Stats, Directory, Scroll Top) */}
            {currentSlide === 6 && (
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
        onOpenContact={() => changeSlide(5)}
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
