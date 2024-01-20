import express from "express";
import { setUserInactive } from "../controllers/inActiveUser.js";

const router = express.Router();

router.post("/setUserInactive", setUserInactive);

export default router;
