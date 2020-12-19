import { createMuiTheme } from '@material-ui/core/styles';

const lightTheme = createMuiTheme({
  palette: {
    type: 'light',
    background: {
      default: '#EEF0F2',
    },
    clrAccent: '#FFFFFF',
    clrHover: {
      main: '#1976d2',
    },
    clrReddit: '#ff4500',
  },
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
});

export default lightTheme;
