import type { Metadata } from "next";
import { CTA, FeatureGrid, PageHero } from "@/components/Sections";
import { Eye, Lock, Shield, Users, Doc, Bolt } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Security",
  description: "How GreenLine Health protects PHI.",
};

export default function Security() {
  return (
    <>
      <PageHero
        eyebrow="Security center"
        title="Built to protect patient data."
        intro="Security isn't an add-on at GreenLine Health. It's part of how we design, build and run the platform. Request our security package for full details."
      />
      <section className="section pt-0">
        <div className="container">
          <FeatureGrid
            items={[
              {
                icon: <Doc />,
                title: "BAA for every customer",
                body: "We sign a Business Associate Agreement before any PHI is processed.",
              },
              {
                icon: <Lock />,
                title: "Encryption",
                body: "TLS 1.2+ in transit and AES-256 at rest for recordings, transcripts and results.",
              },
              {
                icon: <Users />,
                title: "Access control",
                body: "SSO/SAML, MFA and least-privilege, role-based permissions.",
              },
              {
                icon: <Eye />,
                title: "Audit logging",
                body: "Every access, export and configuration change is logged and retained.",
              },
              {
                icon: <Shield />,
                title: "Model privacy",
                body: "Customer data is never used to train shared models without written consent.",
              },
              {
                icon: <Bolt />,
                title: "Testing & monitoring",
                body: "Regular penetration tests, vulnerability scanning and 24/7 alerting.",
              },
            ]}
          />
          <p className="mt-8 text-sm text-ink/50">
            Replace these items with your verified certifications and controls
            before launch.
          </p>
        </div>
      </section>
      <CTA
        title="Need our security package?"
        body="Ask for our security questionnaire responses, policies and BAA template."
      />
    </>
  );
}
