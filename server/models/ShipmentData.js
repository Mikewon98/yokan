import mongoose from "mongoose";

const ShipmentDataSchecma = mongoose.Schema(
  {
    trackingNumber: {
      type: String,
      required: true,
    },
    originCountry: {
      type: String,
      required: true,
    },
    originFullName: {
      type: String,
      required: true,
    },
    originAddress: {
      type: String,
      required: true,
    },
    originAddressTwo: {
      type: String,
    },
    originCity: {
      type: String,
      required: true,
    },
    originState: {
      type: String,
      required: true,
    },
    originPostalCode: {
      type: String,
      required: true,
    },
    senderEmail: {
      type: String,
      required: true,
    },
    senderPhoneNumber: {
      type: String,
      required: true,
    },
    destinationCountry: {
      type: String,
      required: true,
    },
    destinationFullName: {
      type: String,
      required: true,
    },
    destinationAddress: {
      type: String,
      required: true,
    },
    destinationAddressTwo: {
      type: String,
    },
    destinationCity: {
      type: String,
      required: true,
    },
    destinationState: {
      type: String,
      required: true,
    },
    destinationPostalCode: {
      type: String,
      required: true,
    },
    reciverEmail: {
      type: String,
      required: true,
    },
    reciverPhoneNumber: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const ShipmentData = mongoose.model("ShipmentData", ShipmentDataSchecma);
export default ShipmentData;
