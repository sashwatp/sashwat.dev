import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://sashwat.dev",
  output: "static",
  markdown: {
    shikiConfig: {
      theme: "tokyo-night",
    },
  },
});
