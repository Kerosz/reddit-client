/* eslint-disable no-unused-vars */
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { useSelector, RootStateOrAny } from 'react-redux';
import darkTheme from './dark';
import lightTheme from './light';

declare module '@material-ui/core/styles/createPalette' {
  interface Palette {
    clrAccent: React.CSSProperties['color'];
    clrHover: {
      main: React.CSSProperties['color'];
    };
  }
  interface PaletteOptions {
    clrAccent: React.CSSProperties['color'];
    clrHover: {
      main: React.CSSProperties['color'];
    };
  }
}

type Props = {
  children: React.ReactNode;
};

const Theme: React.FC<Props> = ({ children }) => {
  const { lightMode } = useSelector((state: RootStateOrAny) => state.theme);
  const theme = lightMode ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
