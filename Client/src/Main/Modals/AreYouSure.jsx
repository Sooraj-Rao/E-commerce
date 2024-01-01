import { useContext } from 'react'
import { MyContext } from '../Context/Context'

const AreYouSure = (props) => {
    const { from, setFormShow, setConfirmDelete, message } = props
    const context = useContext(MyContext);
    const { removeCookie } = context;

    const handleYes = () => {
        // Logout
        if (from == 'Logout') {
            removeCookie('user');
            removeCookie('token');
            setFormShow(false)
            return window.location.href = '/'
        }
        if (from === 'cart') {
            setConfirmDelete((prev) => ({ ...prev, confirm: true }))
        }
    }

    const handleNo = () => {
        if (from == 'Logout') return setFormShow(false);
        if (from === 'cart') return setConfirmDelete((prev) => ({ ...prev, id: null }))
    }

    return (
        <div className=' w-screen h-screen fixed top-16 left-0 flex justify-center ModalBg z-50' style={{ backdropFilter: '' }}>
            <div className="rounded-lg bg-white p-8 mt-1 shadow-2xl h-52">
                <h2 className="text-xl font-bold">Are you sure you want to {message} ?</h2>
                <div className="mt-10 flex gap-2 justify-center text-white ">
                    <button onClick={handleYes} type="button" className="rounded bg-green-700 hover:bg-green-800 px-4 py-2 text-md font-medium ">
                        Yes, I'm sure
                    </button>

                    <button onClick={handleNo} type="button" className="rounded bg-red-700 hover:bg-red-800 px-4 py-2 text-md font-medium ">
                        No, go back
                    </button>
                </div>
            </div>
        </div >
    )
}

export default AreYouSure