import { useContext, useEffect, useMemo, useState } from "react"
import { CartIcon, DecrementIcon, DeteteIcon, HeartIcon, IncremnetIcon } from "../../../../public/SVG/IconsSvg"
import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "../../Redux/CartSlice"
import { MyContext } from "../../Context/Context"
import ScrollTop from "../../Constant/ScrollTo/ScrollTop"
import AreYouSure from "../../Modals/AreYouSure"
import toast from "react-hot-toast";
import { Link, useParams } from 'react-router-dom'

const Cart = () => {
  const context = useContext(MyContext);
  const [Total, setTotal] = useState(null)
  const [ConfirmDelete, setConfirmDelete] = useState({
    id: null,
    confirm: false
  });
  const Disocunt = Total ? ((2 / 100) * Total).toFixed() : '';

  const { Server, UserItems, setUserItems, Cart, setCart, WishList, setWishList } = context;

  const { param } = useParams();
  let Title = param == 'cart' ? 'wishlist' : 'cart'
  const RenderItem = { 'cart': Cart, 'wishlist': WishList };
  const Render = RenderItem[param];
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
    if (param == 'cart') {

      const update = Cart.filter((item) => item._id !== id);
      setCart(update)
      setConfirmDelete({ id: null, confirm: false })
      toast.success(`Successfully removed item from ${param}`);
    } else {
      const update = WishList.filter((item) => item._id !== id);
      setWishList(update)
      setConfirmDelete({ id: null, confirm: false })
      toast.success(`Successfully removed item from ${param}`)
    }
  }
  const CalculateTotal = () => {
    let Total = 0;
    setTotal(() => {
      const amount = Cart.map((item, i) => {
        let amt = item.price * item.quantity;
        Total += amt
        return Total
      })
      return Total
    })
  }

  useMemo(() => {
    ConfirmDelete.id && ConfirmDelete.confirm ? RemoveProduct(ConfirmDelete.id) : ''
    CalculateTotal()
  }, [Cart, ConfirmDelete.confirm])

  const DeleteCartItemProps = {
    from: 'cart',
    message: `remove from ${param}`,
    setConfirmDelete: setConfirmDelete
  }
  return (
    <div>
      <ScrollTop />
      <section>
        {
          ConfirmDelete.id ?
            <AreYouSure {...DeleteCartItemProps} /> : ''
        }
        <div>
          <Link to={'/view/' + Title} className="  capitalize flex gap-x-2 text-lg fixed right-5 mt-5 rounded-md bg-gray-300  text-slate-700 font-semibold px-4 py-2">
            <span>
              {Title}
            </span>
            <span className=" mt-1">
              {
                Title == 'cart' ?
                  CartIcon :
                  HeartIcon
              }
            </span>
            <span className={` absolute text-base -right-3 -top-3 text-white bg-blue-500 px-2 rounded-full ${RenderItem[Title]?.length > 0 ? ' visible' : 'invisible'}`}>
              {RenderItem[Title]?.length}
            </span>
          </Link>
        </div>
        <div className="mx-auto max-w-screen-xl min-h-80  px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <header className="text-center">
              <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">
                {Render?.length != 0 ? `Your ${param} Items` : `Your ${param} is Empty..Add items to ${param}`}
              </h1>
            </header>
            <div className="mt-8">
              <ul className="space-y-4">
                {
                  Render?.map((item, i) => {
                    const { category, imageUrl, name, price, quantity, stock, _id } = item;
                    return (
                      <li key={i} className="flex items-center  justify-between gap-4">
                        <Link to={'/p/' + _id}>
                          <div className=" flex group">
                            <img
                              src="../../../../Images/Home/apple-watch.png"
                              alt=""
                              className="h-28 w-28 rounded object-contain mr-5"
                            />
                            <div className="mt-0.5 space-y-px  text-sm text-gray-600">
                              <h3 className="text-sm md:text-xl capitalize text-gray-900 group-hover:text-blue-500">{name}</h3>
                              <div>
                                <h1 className="my-1  capitalize">{category}</h1>
                                <h1 className="">{stock > 0 ? <p className=" text-green-500">Item in stock</p> : <p className=" text-red-500">Item Out of stock</p>}</h1>
                              </div>
                            </div>
                            <div>
                              <h3 className="text-sm md:text-xl capitalize text-gray-900 mt-5 ml-10 ">Rs.{price}</h3>
                            </div>
                          </div>
                        </Link>
                        {
                          Title !== 'cart' &&
                          <div className="flex items-center">
                            <button onClick={() => handleCart(_id, '-')} className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 " type="button">
                              {IncremnetIcon}
                            </button>
                            <div>
                              <h1 className=" mx-2">{quantity}</h1>
                            </div>
                            <button onClick={() => handleCart(_id, '+')} className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 -" type="button">
                              {DecrementIcon}
                            </button>
                          </div>
                        }
                        <button onClick={() => setConfirmDelete(({ ...ConfirmDelete, id: _id }))} className=" bg-red-500 hover:bg-red-600 py-2 flex gap-x-2 items-center px-2 text-sm rounded text-white">
                          <span>{DeteteIcon}</span>
                          <span>Remove</span>
                        </button>
                      </li>
                    )
                  })
                }

              </ul>
              {Title !== 'cart' &&
                Cart?.length != 0 ?
                <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
                  <div className="w-screen max-w-lg space-y-4">
                    <div className="space-y-0.5 text-sm text-gray-700">
                      <div className="flex justify-between">
                        <h1>Subtotal</h1>
                        <h1 className=" font-bold text-lg">Rs. {Total}</h1>
                      </div>

                      <div className="flex justify-between">
                        <h1>Discount</h1>
                        <h1>{Disocunt} <span className=" text-xs pl-2">(2%)</span>  </h1>
                      </div>

                      <div className="flex justify-between !text-base font-medium">
                        <h1>Total</h1>
                        <h1>
                          <span className="font-bold text-lg mr-3">
                            Rs. {Total - Disocunt}
                          </span>
                          <span className=" text-xs line-through ">{Total}</span>
                        </h1>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <span
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
                      </span>
                    </div>

                    <div className="flex justify-end">
                      <Link
                        to={'/checkout'}
                        className="block rounded bg-blue-700 px-5 py-2 text-sm text-gray-100 transition "
                      >
                        Checkout
                      </Link>
                    </div>
                  </div>
                </div> : ''
              }
            </div>

          </div>
        </div>
      </section >
    </div >
  )
}

export default Cart