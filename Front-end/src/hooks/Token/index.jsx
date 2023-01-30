import { useContext } from "react";
import { AuthContext } from "../../context/Auth";

export const TokenAuthenticator = () => {
  const { user, setUser} = useContext(AuthContext) 
  const token = window.localStorage.getItem("Token")
  if(token){
    setUser(token)
  }
    if(user === null &&  token === null){
      return true
    } 
    return false
}
