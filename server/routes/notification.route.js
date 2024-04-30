import express from "express";
import { verifyToken } from "../middleware/auth.js";
import { deleteNotifications, getNotifications } from "../controllers/Notification.controller.js";

const router = express.Router();

router.get("/", verifyToken, getNotifications);
router.delete("/", verifyToken, deleteNotifications);

export default router;