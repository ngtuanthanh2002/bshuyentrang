"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  label?: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
};

export function SectionHeader({
  label,
  title,
  lead,
  align = "left",
  theme = "light",
  className,
}: SectionHeaderProps) {
  const isDark = theme === "dark";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5 }}
      className={cn(
        "mb-8 md:mb-10",
        align === "center" && "mx-auto max-w-2xl text-center",
        className,
      )}
    >
      {label ? (
        <span className={cn("mb-2 inline-block text-xs font-semibold uppercase tracking-[0.18em]", isDark ? "text-blue-200" : "text-primary")}>
          {label}
        </span>
      ) : null}
      <h2 className={cn("text-[clamp(1.375rem,2.8vw,2.125rem)] font-bold leading-snug tracking-tight", isDark ? "text-white" : "text-slate-900")}>
        {title}
      </h2>
      {lead ? (
        <p className={cn("mt-3 text-sm leading-relaxed sm:text-base", isDark ? "text-slate-300" : "text-slate-600")}>
          {lead}
        </p>
      ) : null}
    </motion.div>
  );
}
