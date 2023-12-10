import React, { useState } from "react";
import { MenuItemsCompany } from "./MenuItems";
import { Link } from "react-router-dom";
import "./DropDownCompany.css";

const DropDownCompany = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  return (
    <>
      <ul
        onClick={handleClick}
        className={
          click ? "dropdowncompany-menu clicked" : "dropdowncompany-menu"
        }
      >
        {MenuItemsCompany.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <li>
                <Link
                  className={item.cName}
                  to={item.path}
                  onClick={() => setClick(false)}
                >
                  {item.title}
                </Link>
              </li>
              <hr />
            </React.Fragment>
          );
        })}
      </ul>
    </>
  );
};

export default DropDownCompany;
