"use client";

import { problemContent } from "@/lib/content";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedSection, AnimatedItem } from "@/components/ui/AnimatedSection";
import { HighlightedText } from "@/components/ui/HighlightedText";

function renderCaseText(text: string, highlight?: string) {
  if (!highlight) return text;

  const parts = text.split(highlight);
  return (
    <>
      {parts[0]}
      <strong className="font-semibold text-white">{highlight}</strong>
      {parts[1]}
    </>
  );
}

export function ProblemSection() {
  return (
    <AnimatedSection id="van-de" className="bg-[#f8fafc] py-16 lg:py-24">
      <div className="container-main">
        <SectionHeader
          label={problemContent.label}
          title={problemContent.title}
          titleHighlights={problemContent.titleHighlights}
          className="mx-auto mb-10 max-w-3xl text-center"
        />

        <div className="mx-auto max-w-3xl space-y-4">
          {problemContent.paragraphs.map((para, i) => (
            <AnimatedItem key={i} delay={i * 0.05}>
              <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                <HighlightedText text={para.text} highlights={para.highlights} />
              </p>
            </AnimatedItem>
          ))}
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {problemContent.cases.map((caseItem, i) => (
            <AnimatedItem key={caseItem.label} delay={0.15 + i * 0.06}>
              <article className="flex h-full flex-col rounded-2xl bg-primary p-5 text-white shadow-lg shadow-primary/20 sm:p-6">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-white/70">
                  {caseItem.label}
                </p>
                <p className="flex-1 text-sm leading-relaxed text-white/90">
                  {renderCaseText(caseItem.text, caseItem.highlight)}
                </p>
              </article>
            </AnimatedItem>
          ))}
        </div>

        <AnimatedItem>
          <div className="mx-auto mt-10 flex max-w-3xl items-start gap-4 rounded-2xl border border-primary/15 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              <HighlightedText
                text={problemContent.insight}
                highlights={problemContent.insightHighlights}
              />
            </p>
          </div>
        </AnimatedItem>
      </div>
    </AnimatedSection>
  );
}
