import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import womeninstem from "../assets/womeninstem.png";
import tutorials from "../assets/tutorials.png";
import img1 from "../assets/img1.png";
import { Link } from "react-router-dom";

const ScrollCategories = () => {
  const settings = {
    arrows: false,
    dots: true,
    slidesToShow: 1.5,
    infinite: false,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col md:flex-row px-7 py-20 gap-4">
      <h1 className="text-5xl md:w-1/2 leading-tight">
        Find what you need by <br />
        <span className="text-green italic">categories.</span>
      </h1>
      <Slider className="w-full md:w-3/4" {...settings}>
        <div>
          <Link
            to="/articles/womeninstem"
            className="absolute ml-[110px] mt-[244px] text-3xl text-white"
          >
            Women In Stem
          </Link>
          <img
            src={womeninstem}
            alt=""
            className="w-[372px] h-[509px] mx-auto "
          />
        </div>
        <div>
          <Link
            to="/articles/tutorials"
            className="absolute ml-[160px] mt-[244px] text-3xl text-white"
          >
            Tutorials
          </Link>
          <img
            src={tutorials}
            alt=""
            className="w-[372px] h-[509px] mx-auto "
          />
        </div>
        <div>
          <img src={img1} alt="" className="w-[372px] h-[509px] mx-auto " />
        </div>
      </Slider>
    </div>
  );
};

export default ScrollCategories;
