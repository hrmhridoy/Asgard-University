import Link from "next/link";
import { format } from "date-fns";
import type { PostMeta } from "@/lib/blog";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

type NewsPreviewProps = {
  posts: PostMeta[];
};

export function NewsPreview({ posts }: NewsPreviewProps) {
  if (posts.length === 0) return null;

  return (
    <Section
      title="From the Golden Halls"
      subtitle="Latest news and announcements from across the realms."
      centered
    >
      <div className="grid gap-6 md:grid-cols-3">
        {posts.map((post) => (
          <Link key={post.slug} href={`/news/${post.slug}`}>
            <Card as="article" className="h-full hover:scale-[1.02] cursor-pointer">
              <Badge>{post.category}</Badge>
              <h3 className="mt-4 font-display text-lg text-gold-highlight line-clamp-2">
                {post.title}
              </h3>
              <p className="mt-2 text-sm text-text-muted line-clamp-3">{post.excerpt}</p>
              <time className="mt-4 block text-xs text-aurora-teal" dateTime={post.date}>
                {format(new Date(post.date), "MMMM d, yyyy")}
              </time>
            </Card>
          </Link>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Button href="/news" variant="outline">
          View All News
        </Button>
      </div>
    </Section>
  );
}
