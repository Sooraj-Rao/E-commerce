import { createContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";

export const MyContext = createContext();


const Context = ({ children }) => {
    const [login, setLogin] = useState(false);
    const [admin, setadmin] = useState(false)
    const [cookies, setCookie, removeCookie] = useCookies(['user']);
    const Server = import.meta.env.VITE_SERVER;
    const theme = 'Dark'
    const isAdmin = import.meta.env.VITE_ME;

    useEffect(() => {
        if (cookies?.user) {
            setLogin(true);
            (cookies.user.email == isAdmin) ?
                setadmin(true) : null

        }
    }, [])
    const Values = { Server, theme, login, setLogin, admin, removeCookie }
    return (
        <MyContext.Provider value={Values}>{children}</MyContext.Provider>
    )
}

export default Context