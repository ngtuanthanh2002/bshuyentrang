"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { RegistrationFormData } from "@/types";
import { formContent } from "@/lib/content";
import { siteConfig } from "@/lib/site-config";

type SuccessModalProps = {
  open: boolean;
  onClose: () => void;
  data: RegistrationFormData | null;
};

export function SuccessModal({ open, onClose, data }: SuccessModalProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="success-modal-title"
        >
          <button
            type="button"
            aria-label="Đóng"
            onClick={onClose}
            className="absolute inset-0 cursor-pointer bg-slate-900/50 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl"
          >
            <div className="bg-primary px-6 py-8 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white text-2xl text-primary shadow-lg">
                ✓
              </div>
              <h2 id="success-modal-title" className="text-xl font-bold text-white">
                {formContent.successTitle}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-blue-100">
                {formContent.successMessage}
              </p>
            </div>

            <div className="px-6 py-5">
              {data ? (
                <div className="mb-5 rounded-xl bg-primary-50 p-4 text-sm">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary">
                    Thông tin đã gửi
                  </p>
                  <p className="text-slate-800">
                    <span className="text-slate-500">Họ tên:</span> {data.name}
                  </p>
                  <p className="mt-1 text-slate-800">
                    <span className="text-slate-500">Điện thoại:</span> {data.phone}
                  </p>
                  <p className="mt-1 text-slate-800">
                    <span className="text-slate-500">Triệu chứng:</span> {data.symptom}
                  </p>
                </div>
              ) : null}

              <div className="mb-5 space-y-2 border-t border-slate-100 pt-4 text-sm text-slate-600">
                <p className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="shrink-0 text-primary" aria-hidden>
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <a href={`tel:${siteConfig.phone}`} className="font-medium text-primary hover:underline">
                    {siteConfig.phoneDisplay}
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="shrink-0 text-primary" aria-hidden>
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="1.75" />
                    <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
                  </svg>
                  {siteConfig.email}
                </p>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="w-full cursor-pointer rounded-full bg-primary py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
              >
                Đã hiểu
              </button>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
