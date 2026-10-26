import type { Metadata } from "next";
import Link from "next/link";
import { CTA, CaseCard, CheckList, Integrations, PageHero, SectionHead, Stats, Steps } from "@/components/Sections";
import { Arrow } from "@/components/Icons";
import { audiences, caseStudies, workflows } from "@/lib/content";

const get = (slug: string) => {
  const a = audiences.find((x) => x.slug === slug);
  if (!a) throw new Error(`Unknown audience: ${slug}`);
  return a;
};

export function audienceMetadata(slug: string): Metadata {
  const a = get(slug);
  return { title: `For ${a.name}`, description: a.intro };
}

// Shared layout for the top-level audience pages (/rcm-companies, /pharma, ...).
export function AudienceView({ slug }: { slug: string }) {
  const a = get(slug);
  const related = caseStudies.filter((c) => c.segment.toLowerCase().includes(a.name.split(" ")[0].toLowerCase()));
  const cases = (related.length >= 2 ? related : [...related, ...caseStudies.filter((c) => !related.includes(c))]).slice(0, 2);
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
          <SectionHead eyebrow="What GoGreen Voice handles" title="Automate the calls that take up the most time." />
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
      <section className="section bg-cream-200/60">
        <div className="container">
          <SectionHead center eyebrow="Integrations" title="Works with the systems your team already uses." />
          <div className="mt-12"><Integrations /></div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Rollout" title="From first pilot to full production." />
          <div className="mt-12"><Steps items={[
            { title: "Pick one workflow", body: "Start with the call queue your team works every day, so results are easy to measure." },
            { title: "Run a live pilot", body: "Agents call real payers on a sample of your work while your team reviews every result." },
            { title: "Scale up", body: "Add volume, locations and workflows once accuracy and turnaround meet your targets." },
          ]} /></div>
        </div>
      </section>
      <section className="section pt-0">
        <div className="container grid gap-4 md:grid-cols-2">{cases.map((c, i) => <CaseCard key={c.slug} c={c} i={i} />)}</div>
      </section>
      <CTA />
    </>
  );
}
