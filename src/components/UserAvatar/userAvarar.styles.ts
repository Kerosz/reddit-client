import { createStyles, Theme } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';

export type StyleProps = {
  classes: {
    avatar: string;
    pane: string;
    group: string;
    heading: string;
    subheading: string;
  };
};

const userAvatarStyles = (theme: Theme) =>
  createStyles({
    pane: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 10px',
      [theme.breakpoints.down('sm')]: {
        margin: '0 0 0 10px',
      },
    },
    avatar: {
      background: blue[500],
      marginRight: 10,
      width: theme.spacing(5),
      height: theme.spacing(5),
    },
    group: {
      display: 'flex',
      flexDirection: 'column',
    },
    heading: {
      fontSize: 15,
      color: theme.palette.text.primary,
      margin: 0,
      [theme.breakpoints.down('xs')]: {
        display: 'none',
      },
    },
    subheading: {
      fontSize: 12,
      color: theme.palette.text.disabled,
      margin: 0,
      [theme.breakpoints.down('xs')]: {
        display: 'none',
      },
    },
  });

export default userAvatarStyles;
