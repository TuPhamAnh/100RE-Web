# Hướng dẫn đưa 100RE Laboratory lên Cloudflare Pages

Dự án đã được thiết kế sẵn sàng 100% để deploy trực tiếp lên **Cloudflare Pages + Cloudflare Functions**.

---

## 🌟 Cấu trúc trên Cloudflare
- **Frontend**: Toàn bộ giao diện tĩnh trong thư mục `Frontend/` (HTML, CSS, JS, Ảnh).
- **Backend API**: Nằm trong thư mục `functions/api/` (Cloudflare Serverless Functions):
  - `POST /api/login`: Đăng nhập, cấp Token UUID
  - `POST /api/logout`: Đăng xuất
  - `GET /api/members`: Lấy danh sách thành viên
  - `POST /api/members`: Thêm thành viên mới
  - `PUT /api/members/:id`: Sửa thông tin thành viên
  - `DELETE /api/members/:id`: Xóa thành viên
  - `POST /api/upload-photo`: Tải ảnh đại diện lên

---

## 🚀 CÁCH 1: Deploy qua GitHub (Khuyên Dùng - Cập nhật tự động)

1. **Khởi tạo Git & Đẩy code lên GitHub**:
   Mở terminal tại thư mục `d:\100RE Web` và chạy:
   ```bash
   git init
   git add .
   git commit -m "Deploy 100RE Lab to Cloudflare"
   git branch -M main
   git remote add origin https://github.com/<USERNAME>/<REPO_NAME>.git
   git push -u origin main
   ```

2. **Kết nối với Cloudflare Pages**:
   - Truy cập [https://dash.cloudflare.com/](https://dash.cloudflare.com/) và đăng nhập.
   - Chọn **Workers & Pages** ở menu bên trái ➔ Bấm **Create application** ➔ Chọn tab **Pages**.
   - Chọn **Connect to Git** và chọn Repository GitHub bạn vừa đẩy lên.
   - Cấu hình Build:
     - **Project name**: `100re-laboratory`
     - **Framework preset**: `None`
     - **Build output directory**: `Frontend`
   - Bấm **Save and Deploy**.

3. **Hoàn tất**:
   - Cloudflare sẽ tự động cấp một tên miền miễn phí dạng `https://100re-laboratory.pages.dev`.
   - Bạn có thể vào tab **Custom domains** để trỏ tên miền riêng của lab (ví dụ: `member.100relab.com`).

---

## ⚡ CÁCH 2: Deploy trực tiếp bằng lệnh (Wrangler CLI)

Nếu bạn không muốn qua GitHub mà muốn đẩy thẳng từ máy tính:

1. Mở terminal tại `d:\100RE Web`.
2. Chạy lệnh:
   ```bash
   npx wrangler pages deploy ./Frontend --project-name=100re-laboratory
   ```
3. Trình duyệt sẽ mở ra để bạn đăng nhập tài khoản Cloudflare ➔ Hệ thống tự động upload toàn bộ Frontend & Functions lên Cloudflare trong vài giây!

---

## 🔐 Đổi mật khẩu Admin trên Cloudflare

Mặc định tài khoản là `100re` / `100re`. Để đổi mật khẩu trên Cloudflare:
1. Vào Cloudflare Dashboard ➔ **Workers & Pages** ➔ Chọn dự án **100re-laboratory**.
2. Vào tab **Settings** ➔ **Environment variables**.
3. Thêm 2 biến:
   - `ADMIN_USERNAME`: Tên đăng nhập mới
   - `ADMIN_PASSWORD`: Mật khẩu mới
4. Bấm **Save**.
