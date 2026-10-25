import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", "/about", "/projects", "/contact"];
  return routes.map((path, index) => ({ url: absoluteUrl(path), changeFrequency: "monthly" as const, priority: index === 0 ? 1 : 0.8 }));
}

