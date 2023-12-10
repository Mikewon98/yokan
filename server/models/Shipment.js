import mongoose from "mongoose";

const ShipmentSchecma = mongoose.Schema(
  {
    itemId: {
      type: Array,
      default: [],
    },
    originLocation: {
      type: String,
      required: true,
    },
    destinationLocation: {
      type: String,
      required: true,
    },
    vechileId: {
      type: String,
      required: true,
    },
    status: {
      type: String,
    },
  },
  { timestamps: true }
);

const Shipment = mongoose.model("Shipment", ShipmentSchecma);
export default Shipment;
