"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { brand, nav } from "@/lib/site";
import { Logo } from "./Logo";
import { Chevron, Menu, X, Arrow } from "./Icons";

export function Header() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);
  const [mobileGroup, setMobileGroup] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => { setOpen(null); setMobile(false); }, [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && (setOpen(null), setMobile(false));
    const onClick = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(null); };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("keydown", onKey); document.removeEventListener("mousedown", onClick); };
  }, []);
  useEffect(() => { document.body.style.overflow = mobile ? "hidden" : ""; }, [mobile]);

  return (
    <header ref={ref} className={`sticky top-0 z-50 transition ${scrolled ? "bg-cream/90 backdrop-blur border-b border-ink/10" : "bg-cream"}`}>
      <div className="container flex h-16 items-center justify-between gap-6">
        <Logo />
        <nav className="hidden lg:flex items-center gap-1" aria-label="Main">
          {nav.map((g) => {
            const isOpen = open === g.label;
            const wide = g.columns.length > 1;
            return (
              <div key={g.label} className="relative" onMouseEnter={() => setOpen(g.label)} onMouseLeave={() => setOpen(null)}>
                <button
                  className={`flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium transition ${isOpen ? "bg-ink/5" : "hover:bg-ink/5"}`}
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : g.label)}
                >
                  {g.label}
                  <Chevron className={`h-4 w-4 transition ${isOpen ? "rotate-180" : ""}`} />
                </button>
                {isOpen && (
                  <div className="absolute left-1/2 top-full -translate-x-1/2 pt-3">
                    <div className={`animate-rise card p-3 ${wide ? "w-[480px] grid grid-cols-2 gap-1" : "w-[380px]"}`}>
                      {g.columns.map((c, i) => (
                        <div key={i}>
                          {c.title && <p className="px-3 pt-2 pb-1 text-[11px] font-semibold uppercase tracking-[.14em] text-ink/45">{c.title}</p>}
                          {c.links.map((l) => (
                            <Link key={l.href} href={l.href} className="group block rounded-2xl px-3 py-2.5 hover:bg-mint-100">
                              <span className="flex items-center justify-between text-sm font-semibold">
                                {l.label}
                                <Arrow className="h-4 w-4 -translate-x-1 opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100 text-leaf" />
                              </span>
                              {l.desc && <span className="mt-0.5 block text-xs text-ink/60">{l.desc}</span>}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>
        <div className="hidden lg:flex items-center gap-2">
          <a href={brand.appUrl} className="rounded-full px-4 py-2 text-sm font-medium hover:bg-ink/5">Sign in</a>
          <Link href="/demo" className="btn-dark">Book a demo</Link>
        </div>
        <button className="lg:hidden rounded-full p-2 hover:bg-ink/5" aria-label="Open menu" onClick={() => setMobile(true)}>
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {mobile && (
        <div className="fixed inset-0 z-50 bg-cream lg:hidden overflow-y-auto" role="dialog" aria-modal="true">
          <div className="container flex h-16 items-center justify-between">
            <Logo />
            <button className="rounded-full p-2 hover:bg-ink/5" aria-label="Close menu" onClick={() => setMobile(false)}><X className="h-6 w-6" /></button>
          </div>
          <div className="container pb-10">
            {nav.map((g) => (
              <div key={g.label} className="border-b border-ink/10">
                <button className="flex w-full items-center justify-between py-4 text-lg font-medium" onClick={() => setMobileGroup(mobileGroup === g.label ? null : g.label)} aria-expanded={mobileGroup === g.label}>
                  {g.label}
                  <Chevron className={`h-5 w-5 transition ${mobileGroup === g.label ? "rotate-180" : ""}`} />
                </button>
                {mobileGroup === g.label && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 pb-4">
                    {g.columns.flatMap((c) => c.links).map((l) => (
                      <Link key={l.href} href={l.href} className="rounded-xl px-3 py-2 text-ink/80 hover:bg-mint-100">{l.label}</Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-6 flex flex-col gap-3">
              <Link href="/demo" className="btn-dark">Book a demo</Link>
              <a href={brand.appUrl} className="btn-ghost">Sign in</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
