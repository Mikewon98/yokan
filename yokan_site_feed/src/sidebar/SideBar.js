import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
// import navLinks from "../assets/linkData/navLinks";
import logo from "../assets/images/yokan-1.png";
import logo2 from "../assets/images/Yokan.png";
import logo3 from "../assets/images/Yokan-Crop.png";
import { useSelector, useDispatch } from "react-redux";
import { logoutFeeder } from "../state/feedAuthSlice";
import { logoutAdmin, SelectAdmin } from "../state/adminAuthSlice";
import "./sidebar.css";

const SideBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAdminOnline = useSelector(SelectAdmin);

  const handleLogout = () => {
    dispatch(logoutFeeder());
    dispatch(logoutAdmin());
    navigate("/");
  };

  const MenuStaff = () => {
    return (
      <div className='menu'>
        <ul className='nav__list'>
          <li className='nav__item'>
            <NavLink
              to='/dashboard'
              className={(navClass) =>
                navClass.isActive ? "nav__active nav__link" : "nav__link"
              }
            >
              <i className='fa-solid fa-border-all'></i>
              Dashboard
            </NavLink>
          </li>
          <li className='nav__item'>
            <NavLink
              to='/allShipment'
              className={(navClass) =>
                navClass.isActive ? "nav__active nav__link" : "nav__link"
              }
            >
              <i className='fa-solid fa-ship'></i>
              View All Shipment
            </NavLink>
          </li>

          {/* -------------Completed and active--------------- */}

          <li className='nav__item'>
            <NavLink
              to='/activeShipment'
              className={(navClass) =>
                navClass.isActive ? "nav__active nav__link" : "nav__link"
              }
            >
              <i className='fa-solid fa-clipboard-list'></i>
              Active Shipment
            </NavLink>
          </li>
          <li className='nav__item'>
            <NavLink
              to='/completedShipment'
              className={(navClass) =>
                navClass.isActive ? "nav__active nav__link" : "nav__link"
              }
            >
              <i className='fa-solid fa-check'></i>
              Completed Shipment
            </NavLink>
          </li>

          {/* -------------Completed and active--------------- */}

          <li className='nav__item'>
            <NavLink
              to='/viewUsers'
              className={(navClass) =>
                navClass.isActive ? "nav__active nav__link" : "nav__link"
              }
            >
              <i className='fa-solid fa-user'></i>
              View All Users
            </NavLink>
          </li>
          <li className='nav__item'>
            <NavLink
              to='/createShipment'
              className={(navClass) =>
                navClass.isActive ? "nav__active nav__link" : "nav__link"
              }
            >
              <i className='fa-regular fa-square-plus'></i>
              Create Shipment
            </NavLink>
          </li>
          <li className='nav__item'>
            <NavLink
              to='/updateStatus'
              className={(navClass) =>
                navClass.isActive ? "nav__active nav__link" : "nav__link"
              }
            >
              <i className='fa-solid fa-pen-to-square'></i>
              Update Shipment Status
            </NavLink>
          </li>
          <li className='nav__item'>
            <NavLink
              to='/addUser'
              className={(navClass) =>
                navClass.isActive ? "nav__active nav__link" : "nav__link"
              }
            >
              <i className='fa-solid fa-user-plus'></i>
              Add User
            </NavLink>
          </li>
        </ul>
      </div>
    );
  };

  const MenuAdmin = () => {
    return (
      <div className='menu'>
        <ul className='nav__list'>
          <li className='nav__item'>
            <NavLink
              to='/dashboard'
              className={(navClass) =>
                navClass.isActive ? "nav__active nav__link" : "nav__link"
              }
            >
              <i className='fa-solid fa-border-all'></i>
              Dashboard
            </NavLink>
          </li>
          <li className='nav__item'>
            <NavLink
              to='/allShipment'
              className={(navClass) =>
                navClass.isActive ? "nav__active nav__link" : "nav__link"
              }
            >
              <i className='fa-solid fa-ship'></i>
              View All Shipment
            </NavLink>
          </li>
          {/* -------------Completed and active--------------- */}

          <li className='nav__item'>
            <NavLink
              to='/activeShipment'
              className={(navClass) =>
                navClass.isActive ? "nav__active nav__link" : "nav__link"
              }
            >
              <i className='fa-solid fa-clipboard-list'></i>
              Active Shipment
            </NavLink>
          </li>
          <li className='nav__item'>
            <NavLink
              to='/completedShipment'
              className={(navClass) =>
                navClass.isActive ? "nav__active nav__link" : "nav__link"
              }
            >
              <i className='fa-solid fa-check'></i>
              Completed Shipment
            </NavLink>
          </li>

          {/* -------------Completed and active--------------- */}
          <li className='nav__item'>
            <NavLink
              to='/viewUsers'
              className={(navClass) =>
                navClass.isActive ? "nav__active nav__link" : "nav__link"
              }
            >
              <i className='fa-solid fa-user'></i>
              View All Users
            </NavLink>
          </li>
          <li className='nav__item'>
            <NavLink
              to='/createShipment'
              className={(navClass) =>
                navClass.isActive ? "nav__active nav__link" : "nav__link"
              }
            >
              <i className='fa-regular fa-square-plus'></i>
              Create Shipment
            </NavLink>
          </li>
          <li className='nav__item'>
            <NavLink
              to='/updateStatus'
              className={(navClass) =>
                navClass.isActive ? "nav__active nav__link" : "nav__link"
              }
            >
              <i className='fa-solid fa-pen-to-square'></i>
              Update Shipment Status
            </NavLink>
          </li>
          <li className='nav__item'>
            <NavLink
              to='/addUser'
              className={(navClass) =>
                navClass.isActive ? "nav__active nav__link" : "nav__link"
              }
            >
              <i className='fa-solid fa-user-plus'></i>
              Add User
            </NavLink>
          </li>

          <li className='nav__item'>
            <NavLink
              to='/addFeeder'
              className={(navClass) =>
                navClass.isActive ? "nav__active nav__link" : "nav__link"
              }
            >
              <i className='fa-solid fa-person-circle-plus'></i>
              Add staff
            </NavLink>
          </li>

          <li className='nav__item'>
            <NavLink
              to='/addAdmin'
              className={(navClass) =>
                navClass.isActive ? "nav__active nav__link" : "nav__link"
              }
            >
              <i className='fa-solid fa-user-tie'></i>
              Add Admin
            </NavLink>
          </li>

          <li className='nav__item'>
            <NavLink
              to='/settings'
              className={(navClass) =>
                navClass.isActive ? "nav__active nav__link" : "nav__link"
              }
            >
              <i className='fa-solid fa-screwdriver-wrench'></i>
              Settings
            </NavLink>
          </li>
        </ul>
      </div>
    );
  };

  return (
    <div className='sidebar'>
      <div className='sidebar__top'>
        {/* <h2 className='sidebar__top__heading'>
          <div className='sidebar__top__logo__div'>
            <img className='sidebar__top__logo' src={logo3} alt='Logo' />
          </div>
          Yokan
        </h2> */}

        <h2 className='sidebar__top__heading'>
          <div className='sidebar__top__logo__div'>
            <img className='sidebar__top__logo' src={logo3} alt='Logo' />
          </div>
          Yokan
        </h2>
      </div>
      <div className='sidebar__content'>
        {isAdminOnline ? <MenuAdmin /> : <MenuStaff />}
        <div className='sidebar__bottom'>
          <span onClick={handleLogout}>
            <i className='fa-solid fa-arrow-right-from-bracket'></i> Logout
          </span>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
