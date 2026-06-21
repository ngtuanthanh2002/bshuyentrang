import type { Metadata } from "next";
import Link from "next/link";
import { thankYouContent } from "@/lib/content";
import { siteConfig } from "@/lib/site-config";
import { ThankYouSummary } from "@/components/forms/ThankYouSummary";

export const metadata: Metadata = {
  title: `Cảm ơn — ${siteConfig.name}`,
  description: thankYouContent.lead,
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <header className="flex h-16 items-center bg-primary px-5 md:px-8">
        <Link href="/" className="text-sm font-bold text-white">
          BS. Trần Huyền <span className="text-blue-200">Trang</span>
        </Link>
      </header>

      <main className="flex flex-1 items-center justify-center px-5 py-16 md:px-8">
        <div className="w-full max-w-2xl text-center">
          <div className="mx-auto mb-7 flex h-20 w-20 items-center justify-center rounded-full bg-primary text-3xl text-white shadow-xl shadow-primary/30">
            ✓
          </div>

          <h1 className="text-2xl font-bold text-slate-900 md:text-3xl">
            {thankYouContent.title}
          </h1>
          <p
            className="mt-4 text-lg leading-relaxed text-slate-600"
            dangerouslySetInnerHTML={{
              __html: thankYouContent.lead.replace(
                "24 giờ",
                "<strong>24 giờ</strong>",
              ),
            }}
          />

          <ThankYouSummary />

          <div className="mt-10 grid gap-4 text-left sm:grid-cols-3">
            {thankYouContent.steps.map((step) => (
              <article
                key={step.num}
                className="rounded-2xl border border-primary/10 bg-white p-5 shadow-sm"
              >
                <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                  {step.num}
                </div>
                <h2 className="font-semibold text-slate-900">{step.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.desc}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 rounded-2xl bg-primary p-6 text-white sm:flex-row sm:gap-8">
            <div>
              <p className="text-xs uppercase tracking-wider text-blue-200/60">
                Hotline trực tiếp
              </p>
              <p className="text-lg font-bold">{siteConfig.phoneDisplay}</p>
            </div>
            <div className="hidden h-10 w-px bg-white/15 sm:block" />
            <div>
              <p className="text-xs uppercase tracking-wider text-blue-200/60">
                Địa chỉ phòng khám
              </p>
              <p className="text-lg font-bold">{siteConfig.address}</p>
            </div>
            <div className="hidden h-10 w-px bg-white/15 sm:block" />
            <div>
              <p className="text-xs uppercase tracking-wider text-blue-200/60">
                Lịch làm việc
              </p>
              <p className="text-lg font-bold">{siteConfig.hours}</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-slate-100 px-5 py-6 text-center text-sm text-slate-500">
        {thankYouContent.footer} ·{" "}
        <Link href="/" className="text-primary hover:underline">
          ← Quay lại trang chính
        </Link>
      </footer>
    </div>
  );
}
