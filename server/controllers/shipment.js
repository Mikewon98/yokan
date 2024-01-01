import Shipment from "../models/Shipment.js";

export const createShipment = async (req, res) => {
  try {
    const {
      userId,
      trackingNumber,
      originCountry,
      originState,
      originCity,
      originPostalCode,
      senderFullName,
      senderAddress,
      senderAddressTwo,
      senderEmail,
      senderPhoneNumber,
      destinationCountry,
      destinationState,
      destinationCity,
      destinationPostalCode,
      reciverFullName,
      reciverAddress,
      reciverAddressTwo,
      reciverEmail,
      reciverPhoneNumber,
      shipmentType,
      shipmentWeight,
      shipmentLength,
      shipmentWidth,
      shipmentHeight,
      shipmentDropOffDate,
      shipmentDescription,
    } = req.body;

    const newShipment = new Shipment({
      userId,
      trackingNumber,
      originCountry,
      originState,
      originCity,
      originPostalCode,
      senderFullName,
      senderAddress,
      senderAddressTwo,
      senderEmail,
      senderPhoneNumber,
      destinationCountry,
      destinationState,
      destinationCity,
      destinationPostalCode,
      reciverFullName,
      reciverAddress,
      reciverAddressTwo,
      reciverEmail,
      reciverPhoneNumber,
      shipmentType,
      shipmentWeight,
      shipmentLength,
      shipmentWidth,
      shipmentHeight,
      shipmentDropOffDate,
      shipmentDescription,
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

    const shipments = await Shipment.find({ userId });
    // if (!shipments)
    //   return res.status(400).json({ msg: "shipments does not exist." });
    if (shipments.length === 0)
      return res.status(400).json({ msg: "Shipments do not exist." });

    res.status(200).json({ shipments });
  } catch (err) {
    console.log(e);
    res.status(409).json({ message: err.message });
  }
};

export const getShipment = async (req, res) => {
  try {
    const { trackingNumber } = req.params;

    const shipments = await Shipment.findOne({ trackingNumber });

    if (!shipments)
      return res.status(400).json({ msg: "shipment does not exist." });

    res.status(200).json({ shipments });
  } catch (e) {
    res.status(500).json({ msg: "Internal Server Error" });
    console.log(e);
  }
};

export const getAllShipment = async (req, res) => {
  try {
    const shipments = await Shipment.find();

    if (!shipments || shipments.length === 0) {
      return res.status(400).json({ msg: "No Shipments Available" });
    }

    res.status(200).json({ shipments });
  } catch (e) {
    console.log(e);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};
