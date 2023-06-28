import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPost } from "state";
import Other from "./widgets/Other";

const Post = () => {
  const { id } = useParams();
  const link = `https://girlswhocode.onrender.com/posts/${id}`;
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post);

  const getPost = async () => {
    const response = await fetch(link, {
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    const data = await response.json();
    dispatch(setPost({ post: data }));
  };

  useEffect(() => {
    getPost();
  }, [post]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <div className="bg-grey py-10 px-10 md:px-20">
        <div>
          <p className="lg:text-7xl md:text-6xl text-5xl text-green">
            {post.title}
          </p>
          <p className="text-2xl pt-6 pb-24">
            {new Date(post.createdAt).toLocaleString().split(",")[0]}
          </p>
          <div
            className="leading-loose"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </div>
      <Other postId={id} />
    </div>
  );
};

export default Post;
