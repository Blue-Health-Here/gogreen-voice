// Global brand + navigation config. Edit here to rebrand.
export const brand = {
  name: "GreenLine Voice",
  product: "GreenLine Voice",
  tagline: "Voice AI agents for revenue cycle teams",
  email: "hello@GreenLinehealth.com",
  appUrl: "https://app.GreenLinehealth.com",
  docsUrl: "https://docs.GreenLinehealth.com",
  linkedin: "https://www.linkedin.com/",
  announcement: {
    text: "New: Prior auth agents now handle peer-to-peer scheduling.",
    cta: "See what's new",
    href: "/blog/peer-to-peer-scheduling",
  },
};

export type NavLink = { label: string; href: string; desc?: string };
export type NavGroup = { label: string; columns: { title?: string; links: NavLink[] }[] };

import { audiences, specialties, workflows } from "./content";

export const nav: NavGroup[] = [
  {
    label: "Platform",
    columns: [
      {
        title: "Product",
        links: [
          { label: "Platform overview", href: "/platform", desc: "How calls, data and results fit together" },
          { label: "Voice agents", href: "/voice-agents", desc: "AI callers that work payer phone lines" },
          { label: "For payers", href: "/platform/payers", desc: "Provider outreach for health plan teams" },
          { label: "For automation teams", href: "/solutions/rpa-automation-teams", desc: "API-first access for RPA and engineering" },
          { label: "Security & compliance", href: "/security", desc: "How we protect PHI" },
        ],
      },
    ],
  },
  {
    label: "Who we serve",
    columns: [{ title: "Organizations", links: audiences.map((a) => ({ label: a.name, href: a.href, desc: a.short })) }],
  },
  {
    label: "Specialties",
    columns: [
      { links: specialties.slice(0, 7).map((s) => ({ label: s.name, href: `/specialties/${s.slug}` })) },
      { links: specialties.slice(7).map((s) => ({ label: s.name, href: `/specialties/${s.slug}` })) },
    ],
  },
  {
    label: "Workflows",
    columns: [{ title: "Automated calls", links: workflows.map((w) => ({ label: w.name, href: `/workflows/${w.slug}`, desc: w.short })) }],
  },
  {
    label: "Resources",
    columns: [
      {
        links: [
          { label: "Case studies", href: "/case-studies", desc: "Results from teams using GreenLine Voice" },
          { label: "Blog", href: "/blog", desc: "Notes on RCM, payers and automation" },
          { label: "Press", href: "/press", desc: "News and announcements" },
          { label: "Careers", href: "/careers", desc: "Join the team" },
        ],
      },
      {
        title: "Guides & tools",
        links: [
          { label: "Claim status automation guide", href: "/references/claim-status-automation", desc: "How voice agents work claim status calls" },
          { label: "Free superbill template", href: "/free-superbill-template", desc: "A printable template for out-of-network claims" },
        ],
      },
    ],
  },
];
