import { Link } from "react-router-dom"
import ScrollTop from "../../../Constant/ScrollTo/ScrollTop"
import { useContext, useState } from "react";
import { MyContext } from "../../../Context/Context";
import axios from "axios";
import { AuthMessage } from '../../../Constant/Messages/Messages'
import toast from "react-hot-toast";
import { useCookies } from 'react-cookie'
import Spinner from '../../../Animation/Spinner/Spinner'


const Login = () => {
    const [cookies, setCookie, removeCookie] = useCookies(['user', 'token']);
    const [Loader, setLoader] = useState(false);
    const context = useContext(MyContext);
    const { Server } = context;
    const [Input, setInput] = useState({
        email: '',
        password: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInput({ ...Input, [name]: value })
    }

    const Login = async () => {
        try {
            setLoader(true);
            const res = await axios.post(Server + 'auth/login', Input);
            setLoader(false);
            const { error, message, token, user } = res.data;
            if (error) {
                return toast.error(message)
            }
            toast.success(message)
            let userInfo = { email: user.email, name: user.name, phone: user.phone }
            setCookie('user', (userInfo))
            setCookie('token', token);
            setTimeout(() => {
                window.location.href = '/';
            }, 3000);
        
        } catch (error) {
            setLoader(false);
            toast.error('Failed to Login')
        }
    }
    const Validate = (e) => {
        e.preventDefault();
        if (Input.email == '' || Input.password == '') return toast.error(AuthMessage.AllMandatory)
        if (!/^\S+@\S+\.\S+$/.test(Input.email)) {
            return toast.error(AuthMessage.InvalidEmail)
        }
        Login();
    }

    return (
        <section className="bg-gray-200 ">
            <ScrollTop />

            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto -mt-5 md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                            Login
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                                <input value={Input.email} onChange={handleChange} name="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="ramu@abc.com" required="" />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                                <input value={Input.password} onChange={handleChange} type="password" name="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required="" />
                            </div>
                            <button onClick={Validate} type="submit" className="w-full text-white bg-blue-700 text-base hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg  px-5 py-2 text-center ">
                                {
                                    Loader ?
                                        <Spinner /> :
                                        'Login'
                                }
                            </button>
                            <p className="text-sm  font-medium text-slate-600  ">
                                Dont have an account? <Link to={'/auth/signUp'} className="font-medium text-blue-600  hover:underline ">SignUp </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login