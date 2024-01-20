import InActiveFeedUser from "../models/InActiveFeedUser.js";

export const setFeedUserInactive = async (req, res) => {
  try {
    const { userId, userName, firstName, lastName, email, phoneNumber } =
      req.body;

    const newAdminUser = new InActiveFeedUser({
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
