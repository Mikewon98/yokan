import InactiveShipment from "../models/InActiveShipment.js";

export const setShipmentInactive = async (req, res) => {
  try {
    const {
      shipmentId,
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

    const newInactiveShipment = new InactiveShipment({
      shipmentId,
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

    const savedShipment = await newInactiveShipment.save();

    res.status(201).json(savedShipment);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};
