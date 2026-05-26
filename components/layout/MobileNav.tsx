"use client";

import Link from "next/link";
import { navLinks } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type MobileNavProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileNav({ open, onClose }: MobileNavProps) {
  return (
    <>
      <div
        className={cn(
          "fixed inset-0 z-40 bg-void/80 backdrop-blur-sm transition-opacity lg:hidden",
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
        aria-hidden="true"
      />
      <nav
        className={cn(
          "fixed top-0 right-0 z-50 h-full w-72 bg-surface border-l border-gold/20 p-6 transition-transform lg:hidden",
          open ? "translate-x-0" : "translate-x-full"
        )}
        aria-label="Mobile navigation"
      >
        <div className="flex justify-end mb-8">
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-gold-highlight"
            aria-label="Close menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <ul className="space-y-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={onClose}
                className="block text-lg text-text-primary hover:text-gold-highlight transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <Button href="/admissions" variant="primary" className="w-full">
            Apply Now
          </Button>
        </div>
      </nav>
    </>
  );
}
