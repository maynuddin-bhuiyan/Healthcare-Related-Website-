import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Doctor from '../Doctor/Doctor';
import './Doctors.css';


const Doctors = () => {
//State Declare
const [doctors, setDoctor] = useState([]);
        
    
//Loaed Data

        useEffect(() => {fetch('./Department.JSON')
        .then(res => res.json())
        .then(data => setDoctor(data))
        },
    []);

    return (

<div className='Doctors-Full'>
                <h1>Medicine Doctor In  The World</h1>
                <div className="Doctors">
                    
    
                    {
                    doctors.map(doctor => <Doctor
                         key={doctor.id}
                         doctor= {doctor}
                         />)
                }
                </div> 
                </div>
        );
};
 

export default Doctors;