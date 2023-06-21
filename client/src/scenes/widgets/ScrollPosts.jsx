import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import arrowleft from "../../assets/arrowleft.png";
import arrowright from "../../assets/arrowright.png";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "state";
import { Link } from "react-router-dom";

const ScrollPosts = ({ text, subtext }) => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  const getPosts = async () => {
    const response = await fetch("https://girlswhocode.onrender.com/posts/", {
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    const data = await response.json();
    dispatch(setPosts({ posts: data }));
  };

  useEffect(() => {
    getPosts();
  }, [posts]); // eslint-disable-line react-hooks/exhaustive-deps

  const slider = useRef(null);

  const settings = {
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1160, // screen size where settings below will apply
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // screen size where settings below will apply
        settings: {
          slidesToShow: 1,
          // centerMode: true,
          // centerPadding: '40px'
        },
      },
    ],
  };
  return (
    <div className="">
      <h2 className="py-14 md:py-20 text-3xl sm:text-4xl md:text-5xl text-center">
        {text}
        <span className="text-orange">{subtext}</span>
      </h2>
      <div className="flex flex-row place-content-around items-start mx-auto px-4 md:px-7 lg:px-10 xl:px-12">
        <button
          className="pt-12 sm:pt-36"
          onClick={() => slider?.current?.slickPrev()}
        >
          <img src={arrowleft} alt="" />
        </button>
        <Slider
          className="w-3/4 md:w-11/12 flex flex-row justify-items-center absolute"
          ref={slider}
          {...settings}
        >
          {posts.map(({ _id, title, picturePath, category }) => (
            <Link to={`/articles/${category}/${_id}`} key={_id}>
              {picturePath && (
                <img
                  alt="post"
                  className="md:w-80 md:h-80  w-1/2 after:pb-[100%] mx-auto my-auto object-cover"
                  src={`http://localhost:3001/assets/${picturePath}`}
                />
              )}
              <p className="text-3xl text-center p-10">{title}</p>
            </Link>
          ))}
        </Slider>
        <button
          className="pt-12 sm:pt-36"
          onClick={() => slider?.current?.slickNext()}
        >
          <img src={arrowright} alt="" />
        </button>
      </div>
    </div>
  );
};

export default ScrollPosts;
