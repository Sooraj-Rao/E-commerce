import Filter from "../../Components/Shop/Filter"
import Products from "../../Components/Shop/Products"

const Shop = () => {

    return (
        <div>
            <div className=" flex " >
                <div className=" md:block hidden">
                    <Filter />
                </div>
                <div className=" md:w-[calc(100%-20rem)] w-full ">
                    <Products />
                </div>
            </div>
        </div>
    )
}

export default Shop