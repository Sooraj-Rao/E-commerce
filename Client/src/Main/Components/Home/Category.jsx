import { Link } from "react-router-dom";
import { CategoryData } from "../../../../public/Constants/Data"

const Category = () => {
    return (
        <div className=" py-2 mx-5 my-5">
            <h1 className=" text-2xl pb-4 font-semibold ">Explore Categories</h1>
            <div className=" md:h-80 h-fit w-full flex overflow-x-scroll pb-10 hide-bar">
                <div className="  flex flex-nowrap gap-5 ">
                    {
                        CategoryData.map((item, i) => {
                            let image = Object.values(item);
                            let title = Object.keys(item);
                            return (
                                <Link to={`/products?category=${title}`} key={i} className="  cursor-pointer hover:shadow-xl md:h-full h-28 md:w-64 w-20 md:py-12 p-2 md:px-16 rounded-md  bg-gray-100 flex flex-col items-center gap-5 text-center ">
                                    <img loading="lazy" data-nimg="fill" className=" md:h-3/4 md:w-full w-1/3 object-contain" src={image} alt="" />
                                    <h1 className=" md:text-xl text-sm">{title}</h1>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Category