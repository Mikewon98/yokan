import express from "express";
import {
  login,
  register,
  getUser,
  deleteUser,
  getIndividualUser,
} from "../controllers/auth.js";

const router = express.Router();

router.post("/login", login);

router.post("/register", register);

router.get("/getUser", getUser);

router.get("/getIndividualUser/:userId", getIndividualUser);

router.delete("/deleteuser/:userId", deleteUser);

export default router;
