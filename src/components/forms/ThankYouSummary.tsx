"use client";

import { useEffect, useState } from "react";
import { thankYouContent } from "@/lib/content";
import type { RegistrationFormData } from "@/types";

export function ThankYouSummary() {
  const [data, setData] = useState<RegistrationFormData | null>(null);

  useEffect(() => {
    const raw = sessionStorage.getItem("registrationData");
    if (raw) {
      try {
        setData(JSON.parse(raw) as RegistrationFormData);
      } catch {
        setData(null);
      }
    }
  }, []);

  if (!data) return null;

  return (
    <div className="mt-8 rounded-2xl border border-blue-100 bg-slate-50 p-6 text-left">
      <p className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-blue-600">
        {thankYouContent.summaryTitle}
      </p>
      <div className="space-y-2 text-sm text-slate-700">
        <p>
          <strong className="text-slate-900">Họ tên:</strong> {data.name}
        </p>
        <p>
          <strong className="text-slate-900">Số điện thoại:</strong> {data.phone}
        </p>
        <p>
          <strong className="text-slate-900">Triệu chứng:</strong> {data.symptom}
        </p>
        <p>
          <strong className="text-slate-900">Thời gian liên hệ:</strong> {data.time}
        </p>
        {data.note ? (
          <p>
            <strong className="text-slate-900">Ghi chú:</strong> {data.note}
          </p>
        ) : null}
      </div>
    </div>
  );
}
