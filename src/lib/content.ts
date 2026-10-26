import { postsA } from "./posts-a";
import { postsB } from "./posts-b";

// All site copy is original placeholder content for GoGreen Health.
// Figures marked "illustrative" must be replaced with verified numbers before launch.

export type Workflow = {
  slug: string;
  name: string;
  short: string;
  headline: string;
  intro: string;
  steps: { title: string; body: string }[];
  fields: string[];
  transcript: { who: "agent" | "rep"; text: string; at: number }[];
  result: Record<string, string>;
  duration: number; // seconds of simulated call
};

export const workflows: Workflow[] = [
  {
    slug: "benefits-verification",
    name: "Benefits verification",
    short: "Eligibility, deductibles and coverage details",
    headline: "Know what's covered before the patient walks in.",
    intro:
      "GoGreen Voice calls the payer, navigates the phone tree, and comes back with copays, deductibles, accumulators and visit limits, written straight into your system of record.",
    steps: [
      { title: "Send the request", body: "Push a patient and service list from your PM system, a CSV, or our API." },
      { title: "Agent places the call", body: "The agent authenticates with member details and works through the IVR and rep conversation." },
      { title: "Structured answers back", body: "Every benefit field is captured, validated and returned with the call reference number." },
    ],
    fields: ["Plan status", "Deductible met / remaining", "Out-of-pocket max", "Copay / coinsurance", "Visit limits", "Referral required", "Call reference #"],
    duration: 34,
    transcript: [
      { who: "rep", text: "Thanks for calling provider services, this is Dana. Can I get the member ID?", at: 0 },
      { who: "agent", text: "Hi Dana, this is the virtual assistant for Riverside Family Clinic. The member ID is W-four-four-two, eight-one-nine, zero-zero-three.", at: 4 },
      { who: "rep", text: "Got it. Date of birth?", at: 10 },
      { who: "agent", text: "March fourteenth, 1986. I'm verifying outpatient office visit benefits, CPT 99214.", at: 12 },
      { who: "rep", text: "Plan is active. Specialist copay is $40, deductible is $1,500 with $1,120 met.", at: 18 },
      { who: "agent", text: "Thank you. Is a referral required, and are there any visit limits?", at: 25 },
      { who: "rep", text: "No referral, no visit limit. Reference number is 7731-AB.", at: 29 },
    ],
    result: { plan_status: "Active", copay_specialist: "$40", deductible: "$1,500", deductible_met: "$1,120", referral_required: "No", reference: "7731-AB" },
  },
  {
    slug: "prior-authorization",
    name: "Prior authorization",
    short: "Status checks, submissions and follow-ups",
    headline: "Stop chasing authorizations on hold.",
    intro:
      "Agents check auth requirements, confirm receipt of submitted clinicals, track determinations and request expedited review, so staff only step in when a clinical conversation is needed.",
    steps: [
      { title: "Queue open auths", body: "Sync pending authorizations from your worklist or send them over the API." },
      { title: "Agent follows up", body: "The agent confirms receipt, asks for status and escalates when deadlines approach." },
      { title: "Decision captured", body: "Approval numbers, approved units and date ranges flow back automatically." },
    ],
    fields: ["Auth required (Y/N)", "Case / tracking #", "Status", "Approved units", "Valid date range", "Missing documentation", "Peer-to-peer availability"],
    duration: 30,
    transcript: [
      { who: "rep", text: "Utilization management, how can I help?", at: 0 },
      { who: "agent", text: "Hi, I'm calling on behalf of Northside Orthopedics to check the status of an MRI authorization, case 55-90812.", at: 3 },
      { who: "rep", text: "One moment. That case was approved yesterday.", at: 10 },
      { who: "agent", text: "Great. Could you confirm the approved units and the valid date range?", at: 14 },
      { who: "rep", text: "One unit, CPT 73721, valid through December 31st. Auth number is PA-448120.", at: 18 },
      { who: "agent", text: "Thank you. Can I get a reference number for this call?", at: 25 },
      { who: "rep", text: "Sure, it's R-20931.", at: 28 },
    ],
    result: { status: "Approved", auth_number: "PA-448120", cpt: "73721", units: "1", valid_through: "12/31", reference: "R-20931" },
  },
  {
    slug: "claim-status",
    name: "Claim status",
    short: "Denials, underpayments and AR follow-up",
    headline: "Work every aged claim, not just the big ones.",
    intro:
      "GoGreen Voice calls on unpaid and denied claims, captures denial reasons and next steps, and routes each result to the right worklist so your team spends time on resolution, not hold music.",
    steps: [
      { title: "Pull aging AR", body: "Select claims by age, payer or balance, or let rules pick them automatically." },
      { title: "Agent calls the payer", body: "The agent asks for status, denial codes, check numbers and reprocessing options." },
      { title: "Route next steps", body: "Results land in your billing system tagged for appeal, resubmission or posting." },
    ],
    fields: ["Claim status", "Paid amount / date", "Check / EFT #", "Denial code & reason", "Reprocessing options", "Appeal deadline", "Call reference #"],
    duration: 32,
    transcript: [
      { who: "rep", text: "Claims department, this is Marcus.", at: 0 },
      { who: "agent", text: "Hi Marcus, I'm checking a claim for date of service September 3rd, billed amount $642.", at: 3 },
      { who: "rep", text: "I see it. It denied with CO-197, missing precertification.", at: 9 },
      { who: "agent", text: "Understood. If we send the authorization number, can the claim be reprocessed, or is an appeal needed?", at: 14 },
      { who: "rep", text: "It can be reopened by phone with the auth number. Otherwise, the appeal window is 180 days.", at: 21 },
      { who: "agent", text: "Thanks. What's the reference number for this call?", at: 27 },
      { who: "rep", text: "C-66210.", at: 30 },
    ],
    result: { status: "Denied", denial_code: "CO-197", reason: "Precert missing", next_step: "Reopen with auth #", appeal_window: "180 days", reference: "C-66210" },
  },
  {
    slug: "credentialing-enrollment",
    name: "Credentialing & enrollment",
    short: "Application status and network participation",
    headline: "Get providers billing sooner.",
    intro:
      "Agents track enrollment applications, confirm network participation and effective dates, and flag missing items early, before a new provider's first month of claims is at risk.",
    steps: [
      { title: "Add your providers", body: "Import NPIs, tax IDs and the payers you're enrolling with." },
      { title: "Agent checks in", body: "The agent calls provider enrollment lines on a schedule you choose." },
      { title: "Track to effective date", body: "Status, missing items and effective dates appear on one board." },
    ],
    fields: ["Application status", "Application / tracking #", "Effective date", "Network participation", "Missing documents", "Revalidation due", "Call reference #"],
    duration: 28,
    transcript: [
      { who: "rep", text: "Provider enrollment, this is Kim.", at: 0 },
      { who: "agent", text: "Hi Kim, I'm checking an application for Dr. Elena Ruiz, NPI ending 4471.", at: 3 },
      { who: "rep", text: "That application is in final review. We're missing a signed W-9.", at: 9 },
      { who: "agent", text: "Thank you. Where should the W-9 be sent, and what's the expected effective date once it's received?", at: 14 },
      { who: "rep", text: "Fax it to the enrollment line. Effective date would be November 1st.", at: 21 },
      { who: "agent", text: "Got it. Could I have a reference number?", at: 25 },
    ],
    result: { status: "Final review", missing: "Signed W-9", effective_date: "11/01", network: "In-network on approval", reference: "E-30117" },
  },
];

