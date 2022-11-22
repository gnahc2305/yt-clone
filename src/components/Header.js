import React from 'react'
import { MdOutlineOndemandVideo } from 'react-icons/md'

function Header() {
  return (
    <div className="fixed h-20 w-screen flex bg-gray-900 justify-center items-center">
        <MdOutlineOndemandVideo size={50} className="mr-auto ml-10 text-white" />
        
        <input type="text" placeholder='   Search' className='h-10 w-80 rounded-2xl mr-auto' />
    </div>
  )
}

export default Header