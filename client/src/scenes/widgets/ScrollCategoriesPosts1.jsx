import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryPosts } from "state";
import SlideCategory from "./SlideCategory";

const ScrollCategoriesPosts1 = ({ category }) => {
  const name = category.toLowerCase().replace(/ /g, "");
  const dispatch = useDispatch();
  const categoryPosts = useSelector((state) => state.categoryPosts);
  const link = `https://girlswhocode.onrender.com/posts/post/${name}`;
  const [loading, setLoading] = useState(false);

  const getCategoryPosts = async () => {
    setLoading(true);
    const response = await fetch(link, {
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    const data = await response.json();
    dispatch(setCategoryPosts({ categoryPosts: data }));
    setLoading(false);
  };

  useEffect(() => {
    getCategoryPosts();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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
      <div className="text-center md:text-left text-3xl sm:text-4xl md:text-5xl md:pl-10 leading-tight text-green">
        <Link to={`/articles/${category}`}>{category}</Link>
      </div>
      <Slider className="min-[990px]:w-3/4" {...settings}>
        {categoryPosts.map(({ _id, title, picturePath, category }) => (
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
    </div>
  );
};

export default ScrollCategoriesPosts1;