export type Audience = {
  slug: string;
  href: string;
  name: string;
  short: string;
  headline: string;
  intro: string;
  pains: string[];
  outcomes: { stat: string; label: string }[];
  quote?: string;
};

export const audiences: Audience[] = [
  {
    slug: "rcm-companies",
    href: "/rcm-companies",
    name: "RCM companies",
    short: "Scale client work without scaling headcount",
    headline: "Take on more clients without adding more callers.",
    intro: "Revenue cycle firms use GoGreen Voice as an always-on calling team that plugs into each client's workflow and reports back in your format.",
    pains: ["Margins shrink as payer hold times grow", "Hiring and training callers takes months", "Client SLAs leave no room for backlogs"],
    outcomes: [{ stat: "3×", label: "more calls per FTE (illustrative)" }, { stat: "24/7", label: "coverage across time zones" }, { stat: "<2 wks", label: "to onboard a new client" }],
  },
  {
    slug: "provider-groups",
    href: "/provider-groups",
    name: "Provider groups",
    short: "Give front-office and billing staff their day back",
    headline: "Let your staff take care of patients instead of sitting on hold.",
    intro: "Multi-location practices use GoGreen Voice to verify benefits, follow up on auths and work AR, so staff can focus on patients and complex cases.",
    pains: ["Front-desk staff spend hours on payer calls", "Missed verifications lead to surprise bills", "AR ages while the team is short-staffed"],
    outcomes: [{ stat: "70%", label: "of routine calls automated (illustrative)" }, { stat: "Same day", label: "benefit checks before visits" }, { stat: "0", label: "new hires needed to scale" }],
  },
  {
    slug: "health-systems",
    href: "/health-systems",
    name: "Health systems",
    short: "Enterprise-grade automation across departments",
    headline: "Payer calls handled across every department.",
    intro: "Health systems deploy GoGreen Voice across patient access, utilization management and the central business office, with the governance, auditability and integrations enterprise IT expects.",
    pains: ["Call volume varies widely by department", "Disconnected vendors for every workflow", "Strict security and audit requirements"],
    outcomes: [{ stat: "1", label: "platform for every payer call" }, { stat: "100%", label: "of calls recorded & auditable" }, { stat: "SSO", label: "role-based access built in" }],
  },
  {
    slug: "digital-health",
    href: "/digital-health",
    name: "Digital health",
    short: "Insurance operations that scale with your growth",
    headline: "Insurance operations that keep up with your growth.",
    intro: "Virtual care and digital health companies use our API to check coverage at signup, manage auths and track claims without building an in-house calling team.",
    pains: ["Coverage checks slow down patient signup", "Ops headcount grows faster than revenue", "Engineering time spent on payer edge cases"],
    outcomes: [{ stat: "API", label: "first, with webhooks for every result" }, { stat: "Minutes", label: "from signup to verified coverage" }, { stat: "50+", label: "states supported (illustrative)" }],
  },
  {
    slug: "dental-dsos",
    href: "/dental-dsos",
    name: "Dental DSOs",
    short: "Breakdowns and frequencies, verified at scale",
    headline: "Full benefit breakdowns for every dental appointment.",
    intro: "Dental service organizations use GoGreen Voice to collect frequencies, waiting periods and history across many offices, so each appointment starts with accurate estimates.",
    pains: ["Portals leave out frequency and history details", "Each office verifies benefits its own way", "Patients are surprised by uncovered procedures"],
    outcomes: [{ stat: "40+", label: "dental fields captured per call" }, { stat: "Every", label: "office on one standard" }, { stat: "48 hrs", label: "ahead of every appointment" }],
  },
  {
    slug: "payers",
    href: "/platform/payers",
    name: "Payers",
    short: "Clean provider data and outbound outreach",
    headline: "Keep provider directories accurate.",
    intro: "Health plans use GoGreen Voice to verify provider directory data, confirm network participation and run compliant outbound outreach at scale.",
    pains: ["Directory accuracy requirements keep tightening", "Manual outreach to providers is slow and costly", "Low response rates on fax and email"],
    outcomes: [{ stat: "Quarterly", label: "directory attestations, automated" }, { stat: "Full", label: "audit trail for regulators" }, { stat: "10×", label: "outreach capacity (illustrative)" }],
  },
  {
    slug: "pharma",
    href: "/pharma",
    name: "Pharma & life sciences",
    short: "Hub services and patient access support",
    headline: "Help patients start therapy sooner.",
    intro: "Pharma hubs and specialty pharmacies use GoGreen Voice for benefits investigations and auth follow-ups, so patients start therapy sooner.",
    pains: ["Benefits investigations delay therapy starts", "Hub staffing spikes around launches", "Inconsistent data from payer calls"],
    outcomes: [{ stat: "Faster", label: "time-to-therapy" }, { stat: "Elastic", label: "capacity for launches" }, { stat: "Structured", label: "results for every BI" }],
  },
];

