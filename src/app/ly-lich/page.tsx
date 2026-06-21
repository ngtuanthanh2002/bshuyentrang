import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Lý lịch bác sĩ — ${siteConfig.name}`,
  description: "Lý lịch chuyên môn BS. Trần Huyền Trang",
  robots: { index: false, follow: false },
};

export default function LyLichPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-slate-100">
      <header className="flex h-14 shrink-0 items-center justify-between bg-primary px-4">
        <Link href="/" className="text-sm font-semibold text-white">
          ← Quay lại
        </Link>
        <span className="text-sm font-bold text-white">Lý lịch bác sĩ</span>
        <span className="w-[4.5rem]" aria-hidden />
      </header>

      <div className="relative min-h-0 flex-1">
        <iframe
          src={`${siteConfig.cvPdfUrl}#toolbar=1&navpanes=0&view=FitH`}
          title="Lý lịch BS. Trần Huyền Trang"
          className="absolute inset-0 h-full w-full border-0 bg-white"
        />
      </div>

      <div className="shrink-0 border-t border-slate-200 bg-white px-4 py-3 text-center">
        <p className="text-xs leading-relaxed text-slate-500">
          Không xem được file?{" "}
          <a href={siteConfig.cvPdfUrl} download className="font-medium text-accent underline">
            Tải PDF về máy
          </a>
        </p>
      </div>
    </div>
  );
}
