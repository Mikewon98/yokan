import mongoose from "mongoose";

const InActiveUserSchecma = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const InActiveUser = mongoose.model("InActiveUsers", InActiveUserSchecma);
export default InActiveUser;
