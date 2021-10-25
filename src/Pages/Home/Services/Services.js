import React from 'react';
import Service from '../Service/Service';
import './Services.css';
import useSData from '../Usedata/UsedData';


const Services = () => {
//State Declare
    const [services] = useSData([]);
   

// All Course Item Generate
    return (
        <div id='Service' className="Services-full">
            <h1>Choose From Our Top Service's</h1>
        <div className="Services">
            

            
                {
                services.map(services => <Service
                     key={services.id}
                     service= {services}
                     />)
            }
            
        </div>
        </div>
    );
};


// Export File


export default Services;