import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import AdminUser from "../models/AdminUser.js";

export const loginAdminUser = async (req, res) => {
  try {
    const { userName, password } = req.body;
    const user = await AdminUser.findOne({ userName: userName });
    if (!user) return res.status(400).json({ msg: "User does not exist." });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid Credentials." });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    delete user.password;
    res.status(200).json({ token, user });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const registerAdminUser = async (req, res) => {
  try {
    const { userName, password } = req.body;

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newAdminUser = new AdminUser({
      userName,
      password: passwordHash,
    });

    const savedUser = await newAdminUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
