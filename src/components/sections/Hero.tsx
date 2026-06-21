"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { heroContent } from "@/lib/content";
import { siteConfig } from "@/lib/site-config";

const stats = [
  { value: "15+", label: "năm chuyên sâu" },
  { value: "1:1", label: "tư vấn miễn phí" },
  { value: "Miễn phí", label: "buổi đầu tiên" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pb-6 pt-5 sm:pb-8 sm:pt-6 lg:pb-10 lg:pt-8">
      <div className="pointer-events-none absolute -left-32 top-20 h-[28rem] w-[28rem] rounded-full bg-primary-50/70 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />

      <div className="container-main relative">
        <div className="grid items-start gap-5 max-lg:gap-5 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="order-1 lg:order-1 lg:pr-4"
          >
            <h1 className="max-lg:text-[1.3125rem] max-lg:leading-[1.2] text-[clamp(1.375rem,2.6vw,2.125rem)] font-bold leading-[1.15] tracking-tight text-slate-900 lg:text-[clamp(1.5rem,2.8vw,2.25rem)]">
              {heroContent.headline}{" "}
              <span className="text-primary">{heroContent.headlineAccent}</span>
            </h1>

            <p className="mt-3 max-lg:mt-2.5 max-lg:text-[0.8125rem] max-lg:leading-[1.65] text-sm leading-relaxed text-slate-600 lg:text-[0.9375rem] lg:leading-relaxed">
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
            className="order-2 lg:order-2"
          >
            <div className="relative mx-auto max-w-[240px] max-lg:max-w-[240px] sm:max-w-[320px] lg:mx-0 lg:max-w-none">
              <div className="relative aspect-[4/5] w-full max-h-[min(34vh,240px)] max-lg:max-h-[min(34vh,240px)] sm:max-h-[min(44vh,380px)] lg:max-h-[400px]">
                <div className="absolute inset-[6%] rounded-full bg-gradient-to-br from-primary-50 to-primary/10" />
                <div className="absolute inset-0">
                  <Image
                    src={heroContent.doctorImage}
                    alt={heroContent.doctorName}
                    fill
                    priority
                    sizes="(max-width: 1024px) 320px, 400px"
                    className="object-contain object-bottom drop-shadow-[0_16px_32px_rgba(3,96,217,0.15)]"
                  />
                </div>
              </div>

              <div className="mt-3 max-lg:mt-2.5 rounded-xl border border-slate-100 bg-white p-3.5 shadow-sm lg:hidden">
                <p className="text-sm font-bold text-slate-900">{heroContent.doctorName}</p>
                <p className="mt-0.5 text-xs font-medium text-primary">{heroContent.specialty}</p>
                <ul className="mt-2 space-y-1.5">
                  {heroContent.credentials.map((line) => (
                    <li key={line} className="text-xs leading-relaxed text-slate-500">{line}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-3 hidden rounded-xl border border-slate-100 bg-white p-3.5 shadow-sm lg:block">
                <p className="text-sm font-bold text-slate-900">{heroContent.doctorName}</p>
                <p className="mt-0.5 text-xs font-medium text-primary">{heroContent.specialty}</p>
                <ul className="mt-2 space-y-1 border-t border-slate-100 pt-2">
                  {heroContent.credentials.map((line) => (
                    <li key={line} className="text-[0.6875rem] leading-relaxed text-slate-500">{line}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="relative z-10 mt-5 max-lg:mt-4 sm:mt-6">
          <div className="grid grid-cols-3 divide-x divide-slate-100 rounded-xl border border-slate-100 bg-white shadow-md shadow-slate-900/5">
            {stats.map((stat) => (
              <div key={stat.label} className="max-lg:px-2 max-lg:py-2.5 px-2 py-3 text-center sm:px-6 sm:py-4">
                <p className="max-lg:text-base text-lg font-bold text-primary sm:text-xl">{stat.value}</p>
                <p className="mt-0.5 max-lg:text-[0.5625rem] max-lg:leading-tight text-[0.625rem] text-slate-500 sm:text-xs">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
