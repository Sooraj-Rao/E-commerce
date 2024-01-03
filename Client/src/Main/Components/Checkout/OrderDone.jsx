import { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MyContext } from '../../Context/Context'

const OrderDone = () => {
  const navigate = useNavigate()
  const context = useContext(MyContext);
  const { setCart } = context;
  
  useEffect(() => {
    setCart([])
  }, [])


  return (
    <div className=" top-0 fixed w-screen">
      <section className="flex items-center h-screen bg-slate-100 font-poppins ">
        <div className="justify-center flex-1 px-6 py-16 mx-auto lg:py-16 md:px-7">
          <div
            className="max-w-xl p-8 mx-auto border rounded-md bg-gradient-to-r relative from-blue-300 to-gray-300 ">
            <p className="mb-8 text-lg font-medium text-gray-700 ">Order Number: #09182762611</p>
            <h2 className="mb-4 text-4xl font-extrabold tracking-wide ">Thank you for your order !
            </h2>
            <div className="flex flex-wrap justify-around mb-6 mt-10">
              <button
                onClick={() => navigate('/products')}
                className="inline-flex  justify-center w-full px-4 py-2 text-base font-semibold text-gray-100 bg-blue-600 rounded-md shadow md:w-fit md:ml-2  focus:outline-none focus:ring-2  focus:ring-offset-2  focus:ring-offset-gray-100  focus:ring-blue-500 ">
                Shop More
              </button>
              <button
                onClick={() => navigate('/checkout/invoice')}
                className="inline-flex justify-center w-full px-4 py-2 text-base font-semibold text-gray-100 bg-blue-600 rounded-md shadow md:w-fit md:ml-2  focus:outline-none focus:ring-2  focus:ring-offset-2  focus:ring-offset-gray-100  focus:ring-blue-500 ">
                View Invoice
              </button>
            </div>
            <Link to={'/'} className=' text-blue-900 underline absolute  '>Home</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default OrderDone