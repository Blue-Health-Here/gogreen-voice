import type { MetadataRoute } from "next";
import { audiences, caseStudies, posts, specialties, workflows } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.greenlinepriorauth.com";
  const paths = ["", "/platform", "/voice-agents", "/solutions/rpa-automation-teams", "/security", "/case-studies", "/blog", "/press", "/careers", "/demo",
    "/references/claim-status-automation", "/free-superbill-template",
    ...audiences.map((a) => a.href), ...specialties.map((s) => `/specialties/${s.slug}`),
    ...workflows.map((w) => `/workflows/${w.slug}`), ...caseStudies.map((c) => `/case-study/${c.slug}`), ...posts.map((p) => `/blog/${p.slug}`)];
  return paths.map((p) => ({ url: base + p }));
}
