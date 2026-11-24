# BÀI TẬP 06 - LẬP TRÌNH REACT CƠ BẢN (CRUD)

Dự án thực hành xây dựng ứng dụng Web Single Page Application (SPA) quản lý người dùng với React 18, Babel Standalone và JSONPlaceholder API theo mô hình Functional Components & Hooks.

---

## 🎯 Mục tiêu bài học & Kỹ thuật áp dụng

1. **Kiến trúc Functional Components:**
   - Ứng dụng phân rã thành các component độc lập: `App`, `SearchForm`, `AddUser`, `ResultTable`.
2. **Quản lý trạng thái với Hooks:**
   - Sử dụng `useState` cho quản lý state cục bộ và state tập trung.
   - Sử dụng `useEffect` để xử lý side-effects: gọi API lấy danh sách (`[]`) và lắng nghe người dùng mới được thêm (`[user]`).
3. **Mô hình State Lifting (Nâng cao trạng thái):**
   - Dữ liệu dùng chung (`kw` - từ khóa tìm kiếm, `newUser` - người dùng mới tạo) được lưu ở component cha (`App`).
   - Truyền hàm callback (`setKeyword`, `setNewUser`) xuống component con (`SearchForm`, `AddUser`) thông qua Props.
4. **Mô hình CRUD đầy đủ:**
   - **Create (Thêm):** Form thêm người dùng mới với đối tượng lồng nhau (`address`), sử dụng Spread Operator (`...`).
   - **Read (Hiển thị & Tìm kiếm):** Lấy dữ liệu qua `fetch()`, hiển thị dạng bảng và lọc tức thì (live search) theo `name` hoặc `username`.
   - **Update (Sửa):** Kỹ thuật **Deep Copy** khi mở form sửa, tránh thay đổi trực tiếp tham chiếu dữ liệu gốc trong bảng, cập nhật danh sách bằng `Array.map()`.
   - **Delete (Xóa):** Loại bỏ người dùng khỏi state bằng `Array.filter()`.
5. **Giao diện hiện đại & Thân thiện:**
   - Thiết kế theo phong cách Glassmorphism / Modern SaaS Dashboard.
   - Thống kê nhanh người dùng, hiển thị avatar tên viết tắt, badge thành phố, modal form chuẩn Bước 8 (`.modal-overlay`, `.modal-content`), hệ thống thông báo Toast thời gian thực và modal xác nhận an toàn khi xóa.

---

## 📁 Cấu trúc Thư mục

```text
assignment_06/
├── index.html        # Trang chính chứa cấu trúc HTML, CDN React 18 và toàn bộ mã nguồn React
├── css/
│   └── style.css     # Định dạng CSS giao diện hiện đại, glassmorphism, responsive & modal
└── README.md         # Tài liệu hướng dẫn và mô tả bài tập
```

---

## 🚀 Hướng dẫn Chạy ứng dụng

Ứng dụng sử dụng React 18 và Babel Standalone trực tiếp từ CDN nên **không cần cài đặt Node.js hay build tools**:

1. Mở trực tiếp tệp `assignment_06/index.html` bằng bất kỳ trình duyệt web hiện đại nào (Google Chrome, Microsoft Edge, Firefox, Brave).
2. Hoặc khởi chạy thông qua Live Server trong VS Code hay HTTP server:
   ```bash
   # Nếu dùng Python:
   python -m http.server 3000
   # Mở http://localhost:3000/assignment_06/
   ```

---
*Bản quyền © 2026 - Vũ Thùy Dương*
