import React from 'react'

let channelLink = 'https://www.youtube.com/@';

function ChannelCard({ item }) {
  console.log(item.snippet?.thumbnails);
  // console.log(item);
  return (
    <a href={channelLink + item.snippet.channelTitle} target="_blank" rel="noopener noreferrer">
      <div className='bg-gray-800 md:h-[200px] md:w-[200px] rounded-full h-[150px] w-[150px] m-2'>
        <img src={item.snippet?.thumbnails?.default?.url} alt="profile" />
      </div>
    </a>
  )
}

export default ChannelCard