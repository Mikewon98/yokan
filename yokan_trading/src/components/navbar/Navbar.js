import React, { useState } from "react";
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
import "./Navbar.css";

const NavBar = () => {
  const auth = useSelector(Selectuser);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const [navCollapsed, setNavCollapsed] = useState(true);

  const handleNavDropdownClose = () => {
    // setNavCollapsed(true);
  };

  const handleLogout = () => {
    dispatch(setLogout());
    navigate("/");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <Navbar
      collapseOnSelect
      // expanded={!navCollapsed}
      sticky='top'
      expand='lg'
      className='bg-light-blue  justify-content-between '
      style={{ boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)" }}
    >
      <Container>
        <Navbar.Brand as={Link} to='/'>
          Yokan
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
      </Container>
      <Navbar.Collapse id='basic-navbar-nav '>
        <Nav className='ml-auto'>
          <Nav.Link as={Link} to='/'>
            Home
          </Nav.Link>
          <NavDropdown
            title='Shipping'
            id='basic-nav-dropdown'
            // onSelect={() => handleNavDropdownClose()}
          >
            <NavDropdown.Item as={Link} to='/createshipment'>
              Create a shipment
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to='/trackShipment'>
              Track shipment
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
          <NavDropdown title='Company' id='basic-nav-dropdown'>
            <NavDropdown.Item as={Link} to='/aboutUs'>
              About Us
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to='/partner'>
              Partners
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to='/contactus'>
              Contact Us
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to='/logout'>
              Log out
            </NavDropdown.Item>
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
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
