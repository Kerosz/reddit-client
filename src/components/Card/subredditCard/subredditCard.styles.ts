import { createStyles, Theme } from '@material-ui/core/styles';

export type StyleProps = {
  classes: {
    root: string;
    header: string;
    bullet: string;
    body: string;
    media: string;
  };
};

const subredditCardStyles = (theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 485,
      marginBottom: theme.spacing(2),
      '&:last-of-type': {
        marginBottom: theme.spacing(0),
      },
      '& .MuiCardHeader-title': {
        color: theme.palette.text.primary,
      },
    },

    header: {
      textDecoration: 'none',
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    body: {
      marginTop: theme.spacing(1.6),
      paddingLeft: theme.spacing(0.6),
      '& > h2': {
        fontSize: 24,
        marginBottom: theme.spacing(0.5),
      },
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
  });

export default subredditCardStyles;
