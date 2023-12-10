import express from "express";
import {
  addShipmentDataItem,
  getShipmentDataItem,
} from "../controllers/shipmentDataItem.js";

const router = express.Router();

router.post("/addShipmentDataItem", addShipmentDataItem);
router.get("/getShipmentDataItem/:trackingNumber", getShipmentDataItem);

export default router;
