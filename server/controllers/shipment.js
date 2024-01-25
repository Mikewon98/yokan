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
      price,
      pickUpUpdatedBy,
      pickUpLastUpdate,
      documentProcessingUpdatedBy,
      documentProcessingLastUpdate,
      shipmentProcessingUpdatedBy,
      shipmentProcessingLastUpdate,
      intransitUpdatedBy,
      intransitLastUpdate,
      localDeliveryUpdatedBy,
      localDeliveryLastUpdate,
      deliveryUpdatedBy,
      deliveryLastUpdate,
      finishedUpdatedBy,
      finishedLastUpdate,
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
      price,
      pickUpUpdatedBy,
      pickUpLastUpdate,
      documentProcessingUpdatedBy,
      documentProcessingLastUpdate,
      shipmentProcessingUpdatedBy,
      shipmentProcessingLastUpdate,
      intransitUpdatedBy,
      intransitLastUpdate,
      localDeliveryUpdatedBy,
      localDeliveryLastUpdate,
      deliveryUpdatedBy,
      deliveryLastUpdate,
      finishedUpdatedBy,
      finishedLastUpdate,
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
    console.log(err);
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

export const getShipmentById = async (req, res) => {
  try {
    const shipments = await Shipment.findOne({ _id: req.params.shipmentId });

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

export const updateShipment = async (req, res) => {
  try {
    const { trackingNumber } = req.params;
    const {
      status,
      pickUpUpdatedBy,
      pickUpLastUpdate,
      documentProcessingUpdatedBy,
      documentProcessingLastUpdate,
      shipmentProcessingUpdatedBy,
      shipmentProcessingLastUpdate,
      intransitUpdatedBy,
      intransitLastUpdate,
      localDeliveryUpdatedBy,
      localDeliveryLastUpdate,
      deliveryUpdatedBy,
      deliveryLastUpdate,
      finishedUpdatedBy,
      finishedLastUpdate,
    } = req.body;

    console.log(status);

    if (status == "pickUp") {
      const shipment = await Shipment.findOneAndUpdate(
        { trackingNumber },
        {
          $set: {
            status,
            pickUpUpdatedBy,
            pickUpLastUpdate,
          },
        },
        { new: true }
      );

      if (!shipment) {
        return res.status(404).json({ msg: "Shipment not found" });
      }

      res.json({ shipment });
    } else if (status == "Document Processing") {
      const shipment = await Shipment.findOneAndUpdate(
        { trackingNumber },
        {
          $set: {
            status,
            documentProcessingUpdatedBy,
            documentProcessingLastUpdate,
          },
        },
        { new: true }
      );

      if (!shipment) {
        return res.status(404).json({ msg: "Shipment not found" });
      }

      res.json({ shipment });
    } else if (status == "Shipment Processing") {
      const shipment = await Shipment.findOneAndUpdate(
        { trackingNumber },
        {
          $set: {
            status,
            shipmentProcessingUpdatedBy,
            shipmentProcessingLastUpdate,
          },
        },
        { new: true }
      );

      if (!shipment) {
        return res.status(404).json({ msg: "Shipment not found" });
      }

      res.json({ shipment });
    } else if (status == "InTransit") {
      const shipment = await Shipment.findOneAndUpdate(
        { trackingNumber },
        {
          $set: {
            status,
            intransitUpdatedBy,
            intransitLastUpdate,
          },
        },
        { new: true }
      );

      if (!shipment) {
        return res.status(404).json({ msg: "Shipment not found" });
      }

      res.json({ shipment });
    } else if (status == "Local Delivery") {
      const shipment = await Shipment.findOneAndUpdate(
        { trackingNumber },
        {
          $set: {
            status,
            localDeliveryUpdatedBy,
            localDeliveryLastUpdate,
          },
        },
        { new: true }
      );

      if (!shipment) {
        return res.status(404).json({ msg: "Shipment not found" });
      }

      res.json({ shipment });
    } else if (status == "Delivered") {
      const shipment = await Shipment.findOneAndUpdate(
        { trackingNumber },
        {
          $set: {
            status,
            deliveryUpdatedBy,
            deliveryLastUpdate,
          },
        },
        { new: true }
      );

      if (!shipment) {
        return res.status(404).json({ msg: "Shipment not found" });
      }

      res.json({ shipment });
    } else if (status == "Finished") {
      const shipment = await Shipment.findOneAndUpdate(
        { trackingNumber },
        {
          $set: {
            status,
            finishedUpdatedBy,
            finishedLastUpdate,
          },
        },
        { new: true }
      );

      if (!shipment) {
        return res.status(404).json({ msg: "Shipment not found" });
      }

      res.json({ shipment });
    } else {
      return res.status(404).json({ msg: "Shipment not found" });
    }

    // const shipment = await Shipment.findOneAndUpdate(
    //   { trackingNumber },
    //   { status },
    //   { new: true }
    // );

    // if (!shipment) {
    //   return res.status(404).json({ msg: "Shipment not found" });
    // }

    // res.json({ shipment });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Internal server error" });
  }
};

export const deleteShipment = async (req, res) => {
  try {
    const { shipmentId } = req.params;
    const shipment = await Shipment.findById(shipmentId);

    if (!shipment) {
      return res.status(404).json({ msg: "shipment not found." });
    }

    await shipment.deleteOne();
    res.status(200).json({ msg: "shipment deleted successfully." });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Internal server error." });
  }
};
