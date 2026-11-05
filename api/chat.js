/**
 * Vercel Serverless Function: POST /api/chat
 * Charming Pilates AI Consultant — OpenRouter / Gemini AI + Guarded Studio Knowledge Engine
 */

const SYSTEM_PROMPT = `Bạn là Trợ lý Tư vấn AI chính thức của Charming Pilates Studio (차밍 필라테스) tại Hà Nội.
Triết lý hoạt động: "True beauty comes from within · Không chèo kéo, làm việc từ tâm".
Thông tin chuẩn xác của phòng tập:
1. Hai cơ sở tại Hà Nội (Mở cửa 08:00–21:00 Thứ 2 – Chủ Nhật, có hầm đỗ ô tô & xe máy rộng rãi):
   - Cơ sở 1 (Cầu Giấy): Tầng 6, tòa C6 Vinhomes D'Capitale (Vincom Trần Duy Hưng), 119 Trần Duy Hưng, Cầu Giấy — Hotline: 096 389 4885.
   - Cơ sở 2 (Thanh Xuân): Tầng 2, sảnh R2, TTTM Royal City, 72A Nguyễn Trãi, Thanh Xuân — Hotline: 0901 760 200.
2. Phương pháp 4 bước:
   - Bước 1 (20 phút đầu buổi thử): Đánh giá tư thế đầu vào (kiểm tra trục cột sống cổ - ngực - thắt lưng, độ cân bằng vai - hông, biên độ khớp).
   - Bước 2: Thiết kế lộ trình cá nhân hóa 100% trên hệ máy Reformer, Cadillac/Tower, Wunda Chair, Ladder Barrel.
   - Bước 3: Tập luyện có HLV kèm sát (tối đa 4 người/buổi: 1:1, 1:2 hoặc 1:4).
   - Bước 4: Tái đánh giá sau 8 tuần (16–24 buổi) bằng con số đối chiếu trước & sau.
3. Bảng học phí thực thu niêm yết minh bạch (đơn vị: đồng/người/buổi, không nâng giá gạch ngang ảo):
   - Ưu đãi buổi đầu (60 phút đánh giá tư thế + tập thử máy Reformer): 199.000 – 299.000đ (hoàn trừ 100% vào gói tập khi đăng ký).
   - Lớp Semi-Private 1:4 (Tối đa 4 người): Mua lẻ 380.000đ | Gói 20–30 buổi: 279.000đ | Gói 50–60 buổi: 249.000đ | Gói 100 buổi: 199.000đ.
   - Lớp Duet 1:2 (Cặp đôi): Mua lẻ 480.000đ | Gói 20–30 buổi: 399.000đ | Gói 50–60 buổi: 369.000đ | Gói 100 buổi: 329.000đ.
   - Lớp Private 1:1 (Kèm riêng): Mua lẻ 840.000đ | Gói 20–30 buổi: 669.000đ | Gói 50–60 buổi: 599.000đ | Gói 100 buổi: 529.000đ.
4. Chính sách:
   - Đổi/hủy lịch: Lớp 1:1 & 1:2 báo trước tối thiểu 12 giờ; Lớp 1:4 báo trước tối thiểu 6 giờ.
   - Thời hạn gói: 20–30 buổi (3–4 tháng), 50–60 buổi (6–8 tháng), 100 buổi (12 tháng). Có hỗ trợ bảo lưu.
Hãy trả lời ngắn gọn (dưới 130 từ), ấm áp, lịch sự bằng tiếng Việt, không chèo kéo, và luôn gợi ý khách để lại SĐT hoặc chọn cơ sở để giữ lịch buổi đánh giá tư thế 60 phút.`;

