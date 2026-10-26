import type { Metadata } from "next";
import { DemoForm } from "@/components/DemoForm";
import { CheckList } from "@/components/Sections";

export const metadata: Metadata = { title: "Book a demo" };
export default function Demo() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_at_top_left,black,transparent_60%)]" />
      <div className="container relative grid gap-12 py-16 md:py-24 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <span className="eyebrow">Book a demo</span>
          <h1 className="mt-5 text-4xl font-medium leading-tight md:text-6xl">See GoGreen Voice on your own workflows.</h1>
          <p className="lead mt-6">In 30 minutes, we&apos;ll walk through live calls, show where results go and estimate how many hours your team could get back.</p>
          <div className="mt-10"><CheckList items={["Live call walkthrough for your top workflow", "Integration options for your PM / EHR", "ROI estimate based on your call volume", "Security and BAA overview"]} /></div>
        </div>
        <DemoForm />
      </div>
    </section>
  );
}
