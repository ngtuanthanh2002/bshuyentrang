import { cn } from "@/lib/utils";

type IconProps = { className?: string };

export function IconStockings({ className }: IconProps) {
  return (
    <svg className={cn("h-5 w-5", className)} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M8 3v8l-2 10h4l1-6 1 6h4l-2-10V3" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 3v8" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

export function IconSupplement({ className }: IconProps) {
  return (
    <svg className={cn("h-5 w-5", className)} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="4" y="8" width="16" height="8" rx="4" stroke="currentColor" strokeWidth="1.75" />
      <path d="M12 8V5M12 16v3" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

export function IconCold({ className }: IconProps) {
  return (
    <svg className={cn("h-5 w-5", className)} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 2v20M17 5l-10 14M7 5l10 14M4 12h16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

export function IconClinic({ className }: IconProps) {
  return (
    <svg className={cn("h-5 w-5", className)} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M3 21V7l9-4 9 4v14" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 21v-6h6v6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 7v4M10 9h4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

export type TriedIconKey = "stockings" | "supplement" | "cold" | "clinic";

const triedIconMap = {
  stockings: IconStockings,
  supplement: IconSupplement,
  cold: IconCold,
  clinic: IconClinic,
} as const;

export function TriedIcon({ name, className }: { name: TriedIconKey; className?: string }) {
  const Icon = triedIconMap[name];
  return <Icon className={className} />;
}
