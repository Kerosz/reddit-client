/* eslint-disable no-unused-vars */
import React from 'react';
import {
  createMuiTheme,
  ThemeProvider,
  CssBaseline,
  Theme,
} from '@material-ui/core';
import { useSelector } from 'react-redux';
import { RootState } from '../store/rootReducer';
import darkTheme from './dark';
import lightTheme from './light';

declare module '@material-ui/core/styles/createPalette' {
  interface Palette {
    clrAccent: React.CSSProperties['color'];
    clrHover: {
      main: React.CSSProperties['color'];
    };
    clrReddit: React.CSSProperties['color'];
  }
  interface PaletteOptions {
    clrAccent: React.CSSProperties['color'];
    clrHover: {
      main: React.CSSProperties['color'];
    };
    clrReddit: React.CSSProperties['color'];
  }
}

declare module '@material-ui/core/styles/createBreakpoints' {
  interface BreakpointOverrides {
    xxs: true;
  }
}

type Props = {
  children: React.ReactNode;
};

// TODO: Find out a way to make themeMode work without having to pass the object type
const themeConstructor = (): Theme => {
  const { lightMode } = useSelector((state: RootState) => state.theme);
  const themeBasedOnMode: object = lightMode ? lightTheme : darkTheme;

  return createMuiTheme({
    ...themeBasedOnMode,
    breakpoints: {
      values: {
        xs: 0,
        xxs: 450,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
    overrides: {
      MuiCssBaseline: {
        '@global': {
          html: {
            WebkitFontSmoothing: 'auto',
            margin: 0,
            padding: 0,
          },
        },
      },
    },
  });
};

const ThemeProviderWithMode: React.FC<Props> = ({ children }) => {
  const theme = themeConstructor();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default ThemeProviderWithMode;
