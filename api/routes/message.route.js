import express from "express";
import { createMessage, getMessages } from "../controllers/message.controller";
import { verifyToken } from "../middlewares/auth.js";

const router = express.Router();

router.post("/", verifyToken, createMessage);
router.get("/:id", verifyToken, getMessages);

export default router;
