import React, { createContext } from 'react';
import useFirebase from '.././hooks/useFirebase';



export const Authcontexs = createContext(null);

const Authprovider = ({ children }) => {

    const allcontext = useFirebase();
    
    return (
        <Authcontexs.Provider value={allcontext}>
            {children}
        </Authcontexs.Provider>
    );
};

export default Authprovider;