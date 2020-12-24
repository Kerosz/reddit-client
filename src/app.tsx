import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ThemeProviderWithMode from './theme';
import Home from './pages/home';
import Post from './pages/post';
import Subreddit from './pages/subreddit';
import Subreddits from './pages/subreddits';
import User from './pages/profile';

// TODO: Improve routing paths and add a routs file
const App: React.FC = () => (
  <ThemeProviderWithMode>
    <Router>
      <Switch>
        <Route exact path={['/', '/filter/:category']} component={Home} />
        <Route
          exact
          path="/post/r/:subreddit/comments/:id/:name"
          component={Post}
        />
        <Route exact path="/subreddit/r/:subredditName" component={Subreddit} />
        <Route exact path="/subreddits/" component={Subreddits} />
        <Route exact path="/profile/u/:userName" component={User} />
      </Switch>
    </Router>
  </ThemeProviderWithMode>
);

export default App;
