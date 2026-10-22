import Link from "next/link";
import { SITE } from "@/lib/site";

export function ProfileFooter() {
  return (
    <footer className="border-t border-neutral-200 bg-[#f7f7f5]">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-neutral-600 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>© {new Date().getFullYear()} {SITE.personName} · {SITE.name}</p>
        <nav aria-label="Footer navigation" className="flex gap-5">
          <Link href="/projects">Projects</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link>
        </nav>
      </div>
    </footer>
  );
}

