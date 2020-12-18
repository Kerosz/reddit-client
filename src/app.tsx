import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Theme from './theme';
import Home from './pages/home';
import Post from './pages/post';

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
      </Switch>
    </Router>
  </Theme>
);

export default App;
