"use client";

import Image from "next/image";
import { testimonialsContent } from "@/lib/content";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedSection, AnimatedItem } from "@/components/ui/AnimatedSection";

export function TestimonialsSection() {
  return (
    <AnimatedSection id="benh-nhan" className="bg-[#f8fafc] py-16 lg:py-24">
      <div className="container-main">
        <SectionHeader title={testimonialsContent.title} align="center" />

        <div className="space-y-6">
          {testimonialsContent.items.map((item, index) => (
            <AnimatedItem key={item.name} delay={index * 0.06}>
              <article className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm sm:p-6 lg:p-7">
                <div className="flex items-start gap-4">
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full ring-2 ring-primary/20 sm:h-16 sm:w-16">
                    <Image src={item.portrait} alt={item.name} fill sizes="64px" className="object-cover object-top" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base font-bold text-slate-900">{item.name}</h3>
                    <p className="mt-0.5 text-xs text-slate-500">{item.meta}</p>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.story}</p>
                    <p className="mt-3 text-sm font-medium text-primary">{item.method}</p>
                    <blockquote className="mt-2 border-l-2 border-primary/30 pl-3 text-sm italic leading-relaxed text-slate-700">
                      &ldquo;{item.quote}&rdquo;
                    </blockquote>
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <p className="mb-2 text-center text-[0.6875rem] font-semibold uppercase tracking-wider text-slate-400">
                      Trước can thiệp
                    </p>
                    <div className="relative aspect-[5/4] overflow-hidden rounded-xl bg-slate-100 sm:aspect-[4/3]">
                      <Image
                        src={item.before}
                        alt={`${item.name} trước can thiệp`}
                        fill
                        sizes="(max-width: 768px) 45vw, 400px"
                        className="object-cover object-center"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="mb-2 text-center text-[0.6875rem] font-semibold uppercase tracking-wider text-primary">
                      Sau can thiệp
                    </p>
                    <div className="relative aspect-[5/4] overflow-hidden rounded-xl bg-slate-100 ring-2 ring-primary/20 sm:aspect-[4/3]">
                      <Image
                        src={item.after}
                        alt={`${item.name} sau can thiệp`}
                        fill
                        sizes="(max-width: 768px) 45vw, 400px"
                        className="object-cover object-center"
                      />
                    </div>
                  </div>
                </div>
              </article>
            </AnimatedItem>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
