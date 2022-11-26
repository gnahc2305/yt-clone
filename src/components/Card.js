import React from 'react'

function Card({ item: { id: {videoId}, snippet} }) {
    // console.log(item.snippet.title)
  return (
    <div className='rounded-md md:h-[250px] md:w-[250px] h-[200px] w-[200px]'>
        <div className='h-[65%] rounded-md'>
            <img src={snippet?.thumbnails?.high?.url} alt="thumbnail" className='h-[100%] w-[100%]' />
        </div>

        <div className=''>
            <h1 className='text-black p-2 text-sm'>{snippet.title}</h1>
        </div>
    </div>
  )
}

export default Card