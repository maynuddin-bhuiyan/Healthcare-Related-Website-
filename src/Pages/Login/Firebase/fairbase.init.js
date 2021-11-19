import { initializeApp } from "firebase/app";
import firebaseConfig from "./fairbase.config";



const initializeAutentication = () => {
    initializeApp(firebaseConfig);

}


export default initializeAutentication;