const spec = (slug: string, name: string, focus: string, calls: string[]) => ({ slug, name, focus, calls });
export const specialties = [
  spec("behavioral-health", "Behavioral health", "session limits, carve-outs to behavioral health plans, and telehealth coverage", ["Visit limits & carve-outs", "Telehealth parity checks", "Ongoing auth renewals"]),
  spec("cardiology", "Cardiology", "imaging and procedure authorizations, device checks and high-dollar claims", ["Echo & nuclear imaging auths", "Cath lab precerts", "Device claim follow-up"]),
  spec("dermatology", "Dermatology", "cosmetic vs. medical coverage, biologic auths and Mohs claims", ["Biologic prior auths", "Mohs surgery claims", "Pathology claim status"]),
  spec("ent", "ENT", "sinus surgery precerts, allergy testing coverage and hearing benefits", ["Allergy testing benefits", "Sinus procedure auths", "Hearing aid coverage"]),
  spec("gastroenterology", "Gastroenterology", "screening vs. diagnostic coding, anesthesia coverage and infusion auths", ["Screening colonoscopy benefits", "Anesthesia coverage checks", "Infusion authorizations"]),
  spec("multi-specialty", "Multi-specialty", "different benefit rules across departments, all handled on one platform", ["Specialist referral checks", "Cross-department AR", "Centralized verification"]),
  spec("ob-gyn", "OB/GYN", "global maternity benefits, ultrasound limits and fertility coverage", ["Global OB benefits", "Ultrasound frequency limits", "Fertility coverage checks"]),
  spec("ophthalmology", "Ophthalmology", "medical vs. vision plan routing, injectables and surgical precerts", ["Vision vs. medical routing", "Retina injectable auths", "Cataract surgery precerts"]),
  spec("orthopedics", "Orthopedics", "MRI and surgical auths, DME coverage and workers' comp claims", ["Advanced imaging auths", "Surgical precerts", "DME & workers' comp claims"]),
  spec("pain-management", "Pain management", "injection frequency limits, step therapy and procedure auths", ["Injection frequency limits", "Procedure authorizations", "Denied claim follow-up"]),
  spec("pediatrics", "Pediatrics", "well-child benefits, vaccine coverage and Medicaid plan changes", ["Well-child visit benefits", "Vaccine admin coverage", "Medicaid eligibility checks"]),
  spec("podiatry", "Podiatry", "routine foot care rules, orthotics coverage and wound care auths", ["Routine foot care coverage", "Orthotics & DME benefits", "Wound care authorizations"]),
  spec("primary-care", "Primary care", "preventive vs. problem visits, PCP assignment and annual wellness", ["PCP assignment checks", "Preventive benefit checks", "Chronic care management"]),
  spec("urology", "Urology", "in-office procedure coverage, drug auths and lithotripsy precerts", ["Lithotripsy precerts", "Oncology drug auths", "In-office procedure benefits"]),
];

