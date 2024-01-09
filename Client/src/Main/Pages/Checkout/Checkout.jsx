import CheckOutHeader from "../../Components/Checkout/CheckOutHeader"
import { useParams } from "react-router-dom";
import UserAddress from "../../Components/Checkout/UserAddress";
import UserDetails from "../../Components/Checkout/UserDetails";
import Payment from "../../Components/Checkout/Payment";
import Invoice from "../../Components/Checkout/Invoice";
import { useCookies } from "react-cookie";
import { useEffect } from "react";


const Checkout = () => {
  const { param } = useParams();
  const [cookies, setCookie, removeCookie] = useCookies();
  const ComponentList = {
    details: <UserDetails />,
    address: <UserAddress />,
    payment: <Payment />,
  }

  useEffect(() => {
    if (!cookies?.user?.email || !cookies?.user?.name ||
      !cookies?.user?.phone || !cookies?.token) {
      removeCookie('user');
      removeCookie('token');
        return window.location.href = '/auth/login';
    }
  }, [cookies])


  let Component = ComponentList[param] || window.history.back()

  return (
    <div>
      <div className=" ">
        <CheckOutHeader />
      </div>
      <div>
        {Component}
      </div>
    </div>
  )
}

export default Checkout