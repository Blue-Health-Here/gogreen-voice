import Link from "next/link";
import { brand } from "@/lib/site";

export function LogoMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <rect width="32" height="32" rx="10" fill="#0F3D30" />
      <path d="M9 21c0-7 5-12 14-12 0 9-5 14-12 14" fill="#D8F36A" />
      <path d="M11 23c2-4 5-7 9-9" stroke="#0F3D30" strokeWidth="1.6" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label={`${brand.name} home`}>
      <LogoMark />
      <span className={`font-display text-xl font-medium tracking-tight ${dark ? "text-cream" : "text-ink"}`}>
        GoGreen<span className={dark ? "text-lime" : "text-leaf"}> Health</span>
      </span>
    </Link>
  );
}
