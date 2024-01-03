import { useContext, useEffect, useState } from "react"
import axios from 'axios';
import { MyContext } from '../../Main/Context/Context'

const Order = () => {
  const [Data, setData] = useState([]);

  const context = useContext(MyContext);
  const { Server } = context;


  const fetchOrders = async () => {
    try {
      const res = await axios.get(Server + 'admin/getOrders/');
      const { message, error, data } = res.data;
      if (error) {
        return console.log('Failed to get Data');
      }
      setData(data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchOrders();
  }, [])

  console.log(Data);

  return (
    <div>
      <section className="container px-4 mx-auto">
        <div className="flex items-center gap-x-3">
          <h2 className="text-lg font-medium text-gray-800 ">Total Order</h2>
          <span className="px-3 py-1 text-sm mt-1 text-blue-600 bg-blue-100 rounded-full ">{Data?.length}</span>
        </div>
        {
          Data.length != 0 ?
            <div className="flex flex-col mt-6">
              <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                  <div className="overflow-hidden border border-gray-200  md:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200 ">
                      <thead className="bg-gray-50 ">
                        <tr>
                          <th className="py-3.5 pl-10 text-sm font-normal w-10    text-gray-500 ">
                            <div className="flex items-center gap-x-3">
                              <span>Email</span>
                            </div>
                          </th>
                          <th  className="px-12 py-3.5 text-sm font-normal  text-left rtl:text-right text-gray-500 ">
                            <button className="flex items-center gap-x-2">
                              <span>AddressInfo</span>
                            </button>
                          </th>

                          <th  className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 ">
                            <button className="flex items-center gap-x-2">
                              <span>Items</span>
                            </button>
                          </th>

                          <th  className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500" >Amount</th>

                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200 ">
                        {
                          Data?.map((item, i) => {
                            const { addressInfo, amountInfo, cart, email } = item;
                            return (
                              <tr key={i}>
                                <td className="px-10 py-4 text-sm text-gray-500  whitespace-nowrap">{email}</td>
                                <td className="px-4 py-4 flex  gap-x-3 text-sm text-gray-500  whitespace-nowrap">
                                  <p>{addressInfo?.address}</p>
                                  <p>{addressInfo?.pincode}</p>
                                </td>
                                <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">{cart?.length} Items</td>
                                <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">{amountInfo?.total}</td>
                              </tr>
                            )
                          })
                        }
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            :
            <div className=" flex justify-center items-center gap-3 h-20 text-xl">

              <span>
                Fetching Data
              </span>
              <h1 className=" h-5 animate-spin rounded-full w-5 border-2 border-t-transparent border-black">

              </h1>
            </div>
        }


      </section >
    </div>
  )
}

export default Order