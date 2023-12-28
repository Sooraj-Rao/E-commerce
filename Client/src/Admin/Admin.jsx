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
            <Toaster
                position='top-center'
                toastOptions={{
                    // Define default options
                    className: '',
                    duration: 5000,
                    style: {
                        background: 'black',
                        color: 'white',
                    },

                    // Default options for specific types
                    success: {
                        duration: 3000,
                        theme: {
                            primary: 'green',
                            secondary: 'black',
                        },
                    },
                }} />
            <Navbar />
            {component}
        </div>
    )
}

export default Admin