# BÀI TẬP MÔN CÔNG NGHỆ WEB (CN_WEB)

Repository lưu trữ các bài tập thực hành và bài tập lớn thuộc môn **Công nghệ Web**.

---

## 📌 Giới thiệu Tổng quan

- **Tác giả:** Vũ Thùy Dương
- **Tài khoản GitHub:** [vuthuyduong1505](https://github.com/vuthuyduong1505)
- **Mục đích:** Hoàn thành các yêu cầu bài tập của môn học Công nghệ Web, bao gồm việc xây dựng giao diện web bằng HTML5, CSS3, cấu trúc Semantic HTML5, xử lý form đăng ký, tích hợp các phần tử đa phương tiện (Media) và tối ưu SEO cơ bản.

---

## 📁 Cấu trúc Thư mục Dự án

```text
CN_Web/
└── assignment_02/             # Bài tập thực hành số 2
    ├── index.html             # Trang chủ (phiên bản gốc)
    ├── index_new.html         # Trang chủ đã refactor chuẩn Semantic HTML5 & SEO
    ├── about.html             # Trang giới thiệu
    ├── news.html              # Trang tin tức
    ├── blog.html              # Trang bài viết blog
    ├── register.html          # Trang form đăng ký nhận thông tin
    ├── media.html             # Trang nội dung đa phương tiện (Video, Audio, Map, Figure)
    ├── css/
    │   └── style.css          # Tệp định dạng stylesheet cho toàn bộ giao diện
    ├── images/                # Chứa hình ảnh giao diện và tư liệu bài viết
    └── fonts/                 # Chứa phông chữ được nhúng vào website
```

---

## 🚀 Chi tiết Các Trang & Tính năng

### 1. Trang Đăng ký Nhận thông tin (`register.html`)
- Xây dựng biểu mẫu thu thập thông tin người dùng được chia thành 3 phần chính (`<fieldset>`):
  - **Thông tin tài khoản:** Họ tên, Email, Mật khẩu, Số điện thoại.
  - **Thông tin cá nhân:** Ngày sinh, Độ tuổi, Giới tính.
  - **Tùy chọn nhận tin:** Chủ đề quan tâm, Khu vực, Lời nhắn, Đồng ý điều khoản sử dụng.
- Tích hợp các nút thao tác `Đăng ký` và `Nhập lại`.

### 2. Trang Đa phương tiện & Semantic HTML5 (`media.html`)
- Ứng dụng các thẻ HTML5 Semantic: `<article>`, `<header>`, `<time>`, `<section>`, `<figure>`, `<figcaption>`, `<footer>`.
- Tích hợp nội dung đa phương tiện:
  - Thẻ hình ảnh chuẩn `<figure>` và chú thích `<figcaption>`.
  - Trình phát video HTML5 (`<video controls>`).
  - Trình phát âm thanh HTML5 (`<audio controls>`).
  - Bản đồ tương tác nhúng từ Google Maps bằng thẻ `<iframe>`.

### 3. Trang Chủ tối ưu HTML5 Semantic & SEO (`index_new.html`)
- Refactor cấu trúc thẻ từ giao diện `index.html` sang chuẩn HTML5 Semantic (`<header>`, `<nav>`, `<main>`, `<article>`, `<aside>`, `<section>`, `<footer>`).
- Bổ sung các thẻ `<meta name="description">`, `<meta name="viewport">` và thuộc tính `alt`, `aria-label` hỗ trợ SEO và khả năng truy cập (Accessibility).

---

## 🛠 Thẻ và Công nghệ Sử dụng

- **HTML5**: Semantic tags, Form input validation, Embed Video/Audio/Iframe, Figure/Figcaption.
- **CSS3**: Layouting, Sprites, Form controls styling, Web fonts (`@font-face`).
- **Git & GitHub**: Quản lý mã nguồn phiên bản và lưu trữ trực tuyến.

---

## 📖 Hướng dẫn Sử dụng

1. **Clone repository về máy local:**
   ```bash
   git clone https://github.com/vuthuyduong1505/CN_Web.git
   ```
2. **Mở dự án:**
   Chạy trực tiếp bất kỳ tệp `.html` nào (ví dụ `assignment_02/index_new.html`, `assignment_02/register.html`, `assignment_02/media.html`) bằng các trình duyệt web hiện đại như Google Chrome, Microsoft Edge hoặc Mozilla Firefox.

---
*Bản quyền © 2026 - Vũ Thùy Dương*
