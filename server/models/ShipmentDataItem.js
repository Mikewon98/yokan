import mongoose from "mongoose";

const ShipmentDataItemSchecma = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    trackingNumber: {
      type: String,
      required: true,
    },
    packageType: {
      type: String,
      required: true,
    },
    weight: {
      type: String,
      required: true,
    },
    length: {
      type: String,
      required: true,
    },
    width: {
      type: String,
      required: true,
    },
    height: {
      type: String,
      required: true,
    },
    dropOffDate: {
      type: Date,
      required: true,
    },
    discription: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const ShipmentDataItem = mongoose.model(
  "ShipmentDataItem",
  ShipmentDataItemSchecma
);

export default ShipmentDataItem;
