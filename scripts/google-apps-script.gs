/**
 * GOOGLE APPS SCRIPT — KẾT NỐI FORM ĐẶT LỊCH CHARMING PILATES VỚI GOOGLE WORKSHEET
 *
 * Hướng dẫn cài đặt trong 60 giây:
 * 1. Mở file Google Sheet của bạn -> Chọn menu "Tiện ích mở rộng" (Extensions) -> "Apps Script".
 * 2. Xóa mã mặc định và dán toàn bộ đoạn mã dưới đây vào.
 * 3. Nhấn "Triển khai" (Deploy) -> "Tùy chọn triển khai mới" (New deployment).
 * 4. Chọn loại: "Ứng dụng web" (Web app):
 *    - Thực thi dưới dạng (Execute as): "Tôi" (Me)
 *    - Ai có quyền truy cập (Who has access): "Bất kỳ ai" (Anyone)
 * 5. Sao chép URL Web App (https://script.google.com/macros/s/.../exec) và dán vào:
 *    - Biến môi trường GOOGLE_SHEET_WEBHOOK_URL trên Vercel, HOẶC
 *    - Cửa sổ "Cấu hình Google Sheet" ngay trên trang Landing Page Charming Pilates.
 */

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Tạo hàng tiêu đề tự động nếu Sheet đang trống
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Thời gian đăng ký',
        'Mã đặt lịch',
        'Họ và tên',
        'Số điện thoại',
        'Có dùng Zalo',
        'Mục tiêu tập luyện',
        'Hình thức lớp',
        'Cơ sở đăng ký',
        'Khung giờ mong muốn',
        'Ngày dự kiến',
        'Sàng lọc sức khỏe',
        'Đồng ý DLCN (Luật 91/2025)',
        'Ghi chú',
        'Nguồn đăng ký'
      ]);
      sheet.getRange(1, 1, 1, 14).setFontWeight('bold').setBackground('#E8D3CB').setFontColor('#3D2E2A');
    }

    var rawData = e.postData && e.postData.contents ? e.postData.contents : '{}';
    var data = JSON.parse(rawData);

    sheet.appendRow([
      data.timestamp || new Date().toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' }),
      data.leadId || ('CP-' + new Date().getTime()),
      data.fullName || '',
      "'" + (data.phone || ''),
      data.zaloSamePhone || 'Có',
      data.goal || '',
      data.format || '1:4',
      data.location || '',
      data.timeSlot || '',
      data.expectedDate || '',
      data.hasHealthCondition || 'Không',
      data.consentContact || 'Đã đồng ý',
      data.note || '',
      data.source || 'booking_form'
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true, message: 'Row appended to Google Sheet' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
