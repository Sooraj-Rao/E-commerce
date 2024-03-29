import { Link, useNavigate } from "react-router-dom"
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { MyContext } from '../../Context/Context'
import toast from "react-hot-toast";
import { StarIcon } from '../../../../public/SVG/IconsSvg'
import { Rupee } from '../../Constant/Messages/Messages'
import SpinLoader from '../../Animation/Spinner/SpinLoader'

const Latest = () => {
    const navigate = useNavigate()
    const context = useContext(MyContext);
    const { Server, AllItems } = context;

    const Latest = AllItems?.filter((item, i) => {
        return item?.name?.includes('p')
    })
    return (
        <div className=" mx-5 ">
            <img src="../../../../Images/Home/banner2.jpg" alt="" />
            <h1 className=" font-semibold text-2xl pt-8 pb-2 ">Our Lastest Collection</h1>
            <h1 className=" border border-blue-800 w-32 mb-10"></h1>
            <div className=" grid grid-cols-2 md:grid-cols-4  gap-10 justify-center">
                {
                    Latest?.length==0?
                    <SpinLoader/>
                    :
                    Latest?.slice(0, 8).map((item, i) => {
                        const { name, price, imageUrl, _id } = item;
                        return (
                            <Link to={'/p/' + name.replaceAll(' ', '-')} key={i} className="w-full max-w-xs group     border border-gray-300 rounded-lg  ">
                                <div className=" flex justify-center  w-full h-60">
                                    <img loading="lazy" className="p-8 rounded-t-lg  group-hover:scale-105 hover:duration-500 duration-500  w-full h-full object-contain" src={imageUrl} alt="product image" />
                                </div>
                                <div className="px-5 pb-5">
                                    <div className=" group-hover:text-blue-600 text-gray-900 ">
                                        <h5 className="lg:text-xl sm:text-lg text-sm font-semibold tracking-tight capitalize ">{name}</h5>
                                    </div>
                                    <div className=" py-2">
                                        <h2 className=" bg-green-700 font-semibold rounded text-xs py-0.5  pr-1 pl-2 w-fit gap-x-1 flex items-center text-white">
                                            <span>4.3</span>
                                            {StarIcon}
                                        </h2>
                                    </div>
                                    <div className="flex items-center justify-between ">
                                        <span className="lg:text-3xl sm:text-lg text-base font-bold text-gray-900 ">{Rupee} {price}</span>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
            <div className=" text-center mt-7">
                <button onClick={() => navigate('/products')} className=" bg-blue-500 hover:bg-blue-600 font-medium text-base text-white py-3 px-5 rounded-lg text-center">View more Products</button>
            </div>
        </div>
    )
}

export default Latest