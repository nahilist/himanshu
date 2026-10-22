import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { ProfileShell } from "@/components/ProfileShell";
import { SITE, absoluteUrl } from "@/lib/site";
import { getProject, projects } from "@/lib/projects";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.id }));
}

type ProjectPageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  const fullDescription = `${project.title} case study by ${SITE.personName}: ${project.whatIBuilt}`;
  const description = fullDescription.length > 158
    ? `${fullDescription.slice(0, 155).replace(/\s+\S*$/, "")}…`
    : fullDescription;
  return {
    title: project.title,
    description,
    alternates: { canonical: `/projects/${project.id}` },
    openGraph: { title: `${project.title} — Project case study`, description, url: `/projects/${project.id}`, type: "article", images: [{ url: project.image.src, alt: project.image.alt }] },
    twitter: { card: "summary_large_image", title: project.title, description, images: [project.image.src] },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const pageUrl = absoluteUrl(`/projects/${project.id}`);
  const repoIsSpecific = new URL(project.githubUrl).pathname !== "/nahilist";

  return (
    <ProfileShell>
      <JsonLd data={[
        { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
          { "@type": "ListItem", position: 2, name: "Projects", item: absoluteUrl("/projects") },
          { "@type": "ListItem", position: 3, name: project.title, item: pageUrl },
        ] },
        { "@context": "https://schema.org", "@type": "SoftwareSourceCode", "@id": `${pageUrl}#project`, name: project.title, description: project.whatIBuilt, url: pageUrl, image: absoluteUrl(project.image.src), author: { "@id": `${absoluteUrl("/")}#person` }, programmingLanguage: project.technologies, codeRepository: repoIsSpecific ? project.githubUrl : undefined, workExample: project.liveUrl, keywords: project.technologies.join(", ") },
      ]} />
      <main id="main-content">
        <article className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
          <nav aria-label="Breadcrumb" className="text-sm text-neutral-500"><Link className="underline" href="/">Home</Link> <span aria-hidden="true">/</span> <Link className="underline" href="/projects">Projects</Link> <span aria-hidden="true">/</span> <span aria-current="page">{project.title}</span></nav>
          <header className="mt-10 max-w-4xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-500">{project.category} · Independent portfolio project</p>
            <h1 className="mt-5 text-5xl font-black tracking-[-0.055em] sm:text-7xl">{project.title}</h1>
            <p className="mt-7 text-xl leading-relaxed text-neutral-600">{project.whatIBuilt}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={project.liveUrl} target="_blank" rel="noreferrer" className="rounded-full bg-neutral-950 px-6 py-3 font-bold text-white">Open live project</a>
              <a href={project.githubUrl} target="_blank" rel="noreferrer" className="rounded-full border border-neutral-300 px-6 py-3 font-bold">{repoIsSpecific ? "View source" : "View GitHub profile"}</a>
            </div>
          </header>

          <figure className="mt-14 overflow-hidden rounded-[2rem] border border-neutral-200 bg-white p-2 shadow-sm">
            <Image src={project.image.src} alt={project.image.alt} width={1600} height={1000} priority className="h-auto w-full rounded-[1.55rem]" />
            <figcaption className="px-4 py-3 text-sm text-neutral-500">{project.image.caption}</figcaption>
          </figure>

          <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_2fr]">
            <aside><h2 className="text-2xl font-bold">Technology stack</h2><ul className="mt-5 flex flex-wrap gap-2">{project.technologies.map((technology) => <li key={technology} className="rounded-full border border-neutral-300 bg-white px-3 py-1.5 text-sm">{technology}</li>)}</ul></aside>
            <div className="space-y-12">
              <section aria-labelledby="problem"><h2 id="problem" className="text-3xl font-black tracking-tight">Problem and intended users</h2><p className="mt-4 text-lg leading-relaxed text-neutral-600">{project.problemStatement}</p></section>
              <section aria-labelledby="role"><h2 id="role" className="text-3xl font-black tracking-tight">Role and implementation</h2><p className="mt-4 text-lg leading-relaxed text-neutral-600">Himanshu built this as an independent portfolio project, covering the product interface and the implementation described here.</p></section>
              <section aria-labelledby="features"><h2 id="features" className="text-3xl font-black tracking-tight">Implemented features</h2><ul className="mt-5 space-y-3 text-lg text-neutral-600">{project.keyFeatures.map((feature) => <li className="flex gap-3" key={feature}><span aria-hidden="true">—</span><span>{feature}</span></li>)}</ul></section>
              <section aria-labelledby="decisions"><h2 id="decisions" className="text-3xl font-black tracking-tight">Technical decisions</h2><p className="mt-4 text-lg leading-relaxed text-neutral-600">The recorded stack combines {project.technologies.slice(0, -1).join(", ")} and {project.technologies.at(-1)}. The implementation emphasizes the interactive workflow and responsive presentation shown in the project screenshot. No performance or outcome metrics are stated because the repository does not include supporting measurements.</p></section>
            </div>
          </div>
        </article>
      </main>
    </ProfileShell>
  );
}

