import { createContext, useEffect, useState } from "react";
import { goToHomePage } from "../../routes/coordinator";
import { GetFeed, GetInfoUser, PostLogin } from "../../services";

export const AuthContext = createContext({})

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [headerBarUserInfo, setHeaderBarUserInfo] = useState(null)
    const [loading, setLoading] = useState(false)
    const [feed, setFeed] = useState(null)

    useEffect(() => { 
        const InfoUser = async () => {
            setLoading(true)
            const getInfoUser = await GetInfoUser(user) 
            setLoading(false)
            setHeaderBarUserInfo(getInfoUser[0])

            const getFeed = await GetFeed()
            setFeed(getFeed)

        }
        InfoUser()
    }, [user])

    const signin =  async (email, password, navigate) => {
            const response = await PostLogin(email, password)
            setUser(response.token)
            goToHomePage(navigate)
    }
    const signout = () => {
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{user, signin, signout, headerBarUserInfo, loading, feed}}>{children}</AuthContext.Provider>
    )
} 
