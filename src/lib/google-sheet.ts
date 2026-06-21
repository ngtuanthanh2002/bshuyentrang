import type { RegistrationFormData } from "@/types";

/** Sheet: https://docs.google.com/spreadsheets/d/1f_XFORpV59J_CqycfuOPRiV3cLXR4hI7xJDMTqj7GoY */
export const GOOGLE_SHEET_CONFIG = {
  spreadsheetId: "1f_XFORpV59J_CqycfuOPRiV3cLXR4hI7xJDMTqj7GoY",
  /**
   * Sau khi deploy Apps Script (google-apps-script/Code.gs) → dán Web App URL vào đây
   * hoặc đặt biến môi trường GOOGLE_APPS_SCRIPT_URL trong .env.local / Vercel.
   * Ví dụ: https://script.google.com/macros/s/AKfycb.../exec
   */
  webAppUrl: "PASTE_WEB_APP_URL_HERE",
} as const;

const PLACEHOLDER = "PASTE_WEB_APP_URL_HERE";

function getWebAppUrl(): string {
  const fromEnv = process.env.GOOGLE_APPS_SCRIPT_URL?.trim();
  if (fromEnv) return fromEnv;

  const fromConfig = GOOGLE_SHEET_CONFIG.webAppUrl.trim();
  if (fromConfig && !fromConfig.includes(PLACEHOLDER)) return fromConfig;

  return "";
}

export function isGoogleSheetConfigured() {
  return getWebAppUrl().length > 0;
}

export async function submitToGoogleSheet(data: RegistrationFormData): Promise<void> {
  const webAppUrl = getWebAppUrl();
  if (!webAppUrl) {
    throw new Error(
      "Chưa cấu hình Google Sheet. Dán Web App URL vào src/lib/google-sheet.ts hoặc GOOGLE_APPS_SCRIPT_URL trong .env.local",
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
