import PriceHistory from "../models/PriceHistory.js";

export const createPriceHistory = async (req, res) => {
  try {
    const { price, updatedBy } = req.body;

    const newPriceHistory = new PriceHistory({
      price,
      updatedBy,
    });
    const savedPriceHistory = await newPriceHistory.save();

    res.status(201).json({ savedPriceHistory });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ msg: "Internal server error" });
  }
};
