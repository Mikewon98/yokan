import mongoose from "mongoose";

const AdminUserSchema = mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const AdminUser = mongoose.model("AdminUser", AdminUserSchema);
export default AdminUser;
