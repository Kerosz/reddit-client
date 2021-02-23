import { combineReducers } from '@reduxjs/toolkit';
import themeReducer from '../features/theme/themeSlice';
import postReducer from '../features/post/postSlice';
import postsReducer from '../features/posts/postsSlice';
import userReducer from '../features/user/userSlice';
import subredditReducer from '../features/subreddit/subredditSlice';
import subredditsReducer from '../features/subreddits/subredditsSlice';

const rootReducer = combineReducers({
  theme: themeReducer,
  user: userReducer,
  post: postReducer,
  posts: postsReducer,
  subreddit: subredditReducer,
  subreddits: subredditsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
