import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  centered?: boolean;
};

export function Section({
  id,
  title,
  subtitle,
  children,
  className,
  centered = true,
}: SectionProps) {
  return (
    <section id={id} className={cn("py-20 px-4 sm:px-6 lg:px-8", className)}>
      <div className="mx-auto max-w-6xl">
        <header className={cn("mb-12", centered && "text-center")}>
          <h2 className="font-display text-3xl sm:text-4xl text-gold-highlight tracking-wide">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 max-w-2xl text-text-muted text-lg mx-auto">{subtitle}</p>
          )}
        </header>
        {children}
      </div>
    </section>
  );
}
