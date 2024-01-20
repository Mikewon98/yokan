import express from "express";
import { setFeedUserInactive } from "../controllers/inActiveFeedUser.js";

const router = express.Router();

router.post("/setFeedUserInactive", setFeedUserInactive);

export default router;
