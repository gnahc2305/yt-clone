import React from 'react';
import Card from './Card';
import ChannelCard from './ChannelCard';

function Videos({videos}) {
  // console.log(videos[0]);
  return (
    <div className='grid gap-5 p-5 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center overflow-auto h-[92vh]'>
      {videos.map((item, idx) => {
        if (item.id.kind === 'youtube#video') {
          return <Card key={idx} item={item} />
        } else {
          return <ChannelCard key={idx} item={item} />
        }
      })}
    </div>
  )
}

export default Videos