export type CaseStudy = {
  slug: string;
  org: string;
  segment: string;
  headline: string;
  summary: string;
  metrics: { stat: string; label: string }[];
  challenge: string;
  solution: string;
  results: string[];
};

// SAMPLE case studies with fictional organizations. Replace with real, approved customer stories.
export const caseStudies: CaseStudy[] = [
  {
    slug: "summit-neuromonitoring",
    org: "Summit Neuromonitoring (sample)",
    segment: "Specialty provider",
    headline: "Auth follow-up turnaround cut from days to hours",
    summary: "A surgical neuromonitoring group automated authorization follow-ups across dozens of payers.",
    metrics: [{ stat: "82%", label: "of follow-ups automated" }, { stat: "6 hrs", label: "avg. turnaround" }, { stat: "2 FTE", label: "redeployed" }],
    challenge: "The team was tracking authorizations for same-week surgeries by phone, with frequent long holds and few spare hours to follow up.",
    solution: "GoGreen Voice pulled open authorizations nightly, called each payer the next morning and posted results back to the scheduling worklist.",
    results: ["Same-day visibility into pending auths", "Fewer rescheduled procedures", "Staff focused on peer-to-peer reviews"],
  },
  {
    slug: "meridian-billing",
    org: "Meridian Billing Partners (sample)",
    segment: "RCM company",
    headline: "Twelve new clients onboarded without adding callers",
    summary: "An RCM firm used voice agents as its AR follow-up team for new clients.",
    metrics: [{ stat: "12", label: "clients added" }, { stat: "3×", label: "calls per FTE" }, { stat: "38%", label: "faster AR resolution" }],
    challenge: "Client growth was limited by how quickly the firm could hire and train AR callers.",
    solution: "Claim status calls were routed to GoGreen Voice, with results written back into each client's billing system.",
    results: ["Growth no longer tied to headcount", "Consistent call notes across clients", "Higher client retention"],
  },
  {
    slug: "harbor-behavioral",
    org: "Harbor Behavioral Group (sample)",
    segment: "Behavioral health",
    headline: "Every new patient verified before their first session",
    summary: "A behavioral health network standardized benefit checks across many clinics.",
    metrics: [{ stat: "100%", label: "of intakes verified" }, { stat: "−45%", label: "patient balance write-offs" }, { stat: "24 hrs", label: "intake-to-verification" }],
    challenge: "Carve-outs and session limits made benefits hard to read from portals, and surprise bills were hurting retention.",
    solution: "Agents called the correct behavioral health plan for each intake and captured session limits and cost share.",
    results: ["Accurate estimates at intake", "Fewer billing disputes", "Happier front-desk teams"],
  },
  {
    slug: "lakeside-orthopedics",
    org: "Lakeside Orthopedics (sample)",
    segment: "Provider group",
    headline: "Aged AR over 90 days cut by more than half",
    summary: "A multi-site orthopedic practice worked through its denial backlog with voice agents.",
    metrics: [{ stat: "−54%", label: "AR > 90 days" }, { stat: "9k", label: "claims worked / mo" }, { stat: "4 wks", label: "to full rollout" }],
    challenge: "Low-balance denials were piling up because no one had time to call on them.",
    solution: "GoGreen Voice worked every aged claim regardless of balance and tagged each with a clear next step.",
    results: ["Backlog cleared in a quarter", "Faster appeals with captured denial codes", "Recovered revenue on small claims"],
  },
  {
    slug: "brightside-dental-partners",
    org: "Brightside Dental Partners (sample)",
    segment: "Dental DSO",
    headline: "Full breakdowns for every appointment across 30 offices",
    summary: "A dental service organization moved benefit checks off the front desk and onto one shared standard.",
    metrics: [{ stat: "30", label: "offices on one process" }, { stat: "48 hrs", label: "verified before visits" }, { stat: "−60%", label: "front-desk call time" }],
    challenge: "Each office verified benefits its own way, and portal data often left out frequencies, history and waiting periods.",
    solution: "GoGreen Voice pulled the next two days of appointments from the PMS each night and called each dental plan for a full breakdown.",
    results: ["Consistent breakdowns at every office", "More accurate treatment estimates", "Front desks focused on patients in the chair"],
  },
  {
    slug: "northwind-virtual-care",
    org: "Northwind Virtual Care (sample)",
    segment: "Digital health",
    headline: "Coverage confirmed in minutes at patient signup",
    summary: "A virtual care company replaced a manual eligibility queue with API-triggered payer calls.",
    metrics: [{ stat: "Minutes", label: "signup to verified" }, { stat: "0", label: "ops hires to scale" }, { stat: "40+", label: "states covered" }],
    challenge: "Patients waited days for coverage checks, and the ops team grew every time marketing spend went up.",
    solution: "Signup events triggered a GoGreen Voice call through the API whenever the clearinghouse response was incomplete, with results returned by webhook.",
    results: ["Faster first appointments", "Ops headcount flat through growth", "Engineering out of the payer edge-case business"],
  },
  {
    slug: "cascade-medical-supply",
    org: "Cascade Medical Supply (sample)",
    segment: "DME supplier",
    headline: "DME authorizations tracked without a phone queue",
    summary: "A durable medical equipment supplier automated auth status and coverage calls across national and regional plans.",
    metrics: [{ stat: "75%", label: "of status calls automated" }, { stat: "−3 days", label: "order-to-delivery" }, { stat: "1.5 FTE", label: "redeployed" }],
    challenge: "Orders sat waiting on authorization updates that could only be confirmed by phone.",
    solution: "Agents called each plan daily on open orders and posted approvals, denials and missing documentation back to the order system.",
    results: ["Fewer stalled orders", "Missing paperwork caught earlier", "Patients received equipment sooner"],
  },
  {
    slug: "riverbend-billing-group",
    org: "Riverbend Billing Group (sample)",
    segment: "RCM company",
    headline: "Timely filing write-offs nearly eliminated",
    summary: "A billing company used claim status calls to catch problems before filing deadlines passed.",
    metrics: [{ stat: "−90%", label: "timely filing write-offs" }, { stat: "5k", label: "claims checked / mo" }, { stat: "3 wks", label: "to go live" }],
    challenge: "Claims that never reached the payer were only discovered after the filing window closed.",
    solution: "Every claim without a response after 21 days got an automated status call, with no-record-on-file results flagged for same-day rebill.",
    results: ["Lost claims caught early", "Cleaner aging reports", "Clients saw recovered revenue within a quarter"],
  },
  {
    slug: "evergreen-ent-associates",
    org: "Evergreen ENT Associates (sample)",
    segment: "Specialty provider",
    headline: "Credentialing follow-up handled while providers onboard",
    summary: "A growing ENT group automated enrollment status calls for new providers across its payer list.",
    metrics: [{ stat: "−35%", label: "time to in-network" }, { stat: "18", label: "payers tracked" }, { stat: "Weekly", label: "status for every app" }],
    challenge: "New providers waited months to see patients because enrollment applications stalled without anyone noticing.",
    solution: "GoGreen Voice called each payer weekly on open applications and flagged missing documents to the credentialing lead.",
    results: ["New providers billing sooner", "No more silent stalls", "Credentialing lead freed for complex cases"],
  },
];

