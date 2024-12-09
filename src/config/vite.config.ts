import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import checker from "vite-plugin-checker";

export default defineConfig({
  base: "./",
  plugins: [
    react(),
    checker({
      typescript: true,
      eslint: { lintCommand: 'eslint "./src/**/*.{ts,tsx}"' },
      overlay: { initialIsOpen: false },
    }),
  ],
  server: {
    port: 3000,
  },
});
