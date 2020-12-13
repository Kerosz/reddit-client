import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../slices/themeSlice';

const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
