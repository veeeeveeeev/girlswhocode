import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "state";
import { Link } from "react-router-dom";

const Other = ({ postId }) => {
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

  return (
    <div className="pt-16 bg-white px-20 pb-11">
      <p className="text-2xl font-bold text-orange pb-6">Posts you may like</p>
      {posts
        .filter((value) => value._id !== postId)
        .map(({ _id, title, createdAt, category }) => (
          <div
            className="flex flex-col md:flex-row gap-1 md:gap-80 pb-6"
            key={_id}
          >
            <Link
              reloadDocument
              className="text-2xl md:w-1/6"
              to={`/articles/${category}/${_id}`}
            >
              {title}
            </Link>
            <p className="text-2xl text-grey text-justify">
              {new Date(createdAt).toLocaleString("en-US", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
              })}
            </p>
          </div>
        ))}
    </div>
  );
};

export default Other;
