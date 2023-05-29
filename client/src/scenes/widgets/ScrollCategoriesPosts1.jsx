import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryPosts } from "state";

const ScrollCategoriesPosts1 = ({category}) => {
  const name = category.toLowerCase().replace(/ /g, "");
  const dispatch = useDispatch();
  const categoryPosts = useSelector((state) => state.categoryPosts);
  const link = `http://localhost:3001/posts/post/${name}`;

  const getCategoryPosts = async () => {
    const response = await fetch(link, {
      method: "GET",
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
    const data = await response.json();
    dispatch(setCategoryPosts({ categoryPosts: data }));
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
    <div className="text-center md:text-left text-3xl sm:text-4xl md:text-5xl md:pl-10 leading-tight text-green">
    <Link to={`/articles/${name}`} >{category}</Link>
    </div>
      <Slider className="min-[990px]:w-3/4" {...settings}>
      {categoryPosts.map(
        ({
          _id,
          title,
          picturePath,
          category
        }) => (
        <div key={_id} className="relative w-[372px] h-[509px]">
          <Link
            to={`/articles/${category}/${_id}`}
            className="text-3xl text-white absolute top-1/2 text-center transform -translate-x-1/2 -translate-y-1/2 left-1/2"
          >
            {title}
          </Link>
          {picturePath && (
          <img
            src={`http://localhost:3001/assets/${picturePath}`}
            alt=""
            className="mx-auto max-w-[372px] md:w-[372px] min-h-[509px] object-cover"
          />
          )}
        </div>
        )
      )}
      </Slider>
    </div>
  );
};

export default ScrollCategoriesPosts1;
