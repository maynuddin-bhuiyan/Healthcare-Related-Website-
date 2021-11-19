import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';



import './Service.css';

const Service = (props) => {
  

    console.log(props.servis)

    const {id,name,title,img} = props.servis;

  
   



  


    return (
        <div className='Full-Service'>
            <Card style={{ width: '18rem', height: '500px', }}>
  <Card.Img variant="top" src={img} />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
      {title}
    </Card.Text>


<Link to={`/detailsItam/${id}`} >
<Button> Details</Button>
</Link>

    

   
    
  </Card.Body>
</Card>

        </div>
    );
};

export default Service;