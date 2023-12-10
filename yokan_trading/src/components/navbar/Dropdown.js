import React, { useState } from "react";
import { MenuItemsTrack } from "./MenuItems";
import "./Dropdown.css";
import { Link } from "react-router-dom";

const Dropdown = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}
      >
        {MenuItemsTrack.map((item, index) => {
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

export default Dropdown;
