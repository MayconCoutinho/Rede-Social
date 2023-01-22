import { useContext } from "react";
import { AuthContext } from "../../context/Auth";

export const TokenAuthenticator = () => {
  const { user } = useContext(AuthContext)  
    if(user === null ){
      return true
    } 
    return false
  
}