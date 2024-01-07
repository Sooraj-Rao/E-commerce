import { useContext, useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { CartIcon, CloseIcon, DownArrow, MenuIcon, Search } from '../../../../public/SVG/IconsSvg'
import { MyContext } from '../../Context/Context';
import AreYouSure from '../../Modals/AreYouSure';
import SearchResult from './Search';

const Navbar = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation()
    const [FormShow, setFormShow] = useState(false)
    const [MobileMenu, setMobileMenu] = useState(false);
    const [ShowSerach, setShowSerach] = useState(false)
    const context = useContext(MyContext);
    const { login, Cart, AllItems, userDetails, admin } = context;
    const [SearchQuery, setSearchQuery] = useState('');
    const [Result, setResult] = useState()

    const handleChange = (e) => {
        let { value } = e.target;
        setSearchQuery(value)
    }
    const ShowResult = () => {
        let res = AllItems.filter((item) => {
            const itemName = item?.name?.toLowerCase();
            const itemCategory = item?.category?.toLowerCase();
            const searchQueryLower = SearchQuery.toLowerCase();
            if (itemCategory.includes(searchQueryLower) || itemName.includes(searchQueryLower)) {
                return item;
            }
        });
        setResult(res);
    }

    useEffect(() => {
        SearchQuery && ShowResult()
    }, [SearchQuery])

    const DropDown = [
        {
            name: 'Orders',
            path: '/manage/order'
        },
        {
            name: 'Bills',
            path: '/manage/Bills'
        },

        {
            name: 'Profile',
            path: '/manage/Profile'
        },
        {
            name: 'Logout',
            click: 'formshow'
        },
    ]

    return (
        <nav className=" bg-white z-[99] shadow-lg  px-10  sticky top-0  ">
            {
                FormShow ?
                    <AreYouSure from='Logout' message='Logout' setFormShow={setFormShow} />
                    : null
            }
            <div className="container h-20  mx-auto md:flex md:justify-between md:items-center relative">
                <div className="flex items-center justify-between">
                    <Link to="/">
                        <span className=' text-3xl font-bold italic'>
                            QuickMart
                        </span>
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
                        <input autoFocus value={SearchQuery} onChange={handleChange} type="text" placeholder='eg -books' className=' capitalize outline-none w-[90%]  ' />
                        <span className=' bg-blue-100 rounded-md p-2'>
                            {Search}
                        </span>
                        {SearchQuery &&
                            <SearchResult Result={Result} setResult={setResult} setSearchQuery={setSearchQuery} />
                        }
                    </ul>
                </div>

                <div className={`absolute inset-x-0 z-20 w-full py-4 transition-all duration-300 ease-in-out bg-gray-300  md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center overflow-hidden ${MobileMenu ? 'md:w-auto w-full px-6' : 'md:w-auto w-0'} `}>
                    <div className={`  flex-col md:flex-row items-center md:mx-6 flex `}>
                        <Link className="my-2 text-gray-700 transition-colors duration-300 transform  hover:text-blue-500  md:mx-4 md:my-0" to="/">Home</Link>
                        <Link className="my-2 text-gray-700 transition-colors duration-300 transform  hover:text-blue-500  md:mx-4 md:my-0" to="products">Shop</Link>
                        <Link className="my-2  transition-colors duration-300 transform flex  hover:text-blue-500  md:mx-4 md:my-0 text-blue-700   animate-pulse" to="products"><span>New Arrivals!</span></Link>
                        {
                            !login &&
                            <Link className="my-2  transition-colors duration-300 transform  hover:bg-blue-500  md:mx-4 md:my-0 bg-blue-400 py-1 px-4 text-white rounded-lg" to="/auth/login">SignUp</Link>
                        }
                        {
                            login && admin &&
                            <Link className="my-2 text-gray-700 transition-colors duration-300 transform  hover:text-blue-500  md:mx-4 md:my-0" to={import.meta.env.VITE_ADMIN_ROUTE + '/home'}>Admin</Link>
                        }
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
                    {
                        login &&
                        <div className=' px-3 ml-4 py-2 group hover:mt-[12.4rem]  cursor-default  '>
                            <h1 className='bg-blue-200 px-4   flex items-center gap-x-4 text-center rounded-lg py-2'>
                                <span className=' h-7 w-7 overflow-hidden'>
                                    <img src="../../../../Images/Home/avatar.png" alt="" />
                                </span>
                                <span className=' capitalize pt-[1px] '>
                                    Hi,
                                    {userDetails?.user?.name.length > 10 ?
                                        userDetails?.user?.name.slice(0, 7) + '...' :
                                        userDetails?.user?.name}
                                </span>
                                <span className=' text-slate-700 pt-[2px] group-hover:rotate-180 duration-300'>
                                    {DownArrow}
                                </span>
                            </h1>
                            <ul className=' duration-500 mt-2 border  border-slate-300 rounded-lg px-2  group-hover:flex  bg-slate-50 p-2 hidden flex-col gap-y-1'>
                                {
                                    DropDown.map((item, i) => {
                                        return (
                                            <li onClick={() => {
                                                if (item.path) return navigate(item.path)
                                                if (item.click) return setFormShow(!FormShow);
                                            }
                                            } key={i} className='py-2 hover:bg-blue-100 rounded-md px-3 cursor-pointer'>
                                                {item.name}
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    }
                </div>
            </div>
        </nav >

    )
}

export default Navbar


