import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import axios from "axios";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import shipmentRoutes from "./routes/shipment.js";
import locationRoutes from "./routes/location.js";
import shipmentDataRoutes from "./routes/shipmentData.js";
import shipmentDataItemRoutes from "./routes/shipmentDataItem.js";
import adminUserRoutes from "./routes/adminUser.js";
import dataFeederRoutes from "./routes/feedUser.js";
import priceRoutes from "./routes/price.js";
import priceHistoryRoutes from "./routes/priceHistory.js";
import inActiveUserRoutes from "./routes/inActiveUser.js";
import inActiveShipmentRoutes from "./routes/inActiveShipment.js";
import inActiveAdminUserRoutes from "./routes/inActiveAdminUser.js";
import inActiveFeedUserRoutes from "./routes/inActiveFeedUser.js";

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
app.use("/price", priceRoutes);
app.use("/priceHistory", priceHistoryRoutes);
app.use("/inActiveUser", inActiveUserRoutes);
app.use("/inActiveShipment", inActiveShipmentRoutes);
app.use("/inActiveAdminUser", inActiveAdminUserRoutes);
app.use("/inActiveFeedUser", inActiveFeedUserRoutes);

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 5000;

/*Chapa Api */

app.post("/api/order", async (req, res) => {
  const { firstName, lastName, phoneNumber, email, amount } = req.body;
  try {
    const response = await axios.post(
      "https://api.chapa.co/v1/transaction/initialize",
      {
        amount: amount,
        currency: "ETB",
        email: email,
        first_name: firstName,
        last_name: lastName,
        // phone_number: "0912345678",
        phone_number: "0" + phoneNumber,
        tx_ref: "chewatatest-6669" + Date.now(),
        callback_url:
          "https://webhook.site/077164d6-29cb-40df-ba29-8a00e59a7e60",
        return_url: "http://127.0.0.1:3000/payment-success",
        "customization[title]": "Payment for my favourite merchant",
        "customization[description]": "I love online payments",
      },
      {
        headers: {
          Authorization: "Bearer CHASECK_TEST-HhAzdWYrhIoWkJw9e0Y13PtVWwKT7JBG",
          "Content-Type": "application/json",
        },
      }
    );

    console.log(response.data);
    // Handle the response or send it to the client as needed.
    res.json(response.data);
  } catch (error) {
    console.error(error);
    // Handle errors and send an appropriate response to the client.
    res.status(500).send("Internal Server Error");
  }
});

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to MongoDb.."))
  .catch((e) => console.log(`${e} Did not connect`));

app.listen(PORT, (req, res) => console.log(`Running on port ${PORT}`));
