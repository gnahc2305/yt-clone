import React from 'react'

function Card({ item }) {
    // console.log(item.snippet.title)
  return (
    <div className='bg-slate-700 rounded-md md:h-[250px] md:w-[250px] h-[200px] w-[200px]'>
        <div className='bg-red-900 h-[55%] rounded-md'>
            img
        </div>

        <div className=''>
            <h1 className='text-white p-2 text-md md:text-green'>{item.snippet.title}</h1>
        </div>
    </div>
  )
}

export default Card