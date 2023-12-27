import { useParams } from "react-router-dom";
import Navbar from "./Navbar"
import Users from "./Routes/Users";
import Order from "./Routes/Order";
import Bills from "./Routes/Bills";
import Products from "./Routes/Products";

const Admin = () => {
    const { route } = useParams()
    const AllRoutes = {
        home: <div className="h-80">Welcome....</div>,
        users: <Users />,
        orders: <Order />,
        bills: <Bills />,
        products: <Products />
    }
    let component = AllRoutes[route] || <p>Page Not found</p>
    return (
        <div>
            <Navbar />
            {component}
        </div>
    )
}

export default Admin