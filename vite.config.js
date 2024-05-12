import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
  build: {
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, "src/index.js"),
      name: "IncrementalKeywordsExtractor",
      formats: ["es", "umd", "cjs", "iife"],
      fileName:"index"
    },
  },
});
