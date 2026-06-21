"use client";

import Image from "next/image";
import { problemContent } from "@/lib/content";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedSection, AnimatedItem } from "@/components/ui/AnimatedSection";

const PROBLEM_IMAGE =
  "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900&q=80";

export function ProblemSection() {
  return (
    <AnimatedSection id="van-de" className="bg-white py-16 lg:py-24">
      <div className="container-main">
        <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <AnimatedItem className="relative lg:sticky lg:top-[calc(var(--header-height)+1.5rem)]">
            <div className="relative overflow-hidden rounded-2xl shadow-xl shadow-slate-900/10">
              <div className="aspect-[4/5]">
                <Image
                  src={PROBLEM_IMAGE}
                  alt="Tư vấn sức khỏe"
                  fill
                  sizes="(max-width: 1024px) 100vw, 420px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
              </div>
            </div>
          </AnimatedItem>

          <div>
            <SectionHeader label={problemContent.label} title={problemContent.title} className="mb-6" />

            <div className="space-y-4">
              {problemContent.paragraphs.map((para, i) => (
                <AnimatedItem key={i} delay={i * 0.05}>
                  <p className="text-sm leading-relaxed text-slate-600 sm:text-base">{para}</p>
                </AnimatedItem>
              ))}
            </div>

            <div className="mt-8 space-y-4">
              {problemContent.cases.map((caseItem, i) => (
                <AnimatedItem key={caseItem.label} delay={0.15 + i * 0.06}>
                  <article className="relative overflow-hidden rounded-2xl bg-primary p-5 text-white shadow-lg shadow-primary/20 sm:p-6">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-blue-200">
                      {caseItem.label}
                    </p>
                    <p className="text-sm leading-relaxed text-blue-50">
                      {caseItem.highlight ? (
                        <>
                          {caseItem.text.split(caseItem.highlight)[0]}
                          <strong className="font-semibold text-white">{caseItem.highlight}</strong>
                          {caseItem.text.split(caseItem.highlight)[1]}
                        </>
                      ) : (
                        caseItem.text
                      )}
                    </p>
                  </article>
                </AnimatedItem>
              ))}
            </div>

            <AnimatedItem>
              <div className="mt-8 flex items-start gap-4 rounded-2xl border border-primary/15 bg-primary-50 p-5 sm:p-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="text-sm leading-relaxed text-slate-700 sm:text-base">{problemContent.insight}</p>
              </div>
            </AnimatedItem>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
