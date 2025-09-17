import React from 'react';
import {BsFacebook, BsInstagram, BsTwitter, BsLinkedin} from 'react-icons/bs'

const Footer = () => {

    const currentDate = new Date();
    const year = currentDate.getFullYear();

  return (
    <>
      <footer className="absolute left-0 bottom-0 h-[10vh] w-full py-5 flex flex-col sm:flex-row items-center justify-between text-white bg-gray-800 sm:px-20">
        <section className='text-lg'>
          Copyright {year} | All rights reserved
        </section>
        <section className="flex items-center justify-center text-white gap-5 text-2xl">
          <a href="#" className='hover:text-yellow-400 transition-all ease-in-out duration-300'><BsFacebook /></a>
          <a href="#" className='hover:text-yellow-400 transition-all ease-in-out duration-300'><BsInstagram /></a>
          <a href="#" className='hover:text-yellow-400 transition-all ease-in-out duration-300'><BsTwitter /></a>
          <a href="#" className='hover:text-yellow-400 transition-all ease-in-out duration-300'><BsLinkedin /></a>
        </section>
      </footer>
    </>
  )
}

export default Footer
