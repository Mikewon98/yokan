import mongoose from "mongoose";

const priceHistoryScehma = mongoose.Schema(
  {
    price: {
      type: String,
      required: true,
    },
    updatedBy: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const PriceHistory = mongoose.model("PriceHistory", priceHistoryScehma);

export default PriceHistory;
