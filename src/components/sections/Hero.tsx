"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { heroContent } from "@/lib/content";
import { siteConfig } from "@/lib/site-config";
import { CvButton } from "@/components/ui/CvButton";
import { cn } from "@/lib/utils";

function DoctorCard({ className }: { className?: string }) {
  return (
    <div className={className}>
      <p className="text-sm font-bold text-slate-900">{heroContent.doctorName}</p>
      <p className="mt-0.5 text-xs font-medium text-primary">{heroContent.specialty}</p>
      <ul className="mt-2 space-y-1 border-t border-slate-100 pt-2">
        {heroContent.credentials.map((line) => (
          <li key={line} className="text-[0.6875rem] leading-snug text-slate-500 lg:text-xs lg:leading-relaxed">
            {line}
          </li>
        ))}
      </ul>
      <CvButton className="mt-3" fullWidth />
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pb-6 pt-5 sm:pb-8 sm:pt-6 lg:pb-18 lg:pt-8">
      <div className="pointer-events-none absolute -left-32 top-20 h-[28rem] w-[28rem] rounded-full bg-primary-50/70 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />

      <div className="container-main relative lg:pt-4">
        <div className="grid gap-5 max-lg:gap-5 lg:grid-cols-[1.08fr_0.92fr] lg:gap-8 xl:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="order-1 lg:order-1 lg:pl-4 lg:pr-2 xl:pl-8"
          >
            <h1 className="max-lg:text-[1.3125rem] max-lg:leading-[1.2] text-[clamp(1.375rem,2.6vw,2.125rem)] leading-[1.15] tracking-tight lg:text-[clamp(1.5rem,2.8vw,2.25rem)]">
              <span className="font-normal text-slate-900">{heroContent.headline}</span>{" "}
              <span className="font-bold text-accent">{heroContent.headlineAccent}</span>
            </h1>

            <p className="mt-3 max-lg:mt-2.5 max-lg:text-[0.8125rem] max-lg:leading-[1.65] text-sm leading-relaxed text-slate-600 lg:mt-4 lg:text-[0.9375rem] lg:leading-relaxed">
              {heroContent.subheadline}{" "}
              <span className="text-slate-700">{heroContent.subheadlineExtra}</span>
            </p>

            <ul className="mt-4 max-lg:mt-3 max-lg:grid-cols-1 grid gap-x-4 gap-y-2 sm:grid-cols-2 lg:mt-5 lg:gap-y-2.5">
              {heroContent.highlights.map((item) => (
                <li key={item} className="flex items-start gap-2 text-xs text-slate-700 sm:text-[0.8125rem] lg:text-sm">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0 text-primary" aria-hidden>
                    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-5 max-lg:mt-4 max-lg:flex-col max-lg:items-stretch flex flex-wrap items-center gap-2.5 lg:mt-6">
              <a
                href="#dang-ky"
                className="inline-flex max-lg:w-full max-lg:justify-center max-lg:py-3 cursor-pointer items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary-dark"
              >
                {heroContent.cta}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex max-lg:w-full max-lg:justify-center max-lg:py-3 cursor-pointer items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:border-primary/30 hover:text-primary"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-50 text-primary">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {siteConfig.phoneDisplay}
              </a>
            </div>

            <p className="mt-2.5 max-lg:text-center text-xs text-slate-500">{heroContent.ctaNote}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="order-2 lg:order-2 lg:pt-2"
          >
            <div className="relative mx-auto w-full max-w-[240px] sm:max-w-[320px] lg:mx-0 lg:max-w-[400px]">
              <div className="relative mx-auto w-full max-w-[280px] lg:max-w-none">
                <div className="absolute inset-x-[6%] bottom-[2%] top-[6%] rounded-full bg-gradient-to-br from-primary-50 to-primary/10" />
                <div className="relative h-[min(34vh,240px)] w-full sm:h-[min(40vh,320px)] lg:h-[min(42vh,420px)]">
                  <Image
                    src={heroContent.doctorImage}
                    alt={heroContent.doctorName}
                    fill
                    priority
                    sizes="(max-width: 1024px) 320px, 400px"
                    className="object-contain object-bottom drop-shadow-[0_16px_32px_rgba(19,45,73,0.15)]"
                  />
                </div>
              </div>

              <DoctorCard
                className={cn(
                  "relative z-10 rounded-xl border border-slate-100 bg-white p-3.5 shadow-sm",
                  "mt-1 max-lg:mt-2.5 lg:-mt-3 lg:p-3",
                )}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
