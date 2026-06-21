"use client";

import { processContent } from "@/lib/content";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedSection, AnimatedItem } from "@/components/ui/AnimatedSection";

export function ProcessSection() {
  return (
    <AnimatedSection id="quy-trinh" className="bg-primary py-16 lg:py-24">
      <div className="container-main">
        <SectionHeader label={processContent.label} title={processContent.title} theme="dark" align="center" />

        <div className="hidden lg:block">
          <div className="relative mb-10 flex items-center justify-between px-[calc(12.5%-1.25rem)]">
            <div className="absolute left-[12.5%] right-[12.5%] top-1/2 h-px -translate-y-1/2 bg-white/20" />
            {processContent.steps.map((step) => (
              <div key={step.num} className="relative z-10">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-sm font-bold text-primary shadow-lg">
                  {step.num}
                </span>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-4 gap-5">
            {processContent.steps.map((step, i) => (
              <AnimatedItem key={step.num} delay={i * 0.06}>
                <div className="flex h-full flex-col rounded-2xl bg-white/10 p-5 backdrop-blur-sm">
                  {step.tag ? (
                    <span className="mb-3 inline-flex w-fit rounded-full bg-white/15 px-2.5 py-0.5 text-[0.6875rem] font-semibold text-blue-100">{step.tag}</span>
                  ) : <span className="mb-3 block h-5" />}
                  <h3 className="text-sm font-bold leading-snug text-white">{step.title}</h3>
                  <p className="mt-2 flex-1 text-xs leading-relaxed text-blue-100/80">{step.desc}</p>
                </div>
              </AnimatedItem>
            ))}
          </div>
        </div>

        <div className="space-y-0 lg:hidden">
          {processContent.steps.map((step, i) => (
            <AnimatedItem key={step.num} delay={i * 0.06}>
              <div className="relative flex gap-4 pb-8 last:pb-0">
                {i < processContent.steps.length - 1 ? (
                  <div className="absolute left-[1.125rem] top-10 h-[calc(100%-1.5rem)] w-px bg-white/20" />
                ) : null}
                <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-sm font-bold text-primary">{step.num}</span>
                <div className="min-w-0 flex-1 rounded-xl bg-white/10 p-4">
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <h3 className="text-sm font-bold text-white">{step.title}</h3>
                    {step.tag ? <span className="rounded-full bg-white/15 px-2 py-0.5 text-[0.6875rem] font-semibold text-blue-100">{step.tag}</span> : null}
                  </div>
                  <p className="text-xs leading-relaxed text-blue-100/80">{step.desc}</p>
                </div>
              </div>
            </AnimatedItem>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
