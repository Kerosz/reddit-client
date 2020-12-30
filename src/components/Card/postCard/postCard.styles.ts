import { createStyles, Theme, fade } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

export type StyleProps = {
  classes: {
    root: string;
    post: string;
    avatar: string;
    header: string;
    info: string;
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
      transition: 'all 150ms',
      '& a': {
        color: 'inherit',
        textDecoration: 'none',
      },
      '&:hover': {
        transform: 'translate(3px, -2px)',
        boxShadow: `0 4px 3px -2px ${theme.palette.action.disabledBackground}`,
      },
    },
    post: {
      width: '100%',
      padding: '16px 16px 4px',
      [theme.breakpoints.down('xs')]: {
        padding: '12px 8px 4px',
      },
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
        color: theme.palette.text.secondary,
      },
      [theme.breakpoints.down('xs')]: {
        width: 55,
        '& > h2': {
          fontSize: 14.5,
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
      paddingBottom: theme.spacing(1),
    },
    info: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      '& > span': {
        fontWeight: 600,
        marginLeft: 20,
        '&:hover': {
          textDecoration: 'underline',
        },
      },
      '& > p': {
        fontSize: 13,
        margin: 0,
        marginLeft: 15,
        '& > a:hover': {
          textDecoration: 'underline',
        },
      },
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        '& > p': { paddingLeft: theme.spacing(0.7), marginTop: 3 },
      },
    },
    content: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column',
      },
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      '& > p': {
        fontSize: 16,
        lineHeight: 1.6,
      },
      '& h2': {
        fontSize: 17.5,
      },
      [theme.breakpoints.down('xs')]: {
        '& h2': { fontSize: 16.5 },
      },
    },
    actions: {
      marginTop: 10,
      '& > .MuiButtonBase-root': {
        color: theme.palette.text.secondary,
      },
    },
    preview: {
      display: 'flex',
      alignItems: 'center',
      '& > a': {
        margin: '10px 70px',
        alignSelf: 'center',
        [theme.breakpoints.down('xs')]: {
          margin: '15px 4px 10px',
        },
      },
      '& > img': {
        width: 256,
        height: 144,
        objectFit: 'cover',
        marginLeft: 10,
        [theme.breakpoints.down('xs')]: {
          width: '100%',
          height: '100%',
          marginLeft: 0,
        },
      },
      '& > iframe, & > video': {
        width: '256px',
        height: '144px',
        marginLeft: 10,
        [theme.breakpoints.down('xs')]: {
          width: '100%',
          height: '52vw',
          marginLeft: 0,
        },
      },
    },
  });

export default postCardStyles;
