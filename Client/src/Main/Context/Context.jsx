import { createContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";

export const MyContext = createContext();


const Context = ({ children }) => {
    const [Login, setLogin] = useState(false);
    const [admin, setadmin] = useState(false)
    const [cookies, setCookie, removeCookie] = useCookies(['user']);
    const Server = import.meta.env.VITE_SERVER;
    const theme = 'Dark'
    const isAdmin = import.meta.env.VITE_ME;

    useEffect(() => {
        if (cookies.user) {
            setLogin(true);
            (cookies.user.email == isAdmin) ?
                setadmin(true) : ''

        }
    }, [cookies])
    const Values = { Server, theme, Login, setLogin, admin }
    return (
        <MyContext.Provider value={Values}>{children}</MyContext.Provider>
    )
}

export default Context