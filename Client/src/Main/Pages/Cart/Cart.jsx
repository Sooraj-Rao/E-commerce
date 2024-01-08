import { useContext, useEffect, useMemo, useState } from "react"
import { CartIcon, DecrementIcon, DeteteIcon, HeartIcon, IncremnetIcon } from "../../../../public/SVG/IconsSvg"
import { MyContext } from "../../Context/Context"
import ScrollTop from "../../Constant/ScrollTo/ScrollTop"
import AreYouSure from "../../Modals/AreYouSure"
import toast from "react-hot-toast";
import { Link, useNavigate, useParams } from 'react-router-dom'
import emptyCart from '../../../../public/Images/Shop/Empty-cart.jpg'
import { Rupee } from "../../Constant/Messages/Messages"

const CartItem = () => {
  const navigate = useNavigate()
  const [Total, setTotal] = useState(null)
  const [ConfirmDelete, setConfirmDelete] = useState({
    id: null,
    confirm: false
  });
  const Disocunt = Total ? ((2 / 100) * Total).toFixed() : '';

  const context = useContext(MyContext);
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
    const RenderItem = param == 'cart' ? Cart : WishList;
    const update = RenderItem.filter((item) => item._id !== id);
    RenderItem == Cart ? setCart(update) : setWishList(update)
    setConfirmDelete({ id: null, confirm: false })
    toast.success(`Successfully removed item from ${param}`);
  }

  let Totalcount = 0;
  const CalculateTotal = () => {
    Cart.map((item) => {
      let amt = item.price * item.quantity;
      Totalcount += amt
    })
    setTotal((prev) => Totalcount)
  }

  useEffect(() => {
    ConfirmDelete.id && ConfirmDelete.confirm ? RemoveProduct(ConfirmDelete.id) : ''
    CalculateTotal()
  }, [Cart, ConfirmDelete])


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
          <Link to={'/view/' + Title} className="  capitalize flex gap-x-2 text-sm md:text-base fixed md:right-20 md:mt-5 mt-3 right-3 rounded-md bg-blue-600 font-semibold hover:bg-blue-700   text-slate-100  md:px-4 px-2 md:py-2 py-1">
            <span>
              {Title}
            </span>
            <span className=" mt-0.5">
              {
                Title == 'cart' ?
                  CartIcon :
                  HeartIcon
              }
            </span>
            <span className={` text-sm absolute  -right-3 border border-white -top-3 text-white bg-blue-500 px-2 rounded-full ${RenderItem[Title]?.length > 0 ? ' visible' : 'invisible'}`}>
              {RenderItem[Title]?.length}
            </span>
          </Link>
        </div>
        <div className="mx-auto  min-h-80  px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <header className="text-center">
              <h1 className="text-xl md:mt-0 mt-6 font-bold text-gray-900 sm:text-3xl">
                {Render?.length != 0 ? `Your ${param} Items` : `Your ${param} is Empty..Add items to ${param}`}
              </h1>
            </header>
            <div className="mt-8">
              {
                Render?.length == 0 ?
                  <div className="  flex justify-center">
                    <img src={emptyCart} alt="" className=" w-[30rem] h-[15rem]" />
                  </div> : ''
              }
              <ul className="space-y-4">
                {
                  Render?.map((item, i) => {
                    const { category, imageUrl, name, price, quantity, stock, _id } = item;
                    return (
                      <li key={i} className="flex items-center  flex-col md:flex-row  justify-between gap-4 border-b-2 py-4 ">
                        <Link to={'/p/' + name.replaceAll(' ', '-')}>
                          <div className=" flex group  md:w-[35rem] ">
                            <img
                              src={imageUrl}
                              alt=""
                              className="lg:h-28 lg:w-28 w-14 rounded object-contain mr-5"
                            />
                            <div className="mt-0.5 space-y-px  text-sm text-gray-600">
                              <h3 className="text-sm md:text-xl font-semibold capitalize text-gray-900 group-hover:text-blue-700">{name}</h3>
                              <div>
                                <h1 className="my-1  capitalize">{category}</h1>
                                <h1 className="">{stock > 0 ? <p className=" text-green-600">Item in stock</p> : <p className=" text-red-500">Item Out of stock</p>}</h1>
                                <h3 className="text-sm md:text-xl capitalize text-gray-900  my-2 font-semibold ">{Rupee} {price}</h3>
                              </div>
                            </div>
                            <div>
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
                        <button onClick={() => setConfirmDelete(({ ...ConfirmDelete, id: _id }))} className="border border-slate-300 py-2 font-semibold hover:bg-slate-200 flex gap-x-2 items-center px-2 text-sm rounded-md  text-slate-800">
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
                        <h1 className=" font-bold text-lg">{Rupee} {Total}</h1>
                      </div>

                      <div className="flex justify-between">
                        <h1>Discount</h1>
                        <h1>{Rupee} {Disocunt} <span className=" text-xs pl-2">(2%)</span>  </h1>
                      </div>

                      <div className="flex justify-between !text-base font-medium">
                        <h1>Total</h1>
                        <h1>
                          <span className="font-bold text-lg mr-3">
                            {Rupee} {Total - Disocunt}
                          </span>
                          <span className=" text-xs line-through ">{Rupee} {Total}</span>
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
                      <button
                        onClick={() => navigate('/checkout/details')}
                        className="block rounded-md bg-blue-700 px-5 py-2 font-semibold text-gray-100 transition "
                      >
                        Checkout
                      </button>
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

export default CartItem