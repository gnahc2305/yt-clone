import React from 'react'

let ytLink = 'https://www.youtube.com/watch?v='

function Card({ item: { id: {videoId}, snippet} }) {
  return (
    <div className='rounded-md md:h-[250px] md:w-[250px] h-[200px] w-[200px] cursor-pointer'>
      <a href={ytLink + videoId} target="_blank" rel="noopener noreferrer">
        <div className='h-[65%] rounded-md'>
            <img src={snippet?.thumbnails?.high?.url} alt="thumbnail" className='h-[100%] w-[100%]' />
        </div>
        <div className=''>
            <h1 className='text-black p-2 text-sm'>{snippet.title}</h1>
            <h5>{snippet.channelTitle}</h5>
        </div>
      </a>
    </div>
  )
}

export default Card