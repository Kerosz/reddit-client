import { combineReducers } from '@reduxjs/toolkit';
import themeReducer from '../features/theme/themeSlice';
import postReducer from '../features/posts/postSlice';

const rootReducer = combineReducers({
  theme: themeReducer,
  posts: postReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
