import Filter from "../../Components/Shop/Filter"
import Products from "../../Components/Shop/Products"

const Shop = () => {
    return (
        <div>
            <div >
                <Filter />
                <div className=" ml-64">
                    <Products />
                </div>
            </div>
        </div>
    )
}

export default Shop