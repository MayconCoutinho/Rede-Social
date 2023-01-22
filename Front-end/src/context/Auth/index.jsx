import { createContext, useEffect, useState } from "react";
import { goToHomePage } from "../../routes/coordinator";
import { PostLogin, getInfoUser } from "../../services";

export const AuthContext = createContext({})

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [headerBarUserInfo, setHeaderBarUserInfo] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => { 
        const InfoUser = async () => {
            setLoading(true)
            const response = await getInfoUser(user) 
            setLoading(false)
            setHeaderBarUserInfo(response[0])
        }
        InfoUser()
    }, [user])

    const signin =  async (email, password, navigate) => {
        try{
            const response = await PostLogin(email, password)
            setUser(response.token)
            goToHomePage(navigate)

        } catch {
            alert("Senha ou email errado")
        }
    }
    const signout = () => {
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{user, signin, signout, headerBarUserInfo, loading}}>{children}</AuthContext.Provider>
    )
} 