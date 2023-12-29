import { useContext } from 'react'
import { MyContext } from '../Context/Context'

const AreYouSure = ({ from, setFormShow }) => {
    const context = useContext(MyContext);
    const { removeCookie } = context;

    const handleYes = () => {
        // Logout
        if (from == 'Logout') {
            removeCookie('user');
            removeCookie('token');
            setFormShow(false)
            window.location.href = '/'
        }
    }

    const handleNo = () => {
        if (from == 'Logout') setFormShow(false)
    }

    return (
        <div className=' w-screen h-screen fixed top-16 left-0 flex justify-center' style={{ backdropFilter: 'blur(1rem) brightness(.7)' }}>
            <div className="rounded-lg bg-white p-8 mt-1 shadow-2xl h-52">
                <h2 className="text-xl font-bold">Are you sure you want to {from} ?</h2>
                <div className="mt-10 flex gap-2 justify-center">
                    <button onClick={handleYes} type="button" className="rounded bg-green-100 hover:bg-green-200 px-4 py-2 text-md font-medium ">
                        Yes, I'm sure
                    </button>

                    <button onClick={handleNo} type="button" className="rounded bg-red-100 hover:bg-red-200 px-4 py-2 text-md font-medium text-gray-600">
                        No, go back
                    </button>
                </div>
            </div>
        </div >
    )
}

export default AreYouSure