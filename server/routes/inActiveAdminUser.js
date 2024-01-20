import express from "express";

import { setAdminUserInactive } from "../controllers/inActiveAdminUser.js";

const router = express.Router();

router.post("/setAdminUserInactive", setAdminUserInactive);

export default router;
