# ABClinic Landing Page — BS. Trần Huyền Trang

Landing page Next.js cho BS. Trần Huyền Trang — Chuyên gia Tĩnh mạch & Tim mạch.

## Cấu trúc

```
├── public/images/       # Ảnh bác sĩ & bệnh nhân
├── src/
│   ├── app/             # Routes, API, SEO
│   ├── components/      # UI components
│   ├── lib/             # Content & config
│   ├── providers/       # React context
│   └── types/
├── next.config.ts
└── vercel.json
```

## Chạy local

```bash
npm install
npm run dev
```

## Ghi form vào Google Sheet

Form đăng ký ghi vào [Danh sách đăng kí tư vấn](https://docs.google.com/spreadsheets/d/1f_XFORpV59J_CqycfuOPRiV3cLXR4hI7xJDMTqj7GoY/edit) — **chỉ thêm dòng mới**, không xóa dữ liệu cũ.

**Cách nhanh (Apps Script):**

1. Làm theo `google-apps-script/HUONG-DAN-CAI-DAT.md`
2. Deploy Web App → copy URL
3. Thêm trên Vercel / `.env.local`:

```env
GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/XXXXX/exec
```

**Cách 2 (Service Account):** xem `.env.example` — dùng `GOOGLE_SERVICE_ACCOUNT_EMAIL` + `GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY`.

## Deploy Vercel

1. Push repo lên GitHub
2. Import project trên vercel.com
3. Thêm biến môi trường (tuỳ chọn — đã có fallback trong code):
   - `NEXT_PUBLIC_SITE_URL` = `https://bshuyentrang.vercel.app`
   - `GOOGLE_APPS_SCRIPT_URL` — Web App URL sau khi deploy Apps Script
