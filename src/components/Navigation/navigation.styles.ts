import { Theme, createStyles } from '@material-ui/core';

export interface IStyleProps {
  classes: {
    root: string;
    button: string;
  };
}

const navigationStyles = (theme: Theme) =>
  createStyles({
    root: {
      display: 'none',
      width: '100%',
      position: 'fixed',
      bottom: 0,
      left: 0,
      [theme.breakpoints.down('sm')]: {
        display: 'flex',
      },
      '& .Mui-selected': {
        color: theme.palette.clrReddit,
      },
    },
    button: {
      minWidth: 60,
    },
  });

export default navigationStyles;
