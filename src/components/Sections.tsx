import Link from "next/link";
import { Arrow, Check } from "./Icons";
import { CountUp, HeroIntro, HeroLine, PopIn, Reveal, Stagger, StaggerItem } from "./Motion";
import { faqs as defaultFaqs, integrations, type CaseStudy } from "@/lib/content";

export function PageHero({ eyebrow, title, intro, children, dark = false }: { eyebrow: string; title: string; intro: string; children?: React.ReactNode; dark?: boolean }) {
  return (
    <section className={`relative overflow-hidden ${dark ? "bg-forest text-cream" : ""}`}>
      <div className={`absolute inset-0 ${dark ? "grid-bg-dark" : "grid-bg"} [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]`} />
      <div className="container relative pt-16 pb-16 md:pt-24 md:pb-20">
        <HeroIntro>
        <HeroLine><span className={dark ? "eyebrow-dark" : "eyebrow"}>{eyebrow}</span></HeroLine>
        <HeroLine><h1 className="mt-5 max-w-4xl text-4xl font-medium leading-[1.02] sm:text-5xl md:text-6xl">{title}</h1></HeroLine>
        <HeroLine><p className={`mt-6 max-w-2xl text-lg leading-relaxed ${dark ? "text-cream/75" : "text-ink/70"}`}>{intro}</p></HeroLine>
        <HeroLine className="mt-8 flex flex-wrap gap-3">
          <Link href="/demo" className={dark ? "btn-primary" : "btn-dark"}>Book a demo <Arrow className="h-4 w-4" /></Link>
          <Link href="/platform" className={dark ? "btn border border-cream/25 text-cream hover:bg-cream/10" : "btn-ghost"}>See the platform</Link>
        </HeroLine>
        </HeroIntro>
        {children && <PopIn delay={0.45}>{children}</PopIn>}
      </div>
    </section>
  );
}

export function SectionHead({ eyebrow, title, intro, center = false, dark = false }: { eyebrow?: string; title: string; intro?: string; center?: boolean; dark?: boolean }) {
  return (
    <Reveal className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && <span className={dark ? "eyebrow-dark" : "eyebrow"}>{eyebrow}</span>}
      <h2 className="h-section mt-4">{title}</h2>
      {intro && <p className={`mt-5 text-lg leading-relaxed ${dark ? "text-cream/70" : "text-ink/70"}`}>{intro}</p>}
    </Reveal>
  );
}

export function Stats({ items, dark = false }: { items: { stat: string; label: string }[]; dark?: boolean }) {
  return (
    <Stagger className={`grid grid-cols-2 gap-px overflow-hidden rounded-3xl ${items.length >= 4 ? "md:grid-cols-4" : "md:grid-cols-3"} ${dark ? "bg-cream/10" : "bg-ink/10"}`}>
      {items.map((s) => (
        <StaggerItem key={s.label} className={`p-6 md:p-8 ${dark ? "bg-forest" : "bg-cream"}`}>
          <p className={`font-display text-4xl md:text-5xl ${dark ? "text-lime" : "text-leaf"}`}><CountUp value={s.stat} /></p>
          <p className={`mt-2 text-sm ${dark ? "text-cream/65" : "text-ink/60"}`}>{s.label}</p>
        </StaggerItem>
      ))}
    </Stagger>
  );
}

export function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
      <div className="flex w-max animate-marquee gap-3 hover:[animation-play-state:paused]">
        {row.map((t, i) => (
          <span key={i} className="whitespace-nowrap rounded-full border border-ink/10 bg-white px-5 py-2.5 text-sm font-medium text-ink/70">{t}</span>
        ))}
      </div>
    </div>
  );
}

export function FeatureGrid({ items }: { items: { icon: React.ReactNode; title: string; body: string }[] }) {
  return (
    <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((f) => (
        <StaggerItem key={f.title} className="group card p-7 transition-shadow hover:shadow-glow">
          <div className="grid h-11 w-11 place-items-center rounded-2xl bg-mint-100 text-leaf transition duration-300 group-hover:rotate-[-8deg] group-hover:scale-110 group-hover:bg-lime group-hover:text-ink">{f.icon}</div>
          <h3 className="mt-5 text-xl font-medium">{f.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink/65">{f.body}</p>
        </StaggerItem>
      ))}
    </Stagger>
  );
}

