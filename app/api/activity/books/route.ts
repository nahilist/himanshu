import { NextRequest, NextResponse } from "next/server";

export interface ArchivalBook {
  id: string;
  title: string;
  firstPublishYear?: number;
  coverUrl?: string;
  openLibraryUrl: string;
  editionCount?: number;
}

// Map activity item author strings to clean query terms for Open Library
const AUTHOR_SEARCH_MAP: Record<string, string> = {
  "j. krishnamurti": "Jiddu Krishnamurti",
  "jk-krishnamurti": "Jiddu Krishnamurti",
  "u.g. krishnamurti": "U.G. Krishnamurti",
  "charvaka": "Charvaka Lokayata",
  "bhagat singh": "Bhagat Singh",
  "gautama buddha": "Gautama Buddha",
  "nagarjuna": "Nagarjuna",
  "mirza ghalib": "Mirza Ghalib",
  "rumi": "Rumi",
  "jalal al-din rumi": "Rumi",
  "jaun elia": "Jaun Elia",
  "allama iqbal": "Muhammad Iqbal",
  "charles baudelaire": "Charles Baudelaire",
  "franz kafka": "Franz Kafka",
  "jorge luis borges": "Jorge Luis Borges",
  "fyodor dostoevsky": "Fyodor Dostoevsky",
  "saadat hasan manto": "Saadat Hasan Manto",
  "munshi premchand": "Premchand",
  "premchand": "Premchand",
};

// Curated high-fidelity fallback books for instant reliability
const CURATED_FALLBACKS: Record<string, ArchivalBook[]> = {
  "jiddu krishnamurti": [
    {
      id: "OL587969W",
      title: "Freedom from the Known",
      firstPublishYear: 1969,
      coverUrl: "https://covers.openlibrary.org/b/id/10715430-L.jpg",
      openLibraryUrl: "https://openlibrary.org/works/OL587969W",
      editionCount: 12,
    },
    {
      id: "OL587968W",
      title: "The First and Last Freedom",
      firstPublishYear: 1954,
      coverUrl: "https://covers.openlibrary.org/b/id/32263-L.jpg",
      openLibraryUrl: "https://openlibrary.org/works/OL587968W",
      editionCount: 9,
    },
    {
      id: "OL15825727W",
      title: "Commentaries on Living",
      firstPublishYear: 1956,
      coverUrl: "https://covers.openlibrary.org/b/id/6790359-L.jpg",
      openLibraryUrl: "https://openlibrary.org/works/OL15825727W",
      editionCount: 26,
    },
    {
      id: "OL587961W",
      title: "The Awakening of Intelligence",
      firstPublishYear: 1973,
      coverUrl: "https://covers.openlibrary.org/b/id/32265-L.jpg",
      openLibraryUrl: "https://openlibrary.org/works/OL587961W",
      editionCount: 8,
    },
    {
      id: "OL275357W",
      title: "Think on These Things",
      firstPublishYear: 1964,
      coverUrl: "https://covers.openlibrary.org/b/id/39844-L.jpg",
      openLibraryUrl: "https://openlibrary.org/works/OL275357W",
      editionCount: 6,
    },
    {
      id: "OL22540548W",
      title: "What Are You Doing with Your Life?",
      firstPublishYear: 2018,
      coverUrl: "https://covers.openlibrary.org/b/id/13229327-L.jpg",
      openLibraryUrl: "https://openlibrary.org/works/OL22540548W",
      editionCount: 4,
    },
  ],
  "franz kafka": [
    {
      id: "OL27515W",
      title: "The Trial (Der Process)",
      firstPublishYear: 1925,
      coverUrl: "https://covers.openlibrary.org/b/id/8235109-L.jpg",
      openLibraryUrl: "https://openlibrary.org/works/OL27515W",
      editionCount: 45,
    },
    {
      id: "OL27518W",
      title: "The Metamorphosis (Die Verwandlung)",
      firstPublishYear: 1915,
      coverUrl: "https://covers.openlibrary.org/b/id/8315183-L.jpg",
      openLibraryUrl: "https://openlibrary.org/works/OL27518W",
      editionCount: 50,
    },
    {
      id: "OL27516W",
      title: "The Castle (Das Schloss)",
      firstPublishYear: 1926,
      coverUrl: "https://covers.openlibrary.org/b/id/8235115-L.jpg",
      openLibraryUrl: "https://openlibrary.org/works/OL27516W",
      editionCount: 30,
    },
  ],
  "jorge luis borges": [
    {
      id: "OL17366367W",
      title: "Ficciones",
      firstPublishYear: 1944,
      coverUrl: "https://covers.openlibrary.org/b/id/8227658-L.jpg",
      openLibraryUrl: "https://openlibrary.org/works/OL17366367W",
      editionCount: 35,
    },
    {
      id: "OL17366359W",
      title: "The Aleph and Other Stories",
      firstPublishYear: 1949,
      coverUrl: "https://covers.openlibrary.org/b/id/8227656-L.jpg",
      openLibraryUrl: "https://openlibrary.org/works/OL17366359W",
      editionCount: 28,
    },
  ],
  "fyodor dostoevsky": [
    {
      id: "OL262416W",
      title: "Notes from Underground",
      firstPublishYear: 1864,
      coverUrl: "https://covers.openlibrary.org/b/id/8231856-L.jpg",
      openLibraryUrl: "https://openlibrary.org/works/OL262416W",
      editionCount: 40,
    },
    {
      id: "OL262414W",
      title: "Crime and Punishment",
      firstPublishYear: 1866,
      coverUrl: "https://covers.openlibrary.org/b/id/8231852-L.jpg",
      openLibraryUrl: "https://openlibrary.org/works/OL262414W",
      editionCount: 65,
    },
  ],
};

