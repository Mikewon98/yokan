import express from "express";
import {
  addShipmentData,
  getShipmentData,
} from "../controllers/shipmentData.js";

const router = express.Router();

router.post("/addShipmentData", addShipmentData);
router.get("/getShipmentData/:trackingNumber", getShipmentData);

export default router;
