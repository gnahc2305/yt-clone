import React from 'react';
import Card from './Card';

function Videos({videos}) {
  // console.log(videos[0]);
  return (
    <div className='grid gap-5 p-5 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {videos.map((item, idx) => (
        <Card key={idx} item={item} />
      ))}
    </div>
  )
}

export default Videos