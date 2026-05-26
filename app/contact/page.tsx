import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${siteConfig.name} admissions and administration.`,
};

export default function ContactPage() {
  return (
    <>
      <div className="py-20 px-4 text-center border-b border-gold/10">
        <h1 className="font-display text-4xl sm:text-5xl text-gold-highlight">Contact Us</h1>
        <p className="mt-4 text-text-muted max-w-2xl mx-auto">
          Reach across the Bifrost—we welcome inquiries from aspiring scholars, families,
          and partners.
        </p>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display text-2xl text-gold-highlight mb-6">
              Send a Message
            </h2>
            <ContactForm />
          </div>
          <div>
            <h2 className="font-display text-2xl text-gold-highlight mb-6">
              Visit the Realm
            </h2>
            <div className="glass-panel rounded-lg p-6 space-y-4">
              <div>
                <h3 className="text-sm text-aurora-teal uppercase tracking-wider">
                  Address
                </h3>
                <p className="mt-1 text-text-muted">{siteConfig.address}</p>
              </div>
              <div>
                <h3 className="text-sm text-aurora-teal uppercase tracking-wider">
                  Email
                </h3>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="mt-1 block text-gold-highlight hover:underline"
                >
                  {siteConfig.email}
                </a>
              </div>
              <div>
                <h3 className="text-sm text-aurora-teal uppercase tracking-wider">
                  Phone
                </h3>
                <p className="mt-1 text-text-muted">{siteConfig.phone}</p>
              </div>
            </div>
            <div
              className="mt-8 glass-panel rounded-lg h-64 flex items-center justify-center text-text-muted text-sm"
              aria-label="Campus map placeholder"
            >
              <p className="text-center px-4">
                Campus map — embed Google Maps or Mapbox here when ready.
                <br />
                <span className="text-aurora-teal">1 Rainbow Bridge Way</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
