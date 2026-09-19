"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, BookOpen, Library } from "lucide-react";
import { ArchivalBook } from "@/app/api/activity/books/route";
import { soundFx } from "@/utils/audio";

interface ArchivalBookShelfProps {
  author: string;
  language?: "en" | "hi";
}

export const ArchivalBookShelf: React.FC<ArchivalBookShelfProps> = ({
  author,
  language = "en",
}) => {
  const [books, setBooks] = useState<ArchivalBook[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  useEffect(() => {
    let isMounted = true;

    const loadBooks = async () => {
      try {
        const res = await fetch(`/api/activity/books?author=${encodeURIComponent(author)}&limit=8`);
        const data = await res.json();
        if (isMounted) {
          setBooks(Array.isArray(data?.books) ? data.books : []);
        }
      } catch (err) {
        console.warn("[ArchivalBookShelf] Fetch failed:", err);
        if (isMounted) {
          setBooks([]);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadBooks();

    return () => {
      isMounted = false;
    };
  }, [author]);

  if (!loading && books.length === 0) {
    return null;
  }

  return (
    <section className="my-16 sm:my-28 pt-14 sm:pt-20 border-t border-white/[0.08] relative">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-96 h-32 bg-white/[0.015] blur-3xl pointer-events-none rounded-full" />

      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 sm:mb-14">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-white/15 bg-white/[0.02] text-[10px] font-mono tracking-[0.25em] uppercase text-neutral-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-pulse" />
            <span>
              {language === "hi"
                ? "लाइव अभिलेखागार • ओपन लाइब्रेरी आर्काइव"
                : "DIGITIZED ARCHIVE • OPEN LIBRARY REPOSITORY"}
            </span>
          </div>

          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-white tracking-tight leading-[1.1]">
            {language === "hi" ? (
              <>
                ग्रंथ सूची एवं <span className="italic font-normal text-neutral-300">प्रकाशित कृतियाँ</span>
              </>
            ) : (
              <>
                Historical Bibliography &amp; <span className="italic font-normal text-neutral-300">Recorded Works</span>
              </>
            )}
          </h3>

          <p className="text-xs sm:text-sm font-serif italic text-neutral-400 max-w-2xl leading-relaxed">
            {language === "hi"
              ? "ओपन बिब्लियोग्राफिकल रिकॉर्ड्स से स्वतः संकलित मुख्य पुस्तकें, पांडुलिपियाँ एवं ऐतिहासिक संस्करण।"
              : "Live catalogue of published treatises, discourses, and authorized editions sourced dynamically from global open archives."}
          </p>
        </div>

        {/* Right Status Badge */}
        <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-2xl border border-white/10 bg-neutral-950/80 backdrop-blur-md text-[11px] font-mono text-neutral-400 self-start sm:self-end shadow-sm">
          <Library className="w-3.5 h-3.5 text-neutral-300" />
          <span>{books.length > 0 ? `${books.length} VOLUMES RECORDED` : "LOCATING VOLUMES..."}</span>
        </div>
      </div>

      {/* Loading Skeleton */}
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="rounded-3xl border border-white/[0.06] bg-[#0c0c0f] p-5 space-y-4 animate-pulse"
            >
              <div className="w-full aspect-[2/3] rounded-2xl bg-white/[0.04]" />
              <div className="h-4 bg-white/[0.06] rounded-md w-3/4" />
              <div className="h-3 bg-white/[0.03] rounded-md w-1/2" />
            </div>
          ))}
        </div>
      ) : (
        /* Books Shelf Grid */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {books.map((book, idx) => {
            const hasCover = Boolean(book.coverUrl && !imageErrors[book.id]);

            return (
              <a
                key={book.id}
                href={book.openLibraryUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playTick()}
                className="group relative rounded-3xl bg-gradient-to-b from-[#111116] via-[#0a0a0d] to-[#060608] border border-white/[0.09] hover:border-white/30 p-5 sm:p-6 transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.7)] hover:shadow-[0_25px_60px_-10px_rgba(255,255,255,0.08),0_15px_30px_rgba(0,0,0,0.9)] hover:-translate-y-1.5 cursor-pointer before:absolute before:inset-x-0 before:top-0 before:h-[1px] before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-500"
              >
                <div className="space-y-4">
                  {/* Physical Volume Presentation Container */}
                  <div className="relative p-1.5 rounded-2xl bg-[#16161b] border border-white/10 shadow-[inset_0_1px_2px_rgba(255,255,255,0.15),0_12px_24px_rgba(0,0,0,0.8)] overflow-hidden">
                    {/* Book Spine Shadow Indicator on Left */}
                    <div className="absolute left-1.5 top-1.5 bottom-1.5 w-3 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-20 pointer-events-none rounded-l-xl" />

                    <div className="relative w-full aspect-[2/3] rounded-xl overflow-hidden bg-[#0a0a0d] flex items-center justify-center">
                      {hasCover ? (
                        <>
                          <Image
                            src={book.coverUrl!}
                            alt={book.title}
                            fill
                            sizes="(max-width: 640px) 280px, (max-width: 1024px) 240px, 280px"
                            className="object-cover grayscale contrast-[1.1] brightness-95 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                            onError={() =>
                              setImageErrors((prev) => ({ ...prev, [book.id]: true }))
                            }
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                        </>
                      ) : (
                        /* Archival Leather-Bound Monograph Typographic Cover */
                        <div className="p-5 text-center flex flex-col items-center justify-between h-full w-full bg-[radial-gradient(ellipse_at_top,#1f1f26_0%,#09090c_100%)] border border-white/[0.08]">
                          {/* Top Folio Number */}
                          <div className="flex items-center justify-between w-full text-[9px] font-mono tracking-widest text-neutral-400 uppercase">
                            <span>FOLIO {idx + 1}</span>
                            <span>{book.firstPublishYear || "EDITION"}</span>
                          </div>

                          {/* Center Ornament & Title */}
                          <div className="space-y-2.5 my-auto max-w-[90%]">
                            <div className="w-8 h-8 rounded-full border border-white/15 bg-white/[0.03] flex items-center justify-center mx-auto text-neutral-400 group-hover:text-white transition-colors">
                              <BookOpen className="w-4 h-4 stroke-[1.2]" />
                            </div>
                            <h5 className="text-sm font-serif italic text-white font-light line-clamp-3 leading-snug">
                              {book.title}
                            </h5>
                          </div>

                          {/* Bottom Archival Seal */}
                          <div className="text-[9px] font-mono tracking-widest text-neutral-500 uppercase border-t border-white/10 pt-2 w-full">
                            COLLECTOR&apos;S RECORD
                          </div>
                        </div>
                      )}

                      {/* Floating Publication Year Pill */}
                      {book.firstPublishYear && (
                        <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-[10px] font-mono text-neutral-300 shadow-md">
                          {book.firstPublishYear}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Volume Metadata */}
                  <div className="space-y-1.5 pt-1">
                    <div className="flex items-center gap-2 text-[10px] font-mono text-neutral-500 uppercase tracking-wider">
                      <span>VOL. 0{idx + 1}</span>
                      {book.editionCount && (
                        <>
                          <span>•</span>
                          <span>
                            {book.editionCount} {book.editionCount === 1 ? "EDITION" : "EDITIONS"}
                          </span>
                        </>
                      )}
                    </div>

                    <h4 className="text-base sm:text-lg font-serif font-light text-white group-hover:text-neutral-100 transition-colors line-clamp-2 leading-snug tracking-tight">
                      {book.title}
                    </h4>
                  </div>
                </div>

                {/* Card Action Link Bar */}
                <div className="mt-5 pt-3.5 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-neutral-400 group-hover:text-white transition-colors">
                  <span className="tracking-wider">
                    {language === "hi" ? "अभिलेख खोलें" : "Open In Archive"}
                  </span>
                  <div className="w-6 h-6 rounded-full bg-white/[0.04] group-hover:bg-white group-hover:text-black border border-white/15 flex items-center justify-center transition-all duration-300">
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      )}
    </section>
  );
};
