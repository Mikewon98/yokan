import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Selectuser } from "../../state/authSlice";
import { useDispatch } from "react-redux";
import { setLogout } from "../../state/authSlice";
import { clearShipmentData } from "../../state/shipmentDataSlice";
import { clearShipmentItemAdded } from "../../state/shipmentDataItemSlice";
// import logo from "../../assets/yokan-logo.png";
import logo3 from "../../assets/new yokan logo.png";
import logo4 from "../../assets/Yokan.png";
import logo from "../../assets/Yokan-Trading-P.L.C.jpeg";
import logo5 from "../../assets/YYYokan.png";
import logo6 from "../../assets/yokan-1.png";
import logo7 from "../../assets/photo1705395243.jpeg";
import logo8 from "../../assets/Yokan-Crop.png";
import "./Navbar.css";

const NavBar = () => {
  const auth = useSelector(Selectuser);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(setLogout());
    dispatch(clearShipmentData());
    dispatch(clearShipmentItemAdded());
    navigate("/");
    alert("Logout Successfull");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className='fixed-navbar-container'>
      <div className='extension-navbar'>
        <p>yokanlogistics@gmail.com</p>
        <p>+251923974353</p>
      </div>
      <Navbar
        collapseOnSelect
        sticky='top'
        expand='lg'
        className='bg-light-blue  justify-content-between'
        style={{
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
        }}
      >
        <Container>
          <Navbar.Brand as={Link} to='/'>
            <Container>
              {/* <img src={logo} alt='Yokan logo' /> */}
              {/* <img src={logo3} alt='Yokan logo' /> */}
              {/* <img src={logo4} alt='Yokan logo' /> */}
              {/* <img src={logo5} alt='Yokan logo' /> */}
              {/* <img src={logo6} alt='Yokan logo' /> */}
              {/* <img src={logo7} alt='Yokan logo' /> */}
              <img src={logo8} alt='Yokan logo' />
            </Container>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
        </Container>
        <Navbar.Collapse id='basic-navbar-nav '>
          <Nav className='ml-auto'>
            <Nav.Link as={Link} to='/'>
              Home
            </Nav.Link>
            <NavDropdown title='Services' id='basic-nav-dropdown'>
              <NavDropdown.Item as={Link} to='/createshipment'>
                Create shipment
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/trackShipment'>
                Track shipment
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/shipmentHistory'>
                Shipment history
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/trackByMobile'>
                Track by mobile
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title='Support' id='basic-nav-dropdown'>
              <NavDropdown.Item as={Link} to='/customerSuport'>
                Customer Support
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title='Profile' id='basic-nav-dropdown'>
              <NavDropdown.Item as={Link} to='/aboutUs'>
                About Us
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/partner'>
                Partners
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/contactus'>
                Contact Us
              </NavDropdown.Item>
              {/* <NavDropdown.Item as={Link} to='/logout'>
                Log out
              </NavDropdown.Item> */}
            </NavDropdown>
          </Nav>
          {auth ? (
            <button className='navbar-button' onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <button className='navbar-button' onClick={handleLogin}>
              Login
            </button>
          )}
          <div className='separater-div'></div>
          <button className='navbar-button' onClick={() => navigate("/signup")}>
            Signup
          </button>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
