import React from 'react';

const Activities = () => {
  return (
    <div className='max-w-[1140px] m-auto w-full md:flex mt-[-75px]'>
      <div className=' relative p-4'>
        <h3 className=' absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-2xl font-bold text-white'>
          Resorts
        </h3>
        <img
          className=' w-full h-full object-cover relative border-4 border-white shadow-lg'
          src='https://media.cntraveler.com/photos/53da60a46dec627b149e66f4/master/pass/hilton-moorea-lagoon-resort-spa-moorea-french-poly--110160-1.jpg'
          alt='/'
        />
      </div>
      <div className=' relative p-4'>
        <h3 className=' absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-2xl font-bold text-white'>
          Cruise
        </h3>
        <img
          className=' w-full h-full object-cover relative border-4 border-white shadow-lg'
          src='https://static.toiimg.com/photo/80582831.cms'
          alt='/'
        />
      </div>
      <div className=' relative p-4'>
        <h3 className=' absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-2xl font-bold text-white'>
          Resorts
        </h3>
        <img
          className=' w-full h-full object-cover relative border-4 border-white shadow-lg'
          src='https://www.tripsavvy.com/thmb/9DfO21LndIr2cuN173_FrQVj-MM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-163175242-58f631e43df78ca159f2b798.jpg'
          alt='/'
        />
      </div>
    </div>
  );
};

export default Activities;
