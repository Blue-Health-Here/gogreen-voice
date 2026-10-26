import type { Metadata } from "next";
import Link from "next/link";
import { CTA, CheckList, Faq, SectionHead } from "@/components/Sections";
import { Arrow } from "@/components/Icons";
import { PrintButton } from "@/components/PrintButton";
import { workflows } from "@/lib/content";

export const metadata: Metadata = {
  title: "Free superbill template",
  description:
    "A free, printable superbill template for out-of-network claims, with every field payers expect.",
};

const blank = "border-b border-ink/30 min-h-7";
const Field = ({ label }: { label: string }) => (
  <div>
    <p className="text-[10px] font-semibold uppercase tracking-wider text-ink/50">
      {label}
    </p>
    <div className={blank} />
  </div>
);

const faqs = [
  {
    q: "What is a superbill?",
    a: "An itemized receipt a provider gives a patient that lists diagnosis and procedure codes, so the patient can file an out-of-network claim with their insurer.",
  },
  {
    q: "Who fills it out?",
    a: "The provider or their billing staff complete it after the visit. The patient submits it to their insurer with the plan's claim form.",
  },
  {
    q: "Do I need codes on it?",
    a: "Yes. Insurers generally require ICD-10 diagnosis codes and CPT or HCPCS procedure codes, plus the provider's NPI and tax ID.",
  },
  {
    q: "Can I edit this template?",
    a: "Print it and fill it in by hand, or save it as a PDF and add text with any PDF editor.",
  },
];

export default function SuperbillTemplate() {
  return (
    <>
      <section className="relative overflow-hidden print:hidden">
        <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
        <div className="container relative pt-16 pb-12 md:pt-24">
          <span className="eyebrow">Free template</span>
          <h1 className="mt-5 max-w-4xl text-4xl font-medium leading-[1.02] sm:text-5xl md:text-6xl">
            A free superbill template your patients can actually get reimbursed
            with.
          </h1>
          <p className="lead mt-6 max-w-2xl">
            Every field out-of-network claims usually need, on one printable
            page. No signup required.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <PrintButton />
            <Link href="/blog/what-is-a-superbill" className="btn-ghost">
              What is a superbill?
            </Link>
          </div>
        </div>
      </section>

      <section className="section pt-0 print:p-0">
        <div className="container max-w-4xl print:max-w-none print:p-0">
          <div className="card p-8 text-sm md:p-12 print:border-0 print:shadow-none">
            <div className="flex items-start justify-between gap-6 border-b border-ink/15 pb-6">
              <div>
                <p className="font-display text-3xl">Superbill</p>
                <p className="text-ink/55">
                  Statement for insurance reimbursement
                </p>
              </div>
              <div className="w-40">
                <Field label="Date issued" />
              </div>
            </div>
            <div className="mt-8 grid gap-8 md:grid-cols-2 print:grid-cols-2">
              <div className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[.14em] text-leaf">
                  Provider
                </p>
                <Field label="Provider name & credentials" />
                <Field label="Practice name" />
                <Field label="Address" />
                <div className="grid grid-cols-2 gap-4">
                  <Field label="NPI" />
                  <Field label="Tax ID (EIN/SSN)" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Field label="Phone" />
                  <Field label="License #" />
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[.14em] text-leaf">
                  Patient
                </p>
                <Field label="Patient name" />
                <div className="grid grid-cols-2 gap-4">
                  <Field label="Date of birth" />
                  <Field label="Phone" />
                </div>
                <Field label="Address" />
                <div className="grid grid-cols-2 gap-4">
                  <Field label="Insurance plan" />
                  <Field label="Member ID" />
                </div>
              </div>
            </div>
            <p className="mt-10 text-xs font-semibold uppercase tracking-[.14em] text-leaf">
              Diagnosis codes (ICD-10)
            </p>
            <div className="mt-3 grid grid-cols-4 gap-4">
              {["A", "B", "C", "D"].map((k) => (
                <Field key={k} label={`Dx ${k}`} />
              ))}
            </div>
            <p className="mt-10 text-xs font-semibold uppercase tracking-[.14em] text-leaf">
              Services
            </p>
            <table className="mt-3 w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-ink/30 text-[10px] uppercase tracking-wider text-ink/50">
                  {[
                    "Date of service",
                    "Place",
                    "CPT/HCPCS",
                    "Modifier",
                    "Dx pointer",
                    "Units",
                    "Fee",
                  ].map((h) => (
                    <th key={h} className="py-2 pr-2 font-semibold">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[0, 1, 2, 3, 4].map((r) => (
                  <tr key={r} className="border-b border-ink/15">
                    {[0, 1, 2, 3, 4, 5, 6].map((c) => (
                      <td key={c} className="h-9" />
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-6 ml-auto grid max-w-xs gap-3">
              <Field label="Total charges" />
              <Field label="Amount paid" />
              <Field label="Balance due" />
            </div>
            <div className="mt-10 grid gap-8 md:grid-cols-2 print:grid-cols-2">
              <Field label="Provider signature" />
              <Field label="Date" />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-cream-200/60 print:hidden">
        <div className="container grid gap-12 lg:grid-cols-2">
          <SectionHead
            eyebrow="Checklist"
            title="What every superbill should include"
            intro="Missing any of these is a common reason out-of-network claims get returned."
          />
          <CheckList
            items={[
              "Provider name, address, NPI and tax ID",
              "Patient name, date of birth and member ID",
              "Date and place of service for each line",
              "ICD-10 diagnosis codes linked to each service",
              "CPT or HCPCS codes with any modifiers",
              "Fee per service, amount paid and balance",
              "Provider signature and date",
            ]}
          />
        </div>
      </section>

      <section className="section print:hidden">
        <div className="container">
          <SectionHead
            eyebrow="After the superbill"
            title="Let AI handle the payer calls that come next."
            intro="GreenLine Voice calls payers to check benefits, follow up on authorizations and track claims, then sends structured results back to your systems."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {workflows.map((w) => (
              <Link
                key={w.slug}
                href={`/workflows/${w.slug}`}
                className="group card p-6"
              >
                <h3 className="text-xl font-medium">{w.name}</h3>
                <p className="mt-2 text-sm text-ink/60">{w.short}</p>
                <Arrow className="mt-6 h-5 w-5 text-leaf transition group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section pt-0 print:hidden">
        <div className="container grid gap-10 lg:grid-cols-[1fr_2fr]">
          <SectionHead eyebrow="FAQ" title="Superbill questions" />
          <Faq items={faqs} />
        </div>
      </section>
      <div className="print:hidden">
        <CTA />
      </div>
    </>
  );
}
