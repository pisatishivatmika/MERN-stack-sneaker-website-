import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: '/MERS-stack-sneaker-website-/',
  server: {
    proxy: {
      "/api/": "http://localhost:8080",
      "/uploads/": "http://localhost:8080",
    },
  },
});
