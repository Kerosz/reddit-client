import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ThemeState = {
  lightMode: true | false;
};

const storageThemeMode = localStorage.getItem('material-ui-theme');
const defautlTheme = storageThemeMode ? JSON.parse(storageThemeMode) : true;

const initialState: ThemeState = { lightMode: defautlTheme };

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
