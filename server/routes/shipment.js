import express from "express";
import { createShipment, viewShipment } from "../controllers/shipment.js";

const router = express.Router();

router.post("/createShipment", createShipment);
router.get("/viewShipment/:userId", viewShipment);

export default router;
