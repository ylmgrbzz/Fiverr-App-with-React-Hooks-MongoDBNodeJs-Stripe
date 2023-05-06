import express from "express";
import { createOrder, getOrders } from "../controllers/order.controller.js";
import { verifyToken } from "../middlewares/auth.js";

const router = express.Router();

router.post("/", verifyToken, createOrder);
router.get("/", verifyToken, getOrders);

export default router;
