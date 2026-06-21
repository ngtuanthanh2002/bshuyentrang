"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { faqContent } from "@/lib/content";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedSection, AnimatedItem } from "@/components/ui/AnimatedSection";
import { cn } from "@/lib/utils";

function FaqItem({ question, answer, isOpen, onToggle }: { question: string; answer: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className={cn("overflow-hidden rounded-xl border transition-colors", isOpen ? "border-primary/30 bg-primary-50" : "border-slate-100 bg-white hover:border-primary/20")}>
      <button type="button" onClick={onToggle} className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left" aria-expanded={isOpen}>
        <span className="text-sm font-semibold text-slate-900">{question}</span>
        <span className={cn("flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-base transition-all", isOpen ? "rotate-45 border-primary bg-primary text-white" : "border-slate-200 text-primary")}>+</span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }}>
            <p className="px-5 pb-4 text-sm leading-relaxed text-slate-600">{answer}</p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <AnimatedSection id="faq" className="bg-white py-16 lg:py-24">
      <div className="container-main">
        <div className="mx-auto max-w-3xl">
          <SectionHeader label={faqContent.label} title={faqContent.title} align="center" />
          <div className="space-y-3">
            {faqContent.items.map((item, index) => (
              <AnimatedItem key={item.question}>
                <FaqItem question={item.question} answer={item.answer} isOpen={openIndex === index} onToggle={() => setOpenIndex(openIndex === index ? null : index)} />
              </AnimatedItem>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
