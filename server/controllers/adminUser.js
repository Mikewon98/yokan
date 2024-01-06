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
    const { userName, firstName, lastName, email, phoneNumber, password } =
      req.body;

    const existingUser = await AdminUser.findOne({ phoneNumber });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "Phone number is already registered" });
    }

    const existingUserNameUser = await AdminUser.findOne({ userName });
    if (existingUserNameUser) {
      return res
        .status(400)
        .json({ message: "UserName is already registered" });
    }

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newAdminUser = new AdminUser({
      userName,
      firstName,
      lastName,
      email,
      phoneNumber,
      password: passwordHash,
    });

    const savedUser = await newAdminUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getAdminUser = async (req, res) => {
  try {
    const user = await AdminUser.find();
    if (!user) return res.status(400).json({ msg: "Admin does not exist." });

    res.status(200).json({ user });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const deleteAdminUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await AdminUser.findById(userId);

    if (!user) {
      return res.status(404).json({ msg: "Admin not found." });
    }

    await user.deleteOne();
    res.status(200).json({ msg: "Admin deleted successfully." });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Internal server error." });
  }
};

export const getIndividualAdminUser = async (req, res) => {
  try {
    const user = await AdminUser.findOne({ _id: req.params.userId });

    if (!user)
      return res.status(400).json({ msg: "Staff member does not exist." });

    res.status(200).json({ user });
  } catch (e) {
    res.status(500).json({ msg: "Internal Server Error" });
    console.log(e);
  }
};
