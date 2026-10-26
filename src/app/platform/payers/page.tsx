import type { Metadata } from "next";
import {
  CTA,
  CheckList,
  FeatureGrid,
  Integrations,
  PageHero,
  SectionHead,
  Stats,
} from "@/components/Sections";
import { Chart, Doc, Eye, Phone, Shield, Users } from "@/components/Icons";
import { audiences } from "@/lib/content";

const a = audiences.find((x) => x.slug === "payers")!;

export const metadata: Metadata = {
  title: "For payers",
  description:
    "Automate provider outreach for health plan network and operations teams.",
};

const record = `{
  "provider_npi": "1234567890",
  "outreach": "directory_attestation",
  "address_confirmed": true,
  "accepting_new_patients": false,
  "phone_updated": "(555) 010-2299",
  "telehealth": true,
  "attested_by": "Office manager",
  "call_reference": "GG-48213",
  "recording": "available"
}`;

export default function Payers() {
  return (
    <>
      <PageHero
        eyebrow="For payers"
        title="Automate provider outreach for network and operations teams."
        intro="Health plans use GreenLine Voice to reach provider offices by phone at scale: directory checks, network updates and document follow-ups, with every answer returned as structured data."
      />
      <section className="section pt-0">
        <div className="container">
          <Stats items={a.outcomes} />
        </div>
      </section>
      <section className="section bg-cream-200/60">
        <div className="container grid gap-12 lg:grid-cols-2">
          <SectionHead
            eyebrow="The problem"
            title="Network operations still run on scattered outreach."
            intro="Provider data goes stale quickly, and offices rarely reply to faxes, emails or portal requests. Teams end up chasing the same practices by phone every quarter."
          />
          <CheckList
            items={a.pains.concat([
              "Outreach results live in spreadsheets, not systems",
              "Hard to prove good-faith effort to regulators",
            ])}
          />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Use cases"
            title="One platform for the provider calls your network depends on."
          />
          <div className="mt-12">
            <FeatureGrid
              items={[
                {
                  icon: <Doc />,
                  title: "Directory attestation",
                  body: "Confirm addresses, phone numbers, specialties and panel status on a schedule you set.",
                },
                {
                  icon: <Users />,
                  title: "Network participation",
                  body: "Check which locations and clinicians are still seeing members under each contract.",
                },
                {
                  icon: <Phone />,
                  title: "Records & document requests",
                  body: "Follow up on outstanding medical records, W-9s and credentialing documents.",
                },
                {
                  icon: <Eye />,
                  title: "Access & availability",
                  body: "Run secret-shopper-style appointment availability checks to measure access standards.",
                },
                {
                  icon: <Chart />,
                  title: "Outreach campaigns",
                  body: "Notify offices about policy, fee schedule or portal changes and confirm receipt.",
                },
                {
                  icon: <Shield />,
                  title: "Audit-ready evidence",
                  body: "Every attempt is logged with timestamps, recordings and outcomes for regulators.",
                },
              ]}
            />
          </div>
        </div>
      </section>
      <section className="section bg-forest text-cream">
        <div className="container grid items-center gap-12 lg:grid-cols-2">
          <SectionHead
            dark
            eyebrow="Structured data"
            title="Provider data you can load, not call notes you have to read."
            intro="Each call returns a typed record for your provider data system, along with the recording and transcript for anyone who needs to check the details."
          />
          <pre className="overflow-x-auto rounded-3xl bg-forest-900 p-6 text-sm leading-relaxed text-lime">
            <code>{record}</code>
          </pre>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Same problem, other side"
            title="Different buyer, same phone-call problem."
            intro="Providers wait on hold to reach payers, and payers struggle to reach providers. GreenLine Voice uses the same voice agents for both."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {[
              {
                k: "Provider side",
                items: [
                  "Benefits verification",
                  "Prior authorization follow-up",
                  "Claim status & denials",
                  "Credentialing status",
                ],
              },
              {
                k: "Payer side",
                items: [
                  "Directory attestation",
                  "Network participation checks",
                  "Document & records requests",
                  "Access & availability audits",
                ],
              },
            ].map((c) => (
              <div key={c.k} className="card p-7">
                <p className="text-xs font-semibold uppercase tracking-[.14em] text-leaf">
                  {c.k}
                </p>
                <div className="mt-5">
                  <CheckList items={c.items} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section bg-cream-200/60">
        <div className="container">
          <SectionHead
            center
            eyebrow="Integrations"
            title="Keep your current operations stack."
          />
          <div className="mt-12">
            <Integrations />
          </div>
        </div>
      </section>
      <CTA
        title="Update provider outreach without rebuilding your stack."
        body="See GreenLine Voice run a directory or network outreach campaign in a 30-minute demo."
      />
    </>
  );
}
