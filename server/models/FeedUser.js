import mongoose from "mongoose";

const FeedUserSchema = mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const FeedUser = mongoose.model("FeedUser", FeedUserSchema);
export default FeedUser;
