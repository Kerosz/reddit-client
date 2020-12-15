import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Theme from './theme';
import Home from './pages/Home';

const App: React.FC = () => (
  <Theme>
    <Router>
      <Switch>
        <Route exact path={['/', '/:category']} component={Home} />
      </Switch>
    </Router>
  </Theme>
);

export default App;
