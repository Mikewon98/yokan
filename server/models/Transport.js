import mongoose from "mongoose";

const TransportSchecma = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    transportType: {
      type: String,
      required: true,
    },
    transportName: {
      type: String,
      required: true,
    },
    capacity: {
      type: Number,
      required: true,
    },
    location: {
      type: String,
    },
  },
  { timestamps: true }
);

const Transport = mongoose.model("Transport", TransportSchecma);
export default Transport;
