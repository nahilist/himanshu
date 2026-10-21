"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import dynamic from "next/dynamic";
import { Navbar } from "@/components/Navbar";
import { TopProgressBar } from "@/components/TopProgressBar";
import { SlideHero } from "@/components/slides/SlideHero";
import { soundFx } from "@/utils/audio";

const MenuOverlay = dynamic(() =>
  import("@/components/MenuOverlay").then((module) => module.MenuOverlay)
);
const SlideAbout = dynamic(() =>
  import("@/components/slides/SlideAbout").then((module) => module.SlideAbout)
);
const SlideProjectsArchive = dynamic(() =>
  import("@/components/slides/SlideProjectsArchive").then(
    (module) => module.SlideProjectsArchive
  )
);
const SlideServicesSphere = dynamic(() =>
  import("@/components/slides/SlideServicesSphere").then(
    (module) => module.SlideServicesSphere
  )
);
const SlideContactSection = dynamic(() =>
  import("@/components/slides/SlideContactSection").then(
    (module) => module.SlideContactSection
  )
);
const SlideFooterSection = dynamic(() =>
  import("@/components/slides/SlideFooterSection").then(
    (module) => module.SlideFooterSection
  )
);

export default function PortfolioPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasOpenedMenu, setHasOpenedMenu] = useState(false);
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

  // The portfolio uses one consistent light theme across every slide.
  const isDarkSlide = false;

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
    if (isMenuOpen) return true;
    if (typeof document !== "undefined") {
      if (document.body.getAttribute("data-modal-open") === "true") return true;
      if (target?.closest("[data-modal='true'], [role='dialog']")) return true;
      if (document.querySelector("[data-modal='true'], [role='dialog']")) return true;
    }
    return false;
  }, [isMenuOpen]);

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

  const openMenu = () => {
    setHasOpenedMenu(true);
    setIsMenuOpen(true);
  };

  return (
    <main
      className={`portfolio-viewport relative w-screen overflow-hidden font-sans transition-colors duration-500 ${
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
      {currentSlide !== 0 && (
        <Navbar
          onOpenMenu={openMenu}
          onNavigate={changeSlide}
          currentSlide={currentSlide}
          isAudioActive={isAudioActive}
          onToggleAudio={toggleAudio}
          theme={isDarkSlide ? "dark" : "light"}
          hideOnMobile={currentSlide === 2 || currentSlide === 5}
        />
      )}

      {/* 2. Fullscreen Animated Slide Engine */}
      <div className="relative w-full h-full">
        <div
          key={currentSlide}
          className={`portfolio-slide-frame portfolio-slide-enter absolute inset-0 h-full w-full will-change-transform ${
            direction > 0 ? "slide-from-bottom" : "slide-from-top"
          }`}
        >
            {/* Slide 0: Hero Section */}
            {currentSlide === 0 && (
              <SlideHero
                onContactMe={() => changeSlide(4)}
                onOpenMenu={openMenu}
                onNavigate={changeSlide}
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
            {currentSlide === 2 && (
              <SlideProjectsArchive onNavigate={changeSlide} />
            )}

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
                onContactMe={() => changeSlide(4)}
                onNavigate={changeSlide}
              />
            )}
        </div>
      </div>

      {/* 3. Fullscreen Editorial Menu */}
      {hasOpenedMenu && (
        <MenuOverlay
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
          onSelectSlide={changeSlide}
          onOpenContact={() => changeSlide(4)}
        />
      )}
    </main>
  );
}
