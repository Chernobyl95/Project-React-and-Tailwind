import React from 'react';

/* import { BsChatSquareDots } from 'react-icons/bs';
 */ import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaBars,
} from 'react-icons/fa';
import { useState } from 'react';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='w-full min-h-[50px] flex justify-between items-center absolute z-10 text-white bg-gray-700/80'>
      <ul className=' hidden sm:flex px-4'>
        <li className='p-4 text-sm'>
          <a href='/'>Home</a>
        </li>
        <li className='p-4 text-sm'>
          <a href='#gallery'>Gallery</a>
        </li>
        <li className='p-4 text-sm'>
          <a href='#deals'>Deals</a>
        </li>
        <li className='p-4 text-sm'>
          <a href='#contact'>Contact</a>
        </li>
      </ul>
      <div className='flex justify-between'>
        <FaFacebookF className='mx-4' />
        <FaInstagram className='mx-4' />
        <FaTwitter className='mx-4' />
      </div>
      {/*Hamburger Menu*/}
      <div onClick={handleNav} className=' sm:hidden z-10'>
        <FaBars size={20} className='mr-4 cursor-pointer' />
      </div>
      {/*Mobile Menu*/}
      <div
        onClick={handleNav}
        className={
          nav
            ? 'overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex flex-col '
            : 'absolute top-0 h-screen left-[-100%] ease-in-out duration-500'
        }
      >
        <ul className='h-full w-full text-center pt-12'>
          <li className='py-8 text-xl'>
            <a href='/'>Home</a>
          </li>
          <li className='py-8 text-xl'>
            <a href='#gallery'>Gallery</a>
          </li>
          <li className='py-8 text-xl'>
            <a href='#deals'>Deals</a>
          </li>
          <li className='py-8 text-xl'>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
