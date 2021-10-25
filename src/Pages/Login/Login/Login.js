import React from 'react';
import {  Button, FloatingLabel, Form } from 'react-bootstrap';
import './LOgin.css'





const Login = () => {

    
    return (
        <div className='Login'>

            <h1>LogIn Page</h1>
        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mb-3"
        >
          <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="Password">
          <Form.Control type="password" placeholder="Password" />

          <Button type='Submit' > LogIn </Button>
        </FloatingLabel>


      </div>
    );
};

export default Login;