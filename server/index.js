import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import shipmentRoutes from "./routes/shipment.js";
import locationRoutes from "./routes/location.js";
import shipmentDataRoutes from "./routes/shipmentData.js";
import shipmentDataItemRoutes from "./routes/shipmentDataItem.js";
import adminUserRoutes from "./routes/adminUser.js";
import dataFeederRoutes from "./routes/feedUser.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

/* ROUTES */

app.use("/auth", authRoutes);
app.use("/admin", adminUserRoutes);
app.use("/dataFeeder", dataFeederRoutes);
app.use("/location", locationRoutes);
app.use("/shipment", shipmentRoutes);
app.use("/shipmentData", shipmentDataRoutes);
app.use("/shipmentDataItem", shipmentDataItemRoutes);

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to MongoDb.."))
  .catch((e) => console.log(`${e} Did not connect`));

app.listen(PORT, (req, res) => console.log(`Running on port ${PORT}`));
