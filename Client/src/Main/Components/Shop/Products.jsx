import { useContext, useEffect, useState } from "react";
import ScrollTop from "../../Constant/ScrollTo/ScrollTop";
import { CartIcon, StarIcon } from "../../../../public/SVG/IconsSvg";
import axios from "axios";
import { MyContext } from "../../Context/Context";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Products = () => {
    const [Data, setData] = useState([]);
    const [AlreadyPresent, setAlreadyPresent] = useState([])
    const context = useContext(MyContext);
    const { Server, Cart, setCart } = context;

    const FetchData = async () => {
        try {
            const res = await axios.get(Server + 'getProducts');
            const { error, message, data } = res.data;
            if (error) {
                return toast.error(message)
            }
            setData(data)
        } catch (error) {
            console.log(error);
        }
    }

    const AddCart = (item) => {
        item.quantity = 1;
        setCart([...Cart, item])
        setAlreadyPresent([...AlreadyPresent, item])
    }

    useEffect(() => {
        FetchData()
    }, [])

    console.log(AlreadyPresent);

    return (
        <div>
            <ScrollTop />
            <div className=" mx-5">
                <div className=" h-20 bg-yellow-100 ml-20 ">

                </div>
                <div className=" flex flex-wrap gap-10 justify-center">
                    {
                        Data?.map((item, i) => {
                            const { imageUrl, name, price, _id } = item;
                            const isAddedToCart = AlreadyPresent.length != 0 ? AlreadyPresent.find((item) => item._id === _id) : ''
                            return (
                                <div key={i} className="w-full max-w-xs bg-white border border-gray-200 rounded-lg shadow ">
                                    <div className=" h-60 w-full">
                                        <img className="p-8 object-contain h-full w-full rounded-t-lg  " src="../../../../Images/Home/fastrack watch.webp" alt="product image" />
                                    </div>
                                    <div className="px-5 pb-5">
                                        <Link to={'/p/' + _id}>
                                            <h5 className="text-xl  tracking-tight hover:text-blue-700 font-bold text-gray-900 ">{name}</h5>
                                        </Link>
                                        <div className="flex items-center my-3">
                                            <h2 className=" bg-green-700 font-semibold rounded text-xs py-0.5  pr-1 pl-2 w-fit gap-x-1 flex items-center text-white">
                                                <span>4.3</span>
                                                {StarIcon}
                                            </h2>
                                            <p className="text-xs ml-3 font-semibold text-gray-600 ">(73 people rated)</p>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-3xl font-bold text-gray-900 ">${price}</span>
                                            <button disabled={isAddedToCart} onClick={() => AddCart(item)} className="px-6 py-2 font-medium disabled:bg-gray-500  text-white capitalize  duration-300  bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                                                {isAddedToCart ? 'Added to Cart' : 'Add to cart'}
                                            </button>
                                        </div>
                                        {
                                            isAddedToCart ?
                                                <Link to={'/cart'} className=" bg-orange-600 text-white rounded-lg px-2 mt-3 mx-20 justify-center py-1 text-sm gap-x-2  flex items-center">Goto {CartIcon}</Link> : ''
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div >
    )
}

export default Products