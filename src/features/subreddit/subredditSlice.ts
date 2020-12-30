import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { IFetch, TPage } from '../index';
import API from '../../lib/API';

export interface IPosts extends IFetch {
  info: object | any;
  posts: object[];
}

interface IResponse extends TPage {
  posts: object[];
}

const initialState: IPosts = {
  status: 'idle',
  error: null,
  isLoading: true,
  isError: false,
  page: {
    before: null,
    after: null,
  },
  info: {},
  posts: [],
};

export const getSubredditByName = createAsyncThunk(
  'subreddit/getSubredditByName',
  async (subName: string) => {
    const response = await API.getSubreddit(subName);

    return response;
  },
);

export const getSubredditPosts = createAsyncThunk(
  'subreddit/getSubredditPosts',
  async (subName: string) => {
    const response: IResponse = await API.getSubredditPosts(subName);

    return response;
  },
);

const subredditSlice = createSlice({
  name: 'subreddit',
  initialState,
  reducers: {},
  extraReducers: {
    [String(getSubredditByName.pending)]: (state) => {
      state.status = 'pending';
      state.isLoading = true;
    },
    [String(getSubredditByName.fulfilled)]: (
      state,
      { payload }: PayloadAction<object>,
    ) => {
      state.status = 'succeeded';
      state.isError = false;
      state.isLoading = false;
      state.info = payload;
    },
    [String(getSubredditByName.rejected)]: (state, action) => {
      state.status = 'failed';
      state.isError = true;
      state.isLoading = false;
      state.error = action.error.message;
    },
    [String(getSubredditPosts.pending)]: (state) => {
      state.status = 'pending';
      state.isLoading = true;
    },
    [String(getSubredditPosts.fulfilled)]: (
      state,
      { payload }: PayloadAction<IResponse>,
    ) => {
      state.status = 'succeeded';
      state.isError = false;
      state.isLoading = false;
      state.posts = payload.posts;
      state.page.after = payload.after;
      state.page.before = payload.before;
    },
    [String(getSubredditPosts.rejected)]: (state, action) => {
      state.status = 'failed';
      state.isError = true;
      state.isLoading = false;
      state.error = action.error.message;
    },
  },
});

export default subredditSlice.reducer;
