import { createStyles, Theme, fade } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

export type StyleProps = {
  classes: {
    root: string;
    post: string;
    avatar: string;
    header: string;
    content: string;
    details: string;
    actions: string;
    preview: string;
    ratings: string;
  };
};

const postCardStyles = (theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      widht: '100%',
      minWidth: 240,
      backgroundColor: theme.palette.background.paper,
      border: `1px solid ${fade(theme.palette.action.disabled, 0.16)}`,
      borderRadius: 2,
      marginBottom: 10,
      boxShadow: `1px 1px 3px ${theme.palette.action.disabledBackground}`,
      '& a': {
        color: 'inherit',
        textDecoration: 'none',
      },
      '&:hover': {
        borderColor: theme.palette.primary.main,
      },
    },
    post: {
      width: '100%',
      padding: '16px 16px 4px',
    },
    ratings: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: 75,
      height: 'inherit',
      borderLeft: `1px solid ${fade(theme.palette.action.disabled, 0.16)}`,
      backgroundColor: theme.palette.action.selected,
      cursor: 'default',
      '& > h2': {
        fontSize: 20,
      },
      [theme.breakpoints.down('xs')]: {
        width: 45,
        '& > h2': {
          fontSize: 13,
        },
      },
    },
    avatar: {
      backgroundColor: red[500],
    },
    header: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      '& > span': {
        fontWeight: 600,
        marginLeft: 20,
      },
      '& > p': {
        fontSize: 13,
        marginLeft: 15,
      },
    },
    content: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      '& > p': {
        fontSize: 16,
        lineHeight: 1.6,
      },
    },
    actions: {
      marginTop: 10,
      '& > .MuiButtonBase-root': {
        color: theme.palette.text.secondary,
      },
    },
    preview: {
      '& > img': {
        width: 256,
        height: 144,
        objectFit: 'cover',
        marginLeft: 10,
        [theme.breakpoints.down('xs')]: {
          width: 144,
          height: 81,
        },
      },
      '& > iframe': {
        width: '256px',
        height: '144px',
        marginLeft: 10,
        [theme.breakpoints.down('xs')]: {
          width: 144,
          height: 81,
        },
      },
    },
  });

export default postCardStyles;
