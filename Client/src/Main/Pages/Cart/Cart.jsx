import { useContext, useEffect, useState } from "react"
import { DecrementIcon, IncremnetIcon } from "../../../../public/SVG/IconsSvg"
import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "../../Redux/CartSlice"
import { MyContext } from "../../Context/Context"

const Cart = () => {
  const context = useContext(MyContext);
  const { Server, UserItems, setUserItems, Cart, setCart } = context;


  const handleCart = (id, evt) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) => {
        if (item._id === id) {
          if (evt === '+') {
            return { ...item, quantity: item.quantity < 10 ? item.quantity + 1 : item.quantity };
          } else if (evt === '-') {
            if (item.quantity > 1) {
              return { ...item, quantity: item.quantity - 1 };
            }
          } 
        }
        return item;
      });
      return updatedCart;
    });
  };

  const RemoveProduct = (id) => {
    const update = Cart.filter((item) => item._id !== id);
    setCart(update)
  }




  return (
    <div>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <header className="text-center">
              <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">Your Cart</h1>
            </header>
            <div className="mt-8">
              <ul className="space-y-4">
                {
                  Cart?.map((item, i) => {
                    const { category, imageUrl, name, price, quantity, stock, _id } = item;
                    return (
                      <li key={i} className="flex items-center justify-between gap-4">
                        <div className=" flex">
                          <img
                            src="../../../../Images/Home/apple-watch.png"
                            alt=""
                            className="h-20 w-20 rounded object-contain mr-5"
                          />

                          <div className="mt-0.5 space-y-px  text-sm text-gray-600">
                            <h3 className="text-sm md:text-xl capitalize text-gray-900">{name}</h3>
                            <div>
                              <h1 className="my-1  capitalize">{category}</h1>
                              <h1 className="">{stock > 0 ? <p className=" text-green-500">Item in stock</p> : <p className=" text-red-500">Item Out of stock</p>}</h1>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center">
                          <button onClick={() => handleCart(_id, '-')} className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 " type="button">
                            <span className="sr-only">Quantity button</span>
                            {IncremnetIcon}
                          </button>
                          <div>
                            <h1 className=" mx-2">{quantity}</h1>
                          </div>
                          <button onClick={() => handleCart(_id, '+')} className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 -" type="button">
                            <span className="sr-only">Quantity button</span>
                            {DecrementIcon}
                          </button>
                        </div>
                        <button onClick={() => RemoveProduct(_id)} className=" bg-red-500 hover:bg-red-600 py-1 px-2 rounded text-white">Remove</button>
                      </li>
                    )
                  })
                }

              </ul>

              <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
                <div className="w-screen max-w-lg space-y-4">
                  <dl className="space-y-0.5 text-sm text-gray-700">
                    <div className="flex justify-between">
                      <dt>Subtotal</dt>
                      <dd>£250</dd>
                    </div>

                    <div className="flex justify-between">
                      <dt>VAT</dt>
                      <dd>£25</dd>
                    </div>

                    <div className="flex justify-between">
                      <dt>Discount</dt>
                      <dd>-£20</dd>
                    </div>

                    <div className="flex justify-between !text-base font-medium">
                      <dt>Total</dt>
                      <dd>£200</dd>
                    </div>
                  </dl>

                  <div className="flex justify-end">
                    {/* <span
                        className="inline-flex items-center justify-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-indigo-700"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="-ms-1 me-1.5 h-4 w-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                          />
                        </svg>
  
                        <p className="whitespace-nowrap text-xs">2 Discounts Applied</p>
                      </span> */}
                  </div>

                  <div className="flex justify-end">
                    <a
                      href="#"
                      className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
                    >
                      Checkout
                    </a>
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

export default Cart