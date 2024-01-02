import { Link, useParams } from "react-router-dom"
import { AddressIcon, CheckIcon, DetailsIcon, PaymentIcon } from "../../../../public/SVG/IconsSvg"

const CheckOutHeader = () => {
    const { param } = useParams()
    const SetWidth = {
        address: '50%',
        details: '1%',
        payment: '100%'
    }
    const ProgressBar = SetWidth[param]
    return (
        <div>
            <div className=" flex justify-center w-full py-6 bg-gray-50  border-b-2 ">
                <div className=" w-1/2">
                    <div className=" rounded-full bg-gray-200  relative">
                        <div style={{ width: ProgressBar }} className="h-2 duration-1000   rounded-full bg-blue-500"></div>
                        <span className={`absolute -top-2 text-blue-600 bg-white border border-blue-600 rounded-full `}>
                            {CheckIcon}
                        </span>
                        <span className={`absolute -top-2  ${param == 'address' || param == 'payment' ? 'text-blue-600' : 'text-gray-500'} left-1/2 bg-white border border-blue-600 rounded-full `}>
                            {CheckIcon}
                        </span>
                        <span className={`absolute -top-2 text-blue-600  ${param == 'payment' ? 'text-blue-600' : 'text-gray-500'}   right-0 bg-white border border-blue-600 rounded-full `}>
                            {CheckIcon}
                        </span>
                    </div>

                    <ol className="mt-4 grid grid-cols-3 text-sm font-medium text-gray-500">
                        <li className="flex items-center justify-start text-blue-600 sm:gap-1.5">
                            <Link to={'/checkout/details'} className="hidden sm:inline"> Details </Link>
                            <span>
                                {DetailsIcon}
                            </span>
                        </li>
                        <li className={`flex items-center justify-center  sm:gap-1.5
                         ${param == 'address' || param == 'payment' ? 'text-blue-600' : 'text-gray-500'} 
                        `}>
                            <Link to={'/checkout/address'} className="hidden sm:inline"> Address </Link>
                            {AddressIcon}
                        </li>
                        <li className={`flex items-center justify-end text-blue-600 sm:gap-1.5
                           ${param == 'payment' ? 'text-blue-600' : 'text-gray-500'} `}>
                            <Link to={'/checkout/payment'} className="hidden  sm:inline"> Payment </Link>
                            {PaymentIcon}
                        </li>
                    </ol>
                </div>
            </div>
        </div>

    )
}

export default CheckOutHeader