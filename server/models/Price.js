import mongoose from "mongoose";

const priceSchema = mongoose.Schema(
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

const Price = mongoose.model("Price", priceSchema);
export default Price;
