import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CallDemo } from "@/components/CallDemo";
import { CTA, CheckList, Faq, PageHero, SectionHead, Steps } from "@/components/Sections";
import { workflows } from "@/lib/content";

export const dynamicParams = false;
export const generateStaticParams = () => workflows.map((w) => ({ slug: w.slug }));
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const w = workflows.find((x) => x.slug === params.slug);
  return w ? { title: w.name, description: w.intro } : {};
}

export default function WorkflowPage({ params }: { params: { slug: string } }) {
  const w = workflows.find((x) => x.slug === params.slug);
  if (!w) notFound();
  return (
    <>
      <PageHero dark eyebrow={w.name} title={w.headline} intro={w.intro}>
        <div className="mt-14"><CallDemo items={[w]} /></div>
      </PageHero>
      <section className="section">
        <div className="container">
          <SectionHead eyebrow="How it works" title="Three steps, no hold music." />
          <div className="mt-12"><Steps items={w.steps} /></div>
        </div>
      </section>
      <section className="section bg-cream-200/60">
        <div className="container grid gap-12 lg:grid-cols-2">
          <SectionHead eyebrow="Data captured" title="Every field you need, every time." intro="Fields can be customized for each payer and service type. Here's the default set." />
          <CheckList items={w.fields} />
        </div>
      </section>
      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[1fr_2fr]">
          <SectionHead eyebrow="FAQ" title="Questions" />
          <Faq />
        </div>
      </section>
      <CTA />
    </>
  );
}
