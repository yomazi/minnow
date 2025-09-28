import { defineConfig } from "vite";

// Use CLI flag --content=dirname OR fallback
const contentDir = process.env.npm_config_content || "default";

export default defineConfig({
  define: {
    __CONTENT_DIR__: JSON.stringify(contentDir),
  },
});
