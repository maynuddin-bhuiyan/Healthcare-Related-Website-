import { useState , useEffect } from "react";

const useSData = () => {
        //State Declare
        const [services, setServices] = useState([]);
   

        //Loaed Data
            useEffect(() => {
                fetch('./Fackdata.JSON')
                .then(res => res.json())
                .then(data => setServices(data))
            },
            []);

            return[services, setServices]
}

export default useSData;