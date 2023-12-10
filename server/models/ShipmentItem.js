import mongoose from "mongoose";

const ShipmentItemSchecma = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    itemName: {
      type: String,
      required: true,
    },
    itemWeight: {
      type: Number,
      required: true,
    },
    itemType: {
      type: String,
      required: true,
    },
    originLocation: {
      type: String,
      default: "",
    },
    destinationLocation: {
      type: String,
      default: "",
    },
    Status: {
      type: String,
      default: "In Transit",
    },
  },
  { timestamps: true }
);

const ShipmentItem = mongoose.model("ShipmentItem", ShipmentItemSchecma);
export default ShipmentItem;
