import react from "@vitejs/plugin-react-swc";
import fs from "fs";
import path from "path";
import { defineConfig, loadEnv } from "vite";

export default ({ mode }: { mode: string }) => {
  const env = loadEnv(mode, process.cwd(), "VITE_");
  console.log("VITE_API_URL:", env.VITE_API_URL);

  const useHttps = false; // dev mode

  const serverConfig = {
    port: 3000,
    proxy: {
      "/api": {
        target: env.VITE_API_URL,
        changeOrigin: true,
        secure: false, // accept self-signed cert
      },
    },
  } as const;

  // Only add HTTPS config if actually using HTTPS
  if (useHttps) {
    Object.assign(serverConfig, {
      https: {
        key: fs.readFileSync(path.resolve(__dirname, "../certificates/key.pem")),
        cert: fs.readFileSync(path.resolve(__dirname, "../certificates/cert.pem")),
      },
    });
  }

  return defineConfig({
    plugins: [react()],
    server: serverConfig,
  });
};
