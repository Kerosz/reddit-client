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
  },
});

export default darkTheme;
