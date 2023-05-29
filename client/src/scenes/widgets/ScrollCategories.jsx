import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import womeninstem from "../../assets/womeninstem.png";
import tutorials from "../../assets/tutorials.png";
import img1 from "../../assets/img1.png";
import { Link } from "react-router-dom";

const ScrollCategories = () => {
  const settings = {
    arrows: false,
    slidesToShow: 2.5,
    infinite: false,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1330, // screen size where settings below will apply
        settings: {
          slidesToShow: 1.8,
        }
      },
      {
        breakpoint: 1160, // screen size where settings below will apply
        settings: {
          slidesToShow: 1.5,
        }
      },
      {
        breakpoint: 680, // screen size where settings below will apply
        settings: {
          slidesToShow: 1,
          dots: true
        }
      }
    ]
  };

  return (
    <div className="flex flex-col min-[990px]:flex-row px-7 py-20 gap-16 lg:gap-4">
      <h1 className="text-center md:text-left text-3xl sm:text-4xl md:text-5xl md:pl-10 leading-tight">
        Find what you need by <br />
        <span className="text-green italic">categories.</span>
      </h1>
      <Slider className="min-[990px]:w-3/4" {...settings}>
        <div className="relative w-full md:min-w-[372px] md:min-h-[509px]">
          <Link
            to="/articles/womeninstem"
            className="absolute text-3xl top-1/2 text-center transform -translate-x-1/2 -translate-y-1/2 left-1/2 text-white"
          >
            Women In Stem
          </Link>
          <img
            src={womeninstem}
            alt=""
            className="md:min-w-[372px] min-h-[509px] mx-auto object-cover"
          />
        </div>
        <div>
          <Link
            to="/articles/tutorials"
            className="absolute top-1/2 text-center transform -translate-x-1/2 -translate-y-1/2 left-1/2 text-3xl text-white"
          >
            Tutorials
          </Link>
          <img
            src={tutorials}
            alt=""
            className="md:min-w-[372px] min-h-[509px] mx-auto object-cover"
          />
        </div>
        <div>
          <img src={img1} alt="" className=" md:min-w-[372px] min-h-[509px] mx-auto object-cover" />
        </div>
      </Slider>
    </div>
  );
};

export default ScrollCategories;
