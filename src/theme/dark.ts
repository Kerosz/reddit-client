import { createMuiTheme } from '@material-ui/core/styles';

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    background: {
      default: '#11151c',
      paper: '#21262D',
    },
    clrAccent: '#161B22',
    clrHover: {
      main: '#fafafa',
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

export default darkTheme;
