# Context & Kiến Trúc Thiết Kế — Charming Pilates (차밍 필라테스) Scrollytelling Landing Page

## 1. Tổng Quan Dự Án & Nguồn Tham Chiếu
- **Thương hiệu:** Charming Pilates (`차밍 필라테스`) — Studio Pilates kèm sát (Semi-Private 1:4, Duet 1:2, Private 1:1) tại Hà Nội.
- **Triết lý thương hiệu:** *"True beauty comes from within · Không chèo kéo, làm việc từ tâm"*.
- **Trang tham chiếu gốc:** [https://charming-pilates-landing.vercel.app](https://charming-pilates-landing.vercel.app) và hệ thống thiết kế tại `/styleguide`.
- **Skill áp dụng:** `scroll-craft` (`~/.antigravity/skills/scroll-craft/SKILL.md`) kết hợp tiêu chuẩn `modern-web-guidance`.
- **Hệ thống cơ sở:**
  1. **Cơ sở 1 (Cầu Giấy):** Tầng 6, tòa C6 Vinhomes D'Capitale (Vincom Trần Duy Hưng), 119 Trần Duy Hưng, Cầu Giấy, Hà Nội — Hotline: `096 389 4885`.
  2. **Cơ sở 2 (Thanh Xuân):** Tầng 2, sảnh R2, TTTM Royal City, 72A Nguyễn Trãi, Thanh Xuân, Hà Nội — Hotline: `0901 760 200`.
- **Thông tin liên hệ & Kênh chính thức:**
  - Hotline chính: `096 389 4885` · Hotline CS2: `0901 760 200`
  - Zalo tư vấn: `https://zalo.me/0963894885`
  - Messenger: `https://m.me/charmingpilates`
  - Facebook Fanpage: `https://www.facebook.com/charmingpilates`
  - TikTok: `https://www.tiktok.com/@charming.pilates`
  - Email: `charmingpilates@gmail.com`
  - Giờ mở cửa: `08:00–21:00` (Thứ 2 – Chủ Nhật)

---

## 2. Giai Đoạn 1 (Scroll Craft): Brief & Chọn Page Grammar

### 2.1. Vibe, Đối Tượng & Thông Điệp Duy Nhất
- **Vibe (5 từ khóa chủ đạo):** *Warm Arch · Tactile Serenity · Clinical Precision · Mindful Flow · Quiet Luxury* (Vòm sáng ấm áp · Tĩnh tại xúc giác · Chuẩn xác trị liệu · Chuyển động chánh niệm · Sang trọng tinh tế).
- **Đối tượng mục tiêu:**
  1. **Nhóm 01 · Dân văn phòng:** Đau mỏi lưng, cổ vai gáy, vai cuộn trước & lệch tư thế do ngồi nhiều (Gợi ý lớp: `1:4`).
  2. **Nhóm 02 · Tiền & Hậu sản:** Phục hồi cơ sàn chậu, tách cơ bụng (*Diastasis Recti*), đau lưng sau sinh hoặc vận động an toàn trong thai kỳ (Gợi ý lớp: `1:1`).
  3. **Nhóm 03 · Trung niên & Cao tuổi:** Tăng linh hoạt khớp gối – hông, giữ thăng bằng & bảo vệ cột sống êm ái trên lò xo Reformer (Gợi ý lớp: `1:2`).
  4. **Nhóm 04 · Định hình vóc dáng:** Siết cơ săn gọn thanh thoát, chỉnh dáng thẳng & tăng cơ lõi bổ trợ Golf/Chạy bộ (Gợi ý lớp: `1:4`).
  5. **Nhóm 05 · Học sinh / Thanh thiếu niên:** Chỉnh tư thế gù lưng học đường & hỗ trợ phát triển chiều cao.
- **Thông điệp duy nhất (Single Core Message):**
  > *"Pilates kèm sát có kết quả đo được cho từng cơ thể — mỗi học viên bắt đầu bằng 20 phút đánh giá tư thế đầu vào, tập trên máy Reformer với lộ trình cá nhân hóa tối đa 4 người/buổi và tái đánh giá sự thay đổi bằng con số sau 8 tuần."*

### 2.2. Page Grammar Được Chọn
- **Cấu trúc chủ đạo:** **Chaptered Editorial** kết hợp **Split Stage** (1 trong 8 cấu trúc chuẩn của Scroll Craft).
- **Lý do chọn:** Hành trình từ thấu hiểu vấn đề cơ thể → phương pháp 4 bước khoa học → chọn quy mô lớp → bảng giá minh bạch → đặt lịch cần nhịp điệu chương hồi rõ ràng như một cuốn tạp chí sức khỏe cao cấp (*Chaptered Editorial*), kết hợp sân khấu chia đôi ghim dính (*Split Stage*) tại phân đoạn Phương pháp 4 bước để người xem vừa đọc phác đồ vừa quan sát trực quan sự thay đổi trục cột sống.

### 2.3. Peak Moment & Signature Move
- **Peak Moment (Điểm chạm cảm xúc cao trào nhất):**
  Tại dải cuộn `28% – 48%` (**Phương pháp Charming Pilates – Hành trình 4 bước cho kết quả đo được**): Cột trái ghim dính (`position: sticky`) hiển thị **Bản đồ Trục Cột Sống & Hồ Sơ Tư Thế 8 Tuần** cùng hình ảnh đánh giá tư thế thực tế. Khi người dùng cuộn qua từng bước (`01` Đánh giá tư thế 20 phút → `02` Thiết kế lộ trình cá nhân 100% → `03` Tập luyện kèm sát tối đa 1:4 → `04` Tái đánh giá sau 8 tuần), đường trục cột sống trên sân khấu từ trạng thái lệch/áp lực chuyển dần sang thẳng trục cân bằng kèm chỉ số cải thiện đo lường được.
- **Signature Move (Tương tác cuộn độc bản):**
  **Reformer Tension & Posture Spine Line (`--scroll-progress` & `--method-progress`)**: Thanh chỉ báo độ căng lò xo Reformer trên đỉnh trang kết hợp vòm kiến trúc mở rộng theo nhịp cuộn (`--hero-progress`), và cơ chế **One-Click Goal Routing** — chạm vào bất kỳ nhóm vấn đề cơ thể hoặc gói học phí nào sẽ tự động truyền sự kiện `charming:select-goal`, điền sẵn Mục tiêu + Hình thức lớp vào Phiếu đăng ký 3 bước và trượt mượt xuống khu vực đặt lịch.

---

## 3. Giai Đoạn 2 (Scroll Craft): Scroll Storyboard (0% – 100%)

| Dải % Cuộn | Chương / Section | 1. Layering (Bg / Subject / Fg / Typo) | 2. Transition & Motion | 3. Emotion (Feeling Curve) |
| :--- | :--- | :--- | :--- | :--- |
| **0% – 14%** | **Hero Stage:** *Pilates kèm sát có kết quả đo được* | **Bg:** Nền kem ấm `#FBF6F3` + vòm sáng kiến trúc `#F3E6E0`.<br>**Subject:** Ảnh chất lượng cao HLV chỉnh tư thế học viên trên máy Reformer gỗ sáng (có bóng đổ tiếp đất `contact anchor`).<br>**Fg:** Thẻ nổi 3 bước tiêu chuẩn & huy hiệu cam kết *"Không chèo kéo"*.<br>**Typo:** `Cormorant Garamond` 56px + Eyebrow `Montserrat` giãn chữ `0.15em`. | Khung ảnh vòm dịch chuyển parallax nhẹ theo `--hero-progress` (`translate3d`, `scale(1 -> 1.03)`), lớp ánh nắng tiền cảnh mờ dần tinh tế, thẻ nổi dịch chuyển ngược chiều tạo chiều sâu 3D. | **An tâm & Thu hút:** Cảm nhận không gian vòm sáng yên tĩnh, sang trọng nhưng gần gũi và tử tế. |
| **14% – 28%** | **Chapter 01:** *Lộ trình theo thể trạng – Bạn đang gặp vấn đề gì?* | **Bg:** `--surface` (`#FBF6F3`) với họa tiết đường trục mảnh.<br>**Subject:** 4 Thẻ mục tiêu thể trạng kèm ảnh minh họa chuyên biệt & hộp *"Kết quả hướng tới sau 8 tuần"*.<br>**Fg:** Badge gợi ý lớp (`1:4`, `1:1`, `1:2`) & nút *"Chọn mục tiêu này"*. | Hiệu ứng xuất hiện tuần tự (`staggered reveal`) theo vị trí cuộn; hover nâng thẻ `-4px` kèm đổ bóng hồng đất `rgba(142,95,83,0.14)`. | **Đồng cảm & Định hướng:** Người xem nhận diện đúng tình trạng đau mỏi lưng, sau sinh hay giữ dáng của chính mình. |
| **28% – 46%** | **Chapter 02 (Peak Moment):** *Phương pháp 4 bước (Sticky Split Stage)* | **Bg:** `--surface-alt` (`#F3E6E0`).<br>**Subject (Sticky Left):** Khung ảnh đánh giá tư thế + Đồ họa интерактив Trục Cột Sống & Chỉ số 8 tuần.<br>**Fg (Scrolling Right):** 4 thẻ bước `01` → `04` với thời lượng và đầu ra cụ thể. | Cột trái `position: sticky; top: 6rem`. Khi 4 bước bên phải cuộn qua (`IntersectionObserver` + `--method-progress`), sơ đồ cột sống tự động căn chỉnh thẳng trục và đổi trạng thái bước `01` → `04`. | **Tin tưởng tuyệt đối:** Thấy rõ sự khác biệt giữa tập kèm sát có đo lường với tập đại trà đông người. |
| **46% – 60%** | **Chapter 03:** *Chọn hình thức tập (`1:4`, `1:2`, `1:1`)* | **Bg:** `--surface` (`#FBF6F3`).<br>**Subject:** 3 thẻ vòm cao cấp với ảnh chụp thực tế lớp `Semi-Private 1:4`, `Duet 1:2`, `Private 1:1`.<br>**Fg:** Huy hiệu *"Được chọn nhiều nhất"*, danh sách đối tượng phù hợp & giá thực thu từ `199.000đ/buổi`. | Ảnh trong khung vòm zoom nhẹ khi vào vùng nhìn; thẻ `1:4` được nhấn viền `--brand-rose-deep` (`2px`) tạo điểm neo thị giác. | **Rõ ràng & Dễ quyết định:** Biết ngay mình hợp lớp `1:4` tiết kiệm, `1:2` cùng người thân hay `1:1` trị liệu/bầu/sau sinh. |
| **60% – 72%** | **Chapter 04:** *Bảng học phí thực thu minh bạch* | **Bg:** `--surface-alt` (`#F3E6E0`).<br>**Subject:** Hộp *Ưu đãi buổi đầu (199.000 – 299.000đ, hoàn trừ 100%)* + Bộ Tab chuyển đổi 3 hình thức (`Lớp 1:4`, `Lớp 1:2`, `Kèm 1:1`) × 4 gói (`01 buổi`, `20–30`, `50–60`, `100 buổi`).<br>**Fg:** 3 thẻ quy định Đổi/hủy lịch, Thời hạn & Bảo lưu. | Chuyển đổi Tab mượt mà với `opacity` & `translateY`, làm nổi gói *Được chọn nhiều nhất* (`50–60 buổi` cho 1:4 & 1:2; `20–30 buổi` cho 1:1). | **Giải tỏa rào cản:** Minh bạch 100% từng mức giá, không chiêu trò nâng giá gạch ngang ảo. |
| **72% – 86%** | **Chapter 05:** *Đội ngũ HLV, 2 Cơ sở & 60 Phút buổi tập thử* | **Bg:** Kết hợp `--surface` & `--surface-alt`.<br>**Subject:** 3 thẻ tiêu chuẩn HLV + 2 thẻ cơ sở (`D'Capitale Trần Duy Hưng` & `Royal City Nguyễn Trãi`) kèm ảnh phòng tập và bản đồ Google Maps + Timeline 4 bước trong 60 phút buổi thử (`10'` → `15'` → `30'` → `05'`). | Thanh tiến trình 60 phút sáng dần theo cuộn chuột; thẻ cơ sở tích hợp bản đồ nhúng và nút gọi/chỉ đường tức thì. | **Thân thuộc & Sẵn sàng:** Hình dung trọn vẹn không gian tập, chỗ đỗ xe ô tô và 60 phút đầu tiên sẽ diễn ra thế nào. |
| **86% – 100%** | **Chapter 06:** *FAQ, Đặt lịch 3 bước (Google Sheets) & Footer* | **Bg:** Gradient ấm `from-surface via-surface-alt to-surface`.<br>**Subject:** 10 câu hỏi FAQ đóng/mở + Wizard Đặt lịch 3 bước (`1/3` Mục tiêu & Hình thức → `2/3` Cơ sở & Khung giờ → `3/3` Liên hệ, Sàng lọc sức khỏe & 2 Checkbox Luật DLCN 91/2025/QH15).<br>**Fg:** Trạng thái xác nhận tức thì + Kết nối Google Worksheet. | Chuyển bước form không giật trang, kiểm tra lỗi sau tương tác (`blur`), gửi dữ liệu về `/api/leads` & Google Sheet Webhook. | **Hành động nhẹ nhàng:** Hoàn tất đặt lịch trong 30 giây, yên tâm chờ tư vấn viên liên hệ qua Zalo sau 5 phút. |

---

## 4. Hệ Thống Token Màu Sắc & Kiểu Chữ (Chuẩn `/styleguide` & WCAG AA/AAA)

### 4.1. Bảng 8 Token Màu Thương Hiệu
| Biến CSS | Mã Hex | Vai trò sử dụng | Độ tương phản & Quy tắc bắt buộc |
| :--- | :--- | :--- | :--- |
| `--brand-rose` | `#C99E91` | Màu hồng đất chủ đạo (lấy từ logo & ảnh bìa) | `2.4:1` với `#FFF` — Chỉ dùng làm nền nhấn nhẹ, viền, điểm trang trí. **Tuyệt đối không dùng làm nền cho nút chữ trắng.** |
| `--brand-rose-deep` | `#8E5F53` | Màu nút CTA chính (Primary Action), nhãn nhấn, icon chính | `5.4:1` với `#FFF` (**Đạt chuẩn WCAG AA**). Hover: `--brand-rose-deep-hover: #7C5246`. |
| `--brand-rose-soft` | `#E8D3CB` | Hồng kem nhạt (Soft Accent), nền badge, hover nhẹ | `9.4:1` với `#3D2E2A` (**Đạt chuẩn WCAG AAA**). |
| `--surface` | `#FBF6F3` | Nền chính toàn trang (Warm Ivory — tường vòm studio) | `12.0:1` với `#3D2E2A` (**Đạt chuẩn WCAG AAA**). |
| `--surface-alt` | `#F3E6E0` | Nền section xen kẽ (Alternate Surface) | `10.6:1` với `#3D2E2A` (**Đạt chuẩn WCAG AAA**). |
| `--text` | `#3D2E2A` | Chữ chính (Deep Espresso Brown — thay màu đen tuyền) | `12.0:1` trên nền `#FBF6F3` (**Đạt chuẩn WCAG AAA**). |
| `--text-muted` | `#7A6560` | Chữ phụ (Muted Warm Taupe — mô tả, chú thích) | `5.1:1` trên nền `#FBF6F3` (**Đạt chuẩn WCAG AA**). |
| `--neutral-equipment` | `#9AA3A8` | Xám xanh đệm máy Reformer | Dùng điểm xuyết cho đường kẻ kỹ thuật mảnh hoặc icon phụ. |

### 4.2. Hệ Thống Kiểu Chữ Tiếng Việt
- **Display / Heading (`--font-display`):** `'Cormorant Garamond', Georgia, serif` (Weight: 500, 600, 700, Normal & Italic) — tạo nét thanh lịch của tạp chí thời trang & sức khỏe.
- **Label / Button / Eyebrow (`--font-label`):** `'Montserrat', system-ui, sans-serif` (Weight: 500, 600, ` uppercase`, `letter-spacing: 0.15em`) — đồng bộ với nhận diện thương hiệu Charming Pilates.
- **Body / UI Copy (`--font-body`):** `'Be Vietnam Pro', system-ui, sans-serif` (Weight: 400, 500, 600) — tối ưu dấu tiếng Việt rõ nét trên màn hình di động ở cỡ chữ `14px–18px`.

---

## 5. Đặc Tả Đầy Đủ Tính Năng Kỹ Thuật

1. **Form Đăng Ký Đặt Lịch 3 Bước Kết Nối Google Worksheet:**
   - **Bước 1/3 (Mục tiêu & Hình thức):** Chọn 1 trong 6 mục tiêu tập luyện & 1 trong 4 hình thức lớp (`Semi-Private 1:4`, `Duet 1:2`, `Private 1:1`, `Chưa rõ – Nhờ tư vấn giúp`).
   - **Bước 2/3 (Cơ sở & Khung giờ):** Chọn cơ sở (`Cơ sở 1: D'Capitale Trần Duy Hưng` hoặc `Cơ sở 2: Royal City Nguyễn Trãi`), khung giờ (`Buổi sáng 08:00–11:30`, `Buổi trưa 11:30–14:00`, `Buổi chiều 14:00–17:30`, `Buổi tối 17:30–21:00`) và ngày dự kiến / ghi chú.
   - **Bước 3/3 (Thông tin & Đồng ý DLCN):** Họ tên, Số điện thoại Việt Nam (kiểm tra chuẩn đầu số `03, 05, 07, 08, 09` 10 chữ số), tùy chọn *"Số điện thoại này có dùng Zalo"*, sàng lọc sức khỏe nhanh (mang thai/mới sinh/cột sống) và **2 checkbox đồng ý dữ liệu cá nhân tách biệt** theo Luật Bảo vệ DLCN `91/2025/QH15` & Nghị định `356/2025`.
   - **Đồng bộ Google Worksheet:**
     - Gửi payload qua Serverless API `/api/leads` tới **Google Apps Script Web App (`GOOGLE_SHEET_WEBHOOK_URL`)** hoặc **Google Sheets API v4 (`GOOGLE_SHEET_ID`)**.
     - Hỗ trợ cấu hình nhanh URL Google Apps Script Webhook ngay trên giao diện (nút cài đặt kết nối Sheet) kèm mã nguồn Apps Script mẫu `doPost(e)` để kết nối bất kỳ file Google Sheet nào trong 1 phút.
2. **Trợ Lý AI Hỏi Đáp (`ChatWidget` & `/api/chat`):**
   - Nút nổi *"Hỏi trợ lý AI"* mở hộp thoại tư vấn thông minh có Avatar Charming Pilates và nút chuyển nhanh *"Gặp tư vấn viên (Zalo)"*.
   - Tích hợp 4 gợi ý hỏi nhanh: `Bảng giá`, `Tôi mới sau sinh`, `Đau lưng có tập được không`, `Đặt buổi thử`.
   - Backend `/api/chat` kết hợp **OpenRouter / Gemini AI** (khi cấu hình API key) và **Charming Pilates Guarded Knowledge Engine** (trả lời chính xác tuyệt đối về bảng giá 1:4 / 1:2 / 1:1, địa chỉ 2 cơ sở, thai kỳ/hậu sản, thoát vị đĩa đệm, chính sách hủy lịch/bảo lưu) kèm biểu mẫu để lại SĐT giữ lịch ngay trong khung chat.
3. **Hệ Thống Liên Hệ Đa Kênh (Zalo, Messenger, Hotline):**
   - **Desktop Floating Action Bar:** Cụm nút nổi góc dưới bên phải gồm `Zalo tư vấn`, `Messenger`, `Hotline 096 389 4885` và `Hỏi trợ lý AI`.
   - **Mobile Sticky Bottom Bar:** Thanh liên hệ dính đáy màn hình di động gồm `Gọi điện`, `Chat Zalo`, `Messenger`, `Đặt thử` đảm bảo thao tác 1 chạm bằng ngón cái.
4. **Triển Khai GitHub & Go-Live Chính Thức Trên Vercel:**
   - Cấu trúc dự án chuẩn Vercel (`index.html`, `styleguide.html`, `chinh-sach-bao-mat.html`, `dieu-khoan.html`, `styles/`, `js/`, `brand/`, `images/`, `api/leads.js`, `api/chat.js`, `vercel.json`).
   - Đẩy mã nguồn lên GitHub repository và triển khai Production (`vercel --prod`) trên Vercel.
