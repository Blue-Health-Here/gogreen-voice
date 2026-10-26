import type { Metadata } from "next";
export const metadata: Metadata = { title: "Terms of service" };
export default function Page() {
  return (
    <section className="container max-w-3xl py-20">
      <h1 className="text-4xl font-medium">Terms of service</h1>
      <p className="mt-6 text-ink/70">Placeholder. Add your legal team&apos;s approved Terms of service here.</p>
    </section>
  );
}
