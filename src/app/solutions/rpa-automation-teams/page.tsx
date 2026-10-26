import type { Metadata } from "next";
import { CTA, FeatureGrid, PageHero, SectionHead } from "@/components/Sections";
import { Bolt, Doc, Plug, Shield } from "@/components/Icons";
import { brand } from "@/lib/site";

export const metadata: Metadata = {
  title: "For automation teams",
  description: "API-first payer calling for RPA and engineering teams.",
};

const sample = `POST /v1/calls
{
  "workflow": "benefits_verification",
  "payer_id": "PAYER_123",
  "member": { "id": "W442819003", "dob": "1986-03-14" },
  "services": ["99214"],
  "webhook_url": "https://example.com/hooks/GreenLine"
}`;

export default function Automation() {
  return (
    <>
      <PageHero
        eyebrow="For automation teams"
        title="Where your bots stop, our agents take over."
        intro="RPA works well with portals, but phone calls are harder. Add GreenLine Voice to your automation stack with one API call."
      >
        <pre className="mt-12 overflow-x-auto rounded-3xl bg-forest-900 p-6 text-sm leading-relaxed text-lime">
          <code>{sample}</code>
        </pre>
      </PageHero>
      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Developer experience"
            title="Built for engineers."
          />
          <div className="mt-12">
            <FeatureGrid
              items={[
                {
                  icon: <Plug />,
                  title: "REST API",
                  body: "Create calls, fetch results and manage worklists with documented, versioned endpoints.",
                },
                {
                  icon: <Bolt />,
                  title: "Signed webhooks",
                  body: "Get call.started, call.completed and call.needs_review events in real time.",
                },
                {
                  icon: <Doc />,
                  title: "Typed schemas",
                  body: "Results follow stable JSON schemas for each workflow, so downstream parsing stays simple.",
                },
                {
                  icon: <Shield />,
                  title: "Sandbox",
                  body: "Test with simulated payers before you go live with PHI.",
                },
              ]}
            />
          </div>
          <a href={brand.docsUrl} className="btn-dark mt-10">
            Read the API docs
          </a>
        </div>
      </section>
      <CTA />
    </>
  );
}
