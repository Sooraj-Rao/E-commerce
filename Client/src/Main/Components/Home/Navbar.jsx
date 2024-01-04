import { useContext, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { CartIcon, CloseIcon, MenuIcon, Search } from '../../../../public/SVG/IconsSvg'
import { MyContext } from '../../Context/Context';
import AreYouSure from '../../Modals/AreYouSure';
import SearchResult from './Search';

const Navbar = () => {
    const { pathname } = useLocation()
    const [FormShow, setFormShow] = useState(false)
    const [MobileMenu, setMobileMenu] = useState(false);
    const [ShowSerach, setShowSerach] = useState(false)
    const context = useContext(MyContext);
    const { login, Cart, AllItems } = context;
    const [SearchQuery, setSearchQuery] = useState('');
    const [Result, setResult] = useState()

    const handleChange = (e) => {
        let { value } = e.target;
        setSearchQuery(value)
    }

    const ShowResult = () => {
        let res = AllItems.filter((item) => {
            const itemName = item?.name?.toLowerCase(); // Convert item name to lowercase
            const itemCategory = item?.category?.toLowerCase(); // Convert item category to lowercase
            const searchQueryLower = SearchQuery.toLowerCase(); // Convert search query to lowercase

            // Check if either the item's name or category contains the search query (case-insensitive)
            if (itemName.includes(searchQueryLower) || itemCategory.includes(searchQueryLower)) {
                return item;
            }
        });
        setResult(res);
    }



    useEffect(() => {
        SearchQuery && ShowResult()
    }, [SearchQuery])

    // console.log(Result);


    return (
        <nav className=" bg-white z-[999] shadow-lg  sticky top-0  ">
            {
                FormShow ?
                    <AreYouSure from='Logout' message='Logout' setFormShow={setFormShow} />
                    : null
            }
            <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center relative">
                <div className="flex items-center justify-between">
                    <Link to="/">
                        LOGO
                    </Link>
                    <div>
                    </div>
                    <div className="flex lg:hidden">
                        <button onClick={() => setMobileMenu(!MobileMenu)} className="text-gray-500  hover:text-gray-600  focus:outline-none focus:text-gray-600 " aria-label="toggle menu">
                            {
                                MobileMenu ?
                                    CloseIcon
                                    :
                                    MenuIcon
                            }
                        </button>
                    </div>
                </div>
                <div className=' w-1/4 '>
                    <ul className='outline-none border-gray-400 overflow-hidden h-10 pl-2 flex items-center justify-between rounded-md border'>
                        <input autoFocus value={SearchQuery} onChange={handleChange} type="text" placeholder='Serach Products' className=' capitalize outline-none w-[90%]  ' />
                        <span className=' bg-blue-100 rounded-md p-2'>
                            {Search}
                        </span>
                        {SearchQuery &&
                            <SearchResult Result={Result} setResult={setResult} setSearchQuery={setSearchQuery} />
                        }
                    </ul>
                </div>

                <div className={`absolute inset-x-0 z-20 w-full py-4 transition-all duration-300 ease-in-out bg-gray-300  md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center overflow-hidden ${MobileMenu ? 'md:w-auto w-full px-6' : 'md:w-auto w-0'} `}>
                    <div className={` flex-col md:flex-row items-center md:mx-6 flex`}>
                        <Link className="my-2 text-gray-700 transition-colors duration-300 transform  hover:text-blue-500  md:mx-4 md:my-0" to="/">Home</Link>
                        <Link className="my-2 text-gray-700 transition-colors duration-300 transform  hover:text-blue-500  md:mx-4 md:my-0" to="products">Shop</Link>
                        <Link className="my-2  transition-colors duration-300 transform flex  hover:text-blue-500  md:mx-4 md:my-0 text-blue-700   animate-pulse" to="products"><span>New Arrivals!</span></Link>
                        <Link className="my-2 text-gray-700 transition-colors duration-300 transform  hover:text-blue-500  md:mx-4 md:my-0" to="">About</Link>
                        {
                            !login ?
                                <Link className="my-2 text-gray-700 transition-colors duration-300 transform  hover:text-blue-500  md:mx-4 md:my-0" to="/auth/login">SignUp</Link>
                                :
                                <button className=" text-gray-700 transition-colors duration-300 transform  hover:text-blue-500  md:mx-4  " onClick={() => setFormShow(!FormShow)}>Logout</button>

                        }
                        {
                            login ?
                                <Link className="my-2 text-gray-700 transition-colors duration-300 transform  hover:text-blue-500  md:mx-4 md:my-0" to={import.meta.env.VITE_ADMIN_ROUTE + '/home'}>Admin</Link>
                                : null}
                    </div>

                    <div className={`flex justify-start mt-10 md:mt-0 md:block ${!pathname.includes('view') ? 'visible' : 'invisible'}`}>
                        <Link className="relative text-gray-700 transition-colors duration-300 transform  hover:text-gray-600 " to={'view/cart'}>
                            {CartIcon}
                            {
                                Cart.length > 0 ?
                                    <h2 className="absolute top-0 -left-4 px-2 py-1 text-xs text-white bg-blue-500 rounded-full">{Cart.length}</h2> : ''
                            }
                        </Link>
                    </div>
                </div>
            </div>
        </nav >

    )
}

export default Navbar


