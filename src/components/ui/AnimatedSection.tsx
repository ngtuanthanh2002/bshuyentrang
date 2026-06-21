"use client";

import { cn } from "@/lib/utils";

type AnimatedSectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

export function AnimatedSection({ children, className, id }: AnimatedSectionProps) {
  return (
    <section id={id} className={cn("relative overflow-hidden", className)}>
      {children}
    </section>
  );
}

export function AnimatedItem({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <div className={className}>{children}</div>
  );
}
