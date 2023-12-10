import ShipmentItem from "../models/ShipmentItem.js";

export const createShipment = async (req, res) => {
  try {
    const { userId, itemName, itemWeight, itemType } = req.body;

    const newShipment = new ShipmentItem({
      userId,
      itemName,
      itemWeight,
      itemType,
    });

    const savedShipment = await newShipment.save();

    res.status(201).json(savedShipment);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

export const viewShipment = async (req, res) => {
  try {
    const { userId } = req.params;

    const shipments = await ShipmentItem.find({ userId });
    if (!shipments)
      return res.status(400).json({ msg: "shipments does not exist." });

    res.status(200).json({ shipments });
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};
