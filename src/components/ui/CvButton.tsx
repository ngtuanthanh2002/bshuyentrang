"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site-config";

type CvButtonProps = {
  className?: string;
  variant?: "primary" | "outline";
  fullWidth?: boolean;
};

function Spinner() {
  return (
    <svg
      className="h-4 w-4 animate-spin"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  );
}

export function CvButton({ className, variant = "outline", fullWidth = false }: CvButtonProps) {
  const [loading, setLoading] = useState(false);

  async function handleOpen() {
    if (loading) return;

    // Mở tab mới ngay lập tức (trong user gesture) để tránh popup blocker
    const newTab = window.open("about:blank", "_blank");
    if (newTab) newTab.opener = null;

    setLoading(true);
    try {
      const response = await fetch(siteConfig.cvPdfUrl);
      if (!response.ok) throw new Error("CV load failed");

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);

      if (newTab) {
        newTab.location.href = url;
      } else {
        window.open(url, "_blank", "noopener,noreferrer");
      }

      setTimeout(() => URL.revokeObjectURL(url), 60_000);
    } catch {
      if (newTab) {
        newTab.location.href = siteConfig.cvPdfUrl;
      } else {
        window.open(siteConfig.cvPdfUrl, "_blank", "noopener,noreferrer");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleOpen}
      disabled={loading}
      aria-busy={loading}
      className={cn(
        "inline-flex cursor-pointer items-center justify-center gap-2 rounded-full text-sm font-semibold transition-all disabled:cursor-wait",
        fullWidth && "w-full",
        variant === "primary"
          ? "bg-primary px-5 py-2.5 text-white shadow-md hover:bg-primary-dark disabled:opacity-80"
          : "border border-primary/20 bg-white px-5 py-2.5 text-primary hover:border-primary/40 hover:bg-primary-50 disabled:opacity-80",
        className,
      )}
    >
      {loading ? (
        <>
          <Spinner />
          Đang mở lý lịch...
        </>
      ) : (
        <>
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
        </>
      )}
    </button>
  );
}
