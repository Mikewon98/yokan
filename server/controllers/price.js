import Price from "../models/Price.js";

export const setPrice = async (req, res) => {
  try {
    const { price, updatedBy } = req.body;

    const newPrice = new Price({
      price,
      updatedBy,
    });
    const savedPrice = await newPrice.save();

    res.status(201).json({ savedPrice });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ msg: "Internal server error" });
  }
};

export const getPrice = async (req, res) => {
  try {
    const prices = await Price.find();
    res.json({ prices });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ msg: "Internal server error" });
  }
};

export const updatePrice = async (req, res) => {
  try {
    const { price, updatedBy } = req.body;
    const { id } = req.params;

    const updatedPrice = await Price.findByIdAndUpdate(
      id,
      { price, updatedBy },
      { new: true }
    );

    if (!updatedPrice) {
      return res.status(404).json({ msg: "Price not found" });
    }

    res.json({ updatedPrice });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ msg: "Internal server error" });
  }
};
