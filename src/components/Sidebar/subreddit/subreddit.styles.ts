import { createStyles, Theme } from '@material-ui/core/styles';

export type TStyleProps = {
  classes: {
    content: string;
    desc: string;
    stats: string;
    frame: string;
    created: string;
  };
};

const subredditStyles = (theme: Theme) =>
  createStyles({
    content: {
      padding: '0 12px',
    },
    desc: {},
    stats: {
      display: 'flex',
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(1.5),
    },
    frame: {
      display: 'flex',
      flexDirection: 'column',
      '&:last-of-type': {
        marginLeft: theme.spacing(3.5),
      },
      '& > h5': {
        fontSize: 17,
        fontWeight: 400,
        margin: 0,
      },
      '& > p': {
        fontSize: 13,
        margin: 0,
        marginTop: theme.spacing(0.2),
      },
    },
    created: {
      display: 'flex',
      padding: '6px 0',
      '& > p': {
        margin: 0,
        marginTop: 3,
        marginLeft: 6,
      },
    },
  });

export default subredditStyles;
