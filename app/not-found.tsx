import Link from "next/link";

export default function NotFound() {
  return <main className="flex min-h-screen items-center justify-center bg-[#f7f7f5] px-6 text-center text-neutral-950"><div><p className="font-mono text-sm uppercase tracking-[0.2em] text-neutral-500">404</p><h1 className="mt-4 text-5xl font-black tracking-tight">Page not found</h1><p className="mt-4 text-neutral-600">The requested page does not exist.</p><Link className="mt-8 inline-block rounded-full bg-neutral-950 px-6 py-3 font-bold text-white" href="/">Return home</Link></div></main>;
}

