import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { hallOfLegends } from "@/data/alumni";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: `Learn the history, mission, and legendary alumni of ${siteConfig.name}.`,
};

export default function AboutPage() {
  return (
    <>
      <div className="py-20 px-4 text-center border-b border-gold/10">
        <h1 className="font-display text-4xl sm:text-5xl text-gold-highlight">About Asgard</h1>
        <p className="mt-4 text-text-muted max-w-2xl mx-auto">
          Founded in {siteConfig.founded}, Asgard University has stood as a beacon of
          knowledge where mortals ascend to mastery across the six realms of learning.
        </p>
      </div>

      <Section
        title="Our Mission"
        subtitle="To forge scholars of courage, wisdom, and vision who will illuminate the nine realms of human endeavor."
      >
        <div className="max-w-3xl mx-auto glass-panel rounded-lg p-8">
          <p className="text-text-muted leading-relaxed">
            Asgard University believes that education is the true Bifrost—a bridge between
            who you are and who you may become. We cultivate leaders, innovators, and
            stewards of knowledge who carry the golden light of learning into every corner
            of the mortal and immortal worlds.
          </p>
        </div>
      </Section>

      <Section
        title="A Saga of Excellence"
        subtitle="Nearly two centuries of ascension, discovery, and legend."
        className="bg-surface/50"
      >
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <h3 className="font-display text-gold-highlight">1847</h3>
            <p className="mt-2 text-sm text-text-muted">
              Founded as the Asgard Academy of Mortal Arts by visionary educator Astrid
              Goldenveil.
            </p>
          </Card>
          <Card>
            <h3 className="font-display text-gold-highlight">1923</h3>
            <p className="mt-2 text-sm text-text-muted">
              The Einherjar Scholarship program launches, becoming the university&apos;s
              most prestigious merit award.
            </p>
          </Card>
          <Card>
            <h3 className="font-display text-gold-highlight">Today</h3>
            <p className="mt-2 text-sm text-text-muted">
              Over 12,400 students across six realms, with research partnerships spanning
              80 nations.
            </p>
          </Card>
        </div>
      </Section>

      <Section
        title="Hall of Legends"
        subtitle="Notable alumni who have carried the golden light beyond our halls."
      >
        <div className="grid md:grid-cols-2 gap-6">
          {hallOfLegends.map((alumnus) => (
            <Card key={alumnus.name} as="article">
              <p className="text-xs text-aurora-teal uppercase tracking-wider">
                {alumnus.realm}
              </p>
              <h3 className="mt-2 font-display text-xl text-gold-highlight">
                {alumnus.name}
              </h3>
              <p className="text-sm text-text-muted">{alumnus.title}</p>
              <blockquote className="mt-4 text-sm italic text-text-primary border-l-2 border-gold/40 pl-4">
                &ldquo;{alumnus.quote}&rdquo;
              </blockquote>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
