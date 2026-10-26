import type { MetadataRoute } from "next";
import { audiences, caseStudies, posts, specialties, workflows } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.gogreenhealth.com";
  const paths = ["", "/platform", "/voice-agents", "/solutions/automation-teams", "/security", "/case-studies", "/blog", "/press", "/careers", "/demo",
    ...audiences.map((a) => `/who-we-serve/${a.slug}`), ...specialties.map((s) => `/specialties/${s.slug}`),
    ...workflows.map((w) => `/workflows/${w.slug}`), ...caseStudies.map((c) => `/case-studies/${c.slug}`), ...posts.map((p) => `/blog/${p.slug}`)];
  return paths.map((p) => ({ url: base + p }));
}
