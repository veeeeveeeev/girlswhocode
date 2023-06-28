import React from "react";
import { Link } from "react-router-dom";

const SlideCategory = ({ title, path }) => {
  return (
    <div className="relative max-w-[372px] min-h-[509px]">
      <Link
        to={`/articles/${title}`}
        className="text-3xl text-white absolute top-1/2 text-center transform -translate-x-1/2 -translate-y-1/2 left-1/2"
      >
        {title}
      </Link>
      <img
        src={path}
        alt=""
        className="mx-auto max-w-[372px] md:w-[372px] min-h-[509px] object-cover"
      />
    </div>
  );
};

export default SlideCategory;
