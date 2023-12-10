import React, { useState } from "react";
import { MenuItemsSupport } from "./MenuItems";
import { Link } from "react-router-dom";
import "./DropDownSupport.css";

const DropDownSupport = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  return (
    <>
      <ul
        onClick={handleClick}
        className={
          click ? "dropdownsupport-menu clicked" : "dropdownsupport-menu"
        }
      >
        {MenuItemsSupport.map((item, index) => {
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

export default DropDownSupport;
