import express from "express";
import {
  registerFeeder,
  loginFeeder,
  deleteFeeder,
  getFeeder,
  getIndividualDataFeeder,
} from "../controllers/feedUser.js";

const router = express.Router();

router.post("/login", loginFeeder);

router.post("/register", registerFeeder);

router.get("/getFeeder", getFeeder);

router.get("/getIndividualDataFeeder/:userId", getIndividualDataFeeder);

router.delete("/deleteFeeder/:userId", deleteFeeder);

export default router;
