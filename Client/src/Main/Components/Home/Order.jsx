import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { MyContext } from '../../Context/Context'
import toast from 'react-hot-toast';
import { Rupee } from '../../Constant/Messages/Messages'
import Invoice from '../../Components/Checkout/Invoice'
import ScrollTop from '../../Constant/ScrollTo/ScrollTop'

const Order = () => {
  const [Data, setData] = useState([]);
  const [InvoiceDetails, setInvoice] = useState(null);
  const { Server, userDetails } = useContext(MyContext);
  const token = userDetails?.token;

  const getOrderInfo = async () => {
    try {
      const res = await axios.get(Server + `order/details/${token}`);
      const { data, error } = res.data;
      if (error) {
        return toast.error('Falied to get Data')
      }
      setData(data)
    } catch (error) {
      return toast.error('Falied to get Data')
    }
  }

  useEffect(() => {
    token && getOrderInfo()

  }, [token])


  return (
    <div>
      <ScrollTop/>
      {
        InvoiceDetails ?
          <Invoice InvoiceDetails={InvoiceDetails} setInvoice={setInvoice} /> :
          <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
            <div className="flex justify-start item-start space-y-2 flex-col">
              <h1 className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">Your Orders :<span>{Data?.length}</span></h1>
            </div>
            <div className="mt-10 flex flex-col  jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
              {!InvoiceDetails &&
                Data.map((item, i) => {
                  return (
                    <div key={i} className="flex border-b-2 border-slate-400 flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
                      <div className="flex flex-col justify-start items-start  bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
                        <p className="text-lg md:text-xl  font-semibold leading-6 xl:leading-5 text-gray-800 uppercase">Order Id: #{item?._id.slice(10)}</p>
                        {
                          item?.cart.map((item, i) => {
                            const { product } = item
                            const { category, imageUrl, name, price } = product;
                            return (
                              <div key={i} className="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
                                <div className="pb-4 md:pb-8 w-full md:w-40">
                                  <img className="w-full hidden md:block" src={imageUrl} alt="" />
                                  <img className="w-full md:hidden" src={imageUrl} alt="dress" />
                                </div>
                                <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
                                  <div className="w-full flex flex-col justify-start items-start space-y-8">
                                    <h3 className="text-xl xl:text-2xl font-semibold leading-6 text-gray-800">{name}</h3>
                                    <div className="flex justify-start items-start flex-col space-y-2">
                                      <p className="text-sm text-gray-800">Category: <span className=' font-semibold'>{category}</span> </p>
                                    </div>
                                  </div>
                                  <div className="flex justify-between space-x-8 items-start w-full">
                                    <p className="text-base  xl:text-lg leading-6">Price: {Rupee} {price} </p>
                                    <p className="text-base  xl:text-lg leading-6 text-gray-800">Qty: {item?.quantity}</p>
                                    <p className="text-base  xl:text-lg font-semibold leading-6 text-gray-800">Total: {Rupee} {price * item?.quantity}</p>
                                  </div>
                                </div>
                              </div>
                            )
                          })
                        }
                      </div>
                      <div className="flex justify-center flex-col md:flex-row  items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
                        <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50  space-y-6">
                          <h3 className="text-xl  font-semibold leading-5 text-gray-800">Summary</h3>
                          <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                            <div className="flex justify-between items-center w-full">
                              <p className="text-base leading-4 text-gray-800">Subtotal</p>
                              <p className="text-base  leading-4 text-gray-600">{Rupee} {item?.amountInfo?.subtotal}</p>
                            </div>
                            <div className="flex justify-between items-center w-full">
                              <p className="text-base  leading-4 text-gray-800">Shipping</p>
                              <p className="text-base leading-4 text-gray-600">{Rupee} {item?.amountInfo?.shipping}</p>
                            </div>
                          </div>
                          <div className="flex justify-between items-center w-full">
                            <p className="text-base  font-semibold leading-4 text-gray-800">Total</p>
                            <p className="text-base  font-semibold leading-4 text-gray-600">{Rupee} {item?.amountInfo?.total}</p>
                          </div>
                        </div>
                        <div className="flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50  space-y-6">
                          <h3 className="text-xl  font-semibold leading-5 text-gray-800">Invoice Details</h3>

                          <div className="w-full flex justify-center items-center">
                            <button onClick={() => setInvoice(item)} className="  focus:outline-none hover:bg-blue-600   py-3 rounded-md px-4 bg-blue-500 text-base font-medium leading-4 text-white">View Invoice</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
      }
    </div>
  )
}

export default Order