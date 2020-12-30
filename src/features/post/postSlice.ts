import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { IFetch, TPost } from '../index';
import API from '../../lib/API';

export interface IPost extends IFetch {
  data: TPost;
}

type TResponse = {
  post: object;
  comments: object[];
  after: string;
  before: string;
};

const initialState: IPost = {
  status: 'idle',
  error: null,
  isLoading: true,
  isError: false,
  page: {
    before: null,
    after: null,
  },
  data: {
    post: {},
    comments: [],
  },
};

export const getPost = createAsyncThunk(
  'post/getPost',
  async ([subreddit, id]: string[]) => {
    const response: TResponse = await API.getPostWithComments([subreddit, id]);

    return response;
  },
);

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: {
    [String(getPost.pending)]: (state) => {
      state.status = 'pending';
      state.isLoading = true;
    },
    [String(getPost.fulfilled)]: (
      state,
      { payload }: PayloadAction<TResponse>,
    ) => {
      state.status = 'succeeded';
      state.isError = false;
      state.isLoading = false;
      state.data.post = payload.post;
      state.data.comments = payload.comments;
      state.page.after = payload.after;
      state.page.before = payload.before;
    },
    [String(getPost.rejected)]: (state, action) => {
      state.status = 'failed';
      state.isError = true;
      state.isLoading = false;
      state.error = action.error.message;
    },
  },
});

export default postSlice.reducer;
