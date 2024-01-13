import { useContext, useEffect, useMemo, useState } from "react";
import ScrollTop from "../../Constant/ScrollTo/ScrollTop";
import { CartIcon, StarIcon } from "../../../../public/SVG/IconsSvg";
import axios from "axios";
import { MyContext } from "../../Context/Context";
import toast from "react-hot-toast";
import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom";
import TopFilter from "./TopFilter";
import Pagination from './Pagination'
import { Rupee } from '../../Constant/Messages/Messages'
import SpinLoader from '../../Animation/Spinner/SpinLoader'

const Products = () => {
    const [Search, SetSearch] = useSearchParams();
    const [DisplayRow, setDisplayRow] = useState(false);
    const [Loader, setLoader] = useState(false);
    const navigate = useNavigate();
    const filterPrice = { min: Search?.get('min'), max: Search?.get('max') };
    const categoryParam = (Search.get('category'));
    const [Data, setData] = useState([]);
    const context = useContext(MyContext);
    const { Server, AllItems } = context;



    const FetchData = async () => {
        try {
            setLoader(true);
            const isParam = categoryParam ? categoryParam : 'all';
            const res = await axios.get(Server + 'getProducts/' + isParam);
            const { error, message, data } = res.data;
            if (error) {
                window.location.href = '/';
                return toast.error('Falied to get Data')
            }
            if (data) {
                setData(data)
            } else {
                window.location.href = '/';
            }
            setLoader(false);
        } catch (error) {
            setLoader(false);
            window.location.href = '/';
            return toast.error('Falied to get Data')
        }
    }

    const SortFilter = (sort) => {
        let newData = [...Data];
        switch (sort) {
            case 'latest':
                newData = newData.sort((a, b) => {
                    const dateA = new Date(a.createdAt);
                    const dateB = new Date(b.createdAt);
                    return dateB - dateA;
                });
                break;
            case 'popular':
                break;
            case 'lowTo':
                newData = newData.sort((a, b) => a.price - b.price);
                break;
            case 'highTo':
                newData = newData.sort((a, b) => b.price - a.price);
                break;
            case 'PriceF':
                // newData = newData.sort((a, b) => a.price - b.price);
                break;
            default:
                break;
        }

        setData([...newData]);
    }


    useEffect(() => {
        categoryParam || AllItems?.length == 0 ? FetchData() : setData(AllItems);
    }, [categoryParam])


    return (
        <div className="">
            <ScrollTop />
            <TopFilter DisplayRow={DisplayRow} setDisplayRow={setDisplayRow} SortFilter={SortFilter} setData={setData} />
            <div className=" md:mx-5 mx-1">
                <div className=" flex flex-wrap md:gap-10 gap-3 justify-center">
                    {
                        Loader ?
                            <div  className=" py-10">
                                <SpinLoader />
                            </div>
                            :
                            Data?.map((item, i) => {
                                const { imageUrl, name, price, _id, description, stock } = item;
                                return (
                                    <div key={i}>
                                        <div className={`w-full group  py-4 flex-grow cursor-default border border-gray-200 rounded-lg shadow 
                                    ${!DisplayRow ? 'sm:w-[20rem] w-[9rem]' : ' md:flex md:justify-start md:px-2  '}
                                    `}>
                                            <div className={` flex justify-center 
                                        
                                        `}>
                                                <img className={` w-full h-60
                                              ${DisplayRow ? 'md:min-w-60' : 'md:w-60'}
                                         object-contain   `} src={imageUrl} alt="product image" />
                                            </div>
                                            <div className="md:px-5 px-2 pb-5 ">
                                                <h5 className="lg:text-xl sm:text-lg text-sm  tracking-tight group-hover:text-blue-700 font-bold text-gray-900 ">{name.length > 50 ? name.slice(0, 50) + '...' : name}</h5>
                                                <div className="flex items-center my-3">
                                                    <h2 className=" bg-green-700 font-semibold rounded text-xs py-0.5  pr-1 pl-2 w-fit gap-x-1 flex items-center text-white">
                                                        <span>4.3</span>
                                                        {StarIcon}
                                                    </h2>
                                                    <p className="text-xs ml-3 font-semibold text-gray-600 ">(73 people rated)</p>
                                                </div>
                                                <div className={`${DisplayRow ? 'block mb-5' : 'hidden'}`}>
                                                    <h1>
                                                        {description}
                                                    </h1>
                                                    <h1 className=" my-3">
                                                        {stock > 0 ? <span className=" text-green-800 font-medium">Item Available in Stock</span> : <span className=" text-red-400">Out in Stock</span>}
                                                    </h1>
                                                </div>
                                                <div className="flex items-center justify-between">
                                                    <span className="md:text-3xl text-sm font-bold text-gray-900 ">{Rupee}{price}</span>
                                                    <Link to={'/p/' + name.replaceAll(' ', '-')} className="md:px-6 px-2 py-1 md:py-2 text-xs font-medium md:text-base   text-white   duration-300  bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                                                        View
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                    }
                </div>
            </div>
            {/* <Pagination /> */}
        </div >
    )
}

export default Products