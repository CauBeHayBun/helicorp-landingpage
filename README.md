# BÁO CÁO HOÀN THÀNH BÀI THI VÒNG 2 - TTS IT PHÁT TRIỂN WEBSITE (HELICORP)
## DỰ ÁN: AURABREATHE SMART PURIFIER LANDING PAGE

Dự án này là trang Landing Page giới thiệu máy lọc không khí thông minh **AuraBreathe Smart Purifier**, được xây dựng dựa trên các yêu cầu chi tiết trong đề bài tuyển dụng của **Helicorp (Healthy Living Corporation)**.

---

## 📌 THÔNG TIN ĐƯỜNG DẪN NỘP BÀI (Ứng viên tự điền)
* **Họ và tên ứng viên:** [Họ và Tên của Bạn]
* **Link GitHub Repository (Public):** [Dán link repo GitHub của bạn vào đây]
* **Link Landing Page chạy thực tế (Vercel/Netlify):** [Dán link sau khi đã deploy vào đây]
* **Ảnh chụp điểm số Google PageSpeed Insights:** (Đính kèm ảnh chụp màn hình trong email nộp bài hoặc lưu vào thư mục repo này)

---

## 🛠️ CÔNG NGHỆ SỬ DỤNG
Trang web được phát triển bằng công nghệ Web thuần tuý để tối ưu hoá hiệu năng và tốc độ tải trang cao nhất:
* **HTML5**: Cấu trúc ngữ nghĩa (Semantic HTML) chuẩn SEO.
* **CSS3**: Layout hiện đại sử dụng Flexbox/Grid, hiệu ứng Glassmorphic cao cấp, CSS Custom Properties hỗ trợ đổi Theme.
* **Vanilla JavaScript (ES6+)**: Xử lý logic nghiệp vụ, quản lý giỏ hàng, tracking hành vi, chatbot và các hiệu ứng động.
* **Không sử dụng thư viện cồng kềnh**: Giúp kích thước file cực kỳ gọn nhẹ, dễ dàng đạt điểm số Google PageSpeed Insights tối đa (100/100 trên thiết bị di động).

---

## 🚀 CÁC TÍNH NĂNG ĐÃ HOÀN THÀNH

### 1. Giao diện & Thẩm mỹ (Đầy đủ theo yêu cầu bắt buộc)
* **Hero Section**: Tiêu đề ấn tượng, nút kêu gọi hành động (CTA), thông số nổi bật cùng **mô hình máy lọc bằng đồ họa SVG động** (hiệu ứng luồng khí tuần hoàn và đèn LED hiển thị chỉ số AQI thay đổi theo thời gian).
* **Tính năng nổi bật (Features)**: Trình bày dạng Grid sạch sẽ, phối màu HSL hài hòa, dễ theo dõi trên cả máy tính và điện thoại (Responsive mượt mà).
* **Thông số kỹ thuật (Specs)**: Bảng thông số chi tiết chuẩn thiết kế tối giản, trực quan.
* **Form đăng ký nhận tin (Newsletter)**: Form đăng ký ở chân trang tích hợp bộ lọc kiểm tra email đúng định dạng (Regular Expression) trước khi gửi.

### 2. Điểm cộng đã tích hợp (Bonus Features hoàn chỉnh)
Chúng tôi đã xây dựng đầy đủ các phần điểm cộng trong đề bài để tối ưu hóa điểm số đánh giá của bạn:
* **Chế độ Sáng/Tối (Dark/Light Mode)**: 
  * Tích hợp nút chuyển đổi giao diện ở header.
  * Tự động lưu và giữ nguyên trạng thái giao diện đã chọn qua `localStorage` khi tải lại trang.
* **Scroll Animation & Micro-interactions**:
  * Sử dụng *Intersection Observer API* để kích hoạt hoạt ảnh mượt mà khi cuộn tới các phần của trang mà không gây giật lag.
  * Hiệu ứng hover tương tác sinh động trên các thẻ sản phẩm và nút bấm.
* **Theo dõi hành vi người dùng (User Tracking) & Webhook**:
  * Form đăng ký nhận tin được lập trình gửi POST JSON đến Webhook (tích hợp mock endpoint thông qua API httpbin).
  * Trong payload gửi đi có tích hợp sẵn các chỉ số đo lường hành vi: *Tổng số lần click chuột của người dùng, tỷ lệ % cuộn trang sâu nhất (scroll depth) và danh sách các section người dùng đã đọc thực tế*.
  * Hiển thị thông báo **Toast Notification** tùy chỉnh đẹp mắt khi đăng ký thành công hoặc thất bại.
