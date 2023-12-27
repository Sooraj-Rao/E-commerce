import { Link } from "react-router-dom";
import { CategoryData } from "../../../../public/Constants/Data"

const Category = () => {
    return (
        <div className=" py-2 mx-5 my-5">
            <h1 className=" text-2xl pb-4 font-semibold ">Explore Categories</h1>
            <div className=" h-80 w-full flex overflow-x-scroll pb-10 hide-scrollbar">
                <div className="  flex flex-nowrap gap-5 ">
                    {
                        CategoryData.map((item, i) => {
                            let image = Object.values(item);
                            let title = Object.keys(item);
                            return (
                                <Link to={`/category/${title}`} key={i} className=" cursor-pointer hover:shadow-xl h-full w-64 py-12 rounded-md px-16 bg-gray-100 flex flex-col gap-5 text-center ">
                                    <img className=" h-3/4 w-full" src={image} alt="" />
                                    <h1 className=" text-xl">{title}</h1>
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