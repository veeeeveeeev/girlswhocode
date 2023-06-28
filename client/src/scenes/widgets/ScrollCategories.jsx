import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import womeninstem from "../../assets/womeninstem.png";
import tutorials from "../../assets/tutorials.png";
import img1 from "../../assets/img1.png";
import SlideCategory from "./SlideCategory";

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
        },
      },
      {
        breakpoint: 1160, // screen size where settings below will apply
        settings: {
          slidesToShow: 1.5,
        },
      },
      {
        breakpoint: 680, // screen size where settings below will apply
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col min-[990px]:flex-row px-7 py-20 gap-16 lg:gap-4">
      <h1 className="text-center md:text-left text-3xl sm:text-4xl md:text-5xl md:pl-10 leading-tight">
        Find what you need by <br />
        <span className="text-green italic">categories.</span>
      </h1>
      <Slider className="min-[990px]:w-3/4" {...settings}>
        <SlideCategory title="General" path={img1} />
        <SlideCategory title="Women In Stem" path={womeninstem} />
        <SlideCategory title="Tutorials" path={tutorials} />
      </Slider>
    </div>
  );
};

export default ScrollCategories;
