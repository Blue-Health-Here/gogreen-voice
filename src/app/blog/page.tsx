import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/lib/content";
import { PageHero } from "@/components/Sections";

export const metadata: Metadata = { title: "Blog" };
const d = (s: string) => new Date(s + "T00:00:00").toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

export default function Blog() {
  const [first, ...rest] = posts;
  return (
    <>
      <PageHero eyebrow="Blog" title="Notes from the hold line." intro="Product updates, revenue cycle playbooks and lessons from automating payer calls." />
      <section className="section pt-0">
        <div className="container">
          <Link href={`/blog/${first.slug}`} className="group grid overflow-hidden rounded-4xl bg-forest text-cream md:grid-cols-2">
            <div className="grid-bg-dark min-h-56 bg-forest-800" />
            <div className="p-8 md:p-12">
              <span className="eyebrow-dark">{first.tag}</span>
              <h2 className="mt-4 text-3xl font-medium leading-tight group-hover:text-lime">{first.title}</h2>
              <p className="mt-4 text-cream/70">{first.excerpt}</p>
              <p className="mt-6 text-sm text-cream/50">{d(first.date)} · {first.read}</p>
            </div>
          </Link>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="group card flex flex-col p-7">
                <span className="text-xs font-semibold uppercase tracking-[.14em] text-leaf">{p.tag}</span>
                <h3 className="mt-3 text-xl font-medium leading-snug group-hover:text-leaf">{p.title}</h3>
                <p className="mt-3 flex-1 text-sm text-ink/60">{p.excerpt}</p>
                <p className="mt-6 text-xs text-ink/45">{d(p.date)} · {p.read}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
