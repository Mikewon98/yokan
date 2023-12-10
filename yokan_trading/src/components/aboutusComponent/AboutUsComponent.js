import React from "react";
import "./AboutUsComponent.css";

const AboutUsComponent = () => {
  return (
    <>
      <div className='about-us-component-misson'>
        <h1 className='about-us-component-heading'>Our Missons</h1>
        <div className='about-us-sub-component'>
          <p className='about-us-component-text'>WHY IT MATTERS</p>
          <p>
            « to help freight forwarders worldwide streamline their operations,
            scale their businesses, and thrive in technology-driven and
            integrated supply chains. »
          </p>
        </div>
      </div>
      <div className='about-us-component-vision'>
        <h1 className='about-us-component-heading'>Our Vision</h1>
        <div className='about-us-sub-component'>
          <p>
            « We are passionate about technology and believe freight forwarders
            are at the heart of making supply chains more transparent,
            efficient, and integrated. We aim to help freight forwarders
            worldwide embrace digital transformation through a modern,
            easy-to-use transportation management system with an excellent user
            experience. »
          </p>
        </div>
      </div>
      <div className='about-us-component-values-super-div'>
        <h1 className='about-us-component-heading'>Our Values</h1>
        <div className='about-us-component-values'>
          <div className='value-component-first'>
            <div className='about-us-values-list'>
              <div className='about-us-values-list-style'>
                <i className='fa-solid fa-circle'></i>
                <p> Reliability</p>
              </div>
              <div className='about-us-line'></div>
            </div>
            <div className='about-us-values-list'>
              <div className='about-us-values-list-style'>
                <i className='fa-solid fa-circle'></i>
                <p>Innovation</p>
              </div>
              <div className='about-us-line'></div>
            </div>
            <div className='about-us-values-list'>
              <div className='about-us-values-list-style'>
                <i className='fa-solid fa-circle'></i>
                <p>Adaptability</p>
              </div>
              <div className='about-us-line'></div>
            </div>
            <div className='about-us-values-list'>
              <div className='about-us-values-list-style'>
                <i className='fa-solid fa-circle'></i>
                <p>Quality</p>
              </div>
              <div className='about-us-line'></div>
            </div>
          </div>
          <div className='value-component-second'>
            <div className='about-us-values-list'>
              <div className='about-us-values-list-style'>
                <i className='fa-solid fa-circle'></i>
                <p>Data-driven</p>
              </div>
              <div className='about-us-line'></div>
            </div>
            <div className='about-us-values-list'>
              <div className='about-us-values-list-style'>
                <i className='fa-solid fa-circle'></i>
                <p>Meaning and Ownership</p>
              </div>
              <div className='about-us-line'></div>
            </div>
            <div className='about-us-values-list'>
              <div className='about-us-values-list-style'>
                <i className='fa-solid fa-circle'></i>
                <p>Kindness</p>
              </div>
              <div className='about-us-line'></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsComponent;
