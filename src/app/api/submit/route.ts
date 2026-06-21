import { NextResponse } from "next/server";
import { isGoogleSheetConfigured, submitToGoogleSheet } from "@/lib/google-sheet";
import type { RegistrationFormData } from "@/types";

export async function POST(request: Request) {
  try {
    const data = (await request.json()) as RegistrationFormData;

    if (!data.name?.trim() || !data.phone?.trim() || !data.symptom || !data.time) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const payload: RegistrationFormData = {
      name: data.name.trim(),
      phone: data.phone.trim(),
      symptom: data.symptom,
      time: data.time,
      note: data.note?.trim() || undefined,
    };

    if (!isGoogleSheetConfigured()) {
      return NextResponse.json(
        {
          error:
            "Chưa kết nối Google Sheet. Làm 1 lần theo google-apps-script/HUONG-DAN-CAI-DAT.md (deploy Apps Script → dán Web App URL).",
        },
        { status: 503 },
      );
    }

    await submitToGoogleSheet(payload);

    return NextResponse.json({ status: "ok", savedToSheet: true });
  } catch (error) {
    console.error("[submit]", error);
    return NextResponse.json(
      { error: "Không thể ghi vào Google Sheet. Vui lòng gọi hotline trực tiếp." },
      { status: 502 },
    );
  }
}
