"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site-config";
import { CvImageViewer } from "@/components/ui/CvImageViewer";

type CvButtonProps = {
  className?: string;
  variant?: "primary" | "outline";
  fullWidth?: boolean;
};

export function CvButton({ className, variant = "outline", fullWidth = false }: CvButtonProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={cn(
          "inline-flex cursor-pointer items-center justify-center gap-2 rounded-full text-sm font-semibold transition-all",
          fullWidth && "w-full",
          variant === "primary"
            ? "bg-primary px-5 py-2.5 text-white shadow-md hover:bg-primary-dark"
            : "border border-primary/20 bg-white px-5 py-2.5 text-primary hover:border-primary/40 hover:bg-primary-50",
          className,
        )}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Xem lý lịch bác sĩ
      </button>

      <CvImageViewer
        open={open}
        imageSrc={siteConfig.cvImageUrl}
        alt={`Lý lịch ${siteConfig.name}`}
        onClose={() => setOpen(false)}
      />
    </>
  );
}
