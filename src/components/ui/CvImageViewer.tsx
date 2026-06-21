"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type CvImageViewerProps = {
  open: boolean;
  imageSrc: string;
  alt: string;
  onClose: () => void;
};

export function CvImageViewer({ open, imageSrc, alt, onClose }: CvImageViewerProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open || !mounted) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex flex-col bg-black/95"
      role="dialog"
      aria-modal="true"
      aria-label={alt}
    >
      <div className="relative shrink-0 px-4 py-3">
        <p className="pr-12 text-center text-sm font-medium text-white/90">Lý lịch bác sĩ</p>
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white text-2xl leading-none text-slate-900 transition-colors hover:bg-slate-100"
          aria-label="Đóng"
        >
          ×
        </button>
      </div>

      <div className="min-h-0 flex-1 overflow-auto overscroll-contain px-3 pb-[max(1rem,env(safe-area-inset-bottom))]">
        <div className="mx-auto flex min-h-full w-full max-w-3xl items-start justify-center py-1">
          <Image
            src={imageSrc}
            alt={alt}
            width={1200}
            height={1600}
            className="h-auto w-full select-none"
            draggable={false}
            priority
          />
        </div>
      </div>
    </div>,
    document.body,
  );
}