export interface BooksApiResponse {
  author: string;
  source: string;
  count: number;
  books: ArchivalBook[];
}

// In-memory LRU-like cache to eliminate repeated outbound requests and ensure 0ms response
const MEMORY_CACHE = new Map<string, { timestamp: number; data: BooksApiResponse }>();
const CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour in-memory cache

// In-memory sliding-window IP rate limiter to protect against spam / DoS
const RATE_LIMIT_MAP = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 60; // 60 requests per minute per IP
const RATE_LIMIT_WINDOW_MS = 60 * 1000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = RATE_LIMIT_MAP.get(ip);

  // Clean old expired entries periodically
  if (RATE_LIMIT_MAP.size > 1000) {
    for (const [key, val] of RATE_LIMIT_MAP.entries()) {
      if (val.resetAt < now) RATE_LIMIT_MAP.delete(key);
    }
  }

  if (!record || record.resetAt < now) {
    RATE_LIMIT_MAP.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (record.count >= RATE_LIMIT_MAX) {
    return true;
  }

  record.count += 1;
  return false;
}

function cleanAuthorQuery(rawAuthor: string): string {
  // Strict sanitization: cap length and strip unsafe characters
  const sanitized = rawAuthor
    .slice(0, 70)
    .replace(/[<>'"\\/`{}[\];]/g, "")
    .trim();

  const lower = sanitized.toLowerCase();

  for (const [key, searchName] of Object.entries(AUTHOR_SEARCH_MAP)) {
    if (lower.includes(key)) {
      return searchName;
    }
  }

  // Remove parentheses, dates, and dashes (e.g. "Franz Kafka — The Trial" -> "Franz Kafka")
  return sanitized
    .replace(/\s*[\(\[].*?[\)\]]/g, "")
    .replace(/\s*—.*$/, "")
    .replace(/\s*–.*$/, "")
    .trim();
}

export async function GET(request: NextRequest) {
  // 1. Client IP Detection & Rate Limiting Defense
  const forwardedFor = request.headers.get("x-forwarded-for");
  const ip = forwardedFor ? forwardedFor.split(",")[0].trim() : "127.0.0.1";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please retry in a moment." },
      {
        status: 429,
        headers: {
          "Retry-After": "60",
        },
      }
    );
  }

  // 2. Input Parameter Parsing & Sanitization
  const { searchParams } = new URL(request.url);
  const rawAuthor = (searchParams.get("author") || "J. Krishnamurti").trim();
  const rawLimit = parseInt(searchParams.get("limit") || "8", 10);
  const limit = Math.max(1, Math.min(isNaN(rawLimit) ? 8 : rawLimit, 20));

  const queryAuthor = cleanAuthorQuery(rawAuthor);
  const normalizedKey = queryAuthor.toLowerCase();
  const cacheKey = `${normalizedKey}:${limit}`;

  // 3. Fast In-Memory Cache Check (Zero Load / Sub-millisecond response)
  const cached = MEMORY_CACHE.get(cacheKey);
  if (cached && Date.now() - cached.timestamp < CACHE_TTL_MS) {
    return NextResponse.json(cached.data, {
      headers: {
        "X-Cache": "HIT",
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    });
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 6000); // 6s timeout

    const apiUrl = `https://openlibrary.org/search.json?author=${encodeURIComponent(
      queryAuthor
    )}&limit=${limit}&fields=title,first_publish_year,cover_i,key,edition_count`;

    const response = await fetch(apiUrl, {
      signal: controller.signal,
      headers: {
        "User-Agent": "NahilistFolio/1.0 (contact@nahilist.dev)",
        Accept: "application/json",
      },
      next: { revalidate: 86400 }, // Cache 24 hours in Next.js
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`OpenLibrary responded with status: ${response.status}`);
    }

    const data = await response.json();
    const docs = Array.isArray(data?.docs) ? data.docs : [];

    if (docs.length === 0) {
      const fallback = CURATED_FALLBACKS[normalizedKey];
      if (fallback) {
        return NextResponse.json({
          author: queryAuthor,
          source: "curated_archive",
          books: fallback,
        });
      }
    }

    // Filter and map docs, removing duplicates by title
    const seenTitles = new Set<string>();
    const books: ArchivalBook[] = [];

    for (const doc of docs) {
      if (!doc.title) continue;
      const cleanTitle = doc.title.trim();
      const normalizedTitle = cleanTitle.toLowerCase();

      if (seenTitles.has(normalizedTitle)) continue;
      seenTitles.add(normalizedTitle);

      const coverUrl = doc.cover_i
        ? `https://covers.openlibrary.org/b/id/${doc.cover_i}-L.jpg`
        : undefined;

      const openLibraryUrl = doc.key
        ? `https://openlibrary.org${doc.key}`
        : `https://openlibrary.org/search?author=${encodeURIComponent(queryAuthor)}`;

      books.push({
        id: doc.key || cleanTitle,
        title: cleanTitle,
        firstPublishYear: doc.first_publish_year,
        coverUrl,
        openLibraryUrl,
        editionCount: doc.edition_count,
      });

      if (books.length >= limit) break;
    }

    const payload = {
      author: queryAuthor,
      source: "open_library",
      count: books.length,
      books,
    };

    // Cache in RAM for instant 0ms responses on future queries
    MEMORY_CACHE.set(cacheKey, { timestamp: Date.now(), data: payload });

    return NextResponse.json(payload, {
      headers: {
        "X-Cache": "MISS",
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    });
  } catch (error) {
    console.warn(`[Books API] Open Library fetch error for '${queryAuthor}':`, error);

    // Fall back gracefully to curated records if available
    const fallback = CURATED_FALLBACKS[normalizedKey] || [];
    return NextResponse.json({
      author: queryAuthor,
      source: fallback.length > 0 ? "curated_archive_fallback" : "empty",
      books: fallback,
    });
  }
}

