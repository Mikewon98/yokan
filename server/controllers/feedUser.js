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

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    delete user.password;
    res.status(200).json({ token, user });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const registerFeeder = async (req, res) => {
  try {
    const { userName, password } = req.body;

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newFeeder = new FeedUser({
      userName,
      password: passwordHash,
    });

    const savedUser = await newFeeder.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
