/**
 * Google Apps Script — ghi form đăng ký vào Google Sheet
 *
 * Sheet: Danh sách đăng kí tư vấn
 * https://docs.google.com/spreadsheets/d/1f_XFORpV59J_CqycfuOPRiV3cLXR4hI7xJDMTqj7GoY
 *
 * Cột: Thời gian | Họ tên | SĐT | Triệu chứng | khung giờ | Ghi chú
 *
 * Dùng appendRow() — chỉ thêm dòng mới ở cuối, KHÔNG xóa dữ liệu cũ.
 */

var SPREADSHEET_ID = "1f_XFORpV59J_CqycfuOPRiV3cLXR4hI7xJDMTqj7GoY";
var SHEET_NAME = "Trang tính1";

function getTargetSheet_() {
  var spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  var sheet = spreadsheet.getSheetByName(SHEET_NAME);
  return sheet || spreadsheet.getSheets()[0];
}

function doPost(e) {
  try {
    var payload = JSON.parse(e.postData.contents);
    var sheet = getTargetSheet_();
    var timezone = "Asia/Ho_Chi_Minh";
    var timestamp = Utilities.formatDate(new Date(), timezone, "dd/MM/yyyy HH:mm:ss");

    // appendRow: luôn ghi vào hàng trống tiếp theo sau dữ liệu hiện có
    sheet.appendRow([
      timestamp,
      payload.name || "",
      payload.phone || "",
      payload.symptom || "",
      payload.time || "",
      payload.note || "",
    ]);

    return ContentService.createTextOutput(
      JSON.stringify({ status: "ok" }),
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({ status: "error", message: String(error) }),
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

/** Chạy thử trong editor Apps Script (Run > testAppendRow) */
function testAppendRow() {
  var sheet = getTargetSheet_();
  var timezone = "Asia/Ho_Chi_Minh";
  var timestamp = Utilities.formatDate(new Date(), timezone, "dd/MM/yyyy HH:mm:ss");

  sheet.appendRow([
    timestamp,
    "Nguyễn Văn Test",
    "0912345678",
    "Chân nặng mỏi",
    "Buổi sáng (8h–12h)",
    "Test từ Apps Script",
  ]);
}
