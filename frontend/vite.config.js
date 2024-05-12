import { defineConfig } from "vite";
import { nodePolyfills } from 'vite-plugin-node-polyfills'
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": "http://localhost:5400",
    },
  },
  plugins: [react(),nodePolyfills()],
});
