import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';

const App: React.FC = () => (
  <Router>
    <Switch>
      <Route exact path={['/', '/:category']} component={Home} />
    </Switch>
  </Router>
);

export default App;
