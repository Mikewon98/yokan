import express from "express";
import { setPrice, updatePrice, getPrice } from "../controllers/price.js";

const router = express.Router();

router.get("/getprice", getPrice);
router.post("/setprice", setPrice);
router.put("/updateprice/:id", updatePrice);

export default router;
