"use client";
// Code-drawn, animated product UI mock (no screenshots needed).
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { CountUp } from "./Motion";

type Status = "Queued" | "On call" | "Complete" | "Needs review";
const badge: Record<Status, string> = {
  Complete: "bg-leaf text-cream",
  "On call": "bg-lime text-ink",
  Queued: "bg-ink/10 text-ink/70",
  "Needs review": "bg-coral/20 text-[#B4461F]",
};
const initial: { p: string; w: string; s: Status }[] = [
  { p: "National PPO", w: "Benefits verification", s: "Complete" },
  { p: "Regional HMO", w: "Prior authorization", s: "On call" },
  { p: "Medicare Advantage", w: "Claim status", s: "Complete" },
  { p: "State Medicaid", w: "Benefits verification", s: "Queued" },
  { p: "Commercial EPO", w: "Credentialing", s: "Needs review" },
];
const cycle: Status[] = ["Queued", "On call", "Complete"];

export function ProductMock() {
  const [rows, setRows] = useState(initial);
  const reduce = useReducedMotion();
  // Simulate live activity: move rows through Queued → On call → Complete.
  useEffect(() => {
    if (reduce) return;
    let step = 0;
    const id = setInterval(() => {
      step++;
      setRows((r) => r.map((row, i) => {
        if (row.s === "Needs review") return row;
        if ((i + step) % 3 !== 0) return row;
        return { ...row, s: cycle[(cycle.indexOf(row.s) + 1) % cycle.length] };
      }));
    }, 1800);
    return () => clearInterval(id);
  }, [reduce]);

  return (
    <div className="card overflow-hidden" aria-label="Product dashboard preview">
      <div className="flex items-center gap-2 border-b border-ink/10 bg-cream-200 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-coral/70" /><span className="h-3 w-3 rounded-full bg-lime" /><span className="h-3 w-3 rounded-full bg-leaf-300" />
        <span className="ml-3 rounded-full bg-white px-3 py-1 font-mono text-[11px] text-ink/50">app.gogreenhealth.com/calls</span>
        <span className="ml-auto flex items-center gap-1.5 text-[11px] font-semibold text-leaf"><span className="h-2 w-2 animate-pulse rounded-full bg-leaf" />Live</span>
      </div>
      <div className="grid md:grid-cols-[180px_1fr]">
        <aside className="hidden border-r border-ink/10 p-4 text-sm md:block">
          {["Calls", "Worklists", "Results", "Payers", "Integrations", "Settings"].map((l, i) => (
            <motion.div key={l} initial={reduce ? false : { opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 + i * 0.05 }}
              className={`rounded-xl px-3 py-2 ${i === 0 ? "bg-mint-100 font-semibold text-leaf" : "text-ink/60"}`}>{l}</motion.div>
          ))}
        </aside>
        <div className="p-5">
          <div className="grid grid-cols-3 gap-3">
            {[["1,284", "Calls today"], ["93%", "Completed"], ["38m", "Hold time saved / call"]].map(([a, b]) => (
              <div key={b} className="rounded-2xl bg-cream p-3"><p className="font-display text-2xl text-leaf"><CountUp value={a} /></p><p className="text-[11px] text-ink/55">{b}</p></div>
            ))}
          </div>
          <div className="mt-4 overflow-hidden rounded-2xl border border-ink/10">
            {rows.map((r, i) => (
              <motion.div key={r.p + r.w} initial={reduce ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 + i * 0.1, duration: 0.5 }}
                className="flex items-center justify-between gap-3 border-b border-ink/5 px-4 py-3 text-sm last:border-0">
                <div className="min-w-0"><p className="truncate font-semibold">{r.w}</p><p className="truncate text-xs text-ink/50">{r.p}</p></div>
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span key={r.s} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} transition={{ duration: 0.25 }}
                    className={`shrink-0 rounded-full px-2.5 py-1 text-[11px] font-semibold ${badge[r.s]}`}>
                    {r.s === "On call" && <span className="mr-1 inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-ink align-middle" />}{r.s}
                  </motion.span>
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
