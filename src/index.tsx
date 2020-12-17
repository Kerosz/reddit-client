/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Theme from './theme';
import store from './store/store';

const render = () => {
  const App = require('./app').default;
  ReactDOM.render(
    <Provider store={store}>
      <Theme>
        <App />
      </Theme>
    </Provider>,
    document.getElementById('root'),
  );
};

render();

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./app', render);
}
