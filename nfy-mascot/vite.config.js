import { resolve } from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  base: "/nfy-mascot/",
  define: {
    // Đảm bảo React chạy ở chế độ production khi nhúng
    "process.env.NODE_ENV": JSON.stringify("production"),
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/widget.jsx"),
      name: "NfyMascot",
      fileName: () => "nfy-mascot.js",
      formats: ["iife"], // Đóng gói toàn bộ code vào 1 file chạy trực tiếp trên trình duyệt
    },
  },
});
