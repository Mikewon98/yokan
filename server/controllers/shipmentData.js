import ShipmentData from "../models/ShipmentData.js";

export const addShipmentData = async (req, res) => {
  try {
    const {
      userId,
      originCountry,
      originFullName,
      originAddress,
      originAddressTwo,
      originCity,
      originState,
      originPostalCode,
      senderEmail,
      senderPhoneNumber,
      destinationCountry,
      destinationFullName,
      destinationAddress,
      destinationAddressTwo,
      destinationCity,
      destinationState,
      destinationPostalCode,
      reciverEmail,
      reciverPhoneNumber,
      trackingNumber,
    } = req.body;

    const newShipmentData = new ShipmentData({
      userId,
      originCountry,
      originFullName,
      originAddress,
      originAddressTwo,
      originCity,
      originState,
      originPostalCode,
      senderEmail,
      senderPhoneNumber,
      destinationCountry,
      destinationFullName,
      destinationAddress,
      destinationAddressTwo,
      destinationCity,
      destinationState,
      destinationPostalCode,
      reciverEmail,
      reciverPhoneNumber,
      trackingNumber,
    });

    const savedShipment = await newShipmentData.save();

    res.status(201).json(savedShipment);
  } catch (e) {
    console.log(e);
  }
};

export const getShipmentData = async (req, res) => {
  try {
    const { trackingNumber } = req.params;

    const shipments = await ShipmentData.findOne({ trackingNumber });

    if (!shipments)
      return res.status(400).json({ msg: "shipment does not exist." });

    res.status(200).json({ shipments });
  } catch (e) {
    console.log(e);
  }
};
