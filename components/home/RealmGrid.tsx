import Link from "next/link";
import { realms } from "@/data/realms";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

export function RealmGrid() {
  return (
    <Section
      id="realms"
      title="Six Realms of Learning"
      subtitle="Each academic school is a realm unto itself—choose your path across the Bifrost of disciplines."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {realms.map((realm) => (
          <Link key={realm.id} href={`/academics#realm-${realm.id}`}>
            <Card className="h-full hover:scale-[1.02] cursor-pointer">
              <span className="text-3xl" aria-hidden="true">
                {realm.icon}
              </span>
              <h3 className="mt-4 font-display text-lg text-gold-highlight">
                {realm.name}
              </h3>
              <p className="text-sm text-aurora-teal mt-1">{realm.tagline}</p>
              <p className="mt-3 text-sm text-text-muted line-clamp-3">
                {realm.description}
              </p>
            </Card>
          </Link>
        ))}
      </div>
    </Section>
  );
}
