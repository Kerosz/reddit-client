import { createSlice } from '@reduxjs/toolkit';

type PostState = {
  posts: object[];
  post: object;
  next: string | null;
  previous: string | null;
};

const initialState: PostState = {
  posts: [],
  post: {},
  next: null,
  previous: null,
};

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPageData(state, { payload }) {
      state.next = payload.next;
      state.previous = payload.previous;
    },
    setMorePosts(state, { payload }) {
      state.posts.push(payload);
    },
    setPostData(state, { payload }) {
      state.posts = payload;
    },
  },
});

export const pageSelector = (state: PostState) => state.next;

export const { setPageData, setMorePosts, setPostData } = postSlice.actions;

export default postSlice.reducer;
