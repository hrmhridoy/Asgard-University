import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { housingOptions, clubs, events } from "@/data/campus";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Campus Life",
  description: `Experience housing, clubs, and events at ${siteConfig.name}.`,
};

export default function CampusPage() {
  return (
    <>
      <div className="py-20 px-4 text-center border-b border-gold/10">
        <h1 className="font-display text-4xl sm:text-5xl text-gold-highlight">Campus Life</h1>
        <p className="mt-4 text-text-muted max-w-2xl mx-auto">
          Beyond the lecture halls lies a vibrant community—forge friendships, join
          legendary clubs, and celebrate at events beneath the aurora sky.
        </p>
      </div>

      <Section title="Housing" subtitle="Rest in halls worthy of the golden realm.">
        <div className="grid md:grid-cols-3 gap-6">
          {housingOptions.map((housing) => (
            <Card key={housing.name}>
              <h3 className="font-display text-lg text-gold-highlight">{housing.name}</h3>
              <p className="mt-2 text-sm text-text-muted">{housing.description}</p>
              <p className="mt-4 text-xs text-aurora-teal">{housing.capacity}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        title="Clubs & Organizations"
        subtitle="Find your fellowship among fellow ascendants."
        className="bg-surface/50"
      >
        <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {clubs.map((club) => (
            <li
              key={club}
              className="glass-panel rounded-lg px-4 py-3 text-sm text-text-primary text-center"
            >
              {club}
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Campus Events" subtitle="Mark your calendar for legendary gatherings.">
        <div className="grid md:grid-cols-2 gap-6">
          {events.map((event) => (
            <Card key={event.name}>
              <p className="text-sm text-aurora-teal">{event.date}</p>
              <h3 className="mt-2 font-display text-xl text-gold-highlight">{event.name}</h3>
              <p className="mt-2 text-sm text-text-muted">{event.description}</p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
