import { useContext } from "react";
import { Authcontexs } from "../contexs/Authprovider";


const useAuth = () => {

    const auth = useContext(Authcontexs);
    return auth;
};

export default useAuth;