export type Post = { slug: string; title: string; excerpt: string; date: string; tag: string; read: string; body: string[] };
const basePosts: Post[] = [
  {
    slug: "peer-to-peer-scheduling",
    title: "Prior auth agents can now schedule peer-to-peer reviews",
    excerpt: "When a payer asks for a peer-to-peer review, the agent can now book it right away.",
    date: "2026-10-14",
    tag: "Product",
    read: "3 min",
    body: [
      "A request for a peer-to-peer review usually means another round of phone tag. Now, when a payer offers a peer-to-peer during an authorization follow-up, GoGreen Voice collects the available times and books one based on the ordering physician's calendar.",
      "The confirmed time, the reviewer's contact details and the case number appear on the authorization record, and the physician gets a calendar invite.",
      "Peer-to-peer scheduling is available today for all prior authorization customers.",
    ],
  },
  {
    slug: "why-portals-arent-enough",
    title: "Why payer portals still aren't enough",
    excerpt: "Portals cover the basics. These are the details that still take a phone call.",
    date: "2026-09-22",
    tag: "Revenue cycle",
    read: "6 min",
    body: [
      "Payer portals are great for checking whether a plan is active. They often fall short on what drives patient balances: accumulators, frequency limits, carve-outs and procedure-specific rules.",
      "That's why most revenue cycle teams still spend hours on the phone. The answers exist, but only a payer rep can give them.",
      "Voice agents help by doing what your best callers do: asking the right follow-up questions and recording the answers in a structured format.",
    ],
  },
  {
    slug: "measuring-automation-roi",
    title: "Measuring ROI on call automation",
    excerpt: "A simple way to estimate savings before you automate any calls.",
    date: "2026-08-30",
    tag: "Guides",
    read: "8 min",
    body: [
      "Start with three numbers: monthly payer call volume, average handle time including hold, and fully loaded cost per staff hour.",
      "Multiply them to estimate what calls cost you today, then compare that against automated per-call pricing and the share of calls that can be automated.",
      "Don't forget second-order effects: fewer denials from better verification and faster cash from quicker AR follow-up.",
    ],
  },
  {
    slug: "hipaa-and-voice-ai",
    title: "Voice AI under HIPAA: a practical checklist",
    excerpt: "What to ask any vendor whose agents will handle PHI on calls.",
    date: "2026-08-12",
    tag: "Security",
    read: "5 min",
    body: [
      "Ask about the BAA first. Then ask where recordings and transcripts are stored, how long they're kept and who can access them.",
      "Look for encryption in transit and at rest, single sign-on, role-based permissions and complete audit logs.",
      "Finally, ask how the vendor's AI models are trained, and make sure your data isn't used to train shared models without your consent.",
    ],
  },
  {
    slug: "dental-verification-guide",
    title: "The dental benefits verification checklist",
    excerpt: "Forty fields that prevent surprise bills in dental offices.",
    date: "2026-07-28",
    tag: "Guides",
    read: "7 min",
    body: [
      "Dental plans vary a lot. Frequency limits, waiting periods, missing tooth clauses and downgrades can all change what a patient owes.",
      "A standard checklist used across every office is the quickest way to make treatment estimates more accurate.",
    ],
  },
  {
    slug: "api-webhooks-launch",
    title: "Introducing webhooks for every call result",
    excerpt: "Get structured results the moment a call ends.",
    date: "2026-07-02",
    tag: "Product",
    read: "2 min",
    body: [
      "Automation teams can now subscribe to webhooks for call started, call completed and needs review events.",
      "Every payload includes the structured result, a link to the recording and the payer's reference number.",
    ],
  },
];

