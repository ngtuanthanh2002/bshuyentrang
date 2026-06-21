"use client";

import { ctaContent } from "@/lib/content";
import { siteConfig } from "@/lib/site-config";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { HighlightedText } from "@/components/ui/HighlightedText";

export function CtaBand() {
  return (
    <AnimatedSection className="bg-white py-12 lg:py-16">
      <div className="container-main">
        <div className="rounded-2xl bg-primary px-6 py-10 text-center sm:px-10 sm:py-12">
          <h2 className="mx-auto max-w-2xl text-xl font-bold leading-snug text-white sm:text-2xl">
            <HighlightedText
              text={ctaContent.title}
              highlights={ctaContent.titleHighlights}
              highlightClassName="font-bold text-emerald-200"
            />
          </h2>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            {ctaContent.checks.map((check) => (
              <span key={check} className="flex items-center gap-1.5 text-xs text-white/85 sm:text-sm">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-emerald-300" aria-hidden>
                  <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {check}
              </span>
            ))}
          </div>
          <a
            href="#dang-ky"
            className="mt-8 inline-flex cursor-pointer items-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary-50"
          >
            {ctaContent.cta}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>

          <div className="mt-8 grid gap-3 border-t border-white/15 pt-6 text-left text-sm text-white/80 sm:grid-cols-2 lg:grid-cols-4">
            <p className="flex items-center gap-2">
              <span aria-hidden>📞</span>
              <a href={`tel:${siteConfig.phone}`} className="font-medium text-white hover:underline">
                {siteConfig.phoneDisplay}
              </a>
            </p>
            <p className="flex items-center gap-2">
              <span aria-hidden>📧</span>
              <a href={`mailto:${siteConfig.email}`} className="hover:underline">{siteConfig.email}</a>
            </p>
            <p className="flex items-start gap-2">
              <span aria-hidden>📍</span>
              <span>{siteConfig.address}</span>
            </p>
            <p className="flex items-start gap-2">
              <span aria-hidden>🕔</span>
              <span>{siteConfig.hours}</span>
            </p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
