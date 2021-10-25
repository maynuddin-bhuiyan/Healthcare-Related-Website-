import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import './Appointment.css';

import images from '../../../images/Appointment/Appointment.png';



const Appointment = () => {
    return (
        <div className='Appointment-Full'>
        <h1>Make an Appointment</h1>
          <div className="Appointment">
          <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">

  <Form>
  <Row id='name'>
    <Col>
      <Form.Control placeholder="Full name" />
    </Col>
    <Col>
      <Form.Control placeholder="Phone" />
    </Col>
  </Row>
</Form>
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>

   
  </Form.Group>
  
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  
  <Form.Select aria-label="Default select example" id='selet'>
  <option> Choose Medicine Doctor</option>
  <option value="1">Shamim Boksha</option>
  <option value="2">Pran Gopal Datta</option>
  <option value="3">Mansurul Alam</option>
  <option value="4">Hafizur Rahman</option>
  <option value="5">Kabir Chowdhury</option>
</Form.Select>

<div className="click">
<Form.Check 
    type="switch"
    id="custom-switch"
    label="Confirm This"
  />
</div>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

<div className="Appointment-image">
  <img src={images} alt="" />
</div>


          </div>
        </div>
    );
};

export default Appointment;