"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import type { Workflow } from "@/lib/content";
import { Pause, Play, Phone, Check } from "./Icons";

const fmt = (s: number) => `0:${String(Math.floor(s)).padStart(2, "0")}`;

/** Simulated call playback: transcript, extracted fields and a final structured result. */
export function CallDemo({ items, initial = 0 }: { items: Workflow[]; initial?: number }) {
  const [idx, setIdx] = useState(initial);
  const [t, setT] = useState(0);
  const [playing, setPlaying] = useState(false);
  const raf = useRef<number | undefined>(undefined);
  const last = useRef<number | undefined>(undefined);
  const w = items[idx];
  const done = t >= w.duration;

  useEffect(() => { setT(0); setPlaying(false); }, [idx]);
  useEffect(() => {
    if (!playing) { last.current = undefined; return; }
    const tick = (now: number) => {
      if (last.current !== undefined) setT((p) => Math.min(w.duration, p + (now - last.current!) / 1000));
      last.current = now;
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current!);
  }, [playing, w.duration]);
  useEffect(() => { if (done) setPlaying(false); }, [done]);

  const lines = w.transcript.filter((l) => l.at <= t);
  const resultEntries = Object.entries(w.result);
  const revealed = Math.floor((t / w.duration) * resultEntries.length + 0.001);
  const bars = useMemo(() => Array.from({ length: 56 }, (_, i) => 0.25 + Math.abs(Math.sin(i * 1.7 + idx) * Math.cos(i * 0.45)) * 0.75), [idx]);
  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => { scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" }); }, [lines.length]);

  const toggle = () => { if (done) setT(0); setPlaying((p) => !p || done); };

  return (
    <div className="rounded-4xl border border-cream/10 bg-forest-800 p-3 sm:p-4 text-cream shadow-glow">
      {items.length > 1 && (
        <div className="flex gap-1 overflow-x-auto rounded-full bg-forest-900 p-1 text-sm" role="tablist">
          {items.map((it, i) => (
            <button key={it.slug} role="tab" aria-selected={i === idx} onClick={() => setIdx(i)}
              className={`whitespace-nowrap rounded-full px-4 py-2 font-medium transition ${i === idx ? "bg-lime text-ink" : "text-cream/70 hover:text-cream"}`}>
              {it.name}
            </button>
          ))}
        </div>
      )}
      <div className="mt-3 grid gap-3 lg:grid-cols-[1.35fr_1fr]">
        {/* Player + transcript */}
        <div className="rounded-3xl bg-forest-900 p-5">
          <div className="flex items-center gap-4">
            <button onClick={toggle} aria-label={playing ? "Pause call" : "Play call"}
              className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-lime text-ink transition hover:scale-105">
              {playing ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 translate-x-0.5" />}
            </button>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between text-xs text-cream/60">
                <span className="flex items-center gap-1.5"><Phone className="h-3.5 w-3.5" /> GoGreen agent → Payer line</span>
                <span className="font-mono">{fmt(t)} / {fmt(w.duration)}</span>
              </div>
              <div className="mt-2 flex h-10 items-center gap-[3px]" aria-hidden="true">
                {bars.map((h, i) => {
                  const active = i / bars.length <= t / w.duration;
                  return <span key={i} className={`w-full rounded-full ${active ? "bg-lime" : "bg-cream/15"} ${playing && active ? "animate-wave" : ""}`} style={{ height: `${h * 100}%`, animationDelay: `${(i % 7) * 0.08}s` }} />;
                })}
              </div>
            </div>
          </div>
          <div ref={scrollRef} className="mt-5 h-64 space-y-3 overflow-y-auto pr-1" aria-live="polite">
            {lines.length === 0 && <p className="pt-20 text-center text-sm text-cream/40">Press play to listen in on a sample {w.name.toLowerCase()} call.</p>}
            {lines.map((l, i) => (
              <div key={i} className={`animate-rise flex ${l.who === "agent" ? "justify-end" : ""}`}>
                <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${l.who === "agent" ? "bg-lime/15 text-cream rounded-br-md" : "bg-cream/10 text-cream/85 rounded-bl-md"}`}>
                  <span className={`mb-0.5 block text-[10px] font-semibold uppercase tracking-wider ${l.who === "agent" ? "text-lime" : "text-cream/50"}`}>{l.who === "agent" ? "GoGreen agent" : "Payer rep"}</span>
                  {l.text}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Extracted result */}
        <div className="flex flex-col rounded-3xl bg-cream p-5 text-ink">
          <div className="flex items-center justify-between">
            <p className="text-xs font-semibold uppercase tracking-[.14em] text-ink/50">Structured result</p>
            <span className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${done ? "bg-leaf text-cream" : playing ? "bg-lime text-ink" : "bg-ink/5 text-ink/60"}`}>
              {done ? "Synced to PM system" : playing ? "Capturing…" : "Waiting"}
            </span>
          </div>
          <ul className="mt-4 flex-1 divide-y divide-ink/10">
            {resultEntries.map(([k, v], i) => (
              <li key={k} className="flex items-center justify-between gap-3 py-2.5 text-sm">
                <span className="font-mono text-xs text-ink/55">{k}</span>
                {i < revealed || done ? (
                  <span className="animate-rise flex items-center gap-1.5 font-semibold"><Check className="h-4 w-4 text-leaf" />{v}</span>
                ) : (
                  <span className="h-3 w-16 rounded-full bg-ink/10" />
                )}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-[11px] text-ink/45">Sample call with fictional patient and payer data.</p>
        </div>
      </div>
    </div>
  );
}
