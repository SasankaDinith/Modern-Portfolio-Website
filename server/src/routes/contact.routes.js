import express from "express";
import rateLimit from "express-rate-limit";

import {
  sendContactMessage,
} from "../controllers/contact.controller.js";

const router = express.Router();

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,

  // Maximum 10 messages from one IP
  // every 15 minutes
  limit: 10,

  standardHeaders: "draft-7",
  legacyHeaders: false,

  message: {
    success: false,
    message:
      "Too many messages. Please try again later.",
  },
});

router.post(
  "/",
  contactLimiter,
  sendContactMessage,
);

export default router;