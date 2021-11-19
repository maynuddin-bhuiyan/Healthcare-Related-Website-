import React from 'react';

import './Header.css';
import logo from '../../../images/logo-wide.png'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/uesAuth';
import { Button } from '@mui/material';

const Header = () => {


    const {logOutUser,user} = useAuth();

    return (
        <div>
            <div className="Header-part">
        <img src={logo} alt="" />

        <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
    <Container>
   
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/home#home">Home</Nav.Link>
      <Nav.Link as={Link} to="/home#services">Service's</Nav.Link>
      <Nav.Link as={Link} to="/home#appointment">Appointment</Nav.Link>
      <Nav.Link as={Link} to="/department">Department</Nav.Link>

        {
            user?.email ? 
            <Button style={{ position: 'absolute', top: '20px', right: '100px', background : 'wheat', color: 'black', fontWeight: '800'}} onClick={logOutUser} >Logout</Button> :

                <Nav.Link as={Link} to="/login">Login {user?.displayName}</Nav.Link>

        }

    </Nav>
    </Container>
  </Navbar>

       
        </div>
        </div>
    );
};

export default Header;