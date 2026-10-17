import express from "express";
import businessRouter from "./routes/businessRouter.ts";

const app = express();
const port = Number(process.env.PORT) || 3000;

app.use(express.json());

app.use("/api/business", businessRouter);

app.listen(port, "0.0.0.0", () => {
  console.log(`Backend listening on port ${port}`);
});
