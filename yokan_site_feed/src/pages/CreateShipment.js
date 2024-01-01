import React, { useState, useEffect } from "react";
import "../styles/createShipment.css";
import { nanoid } from "nanoid";
import { useFormik } from "formik";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import DatePicker from "react-datepicker";
import * as yup from "yup";

const CreateShipment = () => {
  const [trackingNumber, setTrackingNumber] = useState("");

  const minimumDate = new Date();
  minimumDate.setDate(minimumDate.getDate() + 1);

  const generateRandomString = () => {
    return nanoid(10).toUpperCase();
  };

  useEffect(() => {
    const newTrackingNumber = generateRandomString();
    setTrackingNumber(newTrackingNumber);
  }, []);

  // console.log(trackingNumber);

  const validationSchema = yup.object().shape({
    originFullName: yup
      .string()
      .required("Full name or company name is required"),
    destinationFullName: yup
      .string()
      .required("Full name or company name is required"),
    originAddress: yup.string().required("Address is required"),
    originAddressTwo: yup.string(),
    destinationAddress: yup.string().required("Address is required"),
    destinationAddressTwo: yup.string(),
    originCity: yup.string().required("City is required"),
    destinationCity: yup.string().required("City is required"),
    originState: yup.string().required("State is required"),
    destinationState: yup.string().required("State is required"),
    originPostalCode: yup.string().required("Postal Code is required"),
    destinationPostalCode: yup.string().required("Postal Code is required"),
    senderEmail: yup.string().email().required("Email is required"),
    reciverEmail: yup.string().email().required("Email is required"),
    senderPhoneNumber: yup
      .string()
      .min(8)
      .max(15)
      .required("Phone number is required"),
    reciverPhoneNumber: yup
      .string()
      .min(8)
      .max(15)
      .required("Phone number is required"),
    itemWeight: yup.string().required("Weight is required"),
    discription: yup
      .string()
      .max(50, "Item Description must be less than 50 characters!")
      .required("Item Description is required"),
    itemLength: yup.string().required("Item Length is required"),
    itemWidth: yup.string().required("Item Width is required"),
    itemHeight: yup.string().required("Item Height is required"),
  });

  const initialValue = {
    originCountry: "Ethiopia",
    originFullName: "",
    destinationFullName: "",
    originAddress: "",
    originAddressTwo: "",
    destinationAddress: "",
    destinationAddressTwo: "",
    originCity: "",
    destinationCity: "",
    destinationCountry: "Ethiopia",
    originState: "",
    destinationState: "",
    originPostalCode: "",
    destinationPostalCode: "",
    senderEmail: "",
    reciverEmail: "",
    senderPhoneNumber: "",
    reciverPhoneNumber: "",
    packageType: "My Package",
    itemWeight: "",
    discription: "",
    itemLength: "",
    itemWidth: "",
    itemHeight: "",
    dropOffDate: new Date(),
  };

  const handleFormSubmit = () => {
    const errors = formik.validateForm();

    console.log(formik.errors);
  };

  const cancelWhereShipment = () => {
    console.log("cancel");
  };

  const formik = useFormik({
    initialValues: initialValue,
    validationSchema: validationSchema,
    onSubmit: handleFormSubmit,
  });

  return (
    <div className='createShipment'>
      <form
        className='super-form-div'
        onSubmit={formik.handleSubmit}
        autoComplete='off'
      >
        <div className='form-div-sender'>
          <h2>Hello, Where are you shipping from?</h2>
          <label className='input-label'>
            Country*
            <select
              name='originCountry'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.originCountry}
              className={
                formik.touched.originCountry && formik.errors.originCountry
                  ? "input-error"
                  : ""
              }
            >
              <option value='ethiopia'>Ethiopia</option>
              <option value='dubai'>Dubai</option>
              <option value='china'>China</option>
              <option value='us'>United States of America</option>
            </select>
            {formik.touched.originCountry && formik.errors.originCountry ? (
              <p className='error-text'>{formik.errors.originCountry}</p>
            ) : null}
          </label>
          <label className='input-label'>
            Full Name or Company name*
            <input
              type='text'
              name='originFullName'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.originFullName}
              className={
                formik.touched.originFullName && formik.errors.originFullName
                  ? "input-error"
                  : ""
              }
            />
            {formik.touched.originFullName && formik.errors.originFullName ? (
              <p className='error-text'>{formik.errors.originFullName}</p>
            ) : null}
          </label>
          <label className='input-label'>
            Address line 1*
            <input
              type='text'
              name='originAddress'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.originAddress}
              className={
                formik.touched.originAddress && formik.errors.originAddress
                  ? "input-error"
                  : ""
              }
            />
            {formik.touched.originAddress && formik.errors.originAddress ? (
              <p className='error-text'>{formik.errors.originAddress}</p>
            ) : null}
          </label>
          <label className='input-label'>
            Address line 2
            <input
              type='text'
              name='originAddressTwo'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.originAddressTwo}
              className={
                formik.touched.originAddressTwo &&
                formik.errors.originAddressTwo
                  ? "input-error"
                  : ""
              }
            />
            {formik.touched.originAddressTwo &&
            formik.errors.originAddressTwo ? (
              <p className='error-text'>{formik.errors.originAddressTwo}</p>
            ) : null}
          </label>
          <div className='flex-inputs'>
            <label className='input-label'>
              City*
              <input
                type='text'
                name='originCity'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.originCity}
                className={
                  formik.touched.originCity && formik.errors.originCity
                    ? "input-error"
                    : ""
                }
              />
              {formik.touched.originCity && formik.errors.originCity ? (
                <p className='error-text'>{formik.errors.originCity}</p>
              ) : null}
            </label>
            <label className='input-label'>
              State*
              <input
                type='text'
                name='originState'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.originState}
                className={
                  formik.touched.originState && formik.errors.originState
                    ? "input-error"
                    : ""
                }
              />
              {formik.touched.originState && formik.errors.originState ? (
                <p className='error-text'>{formik.errors.originState}</p>
              ) : null}
            </label>
            <label className='input-label'>
              Postal Code*
              <input
                type='text'
                name='originPostalCode'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.originPostalCode}
                className={
                  formik.touched.originPostalCode &&
                  formik.errors.originPostalCode
                    ? "input-error"
                    : ""
                }
              />
              {formik.touched.originPostalCode &&
              formik.errors.originPostalCode ? (
                <p className='error-text'>{formik.errors.originPostalCode}</p>
              ) : null}
            </label>
          </div>
          <div className='phone-email-input'>
            <label className='input-label'>
              Email*
              <input
                type='text'
                name='senderEmail'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.senderEmail}
                className={
                  formik.touched.senderEmail && formik.errors.senderEmail
                    ? "input-error"
                    : ""
                }
              />
              {formik.touched.senderEmail && formik.errors.senderEmail ? (
                <p className='error-text'>{formik.errors.senderEmail}</p>
              ) : null}
            </label>
            <label className='input-label'>
              Phone Number*
              <PhoneInput
                name='senderPhoneNumber'
                onChange={(e) => formik.setFieldValue("senderPhoneNumber", e)}
                onBlur={formik.handleBlur("senderPhoneNumber")}
                country={"et"}
                className={
                  formik.touched.senderPhoneNumber &&
                  formik.errors.senderPhoneNumber
                    ? "input-error"
                    : ""
                }
              />
              {formik.touched.senderPhoneNumber &&
              formik.errors.senderPhoneNumber ? (
                <p className='error-text'>{formik.errors.senderPhoneNumber}</p>
              ) : null}
            </label>
          </div>
        </div>
        <div className='form-div-reciver'>
          <h2> Where is your shipping going?</h2>
          <label className='input-label'>
            Country*
            <select
              name='destinationCountry'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.destinationCountry}
              className={
                formik.touched.destinationCountry &&
                formik.errors.destinationCountry
                  ? "input-error"
                  : ""
              }
            >
              <option value='ethiopia'>Ethiopia</option>
              <option value='dubai'>Dubai</option>
              <option value='china'>China</option>
              <option value='us'>United States of America</option>
            </select>
            {formik.touched.destinationCountry &&
            formik.errors.destinationCountry ? (
              <p className='error-text'>{formik.errors.destinationCountry}</p>
            ) : null}
          </label>
          <label className='input-label'>
            Full Name or Company name*
            <input
              type='text'
              name='destinationFullName'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.destinationFullName}
              className={
                formik.touched.destinationFullName &&
                formik.errors.destinationFullName
                  ? "input-error"
                  : ""
              }
            />
            {formik.touched.destinationFullName &&
            formik.errors.destinationFullName ? (
              <p className='error-text'>{formik.errors.destinationFullName}</p>
            ) : null}
          </label>
          <label className='input-label'>
            Address line 1*
            <input
              type='text'
              name='destinationAddress'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.destinationAddress}
              className={
                formik.touched.destinationAddress &&
                formik.errors.destinationAddress
                  ? "input-error"
                  : ""
              }
            />
            {formik.touched.destinationAddress &&
            formik.errors.destinationAddress ? (
              <p className='error-text'>{formik.errors.destinationAddress}</p>
            ) : null}
          </label>
          <label className='input-label'>
            Address line 2
            <input
              type='text'
              name='destinationAddressTwo'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.destinationAddressTwo}
              className={
                formik.touched.destinationAddressTwo &&
                formik.errors.destinationAddressTwo
                  ? "input-error"
                  : ""
              }
            />
            {formik.touched.destinationAddressTwo &&
            formik.errors.destinationAddressTwo ? (
              <p className='error-text'>
                {formik.errors.destinationAddressTwo}
              </p>
            ) : null}
          </label>
          <div className='flex-inputs'>
            <label className='input-label'>
              City*
              <input
                type='text'
                name='destinationCity'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.destinationCity}
                className={
                  formik.touched.destinationCity &&
                  formik.errors.destinationCity
                    ? "input-error"
                    : ""
                }
              />
              {formik.touched.destinationCity &&
              formik.errors.destinationCity ? (
                <p className='error-text'>{formik.errors.destinationCity}</p>
              ) : null}
            </label>
            <label className='input-label'>
              State*
              <input
                type='text'
                name='destinationState'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.destinationState}
                className={
                  formik.touched.destinationState &&
                  formik.errors.destinationState
                    ? "input-error"
                    : ""
                }
              />
              {formik.touched.destinationState &&
              formik.errors.destinationState ? (
                <p className='error-text'>{formik.errors.destinationState}</p>
              ) : null}
            </label>
            <label className='input-label'>
              Postal Code*
              <input
                type='text'
                name='destinationPostalCode'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.destinationPostalCode}
                className={
                  formik.touched.destinationPostalCode &&
                  formik.errors.destinationPostalCode
                    ? "input-error"
                    : ""
                }
              />
              {formik.touched.destinationPostalCode &&
              formik.errors.destinationPostalCode ? (
                <p className='error-text'>
                  {formik.errors.destinationPostalCode}
                </p>
              ) : null}
            </label>
          </div>
          <div className='phone-email-input'>
            <label className='input-label'>
              Email*
              <input
                type='text'
                name='reciverEmail'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.reciverEmail}
                className={
                  formik.touched.reciverEmail && formik.errors.reciverEmail
                    ? "input-error"
                    : ""
                }
              />
              {formik.touched.reciverEmail && formik.errors.reciverEmail ? (
                <p className='error-text'>{formik.errors.reciverEmail}</p>
              ) : null}
            </label>
            <label className='input-label'>
              Phone Number*
              <PhoneInput
                name='reciverPhoneNumber'
                onChange={(e) => formik.setFieldValue("reciverPhoneNumber", e)}
                onBlur={formik.handleBlur("reciverPhoneNumber")}
                country={"et"}
                className={
                  formik.touched.reciverPhoneNumber &&
                  formik.errors.reciverPhoneNumber
                    ? "input-error"
                    : ""
                }
              />
              {formik.touched.reciverPhoneNumber &&
              formik.errors.reciverPhoneNumber ? (
                <p className='error-text'>{formik.errors.reciverPhoneNumber}</p>
              ) : null}
            </label>
          </div>
          <label className='input-label'>
            Package Type*
            <select
              name='packageType'
              value={formik.values.packageType}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.touched.packageType && formik.errors.packageType
                  ? "input-error"
                  : ""
              }
            >
              <option value='myPackage'>My Package</option>
              <option value='gift'>Gift</option>
              <option value='sample'>Sample</option>
            </select>
            {formik.touched.packageType && formik.errors.packageType ? (
              <p className='error-text'>{formik.errors.packageType}</p>
            ) : null}
          </label>
          <div className='item-div-input-row'>
            <label className='input-label'>
              Weight*
              <input
                name='itemWeight'
                type='number'
                value={formik.values.itemWeight}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={
                  formik.touched.itemWeight && formik.errors.itemWeight
                    ? "input-error"
                    : ""
                }
              />
              {formik.touched.itemWeight && formik.errors.itemWeight ? (
                <p className='error-text'>{formik.errors.itemWeight}</p>
              ) : null}
            </label>
            <p>Kg</p>
          </div>
          <label className='input-label'>
            Length*
            <input
              type='number'
              name='itemLength'
              value={formik.values.itemLength}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.touched.itemLength && formik.errors.itemLength
                  ? "input-error"
                  : ""
              }
            />
            {formik.touched.itemLength && formik.errors.itemLength ? (
              <p className='error-text'>{formik.errors.itemLength}</p>
            ) : null}
          </label>
          <label className='input-label'>
            Width*
            <input
              type='number'
              name='itemWidth'
              value={formik.values.itemWidth}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.touched.itemWidth && formik.errors.itemWidth
                  ? "input-error"
                  : ""
              }
            />
            {formik.touched.itemWidth && formik.errors.itemWidth ? (
              <p className='error-text'>{formik.errors.itemWidth}</p>
            ) : null}
          </label>
          <label className='input-label'>
            Height*
            <input
              type='number'
              name='itemHeight'
              value={formik.values.itemHeight}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.touched.itemHeight && formik.errors.itemHeight
                  ? "input-error"
                  : ""
              }
            />
            {formik.touched.itemHeight && formik.errors.itemHeight ? (
              <p className='error-text'>{formik.errors.itemHeight}</p>
            ) : null}
          </label>
          <div className='shipment-detail-date'>
            <p>Enter Shipment Dropoff Date</p>
            <div className='shipment-detail-date-picker'>
              <DatePicker
                className='shipment-detail-datepicker'
                selected={formik.values.dropOffDate}
                onChange={(date) => formik.setFieldValue("dropOffDate", date)}
                minDate={minimumDate}
              />
              <i className='fa-regular fa-calendar-days'></i>
            </div>
          </div>
          <label className='input-label'>
            Item discription
            <input
              type='text'
              name='discription'
              value={formik.values.discription}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.touched.discription && formik.errors.discription
                  ? "input-error"
                  : ""
              }
            />
            {formik.touched.discription && formik.errors.discription ? (
              <p className='error-text'>{formik.errors.discription}</p>
            ) : null}
          </label>
          <div className='price-display'>
            <h3>Amount</h3>
            <div className='price-display-div'>
              <p>553</p>
              <h4>Birr</h4>
            </div>
          </div>
        </div>
        <div className='form-buttons'>
          <button type='submit' className='continue-shipment'>
            Continue
          </button>
          <p className='cancel-Shipment' onClick={cancelWhereShipment}>
            Cancel Shipment
          </p>
        </div>
      </form>
    </div>
  );
};

export default CreateShipment;
