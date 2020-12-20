import { createStyles, Theme } from '@material-ui/core/styles';

export type StyleProps = {
  classes: {
    root: string;
    bullet: string;
    title: string;
  };
};

const subredditCardStyles = (theme: Theme) =>
  createStyles({
    root: {
      minWidth: 275,
      marginBottom: theme.spacing(2),
      '&:last-of-type': {
        marginBottom: theme.spacing(0),
      },
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
  });

export default subredditCardStyles;
