import React from 'react';

import './Header.css';
import logo from '../../../images/logo-wide.png'
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <div className="Header-part">
        <img src={logo} alt="" />

        <Navbar bg="dark" variant="dark">
    <Container>
   
    <Nav className="me-auto">
      <Nav.Link href="/home#home">Home</Nav.Link>
      <Nav.Link href="/home#Services">Service's</Nav.Link>
      <Nav.Link href="/home#appointment">Appointment</Nav.Link>
      <Nav.Link href="/Department">Department</Nav.Link>
    </Nav>
    </Container>
  </Navbar>

       
        </div>
        </div>
    );
};

export default Header;