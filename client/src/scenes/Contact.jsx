import React from 'react';
import Header from './widgets/Header';

const Contact = () => {
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