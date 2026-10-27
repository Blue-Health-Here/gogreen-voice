import Link from "next/link";
import { CallDemo } from "@/components/CallDemo";
import { ProductMock } from "@/components/ProductMock";
import { LottieAnim } from "@/components/LottieAnim";
import {
  Float,
  HeroIntro,
  HeroLine,
  PopIn,
  Reveal,
  Stagger,
  StaggerItem,
} from "@/components/Motion";
import {
  CTA,
  CaseCard,
  CheckList,
  Faq,
  FeatureGrid,
  Integrations,
  Marquee,
  SectionHead,
  Stats,
} from "@/components/Sections";
import {
  Arrow,
  Bolt,
  Chart,
  Doc,
  Phone,
  Plug,
  Shield,
} from "@/components/Icons";
import { audiences, caseStudies, homeStats, workflows } from "@/lib/content";

const channels = [
  {
    k: "Inputs",
    title: "Bring work in any way you like",
    items: [
      "PM / EHR worklists",
      "CSV or SFTP drops",
      "REST API",
      "Manual entry in the app",
    ],
  },
  {
    k: "Channels",
    title: "Reach payers wherever answers are",
    items: [
      "Phone lines & IVRs",
      "Payer portals",
      "Fax follow-ups",
      "Clearinghouse responses",
    ],
  },
  {
    k: "Outputs",
    title: "Get answers back in a structured format",
    items: [
      "Write-back to your PM",
      "Webhooks per call",
      "Recordings & transcripts",
      "Exception review queue",
    ],
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      {/* Pulled up under the floating header (72px / 80px tall) so the video fills the viewport. */}
      <section className="relative -mt-[72px] flex min-h-[100svh] items-center overflow-hidden sm:-mt-20">
        {/* Background video: Pexels #8657330, pharmacist on the phone. */}
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/videos/hero-pharmacist.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/35 to-cream/10" />
        {/* <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_at_top,black,transparent_50%)]" /> */}
        {/* <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-mint/60 blur-3xl" /> */}
        <div className="container relative grid items-center gap-12 pt-32 pb-24 md:pt-36 lg:grid-cols-[1.05fr_1fr]">
          <HeroIntro>
            <HeroLine>
              <span className="eyebrow rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-sm text-white/85 backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-gl-green shadow-[0_0_8px_2px_rgba(23,198,79,.7)] animate-pulse" />{" "}
                Voice AI for revenue cycle
              </span>
            </HeroLine>
            <HeroLine>
              <h1 className="mt-5 text-5xl text-white font-medium leading-[0.9] tracking-[-.05em] [text-shadow:0_2px_24px_rgba(0,0,0,.35)] sm:text-6xl lg:text-7xl">
                Let AI wait on hold{" "}
                <span data-text="for you." className="ai-gradient-text ai-gradient-text-light">
                  for you.
                </span>
              </h1>
            </HeroLine>
            <HeroLine>
              <p className="lead mt-6 max-w-xl text-white/80">
                Greenline Voice agents call payers for benefits, authorizations,
                claims and enrollment, then send structured answers back to your
                systems. Your team handles the exceptions.
              </p>
            </HeroLine>
            <HeroLine className="mt-8 flex flex-wrap gap-3">
              <Link href="/demo" className="btn-glow group">
                Book a demo{" "}
                <Arrow className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link href="#listen" className="btn-glass">
                <Phone className="h-4 w-4" /> Hear a call
              </Link>
            </HeroLine>
            <HeroLine className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/70">
              <span className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-lime" /> BAA with every customer
              </span>
              <span className="flex items-center gap-2">
                <Bolt className="h-4 w-4 text-lime" /> Live in weeks, not
                quarters
              </span>
            </HeroLine>
          </HeroIntro>
          <PopIn className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[3rem] border border-white/10 bg-white/5 backdrop-blur-sm" />
            <div className="shadow-[0_30px_80px_-20px_rgba(0,0,0,.6)] rounded-xl">
              <ProductMock />
            </div>
            <Float
              className="absolute -bottom-8 -left-4 hidden sm:block"
              delay={0.5}
            >
              <div className="rounded-2xl bg-forest p-4 text-cream ring-1 ring-white/15 shadow-[0_0_0_1px_rgba(31,164,99,.35),0_20px_50px_-15px_rgba(23,198,79,.55)]">
                <p className="text-[11px] uppercase tracking-wider text-lime">
                  Call complete
                </p>
                <p className="mt-1 text-sm font-semibold">
                  Deductible met: $1,120 / $1,500
                </p>
              </div>
            </Float>
            <Float className="absolute -right-6 -top-10 hidden md:block">
              <div className="flex items-center gap-1 rounded-full bg-white py-1 pl-1 pr-4 shadow-[0_16px_40px_-12px_rgba(0,0,0,.5)]">
                <LottieAnim name="voice-pulse" className="h-14 w-14" />
                <span className="text-xs font-semibold">
                  Agent on hold
                  <br />
                  <span className="font-normal text-ink/55">
                    so your team isn&apos;t
                  </span>
                </span>
              </div>
            </Float>
          </PopIn>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="border-y border-ink/10 bg-cream-200/60 py-8">
        <div className="container">
          <p className="mb-5 text-center text-xs font-semibold uppercase tracking-[.16em] text-ink/50">
            Built for teams across healthcare
          </p>
          <Marquee
            items={audiences
              .map((a) => a.name)
              .concat([
                "Specialty pharmacies",
                "Billing services",
                "ASCs",
                "Labs & imaging",
              ])}
          />
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="section">
        <div className="container grid gap-12 lg:grid-cols-2 lg:items-end">
          <SectionHead
            eyebrow="The problem"
            title="Revenue cycle teams lose hours every day to payer phone lines."
          />
          <Reveal delay={0.15}>
            <p className="lead">
              Portals don&apos;t cover everything, so staff sit on hold for
              basic answers. Greenline Voice handles those calls end to end,
              from navigating phone trees to talking with reps and recording
              what they say, so your team only works the cases that need
              judgment.
            </p>
          </Reveal>
        </div>
        <div className="container mt-12">
          <Stats items={homeStats} />
        </div>
      </section>

      {/* INPUTS / CHANNELS / OUTPUTS */}
      <section className="section bg-forest text-cream relative overflow-hidden">
        <div className="absolute inset-0 grid-bg-dark opacity-50" />
        <div className="container relative">
          <SectionHead
            dark
            eyebrow="How it works"
            title="One platform for payer phone calls."
            intro="Work comes in from your systems, agents reach the payer and answers go back where your team works."
          />
          <Reveal className="mx-auto mt-12 max-w-3xl">
            <LottieAnim
              name="data-flow"
              className="h-28 sm:h-40"
              label="Requests flow from your systems through a Greenline agent and back as structured results"
            />
          </Reveal>
          <Stagger className="mt-14 grid gap-4 lg:grid-cols-3">
            {channels.map((c, i) => (
              <StaggerItem
                key={c.k}
                className="relative rounded-3xl border border-cream/10 bg-forest-800 p-7 transition hover:border-lime/40"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[.14em] text-lime">
                    {c.k}
                  </span>
                  <span className="font-mono text-xs text-cream/40">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-4 text-2xl font-medium">{c.title}</h3>
                <div className="mt-6">
                  <CheckList dark items={c.items} />
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* CALL DEMO */}
      <section id="listen" className="section scroll-mt-28">
        <div className="container">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHead
              eyebrow="Listen in"
              title="Hear an agent work a real-world call."
              intro="Choose a workflow and press play to watch the agent capture structured data as the call happens."
            />
          </div>
          <Reveal
            y={40}
            className="mt-12 rounded-[2.5rem] bg-forest p-2 sm:p-3"
          >
            <CallDemo items={workflows} />
          </Reveal>
          <Stagger className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {workflows.map((w) => (
              <StaggerItem key={w.slug}>
                <Link
                  href={`/workflows/${w.slug}`}
                  className="group card flex h-full items-center justify-between p-5 transition hover:-translate-y-1"
                >
                  <span>
                    <span className="block font-semibold">{w.name}</span>
                    <span className="text-xs text-ink/55">{w.short}</span>
                  </span>
                  <Arrow className="h-4 w-4 shrink-0 text-leaf transition group-hover:translate-x-1" />
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* FEATURES */}
      <section className="section bg-cream-200/60">
        <div className="container">
          <SectionHead
            center
            eyebrow="Platform"
            title="More than a dialer."
            intro="Everything your team needs to trust automated calls and act on the results."
          />
          <div className="mt-14">
            <FeatureGrid
              items={[
                {
                  icon: <Phone />,
                  title: "Human-quality conversations",
                  body: "Agents handle IVRs, holds, transfers and live reps, and ask follow-up questions when the first answer is incomplete.",
                },
                {
                  icon: <Doc />,
                  title: "Structured, validated data",
                  body: "Every answer maps to a typed field, gets checked against your rules and includes the payer's reference number.",
                },
                {
                  icon: <Plug />,
                  title: "Fits your stack",
                  body: "Write results back to your PM or EHR, or use our API, webhooks or file drops. No new screens required.",
                },
                {
                  icon: <Chart />,
                  title: "Ops visibility",
                  body: "Track volume, completion rate, hold time saved and exception trends by payer and workflow.",
                },
                {
                  icon: <Shield />,
                  title: "Secure by design",
                  body: "Encryption, SSO, role-based access and full audit logs for every call, built for PHI from day one.",
                },
                {
                  icon: <Bolt />,
                  title: "Humans in the loop",
                  body: "Unclear calls go to a review queue with the recording and transcript, so nothing gets lost.",
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* SECURITY */}
      <section className="section">
        <div className="container grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHead
              eyebrow="Security"
              title="PHI protection is built in from the start."
              intro="Our platform is built for healthcare data from the ground up. We sign a BAA with every customer and treat each call as an auditable record."
            />
            <Link href="/security" className="btn-ghost mt-8">
              Visit the security center <Arrow className="h-4 w-4" />
            </Link>
          </div>
          <Stagger className="grid grid-cols-2 gap-3">
            {[
              "HIPAA-aligned controls",
              "Encryption in transit & at rest",
              "SSO / SAML & RBAC",
              "Full audit trails",
              "Data never used for shared training",
              "Regular third-party testing",
            ].map((b) => (
              <StaggerItem
                key={b}
                className="flex items-center gap-3 rounded-2xl border border-ink/10 bg-white p-4 text-sm font-medium"
              >
                <Shield className="h-5 w-5 shrink-0 text-leaf" /> {b}
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* INTEGRATIONS */}
      <section className="section bg-cream-200/60">
        <div className="container">
          <SectionHead
            center
            eyebrow="Integrations"
            title="Connects to the tools you already use."
            intro="Native connectors, a REST API and file-based options, so you can go live without changing your workflows."
          />
          <div className="mt-12">
            <Integrations />
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="section">
        <div className="container">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHead
              eyebrow="Results"
              title="Teams see results in weeks."
            />
            <Link
              href="/case-studies"
              className="btn-ghost self-start md:self-auto"
            >
              All case studies <Arrow className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.slice(0, 3).map((c, i) => (
              <CaseCard key={c.slug} c={c} i={i} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section pt-0">
        <div className="container grid gap-10 lg:grid-cols-[1fr_2fr]">
          <SectionHead eyebrow="FAQ" title="Common questions" />
          <Faq />
        </div>
      </section>

      <CTA />
    </>
  );
}
