import { useState } from "react"

const Filter = () => {
    const [price, setPrice] = useState(100)
    const [DropDown, setDropDown] = useState({
        one: false,
        two: false
    })

    return (
        <div className=" fixed left-5 w-72 my-10">
            <div>
                <button onClick={() => setDropDown({ ...DropDown, one: !DropDown.one })} type="button" className="flex items-center justify-between w-full p-2 font-medium  text-gray-500 border border-b-0 border-gray-200   hover:bg-gray-100 gap-3"  >
                    <h1>Filters</h1>
                    <svg className={`w-3 h-3 rotate-180 shrink-0 ${!DropDown.one ? 'rotate-180' : 'rotate-0'}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                    </svg>
                </button>
                <div className={`${DropDown.one ? 'block' : 'hidden'}`} >
                    <div className="p-5 border border-b-0 border-gray-200  ">
                        Price:
                        <span className=" ml-2">100</span>
                        <input value={price} className=" mx-2" onChange={(e) => setPrice(e.target.value)} type="range" min="100" max="10000" />
                        <span>10k</span>
                        <h1 className=" text-center">{price.length > 3 ? price.slice(0, -3) + 'k' : price}</h1>
                    </div>
                </div>
                <button onClick={() => setDropDown({ ...DropDown, two: !DropDown.two })} type="button" className="flex items-center justify-between w-full p-2 font-medium  text-gray-500 border border-b-0 border-gray-200    hover:bg-gray-100 gap-3"  >
                    <h1>All Category</h1>
                    <svg className={`w-3 h-3  shrink-0 ${!DropDown.two ? 'rotate-180' : 'rotate-0'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                    </svg>
                </button>
                <div className={`${DropDown.two ? 'block' : 'hidden'}`} >
                    <div className="p-5 border border-b-0 border-gray-200  ">
                        <h1>Filtering bro</h1>
                        <h1>Filtering bro</h1>
                        <h1>Filtering bro</h1>
                        <h1>Filtering bro</h1>
                        <h1>Filtering bro</h1>
                        <h1>Filtering bro</h1>
                        <h1>Filtering bro</h1>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Filter