import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "state";
import ScrollPosts from "./widgets/ScrollPosts";
import ScrollCategoriesPosts1 from "./widgets/ScrollCategoriesPosts1";
import ScrollCategoriesPosts2 from "./widgets/ScrollCategoriesPosts2";
import { Link } from "react-router-dom";

const Articles = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  const getPosts = async () => {
    const response = await fetch("https://girlswhocode.onrender.com/posts", {
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
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between gap-5 items-center">
        <img
          alt="post"
          className="md:w-1/2 md:h-1/2 object-cover aspect-square md:p-0 p-12 pt-0"
          src={`https://girlswhocode.onrender.com/assets/${posts[0].picturePath}`}
        />
        <div className="text-center md:text-right md:w-1/2 md:order-last order-first lg:p-24 md:p-20 sm:px-32 px-12 py-12">
          <p className="text-orange lg:text-4xl">New! </p>
          <Link
            to={`/articles/${posts[0].category}/${posts[0]._id}`}
            // md:pb-10
            className="text-green text-4xl md:text-5xl lg:text-6xl"
          >
            {posts[0].title}
          </Link>
          <p
            dangerouslySetInnerHTML={{
              __html: posts[0].content.slice(0, 35) + "...",
            }}
            className="ml-auto mr-0 md:w-1/2 md:text-3xl lg:text-4xl break-words hidden md:block"
          />
        </div>
      </div>
      <ScrollPosts text="See more " subtext="posts." />
      <ScrollCategoriesPosts1 category="Women In Stem" />
      <ScrollCategoriesPosts2 category="Tutorials" />
    </div>
  );
};

export default Articles;
