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
    pickUpUpdatedBy: {
      type: String,
      required: false,
      default: "",
    },
    pickUpLastUpdate: {
      type: Date,
      required: false,
      default: null,
    },
    documentProcessingUpdatedBy: {
      type: String,
      required: false,
      default: "",
    },
    documentProcessingLastUpdate: {
      type: Date,
      required: false,
      default: null,
    },
    shipmentProcessingUpdatedBy: {
      type: String,
      required: false,
      default: "",
    },
    shipmentProcessingLastUpdate: {
      type: Date,
      required: false,
      default: null,
    },
    intransitUpdatedBy: {
      type: String,
      required: false,
      default: "",
    },
    intransitLastUpdate: {
      type: Date,
      required: false,
      default: null,
    },
    localDeliveryUpdatedBy: {
      type: String,
      required: false,
      default: "",
    },
    localDeliveryLastUpdate: {
      type: Date,
      required: false,
      default: null,
    },
    deliveryUpdatedBy: {
      type: String,
      required: false,
      default: "",
    },
    deliveryLastUpdate: {
      type: Date,
      required: false,
      default: null,
    },
    finishedUpdatedBy: {
      type: String,
      required: false,
      default: "",
    },
    finishedLastUpdate: {
      type: Date,
      required: false,
      default: null,
    },
    isShipmentActive: {
      type: String,
      required: true,
      default: "Active",
    },
  },
  { timestamps: true }
);

const Shipment = mongoose.model("Shipment", ShipmentSchecma);
export default Shipment;
