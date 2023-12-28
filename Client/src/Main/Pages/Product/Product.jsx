import { useState } from "react"
import { DecrementIcon, HeartIcon, IncremnetIcon } from "../../../../public/SVG/IconsSvg"
import { Toaster } from "react-hot-toast"

const Product = () => {
    const [quantity, setQuantity] = useState(1)
    return (
        <div>
             <Toaster
                position='top-right'
            />
            <section className="overflow-hidden bg-white py-11  font-poppins ">
                <div className="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full px-4 md:w-1/2 ">
                            <div className="sticky top-0 z-50 overflow-hidden ">
                                <div className="relative mb-6 lg:mb-10 lg:h-[26rem] px-10 ">
                                    <img src="https://i.postimg.cc/PqYpFTfy/pexels-melvin-buezo-2529148.jpg" alt=""
                                        className="object-cover w-full lg:h-full   " />
                                </div>
                                <div className="flex-wrap hidden md:flex ">
                                    <div className="w-1/2 p-2 sm:w-1/4">
                                        <a href="#"
                                            className="block border border-blue-300  hover:border-blue-300">
                                            <img src="https://i.postimg.cc/PqYpFTfy/pexels-melvin-buezo-2529148.jpg" alt=""
                                                className="object-cover w-full lg:h-20" />
                                        </a>
                                    </div>
                                    <div className="w-1/2 p-2 sm:w-1/4">
                                        <a href="#"
                                            className="block border border-transparent  hover:border-blue-300">
                                            <img src="https://i.postimg.cc/PqYpFTfy/pexels-melvin-buezo-2529148.jpg" alt=""
                                                className="object-cover w-full lg:h-20" />
                                        </a>
                                    </div>
                                    <div className="w-1/2 p-2 sm:w-1/4">
                                        <a href="#"
                                            className="block border border-transparent  hover:border-blue-300">
                                            <img src="https://i.postimg.cc/PqYpFTfy/pexels-melvin-buezo-2529148.jpg" alt=""
                                                className="object-cover w-full lg:h-20" />
                                        </a>
                                    </div>
                                    <div className="w-1/2 p-2 sm:w-1/4">
                                        <a href="#"
                                            className="block border border-transparent  hover:border-blue-300">
                                            <img src="https://i.postimg.cc/PqYpFTfy/pexels-melvin-buezo-2529148.jpg" alt=""
                                                className="object-cover w-full lg:h-20" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-4 md:w-1/2 ">
                            <div className="lg:pl-20">
                                <div className="mb-8 ">
                                    <span className="text-lg font-medium text-rose-500 ">New</span>
                                    <h2 className="max-w-xl mt-2 mb-6 text-2xl font-bold  md:text-4xl">
                                        Shoes</h2>
                                    {/* <div className="flex items-center mb-6">
                                        <ul className="flex mr-2">
                                            <li>
                                                <a href="#">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                        fill="currentColor"
                                                        className="w-4 mr-1 text-red-500 bi bi-star "
                                                        viewBox="0 0 16 16">
                                                        <path
                                                            d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                                    </svg>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                        fill="currentColor"
                                                        className="w-4 mr-1 text-red-500  bi bi-star "
                                                        viewBox="0 0 16 16">
                                                        <path
                                                            d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                                    </svg>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                        fill="currentColor"
                                                        className="w-4 mr-1 text-red-500 bi bi-star "
                                                        viewBox="0 0 16 16">
                                                        <path
                                                            d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                                    </svg>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                        fill="currentColor"
                                                        className="w-4 mr-1 text-red-500  bi bi-star "
                                                        viewBox="0 0 16 16">
                                                        <path
                                                            d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                                    </svg>
                                                </a>
                                            </li>
                                        </ul>
                                        <p className="text-xs  ">(2 customer reviews)</p>
                                    </div> */}
                                    <p className="max-w-md mb-8 text-gray-700 ">
                                        Lorem ispum dor amet Lorem ispum dor amet Lorem ispum dor amet Lorem ispum dor amet
                                        Lorem ispum dor amet Lorem ispum dor amet Lorem ispum dor amet Lorem ispum dor amet
                                    </p>
                                    <p className="inline-block mb-8 text-4xl font-bold text-gray-700  ">
                                        <span>$1000.99</span>
                                        <span
                                            className="text-base font-normal text-gray-500 line-through ">$1500.99</span>
                                    </p>
                                    <p className="text-green-600 ">7 in stock</p>
                                </div>
                                <div className="flex items-center my-10">
                                    <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)} className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 " type="button">
                                        <span className="sr-only">Quantity button</span>
                                        {IncremnetIcon}
                                    </button>
                                    <div>
                                        <h1 className=" mx-2">{quantity}</h1>
                                    </div>
                                    <button onClick={() => setQuantity(quantity < 10 ? quantity + 1 : 10)} className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 -" type="button">
                                        <span className="sr-only">Quantity button</span>
                                        {DecrementIcon}
                                    </button>
                                </div>
                                <div className="flex flex-wrap items-center -mx-4 ">
                                    <div className="w-full px-4 mb-4 lg:w-1/2 lg:mb-0">
                                        <button className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                                            Add to cart
                                        </button>
                                    </div>
                                    <div className="w-full px-4 mb-4 lg:mb-0 lg:w-1/2">
                                        <button className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform  bg-gray-200 shadow-xl hover:bg-gray-200 rounded-lg hover: focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                                            {HeartIcon}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Product