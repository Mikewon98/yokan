import express from "express";
import {
  registerAdminUser,
  loginAdminUser,
  deleteAdminUser,
  getAdminUser,
  getIndividualAdminUser,
} from "../controllers/adminUser.js";

const router = express.Router();

router.post("/login", loginAdminUser);

router.post("/register", registerAdminUser);

router.get("/getAdminUser", getAdminUser);

router.get("/getIndividualAdminUser/:userId", getIndividualAdminUser);

router.delete("/deleteAdminUser/:userId", deleteAdminUser);

export default router;
