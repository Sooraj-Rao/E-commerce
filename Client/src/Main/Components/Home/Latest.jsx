import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { addToCart } from "../../Redux/CartSlice";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { MyContext } from '../../Context/Context'
import toast from "react-hot-toast";
import { StarIcon } from '../../../../public/SVG/IconsSvg'


const Latest = () => {
    // const dispatch = useDispatch();
    // const cartItems = useSelector((store) => store.cart)
    // const handleAdd = (item) => {
    //     dispatch(addToCart(item))
    //     console.log(cartItems);
    // }

    const [Data, setData] = useState([]);
    const context = useContext(MyContext);
    const { Server } = context;

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

    useEffect(() => {
        FetchData()
    }, [])

    return (
        <div className=" mx-5">
            <h1 className=" font-semibold text-2xl pb-8 ">Our Lastest Collection</h1>
            <div className=" flex flex-wrap gap-10 justify-center">
                {
                    Data?.map((item, i) => {
                        const { name, price, imageUrl, _id } = item;
                        return (
                            <Link to={'/p/' + _id} key={i} className="w-full max-w-xs group     border border-gray-300 rounded-lg  ">
                                <div className=" flex justify-center">
                                    <img className="p-8 rounded-t-lg group-hover:scale-105 hover:duration-500 duration-500 h-52 w-44" src={imageUrl} alt="product image" />
                                </div>
                                <div className="px-5 pb-5">
                                    <div className=" group-hover:text-blue-600 text-gray-900 ">
                                        <h5 className="text-xl font-semibold tracking-tight capitalize ">{name}</h5>
                                    </div>
                                    <div>
                                        <h2 className=" bg-green-700 font-semibold rounded text-xs py-0.5  pr-1 pl-2 w-fit gap-x-1 flex items-center text-white">
                                            <span>4.3</span>
                                            {StarIcon}
                                        </h2>
                                    </div>
                                    <div className="flex items-center justify-between ">
                                        <span className="text-3xl font-bold text-gray-900 ">${price}</span>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Latest