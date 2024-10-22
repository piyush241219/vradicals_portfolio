import React, { useState, useEffect } from 'react';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    // <div className={`fixed top-0 left-0 right-0 z-10 ${scrolled ? 'bg-black' : 'bg-transparent'}`}>
    <div className={`sticky top-0 left-0 right-0 z-10 ${scrolled ? 'bg-black' : 'bg-transparent'} navbar`}>
      <div className="flex justify-between py-2">
       <Link to="/">
       <div className='flex items-center justify-between md:px-10 px-5 gap-3 md:gap-5'>
          <img src={logo} alt="" className='w-[10vw] md:w-[5vw] nav-logo'/>
          <h2 className='text-white md:text-4xl text-[5vw] nav-text'>
            <span className='text-[#B366CF]'>PORTFOLIO</span>
          </h2>
        </div>
       </Link>
          <div className=' flex items-center'>
          <a href='https://vradicals.io/' className='px-10 text-[#B366CF] cursor-pointer underline  md:text-[15px] text-[8px] flex items-center gap-2'>Visit Our Website   <FaArrowRight className='text-[]'/></a>
          </div>
      </div>
    </div>
  );
}
