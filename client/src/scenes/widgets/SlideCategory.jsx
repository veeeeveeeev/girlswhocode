import { Skeleton } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const SlideCategory = ({ title, path, fetch, id, category, loading }) => {
  return (
    <div className="relative ">
      <Link
        to={fetch ? `/articles/${category}/${id}` : `/articles/${title}`}
        className="text-3xl text-white absolute top-1/2 text-center transform -translate-x-1/2 -translate-y-1/2 left-1/2 myShadow"
      >
        {title}
      </Link>
      {loading ? (
        <Skeleton>
          <img
            src={
              fetch ? `https://girlswhocode.onrender.com/assets/${path}` : path
            }
            alt=""
            className="mx-auto max-w-[372px] md:w-[372px] min-h-[509px] w-[90%] aspect-auto object-cover"
          />
        </Skeleton>
      ) : (
        <img
          src={
            fetch ? `https://girlswhocode.onrender.com/assets/${path}` : path
          }
          alt=""
          className="mx-auto max-w-[372px] md:w-[372px] min-h-[509px] w-[90%] aspect-auto object-cover"
        />
      )}
    </div>
  );
};

export default SlideCategory;
