import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Detect if running on Netlify
const isNetlify = process.env.NETLIFY === "true";

export default defineConfig({
  // Use "/" for Netlify hosting (root)
  // Use "/3iatlas/" for GitHub Pages hosting
  base: isNetlify ? "/" : "/3iatlas/",
  plugins: [react()],
});
