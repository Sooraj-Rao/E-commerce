import { useState } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { CategoryData } from '../../../../public/Constants/Data'
import { ArrowIcon } from '../../../../public/SVG/IconsSvg';

const Filter = () => {
    const [Amount, setAmount] = useState({
        from: 100, to: 1000
    })
    const [Search, setSearch] = useSearchParams();
    const location = useLocation();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAmount((prev) => ({ ...prev, [name]: value }))
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const existingParams = new URLSearchParams(location.search);
        existingParams.set('min', Amount.from);
        existingParams.set('max', Amount.to);
        setSearch(existingParams);
    };


    return (
        <>
            <section className=" sticky  left-0 w-[20rem]    overflow-hidden  font-poppins  ">
                <div className="px-4 py-4 mx-auto h-full overflow-y-auto       ">
                    <div className="flex flex-wrap  -mx-3 ">
                        <div className="w-full pr-2     lg:block  ">
                            <div className="p-4 mb-5 bg-white border border-gray-200  ">
                                <h2 className="text-2xl font-bold "> Categories</h2>
                                <div className="w-16 pb-2 mb-6 border-b border-rose-600 "></div>
                                <ul>
                                    <Link to={'/products'}>
                                        <li className="  rounded-md px-2  ">
                                            <label className={`flex items-center group py-1 pl-2 cursor-pointer rounded-md  hover:bg-slate-100 transform duration-100 hover:text-blue-700  
                                                        ${!Search.get('category') ? ' text-blue-800 bg-slate-200' : ' text-gray-800'}
                                                        `}>
                                                <span className=" text-base  ">All</span>
                                            </label>
                                        </li>
                                    </Link>
                                    {
                                        CategoryData.map((item, i) => {
                                            const Item = Object.keys(item)
                                            return (
                                                <Link key={i} to={'/products?category=' + Item}  >
                                                    <li className="  rounded-md px-2  ">
                                                        <label className={`flex items-center group py-1 pl-2 cursor-pointer rounded-md  hover:bg-slate-100 transform duration-100 hover:text-blue-700  
                                                        ${Search.get('category') == Item ? ' text-blue-800 bg-slate-200' : ' text-gray-800'}
                                                        `}>
                                                            <span className=" text-base  ">{Item}</span>
                                                        </label>
                                                    </li>
                                                </Link>

                                            )
                                        })
                                    }
                                </ul>
                            </div>
                            <div className="p-4 mb-5 bg-white border border-gray-200  ">
                                <h2 className="text-2xl font-bold ">Price</h2>
                                <div className="w-16 pb-2 mb-6 border-b border-rose-600 "></div>
                                <div>
                                    <h1 className=' -mt-2  text-center text-blue-700 '>Select Price range</h1>
                                    <div className=' flex justify-between'>
                                        <h1>Min</h1>
                                        <h1>Max</h1>
                                    </div>
                                    <form onSubmit={handleSubmit} className=' text-center'>
                                        <div className="flex  justify-between ">
                                            <input type='number' name='from' value={Amount.from} onChange={handleChange} className=" pl-2 w-20 border-2 rounded   outline-none focus:ring-blue-300 focus:border-blue-400 focus:ring-1  border-slate-400" />
                                            <input type='number' name='to' value={Amount.to} onChange={handleChange} className=" pl-2 w-20 border-2 rounded  outline-none focus:ring-blue-300 focus:border-blue-400 focus:ring-1  border-slate-400" />
                                        </div>
                                        <button className='  rounded-md  px-4 mt-4 bg-blue-600 text-white py-1'>Go</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default Filter