import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center px-16 py-14 lg:py-28 w-full h-auto bg-grey gap-14 lg:gap-0">
      <div>
        <img src={logo} alt="" className="w-[100.2px] h-[80.8px]" />
      </div>
      <div className="flex flex-col sm:flex-row justify-between gap-10 sm:gap-20 md:gap-32 text-2xl">
        <div className="flex flex-col justify-between gap-4">
          <Link to="/about" className="font-bold">
            About
          </Link>
          <p>Why</p>
          <p>About us</p>
        </div>
        <div className="flex flex-col justify-between gap-4">
          <p className="font-bold">Categories</p>
          <Link to="/articles/general" onClick={handleClick}>
            General
          </Link>
          <Link to="/articles/womeninstem" onClick={handleClick}>
            Women In Stem
          </Link>
          <Link to="/articles/tutorials" onClick={handleClick}>
            Tutorials
          </Link>
        </div>
        <div className="flex flex-col justify-between gap-4 font-bold">
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
