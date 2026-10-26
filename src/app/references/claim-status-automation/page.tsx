import type { Metadata } from "next";
import Link from "next/link";
import { CTA, Faq } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Claim status automation: a reference guide",
  description: "How claim status automation works, why portals aren't enough, how voice agents handle payer IVRs and what to look for in a vendor.",
};

const toc = [
  { id: "glance", label: "At a glance" },
  { id: "what", label: "What it is" },
  { id: "portals", label: "Why portals fall short" },
  { id: "ivr", label: "How agents handle IVRs" },
  { id: "writeback", label: "Writing results back" },
  { id: "evaluate", label: "Evaluating vendors" },
  { id: "gogreen", label: "GoGreen Voice" },
  { id: "faq", label: "FAQ" },
];

const compare = [
  ["Time per claim", "Hold time plus the call itself, often most of an hour (illustrative)", "Runs in the background, many calls in parallel"],
  ["Coverage hours", "Staffed business hours", "Any hours the payer line is open"],
  ["Documentation", "Free-text notes, varies by caller", "Same structured fields on every call, plus recording"],
  ["Scaling", "Hire and train more callers", "Raise concurrency"],
  ["Exceptions", "Handled by the same caller", "Sent to a review queue with full context"],
];

const faqs = [
  { q: "How does claim status automation work?", a: "Open claims are pulled from your billing system, an agent calls the right payer line, works through the IVR and any rep conversation, and returns status, dates, amounts and next steps as structured data." },
  { q: "Does it work with every payer?", a: "Phone lines exist for nearly every payer, which is why voice covers gaps that electronic transactions and portals leave. Coverage per payer should be confirmed during your pilot." },
  { q: "Will payer reps know they are talking to an AI?", a: "They should. Responsible agents identify themselves as automated callers acting for the provider and follow each payer's rules for automated calls." },
  { q: "How accurate are the results?", a: "Accuracy depends on the vendor's validation. Look for field-level checks, recordings on every call and a human review queue for anything ambiguous. Measure it on your own claims during a pilot." },
  { q: "Which systems can results be written back to?", a: "Most teams use a direct PM or EHR integration, an API with webhooks, or scheduled file exports into work queues their billers already use." },
  { q: "Is claim status automation HIPAA compliant?", a: "It can be. Require a BAA, encryption in transit and at rest, access controls, and retention policies for recordings and transcripts." },
  { q: "What happens when an IVR changes or a call fails?", a: "Good systems detect the change, retry with an updated path, and route the claim to review if it still fails, so nothing silently drops." },
  { q: "How long does implementation take?", a: "A file-based pilot can start within a few weeks. Deeper write-back integrations take longer, depending on your IT team's review process." },
  { q: "Will automation replace billing staff?", a: "Usually it changes their work. Routine status checks move to agents, and staff spend their time on denials, appeals and payer escalations." },
];

