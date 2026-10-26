import type { Metadata } from "next";
import { ProductMock } from "@/components/ProductMock";
import { LottieAnim } from "@/components/LottieAnim";
import {
  CTA,
  FeatureGrid,
  Integrations,
  PageHero,
  SectionHead,
  Steps,
} from "@/components/Sections";
import {
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
  description: "One platform to automate, monitor and audit every payer call.",
};

export default function Platform() {
  return (
    <>
      <PageHero
        eyebrow="Platform"
        title="The control center for every payer call."
        intro="Queue work, watch agents in real time, review exceptions and send results to your systems from one secure workspace."
      >
        <div className="mt-14">
          <ProductMock />
        </div>
      </PageHero>
      <section className="section bg-cream-200/60">
        <div className="container">
          <SectionHead
            eyebrow="Lifecycle"
            title="From request to result in three steps."
          />
          <div className="mx-auto mt-10 max-w-3xl rounded-3xl bg-forest p-6">
            <LottieAnim
              name="data-flow"
              className="h-28 sm:h-36"
              label="Requests flow through a GreenLine agent and back as results"
            />
          </div>
          <div className="mt-12">
            <Steps
              items={[
                {
                  title: "Ingest",
                  body: "Worklists sync from your PM/EHR, API, or file drops, and rules decide what to call and when.",
                },
                {
                  title: "Execute",
                  body: "Voice agents call payers in parallel, retry intelligently and switch channels when a portal is faster.",
                },
                {
                  title: "Deliver",
                  body: "Validated results are written back, exceptions go to review and every call is archived for audit.",
                },
              ]}
            />
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Capabilities"
            title="Built for operations teams."
          />
          <div className="mt-12">
            <FeatureGrid
              items={[
                {
                  icon: <Users />,
                  title: "Worklists & rules",
                  body: "Prioritize by date of service, balance, payer or SLA. Schedule calls during payer business hours automatically.",
                },
                {
                  icon: <Eye />,
                  title: "Live monitoring",
                  body: "Watch calls in progress, listen in, and see exactly where each request stands.",
                },
                {
                  icon: <Doc />,
                  title: "Exception review",
                  body: "Calls that need judgment go to a queue with the recording, transcript and suggested next step.",
                },
                {
                  icon: <Chart />,
                  title: "Analytics",
                  body: "Completion rate, handle time, payer performance and denial trends, ready to export.",
                },
                {
                  icon: <Plug />,
                  title: "API & webhooks",
                  body: "Programmatic access to every request and result, with signed webhooks.",
                },
                {
                  icon: <Shield />,
                  title: "Governance",
                  body: "SSO, granular roles, data retention controls and immutable audit logs.",
                },
                {
                  icon: <Phone />,
                  title: "Payer playbooks",
                  body: "Payer-specific call scripts keep improving as agents learn each phone tree.",
                },
                {
                  icon: <Bolt />,
                  title: "Elastic capacity",
                  body: "Scale from dozens to thousands of calls a day without hiring.",
                },
              ]}
            />
          </div>
        </div>
      </section>
      <section className="section bg-cream-200/60">
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
      <CTA />
    </>
  );
}
