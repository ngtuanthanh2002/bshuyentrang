# Kết nối form → Google Sheet

Sheet đích: [Danh sách đăng kí tư vấn](https://docs.google.com/spreadsheets/d/1f_XFORpV59J_CqycfuOPRiV3cLXR4hI7xJDMTqj7GoY/edit)

| Cột | Dữ liệu form |
|-----|----------------|
| Thời gian | Tự động khi gửi (giờ VN) |
| Họ tên | Họ và tên |
| SĐT | Số điện thoại |
| Triệu chứng | Triệu chứng chính |
| khung giờ | Thời gian liên hệ |
| Ghi chú | Ghi chú thêm |

Script dùng **`appendRow()`** — mỗi lần gửi form chỉ **thêm 1 dòng mới ở cuối**, không xóa dữ liệu cũ.

## Bước 1 — Dán code vào Google Sheet

1. Mở [Google Sheet](https://docs.google.com/spreadsheets/d/1f_XFORpV59J_CqycfuOPRiV3cLXR4hI7xJDMTqj7GoY/edit)
2. **Extensions** → **Apps Script**
3. Xóa code mặc định, dán toàn bộ nội dung file `Code.gs` trong thư mục này
4. **Save** (Ctrl+S)

## Bước 2 — Test trong Apps Script (tùy chọn)

1. Chọn hàm `testAppendRow` → **Run**
2. Cấp quyền khi được hỏi (Google account sở hữu sheet)
3. Kiểm tra sheet có thêm 1 dòng test ở cuối

## Bước 3 — Deploy Web App

1. **Deploy** → **New deployment**
2. Loại: **Web app**
3. **Execute as:** Me
4. **Who has access:** Anyone
5. **Deploy** → copy **Web app URL**

## Bước 4 — Cấu hình website

Mở `src/lib/google-sheet.ts`, dán URL vào `webAppUrl`:

```typescript
webAppUrl: "https://script.google.com/macros/s/XXXXX/exec",
```

Không cần file `.env`. Khởi động lại `npm run dev` nếu đang chạy local.

## Lưu ý

- Sheet phải có hàng tiêu đề ở dòng 1 (đã có sẵn)
- Dữ liệu mới luôn ghi từ dòng 2 trở đi, xuống cuối bảng
- Nếu đổi tên tab sheet, sửa `SHEET_NAME` trong `Code.gs`
