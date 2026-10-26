"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { workflows } from "@/lib/content";
import { LottieAnim } from "./LottieAnim";

type Errors = Partial<Record<string, string>>;

export function DemoForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [errors, setErrors] = useState<Errors>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    data.workflows = new FormData(e.currentTarget).getAll("workflows").join(", ");
    const errs: Errors = {};
    if (!data.name?.trim()) errs.name = "Please enter your name";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email || "")) errs.email = "Enter a valid work email";
    if (!data.company?.trim()) errs.company = "Please enter your organization";
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/demo", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      setStatus(res.ok ? "done" : "error");
    } catch { setStatus("error"); }
  }

  if (status === "done")
    return (
      <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="card p-10 text-center">
        <LottieAnim name="success-check" loop={false} className="mx-auto h-32 w-32" label="Request sent" />
        <h2 className="mt-6 text-3xl font-medium">You&apos;re on the list.</h2>
        <p className="mt-3 text-ink/65">Our team will reach out within one business day to schedule your demo.</p>
      </motion.div>
    );

  const F = ({ name, label, type = "text", auto }: { name: string; label: string; type?: string; auto?: string }) => (
    <label className="block">
      <span className="text-sm font-semibold">{label}</span>
      <input name={name} type={type} autoComplete={auto} className="input mt-1.5" aria-invalid={!!errors[name]} />
      {errors[name] && <span className="mt-1 block text-xs text-[#B4461F]">{errors[name]}</span>}
    </label>
  );

  return (
    <form onSubmit={onSubmit} noValidate className="card space-y-5 p-6 md:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <F name="name" label="Full name *" auto="name" />
        <F name="email" label="Work email *" type="email" auto="email" />
        <F name="company" label="Organization *" auto="organization" />
        <F name="title" label="Job title" auto="organization-title" />
      </div>
      <label className="block">
        <span className="text-sm font-semibold">Organization type</span>
        <select name="orgType" className="input mt-1.5" defaultValue="">
          <option value="" disabled>Select one</option>
          {["Provider group", "Health system", "RCM company", "Digital health", "Dental group", "Payer", "Life sciences", "Other"].map((o) => <option key={o}>{o}</option>)}
        </select>
      </label>
      <label className="block">
        <span className="text-sm font-semibold">Monthly payer call volume</span>
        <select name="volume" className="input mt-1.5" defaultValue="">
          <option value="" disabled>Select a range</option>
          {["< 1,000", "1,000 – 5,000", "5,000 – 25,000", "25,000+"].map((o) => <option key={o}>{o}</option>)}
        </select>
      </label>
      <fieldset>
        <legend className="text-sm font-semibold">Workflows of interest</legend>
        <div className="mt-2 flex flex-wrap gap-2">
          {workflows.map((w) => (
            <label key={w.slug} className="cursor-pointer">
              <input type="checkbox" name="workflows" value={w.name} className="peer sr-only" />
              <span className="inline-block rounded-full border border-ink/15 bg-white px-4 py-2 text-sm transition peer-checked:border-leaf peer-checked:bg-mint-100 peer-checked:text-leaf peer-focus-visible:ring-4 peer-focus-visible:ring-mint">{w.name}</span>
            </label>
          ))}
        </div>
      </fieldset>
      <label className="block">
        <span className="text-sm font-semibold">Anything else?</span>
        <textarea name="message" rows={3} className="input mt-1.5" />
      </label>
      <button type="submit" disabled={status === "sending"} className="btn-dark w-full disabled:opacity-60">
        {status === "sending" ? "Sending…" : "Book my demo"}
      </button>
      {status === "error" && <p className="text-sm text-[#B4461F]">Something went wrong. Please try again or email us.</p>}
      <p className="text-xs text-ink/45">Please don&apos;t include patient information in this form.</p>
    </form>
  );
}
