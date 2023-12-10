import mongoose from "mongoose";

const UserSchecma = mongoose.Schema(
  {
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
    password: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("Model", UserSchecma);
export default User;
