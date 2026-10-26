import type { Metadata } from "next";
import { PageHero } from "@/components/Sections";
import { roles } from "@/lib/content";
import { brand } from "@/lib/site";

export const metadata: Metadata = { title: "Careers" };
export default function Careers() {
  return (
    <>
      <PageHero eyebrow="Careers" title="Help healthcare teams spend less time on hold." intro="We're a small team of engineers, operators and revenue cycle experts. Join us." />
      <section className="section pt-0">
        <div className="container divide-y divide-ink/10 rounded-3xl border border-ink/10 bg-white">
          {roles.map((r) => (
            <a key={r.title} href={`mailto:${brand.email}?subject=${encodeURIComponent(r.title)}`} className="flex flex-col gap-1 p-6 hover:bg-mint-100 md:flex-row md:items-center md:justify-between">
              <span className="text-lg font-medium">{r.title}</span>
              <span className="text-sm text-ink/55">{r.team} · {r.location}</span>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
