/**
 * Vercel Serverless Function: POST /api/leads
 * Validates booking lead and synchronizes with Google Worksheet via Google Apps Script Webhook
 */

const VN_PHONE_REGEX = /^(0|\+84)(3|5|7|8|9)[0-9]{8}$/;

const GOAL_LABELS = {
  'office-pain': 'Giảm đau mỏi lưng, cổ vai gáy văn phòng',
  'postpartum': 'Phục hồi sau sinh / Tập trong thai kỳ',
  'seniors': 'Tăng linh hoạt khớp & bảo vệ cột sống (Trung niên)',
  'body-shaping': 'Siết cơ săn gọn, chỉnh dáng & bổ trợ thể thao',
  'kids-posture': 'Chỉnh tư thế gù lưng & chiều cao (Học sinh)',
  'other': 'Mục tiêu khác / Cần HLV tư vấn thêm'
};

const LOCATION_LABELS = {
  'dcapitale': "CS1: Tầng 6 tòa C6 Vinhomes D'Capitale, 119 Trần Duy Hưng, Cầu Giấy",
  'royal-city': 'CS2: Tầng 2 sảnh R2 TTTM Royal City, 72A Nguyễn Trãi, Thanh Xuân'
};

const TIMESLOT_LABELS = {
  'morning': 'Buổi sáng (08:00 – 11:30)',
  'noon': 'Buổi trưa (11:30 – 14:00)',
  'afternoon': 'Buổi chiều (14:00 – 17:30)',
  'evening': 'Buổi tối (17:30 – 21:00)'
};

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, message: 'Method Not Allowed' });
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {});
    const fullName = String(body.fullName || '').trim();
    const phone = String(body.phone || '').trim().replace(/[\s.\-()]/g, '');

    if (fullName.length < 2 || fullName.length > 80) {
      return res.status(400).json({
        ok: false,
        message: 'Vui lòng nhập họ và tên hợp lệ (từ 2 đến 80 ký tự).'
      });
    }

    if (!VN_PHONE_REGEX.test(phone)) {
      return res.status(400).json({
        ok: false,
        message: 'Vui lòng nhập số điện thoại Việt Nam hợp lệ (10 chữ số, bắt đầu bằng 03, 05, 07, 08 hoặc 09).'
      });
    }

    if (!body.consentContact) {
      return res.status(400).json({
        ok: false,
        message: 'Vui lòng tích chọn đồng ý xử lý dữ liệu liên hệ theo Luật Bảo vệ DLCN 91/2025/QH15.'
      });
    }

    const leadId = 'CP-' + Date.now().toString(36).toUpperCase();
    const timestampVN = new Date().toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' });

    const sheetRowPayload = {
      leadId: leadId,
      timestamp: timestampVN,
      fullName: fullName,
      phone: phone,
      zaloSamePhone: body.zaloSamePhone !== false ? 'Có Zalo' : 'Không',
      goal: GOAL_LABELS[body.goal] || body.goal || 'Giảm đau mỏi lưng, cổ vai gáy văn phòng',
      format: body.format || '1:4',
      location: LOCATION_LABELS[body.location] || body.location || LOCATION_LABELS.dcapitale,
      timeSlot: TIMESLOT_LABELS[body.timeSlot] || body.timeSlot || TIMESLOT_LABELS.evening,
      expectedDate: body.expectedDate || 'Sớm nhất',
      hasHealthCondition: body.hasHealthCondition === 'yes' ? 'Có (Cần HLV chuyên biệt)' : 'Không',
      consentContact: 'Đã đồng ý (Luật 91/2025/QH15)',
      consentHealth: body.consentHealth ? 'Đã đồng ý sàng lọc sức khỏe' : 'N/A',
      note: body.note || '',
      source: body.source || 'booking_form',
      landingPage: body.landingPage || 'https://charmingpilates.vn'
    };

    const webhookUrl =
      process.env.GOOGLE_SHEET_WEBHOOK_URL ||
      (typeof body.customWebhookUrl === 'string' && body.customWebhookUrl.startsWith('https://script.google.com/')
        ? body.customWebhookUrl
        : '');

    let sheetSynced = false;
    if (webhookUrl) {
      try {
        const webhookRes = await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(sheetRowPayload)
        });
        sheetSynced = webhookRes.ok || webhookRes.status === 302;
      } catch (err) {
        console.error('Google Sheet Webhook Error:', err);
      }
    }

    return res.status(200).json({
      ok: true,
      leadId: leadId,
      sheetSynced: sheetSynced,
      message: 'Đã ghi nhận lịch tập thử thành công! Tư vấn viên sẽ liên hệ trong 5 phút.'
    });
  } catch (error) {
    console.error('Lead API Error:', error);
    return res.status(500).json({
      ok: false,
      message: 'Không thể xử lý yêu cầu lúc này. Vui lòng gọi 096 389 4885 hoặc nhắn Zalo giúp studio.'
    });
  }
};
