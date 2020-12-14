import { createMuiTheme } from '@material-ui/core/styles';

const lightTheme = createMuiTheme({
  palette: {
    type: 'light',
    background: {
      default: '#EEF0F2',
    },
    clrAccent: '#FFFFFF',
    clrHover: {
      primary: '#1976d2',
    },
  },
});

export default lightTheme;
