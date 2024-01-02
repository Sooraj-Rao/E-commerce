import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from "react";
import { MyContext } from '../../Context/Context';

const UserAddress = () => {
  const navigate = useNavigate()
  const context = useContext(MyContext);
  const { AddressInfo, setAddressInfo } = context

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddressInfo({ ...AddressInfo, [name]: value })
  }

  return (
    <div>
      <section className="py-16 bg-gray-100 ">
        <div className="max-w-6xl px-4 mx-auto">
          <div className="rounded-lg shadow bg-gray-50  ">
            <div className="p-6 ">
              <div className="pb-6 border-b border-gray-100  ">
                <h2 className="text-xl font-bold text-gray-800 md:text-3xl ">
                  Address Details
                </h2>
              </div>
              <div className="py-6 border-b border-gray-100 ">
                <div className="w-full md:w-10/12">
                  <div className="flex flex-wrap -m-3">
                    <div className="w-full p-3 md:w-1/3">
                      <p className="text-base font-semibold text-gray-700 ">
                        Info
                      </p>
                    </div>
                    <div className="w-full p-3 md:w-1/3">
                      <p>State</p>
                      <input
                        value={AddressInfo.state} name='state' onChange={handleChange}
                        className="w-full   px-4 py-2.5 outline-none read-only:bg-gray-200 text-base text-gray-900 rounded-lg font-normal border border-gray-200"
                        type="text" placeholder="eg: Goa  " />
                    </div>
                    <div className="w-full p-3 md:w-1/3">
                      <p>Pincode</p>
                      <input
                        value={AddressInfo.pincode} name='pincode' onChange={handleChange}
                        className="w-full px-4 py-2.5 outline-none read-only:bg-gray-200  text-base text-gray-900 rounded-lg font-normal border border-gray-200"
                        type="number" placeholder="eg: 574588" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-6 border-b border-gray-100 ">
                <div className="w-full md:w-10/12">
                  <div className="flex flex-wrap -m-3">
                    <div className="w-full p-3 md:w-1/3">
                      <p className="text-base font-semibold text-gray-700 ">
                        Place
                      </p>
                    </div>
                    <div className="w-full p-3 md:w-1/3">
                      <p>District</p>
                      <input
                        value={AddressInfo.district} name='district' onChange={handleChange}
                        className="w-full   px-4 py-2.5 outline-none read-only:bg-gray-200 text-base text-gray-900 rounded-lg font-normal border border-gray-200"
                        type="text" placeholder="District Name" />
                    </div>
                    <div className="w-full p-3 md:w-1/3">
                      <p>City</p>
                      <input value={AddressInfo.city} name='city' onChange={handleChange}
                        className="w-full px-4 py-2.5 outline-none read-only:bg-gray-200  text-base text-gray-900 rounded-lg font-normal border border-gray-200"
                        type="text" placeholder="Your city" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-6 border-b border-gray-100  ">
                <div className="w-full md:w-10/12">
                  <div className="flex flex-wrap -m-3">
                    <div className="w-full p-3 md:w-1/3">
                      <p className="text-sm font-semibold text-gray-800 ">Address 1</p>
                    </div>
                    <div className="w-full p-3 md:flex-1">
                      <input
                        value={AddressInfo.address1} name='address1' onChange={handleChange}
                        className="w-full px-4 py-2.5 outline-none read-only:bg-gray-200   text-base text-gray-900 rounded-lg font-normal border border-gray-200"
                        type="email" placeholder="Enter your primary address here" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-6 border-b border-gray-100  ">
                <div className="w-full md:w-10/12">
                  <div className="flex flex-wrap -m-3">
                    <div className="w-full p-3 md:w-1/3">
                      <p className="text-sm font-semibold text-gray-800 ">Address 2 <span className=' text-gray-500 font-normal'>(optional)</span></p>
                    </div>
                    <div className="w-full p-3 md:flex-1">
                      <input
                        value={AddressInfo.address2} name='address2' onChange={handleChange}
                        className="w-full px-4 py-2.5 outline-none read-only:bg-gray-200   text-base text-gray-900 rounded-lg font-normal border border-gray-200"
                        type="email" placeholder="Enter your secondary address here" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-10/12">
                <div className="flex flex-wrap justify-end -m-1.5">
                  <div className="w-full md:w-auto p-1.5">
                    <button
                      className="flex flex-wrap justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-500 border border-blue-500 rounded-md hover:bg-blue-600 ">
                      <p onClick={() => navigate('/checkout/payment')}>Continue</p>
                    </button>
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

export default UserAddress