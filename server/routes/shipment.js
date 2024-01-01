import express from "express";
import {
  createShipment,
  viewShipment,
  getShipment,
  getAllShipment,
} from "../controllers/shipment.js";

const router = express.Router();

router.post("/createShipment", createShipment);
router.get("/viewShipment/:userId", viewShipment);
router.get("/getShipment/:trackingNumber", getShipment);
router.get("/getAllShipment", getAllShipment);

export default router;