function guardedKnowledgeEngine(userMessage) {
  const q = String(userMessage || '').toLowerCase();

  if (q.includes('giá') || q.includes('học phí') || q.includes('chi phí') || q.includes('bao nhiêu') || q.includes('gói')) {
    return {
      reply:
        'Bảng học phí thực thu tại Charming Pilates (đơn vị: đồng/người/buổi):\n' +
        '• Lớp 1:4 (Tối đa 4 người): Mua lẻ 380.000đ | Gói 20–30 buổi: 279.000đ | Gói 50–60 buổi: 249.000đ | Gói 100 buổi: 199.000đ.\n' +
        '• Lớp 1:2 (Cặp đôi): Mua lẻ 480.000đ | Gói 20–30 buổi: 399.000đ | Gói 50–60 buổi: 369.000đ | Gói 100 buổi: 329.000đ.\n' +
        '• Kèm riêng 1:1: Mua lẻ 840.000đ | Gói 20–30 buổi: 669.000đ | Gói 50–60 buổi: 599.000đ | Gói 100 buổi: 529.000đ.\n' +
        'Bạn đang quan tâm hình thức tập nào để mình giữ lịch tập thử cho bạn?',
      suggestLeadCapture: true,
      provider: 'guarded-knowledge-engine'
    };
  }

  if (q.includes('sau sinh') || q.includes('mang thai') || q.includes('bầu') || q.includes('sổ bụng') || q.includes('sàn chậu')) {
    return {
      reply:
        'Với mẹ bầu (thai kỳ ổn định từ tam cá nguyệt thứ 2) hoặc mẹ sau sinh (6–8 tuần với sinh thường, 10–12 tuần với sinh mổ), Pilates giúp phục hồi cơ sàn chậu, thu gọn tách cơ bụng (Diastasis Recti) và giảm đau lưng rất hiệu quả.\n' +
        'Chúng tôi khuyến nghị bạn hỏi ý kiến bác sĩ sản khoa trước khi bắt đầu và ưu tiên lớp Private 1:1 để HLV theo sát an toàn tuyệt đối. Bạn để lại SĐT bên dưới để studio xếp HLV chuyên trách tư vấn nhé!',
      suggestLeadCapture: true,
      provider: 'guarded-knowledge-engine'
    };
  }

  if (q.includes('đau lưng') || q.includes('cổ vai gáy') || q.includes('thoát vị') || q.includes('cột sống') || q.includes('văn phòng') || q.includes('gù')) {
    return {
      reply:
        'Pilates nguyên bản vốn được phát triển để phục hồi vận động. Trong 20 phút đầu buổi thử, HLV sẽ đánh giá tư thế đầu vào, loại bỏ các động tác gây chèn ép đĩa đệm và tập trung kích hoạt nhóm cơ lõi sâu (deep core) trên máy Reformer để nâng đỡ cột sống.\n' +
        'Sau 3–5 buổi đầu bạn sẽ cảm nhận vùng cổ vai gáy và thắt lưng nhẹ nhõm hơn rõ rệt. Bạn muốn đăng ký tập thử tại D\'Capitale hay Royal City?',
      suggestLeadCapture: true,
      provider: 'guarded-knowledge-engine'
    };
  }

  if (q.includes('địa chỉ') || q.includes('cơ sở') || q.includes('ở đâu') || q.includes('đỗ xe') || q.includes('gửi xe') || q.includes('royal') || q.includes('trần duy hưng')) {
    return {
      reply:
        'Charming Pilates có 2 cơ sở tại trung tâm Cầu Giấy & Thanh Xuân (mở cửa 08:00–21:00 cả tuần, đều có hầm gửi xe ô tô & xe máy rộng rãi):\n' +
        "• Cơ sở 1: Tầng 6, tòa C6 Vinhomes D'Capitale (119 Trần Duy Hưng, Cầu Giấy) — Hotline: 096 389 4885.\n" +
        '• Cơ sở 2: Tầng 2, sảnh R2, TTTM Royal City (72A Nguyễn Trãi, Thanh Xuân) — Hotline: 0901 760 200.\n' +
        'Bạn thuận tiện tập tại cơ sở nào hơn để mình sắp xếp lịch thử?',
      suggestLeadCapture: true,
      provider: 'guarded-knowledge-engine'
    };
  }

  if (q.includes('hủy') || q.includes('đổi lịch') || q.includes('bảo lưu') || q.includes('thời hạn')) {
    return {
      reply:
        'Chính sách lịch tập minh bạch tại Charming Pilates:\n' +
        '• Đổi/hủy lịch: Lớp 1:1 & 1:2 báo trước tối thiểu 12 giờ; Lớp 1:4 báo trước tối thiểu 6 giờ để không bị tính buổi.\n' +
        '• Thời hạn gói: Gói 20–30 buổi (3–4 tháng) · Gói 50–60 buổi (6–8 tháng) · Gói 100 buổi (12 tháng).\n' +
        '• Hỗ trợ bảo lưu gói tập khi có lý do sức khỏe hoặc công tác.',
      suggestLeadCapture: false,
      provider: 'guarded-knowledge-engine'
    };
  }

  if (q.includes('yoga') || q.includes('gym') || q.includes('khác gì') || q.includes('người mới')) {
    return {
      reply:
        'Hơn 80% học viên đến với Charming Pilates là người mới bắt đầu! Khác với Gym (tập cơ lớn bên ngoài) hay Yoga (độ dẻo tĩnh), Pilates trên máy Reformer dùng hệ thống lò xo vừa nâng đỡ vừa tạo kháng lực có kiểm soát để tác động sâu vào cơ lõi giữ trục cột sống, giúp cơ thể săn gọn thanh thoát mà không bị thô cơ.',
      suggestLeadCapture: true,
      provider: 'guarded-knowledge-engine'
    };
  }

  return {
    reply:
      'Buổi đánh giá tư thế & tập thử máy Reformer (60 phút) tại Charming Pilates gồm: 20 phút đo trục cột sống đầu vào + 40 phút tập thử trên máy Reformer cùng HLV kèm sát. Phí buổi thử (199.000 – 299.000đ) được hoàn trừ 100% khi đăng ký gói, cam kết không chèo kéo.\n' +
      'Mời bạn để lại Họ tên & Số điện thoại Zalo bên dưới để tư vấn viên xếp lịch trong 5 phút nhé!',
    suggestLeadCapture: true,
    provider: 'guarded-knowledge-engine'
  };
}

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
    const messages = Array.isArray(body.messages) ? body.messages : [];
    const lastUserMsg = messages.slice().reverse().find((m) => m && m.role === 'user');
    const userText = lastUserMsg ? String(lastUserMsg.content || '') : '';

    if (process.env.OPENROUTER_API_KEY) {
      try {
        const aiRes = await fetch('https://openrouter.ai/api/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`
          },
          body: JSON.stringify({
            model: process.env.OPENROUTER_MODEL || 'google/gemini-2.5-flash',
            messages: [{ role: 'system', content: SYSTEM_PROMPT }].concat(
              messages.slice(-6).map((m) => ({ role: m.role, content: String(m.content || '') }))
            ),
            temperature: 0.3,
            max_tokens: 320
          })
        });
        if (aiRes.ok) {
          const aiData = await aiRes.json();
          const reply = aiData.choices?.[0]?.message?.content?.trim();
          if (reply) {
            return res.status(200).json({
              ok: true,
              reply: reply,
              suggestLeadCapture: true,
              provider: 'openrouter-ai'
            });
          }
        }
      } catch (e) {
        console.error('OpenRouter fallback to Guarded Knowledge Engine:', e);
      }
    }

    const result = guardedKnowledgeEngine(userText);
    return res.status(200).json(Object.assign({ ok: true }, result));
  } catch (err) {
    return res.status(200).json({
      ok: true,
      reply: "Mời bạn để lại số điện thoại hoặc bấm 'Gặp tư vấn viên' qua Zalo (096 389 4885) để Charming Pilates hỗ trợ ngay nhé!",
      suggestLeadCapture: true,
      provider: 'fallback'
    });
  }
};
