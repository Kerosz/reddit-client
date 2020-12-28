import { createStyles, Theme } from '@material-ui/core';

export interface IStyleProps {
  classes: {
    root: string;
    paper: string;
    button: string;
    item: string;
    itemTitle: string;
  };
}

const menuStyles = (theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    paper: {
      width: '225px',
      marginRight: theme.spacing(2),
      marginTop: theme.spacing(0.5),
    },
    button: {
      color: `${theme.palette.text.primary} !important`,
    },
    item: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    itemTitle: {
      textTransform: 'uppercase',
      fontSize: 11,
      fontWeight: 600,
    },
  });

export default menuStyles;
