import React from 'react'

const Spinner = () => {
  return (
    <div className=' flex justify-center py-[2px]'>
        <div className=' h-5 w-5 border-2 border-t-transparent border-slate-100 rounded-full animate-spin'>
        </div>
    </div>
  )
}

export default Spinner