import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
      <section
        className="h-[calc(100vh-5rem)] bg-center bg-no-repeat bg-cover bg-gradient-to-r  from-blue-400 via-blue-400 to-green-200 ">
        <div className="flex items-center h-screen">
          <div className="container relative justify-center px-4 mx-auto text-center">
            <h1 className="inline-block mb-8 font-semibold text-gray-100 text-7xl lg:text-9xl "> Oops!
            </h1>
            <h2 className="mb-8 text-2xl font-semibold text-gray-100 lg:text-4xl ">404 Page not found
            </h2>
            <p className="mb-8 text-xl text-gray-200 ">
              Sorry! we are unable to find the page that you are looking for...
            </p>
            <div className="flex flex-wrap items-center justify-center">
              <Link to={'/'} className="w-full px-6 py-3 mb-4 mr-0 text-base font-medium text-gray-100 uppercase bg-blue-600  rounded-lg lg:w-auto hover:bg-blue-800 lg:mb-0 lg:mr-4 md:w-full ">
                Home
              </Link>
              <div onClick={() => window.history.back()} className="w-full cursor-pointer px-6 py-3 mb-4 mr-0 text-base font-medium text-gray-100 uppercase bg-blue-600  rounded-lg lg:w-auto hover:bg-blue-800 lg:mb-0 lg:mr-4 md:w-full ">
                Go Back
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default NotFound