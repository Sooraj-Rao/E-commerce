import { Link } from 'react-router-dom';

const SearchResult = (props) => {
    const { Result, setResult, setSearchQuery } = props;
    return (
        <div onClick={() => setSearchQuery('')} className='   absolute  top-20 left-0 flex justify-center h-screen w-screen ModalBg'>
            <div className=' w-1/2 relative rounded-2xl mt-2 h-fit  bg-gray-100  '>
                {
                    Result?.length != 0 ?
                        Result?.slice(0, 6).map((item, i) => {
                            return (
                                <Link onClick={() => { setResult(), setSearchQuery('') }} to={'/p/' + item?.name.replaceAll(' ', '-')} key={i}
                                    className=' py-3 group font-medium hover:bg-blue-100 border-y border-slate-100   rounded-2xl flex items-center px-4 gap-x-4 '>
                                    <div className=' h-10 w-10 '>
                                        <img src={item?.imageUrl} className=' h-full  w-full' alt="" />
                                    </div>
                                    <h1>
                                        {item?.name}
                                    </h1>
                                </Link>
                            )
                        })
                        :
                        <h1 className=' text-center py-3'>No Products found!</h1>
                }
            </div>
        </div>
    )
}

export default SearchResult