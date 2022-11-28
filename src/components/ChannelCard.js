import React from 'react'

let channelLink = 'https://www.youtube.com/@';
const demoProfilePicture = 'http://dergipark.org.tr/assets/app/images/buddy_sample.png'


function ChannelCard({ item }) {
  console.log(item?.snippet?.thumbnails?.high?.url);
  // console.log(item);
  return (
    <a href={channelLink + item.snippet.channelTitle} target="_blank" rel="noopener noreferrer">
      <div className='bg-gray-800 md:h-[200px] md:w-[200px] rounded-full h-[150px] w-[150px] mt-[-40px]'>
        <img src={item?.snippet?.thumbnails?.high?.url} alt="profile" />
      </div>
    </a>
  )
}

export default ChannelCard