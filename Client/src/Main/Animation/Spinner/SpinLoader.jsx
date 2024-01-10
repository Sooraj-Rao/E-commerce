const SpinLoader = () => {
    return (
        <div className=" flex justify-center">
            <div className="flex font-semibold text-lg gap-x-3 text-slate-700 bg-slate-200 px-20 rounded py-6">
                <h1>Loading</h1>
            <div className="  h-6 w-6 border-4 border-slate-500 animate-spin border-t-transparent rounded-full"></div>
            </div>
        </div>
    )
}

export default SpinLoader