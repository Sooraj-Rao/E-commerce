import React from 'react'

const Pagination = () => {
    return (
        <div>
            <div className="flex justify-center mt-6">
                <nav aria-label="page-navigation">
                    <ul className="flex list-style-none">
                        <li className="page-item disabled ">
                            <a href="#" className="relative block pointer-events-none px-3 py-1.5 mr-3 text-base text-gray-700 transition-all duration-300  rounded-md  hover:text-gray-100 hover:bg-blue-600">Previous
                            </a>
                        </li>
                        <li className="page-item ">
                            <a href="#" className="relative block px-3 py-1.5 mr-3 text-base hover:text-blue-700 transition-all duration-300 hover:bg-blue-200  rounded-md text-gray-100 bg-blue-400">1
                            </a>
                        </li>
                        <li className="page-item ">
                            <a href="#" className="relative block px-3 py-1.5 text-base text-gray-700 transition-all duration-300  hover:bg-blue-100 rounded-md mr-3  ">2
                            </a>
                        </li>
                        <li className="page-item ">
                            <a href="#" className="relative block px-3 py-1.5 text-base text-gray-700 transition-all duration-300  hover:bg-blue-100 rounded-md mr-3 ">3
                            </a>
                        </li>
                        <li className="page-item ">
                            <a href="#" className="relative block px-3 py-1.5 text-base text-gray-700 transition-all duration-300  hover:bg-blue-100 rounded-md ">Next
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Pagination