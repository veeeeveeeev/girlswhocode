import React from 'react';
import Header from './widgets/Header';
import { useEffect } from "react";


const Contact = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  return (
    <div>
    <Header title="Get in touch with me"/>
    <div className='flex-col py-28 px-12 sm:px-24'>
    <p className='text-5xl pb-28 leading-tight break-words md:text-left text-center'>Email: <br /> kphamnm06@gmail.com</p>
    <form action="mailto:kphamnm06@gmail.com" method="post" encType="text/plain" className='text-right'>
    <button type="submit" className='text-5xl text-orange'>Send me an email</button>
    </form>
    </div>
    </div>
  )
}

export default Contact