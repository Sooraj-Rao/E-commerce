import { createContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";

export const MyContext = createContext();


const Context = ({ children }) => {
    const [login, setLogin] = useState(false);
    const [admin, setadmin] = useState(false);
    const [Cart, setCart] = useState(
        JSON.parse(localStorage.getItem('cart')) ||
        []);
    const [WishList, setWishList] = useState(
        JSON.parse(localStorage.getItem('wish')) ||
        [])
    const [UserItems, setUserItems] = useState(() => {
        return JSON.parse(localStorage.getItem('cart')) || ''
    })
    const [cookies, setCookie, removeCookie] = useCookies(['user']);
    const Server = import.meta.env.VITE_SERVER;
    const theme = 'Dark'
    const isAdmin = import.meta.env.VITE_ME;

    useEffect(() => {
        if (!login && cookies?.user) {
            setLogin(true);
            (cookies.user.email == isAdmin) ?
                setadmin(true) : null
        }
        localStorage.setItem('cart', JSON.stringify(Cart))
        localStorage.setItem('wish', JSON.stringify(WishList))
    }, [Cart, WishList])



    const Values = { Server, theme, login, setLogin, admin, removeCookie, UserItems, setUserItems, Cart, setCart, WishList, setWishList }

    return (
        <MyContext.Provider value={Values}>{children}</MyContext.Provider>
    )
}

export default Context