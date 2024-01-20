import FeedUser from "../models/FeedUser.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const loginFeeder = async (req, res) => {
  try {
    const { userName, password } = req.body;
    const user = await FeedUser.findOne({ userName: userName });
    if (!user) return res.status(400).json({ msg: "User does not exist." });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid Credentials." });

    const tokenExpiration = Math.floor(Date.now() / 1000) + 60 * 60;
    // const tokenExpiration = Math.floor(Date.now() / 1000) + 3 * 60; // 3 minutes

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

export const registerFeeder = async (req, res) => {
  try {
    const { userName, firstName, lastName, email, phoneNumber, password } =
      req.body;

    const existingUser = await FeedUser.findOne({ phoneNumber });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "Phone number is already registered" });
    }

    const existingUserNameUser = await FeedUser.findOne({ userName });
    if (existingUserNameUser) {
      return res
        .status(400)
        .json({ message: "UserName is already registered" });
    }

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newFeeder = new FeedUser({
      userName,
      firstName,
      lastName,
      email,
      phoneNumber,
      password: passwordHash,
    });

    const savedUser = await newFeeder.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getFeeder = async (req, res) => {
  try {
    const user = await FeedUser.find();
    if (!user) return res.status(400).json({ msg: "User does not exist." });

    res.status(200).json({ user });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const deleteFeeder = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await FeedUser.findById(userId);

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

export const getIndividualDataFeeder = async (req, res) => {
  try {
    const user = await FeedUser.findOne({ _id: req.params.userId });

    if (!user)
      return res.status(400).json({ msg: "Staff member does not exist." });

    res.status(200).json({ user });
  } catch (e) {
    res.status(500).json({ msg: "Internal Server Error" });
    console.log(e);
  }
};
