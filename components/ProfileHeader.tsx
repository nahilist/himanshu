import Link from "next/link";

const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["Projects", "/projects"],
  ["Contact", "/contact"],
] as const;

export function ProfileHeader() {
  return (
    <header className="border-b border-neutral-200 bg-[#f7f7f5]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
        <Link href="/" className="text-xl font-black tracking-[-0.05em]">Nahilist</Link>
        <nav aria-label="Primary navigation">
          <ul className="flex items-center gap-4 text-sm font-semibold sm:gap-7">
            {links.map(([label, href]) => <li key={href}><Link className="rounded-sm underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4" href={href}>{label}</Link></li>)}
          </ul>
        </nav>
      </div>
    </header>
  );
}

