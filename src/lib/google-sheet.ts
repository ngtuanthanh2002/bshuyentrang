import type { RegistrationFormData } from "@/types";

/**
 * Sheet đích (đã cấu hình sẵn):
 * https://docs.google.com/spreadsheets/d/1f_XFORpV59J_CqycfuOPRiV3cLXR4hI7xJDMTqj7GoY
 *
 * Chỉ cần dán Web App URL (sau khi deploy Apps Script 1 lần) vào dòng webAppUrl bên dưới,
 * hoặc đặt biến GOOGLE_APPS_SCRIPT_URL trên Vercel.
 */
export const GOOGLE_SHEET_CONFIG = {
  spreadsheetId: "1f_XFORpV59J_CqycfuOPRiV3cLXR4hI7xJDMTqj7GoY",
  /** Web App URL — deploy từ google-apps-script/Code.gs */
  webAppUrl:
    "https://script.google.com/macros/s/AKfycbyA2qM8qkV75SAogbdCTWLwAr17z3SKRM5A0YCS09c3sYAcGnmVRb5V5kE9cDpoKQU/exec",
} as const;

function getWebAppUrl(): string {
  const fromEnv = process.env.GOOGLE_APPS_SCRIPT_URL?.trim();
  if (fromEnv) return fromEnv;

  return GOOGLE_SHEET_CONFIG.webAppUrl.trim();
}

export function isGoogleSheetConfigured() {
  return getWebAppUrl().length > 0;
}

export async function submitToGoogleSheet(data: RegistrationFormData): Promise<void> {
  const webAppUrl = getWebAppUrl();
  if (!webAppUrl) {
    throw new Error(
      "Chưa có Web App URL. Làm 1 lần theo google-apps-script/HUONG-DAN-CAI-DAT.md rồi dán URL vào src/lib/google-sheet.ts",
    );
  }

  const response = await fetch(webAppUrl, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify({
      name: data.name,
      phone: data.phone,
      symptom: data.symptom,
      time: data.time,
      note: data.note ?? "",
    }),
    redirect: "follow",
  });

  const text = await response.text();

  try {
    const json = JSON.parse(text) as { status?: string; message?: string };
    if (json.status === "error") {
      throw new Error(json.message ?? "Không ghi được vào Google Sheet");
    }
    if (json.status === "ok") return;
  } catch (error) {
    if (error instanceof Error && error.message.includes("Không ghi")) throw error;
  }

  if (!response.ok) {
    throw new Error(`Google Sheet HTTP ${response.status}`);
  }
}
