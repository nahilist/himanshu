"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { BottomTickSlider } from "@/components/BottomTickSlider";
import { ShowreelModal } from "@/components/ShowreelModal";
import { MenuOverlay } from "@/components/MenuOverlay";
import { ContactModal } from "@/components/ContactModal";

import { SlideHero } from "@/components/slides/SlideHero";
import { SlideServicesSphere } from "@/components/slides/SlideServicesSphere";
import { SlideDripHero } from "@/components/slides/SlideDripHero";
import { SlidePlayerPortal } from "@/components/slides/SlidePlayerPortal";
import { SlideProjectsArchive } from "@/components/slides/SlideProjectsArchive";
import { SlideContactSection } from "@/components/slides/SlideContactSection";
import { SlideFooterSection } from "@/components/slides/SlideFooterSection";
import { soundFx } from "@/utils/audio";

export default function PortfolioPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isShowreelOpen, setIsShowreelOpen] = useState(false);
  const [isAudioActive, setIsAudioActive] = useState(false);

  const totalSlides = 7;
  const isScrollingRef = useRef(false);
  const touchStartYRef = useRef<number | null>(null);

  // Slides 4 (Works Archive) and 6 (Grand Finale Footer) are dark theme
  const isDarkSlide = currentSlide === 4 || currentSlide === 6;

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
      if (isMenuOpen || isContactOpen || isShowreelOpen) return;

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
  }, [isMenuOpen, isContactOpen, isShowreelOpen, nextSlide, prevSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isMenuOpen || isContactOpen || isShowreelOpen) return;

      if (e.key === "ArrowDown" || e.key === "ArrowRight" || e.key === "PageDown") {
        nextSlide();
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft" || e.key === "PageUp") {
        prevSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen, isContactOpen, isShowreelOpen, nextSlide, prevSlide]);

  // Touch gesture navigation for mobile / tablet
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      touchStartYRef.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (isMenuOpen || isContactOpen || isShowreelOpen) return;
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
  }, [isMenuOpen, isContactOpen, isShowreelOpen, nextSlide, prevSlide]);

  const toggleAudio = () => {
    const isMuted = soundFx.toggleMute();
    setIsAudioActive(!isMuted);
  };

  const getShowreelDetails = () => {
    switch (currentSlide) {
      case 2:
        return {
          title: "DRIP — Industrial Design Showcase",
          category: "Hardware & E-Commerce",
        };
      case 3:
        return {
          title: "PLAYER PORTAL — Mobile App Experience",
          category: "Sports Tech & Recruitment",
        };
      case 4:
        return {
          title: "Archive Showcase: HorizonX & The Social Elite",
          category: "Selected Works",
        };
      default:
        return {
          title: "MDX Studio Master Showreel 2025",
          category: "Digital Experience",
        };
    }
  };

  const currentShowreel = getShowreelDetails();

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
      {/* 1. Persistent Top Navbar (adaptive theme) */}
      <Navbar
        onOpenMenu={() => setIsMenuOpen(true)}
        onOpenContact={() => changeSlide(5)}
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
            {/* Slide 0: Hero Statement (Image 4 Batch 1) */}
            {currentSlide === 0 && <SlideHero />}

            {/* Slide 1: Services Sphere (Images 1 & 2 Batch 2) */}
            {currentSlide === 1 && <SlideServicesSphere />}

            {/* Slide 2: DRIP Showcase (Images 1, 2, 3 Batch 1) */}
            {currentSlide === 2 && (
              <SlideDripHero onOpenShowreel={() => setIsShowreelOpen(true)} />
            )}

            {/* Slide 3: Player Portal (Image 5 Batch 1) */}
            {currentSlide === 3 && (
              <SlidePlayerPortal onOpenShowreel={() => setIsShowreelOpen(true)} />
            )}

            {/* Slide 4: Projects Archive & Filter Gallery (Images 3, 4, 5 Batch 2 & Image 4 Batch 3) */}
            {currentSlide === 4 && <SlideProjectsArchive />}

            {/* Slide 5: Dedicated Contact Section (Image 1 Batch 3) */}
            {currentSlide === 5 && <SlideContactSection />}

            {/* Slide 6: Grand Finale Footer & Directory (Images 2 & 3 Batch 3) */}
            {currentSlide === 6 && (
              <SlideFooterSection onScrollTop={() => changeSlide(0)} />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 3. Persistent Bottom Tick Slider (adaptive theme) */}
      <BottomTickSlider
        totalSlides={totalSlides}
        currentSlide={currentSlide}
        onSelectSlide={changeSlide}
        theme={isDarkSlide ? "dark" : "light"}
      />

      {/* 4. Interactive Showreel Modal Lightbox */}
      <ShowreelModal
        isOpen={isShowreelOpen}
        onClose={() => setIsShowreelOpen(false)}
        title={currentShowreel.title}
        category={currentShowreel.category}
      />

      {/* 5. Fullscreen Editorial Menu */}
      <MenuOverlay
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onSelectSlide={changeSlide}
        onOpenContact={() => changeSlide(5)}
      />

      {/* 6. "Let's Talk" Contact Modal (Quick fallback) */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </main>
  );
}
