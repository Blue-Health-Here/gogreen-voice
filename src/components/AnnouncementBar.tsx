import Link from "next/link";
import { brand } from "@/lib/site";
import { Arrow } from "./Icons";

export function AnnouncementBar() {
  return (
    <div className="bg-forest-900 text-cream text-xs sm:text-sm">
      <div className="container flex items-center justify-center gap-3 py-2.5 text-center">
        <span className="hidden sm:inline rounded-full bg-lime px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider text-ink">New</span>
        <span className="text-cream/85">{brand.announcement.text}</span>
        <Link href={brand.announcement.href} className="inline-flex items-center gap-1 font-semibold text-lime hover:underline">
          {brand.announcement.cta} <Arrow className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
}
