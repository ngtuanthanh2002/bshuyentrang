"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import { formContent, heroContent } from "@/lib/content";
import { siteConfig } from "@/lib/site-config";
import type { RegistrationFormData } from "@/types";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SuccessModal } from "@/components/ui/SuccessModal";

const inputClass =
  "w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3.5 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/15";

function FieldIcon({ children }: { children: React.ReactNode }) {
  return (
    <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
      {children}
    </span>
  );
}

export function RegistrationSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [submittedData, setSubmittedData] = useState<RegistrationFormData | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    const formData = new FormData(event.currentTarget);
    const payload: RegistrationFormData = {
      name: String(formData.get("name") ?? "").trim(),
      phone: String(formData.get("phone") ?? "").trim(),
      symptom: String(formData.get("symptom") ?? ""),
      time: String(formData.get("time") ?? ""),
      note: String(formData.get("note") ?? "").trim() || undefined,
    };
    if (!payload.name) { setError("Vui lòng nhập họ tên."); return; }
    if (!payload.phone || !/^[0-9\s+\-]{8,15}$/.test(payload.phone)) { setError("Vui lòng nhập số điện thoại hợp lệ."); return; }
    if (!payload.symptom) { setError("Vui lòng chọn triệu chứng."); return; }
    if (!payload.time) { setError("Vui lòng chọn thời gian liên hệ."); return; }

    const form = event.currentTarget;

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const body = (await response.json().catch(() => null)) as { error?: string } | null;
        setError(body?.error ?? "Gửi form thất bại. Vui lòng thử lại hoặc gọi hotline.");
        setIsSubmitting(false);
        return;
      }

      setSubmittedData(payload);
      setShowSuccess(true);
      form.reset();
    } catch {
      setError("Gửi form thất bại. Vui lòng thử lại hoặc gọi hotline.");
    }
    setIsSubmitting(false);
  }

  return (
    <>
      <AnimatedSection id="dang-ky" className="bg-[#f8fafc] py-16 lg:py-24">
        <div className="container-main">
          <div className="overflow-hidden rounded-[1.75rem] bg-white shadow-xl shadow-slate-900/8 sm:rounded-[2rem]">
            <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
              <div className="relative overflow-hidden bg-primary p-8 sm:p-10 lg:p-12">
                <div
                  className="pointer-events-none absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&q=80')",
                    backgroundSize: "cover",
                  }}
                />
                <div className="relative">
                  <p className="text-xs font-semibold uppercase tracking-wider text-white/70">Đăng ký tư vấn</p>
                  <h2 className="mt-2 text-2xl font-bold leading-snug text-white sm:text-3xl">
                    {formContent.modalTitle}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-white/85">{formContent.modalSubtitle}</p>

                  <div className="mt-8 rounded-2xl bg-white/10 p-5 backdrop-blur-sm">
                    <p className="text-xs font-medium uppercase tracking-wider text-white/70">Hotline trực tiếp</p>
                    <a href={`tel:${siteConfig.phone}`} className="mt-1 block text-2xl font-bold text-white hover:text-white/90">
                      {siteConfig.phoneDisplay}
                    </a>
                  </div>

                  <p className="mt-6 flex items-center gap-2.5 text-sm text-white/85">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/20">
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </span>
                    {heroContent.ctaNote}
                  </p>

                  <div className="relative mt-8 hidden aspect-[4/3] overflow-hidden rounded-xl border border-white/15 lg:block">
                    <Image src={heroContent.doctorImage} alt={heroContent.doctorName} fill sizes="300px" className="object-cover object-top" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-4">
                      <p className="text-sm font-bold text-white">{heroContent.doctorName}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 sm:p-10 lg:p-12">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700">
                        Họ và tên <span className="text-primary">*</span>
                      </label>
                      <div className="relative">
                        <FieldIcon>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </FieldIcon>
                        <input id="name" name="name" type="text" required placeholder="Nguyễn Văn A" className={`${inputClass} pl-10`} />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="phone" className="mb-2 block text-sm font-medium text-slate-700">
                        Số điện thoại <span className="text-primary">*</span>
                      </label>
                      <div className="relative">
                        <FieldIcon>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </FieldIcon>
                        <input id="phone" name="phone" type="tel" required placeholder="09xx xxx xxx" className={`${inputClass} pl-10`} />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="symptom" className="mb-2 block text-sm font-medium text-slate-700">
                      Triệu chứng chính <span className="text-primary">*</span>
                    </label>
                    <select id="symptom" name="symptom" required defaultValue="" className={`${inputClass} cursor-pointer`}>
                      <option value="" disabled>— Chọn triệu chứng gần đúng nhất —</option>
                      {formContent.symptoms.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="time" className="mb-2 block text-sm font-medium text-slate-700">
                      Thời gian liên hệ thuận tiện <span className="text-primary">*</span>
                    </label>
                    <select id="time" name="time" required defaultValue="" className={`${inputClass} cursor-pointer`}>
                      <option value="" disabled>— Chọn khung giờ —</option>
                      {formContent.contactTimes.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                    <p className="mt-2 rounded-lg bg-primary-50 px-3 py-2 text-xs leading-relaxed text-slate-600">
                      {formContent.scheduleNote}
                    </p>
                  </div>

                  <div>
                    <label htmlFor="note" className="mb-2 block text-sm font-medium text-slate-700">
                      Ghi chú thêm <span className="font-normal text-slate-400">(không bắt buộc)</span>
                    </label>
                    <textarea id="note" name="note" rows={3} placeholder="Thời gian mắc bệnh, tiền sử điều trị, hoặc câu hỏi bạn muốn hỏi trước..." className={`${inputClass} resize-none`} />
                  </div>

                  {error ? <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">{error}</p> : null}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-primary py-4 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isSubmitting ? "Đang gửi..." : formContent.submit}
                    {!isSubmitting ? (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                        <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    ) : null}
                  </button>

                  <p className="flex items-center justify-center gap-1.5 text-center text-xs text-slate-500">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="1.75" />
                      <path d="M7 11V7a5 5 0 0110 0v4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
                    </svg>
                    {formContent.privacy}
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <SuccessModal open={showSuccess} onClose={() => setShowSuccess(false)} data={submittedData} />
    </>
  );
}
