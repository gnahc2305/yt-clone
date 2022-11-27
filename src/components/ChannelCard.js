import React from 'react'

function ChannelCard({ item }) {
  console.log(item.snippet?.thumbnails?.high?.url);
  return (
    <div className='bg-gray-800 md:h-[200px] md:w-[200px] rounded-full h-[150px] w-[150px] m-2'>
      <img src={item.snippet?.thumbnails?.high?.url} alt="profile" srcset="" />
    </div>
  )
}

export default ChannelCard