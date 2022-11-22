import React from 'react';
import Card from './Card';

function Videos({videos}) {
  // console.log(videos[0]);
  return (
    <div className=''>
      {videos.map((item, idx) => {
        <Card />
      })}
    </div>
  )
}

export default Videos