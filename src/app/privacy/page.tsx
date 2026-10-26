import type { Metadata } from "next";
export const metadata: Metadata = { title: "Privacy policy" };
export default function Page() {
  return (
    <section className="container max-w-3xl py-20">
      <h1 className="text-4xl font-medium">Privacy policy</h1>
      <p className="mt-6 text-ink/70">Placeholder. Add your legal team&apos;s approved Privacy policy here.</p>
    </section>
  );
}
