import React from "react";
import hero from "../../assets/hero.jpg";

const Hero = () => {
  return (
    <div className="relative">
      <p className="text-bold text-[7vw] pl-10 md:pl-12 lg:pl-24 pt-16 sm:pt-20 md:pt-24 lg:pt-36 text-white absolute z-10">
        Code Her Way
      </p>
      <p className="text-[4vw] leading-normal px-11 md:px-14 lg:px-24 pt-24 min-[500px]:pt-28 sm:pt-32 md:pt-40 lg:pt-60 text-white absolute z-10">
        Empowering women to break the coding barrier
      </p>
      <img src={hero} alt="" className="w-full h-auto" />
    </div>
  );
};

export default Hero;
