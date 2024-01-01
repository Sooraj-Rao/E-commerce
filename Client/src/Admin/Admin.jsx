import { useParams } from "react-router-dom";
import Navbar from "./Navbar"
import Users from "./Routes/Users";
import Order from "./Routes/Order";
import Bills from "./Routes/Bills";
import Products from "./Routes/Products";
import AddProduct from "./Routes/AddProduct";
import { Toaster } from "react-hot-toast"
import ScrollTop from '../Main/Constant/ScrollTo/ScrollTop'

const Admin = () => {
    const { route } = useParams()
    const AllRoutes = {
        home: <div className="h-80">Welcome....</div>,
        users: <Users />,
        addProduct: <AddProduct />,
        orders: <Order />,
        bills: <Bills />,
        products: <Products />
    }
    let component = AllRoutes[route] || <p>Page Not found</p>
    return (
        <div>
            <ScrollTop />
            <Navbar />
            {component}
        </div>
    )
}

export default Admin