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
        breakpoint: 1400, // screen size where settings below will apply
        settings: {
          slidesToShow: 1.8,
        },
      },
      {
        breakpoint: 846, // screen size where settings below will apply
        settings: {
          slidesToShow: 1.5,
        },
      },
      {
        breakpoint: 660, // screen size where settings below will apply
        settings: {
          slidesToShow: 1.0,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col min-[990px]:flex-row px-7 md:py-20 pb-10 gap-16 lg:gap-5 overflow-hidden">
      <h1 className="text-center md:text-left text-3xl sm:text-4xl md:text-5xl md:pl-10 leading-tight">
        Find what you need by <br />
        <span className="text-green italic">categories.</span>
      </h1>
      <Slider className="min-[990px]:w-3/4" {...settings}>
        <SlideCategory title="General" path={img1} fetch={false} />
        <SlideCategory title="Women In Stem" path={womeninstem} fetch={false} />
        <SlideCategory title="Tutorials" path={tutorials} fetch={false} />
      </Slider>
    </div>
  );
};

export default ScrollCategories;
