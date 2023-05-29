import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "state";
import PostWidget from "./PostWidget";

const PostsWidget = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  const getPosts = async () => {
    const response = await fetch("http://localhost:3001/posts", {
      method: "GET",
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
    const data = await response.json();
    dispatch(setPosts({ posts: data }));
  };

  useEffect(() => {
      getPosts();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  console.log(posts);

  return (
    <>
      {posts.map(
        ({
          _id,
          title,
          content,
          picturePath,
          category
        }) => (
          <PostWidget
            key={_id}
            postId={_id}
            title={title}
            content={content}
            picturePath={picturePath}
            category={category}
          />
        )
      )}
    </>
  );
};

export default PostsWidget;