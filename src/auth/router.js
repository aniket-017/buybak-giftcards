import express from "express";
import { googleLogin, refresh } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/google", googleLogin);
router.post("/refresh", refresh);

export default router;
