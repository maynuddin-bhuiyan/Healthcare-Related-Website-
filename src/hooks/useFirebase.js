import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAutentication from "../Pages/Login/Firebase/fairbase.init";

initializeAutentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const auth = getAuth();


    const signInUseGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        .then(result => {
            setUser(result.user)
        })
    }

    const logOut = () => {
        signOut(auth)
        .then(() => { })
    }


    useEffect( () =>{
        const unsusebrice = onAuthStateChanged(auth, user => {
            if(user){
                setUser(user)
            }
            else{
                setUser({})
            }
        });

        return () => unsusebrice;

    }  ,[])

    return {
        user,
        signInUseGoogle,
        logOut,
    };
}

export default useFirebase;