import { useContext, useEffect, useState } from 'react'
import ScrollTop from '../../Constant/ScrollTo/ScrollTop'
import { MyContext } from '../../Context/Context'
import toast from 'react-hot-toast';
import OrderDone from './OrderDone';
import { ArrowIcon } from '../../../../public/SVG/IconsSvg';
import axios from 'axios'


const Payment = () => {
  const context = useContext(MyContext);
  const { Cart, AddressInfo, userDetails, Server, setCart } = context;
  const [OrderSucess, setOrderSucess] = useState('');
  const ship = 400;

  const total = Cart?.length !== 0 ? (Cart?.length == 1 ? Cart[0]?.price : Cart?.reduce((acc, curr) => acc?.price + curr?.price)) : '';
  const Disocunt = total ? ((2 / 100) * total)?.toFixed() : '';

  const { address1, pincode } = AddressInfo || '';
  const { email, phone, name } = userDetails?.user || '';

  const addressInfo = {
    name: name,
    address: address1,
    pincode: pincode,
    phone: phone,
  }

  let item = Cart?.map((item) => {
    const { _id, quantity } = item;
    let ele = { product: _id, quantity }
    return ele
  })

  const AmountDetails = {
    subtotal: total,
    discount: Disocunt,
    shipping: ship,
    total: total + ship
  }

  var options = {
    key: "rzp_test_aJ2B5HiOYA0pSW",
    key_secret: "GqeOAPfu4b6VpP5FRqTrRQm8",
    amount: parseInt((total + ship) * 100),
    currency: "INR",
    order_receipt: 'order_rcptid_' + 'Sooraj',
    name: "QuickMart",
    description: "for testing purpose",
    handler: function (response) {
      console.log(response)
      toast.success('Payment Successful')
      const paymentId = response.razorpay_payment_id;
      const orderInfo = {
        cart: item,
        addressInfo: addressInfo,
        date: new Date().toLocaleString(
          "en-US",
          {
            month: "short",
            day: "2-digit",
            year: "numeric",
          }
        ),
        amountInfo: AmountDetails,
        email: email,
        token: userDetails?.token,
        paymentId: paymentId
      }
      SaveDB(orderInfo)
      setOrderSucess(orderInfo);
    },
    theme: {
      color: "#3399cc"
    }
  };

  const show = () => {
    var pay = new window.Razorpay(options);
    pay.open();
  }


  const MakePayment = () => {
    show();
  }

  const SaveDB = async (orderInfo) => {
    if (orderInfo.name == '' || orderInfo.email == '' || orderInfo.addressInfo.phone == '') {
      return console.log('All field required');
    }
    try {
      const res = await axios.post(Server + 'order/payment', orderInfo)
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <ScrollTop />
      {
        OrderSucess ?
          // <Invoice />
          <OrderDone />
          :
          <section className="flex items-center py-16 bg-gray-50 font-poppins  ">
            <div
              className="justify-center flex-1 max-w-4xl px-6 py-6 mx-auto bg-gray-100 rounded-md shadow-md   lg:py-10 lg:px-10">
              <div className="max-w-4xl mx-auto mb-10">
                <h2 className="mb-4 text-xl font-medium ">Here are your items:</h2>
                {
                  Cart?.map((item, i) => {
                    const { imageUrl, name, price, category, quantity } = item;

                    return (
                      <div key={i}
                        className="p-10 mb-8 bg-white rounded-md shadow relative  sm:flex sm:items-center xl:py-5 xl:px-12">
                        <a href="#" className="mr-6 md:mr-12">
                          <img className=" w-full lg:w-[80px]  h-[200px] lg:h-[80px]  object-contain  mx-auto mb-6 sm:mb-0 "
                            src={imageUrl}
                            alt="" />
                        </a>
                        <div>
                          <h1 className="inline-block mb-1 text-lg font-medium  " >
                            {name}</h1>
                          <div className="flex flex-wrap">
                            <p className="mr-4 text-sm font-medium">
                              <span className="font-medium ">Category:</span>
                              <span className="ml-2 text-gray-400 ">{category}</span>
                            </p>
                            <p className="text-sm font-medium ">
                              <span>Qty:</span>
                              <span className="ml-2 text-gray-400">{quantity}</span>
                            </p>
                          </div>
                        </div>
                        <h1 className=' absolute right-10 text-lg font-semibold text-gray-600'>Rs. {price}</h1>
                      </div>
                    )
                  })
                }
              </div>
              <div className="max-w-4xl mx-auto ">
                <h2 className="mb-4 text-xl font-medium ">Order Details:</h2>
                <div className="grid grid-cols-1 gap-8 mb-10 lg:grid-cols-3">
                  <div
                    className="flex items-center justify-between px-10 py-3 font-medium leading-8 bg-white bg-opacity-50 rounded-md shadow  font-heading">
                    <span>Shipping</span>
                    <span className="flex items-center text-lg">
                      <span className="ml-3 mr-1 ">Rs.</span>
                      <span className=" ">{ship}</span>
                    </span>
                  </div>
                  <div
                    className="relative flex items-center justify-between px-10 py-3 font-medium leading-8 bg-white bg-opacity-50 rounded-md shadow ">
                    <div
                      className="absolute right-0 flex items-center justify-center bg-blue-500 rounded-md w-14 h-14 ">
                      <div
                        className="flex items-center justify-center text-lg font-bold text-blue-500 bg-gray-100 rounded-full  w-11 h-11">
                        {Cart?.length}
                      </div>
                    </div>
                    <span className="mr-16">Products</span>
                  </div>
                  <div
                    className="flex items-center justify-between px-10 py-3 font-medium leading-8 bg-white rounded-md shadow   font-heading">
                    <span>Total</span>
                    <span className="flex items-center text-xl text-blue-500 ">
                      <span className="ml-3 mr-1 ">Rs.</span>
                      <span className="">{total + ship}</span>
                    </span>
                  </div>
                </div>

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
                      onClick={MakePayment}
                      className="flex flex-wrap justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-500 border border-blue-500 rounded-md hover:bg-blue-600 ">
                      <p>Make Payment</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
      }
    </div>
  )
}

export default Payment