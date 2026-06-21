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

1. Làm theo hướng dẫn trong `google-apps-script/HUONG-DAN-CAI-DAT.md`
2. Deploy Apps Script → copy Web App URL
3. Dán Web App URL vào **`src/lib/google-sheet.ts`** (dòng `webAppUrl`) — không cần file `.env`

## Deploy Vercel

1. Push repo lên GitHub
2. Import project trên vercel.com
3. Thêm biến môi trường:
   - `NEXT_PUBLIC_SITE_URL`
   - `GOOGLE_APPS_SCRIPT_URL`
