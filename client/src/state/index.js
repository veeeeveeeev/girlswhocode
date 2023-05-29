import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: [],
    categoryPosts: [],
    categoryPosts2: [],
    post: []
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
        setCategoryPosts: (state, action) => {
            state.categoryPosts = action.payload.categoryPosts;
        },
        setCategoryPosts2: (state, action) => {
            state.categoryPosts2 = action.payload.categoryPosts2;
        },
    }
});

export const { setPosts, setPost, setCategoryPosts, setCategoryPosts2 } = authSlice.actions;
export default authSlice.reducer;