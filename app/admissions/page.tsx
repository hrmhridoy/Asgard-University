import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import {
  admissionTimeline,
  tuitionFaq,
  requirements,
} from "@/data/admissions";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Admissions",
  description: `Apply to ${siteConfig.name}. Requirements, deadlines, and financial aid information.`,
};

export default function AdmissionsPage() {
  return (
    <>
      <div className="py-20 px-4 text-center border-b border-gold/10 bifrost-gradient relative">
        <div className="absolute inset-0 bg-void/80" />
        <div className="relative z-10">
          <h1 className="font-display text-4xl sm:text-5xl text-gold-highlight">Admissions</h1>
          <p className="mt-4 text-text-muted max-w-2xl mx-auto">
            Your ascension begins here. Join the ranks of scholars who cross the Bifrost
            into the golden halls.
          </p>
          <div className="mt-8">
            <Button href="/contact">Request Information</Button>
          </div>
        </div>
      </div>

      <Section title="Application Timeline" subtitle="Mark these sacred dates on your calendar.">
        <div className="grid md:grid-cols-3 gap-6">
          {admissionTimeline.map((item) => (
            <Card key={item.period}>
              <h3 className="font-display text-lg text-gold-highlight">{item.period}</h3>
              <dl className="mt-4 space-y-2 text-sm">
                <div>
                  <dt className="text-aurora-teal">Deadline</dt>
                  <dd className="text-text-primary">{item.deadline}</dd>
                </div>
                <div>
                  <dt className="text-aurora-teal">Decision</dt>
                  <dd className="text-text-primary">{item.decision}</dd>
                </div>
              </dl>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        title="Requirements"
        subtitle="What you need to begin your journey."
        className="bg-surface/50"
      >
        <ul className="max-w-2xl mx-auto space-y-3">
          {requirements.map((req) => (
            <li
              key={req}
              className="flex items-start gap-3 text-text-muted"
            >
              <span className="text-gold mt-1" aria-hidden="true">
                ✦
              </span>
              {req}
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Tuition & Aid" subtitle="Frequently asked questions.">
        <div className="space-y-4 max-w-3xl mx-auto">
          {tuitionFaq.map((item) => (
            <Card key={item.question}>
              <h3 className="font-display text-lg text-gold-highlight">{item.question}</h3>
              <p className="mt-2 text-sm text-text-muted">{item.answer}</p>
            </Card>
          ))}
        </div>
      </Section>

      <section className="py-16 px-4 text-center">
        <Button href="/contact" variant="primary">
          Begin Your Application
        </Button>
      </section>
    </>
  );
}
