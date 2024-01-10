import { useEffect, useState } from 'react'
import Banner1 from '../../../../public/Images/Home/banner2.jpg'
import Banner2 from '../../../../public/Images/Home/banner3.jpg'
import Banner5 from '../../../../public/Images/Home/banner4.jpg'
import Banner6 from '../../../../public/Images/Home/banner5.png'
import Banner7 from '../../../../public/Images/Home/banner6.png'
import Banner8 from '../../../../public/Images/Home/sale-banner.png'
import { ArrowIcon, DownArrow } from '../../../../public/SVG/IconsSvg'

const Hero = () => {
    const [num, setnum] = useState(0)
    const Images = [
        Banner5, Banner6, Banner7
    ]
    const show = Images[num]

    useEffect(() => {
        const interval = setInterval(() => {
            Images.length - 1 != num ? setnum(num + 1) : setnum(0)
        }, 3000);
        return () => {
            clearInterval(interval)
        }
    }, [show])


    return (
        <div className=' selection:hidden p-3 flex  text-white h-[20rem]  justify-center  '>
            <div className=' sm:w-[55rem] relative'>
            <h1 onClick={() => num == 0 ? setnum(Images.length - 1) : setnum(num - 1)} className=' rotate-180 transform   absolute left-5  text-black z-50 top-[40%]  bg-gray-200 py-4 px-2 cursor-pointer rounded-md '>
                <svg width="1rem" height="1rem" viewBox="0 0 512 512" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><polygon points="150.46 478 129.86 456.5 339.11 256 129.86 55.49 150.46 34 382.14 256 150.46 478" /></svg>
            </h1>
            <img src={show} alt="" className=' w-full h-full   ' />
            <h1 onClick={() => Images.length - 1 != num ? setnum(num + 1) : setnum(0)} className=' absolute right-5 z-50  top-[40%] bg-gray-200 py-4 px-2 cursor-pointer rounded-md'>
                <svg width="1rem" height="1rem" viewBox="0 0 512 512" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><polygon points="150.46 478 129.86 456.5 339.11 256 129.86 55.49 150.46 34 382.14 256 150.46 478" /></svg>
            </h1>
            </div>
        </div>
    )
}

export default Hero