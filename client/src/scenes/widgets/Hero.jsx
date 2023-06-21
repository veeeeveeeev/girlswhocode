import React from 'react'
import hero from '../../assets/hero.jpg'

const Hero = () => {
  return (
    <div className='relative'>
    <p className='text-4xl sm:text-5xl md:text-6xl lg:text-8xl pl-10 md:pl-12 lg:pl-24 pt-20 md:pt-24 lg:pt-36 text-white absolute z-10'>Code Her Way</p>
    {/* <p className='text-xl md:text-2xl lg:text-3xl pl-11 md:pl-14 lg:pl-28 pt-32 md:pt-40 lg:pt-60 text-white absolute z-10'>girls can code too...</p> */}
    <img src={hero} alt="" className="w-full h-auto" />
    </div>
  )
}

export default Hero