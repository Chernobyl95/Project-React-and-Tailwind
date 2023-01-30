import React from 'react';

const Hero = () => {
  return (
    <div className='w-full h-[90vh]'>
      <img
        src='https://img2.goodfon.com/wallpaper/nbig/f/42/netherlands-north-holland.jpg'
        className='w-full h-full object-cover'
      />
      <div className='max-w-[1140px] m-auto'>
        <div className=' absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4'>
          <h1 className='font-bold text-4xl'>Find your Special Trip</h1>
          <h2 className='text-4xl font-bold py-4 italic'>With Holidays</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio neque
            tempora consequatur eligendi est eos culpa officiis eveniet
            laboriosam iusto aliquid ipsam, assumenda ipsum ex at vel
            repellendus fuga quam eius exercitationem? Maiores quisquam
            deserunt, sed est beatae asperiores doloribus!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
