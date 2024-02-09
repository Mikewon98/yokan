import express from "express";
import {
  createShipment,
  viewShipment,
  getShipment,
  getAllShipment,
  updateShipment,
  deleteShipment,
  getShipmentById,
  viewActiveShipment,
  viewCompletedShipment,
} from "../controllers/shipment.js";

const router = express.Router();

router.post("/createShipment", createShipment);
router.get("/viewShipment/:userId", viewShipment);
router.get("/viewActiveShipment", viewActiveShipment);
router.get("/viewCompletedShipment", viewCompletedShipment);
router.get("/getShipment/:trackingNumber", getShipment);
router.get("/getShipmentById/:shipmentId", getShipmentById);
router.get("/getAllShipment", getAllShipment);
router.patch("/updateShipment/:trackingNumber", updateShipment);
router.delete("/deleteShipment/:shipmentId", deleteShipment);

export default router;
