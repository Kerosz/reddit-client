import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Theme from './theme';
import Home from './pages/home';
import Post from './pages/post';
import Subreddit from './pages/subreddit';
import User from './pages/user';

const App: React.FC = () => (
  <Theme>
    <Router>
      <Switch>
        <Route exact path={['/', '/:category']} component={Home} />
        <Route
          exact
          path="/post/r/:subreddit/:type/:id/:name"
          component={Post}
        />
        <Route exact path="/subreddit/r/:subreddit" component={Subreddit} />
        <Route exact path="/profile/u/:user" component={User} />
      </Switch>
    </Router>
  </Theme>
);

export default App;
