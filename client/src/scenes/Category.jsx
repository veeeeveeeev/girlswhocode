import React from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryPosts } from "state";
import Header from "./widgets/Header";

const Category = () => {
  const { category } = useParams();
  const dispatch = useDispatch();
  const categoryPosts = useSelector((state) => state.categoryPosts);
  const link = `https://girlswhocode.onrender.com/posts/post/${category
    .toLowerCase()
    .replace(/ /g, "")}`;

  const getCategoryPosts = async () => {
    const response = await fetch(link, {
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    const data = await response.json();
    dispatch(setCategoryPosts({ categoryPosts: data }));
  };

  useEffect(() => {
    getCategoryPosts();
  }, [categoryPosts]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [category]);

  return (
    <div className="">
      <Header title={category} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 py-24 place-items-center">
        {categoryPosts.map(({ _id, title, picturePath, category }) => (
          <div key={_id}>
            <Link to={`/articles/${category}/${_id}`}>
              {picturePath && (
                <img
                  alt="post"
                  className="w-80 h-80 mx-auto object-cover"
                  src={`https://girlswhocode.onrender.com/assets/${picturePath}`}
                />
              )}
              <p className="text-3xl text-center pt-10 px-14">{title}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
