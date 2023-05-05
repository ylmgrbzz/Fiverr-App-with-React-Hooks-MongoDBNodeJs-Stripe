import express from "express";
import deleteUser from "../controllers/user.controller.js";

const router = express.Router();

router.get("/test", (req, res) => {
  res.send("Hey its user route");
});

export default router;
