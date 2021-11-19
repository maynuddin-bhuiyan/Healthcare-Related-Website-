import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';


const DetailsItam = () => {
    const { servisId } = useParams();

    const [imam, setItam] = useState([]);
   

        //Loaed Data
            useEffect( () => {
                fetch('./Department.JSON')
                .then(res => res.json())
                .then(data => {
                    setItam(data)
                    console.log(data);
                })
            },
            []);


    console.log(imam);
    return (
        <div>
            <h1>Hello It's {servisId}  Data</h1>
        </div>
    );
};

export default DetailsItam;