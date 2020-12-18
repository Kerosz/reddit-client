import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ThemeState = {
  lightMode: true | false;
};

const initialState: ThemeState = { lightMode: true };

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    updateMode(state: ThemeState, { payload }: PayloadAction<boolean>) {
      state.lightMode = payload;
    },
  },
});

export const { updateMode } = themeSlice.actions;

export default themeSlice.reducer;
