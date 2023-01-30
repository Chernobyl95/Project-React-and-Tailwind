import React from 'react';
import { AiFillPhone, AiOutlineClockCircle } from 'react-icons/ai';
import { BsChatSquareDots } from 'react-icons/bs';

const TopBar = () => {
  return (
    <div className='flex justify-between items-center px-4 py-2'>
      <div className='flex items-center'>
        <BsChatSquareDots
          size={30}
          className='text-[var(--primary-dark)] mr-2'
        />
        <h1 className='text-xl font-bold text-gray-700'>Holidays</h1>
      </div>
      <div className='flex '>
        <div className='hidden md:flex items-center px-6'>
          <AiOutlineClockCircle
            size={20}
            className='mr-2 text-[var(--primary-dark)]'
          />
          <p className='text-sm text-gray-700'>Mon - Fri 9:00 - 17:00</p>
        </div>
        <div className='hidden md:flex items-center px-6'>
          <AiFillPhone size={20} className='mr-2 text-[var(--primary-dark)]' />
          <p className='text-sm text-gray-700'>+1 234 567 890</p>
        </div>
        <button className='px-4 py-2 border bg-gradient-to-r from-[var(--primary-dark)] to-[var(--primary-light)] text-white'>
          Get a Free Quote
        </button>
      </div>
    </div>
  );
};

export default TopBar;
