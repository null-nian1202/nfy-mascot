# 🐾 NFY Mascot Widget

Một web component linh vật (mascot) tương tác theo chuyển động của con trỏ chuột, có thể nhúng trực tiếp vào bất kỳ trang web nào (HTML thuần, React, Vue, WordPress, Static Site...) chỉ với 2 dòng mã mà không cần cấu hình phức tạp.

---

## 🚀 Hướng Dẫn Sử Dụng Nhanh

### 1. Nhúng trực tiếp vào HTML

Thêm thẻ `<script>` vào trang của bạn và gọi thẻ `<nfy-mascot>` tại vị trí muốn hiển thị:

```html
<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <title>Trang web của tôi</title>
</head>
<body>

  <!-- Đặt linh vật tại bất kỳ đâu bạn muốn -->
  <nfy-mascot size="260"></nfy-mascot>

  <!-- Nhúng Script Widget -->
  <script src="[https://null-nian1202.github.io/nfy-mascot/nfy-mascot.js](https://null-nian1202.github.io/nfy-mascot/nfy-mascot.js)"></script>

</body>
</html>
```
# 🛠️ Phát triển cục bộ (Local Development)
Nếu bạn muốn chỉnh sửa hoặc tự build lại widget:
---
## 1. Clone repository
```bash
git clone [https://github.com/null-nian1202/nfy-mascot.git](https://github.com/null-nian1202/nfy-mascot.git)
```

## 2. Chuyển vào thư mục mã nguồn
```bash
cd nfy-mascot/nfy-mascot
```

## 3. Cài đặt dependencies
```bash
npm install
```

## 4. Chạy môi trường dev
```bash
npm run dev
```

## 5. Build file nfy-mascot.js
```bash
npm run build
```
