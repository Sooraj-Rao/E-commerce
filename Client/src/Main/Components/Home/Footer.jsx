import { Link } from "react-router-dom"
import { Discord, FB, Github, Twitter } from "../../../../public/SVG/IconsSvg"

const Footer = () => {
    return (
        <div className=" shadow-[0px_-5px_10px_1px] shadow-slate-300 my-5">
            <footer className="bg-white ">
                <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div className="md:flex md:justify-between">
                        <div className="mb-6 md:mb-0">
                            <a href="" className="flex items-center">
                                LOGO
                            </a>
                        </div>
                        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">Follow us</h2>
                                <ul className="text-gray-500 font-medium flex">
                                    <h1 className="text-gray-500 hover:text-gray-900 ">
                                        {FB}
                                    </h1>
                                    <h1 className="text-gray-500 hover:text-gray-900  ms-5">
                                        {Discord}
                                    </h1>
                                    <h1 className="text-gray-500 hover:text-gray-900  ms-5">
                                        {Twitter}
                                    </h1>
                                    <h1 className="text-gray-500 hover:text-gray-900  ms-5">
                                        {Github}
                                    </h1>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">Legal</h2>
                                <ul className="text-gray-500  font-medium">
                                    <li className="mb-4">
                                        <Link to={'/i/privacy'} className="hover:underline">Privacy Policy</Link>
                                    </li>
                                    <li>
                                        <Link to={'/i/terms'} className="hover:underline">Terms &amp; Conditions</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
                    <div className=" text-center ">
                        <span className="text-sm text-gray-500 sm:text-center ">© 2024 All Rights Reserved                    </span>
                        <div className="flex mt-4 sm:justify-center sm:mt-0">
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Footer