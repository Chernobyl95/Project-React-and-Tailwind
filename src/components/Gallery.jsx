import React from 'react';

const Gallery = () => {
  return (
    <div id='gallery' className='max-w-[1140px] m-auto w-full p-4 py-16'>
      <h2 className='text-2xl font-bold text-center text-gray-700 p-4'>
        Gallery
      </h2>
      <div className='grid sm:grid-cols-5 gap-4'>
        <div className='sm:col-span-3 col-span-2 row-span-2'>
          <img
            className=' w-full h-full object-cover'
            src='https://source.unsplash.com/random/city/'
            alt='random'
          />
        </div>
        <div>
          <img
            className=' w-full h-full object-cover'
            src='https://source.unsplash.com/random/travel'
            alt='random'
          />
        </div>
        <div>
          <img
            className=' w-full h-full object-cover'
            src='https://source.unsplash.com/random/night'
            alt='random'
          />
        </div>
        <div>
          <img
            className=' w-full h-full object-cover'
            src='https://source.unsplash.com/random/world'
            alt='random'
          />
        </div>
        <div>
          <img
            className=' w-full h-full object-cover'
            src='https://source.unsplash.com/random/city'
            alt='random'
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
