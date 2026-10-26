import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTA, CaseCard, CheckList, PageHero, SectionHead, Stats } from "@/components/Sections";
import { Arrow } from "@/components/Icons";
import { audiences, caseStudies, workflows } from "@/lib/content";

export const dynamicParams = false;
export const generateStaticParams = () => audiences.map((a) => ({ slug: a.slug }));
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const a = audiences.find((x) => x.slug === params.slug);
  return a ? { title: `For ${a.name}`, description: a.intro } : {};
}

export default function AudiencePage({ params }: { params: { slug: string } }) {
  const a = audiences.find((x) => x.slug === params.slug);
  if (!a) notFound();
  return (
    <>
      <PageHero eyebrow={`For ${a.name}`} title={a.headline} intro={a.intro} />
      <section className="section pt-0"><div className="container"><Stats items={a.outcomes} /></div></section>
      <section className="section bg-cream-200/60">
        <div className="container grid gap-12 lg:grid-cols-2">
          <SectionHead eyebrow="Sound familiar?" title={`What slows ${a.name.toLowerCase()} down`} />
          <CheckList items={a.pains} />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Workflows" title="Automate the calls that take up the most time." />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {workflows.map((w) => (
              <Link key={w.slug} href={`/workflows/${w.slug}`} className="group card p-6">
                <h3 className="text-xl font-medium">{w.name}</h3>
                <p className="mt-2 text-sm text-ink/60">{w.short}</p>
                <Arrow className="mt-6 h-5 w-5 text-leaf transition group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="section pt-0">
        <div className="container grid gap-4 md:grid-cols-2">{caseStudies.slice(0, 2).map((c, i) => <CaseCard key={c.slug} c={c} i={i} />)}</div>
      </section>
      <CTA />
    </>
  );
}
