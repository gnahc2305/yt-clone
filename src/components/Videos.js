import React from 'react';
import Card from './Card';
import ChannelCard from './ChannelCard';

function Videos({videos}) {
  // console.log(videos[0]);
  return (
    <div className=''>
      {videos.map((item, idx) => (
        <Card key={idx} />
      ))}
    </div>
  )
}

export default Videos