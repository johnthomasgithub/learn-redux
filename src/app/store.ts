import { configureStore } from "@reduxjs/toolkit";

import postReducer from "../features/post/PostsSlice";
export const store = configureStore({
  reducer: {
    posts: postReducer,
  },
});
