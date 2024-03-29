import { useContext, useEffect, useMemo, useState } from "react"
import { CartIcon, DecrementIcon, HeartIcon, IncremnetIcon, StarIcon } from "../../../../public/SVG/IconsSvg"
import toast, { Toaster } from "react-hot-toast"
import axios from 'axios'
import { MyContext } from "../../Context/Context"
import { Link, useParams, useSearchParams } from "react-router-dom"
import ScrollTop from "../../Constant/ScrollTo/ScrollTop"
import { Rupee } from "../../Constant/Messages/Messages"
import SpinLoader from '../../Animation/Spinner/SpinLoader'

const ProductInfo = () => {
    const { item } = useParams();
    const [Loader, setLoader] = useState(false)
    const [quantity, setQuantity] = useState(1);
    const [Data, setData] = useState(null)
    const [IsPresent, setIsPresent] = useState({
        cart: false, wish: false
    })

    const context = useContext(MyContext);
    const { Server, UserItems, setUserItems, Cart, setCart, WishList, setWishList } = context;


    const AddCart = (item) => {
        item.quantity = quantity;
        setCart([...Cart, item])
    }

    const AddWishList = (item) => {
        const IsWishList = WishList.find((prod) => prod._id === item._id);
        if (IsWishList) {
            const RemoveWish = WishList.filter((prod) => prod._id !== item._id);
            setWishList(RemoveWish)
            toast.success('Removed from WishList')
        } else {
            setWishList([...WishList, item])
            toast.success('Added to  WishList')
        }
    }


    const FetchProduct = async () => {
        try {
            setLoader(true);
            const res = await axios.get(Server + `productDetail/${item}`);
            setLoader(false);
            const { error, message, data } = res.data;
            if (error) {
                toast.error(message)
                setTimeout(() => {
                    window.history.back()
                }, 2000);
            }
            setData(data);
        } catch (error) {
            setLoader(false);
            toast.error('Failed to load data!');
            window.history.back()
        }
    }

    const CheckIsPresent = () => {
        const IsCart = Cart.find((item) => item._id == Data?._id);
        const IsWishList = WishList.find((item) => item._id == Data?._id);
        setIsPresent({ cart: IsCart ? true : false, wish: IsWishList ? true : false })
    }

    useEffect(() => {
        !Data ? FetchProduct() : '';
        CheckIsPresent();
    }, [Cart, WishList, item, Data])

    const { description, imageUrl, name, price, stock, _id } = Data ? Data : ''


    return (
        <div>
            <ScrollTop />
            <section className="overflow-hidden bg-white py-4  font-poppins ">
                <div className="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
                    {
                        Loader ?
                            <div className=" py-32">
                                <SpinLoader />
                            </div>
                            :
                            <div className="flex flex-wrap -mx-4">
                                <div className="w-full px-4 md:w-1/3 ">
                                    <div className="sticky top-0 z-50 overflow-hidden ">
                                        <div className="relative mb-6 lg:mb-10 lg:h-[20rem] px-10 ">
                                            <img src={imageUrl} alt=""
                                                className=" object-contain w-full lg:h-full   " />
                                        </div>
                                        {/* <div className="flex-wrap hidden md:flex ">
                            <div className="w-1/2 p-2 sm:w-1/4">
                                <a href="#"
                                    className="block border border-blue-300  hover:border-blue-300">
                                    <img src="https://i.postimg.cc/PqYpFTfy/pexels-melvin-buezo-2529148.jpg" alt=""
                                        className="object-cover w-full lg:h-20" />
                                </a>
                            </div>
                            <div className="w-1/2 p-2 sm:w-1/4">
                                <a href="#"
                                    className="block border border-transparent  hover:border-blue-300">
                                    <img src="https://i.postimg.cc/PqYpFTfy/pexels-melvin-buezo-2529148.jpg" alt=""
                                        className="object-cover w-full lg:h-20" />
                                </a>
                            </div>
                            <div className="w-1/2 p-2 sm:w-1/4">
                                <a href="#"
                                    className="block border border-transparent  hover:border-blue-300">
                                    <img src="https://i.postimg.cc/PqYpFTfy/pexels-melvin-buezo-2529148.jpg" alt=""
                                        className="object-cover w-full lg:h-20" />
                                </a>
                            </div>
                            <div className="w-1/2 p-2 sm:w-1/4">
                                <a href="#"
                                    className="block border border-transparent  hover:border-blue-300">
                                    <img src="https://i.postimg.cc/PqYpFTfy/pexels-melvin-buezo-2529148.jpg" alt=""
                                        className="object-cover w-full lg:h-20" />
                                </a>
                            </div>
                        </div> */}
                                    </div>
                                </div>
                                <div className="w-full px-4 md:w-2/3 ">
                                    <div className="lg:pl-20">
                                        <div className="mb-8 ">
                                            <h2 className="max-w-xl mt-2 mb-6 text-2xl font-bold  md:text-4xl">{name}</h2>
                                            <div className="flex items-center mb-6">
                                                <h2 className=" bg-green-700 font-semibold rounded text-xs py-0.5  pr-1 pl-2 w-fit gap-x-1 flex items-center text-white">
                                                    <span>4.3</span>
                                                    {StarIcon}
                                                </h2>
                                                <p className="text-xs ml-3 font-semibold text-gray-600 ">(73 people ratsed)</p>
                                            </div>
                                            <p className="max-w-md mb-8 text-gray-700 ">{description} </p>
                                            <p className="inline-block mb-8 text-4xl font-bold text-gray-700  ">
                                                <span>{Rupee}{price}</span>
                                                <span
                                                    className="text-base ml-3 font-normal text-gray-500 line-through ">{Rupee}{price + 220 * 5}</span>
                                            </p>
                                            <p className="text-green-600 ">{stock} in stock</p>
                                        </div>

                                        <div className={`flex items-center my-10 ${IsPresent.cart ? 'invisible' : 'visible'} `}>
                                            <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)} className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 " type="button">
                                                <span className="sr-only">Quantity button</span>
                                                {IncremnetIcon}
                                            </button>
                                            <div>
                                                <h1 className=" mx-2">{quantity}</h1>
                                            </div>
                                            <button onClick={() => setQuantity(quantity < 10 ? quantity + 1 : 10)} className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 -" type="button">
                                                <span className="sr-only">Quantity button</span>
                                                {DecrementIcon}
                                            </button>
                                        </div>
                                        <div className="flex  items-center -mx-4 ">
                                            <div className="w-full px-4 mb-4 flex gap-x-2 lg:w-2/3  lg:mb-0">
                                                <button disabled={IsPresent.cart} onClick={() => AddCart(Data)} className="px-6 py-2 font-semibold  disabled:bg-gray-500  text-white capitalize  duration-300  bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                                                    {IsPresent.cart ? 'Added to Cart' : 'Add to cart'}
                                                </button>
                                                {
                                                    IsPresent.cart ?
                                                        <Link to={'/view/cart'} className=" bg-orange-600 text-white  rounded-lg px-2 font-semibold gap-x-2  flex items-center">Goto {CartIcon}</Link> : ''
                                                }
                                            </div>
                                            <div className="w-full px-4 mb-4 lg:mb-0 lg:w-1/2">
                                                <button onClick={() => AddWishList(Data)} className={`px-6 py-2 font-medium   bg-gray-200   hover:bg-gray-300 ${IsPresent.wish ? 'text-pink-500' : 'text-gray-400'}   rounded-lg `}>
                                                    {HeartIcon}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    }
                </div>
            </section>
        </div>
    )
}

export default ProductInfo