import { Hero } from "@/components/home/Hero";
import { RealmGrid } from "@/components/home/RealmGrid";
import { NewsPreview } from "@/components/home/NewsPreview";
import { Button } from "@/components/ui/Button";
import { stats } from "@/data/site";
import { getAllPosts } from "@/lib/blog";

export default function HomePage() {
  const latestPosts = getAllPosts().slice(0, 3);

  return (
    <>
      <Hero />

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center glass-panel rounded-lg py-6">
              <p className="font-display text-2xl sm:text-3xl bifrost-text">{stat.value}</p>
              <p className="mt-2 text-sm text-text-muted uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <RealmGrid />
      <NewsPreview posts={latestPosts} />

      <section className="py-20 px-4">
        <div className="mx-auto max-w-4xl text-center glass-panel rounded-xl p-12 shimmer">
          <h2 className="font-display text-3xl text-gold-highlight">
            Ready to Cross the Bifrost?
          </h2>
          <p className="mt-4 text-text-muted">
            Join thousands of scholars who have ascended through our golden halls.
            Applications for Fall 2025 are now open.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/admissions">Apply for Admission</Button>
            <Button href="/contact" variant="outline">
              Schedule a Visit
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
