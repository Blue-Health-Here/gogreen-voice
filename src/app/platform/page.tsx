import type { Metadata } from "next";
import Link from "next/link";
import { ProductMock } from "@/components/ProductMock";
import { LottieAnim } from "@/components/LottieAnim";
import { Reveal } from "@/components/Motion";
import {
  CTA,
  CheckList,
  FeatureGrid,
  Integrations,
  PageHero,
  SectionHead,
  Steps,
} from "@/components/Sections";
import {
  Arrow,
  Bolt,
  Chart,
  Doc,
  Eye,
  Phone,
  Plug,
  Shield,
  Users,
} from "@/components/Icons";

export const metadata: Metadata = {
  title: "Platform",
  description:
    "One workspace for payer calls, payer portals, and structured payer data.",
};

export default function Platform() {
  return (
    <>
      <PageHero
        eyebrow="Platform"
        title="One workspace for calls, portals, and clean payer data."
        intro="Greenline Voice sits between your revenue cycle systems and every payer, combining voice calling, portal automation, EDI/API lookups and document capture, so your team gets a structured answer instead of another manual back-and-forth."
      >
        <div className="mt-14">
          <ProductMock />
        </div>
      </PageHero>

      <section className="section bg-cream-200/60">
        <div className="container">
          <SectionHead
            eyebrow="Channels"
            title="Built around how payers actually respond."
          />
          <div className="mt-12">
            <FeatureGrid
              items={[
                {
                  icon: <Phone />,
                  title: "Voice calling",
                  body: "Agents dial the payer line, work through the IVR, hold as long as it takes, and talk with a live rep until there's a real answer.",
                },
                {
                  icon: <Eye />,
                  title: "Portal automation",
                  body: "When a payer answers faster online, agents log into the portal, pull status and documents, and lift out the fields that matter.",
                },
                {
                  icon: <Plug />,
                  title: "EDI & API lookups",
                  body: "Structured channels are tried first wherever a payer supports them, with automatic escalation to a call when data comes back thin or missing.",
                },
                {
                  icon: <Doc />,
                  title: "Structured output",
                  body: "Every result lands in the schema your team defines, with the source evidence attached, so it's easy to trust and easy to audit.",
                },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal y={30} className="card mx-auto max-w-3xl p-8 md:p-12">
            <p className="text-xl font-medium leading-relaxed text-ink md:text-2xl">
              &ldquo;Greenline checks our payer portals and EDI feeds first, so
              our team only gets pulled onto a call when that&apos;s truly the
              only way to get an answer. We got hours back every week that
              used to disappear into hold music.&rdquo;
            </p>
            <div className="mt-6 flex items-center gap-3">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-mint-100 font-semibold text-leaf">
                JA
              </div>
              <div>
                <p className="font-semibold">Jordan Avery</p>
                <p className="text-sm text-ink/60">
                  Director of Operations, Summit Neuromonitoring (sample)
                </p>
              </div>
            </div>
            <Link
              href="/case-study/summit-neuromonitoring"
              className="btn-ghost mt-6 inline-flex"
            >
              Read the case study <Arrow className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section bg-cream-200/60">
        <div className="container">
          <SectionHead
            eyebrow="Workspace"
            title="Run every payer workflow from one screen."
            intro="A single place to pick a script, watch a batch run and pull the results, instead of juggling spreadsheets and call logs."
          />
          <div className="mt-12">
            <FeatureGrid
              items={[
                {
                  icon: <Users />,
                  title: "Template library",
                  body: "Start from ready-made scripts for common payer workflows, then adjust the questions and fields until they match how your team already works.",
                },
                {
                  icon: <Bolt />,
                  title: "Modular call flows",
                  body: "Reusable blocks for IVR steps, rep questions, follow-ups and document requests, with logic that skips a question once it's already answered.",
                },
                {
                  icon: <Phone />,
                  title: "Managed payer directory",
                  body: "A maintained database of payer phone numbers. Your preferred numbers are tried first, with automatic fallback to the broader directory.",
                },
                {
                  icon: <Chart />,
                  title: "Live dashboards",
                  body: "Watch a batch as it runs, with outcomes, next steps and completion rates for every workflow in one view.",
                },
                {
                  icon: <Doc />,
                  title: "Executive exports",
                  body: "Pull CSV reports for leadership reviews, payer-level analysis or an operational follow-up list, whenever you need them.",
                },
                {
                  icon: <Shield />,
                  title: "Governance & audit",
                  body: "SSO, granular roles, retention controls and an immutable record of every call and every result.",
                },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-12 lg:grid-cols-2 lg:items-center">
          <SectionHead
            eyebrow="Why it's different"
            title="Not a generic bot, and not a single-channel tool."
            intro="Every payer runs its own phone tree, its own scripts, its own portal quirks and its own exceptions. Greenline Voice is built around those differences: it learns which path gets an answer fastest for each payer, runs the workflow, and returns the result with the evidence behind it."
          />
          <Reveal delay={0.15}>
            <CheckList
              items={[
                "Payer-specific playbooks that keep improving as agents learn each phone tree and portal",
                "Automatic fallback between calls, portals and EDI when one path stalls",
                "Every answer backed by a recording, transcript or document as evidence",
                "Elastic capacity that scales from dozens to thousands of requests a day",
              ]}
            />
          </Reveal>
        </div>
      </section>

      <section className="section bg-cream-200/60">
        <div className="container">
          <SectionHead
            eyebrow="Rollout"
            title="Start with one workflow, expand once it's proven."
          />
          <div className="mx-auto mt-10 max-w-3xl rounded-3xl bg-forest p-6">
            <LottieAnim
              name="data-flow"
              className="h-28 sm:h-36"
              label="Requests flow through a Greenline agent and back as results"
            />
          </div>
          <div className="mt-12">
            <Steps
              items={[
                {
                  title: "Validate",
                  body: "Pick one workflow and run it against a representative batch. Confirm the script, the output fields and the exception path before scaling up.",
                },
                {
                  title: "Integrate",
                  body: "Move from a pilot to API-triggered runs and signed webhooks, with results written back into the PM or EHR your team already uses.",
                },
                {
                  title: "Launch",
                  body: "Turn on dashboards and reporting for the teams that are ready, then add the next workflow once this one runs on its own.",
                },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead
            center
            eyebrow="Integrations"
            title="Fits the tools you already use."
          />
          <div className="mt-12">
            <Integrations />
          </div>
        </div>
      </section>

      <CTA
        title="Have a payer workflow you still run by hand?"
        body="Send it over and we'll map the fields, run the calls and portals, and show you exactly what a structured result looks like."
      />
    </>
  );
}
