import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/uesAuth';
import './Service.css';

const Service = (props) => {
  const {user, logOut} = useAuth();

    console.log(props.service)

    const {id,name,title,img} = props.service;

    return (
        <div className='Full-Service'>
            <Card style={{ width: '18rem', height: '500px', }}>
  <Card.Img variant="top" src={img} />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
      {title}
    </Card.Text>



    <Link to={`/service/${id}`}> 
    


    <Button variant="primary">Login</Button>

    </Link>
   
    
  </Card.Body>
</Card>

        </div>
    );
};

export default Service;