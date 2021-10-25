import { useState , useEffect } from "react";

const useSData = () => {
        //State Declare
        const [services, setservices] = useState([]);
   

        //Loaed Data
            useEffect(() => {
                fetch('./Fackdata.JSON')
                .then(res => res.json())
                .then(data => setservices(data))
            },
            []);

            return[services, setservices]
}

export default useSData;