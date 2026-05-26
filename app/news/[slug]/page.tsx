import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllSlugs, getPostBySlug } from "@/lib/blog";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Not Found" };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function NewsArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <Link
        href="/news"
        className="text-sm text-aurora-teal hover:text-gold-highlight transition-colors"
      >
        ← Back to News
      </Link>
      <header className="mt-8 border-b border-gold/10 pb-8">
        <Badge>{post.category}</Badge>
        <h1 className="mt-4 font-display text-3xl sm:text-4xl text-gold-highlight leading-tight">
          {post.title}
        </h1>
        <div className="mt-4 flex flex-wrap gap-4 text-sm text-text-muted">
          <span>{post.author}</span>
          <time dateTime={post.date}>
            {format(new Date(post.date), "MMMM d, yyyy")}
          </time>
          <span>{post.readingTime}</span>
        </div>
      </header>
      <div className="prose-asgard mt-10">
        <MDXRemote source={post.content} />
      </div>
      <footer className="mt-12 pt-8 border-t border-gold/10">
        <Button href="/admissions" variant="outline">
          Apply to {siteConfig.name}
        </Button>
      </footer>
    </article>
  );
}
