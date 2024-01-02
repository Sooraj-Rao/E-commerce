import React from 'react'

const OrderDone = () => {
  return (
    <div>
          <section class="flex items-center py-16 bg-gray-50 font-poppins dark:bg-gray-800 ">
        <div
            class="justify-center flex-1 max-w-4xl px-6 py-6 mx-auto bg-gray-100 rounded-md shadow-md dark:border-gray-900 dark:bg-gray-900 lg:py-10 lg:px-10">
            <div class="mb-16 text-center">
                <h1
                    class="mb-6 text-2xl font-semibold leading-7 tracking-wide text-gray-700 lg:text-4xl dark:text-gray-300 lg:leading-9">
                    Thank you for your Order, John!</h1>
                <p class="text-lg text-gray-500 dark:text-gray-400">your order number is: 012736373737</p>
            </div>
            <div class="max-w-4xl mx-auto mb-10">
                <h2 class="mb-4 text-xl font-medium dark:text-gray-400">What you ordered:</h2>
                <div
                    class="p-10 mb-8 bg-white rounded-md shadow dark:bg-gray-800 sm:flex sm:items-center xl:py-5 xl:px-12">
                    <a href="#" class="mr-6 md:mr-12">
                        <img class=" w-full lg:w-[80px] h-[200px] lg:h-[80px]  object-cover  mx-auto mb-6 sm:mb-0 "
                            src="https://i.postimg.cc/YS2pPP8k/white-denim-jacket-front-view-streetwear-fashion.jpg "
                            alt="dress">
                    </a>
                    <div>
                        <a class="inline-block mb-1 text-lg font-medium hover:underline dark:text-gray-400" href="#">
                            White jacket for men</a>
                        <div class="flex flex-wrap">
                            <p class="mr-4 text-sm font-medium">
                                <span class="font-medium dark:text-gray-400">Color:</span>
                                <span class="ml-2 text-gray-400 dark:text-gray-400">Silver</span>
                            </p>
                            <p class="mr-4 text-sm font-medium">
                                <span class="font-medium dark:text-gray-400">Size:</span>
                                <span class="ml-2 text-gray-400 dark:text-gray-400">medium</span>
                            </p>
                            <p class="mr-4 text-sm font-medium">
                                <span class="font-medium dark:text-gray-400">Style:</span>
                                <span class="ml-2 text-gray-400 dark:text-gray-400">Uk minimal design</span>
                            </p>
                            <p class="text-sm font-medium dark:text-gray-400">
                                <span>Qty:</span>
                                <span class="ml-2 text-gray-400">1</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="p-10 bg-white rounded-md shadow dark:bg-gray-800 sm:flex sm:items-center xl:py-5 xl:px-12">
                    <a href="#" class="mr-6 md:mr-12">
                        <img class=" w-full lg:w-[80px] h-[200px] lg:h-[80px] object-cover  mx-auto mb-6 sm:mb-0 "
                            src="https://i.postimg.cc/br9C4mmc/430.jpg " alt="dress">
                    </a>
                    <div>
                        <a class="inline-block mb-1 text-lg font-medium dark:text-gray-400 hover:underline" href="#">
                            Summer Black T-shirt
                        </a>
                        <div class="flex flex-wrap">
                            <p class="mr-4 text-sm font-medium dark:text-gray-400">
                                <span class="font-medium">Color:</span>
                                <span class="ml-2 text-gray-400">Silver</span>
                            </p>
                            <p class="mr-4 text-sm font-medium dark:text-gray-400">
                                <span class="font-medium">Size:</span>
                                <span class="ml-2 text-gray-400">medium</span>
                            </p>
                            <p class="mr-4 text-sm font-medium dark:text-gray-400">
                                <span class="font-medium">Style:</span>
                                <span class="ml-2 text-gray-400">Uk minimal design</span>
                            </p>
                            <p class="text-sm font-medium dark:text-gray-400">
                                <span>Qty:</span>
                                <span class="ml-2 text-gray-400">1</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="max-w-4xl mx-auto ">
                <h2 class="mb-4 text-xl font-medium dark:text-gray-400 ">Order Details:</h2>
                <div class="grid grid-cols-1 gap-8 mb-10 lg:grid-cols-3">
                    <div
                        class="flex items-center justify-between px-10 py-3 font-medium leading-8 bg-white bg-opacity-50 rounded-md shadow dark:text-gray-400 dark:bg-gray-800 font-heading">
                        <span>Shipping</span>
                        <span class="flex items-center">
                            <span class="ml-3 mr-1 text-sm">Rs.</span>
                            <span class="text-xl">4,000</span>
                        </span>
                    </div>
                    <div
                        class="relative flex items-center justify-between px-10 py-3 font-medium leading-8 bg-white bg-opacity-50 rounded-md shadow dark:text-gray-400 dark:bg-gray-800">
                        <div
                            class="absolute right-0 flex items-center justify-center bg-blue-500 rounded-md w-14 h-14 dark:bg-gray-600">
                            <div
                                class="flex items-center justify-center text-lg font-bold text-blue-500 bg-gray-100 rounded-full dark:text-gray-300 dark:bg-gray-700 w-11 h-11">
                                2</div>
                        </div>
                        <span class="mr-16">Products</span>
                    </div>
                    <div
                        class="flex items-center justify-between px-10 py-3 font-medium leading-8 bg-white rounded-md shadow dark:text-gray-400 dark:bg-gray-800 font-heading">
                        <span>Total</span>
                        <span class="flex items-center text-blue-500 dark:text-blue-400">
                            <span class="ml-3 mr-1 text-sm">Rs.</span>
                            <span class="text-xl">7,000</span>
                        </span>
                    </div>
                </div>
                <div class="flex flex-wrap items-center justify-between gap-4 ">
                    <button
                        class="w-full px-6 py-3 text-blue-500 border border-blue-500 rounded-md md:w-auto hover:text-gray-100 hover:bg-blue-600 dark:border-gray-800 dark:hover:bg-gray-800 dark:text-gray-300">
                        Go back shopping
                    </button>
                    <button
                        class="w-full px-6 py-3 text-gray-100 bg-blue-500 rounded-md md:w-auto dark:text-gray-300 hover:bg-blue-600 dark:hover:bg-gray-800 dark:bg-gray-700">
                        Download Invoice
                    </button>
                </div>
            </div>

        </div>
    </section>
    </div>
  )
}

export default OrderDone