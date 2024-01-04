import { createContext, useEffect, useMemo, useState } from "react";
import { useCookies } from "react-cookie";
import axios from 'axios'
import toast from 'react-hot-toast'

export const MyContext = createContext();


const Context = ({ children }) => {
    const [login, setLogin] = useState(false);
    const [admin, setadmin] = useState(false);
    const [userDetails, setuserDetails] = useState(null)
    const [AllItems, setAllItems] = useState([])
    const [Cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
    const [WishList, setWishList] = useState(JSON.parse(localStorage.getItem('wish')) || []);
    const [AddressInfo, setAddressInfo] = useState(
        JSON.parse(localStorage.getItem('address')) ||
        {
            state: '',
            pincode: '',
            district: '',
            city: '',
            address1: '',
            address2: ''
        }

    )
    const [cookies, setCookie, removeCookie] = useCookies(['user']);
    const Server = import.meta.env.VITE_SERVER;
    const theme = 'Dark'
    const isAdmin = import.meta.env.VITE_ME;

    useEffect(() => {
        if (!login && cookies?.user) {
            const { user, token } = cookies;
            const details = { user, token }
            setuserDetails(details);
            setLogin(true);
            !admin ?
                (cookies.user.email == isAdmin) ?
                    setadmin(true) : null
                : null
        }
        localStorage.setItem('cart', JSON.stringify(Cart))
        localStorage.setItem('wish', JSON.stringify(WishList))
        localStorage.setItem('address', JSON.stringify(AddressInfo))
        AllItems.length == 0 ? FetchData() : ''
    }, [cookies, Cart, WishList, AddressInfo])


    const FetchData = async () => {
        try {
            const res = await axios.get(Server + 'getProducts/all');
            const { error, message, data } = res.data;
            if (error) {
                return toast.error(message)
            }
            setAllItems(data)
        } catch (error) {
            console.log(error);
        }
    }

    const Values = {
        Server, theme, login, setLogin, admin,
        removeCookie, Cart, setCart, WishList, setWishList,
        userDetails, AddressInfo, setAddressInfo, AllItems
    }

    return (
        <MyContext.Provider value={Values}>{children}</MyContext.Provider>
    )
}

export default Context