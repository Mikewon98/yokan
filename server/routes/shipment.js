import express from "express";
import {
  createShipment,
  viewShipment,
  getShipment,
} from "../controllers/shipment.js";

const router = express.Router();

router.post("/createShipment", createShipment);
router.get("/viewShipment/:userId", viewShipment);
router.get("/getShipment/:trackingNumber", getShipment);

export default router;
