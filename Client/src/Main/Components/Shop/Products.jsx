import { useContext, useEffect, useState } from "react";
import ScrollTop from "../../Constant/ScrollTo/ScrollTop";
import { CartIcon, StarIcon } from "../../../../public/SVG/IconsSvg";
import axios from "axios";
import { MyContext } from "../../Context/Context";
import toast from "react-hot-toast";
import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom";

const Products = () => {
    const [Search, SetSearch] = useSearchParams();
    const navigate = useNavigate()
    const categoryParam = (Search.get('category'));
    const [Data, setData] = useState([]);
    const context = useContext(MyContext);
    const { Server } = context;

    const FetchData = async () => {
        try {
            const isParam = categoryParam ? categoryParam : 'all';
            const res = await axios.get(Server + 'getProducts/' + isParam);
            const { error, message, data } = res.data;
            if (error) {
                return toast.error(message)
            }
            console.log(data, message);
            if (data) {
                setData(data)
            } else {
                // return navigate('/products')
            }
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        FetchData()
    }, [Search])


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
                            return (
                                <div key={i} className="w-full group  max-w-xs  min-w-[20rem] bg-white border border-gray-200 rounded-lg shadow ">
                                    <div className=" h-60 w-full bg-sblack">
                                        <img className="p-2 object-contain h-full w-full rounded-t-lg  " src={imageUrl} alt="product image" />
                                    </div>
                                    <div className="px-5 pb-5">
                                        <h5 className="text-xl  tracking-tight group-hover:text-blue-700 font-bold text-gray-900 ">{name.length > 50 ? name.slice(0, 50) + '...' : name}</h5>
                                        <div className="flex items-center my-3">
                                            <h2 className=" bg-green-700 font-semibold rounded text-xs py-0.5  pr-1 pl-2 w-fit gap-x-1 flex items-center text-white">
                                                <span>4.3</span>
                                                {StarIcon}
                                            </h2>
                                            <p className="text-xs ml-3 font-semibold text-gray-600 ">(73 people rated)</p>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-3xl font-bold text-gray-900 ">${price}</span>
                                            <Link to={'/p/' + name.replaceAll(' ', '-')} className="px-6 py-2 font-medium disabled:bg-gray-500  text-white capitalize  duration-300  bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                                                View
                                            </Link>
                                        </div>
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