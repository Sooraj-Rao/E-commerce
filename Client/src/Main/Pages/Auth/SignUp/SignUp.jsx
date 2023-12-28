import { useContext, useState } from "react"
import toast, { Toaster } from "react-hot-toast"
import { Link, useNavigate } from "react-router-dom"
import { AuthMessage } from "../../../Constant/Messages/Messages"
import axios from 'axios'
import ScrollTop from '../../../Constant/ScrollTo/ScrollTop';
import { MyContext } from "../../../Context/Context"

const SignUp = () => {
    const context = useContext(MyContext);
    const { Server } = context;

    const navigate = useNavigate();
    const [Input, setInput] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
    })


    const handleChange = (e) => {
        const { name, value } = e.target;
        setInput({ ...Input, [name]: value })
    }


    const SignUp = async () => {
        try {
            const res = await axios.post(Server + 'auth/signUp', Input);
            const { error, message } = res.data;
            console.log(res);
            if (error) {
                return toast.error(message)
            }
            toast.success(message)
            setTimeout(() => {
                navigate('/auth/login')
            }, 3000);
        } catch (error) {
            console.log(error);
        }
    }

    const Validate = (e) => {
        e.preventDefault();
        if (Input.name == '' || Input.email == '' || Input.phone == '' || Input.password == '' || Input.confirmPassword == '') return toast.error(AuthMessage.AllMandatory)
        if (Input.password != Input.confirmPassword) {
            return toast.error(AuthMessage.NoMatch)
        } else if (Input.phone.length != 10) {
            return toast.error(AuthMessage.InvalidPhone)
        } else if (!/^\S+@\S+\.\S+$/.test(Input.email)) {
            return toast.error(AuthMessage.InvalidEmail)
        }
        SignUp();
    }


    return (
        <section className="bg-gray-200 py-10 ">
            <ScrollTop />
            <Toaster
                position='top-center'
                toastOptions={{
                    // Define default options
                    className: '',
                    duration: 5000,
                    style: {
                        background: 'black',
                        color: 'white',
                    },

                    // Default options for specific types
                    success: {
                        duration: 3000,
                        theme: {
                            primary: 'green',
                            secondary: 'black',
                        },
                    },
                }}
            />
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto -mt-5 md:h-screen lg:py-0">
                <h1>Logo</h1>
                <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                            Create  account now!
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 ">Your Name</label>
                                <input value={Input.name} onChange={handleChange} name="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="name@company.com" required="" />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 ">Email</label>
                                <input value={Input.email} type="email" onChange={handleChange} name="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="name@company.com" required="" />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 ">Phone</label>
                                <input value={Input.phone} onChange={handleChange} name="phone" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="name@company.com" required="" />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                                <input value={Input.password} onChange={handleChange} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required="" />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 ">Confirm password</label>
                                <input value={Input.confirmPassword} onChange={handleChange} type="password" name="confirmPassword" id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required="" />
                            </div>
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 " required="" />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label className="font-medium text-slate-600 ">I accept the <a className="font-medium text-blue-600 hover:underline " href="#">Terms and Conditions</a></label>
                                </div>
                            </div>
                            <button onClick={Validate} type="submit" className="w-full text-white bg-blue-700 text-base hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg  px-5 py-2.5 text-center ">Create an account</button>
                            <p className="text-sm  font-medium text-slate-600  ">
                                Already have an account? <Link to={'/auth/Login'} className="font-medium text-blue-600  hover:underline ">Login</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SignUp