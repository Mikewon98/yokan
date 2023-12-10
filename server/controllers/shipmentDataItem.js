import ShipmentDataItem from "../models/ShipmentDataItem.js";

export const addShipmentDataItem = async (req, res) => {
  try {
    const {
      userId,
      trackingNumber,
      packageType,
      weight,
      length,
      width,
      height,
      dropOffDate,
      discription,
    } = req.body;

    const newShipmentDataItem = new ShipmentDataItem({
      userId,
      trackingNumber,
      packageType,
      weight,
      length,
      width,
      height,
      dropOffDate,
      discription,
    });

    const savedShipmentItem = await newShipmentDataItem.save();

    res.status(201).json(savedShipmentItem);
  } catch (e) {
    console.log(e);
  }
};

export const getShipmentDataItem = async (req, res) => {
  const { trackingNumber } = req.params;
  const shipments = await ShipmentDataItem.findOne({ trackingNumber });

  if (!shipments)
    return res.status(400).json({ msg: "shipment does not exist." });

  res.status(200).json({ shipments });
  try {
  } catch (e) {
    console.log(e);
  }
};
