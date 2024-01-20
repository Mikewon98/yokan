import express from "express";
import { setShipmentInactive } from "../controllers/inActiveShipment.js";

const router = express.Router();

router.post("/setShipmentInactive", setShipmentInactive);

export default router;
