import mongoose from "mongoose";

const InActiveFeedUserSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    userName: {
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
  },
  { timestamps: true }
);

const InActiveFeedUser = mongoose.model(
  "InActiveFeedUsers",
  InActiveFeedUserSchema
);
export default InActiveFeedUser;
