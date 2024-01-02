import CheckOutHeader from "../../Components/Checkout/CheckOutHeader"
import { useParams } from "react-router-dom";
import UserAddress from "../../Components/Checkout/UserAddress";
import UserDetails from "../../Components/Checkout/UserDetails";
import Payment from "../../Components/Checkout/Payment";
const Checkout = () => {
  const { param } = useParams()
  const ComponentList = {
    details: <UserDetails />,
    address: <UserAddress />,
    payment: <Payment />,
  }

  let Component = ComponentList[param] || window.history.back()

  return (
    <div>
      <div className=" sticky top-[4.5rem]">
        <CheckOutHeader />
      </div>
      <div>
        {Component}
      </div>
    </div>
  )
}

export default Checkout