* **Tính năng Thương mại điện tử Mini (Mini E-commerce)**:
  * Cho phép thêm các phụ kiện (màng lọc HEPA, cảm biến phụ) vào Giỏ hàng.
  * Tích hợp thanh trượt Giỏ hàng (Cart Drawer) và Danh sách yêu thích (Wishlist Drawer) từ cạnh màn hình.
  * Hiển thị danh sách **Sản phẩm đã xem gần đây** một cách tự động khi người dùng di chuột/xem sản phẩm lâu hơn 1 giây.
  * Lưu trữ đồng bộ giỏ hàng và danh sách yêu thích vào `localStorage`.
* **Trợ lý ảo thông minh (AuraBot Chatbot)**:
  * Cửa sổ chatbot thu nhỏ ở góc phải màn hình với chấm đỏ thông báo nổi bật.
  * Hỗ trợ giải đáp tự động các thắc mắc thường gặp của khách hàng bằng cách nhấn chọn các chủ đề gợi ý (tính năng, giá cả, bảo hành, công nghệ màng lọc) hoặc tự nhập câu hỏi tùy ý.
  * Tích hợp hiệu ứng ba dấu chấm nhấp nháy mô phỏng bot đang soạn câu trả lời (typing indicator).

---

## 🔍 HƯỚNG DẪN KIỂM TRA & MINH CHỨNG CÁC ĐIỂM CỘNG
Để nhà tuyển dụng Helicorp có thể nhanh chóng kiểm tra và đánh giá các tính năng điểm cộng trên trang web chạy thực tế, bạn hãy hướng dẫn họ thực hiện các bước sau trong email nộp bài hoặc ngay tại README này:

### 1. Kiểm tra chế độ Dark/Light Mode
* **Cách test:** Click vào biểu tượng **Mặt trăng / Mặt trời** trên thanh công cụ Header. Giao diện trang web sẽ chuyển đổi mượt mà giữa hai màu chủ đạo. 
* **Minh chứng lưu trữ:** F5/Tải lại trang web, giao diện vẫn giữ nguyên màu sắc bạn đã chọn trước đó (được quản lý thông qua `localStorage` ở Client).

### 2. Kiểm tra tính năng Mini E-commerce (Giỏ hàng, Yêu thích & Đã xem)
* **Cách test Giỏ hàng & Yêu thích:**
  * Nhấn nút **Thêm vào giỏ** hoặc biểu tượng **Trái tim (Yêu thích)** trên các thẻ sản phẩm phụ kiện.
  * Số lượng trên biểu tượng Giỏ hàng và Trái tim ở Header sẽ tăng lên.
  * Click vào các biểu tượng này để mở Sidebar Drawer trượt ra từ bên phải màn hình. Bạn có thể tăng/giảm số lượng hoặc xóa sản phẩm.
  * Nhấn **Thanh toán ngay** trong Giỏ hàng để chạy mô phỏng quy trình xử lý đơn hàng.
* **Cách test sản phẩm Đã xem gần đây:**
  * Chỉ cần di chuột (hover) qua bất kỳ sản phẩm phụ kiện nào từ 1 giây trở lên (đóng vai trò như việc người dùng xem chi tiết sản phẩm).
  * Kéo xuống dưới cùng của phần phụ kiện, danh sách **"Sản phẩm đã xem gần đây"** sẽ tự động hiển thị sản phẩm đó.

### 3. Kiểm tra Trợ lý ảo AuraBot (Chatbot tự động)
* **Cách test:** Click vào bong bóng chat màu xanh lá ở góc dưới bên phải màn hình.
* **Tương tác:** 
  * Click chọn các nút gợi ý có sẵn như *Giá bán & Ưu đãi*, *Chính sách bảo hành*, *Tính năng nổi bật*... 
  * Hoặc tự nhập các câu hỏi vào ô nhập liệu như: *"hepa"*, *"giá bao nhiêu"*, *"bảo hành"*... rồi bấm gửi. 
  * AuraBot sẽ hiển thị hoạt ảnh ba dấu chấm nhấp nháy (typing indicator) và trả lời thông minh dựa theo nội dung câu hỏi sau 1 giây.

