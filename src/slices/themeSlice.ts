/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ThemeState = {
  mode: string;
};

const themeSlice = createSlice({
  name: 'theme',
  initialState: { mode: 'light' } as ThemeState,
  reducers: {
    updateMode(state: ThemeState, { payload }: PayloadAction<string>) {
      state.mode = payload;
    },
  },
});

export const modeSelector = (state: { theme: ThemeState }): string =>
  state.theme.mode;

export const { updateMode } = themeSlice.actions;

export default themeSlice.reducer;
