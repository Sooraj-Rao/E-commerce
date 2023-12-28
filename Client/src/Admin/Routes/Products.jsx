import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { MyContext } from "../../Main/Context/Context";
import toast from "react-hot-toast";

const Products = () => {
  const [Data, setData] = useState([])
  const context = useContext(MyContext);
  const { Server } = context;
console.log(Data);
  const FetchProducts = async () => {
    try {
      const res = await axios.get(Server + 'admin/getProduct')
      const { error, message, data } = res.data
      if (error) {
        return toast.error(message)
      }
      setData(data);
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    FetchProducts();
  }, [])


  return (
    <div>Products</div>
  )
}

export default Products