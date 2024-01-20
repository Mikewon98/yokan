import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../models/User.js";

export const login = async (req, res) => {
  try {
    const { phoneNumber, password } = req.body;
    const user = await User.findOne({ phoneNumber: phoneNumber });
    if (!user) return res.status(400).json({ msg: "User does not exist." });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid Credentials." });

    const tokenExpiration = Math.floor(Date.now() / 1000) + 60 * 60;

    const token = jwt.sign(
      { id: user._id, exp: tokenExpiration },
      process.env.JWT_SECRET
    );
    delete user.password;
    res.status(200).json({ token, user });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const register = async (req, res) => {
  try {
    const { firstName, lastName, email, phoneNumber, password, country } =
      req.body;

    const existingUser = await User.findOne({ phoneNumber });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "Phone number is already registered" });
    }

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new User({
      firstName,
      lastName,
      email,
      phoneNumber,
      password: passwordHash,
      country,
    });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await User.find();
    if (!user) return res.status(400).json({ msg: "User does not exist." });

    res.status(200).json({ user });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getIndividualUser = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.userId });

    if (!user) return res.status(400).json({ msg: "user does not exist." });

    res.status(200).json({ user });
  } catch (e) {
    res.status(500).json({ msg: "Internal Server Error" });
    console.log(e);
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ msg: "User not found." });
    }

    await user.deleteOne();
    res.status(200).json({ msg: "User deleted successfully." });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Internal server error." });
  }
};
