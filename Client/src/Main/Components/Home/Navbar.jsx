import { useContext, useEffect, useMemo, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { CartIcon, CloseIcon, DownArrow, MenuIcon, Search } from '../../../../public/SVG/IconsSvg'
import { MyContext } from '../../Context/Context';
import AreYouSure from '../../Modals/AreYouSure';
import SearchResult from './Search';
import { useCookies } from 'react-cookie';

const Navbar = () => {
    const navigate = useNavigate();
    const [cookies, setCookie] = useCookies(['isFirst']);
    const { pathname } = useLocation()
    const [FormShow, setFormShow] = useState(false)
    const [MobileMenu, setMobileMenu] = useState(false);
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
        SearchQuery && ShowResult();
        AllItems?.length != 0 && setCookie('isFirst', true)
    }, [AllItems, SearchQuery])
    const DropDown = [
        {
            name: 'Orders',
            path: '/manage/order'
        },
        // {
        //     name: 'Profile',
        //     path: '/manage/Profile'
        // },
        {
            name: 'Logout',
            click: 'formshow'
        },
    ]


    return (
        <nav className=" bg-white z-[99]  shadow-lg    sticky top-0  ">
            {
                FormShow ?
                    <AreYouSure from='Logout' message='Logout' setFormShow={setFormShow} />
                    : null
            }
            <div className={`${cookies?.isFirst ? 'h-0' : 'py-3'} duration-500 bg-blue-500  text-center text-white `}>
                <h1>Since my API is deployed on free tier, The first request to the API will take 30 -40 seconds.Kindly Refresh</h1>
            </div>
            <div className=" h-20   md:flex md:justify-between   md:items-center  relative">
                <div className=' flex md:pt-0 pt-4  justify-between  lg:w-full  '>
                    <div className="flex  sm:gap-x-10 gap-x-3 items-center justify-between">
                        <Link to="/">
                            <span className=' pl-4 sm:text-3xl text-lg font-bold italic'>
                                <abbr className=' no-underline' title="
                         logo">
                                    QuickMart
                                </abbr>
                            </span>
                        </Link>
                        <div>
                        </div>
                    </div>
                    <div className=' lg:w-[20rem] xl:w-[30rem] sm:w-40  '>
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
                    <div className="flex pr-4 md:hidden">
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
                <div onClick={() => MobileMenu ? setMobileMenu(false) : null}
                    className={` md:w-full  md:justify-end bg-slate-300 md:pr-8   overflow-hidden  z-20 whitespace-nowrap py-4  transition-all duration-300 ease-in-out   md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent  md:opacity-100 md:translate-x-0 md:flex md:items-center 
                 ${MobileMenu ? ' w-full ' : ' w-0 '} `}>
                    <div className={`  flex-col md:flex-row items-center    flex `}>
                        <Link className="my-2 text-gray-700 transition-colors duration-300 transform  hover:text-blue-500  md:mx-4 md:my-0" to="/">Home</Link>
                        <Link className="my-2 text-gray-700 transition-colors duration-300 transform  hover:text-blue-500  md:mx-4 md:my-0" to="products">Shop</Link>
                        <Link className="my-2  transition-colors duration-300 transform flex  hover:text-blue-500  md:mx-4 md:my-0 text-blue-700   animate-pulse" to="products"><span>New Arrivals!</span></Link>
                        {
                            !login &&
                            <Link className="my-2  transition-colors duration-300 transform  hover:bg-blue-700  md:mx-4 md:my-0 bg-blue-600 py-2  px-4 text-white rounded-md" to="/auth/login">SignUp</Link>
                        }
                        {
                            login && admin &&
                            <Link className="my-2 text-gray-700 transition-colors duration-300 transform  hover:text-blue-500  md:mx-4 md:my-0" to={import.meta.env.VITE_ADMIN_ROUTE + '/home'}>Admin</Link>
                        }
                    </div>

                    <div className={`flex justify-center ml-4 mt-10 md:mt-0 md:block ${!pathname.includes('view') ? 'visible' : 'invisible'}`}>
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
                        <div className=' px-3 ml-4 py-2 group hover:mt-[6.9rem]  cursor-default  '>
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


