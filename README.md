# BÀI THI VÒNG 2 - TTS IT PHÁT TRIỂN WEBSITE (HELICORP)
## DỰ ÁN: LANDING PAGE MÁY LỌC KHÍ THÔNG MINH AURABREATHE
---

## 📌 THÔNG TIN NỘP BÀI
* **Họ và tên:** VÕ THANH SANG
* **Link GitHub:** `https://github.com/CauBeHayBun/helicorp-landingpage`
* **Link Web thực tế Vercel:** https://helicorp-landingpage.vercel.app/
* **Ảnh chụp điểm PageSpeed:**
  -Di động:
  <img width="2876" height="1622" alt="image" src="https://github.com/user-attachments/assets/9ff91e3a-0ddc-493a-a27e-26a63b034e91" />
  -Máy tính:
  <img width="2880" height="1516" alt="image" src="https://github.com/user-attachments/assets/4b6692d0-ef66-41ba-8d35-00417796a391" />


---

## 🛠️ CÔNG NGHỆ SỬ DỤNG
* **HTML5 (Semantic)**: Cấu trúc chuẩn SEO.
* **CSS3**: Bố cục Grid/Flexbox, thiết kế Glassmorphism và hiệu ứng động.
* **Vanilla JavaScript**: Xử lý logic nghiệp vụ và tương tác.
* *Ưu điểm:* Code thuần tối giản, tối ưu tốc độ load tuyệt đối.

---

## 🚀 CÁC TÍNH NĂNG ĐÃ TRIỂN KHAI

### 1. Yêu cầu bắt buộc (Hoàn thành 100%)
* **Hero Section**: Tiêu đề + **Đồ họa SVG động** mô phỏng máy lọc và luồng khí sạch.
* **Features Section**: Grid hiển thị các công nghệ cốt lõi của máy lọc khí.
* **Specs Section**: Bảng thông số kỹ thuật chi tiết của thiết bị.
* **Newsletter Section**: Form đăng ký email có kiểm tra định dạng (Regex).

### 2. Các điểm cộng tích hợp 
* **Dark Mode**: Toggle chuyển đổi giao diện sáng/tối, tự động lưu trạng thái vào `localStorage`.
  <img width="2856" height="1530" alt="image" src="https://github.com/user-attachments/assets/6815676b-d54a-4f85-a960-4a523056d0b7" />
  <img width="2866" height="1524" alt="image" src="https://github.com/user-attachments/assets/14d82370-8e2e-458e-9a94-639618e7fde2" />

* **Scroll Animation**: Hiệu ứng xuất hiện mượt mà khi cuộn trang nhờ *Intersection Observer*.
* **Mini E-commerce**: 
  * Thanh trượt Giỏ hàng (Cart) và Yêu thích (Wishlist) từ cạnh màn hình.
  * Tự động lưu lịch sử **Sản phẩm đã xem gần đây** khi hover chuột vào sản phẩm quá 1 giây.
  * Đồng bộ giỏ hàng và danh sách yêu thích vào `localStorage`.
  <img width="2880" height="1472" alt="image" src="https://github.com/user-attachments/assets/a9ebc2c6-bcd5-49a2-9491-1bf6b4a1cc99" />

* **Trợ lý ảo AuraBot (Chatbot)**:
  * Khung chat hỗ trợ tư vấn ở góc màn hình.
  * Trả lời tự động thông minh theo từ khóa hoặc nút chủ đề gợi ý (giá cả, tính năng, bảo hành...).
  * Có hiệu ứng đang soạn tin nhắn (typing indicator).
  <img width="2832" height="1590" alt="image" src="https://github.com/user-attachments/assets/505eaa7b-724d-41ce-9769-7d4c6455f266" />

* **Webhook & Theo dõi hành vi người dùng (Tracking)**:
  * Gửi dữ liệu đăng ký email về Webhook kèm theo các chỉ số hành vi thực tế: *Số lần click chuột, tỷ lệ % cuộn trang sâu nhất, các section đã xem*.
  * Hiển thị thông báo Toast Notification đẹp mắt.

---

## 🔍 HƯỚNG DẪN KIỂM TRA NHANH

1. **Dark/Light Mode**: Nhấn nút icon mặt trời/mặt trăng ở góc trên bên phải. Nhấn F5 để xem trạng thái lưu.
2. **Giỏ hàng & Yêu thích**: Nhấn **Thêm vào giỏ** hoặc nút **Trái tim** trên các sản phẩm phụ kiện để thấy thanh trượt Cart/Wishlist cập nhật.
3. **Sản phẩm đã xem**: Hover qua sản phẩm bất kỳ 1 giây, kéo xuống dưới cùng để thấy danh sách cập nhật.
4. **Chat với AuraBot**: Mở bong bóng chat ở góc phải, chọn các nút gợi ý hoặc gõ từ khóa (ví dụ: *"giá"*, *"hepa"*, *"bảo hành"*) để nhận phản hồi.
5. **Xem log Webhook (Tracking)**: Nhấn **F12** mở tab **Console**, sau đó điền email ở phần Newsletter và nhấn gửi. Bạn sẽ thấy log JSON gửi về Webhook chứa toàn bộ thống kê click chuột và độ cuộn trang.



