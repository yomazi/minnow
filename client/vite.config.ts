import react from "@vitejs/plugin-react-swc";
import fs from "fs";
import path from "path";
import { type ConfigEnv, defineConfig, loadEnv } from "vite";

export default ({ mode }: ConfigEnv) => {
  // Load env variables for this mode
  const env = loadEnv(mode, process.cwd(), "VITE_");

  return defineConfig({
    plugins: [react()],
    server: {
      port: 3000,
      https: {
        key: fs.readFileSync(path.resolve(__dirname, "../certificates/key.pem")),
        cert: fs.readFileSync(path.resolve(__dirname, "../certificates/cert.pem")),
      },
      proxy: {
        "/api": {
          target: env.VITE_API_URL,
          changeOrigin: true,
          secure: false,
        },
      },
    },
  });
};
