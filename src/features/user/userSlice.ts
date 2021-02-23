import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFetch, TPage } from '../index';
import API from '../../lib/API';

interface IResponse extends TPage {
  posts: object[];
  comments: object[];
}

export interface IPosts extends IFetch {
  profile: object | any;
  data: {
    posts: object[];
    comments: object[];
  };
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
  profile: {},
  data: {
    posts: [],
    comments: [],
  },
};

export const getUserByName = createAsyncThunk(
  'user/getUserByName',
  async (userName: string) => {
    const response = await API.getUser(userName);

    return response;
  },
);

export const getUserPosts = createAsyncThunk(
  'user/getUserPosts',
  async (userName: string) => {
    const response: IResponse = await API.getUserPosts(userName);

    return response;
  },
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [String(getUserByName.pending)]: (state) => {
      state.status = 'pending';
    },
    [String(getUserByName.fulfilled)]: (
      state,
      { payload }: PayloadAction<object>,
    ) => {
      state.status = 'succeeded';
      state.isError = false;
      state.isLoading = false;
      state.profile = payload;
    },
    [String(getUserByName.rejected)]: (
      state,
      { payload }: PayloadAction<string>,
    ) => {
      state.status = 'failed';
      state.isError = true;
      state.isLoading = false;
      state.error = payload;
    },
    [String(getUserPosts.pending)]: (state) => {
      state.status = 'pending';
    },
    [String(getUserPosts.fulfilled)]: (
      state,
      { payload }: PayloadAction<IResponse>,
    ) => {
      state.status = 'succeeded';
      state.isError = false;
      state.isLoading = false;
      state.data.posts = payload.posts;
      state.data.comments = payload.comments;
      state.page.after = payload.after;
      state.page.before = payload.before;
    },
    [String(getUserPosts.rejected)]: (
      state,
      { payload }: PayloadAction<string>,
    ) => {
      state.status = 'failed';
      state.isError = true;
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default userSlice.reducer;
