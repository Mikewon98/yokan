import express from "express";
import {
  addShipmentData,
  getShipmentData,
  updateShipment,
  updatePutShipment,
} from "../controllers/shipmentData.js";

const router = express.Router();

router.post("/addShipmentData", addShipmentData);
router.get("/getShipmentData/:trackingNumber", getShipmentData);
router.patch("/updateShipmentData/:trackingNumber", updateShipment);
router.put("/updatePutShipmentData/:trackingNumber", updatePutShipment);

export default router;
