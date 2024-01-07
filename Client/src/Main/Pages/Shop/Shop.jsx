import Filter from "../../Components/Shop/Filter"
import Products from "../../Components/Shop/Products"

const Shop = () => {

    return (
        <div>
            <div className=" flex " >
                <Filter />
                <div className=" w-[calc(100%-20rem)] ">
                    <Products />
                </div>
            </div>
        </div>
    )
}

export default Shop