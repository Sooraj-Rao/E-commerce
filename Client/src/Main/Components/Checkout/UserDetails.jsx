
import React, { useContext } from 'react'
import { MyContext } from '../../Context/Context'
import { Link, useNavigate } from 'react-router-dom';
import ScrollTop from '../../Constant/ScrollTo/ScrollTop';
import { ArrowIcon } from '../../../../public/SVG/IconsSvg';

const UserDetails = () => {
  const context = useContext(MyContext);
  const { userDetails } = context;
  const { email, name, phone } = userDetails.user || '';
  const navigate = useNavigate()
  return (
    <div>
      <ScrollTop />
      <section className="py-16 bg-gray-100 ">
        <div className="max-w-6xl px-4 mx-auto">
          <div className="rounded-lg shadow bg-gray-50  ">
            <div className="p-6 ">
              <div className="pb-6 border-b border-gray-100  ">
                <h2 className="text-xl font-bold text-gray-800 md:text-3xl ">
                  Your Details
                </h2>
              </div>
              <div className="py-6 border-b border-gray-100 ">
                <div className="w-full md:w-10/12">
                  <div className="flex flex-wrap -m-3">
                    <div className="w-full p-3 md:w-1/3">
                      <p className="text-base font-semibold text-gray-700 ">
                        Name, Email
                      </p>
                    </div>
                    <div className="w-full p-3 md:w-1/3">
                      <input
                        value={name} readOnly
                        className="w-full   px-4 py-2.5 outline-none read-only:bg-gray-200 text-base text-gray-900 rounded-lg font-normal border border-gray-200"
                        type="text" placeholder="Adam" />
                    </div>
                    <div className="w-full p-3 md:w-1/3">
                      <input
                        value={email} readOnly
                        className="w-full px-4 py-2.5 outline-none read-only:bg-gray-200  text-base text-gray-900 rounded-lg font-normal border border-gray-200"
                        type="text" placeholder="Smith" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-6 border-b border-gray-100  ">
                <div className="w-full md:w-10/12">
                  <div className="flex flex-wrap -m-3">
                    <div className="w-full p-3 md:w-1/3">
                      <p className="text-sm font-semibold text-gray-800 ">Contact Number</p>
                    </div>
                    <div className="w-full p-3 md:flex-1">
                      <input value={phone} readOnly
                        className="w-full px-4 py-2.5 outline-none read-only:bg-gray-200   text-base text-gray-900 rounded-lg font-normal border border-gray-200"
                        type="email" placeholder="adam@gmail.com" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-10/12">
                <div className="flex flex-wrap justify-between -m-1.5">
                  <div className="w-full md:w-auto p-1.5">
                    <button
                      onClick={() => window.history.back()}
                      className="flex flex-wrap items-center justify-center gap-x-2 w-full px-4 py-2 text-sm font-medium text-white bg-blue-500 border border-blue-500 rounded-md hover:bg-blue-600 ">
                      <span>
                        {ArrowIcon}
                      </span>
                      <span>
                        Go Back
                      </span>
                    </button>
                  </div>
                  <div className="w-full md:w-auto p-1.5">
                    <button
                     onClick={() => navigate('/checkout/address')}
                      className="flex flex-wrap justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-500 border border-blue-500 rounded-md hover:bg-blue-600 ">
                      <p>Continue</p>
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

export default UserDetails