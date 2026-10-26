import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTA } from "@/components/Sections";
import { posts } from "@/lib/content";

export const dynamicParams = false;
export const generateStaticParams = () => posts.map((p) => ({ slug: p.slug }));
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = posts.find((x) => x.slug === params.slug);
  return p ? { title: p.title, description: p.excerpt } : {};
}

export default function Post({ params }: { params: { slug: string } }) {
  const p = posts.find((x) => x.slug === params.slug);
  if (!p) notFound();
  return (
    <>
      <article className="container max-w-3xl pt-16 md:pt-24">
        <Link href="/blog" className="text-sm font-semibold text-leaf">← Blog</Link>
        <p className="mt-8 text-xs font-semibold uppercase tracking-[.14em] text-ink/50">{p.tag} · {p.read} read</p>
        <h1 className="mt-4 text-4xl font-medium leading-tight md:text-5xl">{p.title}</h1>
        <p className="lead mt-5">{p.excerpt}</p>
        <div className="prose-gg mt-10 border-t border-ink/10 pt-10 text-lg">{p.body.map((b, i) => <p key={i}>{b}</p>)}</div>
      </article>
      <CTA />
    </>
  );
}
