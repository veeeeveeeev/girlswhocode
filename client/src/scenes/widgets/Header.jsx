import React from "react";
import about from "../../assets/about.png";

const Header = ({ title }) => {
  return (
    <div className="relative">
      <p className="absolute top-2/4 text-center transform -translate-x-1/2 -translate-y-1/2 left-2/4 text-7xl text-green">
        {title}
      </p>
      <img src={about} alt="" className="w-full h-[635px] object-cover" />
    </div>
  );
};

export default Header;
