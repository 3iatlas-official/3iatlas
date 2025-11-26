import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/3iatlas/",    // required for GitHub Pages at https://3iatlas.github.io/3iatlas
  plugins: [react()],
});
