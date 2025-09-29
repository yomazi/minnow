// server/index.ts
import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// __dirname replacement in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5001;

console.log("Server starting");

// Parse JSON bodies
app.use(express.json());

// Example API route
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Express API!" });
});

// Serve React frontend (production)
const reactDistPath = path.join(__dirname, "../client/dist");
app.use(express.static(reactDistPath));
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(reactDistPath, "index.html"));
});

// Load certificates
const certPath = path.resolve(__dirname, "../certificates");
const options = {
  key: fs.readFileSync(path.join(certPath, "key.pem")),
  cert: fs.readFileSync(path.join(certPath, "cert.pem")),
};

// Start HTTPS server
app.listen(PORT, () => {
  console.log(`Server running at https://localhost:${PORT}`);
});

process.stdin.resume();
