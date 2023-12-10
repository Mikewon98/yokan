import express from "express";
import { getLocation, createLocation } from "../controllers/located.js";

const router = express.Router();

router.get("/getlocation/:userId", getLocation);
router.post("/createlocation", createLocation);

export default router;
