import React from "react";
import WhiteBoxCroped from "../../assets/white box croped.png";
import "./ShipItem.css";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { shipmentItemAdded } from "../../state/shipmentDataItemSlice";
import { Selectuser } from "../../state/authSlice";
import { clearShipmentData } from "../../state/shipmentDataSlice";

const ShipItem = () => {
  const minimumDate = new Date();
  minimumDate.setDate(minimumDate.getDate() + 1);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector(Selectuser);

  const authId = auth?._id || "";

  const handleValidation = yup.object().shape({
    // packageType: yup.string().required("Weight is required"),
    itemWeight: yup
      .number()
      .required("Weight is required")
      .positive("Price must be a positive number")
      .min(0.5, "Please Enter the weight above 0.5kg"),
    discription: yup
      .string()
      .max(50, "Item Description must be less than 50 characters!")
      .required("Item Description is required"),
    itemLength: yup
      .number()
      .required("Item Length is required")
      .positive("Price must be a positive number")
      .min(0, "Please enter value above 0"),
    itemWidth: yup
      .number()
      .required("Item Width is required")
      .positive("Price must be a positive number")
      .min(0, "Please Enter the value above 0"),
    itemHeight: yup
      .number()
      .required("Item Height is required")
      .positive("Price must be a positive number")
      .min(0, "Please Enter the value above 0"),
  });

  const initialValues = {
    packageType: "My Package",
    itemWeight: "",
    discription: "",
    itemLength: "",
    itemWidth: "",
    itemHeight: "",
    dropOffDate: new Date(),
  };

  const handleFormSubmit = (values, event) => {
    const errors = formik.validateForm();

    if (Object.keys(errors).length === 0) {
      const serializedDate = formik.values.dropOffDate.getTime();
      // const trackingNumber = GeneratedTrackingString;
      dispatch(
        shipmentItemAdded(
          authId,
          formik.values.packageType,
          formik.values.itemWeight,
          formik.values.discription,
          formik.values.itemLength,
          formik.values.itemWidth,
          formik.values.itemHeight,
          serializedDate
          // trackingNumber
        )
      );
      navigate("/shippayment");
    } else {
      console.log("Form has validation errors");
    }
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: handleValidation,
    onSubmit: handleFormSubmit,
  });

  const handleClickCancel = () => {
    navigate("/");
    dispatch(clearShipmentData());
  };

  const handleClickBack = () => {
    navigate("/createshipment");
    dispatch(clearShipmentData());
  };

  return (
    <div className='ship-item-div'>
      <h2>What kind of packaging are you using?</h2>
      <form className='item-div' onSubmit={formik.handleSubmit}>
        <div className='item-package-name'>
          <i className='fa-solid fa-box-open'></i>
          <h4>Package</h4>
        </div>

        <div className='item-div-content'>
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
        </div>
        <div className='item-box-container'>
          <div className='item-box-input'>
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
          </div>
          <div className='item-box-image'>
            <img src={WhiteBoxCroped} alt='White box' />
          </div>
        </div>
        <div className='item-div-simple-text'>
          <h3>Loss and Damage Protection (Declared Value)</h3>
          <p>
            We've got you covered up to 1000 birr at no charge. Is this package
            worth more than 1000 birr? Purchase additional protection against
            loss or damage by contacting our customer support group.
          </p>
        </div>

        <div className='shipment-detail-schedule'>
          <div className='shipment-detail-heading'>
            <h3 className='shipment-detail-heading-h3'>Schedule a pick up</h3>
          </div>
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
          <div className='shipment-detail-discription'>
            <div className='shipment-detail-heading-discription'>
              <h3>Add decription not less than 50 letters</h3>
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
          </div>
        </div>
        <div className='item-div-button'>
          <button className='item-div-button-back' onClick={handleClickBack}>
            Back
          </button>
          <button type='submit' className='item-div-button-continue'>
            Continue
          </button>
          <p className='cancel-item-Shipment' onClick={handleClickCancel}>
            Cancel Shipment
          </p>
        </div>
      </form>
    </div>
  );
};

export default ShipItem;
