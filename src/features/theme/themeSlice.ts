/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ThemeState = {
  mode: string;
};

const initialState: ThemeState = { mode: 'light' };

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    updateMode(state: ThemeState, action: PayloadAction<string>) {
      state.mode = action.payload;
    },
  },
});

export const { updateMode } = themeSlice.actions;

export default themeSlice.reducer;
