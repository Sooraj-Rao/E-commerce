import { useContext, useEffect, useState } from "react"
import axios from 'axios';
import MyContext from '../../Main/Context/Context'

const Order = () => {
  const [Data, setData] = useState([]);

  const context = useContext(MyContext);
  // const { Server } = context;
  console.log(import.meta.env.VITE_SERVER);


  const fetchOrders = async () => {
    try {
      const res = await axios.get(Server + 'getOrders/');
      const { message, error, data } = res.data;
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    // fetchOrders();
  }, [])

  console.log(Data);

  return (
    <div>Orders</div>
  )
}

export default Order