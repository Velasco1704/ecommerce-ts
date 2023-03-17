import { defineConfig } from "vite";
import path from "node:path";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  resolve: {
    alias: {
      "@api": path.resolve(__dirname, "./src/api/"),
      "@app": path.resolve(__dirname, "./src/app/"),
      "@components": path.resolve(__dirname, "./src/components/"),
      "@features": path.resolve(__dirname, "./src/features/"),
      "@interfaces": path.resolve(__dirname, "./src/interfaces/"),
      "@pages": path.resolve(__dirname, "./src/pages/"),
      "@styles": path.resolve(__dirname, "./src/styles/"),
    },
  },
  plugins: [react()],
});
