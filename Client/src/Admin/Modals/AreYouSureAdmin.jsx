
const AreYouSureAdmin = (props) => {
    const { setModifyData, message, from, DeleteProduct, setDelete, DeleteUser } = props;


    const handleYes = () => {
        if (from === 'ProductDelete') DeleteProduct()
        if (from === 'UserDelete') DeleteUser()

    }
    const handleNo = () => {
        if (from === 'ProductDelete') {
            setModifyData(prev => ({ ...prev, delete: null }));
        }
        if (from === 'UserDelete') {
            setDelete(null)
        }


    }

    return (
        <div>
            <div className=' w-screen h-screen fixed top-16 left-0 flex justify-center' style={{ backdropFilter: 'blur(1rem) brightness(.7)' }}>
                <div className="rounded-lg bg-white p-8 mt-1 shadow-2xl h-52">
                    <h2 className="text-xl font-bold">Are you sure you want to {message} ?</h2>
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
        </div>
    )
}

export default AreYouSureAdmin