import type { Metadata } from "next";
import Image from "next/image";
import { JsonLd } from "@/components/JsonLd";
import { ProfileShell } from "@/components/ProfileShell";
import { absoluteUrl } from "@/lib/site";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected AI/ML, frontend, and full-stack projects by Himanshu Kumar, with screenshots and direct links to live projects.",
  alternates: { canonical: "/projects" },
  openGraph: { title: "Projects by Himanshu Kumar", description: "Selected AI/ML, frontend, and full-stack live projects by the developer behind Nahilist.", url: "/projects" },
};

export default function ProjectsPage() {
  return (
    <ProfileShell>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "CollectionPage", "@id": `${absoluteUrl("/projects")}#collection`, url: absoluteUrl("/projects"), name: "Projects by Himanshu Kumar", mainEntity: projects.map((project) => ({ "@type": "CreativeWork", name: project.title, url: project.liveUrl })) }} />
      <main id="main-content" className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <header className="max-w-4xl">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-neutral-500">Selected work · AI/ML · Frontend</p>
          <h1 className="mt-5 text-5xl font-black uppercase tracking-[-0.055em] sm:text-7xl">Project archive</h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-neutral-600">Selected work from Himanshu Kumar&apos;s Nahilist portfolio. Choose any project to open the live experience directly.</p>
        </header>
        <section aria-label="Live projects" className="mt-14 grid gap-7 md:grid-cols-2">
          {projects.map((project) => (
            <article key={project.id} className="group overflow-hidden rounded-[2rem] border border-neutral-200 bg-white shadow-sm">
              <a href={project.liveUrl} target="_blank" rel="noreferrer" className="block focus-visible:outline-2 focus-visible:outline-offset-4">
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-200"><Image src={project.image.src} alt={project.image.alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.02]" /></div>
                <div className="p-7">
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-neutral-500">{project.category} · {project.badge}</p>
                  <h2 className="mt-3 text-2xl font-bold tracking-tight">{project.title}</h2>
                  <p className="mt-4 line-clamp-3 leading-relaxed text-neutral-600">{project.whatIBuilt}</p>
                  <span className="mt-6 inline-block font-bold underline decoration-neutral-300 underline-offset-4">Open live project ↗</span>
                </div>
              </a>
            </article>
          ))}
        </section>
      </main>
    </ProfileShell>
  );
}
