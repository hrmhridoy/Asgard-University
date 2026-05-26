import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { realms } from "@/data/realms";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Academics",
  description: `Explore the six realms of learning at ${siteConfig.name}.`,
};

export default function AcademicsPage() {
  return (
    <>
      <div className="py-20 px-4 text-center border-b border-gold/10">
        <h1 className="font-display text-4xl sm:text-5xl text-gold-highlight">Academics</h1>
        <p className="mt-4 text-text-muted max-w-2xl mx-auto">
          Six realms of knowledge await. Each school offers pathways from undergraduate
          foundations to doctoral ascension.
        </p>
      </div>

      <Section
        title="The Six Realms"
        subtitle="Choose your discipline and cross the Bifrost of specialized learning."
      >
        <div className="space-y-12">
          {realms.map((realm) => (
            <Card
              key={realm.id}
              id={`realm-${realm.id}`}
              className="scroll-mt-24"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <span className="text-5xl" aria-hidden="true">
                  {realm.icon}
                </span>
                <div className="flex-1">
                  <Badge>{realm.tagline}</Badge>
                  <h2 className="mt-4 font-display text-2xl text-gold-highlight">
                    {realm.name}
                  </h2>
                  <p className="mt-3 text-text-muted">{realm.description}</p>
                  <h3 className="mt-6 text-sm font-semibold text-aurora-teal uppercase tracking-wider">
                    Featured Programs
                  </h3>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {realm.programs.map((program) => (
                      <li
                        key={program}
                        className="rounded-md bg-surface-elevated px-3 py-1 text-sm text-text-primary border border-gold/10"
                      >
                        {program}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
