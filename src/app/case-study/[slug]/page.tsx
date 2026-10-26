import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTA, CheckList, Stats } from "@/components/Sections";
import { caseStudies } from "@/lib/content";

export const dynamicParams = false;
export const generateStaticParams = () => caseStudies.map((c) => ({ slug: c.slug }));
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const c = caseStudies.find((x) => x.slug === params.slug);
  return c ? { title: c.headline, description: c.summary } : {};
}

export default function CaseStudy({ params }: { params: { slug: string } }) {
  const c = caseStudies.find((x) => x.slug === params.slug);
  if (!c) notFound();
  return (
    <>
      <article className="container max-w-4xl pt-16 md:pt-24">
        <Link href="/case-studies" className="text-sm font-semibold text-leaf">← All case studies</Link>
        <p className="mt-8 text-xs font-semibold uppercase tracking-[.14em] text-ink/50">{c.org} · {c.segment}</p>
        <h1 className="mt-4 text-4xl font-medium leading-tight md:text-6xl">{c.headline}</h1>
        <p className="lead mt-6">{c.summary}</p>
        <div className="mt-12"><Stats items={c.metrics} /></div>
        <div className="prose-gg mt-14">
          <h2>The challenge</h2><p>{c.challenge}</p>
          <h2>The solution</h2><p>{c.solution}</p>
          <h2>The results</h2>
        </div>
        <CheckList items={c.results} />
        <p className="mt-10 rounded-2xl bg-coral/10 p-4 text-sm text-ink/70">Sample story with a fictional organization. Replace it with an approved customer case study before launch.</p>
      </article>
      <CTA />
    </>
  );
}
