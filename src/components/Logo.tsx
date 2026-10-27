import Link from "next/link";
import { useId } from "react";
import { brand } from "@/lib/site";

// Greenline brand mark (teal-to-green gradient), from greenlinepriorauth.com.
const MARK = "M19.9122 4.81206C20.1057 4.92375 20.1055 5.20302 19.912 5.31457L4.04831 14.4577C3.86218 14.565 3.8532 14.8303 4.03164 14.9499L8.69296 18.0749C8.69321 18.0751 8.69336 18.0754 8.69336 18.0757C8.69336 18.076 8.69352 18.0763 8.69377 18.0764L8.73144 18.1006L8.90021 18.2141C8.90088 18.2145 8.90178 18.2144 8.90235 18.2139C8.90292 18.2133 8.9038 18.2132 8.90447 18.2136L16.491 23.1445C16.6726 23.2625 16.6655 23.5306 16.478 23.6389L11.645 26.4299C11.5553 26.4817 11.4447 26.4817 11.3549 26.4299L0.14503 19.9578C0.0552854 19.9059 0 19.8102 0 19.7066V6.76219C0 6.65856 0.0552849 6.56281 0.14503 6.51099L11.355 0.0388157C11.4447 -0.0130012 11.5553 -0.0130005 11.645 0.0388171L19.9122 4.81206ZM23 19.7062C23 19.81 22.9445 19.9059 22.8545 19.9577L22.7626 20.0105C22.6685 20.0646 22.5521 20.0617 22.4608 20.0028L14.9386 15.1516C14.7571 15.0346 14.7626 14.7673 14.9487 14.6578L22.5629 10.179C22.7562 10.0653 23 10.2047 23 10.429V19.7062Z";

export function LogoMark({ className = "h-7 w-auto" }: { className?: string }) {
  const id = useId();
  return (
    <svg viewBox="0 0 23 27" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="11.5" y1="0" x2="11.5" y2="26.47" gradientUnits="userSpaceOnUse">
          <stop stopColor="#51CBC6" />
          <stop offset="1" stopColor="#24D66D" />
        </linearGradient>
      </defs>
      <path d={MARK} fill={`url(#${id})`} />
    </svg>
  );
}

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label={`${brand.name} home`}>
      <LogoMark />
      <span className={`text-[19px] font-semibold tracking-tight ${dark ? "text-white" : "text-ink"}`}>
        Greenline<span className={dark ? "text-lime" : "text-leaf"}> Voice</span>
      </span>
    </Link>
  );
}
