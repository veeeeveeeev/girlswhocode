import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryPosts2 } from "state";

const ScrollCategoriesPosts2 = ({ category }) => {
  const name = category.toLowerCase().replace(/ /g, "");
  const dispatch = useDispatch();
  const categoryPosts2 = useSelector((state) => state.categoryPosts2);
  const link = `https://girlswhocode.onrender.com/posts/post/${name}`;

  const getCategoryPosts2 = async () => {
    const response = await fetch(link, {
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    const data = await response.json();
    dispatch(setCategoryPosts2({ categoryPosts2: data }));
  };

  useEffect(() => {
    getCategoryPosts2();
  }, [categoryPosts2]); // eslint-disable-line react-hooks/exhaustive-deps

  const settings = {
    arrows: false,
    slidesToShow: 2.5,
    // infinite: false,
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
          infinite: false,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col min-[990px]:flex-row gap-16 lg:gap-3 px-7 py-20">
      <Slider className="min-[990px]:w-3/4" {...settings}>
        {categoryPosts2.map(({ _id, title, picturePath, category }) => (
          <div key={_id} className="relative w-[372px] h-[509px]">
            {picturePath && (
              <img
                src={`http://localhost:3001/assets/${picturePath}`}
                alt=""
                className="mx-auto max-w-[372px] md:w-[372px] min-h-[509px] object-cover"
              />
            )}
            <Link
              to={`/articles/${category}/${_id}`}
              className="text-3xl text-white absolute top-1/2 text-center transform -translate-x-1/2 -translate-y-1/2 left-1/2"
            >
              {title}
            </Link>
          </div>
        ))}
      </Slider>
      <div className="min-[990px]:order-last order-first text-center md:text-left text-3xl sm:text-4xl md:text-5xl leading-tight text-green md:pl-10">
        <Link to={`/articles/${name}`}>{category}</Link>
      </div>
    </div>
  );
};

export default ScrollCategoriesPosts2;
