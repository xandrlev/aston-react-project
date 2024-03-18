import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { manualChunksPlugin } from "vite-plugin-webpackchunkname";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), manualChunksPlugin()],
  base: "./",
});
