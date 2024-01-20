import InActiveUser from "../models/InActiveUser.js";

export const setUserInactive = async (req, res) => {
  try {
    const { userId, firstName, lastName, email, phoneNumber, country } =
      req.body;

    const newInactiveUser = new InActiveUser({
      userId,
      firstName,
      lastName,
      email,
      phoneNumber,
      country,
    });

    const savedUser = await newInactiveUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
