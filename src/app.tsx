import React from 'react';
import ThemeProviderWithMode from './theme';
import Routes from './routes';

const App: React.FC = () => (
  <ThemeProviderWithMode>
    <Routes />
  </ThemeProviderWithMode>
);

export default App;
