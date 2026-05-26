import Link from "next/link";
import { navLinks, siteConfig } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gold/10 bg-surface mt-auto">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="font-display text-xl text-gold-highlight tracking-wide">
              {siteConfig.name}
            </p>
            <p className="mt-2 text-sm text-text-muted">{siteConfig.description}</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gold uppercase tracking-wider mb-4">
              Explore
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-muted hover:text-gold-highlight transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gold uppercase tracking-wider mb-4">
              Contact
            </h3>
            <address className="not-italic text-sm text-text-muted space-y-2">
              <p>{siteConfig.address}</p>
              <p>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-gold-highlight">
                  {siteConfig.email}
                </a>
              </p>
              <p>{siteConfig.phone}</p>
            </address>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-gold/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-text-muted">
          <p>© {year} {siteConfig.name}. All rights reserved.</p>
          <p className="italic">Where Mortals Ascend to Mastery</p>
        </div>
      </div>
    </footer>
  );
}
