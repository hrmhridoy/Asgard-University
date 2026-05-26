import type { Metadata } from "next";
import Link from "next/link";
import { format } from "date-fns";
import { getAllPosts } from "@/lib/blog";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "News",
  description: `Latest news and announcements from ${siteConfig.name}.`,
};

export default function NewsPage() {
  const posts = getAllPosts();
  const categories = [...new Set(posts.map((p) => p.category))];

  return (
    <>
      <div className="py-20 px-4 text-center border-b border-gold/10">
        <h1 className="font-display text-4xl sm:text-5xl text-gold-highlight">News</h1>
        <p className="mt-4 text-text-muted max-w-2xl mx-auto">
          Dispatches from the golden halls—research breakthroughs, campus events, and
          realm announcements.
        </p>
        {categories.length > 0 && (
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <Badge key={cat}>{cat}</Badge>
            ))}
          </div>
        )}
      </div>

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          {posts.map((post) => (
            <Link key={post.slug} href={`/news/${post.slug}`}>
              <Card as="article" className="h-full hover:scale-[1.01] cursor-pointer">
                <Badge>{post.category}</Badge>
                <h2 className="mt-4 font-display text-xl text-gold-highlight">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm text-text-muted">{post.excerpt}</p>
                <div className="mt-4 flex items-center justify-between text-xs text-aurora-teal">
                  <span>{post.author}</span>
                  <time dateTime={post.date}>
                    {format(new Date(post.date), "MMM d, yyyy")}
                  </time>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
