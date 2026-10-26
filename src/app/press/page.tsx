import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/Sections";
import { press } from "@/lib/content";
import { brand } from "@/lib/site";

export const metadata: Metadata = { title: "Press" };
export default function Press() {
  return (
    <>
      <PageHero eyebrow="Press" title="News & announcements" intro={`Media inquiries: ${brand.email}`} />
      <section className="section pt-0">
        <div className="container divide-y divide-ink/10 rounded-3xl border border-ink/10 bg-white">
          {press.map((p) => (
            <Link key={p.title} href={p.href} className="flex flex-col gap-2 p-6 hover:bg-mint-100 md:flex-row md:items-center md:justify-between">
              <span className="text-lg font-medium">{p.title}</span>
              <span className="shrink-0 text-sm text-ink/50">{p.outlet} · {new Date(p.date + "T00:00:00").toLocaleDateString("en-US", { month: "short", year: "numeric" })}</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
