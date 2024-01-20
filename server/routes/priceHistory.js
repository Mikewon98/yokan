import express from "express";
import { createPriceHistory } from "../controllers/priceHistory.js";

const router = express.Router();

router.post("/createPriceHistory", createPriceHistory);

export default router;
