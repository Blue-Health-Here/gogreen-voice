import type { Metadata } from "next";
import Link from "next/link";
import { CallDemo } from "@/components/CallDemo";
import { LottieAnim } from "@/components/LottieAnim";
import { Stagger, StaggerItem } from "@/components/Motion";
import {
  CTA,
  CheckList,
  FeatureGrid,
  PageHero,
  SectionHead,
  Stats,
} from "@/components/Sections";
import { Arrow, Bolt, Doc, Eye, Phone, Plug, Shield } from "@/components/Icons";
import { workflows } from "@/lib/content";

export const metadata: Metadata = {
  title: "Voice agents",
  description: "AI voice agents that make the payer calls for you.",
};

export default function VoiceAgents() {
  return (
    <>
      <PageHero
        dark
        eyebrow="Voice agents"
        title="Agents that make the payer call for you."
        intro="Plenty of payer answers still live behind a phone line, not a portal. GreenLine Voice agents place the call, work the IVR, hold as long as it takes, and come back with a structured answer, so your team is never the one on hold."
      >
        <div className="mt-14">
          <CallDemo items={workflows} />
        </div>
      </PageHero>

      <section className="section">
        <div className="container">
          <SectionHead
            center
            eyebrow="Why voice still matters"
            title="Some payer answers only live behind a phone line."
            intro="Portals, EDI feeds and APIs cover a lot, but carve-outs, exceptions and payer-specific rules often only surface through an IVR or a live rep. GreenLine Voice places that call, follows the payer's own logic, and turns the conversation into a result your systems can use, so phone work becomes programmatic, repeatable and easy to audit instead of a one-off chore."
          />
        </div>
      </section>

      <section className="section bg-cream-200/60">
        <div className="container grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHead
              eyebrow="What agents handle"
              title="They work the call the way your best caller would."
            />
            <LottieAnim
              name="voice-pulse"
              className="mx-auto mt-6 h-64 w-64 lg:mx-0"
              label="Animated voice agent on a call"
            />
          </div>
          <CheckList
            items={[
              "Authenticate each call with the NPI, tax ID, date of birth, member ID or claim number a payer asks for",
              "Navigate IVRs, prompts, transfers and reconnects without losing the thread",
              "Hold for as long as it takes, across many calls running at once",
              "Talk with a live rep and ask follow-up questions when an answer is incomplete",
              "Capture every answer as a structured field, not just a transcript",
              "Record, transcribe and summarize the call automatically",
              "Attach source notes, timestamps and a confidence score to every field",
              "Escalate anything uncertain to a reviewer, with full context attached",
            ]}
          />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Configurable by design"
            title="Built around your scripts, not the other way around."
          />
          <div className="mt-12">
            <FeatureGrid
              items={[
                {
                  icon: <Doc />,
                  title: "Your scripts & disclosures",
                  body: "Question blocks, call flows and required disclosure language are set to match how your team already talks with payers.",
                },
                {
                  icon: <Bolt />,
                  title: "Retry & escalation rules",
                  body: "Decide how many attempts a call gets, when to switch channels, and when a case should go straight to a person.",
                },
                {
                  icon: <Phone />,
                  title: "Voice & pacing",
                  body: "Choose the voice and pace that fits your brand and the payers your team calls most.",
                },
                {
                  icon: <Shield />,
                  title: "Governed access",
                  body: "Role-based permissions, scoped access and a signed BAA come standard with every deployment.",
                },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="section bg-cream-200/60">
        <div className="container">
          <SectionHead
            eyebrow="Output formats"
            title="Results show up where your team already works."
          />
          <div className="mt-12">
            <FeatureGrid
              items={[
                {
                  icon: <Eye />,
                  title: "Portal",
                  body: "A searchable workspace with recordings, transcripts, results and dashboards, plus a queue for anything flagged for review.",
                },
                {
                  icon: <Doc />,
                  title: "Files",
                  body: "Download CSV or PDF exports for batch reporting and offline review.",
                },
                {
                  icon: <Plug />,
                  title: "EHR / PM write-back",
                  body: "Statuses and notes map straight into the fields your system already uses.",
                },
                {
                  icon: <Bolt />,
                  title: "API & webhooks",
                  body: "Subscribe to real-time events for every call, with a structured JSON payload for each result.",
                },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Hear it in action"
            title="Listen to how each workflow runs."
            intro="Every sample pairs the live conversation with the structured fields it produced."
          />
          <Stagger className="mt-10 grid gap-3 sm:grid-cols-2">
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

      <section className="section bg-cream-200/60">
        <div className="container grid gap-12 lg:grid-cols-2 lg:items-center">
          <SectionHead
            eyebrow="When it needs a human"
            title="Escalations arrive ready to act on, not as a mystery ticket."
            intro="If a call needs judgment, is missing a required input, or hits a step only a person can clear, GreenLine Voice hands it off immediately with everything a reviewer needs."
          />
          <CheckList
            items={[
              "What was attempted, including every channel and attempt tried",
              "What was captured before the case needed a human",
              "What's still missing and why the call couldn't finish on its own",
              "A recommended next step, so your team starts solving instead of researching",
            ]}
          />
        </div>
      </section>

      <section className="section bg-forest text-cream">
        <div className="container">
          <SectionHead
            dark
            eyebrow="Quality"
            title="Accuracy you can measure, and prove."
            intro="Every call is scored for accuracy, and anything below your threshold goes to review before it ever reaches your systems."
          />
          <div className="mt-12">
            <Stats
              dark
              items={[
                { stat: "99%", label: "field accuracy target (illustrative)" },
                { stat: "100%", label: "calls recorded & transcribed" },
                { stat: "<1 min", label: "from hang-up to write-back" },
                { stat: "∞", label: "patience on hold" },
              ]}
            />
          </div>
          <div className="mt-14 grid gap-10 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-medium text-cream">
                What you can track
              </h3>
              <div className="mt-5">
                <CheckList
                  dark
                  items={[
                    "Calls completed, split between fully automated and human-assisted",
                    "Average handle time saved and hold time avoided",
                    "Field-level accuracy and how often a call needs review",
                    "Added capacity, measured in FTE-equivalent hours",
                    "Throughput by workflow, payer and team",
                  ]}
                />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-cream">
                What good looks like
              </h3>
              <div className="mt-5">
                <CheckList
                  dark
                  items={[
                    "Lower handle time with far fewer manual holds",
                    "More throughput without adding headcount",
                    "Staff spending more time on cases that actually need judgment",
                    "Consistent, on-time follow-up across every open workflow",
                    "Structured, traceable results that drop straight into your systems",
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA
        title="Stop sending your team to the phone."
        body="Send GreenLine Voice instead, and let your staff spend their time on the cases that actually need them."
      />
    </>
  );
}
