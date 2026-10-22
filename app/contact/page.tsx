import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ProfileShell } from "@/components/ProfileShell";
import { SITE, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Himanshu Kumar about AI/ML, frontend development, internships, and project collaboration.",
  alternates: { canonical: "/contact" },
  openGraph: { title: `Contact ${SITE.personName}`, description: `Email ${SITE.personName} or connect through his verified portfolio profiles.`, url: "/contact" },
};

export default function ContactPage() {
  return (
    <ProfileShell>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "ContactPage", "@id": `${absoluteUrl("/contact")}#contact`, url: absoluteUrl("/contact"), name: `Contact ${SITE.personName}`, about: { "@id": `${absoluteUrl("/")}#person` } }} />
      <main id="main-content" className="mx-auto flex min-h-[70vh] max-w-6xl items-center px-5 py-16 sm:px-8">
        <div className="w-full rounded-[2rem] border border-neutral-200 bg-white p-8 shadow-sm sm:p-14">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-neutral-500">Contact · Available for opportunities</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-black tracking-[-0.055em] sm:text-7xl">Start a conversation with Himanshu.</h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-neutral-600">For AI/ML work, frontend projects, internships, or collaboration, email Himanshu directly. You can also review his public work and professional profile first.</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a className="rounded-full bg-neutral-950 px-6 py-3 font-bold text-white focus-visible:outline-2 focus-visible:outline-offset-4" href={`mailto:${SITE.email}`}>Email {SITE.email}</a>
            <a className="rounded-full border border-neutral-300 px-6 py-3 font-bold" href={SITE.github} rel="noreferrer" target="_blank">GitHub</a>
            <a className="rounded-full border border-neutral-300 px-6 py-3 font-bold" href={SITE.linkedin} rel="noreferrer" target="_blank">LinkedIn</a>
          </div>
        </div>
      </main>
    </ProfileShell>
  );
}