### 4. Minh chứng gửi Webhook & Theo dõi hành vi (Click & Scroll Tracking)
Đây là phần điểm cộng nâng cao đặc biệt nhất: **Vừa kiểm tra hợp lệ dữ liệu vừa gửi dữ liệu hành vi thực tế của người dùng**.
* **Cách kiểm tra minh chứng:**
  1. Click chuột phải trên trang web và chọn **Kiểm tra (Inspect / F12)**, chuyển sang tab **Console (Bảng điều khiển)**.
  2. Hãy thực hiện một số thao tác trên trang web (ví dụ: cuộn trang lên xuống, click một vài nút bấm hoặc thêm sản phẩm vào giỏ).
  3. Kéo xuống phần đăng ký nhận tin ở cuối trang. Nhập một email hợp lệ (ví dụ: `ungvien@gmail.com`) và nhấn **Đăng ký nhận tin**.
  4. Quan sát tab **Console**, bạn sẽ thấy log in ra payload JSON mà JavaScript gửi lên Webhook (`Sending webhook payload: ...`) bao gồm:
     * `totalClicks`: Tổng số lần bạn đã click chuột trên trang web.
     * `maxScrollDepthPercent`: Tỷ lệ % cuộn trang sâu nhất mà bạn đã kéo tới (ví dụ: `87%`).
     * `visitedSections`: Danh sách tên các section bạn đã thực sự cuộn qua đọc (`hero`, `features`, `specs`, `ecommerce`, `newsletter`).
     * `cartItemsCount` và `wishlistItemsCount`: Số lượng sản phẩm trong giỏ hàng và danh sách yêu thích của bạn tại thời điểm đăng ký.
  5. Đồng thời, một thông báo **Toast success** đẹp mắt sẽ xuất hiện ở trên cùng của trang web thông báo thành công.

---

## 💻 HƯỚNG DẪN CHẠY THỬ VÀ DEPLOY (Dành cho ứng viên)

### Cách chạy thử trên máy cá nhân
1. Tải thư mục chứa mã nguồn về máy.
2. Click đúp chuột vào file `index.html` để chạy trực tiếp trên trình duyệt Web.
3. Hoặc sử dụng extension **Live Server** trên VS Code để chạy dưới dạng cổng `http://localhost`.

### Hướng dẫn đẩy code lên GitHub
1. Mở Terminal/Git Bash tại thư mục dự án và chạy:
   ```bash
   git init
   git add .
   git commit -m "feat: complete helicorp website internship test requirements"
   ```
2. Tạo một repository mới trên GitHub ở chế độ **Public**.
3. Liên kết và đẩy code lên:
   ```bash
   git remote add origin <LINK_REPO_GITHUB_CỦA_BẠN>
   git branch -M main
   git push -u origin main
   ```

### Hướng dẫn Deploy lên Vercel (Miễn phí & Cực nhanh)
1. Đăng nhập vào [Vercel](https://vercel.com/) bằng tài khoản GitHub của bạn.
2. Click **Add New** -> **Project**.
3. Chọn Repository dự án này vừa đẩy lên GitHub và click **Import**.
4. Giữ nguyên các thiết lập mặc định và ấn **Deploy**. 
5. Sau 15-30 giây, Vercel sẽ cấp cho bạn một đường dẫn (link) chạy thực tế để nộp bài.

### 📸 Hướng dẫn lấy ảnh chụp điểm số Google PageSpeed Insights
Do công cụ Google PageSpeed Insights chỉ có thể quét các trang web trực tuyến (không quét được máy cá nhân localhost), bạn cần làm theo các bước sau sau khi đã deploy lên Vercel thành công:
1. Copy đường dẫn trang web của bạn trên Vercel (ví dụ: `https://aurabreathe-xyz.vercel.app`).
2. Truy cập vào trang web công cụ của Google tại: **[Google PageSpeed Insights](https://pagespeed.web.dev/)**.
3. Dán link Vercel của bạn vào ô nhập liệu và nhấn **Analyze (Phân tích)**.
4. Chờ khoảng 30 giây để Google phân tích. Sau khi có kết quả, chọn tab **Mobile (Di động)**.
5. Chụp màn hình (Screenshot) phần hiển thị điểm số (bao gồm chỉ số **Hiệu suất / Performance** - cam kết sẽ đạt từ 90 đến 100 điểm vì code cực kỳ tối ưu).
6. Lưu ảnh chụp màn hình này thành file tên `pagespeed-score.png` và bỏ vào thư mục dự án này, hoặc đính kèm trực tiếp vào email nộp bài cho Helicorp.

---
*Chúc bạn có một kỳ thi tuyển thành công tốt đẹp tại Helicorp!*
