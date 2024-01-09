import { Link,  useNavigate } from 'react-router-dom';
import { CheckIcon } from '../../../../public/SVG/IconsSvg';
import { useContext, useEffect, useState } from 'react';
import { MyContext } from '../../Context/Context';
import axios from 'axios';
import toast from 'react-hot-toast';
import ScrollTop from '../../Constant/ScrollTo/ScrollTop';

const Invoice = ({ InvoiceDetails, setInvoice }) => {

    const context = useContext(MyContext);
    const { Server, userDetails } = context;
    const email = userDetails?.user?.email;


    const { addressInfo, amountInfo, paymentId, date } = InvoiceDetails;
    const { name, address, phone, pincode } = addressInfo;
    const { shipping, subtotal, total, discount } = amountInfo;

    return (
        <div className=' '>
              <ScrollTop/>
            <section className="flex items-center py-6 bg-gray-300  font-poppins  ">
                <div className=" relative justify-center flex-1 max-w-6xl px-4 py-4 mx-auto bg-white border rounded-md  md:py-10 md:px-10">
                    <h1 onClick={() => setInvoice(null)} className=' absolute right-5 top-5 font-sans font-bold bg-blue-600 text-white px-4 py-1  rounded text-lg cursor-pointer'>X</h1>
                    <div>
                        <h1 className="px-4 mb-8 text-2xl font-semibold tracking-wide text-gray-700  ">
                            Here is your Invoice for order <span className=' uppercase'> #{paymentId.slice(4)}</span> </h1>
                        <div className="flex border-b border-gray-200   items-stretch justify-start w-full h-full px-4 mb-8 md:flex-row xl:flex-col md:space-x-6 lg:space-x-8 xl:space-x-0">
                            <div className="flex justify-between w-full">
                                <div className="flex items-center justify-center w-full pb-6 space-x-4 md:justify-start">
                                    <div className="flex flex-col items-start justify-start space-y-2">
                                        <p className="text-lg font-semibold leading-4 text-left text-gray-800 ">
                                            {name}</p>
                                        <p className="text-sm leading-4 text-gray-600 ">Ph: {phone}</p>
                                        <p className="text-sm leading-4 pst-5 cursor-pointer ">Email: {email}</p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center w-full pb-6 space-x-4 md:justify-start">
                                    <div className="flex flex-col items-start justify-start space-y-2">
                                        <p className="text-lg font-semibold leading-4 text-left text-gray-800 ">
                                            Address Details</p>
                                        <p className="text-sm leading-4 text-gray-600 ">{address}</p>
                                        <p className="text-sm leading-4 pst-5 cursor-pointer ">{pincode}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap items-center pb-4 mb-10 border-b border-gray-200 ">
                            <div className="w-full px-4 mb-4 md:w-1/4">
                                <p className="mb-2 text-sm leading-5 text-gray-600  ">
                                    Order Number: </p>
                                <p className="text-base uppercase font-semibold leading-4 text-gray-800 ">
                                    #{paymentId?.slice(4)}</p>
                            </div>
                            <div className="w-full px-4 mb-4 md:w-1/4">
                                <p className="mb-2 text-sm leading-5 text-gray-600  ">
                                    Date: </p>
                                <p className="text-base font-semibold leading-4 text-gray-800 ">
                                    {new Date(date)?.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit' })}

                                </p>
                            </div>
                            <div className="w-full px-4 mb-4 md:w-1/4">
                                <p className="mb-2 text-sm font-medium leading-5 text-gray-800 ">
                                    Total: </p>
                                <p className="text-base font-semibold leading-4 text-blue-600 ">
                                    Rs. {total}</p>
                            </div>
                            <div className="w-full px-4 mb-4 md:w-1/4">
                                <p className="mb-2 text-sm leading-5 text-gray-600 ">
                                    Payment Method: </p>
                                <p className="text-base font-semibold leading-4 text-gray-800 ">
                                    Online </p>
                            </div>
                        </div>
                        <div className="px-4 mb-10">
                            <div className="flex flex-col items-stretch justify-center w-full space-y-4 md:flex-row md:space-y-0 md:space-x-8">
                                <div className="flex flex-col w-full space-y-6 ">
                                    <h2 className="mb-2 text-xl font-semibold text-gray-700 ">Order details</h2>
                                    <div className="flex flex-col items-center justify-center w-full pb-4 space-y-4 border-b border-gray-200 ">
                                        <div className="flex justify-between w-full">
                                            <p className="text-base leading-4 text-gray-800 ">Subtotal</p>
                                            <p className="text-base leading-4 text-gray-600 ">{subtotal}</p>
                                        </div>
                                        <div className="flex items-center justify-between w-full">
                                            <p className="text-base leading-4 text-gray-800 ">Shipping</p>
                                            <p className="text-base leading-4 text-gray-600 ">{shipping}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between w-full">
                                        <p className="text-base font-semibold leading-4 text-gray-800 ">Total</p>
                                        <p className="text-base font-semibold leading-4 text-gray-600 ">Rs. {total}</p>
                                    </div>
                                </div>
                                <div className="flex flex-col w-full px-2 space-y-4 md:px-8 ">
                                    <h2 className="mb-2 text-xl font-semibold text-gray-700 ">Shipping</h2>
                                    <div className="flex items-start justify-between w-full">
                                        <div className="flex items-center justify-between w-full space-x-2">
                                            <div className=' flex'>
                                                <div className="w-8 h-8">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-6 h-6 text-blue-600  bi bi-truck" viewBox="0 0 16 16">
                                                        <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z">
                                                        </path>
                                                    </svg>
                                                </div>
                                                <div className="flex flex-col items-center justify-start">
                                                    <p className="text-lg font-semibold leading-6 text-gray-800 ">
                                                        Delivery<br /><span className="text-sm font-normal">Delivery within 2 Days</span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex flex-col items-center justify-start">
                                                <p className="text-lg font-semibold leading-6 text-gray-800 ">
                                                    Customer Support
                                                    <br /><span className="text-sm font-normal">+91 9938834482</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Invoice