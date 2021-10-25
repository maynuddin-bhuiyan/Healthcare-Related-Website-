import React from 'react';

import './Header.css';
import logo from '../../../images/logo-wide.png'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="Header-part">
        <img src={logo} alt="" />

        <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
    <Container>
   
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/home#home">Home</Nav.Link>
      <Nav.Link as={Link} to="/home#Services">Service's</Nav.Link>
      <Nav.Link as={Link} to="/home#appointment">Appointment</Nav.Link>
      <Nav.Link as={Link} to="/Department">Department</Nav.Link>
    </Nav>
    </Container>
  </Navbar>

       
        </div>
        </div>
    );
};

export default Header;