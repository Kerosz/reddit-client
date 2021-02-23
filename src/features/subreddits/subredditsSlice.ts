import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { IFetch } from '../index';
import API from '../../lib/API';

export interface IPosts extends IFetch {
  subreddits: object[];
}

type TResponse = {
  subreddits: object[];
  after: string;
  before: string;
};

export const getSubreddits = createAsyncThunk(
  'subreddits/getSubreddits',
  async () => {
    const response: TResponse = await API.getAllSubreddits();

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
  subreddits: [],
};

const subredditsSlice = createSlice({
  name: 'subreddits',
  initialState,
  reducers: {},
  extraReducers: {
    [String(getSubreddits.pending)]: (state) => {
      state.status = 'pending';
      state.isLoading = true;
    },
    [String(getSubreddits.fulfilled)]: (
      state,
      { payload }: PayloadAction<TResponse>,
    ) => {
      state.status = 'succeeded';
      state.isError = false;
      state.isLoading = false;
      state.subreddits = payload.subreddits;
      state.page.after = payload.after;
      state.page.before = payload.before;
    },
    [String(getSubreddits.rejected)]: (state, action) => {
      state.status = 'failed';
      state.isError = true;
      state.isLoading = false;
      state.error = action.error.message;
    },
  },
});

export default subredditsSlice.reducer;
