# Ghi form vào Google Sheet — làm 1 lần (~3 phút)

Sheet của bạn: [Danh sách đăng kí tư vấn](https://docs.google.com/spreadsheets/d/1f_XFORpV59J_CqycfuOPRiV3cLXR4hI7xJDMTqj7GoY/edit)

Website: https://bshuyentrang.vercel.app

---

## Tại sao không ghi thẳng bằng link Sheet?

Link Sheet chỉ để **xem/sửa bằng tay**. Google **không cho** website bất kỳ ghi vào — nếu không, ai cũng spam được sheet của bạn.

Cần một đoạn code nhỏ chạy **trong tài khoản Google của bạn** (Apps Script) — Google tin đoạn code đó và cho phép ghi thêm dòng.

---

## Làm theo 4 bước

### Bước 1 — Mở Apps Script trong Sheet

1. Mở [Google Sheet](https://docs.google.com/spreadsheets/d/1f_XFORpV59J_CqycfuOPRiV3cLXR4hI7xJDMTqj7GoY/edit)
2. Menu **Extensions** (Tiện ích mở rộng) → **Apps Script**

### Bước 2 — Dán code

1. Xóa code mặc định trong editor
2. Copy toàn bộ file `Code.gs` (trong thư mục `google-apps-script` của project)
3. Dán vào → **Save** (Ctrl+S)

### Bước 3 — Deploy Web App

1. Bấm **Deploy** → **New deployment**
2. Loại: **Web app**
3. **Execute as:** Me (Tôi)
4. **Who has access:** Anyone (Bất kỳ ai)
5. Bấm **Deploy** → copy **Web app URL** (dạng `https://script.google.com/macros/s/.../exec`)

### Bước 4 — Dán URL vào website

Mở `src/lib/google-sheet.ts`, dán URL vào `webAppUrl`:

```typescript
webAppUrl: "https://script.google.com/macros/s/XXXXX/exec",
```

**Hoặc** trên Vercel → Settings → Environment Variables:

```
GOOGLE_APPS_SCRIPT_URL = https://script.google.com/macros/s/XXXXX/exec
```

Rồi **Redeploy** trên Vercel.

---

## Cột ghi vào Sheet

| Cột Sheet   | Dữ liệu form        |
|-------------|---------------------|
| Thời gian   | Tự động (giờ VN)    |
| Họ tên      | Họ và tên           |
| SĐT         | Số điện thoại       |
| Triệu chứng | Triệu chứng chính   |
| khung giờ   | Thời gian liên hệ   |
| Ghi chú     | Ghi chú thêm        |

Mỗi lần khách đặt lịch → **thêm 1 dòng mới** ở cuối, không xóa dữ liệu cũ.
