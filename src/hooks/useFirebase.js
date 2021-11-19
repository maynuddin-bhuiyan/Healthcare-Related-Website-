import { useEffect, useState } from "react";
import initializeAutentication from "../Pages/Login/Firebase/fairbase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword  ,onAuthStateChanged , signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

initializeAutentication();

const useFirebase = () => {
    const [user,setUser] = useState({});
    const [isloding, setIsloding] = useState(true);
    const [authErrer, setAuthErrer] = useState('');
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    



    useEffect( () => {
       const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
             
              setUser(user)
            } else {
              setUser({})

            }

            setIsloding(false)

          });
          return () => unsubscribe;

    } ,[]);



    const googlePopupsignIn = (location,history) => {
      setIsloding(true);
      signInWithPopup(auth, googleProvider)
      .then((result) => {
        
        const user = result.user;
        setAuthErrer('');

      }).catch((error) => {
        setAuthErrer(error.message);

      })
      .finally( () => setIsloding(false));



    };

    const loginUser = (email, password ,location,history) => {
        setIsloding(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const destanition = location?.state?.from || '/';
          history.replace(destanition);
          setAuthErrer('');
        })
        .catch((error) => {
          
          setAuthErrer(error.message);
        })
        .finally( () => setIsloding(false));
    };




    const registrationUser = (email, password, history) => {
      setIsloding(true);

        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
           
            setAuthErrer('');
            history.replace('/');
          })
          .catch((error) => {
            setAuthErrer(error.message);
          })
          .finally( () => setIsloding(false));
          

    }



    const logOutUser = () => {
      setIsloding(true);
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          })
          .finally( () => setIsloding(false));
    }


    return{
        user,
        isloding,
        authErrer,
        registrationUser,
        googlePopupsignIn,
        logOutUser,
        loginUser,
        
       
    }

}


export default useFirebase;