import React from "react";
import "./PartnerDesc.css";
import ApplyForJob from "./ApplyForJob";

const PartnerDesc = () => {
  return (
    <>
      <div>
        <div className='partner-container'>
          <div className='partner-sub-container '>
            <p className='partner-container-heading'>Why Partner with Yokan?</p>
            <p className='partner-container-text'>
              We believe in long-term partnerships that benefit both parties and
              give our clients the most outstanding experience possible. To help
              Yokan increase its footprint in international markets, we are
              always on the lookout for various channel partners, including
              consultants, resellers, industry experts, and technology partners.
              We are looking for business partners and individuals with a strong
              network in their local freight forwarding communities.
            </p>
          </div>
          <div className='partner-sub-container'>
            <p className='partner-container-heading'>
              What Makes a Good Channel Partner for Yokan?
            </p>
            <p className='partner-container-text'>
              The ideal channel partner must have an established customer base
              in their local freight forwarding community to generate leads.
              They must also be able to effectively use the marketing content
              provided by the Yokan team to attract potential customers. Lastly,
              a proven track record in marketing and delivering Software as a
              Service cloud-based solutions is ideal.
            </p>
          </div>
        </div>
        <div>
          <ApplyForJob />
        </div>
      </div>
    </>
  );
};

export default PartnerDesc;
