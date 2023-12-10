import Location from "../models/Location.js";

export const getLocation = async (req, res) => {
  try {
    const { userId } = req.params;
    const location = await Location.find({ userId });
    if (!location)
      return res.status(400).json({ msg: "location does not exist." });

    res.status(200).json({ location });
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

// export const getLocation = async (req, res) => {
//   try {
//     const { userId } = req.body;
//     const user = await Location.findOne({ userId: userId });
//     if (!user) return res.status(400).json({ msg: "User does not exist." });

//     res.status(200).json({ user });
//   } catch (err) {
//     res.status(404).json({ message: err.message });
//   }
// };

export const createLocation = async (req, res) => {
  try {
    const { userId, country, city, state, countryCode } = req.body;

    const newLocationt = new Location({
      userId,
      country,
      city,
      state,
      countryCode,
    });

    const savedLocation = await newLocationt.save();

    res.status(201).json(savedLocation);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};
