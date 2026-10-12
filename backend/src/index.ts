import express from "express";
import { Pool } from "pg";

const app = express();
const port = Number(process.env.PORT) || 3000;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

app.use(express.json());

app.get("/api/health", async (_req, res) => {
  try {
    await pool.query("SELECT 1");
    res.json({
      status: "ok",
      database: "connected"
    });
  } catch (error) {
    console.error("Database connection failed:", error);
    res.status(500).json({
      status: "error",
      database: "unavailable"
    });
  }
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Backend listening on port ${port}`);
});
