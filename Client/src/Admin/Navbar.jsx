import { Link } from "react-router-dom"

const Navbar = () => {
    let Route = import.meta.env.VITE_ADMIN_ROUTE;
    return (
        <div className=' sticky top-0  bg-slate-200 flex justify-around py-5  '>
            <Link to={Route+'/home'}>ADMIN</Link>
            <div className=" w-60 flex justify-between ">
                <Link to={Route + '/users'}>Users</Link>
                <Link to={Route + '/orders'}>Order</Link>
                <Link to={Route + '/products'}>Products</Link>
                <Link to={Route + '/bills'}>Bills</Link>
            </div>
        </div>
    )
}

export default Navbar