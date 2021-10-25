import { useContext } from "react"
import { Authcontexs } from "../contexs/Authprovider";

const useAuth = () => {
    return useContext(Authcontexs)
}

export default useAuth;