import { Toaster } from "react-hot-toast"
import Filter from "../../Components/Shop/Filter"
import Products from "../../Components/Shop/Products"

const Shop = () => {
    return (
        <div>
             {/* <Toaster
                position='top-right'
            /> */}
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