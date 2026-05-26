import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden shimmer">
      <div className="absolute inset-0 bifrost-gradient opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-void/50 to-void" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(123, 92, 255, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 50%, rgba(45, 212, 191, 0.15) 0%, transparent 50%)`,
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <p className="text-sm uppercase tracking-[0.4em] text-aurora-teal mb-4">
          Est. {siteConfig.founded}
        </p>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-wide leading-tight">
          <span className="bifrost-text">{siteConfig.name}</span>
        </h1>
        <p className="mt-4 font-display text-xl sm:text-2xl text-gold-highlight tracking-widest">
          {siteConfig.tagline}
        </p>
        <p className="mt-6 text-lg text-text-muted max-w-2xl mx-auto">
          Where Mortals Ascend to Mastery. Cross the Bifrost of knowledge and enter
          the golden halls of eternal learning.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/admissions">Begin Your Ascension</Button>
          <Button href="/campus" variant="outline">
            Explore Campus
          </Button>
        </div>
      </div>
    </section>
  );
}
