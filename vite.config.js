import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const isNetlify = process.env.NETLIFY === "true";

export default defineConfig({
  // use "/" on Netlify (root), otherwise use the GitHub Pages base
  base: isNetlify ? "/" : "/3iatlas/",
  plugins: [react()],
});
