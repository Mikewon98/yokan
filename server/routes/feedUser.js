import express from "express";
import { registerFeeder, loginFeeder } from "../controllers/feedUser.js";

const router = express.Router();

router.post("/login", loginFeeder);

router.post("/register", registerFeeder);

export default router;
