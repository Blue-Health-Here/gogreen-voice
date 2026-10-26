import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTA } from "@/components/Sections";
import { posts } from "@/lib/content";

export const dynamicParams = false;
export const generateStaticParams = () => posts.map((p) => ({ slug: p.slug }));
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = posts.find((x) => x.slug === slug);
  return p ? { title: p.title, description: p.excerpt } : {};
}

// Body entries: "## " is a heading, consecutive "- " entries form a list, anything else is a paragraph.
function blocks(body: string[]) {
  const out: React.ReactNode[] = [];
  for (let i = 0; i < body.length; i++) {
    const b = body[i];
    if (b.startsWith("## ")) out.push(<h2 key={i}>{b.slice(3)}</h2>);
    else if (b.startsWith("- ")) {
      const items: string[] = [];
      while (i < body.length && body[i].startsWith("- ")) items.push(body[i++].slice(2));
      i--;
      out.push(<ul key={i}>{items.map((t) => <li key={t}>{t}</li>)}</ul>);
    } else out.push(<p key={i}>{b}</p>);
  }
  return out;
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = posts.find((x) => x.slug === slug);
  if (!p) notFound();
  return (
    <>
      <article className="container max-w-3xl pt-16 md:pt-24">
        <Link href="/blog" className="text-sm font-semibold text-leaf">← Blog</Link>
        <p className="mt-8 text-xs font-semibold uppercase tracking-[.14em] text-ink/50">{p.tag} · {p.read} read</p>
        <h1 className="mt-4 text-4xl font-medium leading-tight md:text-5xl">{p.title}</h1>
        <p className="lead mt-5">{p.excerpt}</p>
        <div className="prose-gg mt-10 border-t border-ink/10 pt-10 text-lg">{blocks(p.body)}</div>
      </article>
      <CTA />
    </>
  );
}