export default function ClaimStatusReference() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
        <div className="container relative max-w-4xl pt-16 pb-10 md:pt-24">
          <span className="eyebrow">Reference guide</span>
          <h1 className="mt-5 text-4xl font-medium leading-[1.05] md:text-6xl">The claim status phone call problem billing teams keep running into</h1>
          <p className="lead mt-6">A practical guide to claim status automation: how it works, where portals and electronic transactions fall short, and how to evaluate a voice AI vendor.</p>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container grid gap-12 lg:grid-cols-[220px_1fr]">
          <nav className="hidden lg:block">
            <div className="sticky top-28 space-y-2 text-sm">
              <p className="text-xs font-semibold uppercase tracking-[.14em] text-ink/50">On this page</p>
              {toc.map((t) => <a key={t.id} href={`#${t.id}`} className="block text-ink/65 hover:text-leaf">{t.label}</a>)}
            </div>
          </nav>

          <article className="prose-gg max-w-3xl text-lg">
            <h2 id="glance">Claim status automation at a glance</h2>
            <ul>
              <li>Billing teams still spend large amounts of time calling payers to ask where a claim stands.</li>
              <li>Electronic status responses (276/277) are often vague, delayed or missing for some payers.</li>
              <li>Voice AI agents can place these calls, navigate phone trees and return structured answers.</li>
              <li>The value depends on accuracy, write-back into your work queues and how exceptions are handled.</li>
            </ul>

            <h2 id="what">What claim status automation is</h2>
            <p>Claim status automation means finding out where a submitted claim stands without a person doing the lookup. That can mean electronic inquiries, portal checks or phone calls placed by software. Voice agents handle the last and hardest of these: calling the payer, authenticating with provider and claim details, and getting a clear answer.</p>
            <h3>Manual process vs. AI voice agent</h3>
            <div className="not-prose overflow-x-auto rounded-2xl border border-ink/10 bg-white">
              <table className="w-full text-left text-sm">
                <thead className="bg-mint-100 text-ink"><tr><th className="p-4"></th><th className="p-4">Manual calling</th><th className="p-4">Voice agent</th></tr></thead>
                <tbody className="divide-y divide-ink/10">
                  {compare.map(([k, m, v]) => <tr key={k}><td className="p-4 font-semibold">{k}</td><td className="p-4 text-ink/70">{m}</td><td className="p-4 text-ink/70">{v}</td></tr>)}
                </tbody>
              </table>
            </div>

            <h2 id="portals">Why payer portals don&apos;t solve the problem</h2>
            <h3>1. Electronic support is uneven</h3>
            <p>Some smaller plans, TPAs and workers&apos; comp carriers offer limited or no electronic status responses, so the phone is the only reliable channel.</p>
            <h3>2. Automated portal access is restricted</h3>
            <p>Many portal terms of use limit or forbid automated access. Bots that scrape portals can break those terms and lose access without warning.</p>
            <h3>3. Credentials limit how much you can do at once</h3>
            <p>Portal logins are usually tied to individual users, which caps how many lookups can run at the same time.</p>
            <h3>4. Portals often lack the detail you need</h3>
            <p>&quot;In process&quot; or &quot;pended&quot; doesn&apos;t tell a biller what to do next. A rep can explain the reason, give a reference number and say what documentation is missing.</p>

            <h2 id="ivr">How AI voice agents navigate payer IVR trees</h2>
            <h3>Step-by-step call flow</h3>
            <ol>
              <li>Pick the correct payer phone line based on plan, product and claim type.</li>
              <li>Work through the IVR menus using speech and keypad input.</li>
              <li>Authenticate with NPI, tax ID, member ID, date of birth and date of service.</li>
              <li>Get status from the automated system, or wait on hold for a rep when more detail is needed.</li>
              <li>Ask follow-up questions: denial reason, check number and date, missing documentation, reprocessing timeline.</li>
              <li>Capture the call reference number and close the call.</li>
            </ol>
            <h3>Why scripted call flows beat open-ended conversation</h3>
            <p>Claim status calls follow a predictable pattern. Payer-specific playbooks with fixed questions produce consistent, auditable results, and conversational AI is used only where a rep goes off script.</p>

            <h2 id="writeback">How results get back into your work queues</h2>
            <p>Results only matter if billers see them where they already work. Common patterns are:</p>
            <ul>
              <li><strong>Direct integration</strong> that updates claim notes and moves accounts between work queues.</li>
              <li><strong>API and webhooks</strong> for teams with their own automation or RPA layer.</li>
              <li><strong>File exports</strong> (CSV or SFTP) imported on a schedule.</li>
            </ul>
            <p>Typical fields include claim status, status date, paid amount, check or EFT number, denial reason code, missing information and the payer reference number.</p>

            <h2 id="evaluate">What to look for in a claim status automation vendor</h2>
            <ul>
              <li>Accuracy measured on your own claims, not a vendor benchmark.</li>
              <li>Recordings and transcripts for every call.</li>
              <li>A clear exception workflow with human review.</li>
              <li>Disclosure practices that follow payer rules for automated callers.</li>
              <li>A signed BAA and a documented security program.</li>
              <li>Write-back options that fit your systems.</li>
              <li>Pricing that matches completed outcomes, not just call attempts.</li>
            </ul>

            <h2 id="gogreen">Claim status automation with GoGreen Voice</h2>
            <p>GoGreen Voice runs claim status calls with payer-specific playbooks, records and transcribes every call, and returns structured results through integrations, API or file export. Calls that need judgment go to a review queue. See the <Link href="/workflows/claim-status">claim status workflow</Link> for details.</p>

            <h2 id="faq">Frequently asked questions</h2>
          </article>
        </div>
        <div className="container mt-6 max-w-4xl lg:pl-[268px]"><Faq items={faqs} /></div>
      </section>
      <CTA title="Want to see a workflow like yours?" body="Send us a sample of open claims and we'll show you what GoGreen Voice brings back." />
    </>
  );
}
