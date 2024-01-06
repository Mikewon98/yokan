import mongoose from "mongoose";

const ShipmentSchecma = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    trackingNumber: {
      type: String,
      required: true,
    },
    originCountry: {
      type: String,
      required: true,
    },
    originState: {
      type: String,
      required: true,
    },
    originCity: {
      type: String,
      required: true,
    },
    originPostalCode: {
      type: String,
      required: true,
    },
    senderFullName: {
      type: String,
      required: true,
    },
    senderAddress: {
      type: String,
      required: true,
    },
    senderAddressTwo: {
      type: String,
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
    destinationState: {
      type: String,
      required: true,
    },
    destinationCity: {
      type: String,
      required: true,
    },
    destinationPostalCode: {
      type: String,
      required: true,
    },
    reciverFullName: {
      type: String,
      required: true,
    },
    reciverAddress: {
      type: String,
      required: true,
    },
    reciverAddressTwo: {
      type: String,
    },
    reciverEmail: {
      type: String,
      required: true,
    },
    reciverPhoneNumber: {
      type: String,
      required: true,
    },
    shipmentType: {
      type: String,
      required: true,
    },
    shipmentWeight: {
      type: String,
      required: true,
    },
    shipmentLength: {
      type: String,
      required: true,
    },
    shipmentWidth: {
      type: String,
      required: true,
    },
    shipmentHeight: {
      type: String,
      required: true,
    },
    shipmentDropOffDate: {
      type: Date,
      required: true,
    },
    shipmentDescription: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      default: "pickUp",
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  { timestamps: true }
);

const Shipment = mongoose.model("Shipment", ShipmentSchecma);
export default Shipment;
