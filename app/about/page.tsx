import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { ProfileShell } from "@/components/ProfileShell";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { SITE, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: "About Himanshu Kumar, the developer behind Nahilist, including his AI/ML education, frontend focus, skills, and selected work.",
  alternates: { canonical: "/about" },
  openGraph: { title: `About ${SITE.personName}`, description: `Meet ${SITE.personName}, the AI/ML and frontend developer behind ${SITE.name}.`, url: "/about" },
};

export default function AboutPage() {
  const { about, skills } = PORTFOLIO_DATA;
  return (
    <ProfileShell>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "ProfilePage", "@id": `${absoluteUrl("/about")}#profile`, url: absoluteUrl("/about"), name: `About ${SITE.personName}`, mainEntity: { "@id": `${absoluteUrl("/")}#person` }, isPartOf: { "@id": `${absoluteUrl("/")}#website` } }} />
      <main id="main-content" className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <header className="max-w-4xl">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-neutral-500">About · Nahilist</p>
          <h1 className="mt-5 text-5xl font-black tracking-[-0.055em] sm:text-7xl">Himanshu Kumar — AI/ML &amp; Frontend Developer</h1>
          <p className="mt-8 max-w-3xl text-xl leading-relaxed text-neutral-600">Himanshu Kumar is the developer behind Nahilist. He studies Artificial Intelligence and Machine Learning and builds AI-focused tools and responsive web experiences with Python, React, Next.js, and related technologies.</p>
        </header>

        <section aria-labelledby="background" className="mt-20 grid gap-8 border-t border-neutral-300 pt-10 lg:grid-cols-[1fr_2fr]">
          <h2 id="background" className="text-2xl font-bold">Background</h2>
          <div className="space-y-5 text-lg leading-relaxed text-neutral-700">
            {about.bio.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <p><strong>Education:</strong> {about.degree}, {about.college}. The portfolio lists his academic period as 2022–2026.</p>
          </div>
        </section>

        <section aria-labelledby="skills" className="mt-20">
          <h2 id="skills" className="text-3xl font-black tracking-tight">Technical skills</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((group) => <article key={group.title} className="rounded-3xl border border-neutral-200 bg-white p-6"><h3 className="text-xl font-bold">{group.title}</h3><p className="mt-3 text-sm leading-relaxed text-neutral-600">{group.description}</p><p className="mt-5 font-mono text-xs leading-relaxed text-neutral-500">{group.skills.join(" · ")}</p></article>)}
          </div>
        </section>

        <section aria-labelledby="questions" className="mt-20 border-t border-neutral-300 pt-12">
          <h2 id="questions" className="text-3xl font-black tracking-tight">Quick answers</h2>
          <dl className="mt-8 grid gap-8 md:grid-cols-2">
            <div><dt className="text-lg font-bold">Who is Himanshu Kumar?</dt><dd className="mt-2 leading-relaxed text-neutral-600">An AI/ML student and frontend developer in India who publishes his work under the name Nahilist.</dd></div>
            <div><dt className="text-lg font-bold">What does Nahilist develop?</dt><dd className="mt-2 leading-relaxed text-neutral-600">Interactive web applications, AI/ML experiments, and full-stack project interfaces represented in this portfolio.</dd></div>
            <div><dt className="text-lg font-bold">Which technologies does he use?</dt><dd className="mt-2 leading-relaxed text-neutral-600">The portfolio records Python, PyTorch, TensorFlow, React, Next.js, TypeScript, Tailwind CSS, FastAPI, Django, and Supabase among his tools.</dd></div>
            <div><dt className="text-lg font-bold">Where can I view his work?</dt><dd className="mt-2 leading-relaxed text-neutral-600">Browse the <Link className="font-semibold underline" href="/projects">project case studies</Link> or visit his <a className="font-semibold underline" href={SITE.github}>GitHub profile</a>.</dd></div>
          </dl>
        </section>
      </main>
    </ProfileShell>
  );
}