// Newest first, so the blog index leads with the latest post.
export const posts: Post[] = [...basePosts, ...postsA, ...postsB].sort((a, b) => b.date.localeCompare(a.date));

export const press = [
  { date: "2026-10-01", outlet: "Company news", title: "GoGreen Health launches GoGreen Voice for revenue cycle teams", href: "/blog/peer-to-peer-scheduling" },
  { date: "2026-08-15", outlet: "Company news", title: "GoGreen Voice adds credentialing and enrollment workflows", href: "/workflows/credentialing-enrollment" },
  { date: "2026-06-20", outlet: "Company news", title: "GoGreen Health completes independent security assessment", href: "/security" },
];

export const roles = [
  { title: "Senior Frontend Engineer", team: "Engineering", location: "Lahore / Remote" },
  { title: "Voice AI Engineer", team: "Engineering", location: "Remote" },
  { title: "Revenue Cycle Solutions Lead", team: "Customer Success", location: "Remote (US hours)" },
  { title: "Account Executive, Health Systems", team: "Sales", location: "Remote (US)" },
];

export const faqs = [
  { q: "Will payer reps know they're talking to an AI?", a: "Yes. Our agents identify themselves as virtual assistants calling for your organization and follow each payer's rules for automated callers." },
  { q: "What happens when a call goes off-script?", a: "Agents handle transfers, call-backs and unexpected questions. If a call needs human judgment, it goes to a review queue with the full recording and transcript." },
  { q: "How do results get into our systems?", a: "Through a direct integration with your PM or EHR, our REST API and webhooks, or scheduled CSV and SFTP exports, depending on what your team prefers." },
  { q: "How long does it take to go live?", a: "Most teams start live calls within two to four weeks. Start with one workflow and add more once you see results." },
  { q: "Is GoGreen Voice HIPAA compliant?", a: "We sign a BAA with every customer and encrypt PHI in transit and at rest. See our Security page for details." },
];

export const integrations = [
  "EHR & PM systems",
  "Clearinghouses",
  "Billing platforms",
  "Dental PMS",
  "Data warehouses",
  "SFTP / CSV",
  "REST API",
  "Webhooks",
  "SSO / SAML",
  "Ticketing & CRM",
];

export const homeStats = [
  { stat: "45 min", label: "average payer hold time we absorb (illustrative)" },
  { stat: "24/7", label: "agents dialing across every time zone" },
  { stat: "60+", label: "structured fields per call" },
  { stat: "100%", label: "of calls recorded, transcribed and auditable" },
];
