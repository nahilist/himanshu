import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";
import { projects } from "@/lib/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", "/about", "/projects", "/contact"];
  return [
    ...routes.map((path, index) => ({ url: absoluteUrl(path), changeFrequency: "monthly" as const, priority: index === 0 ? 1 : 0.8 })),
    ...projects.map((project) => ({ url: absoluteUrl(`/projects/${project.id}`), changeFrequency: "yearly" as const, priority: 0.7 })),
  ];
}

