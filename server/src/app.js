import express from "express";
import cors from "cors";

import contactRoutes from "./routes/contact.routes.js";

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST"],
  }),
);

app.use(express.json());

app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Portfolio backend is running.",
  });
});

app.use(
  "/api/contact",
  contactRoutes,
);

export default app;