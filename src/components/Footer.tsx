import Link from "next/link";
import { brand } from "@/lib/site";
import { audiences, workflows } from "@/lib/content";
import { Logo } from "./Logo";

const cols = [
  { title: "Platform", links: [{ label: "Overview", href: "/platform" }, { label: "Voice agents", href: "/voice-agents" }, { label: "Automation teams", href: "/solutions/automation-teams" }, { label: "Security", href: "/security" }, { label: "API docs", href: brand.docsUrl }] },
  { title: "Workflows", links: workflows.map((w) => ({ label: w.name, href: `/workflows/${w.slug}` })) },
  { title: "Who we serve", links: audiences.map((a) => ({ label: a.name, href: `/who-we-serve/${a.slug}` })) },
  { title: "Company", links: [{ label: "Case studies", href: "/case-studies" }, { label: "Blog", href: "/blog" }, { label: "Press", href: "/press" }, { label: "Careers", href: "/careers" }, { label: "Contact", href: "/demo" }] },
];

export function Footer() {
  return (
    <footer className="bg-forest-900 text-cream">
      <div className="container py-16">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_3fr]">
          <div>
            <Logo dark />
            <p className="mt-4 max-w-xs text-sm text-cream/60">{brand.tagline}. Built to handle payer calls so your team doesn&apos;t have to.</p>
            <div className="mt-6 flex flex-wrap gap-2 text-[11px] font-semibold uppercase tracking-wider">
              <span className="rounded-full border border-cream/20 px-3 py-1">HIPAA</span>
              <span className="rounded-full border border-cream/20 px-3 py-1">BAA available</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {cols.map((c) => (
              <div key={c.title}>
                <p className="text-xs font-semibold uppercase tracking-[.14em] text-lime">{c.title}</p>
                <ul className="mt-4 space-y-2.5">
                  {c.links.map((l) => (
                    <li key={l.href}><Link href={l.href} className="text-sm text-cream/70 hover:text-cream">{l.label}</Link></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-4 border-t border-cream/10 pt-6 text-xs text-cream/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {brand.name}. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-cream">Privacy</Link>
            <Link href="/terms" className="hover:text-cream">Terms</Link>
            <a href={brand.linkedin} className="hover:text-cream">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
