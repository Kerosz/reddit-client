import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { IFetch } from '../index';
import API from '../../lib/API';

export interface IPosts extends IFetch {
  posts: object[];
}

type TResponse = {
  posts: object[];
  after: string;
  before: string;
};

export const getAllPosts = createAsyncThunk(
  'posts/getAllPosts',
  async (params: string) => {
    const response: TResponse = await API.getAllPosts('', params);

    return response;
  },
);

const initialState: IPosts = {
  status: 'idle',
  error: null,
  isLoading: true,
  isError: false,
  page: {
    before: null,
    after: null,
  },
  posts: [],
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: {
    [String(getAllPosts.pending)]: (state) => {
      state.status = 'pending';
      state.isLoading = true;
    },
    [String(getAllPosts.fulfilled)]: (
      state,
      { payload }: PayloadAction<TResponse>,
    ) => {
      state.status = 'succeeded';
      state.isError = false;
      state.isLoading = false;
      state.posts = payload.posts;
      state.page.after = payload.after;
      state.page.before = payload.before;
    },
    [String(getAllPosts.rejected)]: (state, action) => {
      state.status = 'failed';
      state.isError = true;
      state.isLoading = false;
      state.error = action.error.message;
    },
  },
});

export default postsSlice.reducer;
