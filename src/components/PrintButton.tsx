"use client";

export function PrintButton({ className = "btn-dark" }: { className?: string }) {
  return <button type="button" onClick={() => window.print()} className={className}>Print or save as PDF</button>;
}
