import React from 'react';
import { useParams } from 'react-router-dom';

const Service = () => {

    const {serviceId} = useParams();
    return (
        <div>
            <h1>Service Id is: {serviceId} </h1>
        </div>
    );
};

export default Service;