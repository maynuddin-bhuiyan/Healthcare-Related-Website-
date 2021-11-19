import React from 'react';
import Doctor from '../../Department/Doctor/Doctor';
import Appointment from '../Appointment/Appointment';
import Banner from '../Banner/Banner';
import ClientPartnens from '../ClientPartnens/ClientPartnens';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div>

<Banner></Banner>
<Services></Services>
<Appointment></Appointment>
<ClientPartnens></ClientPartnens>

        </div>
    );
};

export default Home;