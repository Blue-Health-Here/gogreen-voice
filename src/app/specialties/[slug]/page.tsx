import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTA, CheckList, PageHero, SectionHead } from "@/components/Sections";
import { specialties, workflows } from "@/lib/content";

export const dynamicParams = false;
export const generateStaticParams = () =>
  specialties.map((s) => ({ slug: s.slug }));
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = specialties.find((x) => x.slug === slug);
  return s ? { title: `${s.name} revenue cycle automation` } : {};
}

export default async function SpecialtyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = specialties.find((x) => x.slug === slug);
  if (!s) notFound();
  return (
    <>
      <PageHero
        eyebrow={s.name}
        title={`Payer calls for ${s.name.toLowerCase()}, handled.`}
        intro={`${s.name} practices deal with ${s.focus}. Greenline Voice agents are trained on these details, so the right questions get asked on every call.`}
      />
      <section className="section pt-0">
        <div className="container grid gap-4 md:grid-cols-3">
          {s.calls.map((c, i) => (
            <div key={c} className="card p-7">
              <span className="font-mono text-xs text-leaf">0{i + 1}</span>
              <h3 className="mt-3 text-xl font-medium">{c}</h3>
              <p className="mt-2 text-sm text-ink/60">
                Automated end to end, with structured results returned to your
                PM system.
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="section bg-cream-200/60">
        <div className="container grid gap-12 lg:grid-cols-2">
          <SectionHead
            eyebrow="Why it matters"
            title={`Built for the details of ${s.name.toLowerCase()} billing`}
          />
          <CheckList
            items={[
              "Specialty-specific question sets for each payer",
              "CPT- and diagnosis-aware benefit checks",
              "Escalation rules tuned to your clinical workflows",
              "Reporting by provider, location and payer",
            ]}
          />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2 className="text-2xl font-medium">Related workflows</h2>
          <div className="mt-6 flex flex-wrap gap-2">
            {workflows.map((w) => (
              <Link
                key={w.slug}
                href={`/workflows/${w.slug}`}
                className="rounded-full border border-ink/15 bg-white px-4 py-2 text-sm font-medium hover:border-leaf"
              >
                {w.name}
              </Link>
            ))}
          </div>
          <h2 className="mt-12 text-2xl font-medium">Other specialties</h2>
          <div className="mt-6 flex flex-wrap gap-2">
            {specialties
              .filter((x) => x.slug !== s.slug)
              .map((x) => (
                <Link
                  key={x.slug}
                  href={`/specialties/${x.slug}`}
                  className="rounded-full bg-mint-100 px-4 py-2 text-sm text-leaf hover:bg-mint"
                >
                  {x.name}
                </Link>
              ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
