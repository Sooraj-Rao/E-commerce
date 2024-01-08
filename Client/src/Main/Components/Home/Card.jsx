import { BagIcon } from "../../../../public/SVG/IconsSvg"
import { CarIocn } from "../../../../public/SVG/IconsSvg"
import { MoneyIcon } from "../../../../public/SVG/IconsSvg"


const data = [
    {
        title: 'Exciting Offers',
        desc: 'We provide amazing offers & discounts',
        icon: BagIcon
    },
    {
        title: 'Free Shipping',
        desc: 'We ship all over India for FREE',
        icon: CarIocn
    },
    {
        title: 'Seamless Payment',
        desc: 'Make payments seamlessly without hassle',
        icon: MoneyIcon
    }
]

const Card = () => {
    return (
        <>
            <div className=" px-3 cursor-default flex lg:flex-row flex-col gap-5 items-center md:justify-evenly my-20">
                {
                    data.map((item, i) => {
                        return (
                            <div key={i} className="text-center sm:w-96 h-48  w-full p-6 bg-slate-200 border border-gray-200 rounded-lg shadow ">
                                <div className=" flex justify-center">
                                    {item.icon}
                                </div>
                                <h5 className="mb-2 text-2xl font-semibold tracking-tight  text-gray-900 ">{item.title}</h5>
                                <p className="mb-3 font-normal text-gray-500 ">{item.desc}</p>
                            </div>
                        )
                    })
                }

            </div>
            <div className=" mx-4 overflow-hidden">
                <img src="../../../../Images/Home/banner3.jpg" alt="" />
            </div>
        </>
    )
}

export default Card