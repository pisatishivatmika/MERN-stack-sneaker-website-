import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/shivatmika-Ecommerce",
  server: {
    proxy: {
      "/api/": "https://shivatmika-ecommerce.onrender.com",
      "/uploads/": "https://shivatmika-ecommerce.onrender.com",
    },
  },
});
