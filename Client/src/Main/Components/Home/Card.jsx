import { BagIcon } from "../../../../public/SVG/IconsSvg"

const Card = () => {
    return (
        <>
        <div className=" cursor-default flex gap-5 justify-evenly my-20">
            {
                Array(3).fill('').map((item, i) => {
                    return (
                        <div key={i} className="max-w-sm p-6 bg-slate-200 border border-gray-200 rounded-lg shadow ">
                            <div className=" flex justify-center">
                                {BagIcon}
                            </div>
                            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 ">Need a help in Claim?</h5>
                            <p className="mb-3 font-normal text-gray-500 ">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
                        </div>
                    )
                })
            }

        </div>
        <img  src="../../../../Images/Home/banner2.jpg" alt="" className=" my-5" />
        </>
    )
}

export default Card