import React from "react";
import Features from "../../assets/feature.jpg";
import { Link } from "react-router-dom";

const WhyUs = () => {
  return (
    <>
      <div className='container'>
        <div
          style={{
            textAlign: "center",
            paddingBottom: "0.5rem",
            paddingTop: "2.5rem",
          }}
        >
          <h6
            className='te text-uppercase font-weight-bold'
            style={{ fontWeight: "700", fontSize: "1rem" }}
          >
            Our Services
          </h6>
          <h1 style={{ marginBottom: "1.5rem", fontWeight: "800" }}>
            Best Logistic Services
          </h1>
        </div>
        <div className='row' style={{ paddingBottom: "1rem" }}>
          <div
            className='col-lg-3 col-md-6'
            style={{ textAlign: "center", marginBottom: "3rem" }}
          >
            <div
              className='d-flex align-items-center justify-content-center'
              style={{
                padding: "1.5rem",
                marginBottom: "1.5rem",
                // backgroundColor: " #87CEEB",
                backgroundColor: " #2857A5",
              }}
            >
              <i
                className='fa-solid fa-plane text-dark'
                style={{ paddingRight: "1rem", color: "#fff" }}
              ></i>
              <h6
                className='font-weight-medium m-0'
                style={{ margin: "0", color: "#fff" }}
              >
                Air Freight
              </h6>
            </div>
            <p>
              Efficient and reliable transportation of goods, ensuring timely
              delivery and secure handling.
            </p>
            <Link
              className='border-bottom text-decoration-none read-more-link'
              to='/aboutUs'
              style={{ color: "#ff4800" }}
            >
              Read More
            </Link>
          </div>
          <div
            className='col-lg-3 col-md-6 '
            style={{ textAlign: "center", marginBottom: "3rem" }}
          >
            <div
              className='d-flex align-items-center justify-content-center  '
              style={{
                padding: "1.5rem",
                marginBottom: "1.5rem",
                backgroundColor: "#2857A5",
                // backgroundColor: "#00BFFF",
              }}
            >
              <i
                className='fa-solid fa-ship'
                style={{ paddingRight: "1rem" }}
              ></i>
              <h6
                className=' font-weight-medium '
                style={{ margin: "0", color: "#fff" }}
              >
                Ocean Freight
              </h6>
            </div>
            <p>
              Compliance with international trade regulations to ensure the
              legality and efficiency of shipments.
            </p>
            <Link
              className='border-bottom text-decoration-none read-more-link'
              to='/aboutUs'
              style={{ color: "#ff4800" }}
            >
              Read More
            </Link>
          </div>

          <div
            className='col-lg-3 col-md-6 '
            style={{ textAlign: "center", marginBottom: "3rem" }}
          >
            <div
              className='d-flex align-items-center justify-content-center  '
              style={{
                padding: "1.5rem",
                marginBottom: "1.5rem",
                // backgroundColor: "#008080",
                backgroundColor: "#2857A5",
              }}
            >
              <i
                className='fa-solid fa-truck text-dark'
                style={{ paddingRight: "1rem" }}
              ></i>
              <h6
                className=' font-weight-medium '
                style={{ margin: "0", color: "#fff" }}
              >
                Land Transport
              </h6>
            </div>
            <p>
              Tailored supply chain solutions designed to meet the unique needs
              of each client.
            </p>
            <Link
              className='border-bottom text-decoration-none read-more-link'
              to='/aboutUs'
              style={{ color: "#ff4800" }}
            >
              Read More
            </Link>
          </div>
          <div
            className='col-lg-3 col-md-6 '
            style={{ textAlign: "center", marginBottom: "3rem" }}
          >
            <div
              className='d-flex align-items-center justify-content-center  '
              style={{
                padding: "1.5rem",
                marginBottom: "1.5rem",
                // backgroundColor: "#C0C0C0",
                backgroundColor: "#2857A5",
              }}
            >
              <i
                className='fa-solid fa-warehouse text-dark'
                style={{ paddingRight: "1rem" }}
              ></i>
              <h6
                className=' font-weight-medium '
                style={{ margin: "0", color: "#fff" }}
              >
                Cargo Storage
              </h6>
            </div>
            <p>
              State-of-the-art warehousing facilities equipped with advanced
              technology for inventory management.
            </p>
            <Link
              className='border-bottom text-decoration-none read-more-link'
              to='/aboutUs'
              style={{ color: "#ff4800" }}
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
      <div
        className='container-fluid'
        style={{
          marginBottom: "3rem",
          marginTop: "3rem",
          backgroundColor: " #f2f2f4",
        }}
      >
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-5'>
              <img className='img-fluid w-100' src={Features} alt='' />
            </div>
            <div
              className='col-lg-7 py-lg-0'
              style={{
                paddingBottom: "3rem",
                paddingTop: "3rem",
              }}
            >
              <h6
                className=' text-uppercase font-weight-bold'
                style={{
                  color: " #ff4800",
                  fontWeight: "700",
                }}
              >
                Why Choose Us
              </h6>
              <h1 style={{ marginBottom: "1.5rem", fontWeight: "700" }}>
                Faster, Safe and Trusted Logistics Services
              </h1>
              <p style={{ marginBottom: "1.5rem" }}>
                At Yokan Trading PLC, we are committed to excellence in every
                aspect of our operations. Our team of experienced professionals
                is dedicated to providing personalized and innovative logistics
                solutions. We prioritize customer satisfaction, reliability, and
                transparency, aiming to build lasting partnerships with our
                clients.
              </p>
              <ul className='list-inline'>
                <li>
                  <h6>
                    <i
                      className='far fa-dot-circle text-primary '
                      style={{ marginRight: "1rem" }}
                    ></i>
                    Best In Industry
                  </h6>
                </li>
                <li>
                  <h6>
                    <i
                      className='far fa-dot-circle text-primary '
                      style={{ marginRight: "1rem" }}
                    ></i>
                    Emergency Services
                  </h6>
                </li>
                <li>
                  <h6>
                    <i
                      className='far fa-dot-circle text-primary '
                      style={{ marginRight: "1rem" }}
                    ></i>
                    24/7 Customer Support
                  </h6>
                </li>
              </ul>
              <Link
                to='/aboutUs'
                className='btn  mt-3 py-2 px-4'
                id='gold'
                style={{
                  paddingTop: "0.5rem",
                  paddingBottom: "0.5rem",
                  paddingRight: "1.5rem",
                  paddingLeft: "1.5rem",
                  marginTop: "1rem",
                  backgroundColor: " #ff4800",
                  fontWeight: "500",
                  color: "#fff",
                }}
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyUs;
