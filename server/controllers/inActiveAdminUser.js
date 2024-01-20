import InActiveAdminUser from "../models/InActiveAdminUser.js";

export const setAdminUserInactive = async (req, res) => {
  try {
    const { userId, userName, firstName, lastName, email, phoneNumber } =
      req.body;

    const newAdminUser = new InActiveAdminUser({
      userId,
      userName,
      firstName,
      lastName,
      email,
      phoneNumber,
    });

    const savedUser = await newAdminUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
