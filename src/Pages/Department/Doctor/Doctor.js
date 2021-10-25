import React from 'react';
import { Card } from 'react-bootstrap';
import './Doctor.css';

const Doctor = (props) => {

    console.log(props.doctor);

    const {name , degeneration , img , title } = props.doctor;
    
    return (
        <div className='doctor'>
           <Card style={{ width: '400px', padding:'50px', height:'600px' }}>
  <Card.Img variant="top" src={img} />
  <Card.Body>
      <h2>{name}</h2>
    <Card.Title>{title}</Card.Title>
    <Card.Text>
        {degeneration}
    </Card.Text>
    </Card.Body>
</Card>
        </div>
    );
};

export default Doctor;