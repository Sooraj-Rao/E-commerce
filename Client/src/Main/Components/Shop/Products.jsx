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

const Products = () => {
    const [Search, SetSearch] = useSearchParams();
    const [DisplayRow, setDisplayRow] = useState(false)
    const navigate = useNavigate();
    const filterPrice = { min: Search?.get('min'), max: Search?.get('max') };
    const categoryParam = (Search.get('category'));
    const [Data, setData] = useState([]);
    const context = useContext(MyContext);
    const { Server, AllItems } = context;



    const FetchData = async () => {
        try {
            const isParam = categoryParam ? categoryParam : 'all';
            const res = await axios.get(Server + 'getProducts/' + isParam);
            const { error, message, data } = res.data;
            if (error) {
                return toast.error(message)
            }
            if (data) {
                setData(data)
            } else {
                // return navigate('/products')
            }
        } catch (error) {
            console.log(error);
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
                console.log('Inside here');
                break;
            default:
                break;
        }

        setData([...newData]);
    }


    useEffect(() => {
        categoryParam || AllItems.length == 0 ? FetchData() : setData(AllItems);
    }, [categoryParam])

    console.log(DisplayRow);

    return (
        <div className="">
            <ScrollTop />
            <TopFilter DisplayRow={DisplayRow} setDisplayRow={setDisplayRow} SortFilter={SortFilter} setData={setData} />
            <div className=" mx-5">
                <div className=" flex flex-wrap gap-10 justify-center">
                    {
                        Data?.map((item, i) => {
                            const { imageUrl, name, price, _id, description } = item;
                            return (
                                <>
                                    <div key={i} className={`w-full group  py-4  border border-gray-200 rounded-lg shadow 
                                    ${!DisplayRow ? 'max-w-xs  min-w-[20rem]' : ' flex justify-start gap-x-10'}
                                    `}>
                                        <div className={` h-60  
                                        ${DisplayRow ? 'w-60' : 'w-full'}
                                        `}>
                                            <img className="p-2 object-contain h-full w-full rounded-t-lg  " src={imageUrl} alt="product image" />
                                        </div>
                                        <div className="px-5 pb-5 ">
                                            <h5 className="text-xl  tracking-tight group-hover:text-blue-700 font-bold text-gray-900 ">{name.length > 50 ? name.slice(0, 50) + '...' : name}</h5>
                                            <div className="flex items-center my-3">
                                                <h2 className=" bg-green-700 font-semibold rounded text-xs py-0.5  pr-1 pl-2 w-fit gap-x-1 flex items-center text-white">
                                                    <span>4.3</span>
                                                    {StarIcon}
                                                </h2>
                                                <p className="text-xs ml-3 font-semibold text-gray-600 ">(73 people rated)</p>
                                            </div>
                                            <div className={`${DisplayRow ? 'block mb-5' : 'hidden'}`}>
                                                {description}
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <span className="text-3xl font-bold text-gray-900 ">{Rupee}{price}</span>
                                                <Link to={'/p/' + name.replaceAll(' ', '-')} className="px-6 py-2 font-medium disabled:bg-gray-500  text-white capitalize  duration-300  bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                                                    View
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
            <Pagination />
        </div >
    )
}

export default Products