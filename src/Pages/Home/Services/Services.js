import React from 'react';
import Service from '../Service/Service';
import useSData from '../Usedata/UsedData';
import './Services.css';

const Services = () => {

    const [servise] = useSData([]);
    console.log(servise);
    return (
        <div className='servise'>
            {
                servise.map(servise => <Service
                    servise = {servise.id}
                    servis = {servise}
                
                ></Service>)
            }
        </div>
    );
};

export default Services;