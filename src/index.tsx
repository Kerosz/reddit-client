/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */

import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const render = () => {
  const App = require('./app').default;
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'),
  );
};

render();

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./app', render);
}

serviceWorkerRegistration.register();
