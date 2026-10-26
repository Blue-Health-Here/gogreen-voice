type P = { className?: string };
const base = (d: React.ReactNode, className = "h-5 w-5") => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">{d}</svg>
);
export const Arrow = ({ className }: P) => base(<path d="M5 12h14M13 6l6 6-6 6" />, className);
export const Chevron = ({ className }: P) => base(<path d="m6 9 6 6 6-6" />, className);
export const Check = ({ className }: P) => base(<path d="M20 6 9 17l-5-5" />, className);
export const Play = ({ className }: P) => base(<path d="M7 4v16l13-8z" fill="currentColor" />, className);
export const Pause = ({ className }: P) => base(<><rect x="6" y="4" width="4" height="16" rx="1" fill="currentColor" /><rect x="14" y="4" width="4" height="16" rx="1" fill="currentColor" /></>, className);
export const Phone = ({ className }: P) => base(<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />, className);
export const Shield = ({ className }: P) => base(<><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></>, className);
export const Bolt = ({ className }: P) => base(<path d="M13 2 3 14h9l-1 8 10-12h-9z" />, className);
export const Plug = ({ className }: P) => base(<><path d="M12 22v-5M9 8V2M15 8V2" /><path d="M18 8v5a6 6 0 0 1-12 0V8z" /></>, className);
export const Chart = ({ className }: P) => base(<><path d="M3 3v18h18" /><path d="m7 15 4-4 3 3 5-6" /></>, className);
export const Users = ({ className }: P) => base(<><circle cx="9" cy="7" r="4" /><path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2M16 3.1a4 4 0 0 1 0 7.8M21 21v-2a4 4 0 0 0-3-3.9" /></>, className);
export const Doc = ({ className }: P) => base(<><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6M8 13h8M8 17h5" /></>, className);
export const Menu = ({ className }: P) => base(<path d="M4 7h16M4 12h16M4 17h16" />, className);
export const X = ({ className }: P) => base(<path d="M18 6 6 18M6 6l12 12" />, className);
export const Lock = ({ className }: P) => base(<><rect x="4" y="11" width="16" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></>, className);
export const Eye = ({ className }: P) => base(<><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" /><circle cx="12" cy="12" r="3" /></>, className);
