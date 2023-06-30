import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryPosts2 } from "state";
import SlideCategory from "./SlideCategory";

const ScrollCategoriesPosts2 = ({ category }) => {
  const name = category.toLowerCase().replace(/ /g, "");
  const dispatch = useDispatch();
  const categoryPosts2 = useSelector((state) => state.categoryPosts2);
  const link = `https://girlswhocode.onrender.com/posts/post/${name}`;
  const [loading, setLoading] = useState(false);

  const getCategoryPosts2 = async () => {
    setLoading(true);
    const response = await fetch(link, {
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    const data = await response.json();
    dispatch(setCategoryPosts2({ categoryPosts2: data }));
    setLoading(false);
  };

  useEffect(() => {
    getCategoryPosts2();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const settings = {
    arrows: false,
    slidesToShow: 2.5,
    // infinite: false,
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
        breakpoint: 680, // screen size where settings below will apply
        settings: {
          slidesToShow: 1,
          dots: true,
          infinite: false,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col min-[990px]:flex-row gap-16 lg:gap-3 px-7 py-20">
      <Slider className="min-[990px]:w-3/4" {...settings}>
        {categoryPosts2.map(({ _id, title, picturePath, category }) => (
          <SlideCategory
            key={_id}
            title={title}
            path={picturePath}
            id={_id}
            category={category}
            fetch
            loading={loading}
          />
        ))}
      </Slider>
      <div className="min-[990px]:order-last order-first text-center md:text-left text-3xl sm:text-4xl md:text-5xl leading-tight text-green md:pl-10">
        <Link to={`/articles/${category}`}>{category}</Link>
      </div>
    </div>
  );
};

export default ScrollCategoriesPosts2;
