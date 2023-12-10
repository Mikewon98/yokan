import express from "express";
import { registerAdminUser, loginAdminUser } from "../controllers/adminUser.js";

const router = express.Router();

router.post("/login", loginAdminUser);

router.post("/register", registerAdminUser);

export default router;
