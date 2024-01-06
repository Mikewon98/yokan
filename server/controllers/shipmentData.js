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
    return res.status(500).json({ msg: "Internal server error" });
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
    return res.status(500).json({ msg: "Internal server error" });
  }
};

// export const updateShipment = async (req, res) => {
//   try {
//     const { trackingNumber } = req.params;
//     const shipment = await ShipmentData.findOneAndUpdate({ trackingNumber });
//     res.json({ shipment });
//   } catch {
//     return res.status(500).json({ msg: "Internal server error" });
//   }
// };

export const updateShipment = async (req, res) => {
  try {
    const { trackingNumber } = req.params;
    const { originFullName } = req.body;

    const shipment = await ShipmentData.findOneAndUpdate(
      { trackingNumber },
      { originFullName },
      { new: true }
    );

    if (!shipment) {
      return res.status(404).json({ msg: "Shipment not found" });
    }

    res.json({ shipment });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Internal server error" });
  }
};

export const updatePutShipment = async (req, res) => {
  try {
    const { trackingNumber } = req.params;
    const shipment = await ShipmentData.replaceOne(
      { trackingNumber },
      req.body
    );
    res.json({ shipment });
  } catch {
    return res.status(500).json({ msg: "Internal server error" });
  }
};
