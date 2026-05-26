import { cn } from "@/lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "article";
  id?: string;
};

export function Card({ children, className, as: Tag = "div", id }: CardProps) {
  return (
    <Tag
      id={id}
      className={cn("glass-panel rounded-lg p-6 transition-all hover:border-gold/40", className)}
    >
      {children}
    </Tag>
  );
}
