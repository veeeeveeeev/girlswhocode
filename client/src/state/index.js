import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  categoryPosts: [],
  categoryPosts2: [],
  post: [],
  cateogoryPost: [],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload.posts;
    },
    setPost: (state, action) => {
      state.post = action.payload.post;
    },
    setCategoryPost: (state, action) => {
      state.cateogoryPost = action.payload.cateogoryPost;
    },
    setCategoryPosts: (state, action) => {
      state.categoryPosts = action.payload.categoryPosts;
    },
    setCategoryPosts2: (state, action) => {
      state.categoryPosts2 = action.payload.categoryPosts2;
    },
  },
});

export const {
  setPosts,
  setPost,
  setCategoryPosts,
  setCategoryPosts2,
  setCategoryPost,
} = authSlice.actions;
export default authSlice.reducer;