export function Steps({ items }: { items: { title: string; body: string }[] }) {
  return (
    <Stagger as="ol" className="grid gap-4 md:grid-cols-3">
      {items.map((s, i) => (
        <StaggerItem as="li" key={s.title} className="relative rounded-3xl border border-ink/10 bg-white p-7">
          <span className="font-display text-5xl text-lime [-webkit-text-stroke:1px_#1F7A55]">0{i + 1}</span>
          <h3 className="mt-4 text-xl font-medium">{s.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink/65">{s.body}</p>
        </StaggerItem>
      ))}
    </Stagger>
  );
}

export function CheckList({ items, dark = false }: { items: string[]; dark?: boolean }) {
  return (
    <Stagger as="ul" className="space-y-3">
      {items.map((t) => (
        <StaggerItem as="li" key={t} className="flex gap-3">
          <span className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${dark ? "bg-lime text-ink" : "bg-leaf text-cream"}`}><Check className="h-3 w-3" /></span>
          <span className={dark ? "text-cream/85" : "text-ink/80"}>{t}</span>
        </StaggerItem>
      ))}
    </Stagger>
  );
}

export function CaseCard({ c, i = 0 }: { c: CaseStudy; i?: number }) {
  return (
    <Reveal delay={i * 0.1} className="h-full">
    <Link href={`/case-studies/${c.slug}`} className="group card flex h-full flex-col p-7 transition hover:-translate-y-1 hover:shadow-glow">
      <span className="text-xs font-semibold uppercase tracking-[.14em] text-leaf">{c.segment}</span>
      <h3 className="mt-3 text-2xl font-medium leading-tight">{c.headline}</h3>
      <p className="mt-3 text-sm text-ink/60">{c.org}</p>
      <div className="mt-6 grid grid-cols-3 gap-3 border-t border-ink/10 pt-5">
        {c.metrics.map((m) => (
          <div key={m.label}><p className="font-display text-2xl text-leaf">{m.stat}</p><p className="text-[11px] leading-tight text-ink/55">{m.label}</p></div>
        ))}
      </div>
      <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold">Read story <Arrow className="h-4 w-4 transition group-hover:translate-x-1" /></span>
    </Link>
    </Reveal>
  );
}

export function Integrations() {
  return (
    <Stagger className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
      {integrations.map((i) => (
        <StaggerItem key={i} className="flex h-20 items-center justify-center rounded-2xl border border-ink/10 bg-white px-4 text-center text-sm font-semibold text-ink/75 transition hover:-translate-y-0.5 hover:border-leaf hover:text-leaf">{i}</StaggerItem>
      ))}
    </Stagger>
  );
}

export function Faq({ items = defaultFaqs }: { items?: { q: string; a: string }[] }) {
  return (
    <Reveal className="divide-y divide-ink/10 rounded-3xl border border-ink/10 bg-white">
      {items.map((f) => (
        <details key={f.q} className="group p-6 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-4 text-lg font-medium">
            {f.q}
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-mint-100 text-leaf transition group-open:rotate-45">+</span>
          </summary>
          <p className="mt-3 max-w-3xl text-ink/70 leading-relaxed">{f.a}</p>
        </details>
      ))}
    </Reveal>
  );
}

export function CTA({ title = "Put your payer calls on autopilot.", body = "See GoGreen Voice handle your real workflows in a 30-minute demo." }: { title?: string; body?: string }) {
  return (
    <section className="section">
      <div className="container">
        <Reveal y={40} className="relative overflow-hidden rounded-4xl bg-forest px-6 py-16 text-center text-cream md:px-16 md:py-20">
          <div className="absolute inset-0 grid-bg-dark opacity-60" />
          <div className="absolute -right-24 -top-24 h-72 w-72 animate-[drift_12s_ease-in-out_infinite] rounded-full bg-lime/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 animate-[drift_14s_ease-in-out_infinite_reverse] rounded-full bg-leaf/40 blur-3xl" />
          <div className="relative">
            <h2 className="mx-auto max-w-3xl text-4xl font-medium leading-tight md:text-5xl">{title}</h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-cream/70">{body}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/demo" className="btn-primary">Book a demo <Arrow className="h-4 w-4" /></Link>
              <Link href="/case-studies" className="btn border border-cream/25 text-cream hover:bg-cream/10">Read case studies</Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
