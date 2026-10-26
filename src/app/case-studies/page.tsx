import type { Metadata } from "next";
import { CTA, CaseCard, PageHero } from "@/components/Sections";
import { caseStudies } from "@/lib/content";

export const metadata: Metadata = { title: "Case studies" };
export default function CaseStudies() {
  return (
    <>
      <PageHero
        eyebrow="Case studies"
        title="Results from revenue cycle teams."
        intro="How organizations use GreenLine Voice to cut hold time, reduce AR and grow without adding headcount."
      />
      <section className="section pt-0">
        <div className="container grid gap-4 md:grid-cols-2">
          {caseStudies.map((c, i) => (
            <CaseCard key={c.slug} c={c} i={i} />
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
