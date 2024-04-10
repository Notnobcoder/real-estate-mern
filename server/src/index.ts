import express from "express";
import dotenv from "dotenv";

dotenv.config();
const port = process.env.PORT || 8000;
const app = express();

app.get("/", (_req, res) => {
  res.json({ hello: "world" });
});

app.listen(port, () => {
  console.log(`server runinng at port ${port}`);
});
