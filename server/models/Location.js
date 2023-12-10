import mongoose from "mongoose";

const LocationSchecma = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    country: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    countryCode: {
      type: Number,
    },
    latitude: {
      type: String,
      default: "",
    },
    longitude: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

const Location = mongoose.model("Location", LocationSchecma);
export default Location;
