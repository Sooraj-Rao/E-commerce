import React, { useEffect, useState } from 'react'

const TopFilter = ({ DisplayRow, SortFilter, setData, setDisplayRow }) => {
    const [Input, setInput] = useState();

    const handleChange = (e) => {
        setInput(e.target.value)
    }
    useEffect(() => {
        if (Input) {
            setData([])
            SortFilter(Input);
        }
    }, [Input])

    return (
        <div className=''>
            <div className="w-full px-3   py-4 ">
                <div className="px-3 mb-4">
                    <div className="flex justify-between  ">
                        <div className=" gap-x-3 md:flex hidden">
                            <h1 onClick={() => setDisplayRow(false)} className={`h-fit p-2  border rounded-md bg-gray-50 
                            ${!DisplayRow ? 'bg-slate-200' : 'bg-slate-50'}
                            `}>
                                <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="w-5 h-5 bi bi-grid-3x3-gap-fill" viewBox="0 0 16 16">
                                    <path d="M1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2zM1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7zM1 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2z"></path>
                                </svg>
                            </h1>
                            <h1 onClick={() => setDisplayRow(true)} className={` h-fit p-2 border rounded-md 
                            ${DisplayRow ? 'bg-slate-200' : 'bg-slate-50'}
                            `}>
                                <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="w-5 h-5 bi bi-list" viewBox="0 0 16 16">
                                    <path fillRule="" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"></path>
                                </svg>
                            </h1>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="  border border-gray-300 pr-3 rounded ">
                                <select onChange={handleChange} className="block p-3  text-base  outline-none cursor-pointer ">
                                    <option value="latest" >Sort by latest</option>
                                    {/* <option value="popular">Sort by Popularity</option> */}
                                    <option value="lowTo">Price-Low to High</option>
                                    <option value="highTo">Price-High to Low</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopFilter