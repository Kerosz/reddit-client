import Chip from '@material-ui/core/Chip';
import {
  emphasize,
  withStyles,
  Theme,
  createStyles,
} from '@material-ui/core/styles';

export type StyleProps = {
  classes: {
    post: string;
    header: string;
    body: string;
    info: string;
    actionVote: string;
    panel: string;
    wrapper: string;
    title: string;
    top: string;
    divider: string;
    underLine: string;
    description: string;
    preview: string;
    comments: string;
  };
};

const postStyles = (theme: Theme) =>
  createStyles({
    post: {
      padding: theme.spacing(2.3),
      backgroundColor: theme.palette.background.paper,
      borderRadius: 4,
      boxShadow: `1px 1px 3px ${theme.palette.action.disabledBackground}`,
      [theme.breakpoints.down('xs')]: {
        padding: '12px 8px',
      },
    },
    header: {
      display: 'flex',
      flexDirection: 'row',
      marginTop: theme.spacing(5),
      paddingLeft: theme.spacing(6),
      [theme.breakpoints.down('sm')]: {
        paddingLeft: theme.spacing(4.5),
      },
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column',
        paddingLeft: theme.spacing(3),
      },
    },
    top: {
      width: '100%',
      marginLeft: theme.spacing(3.5),
      [theme.breakpoints.down('xs')]: {
        marginLeft: theme.spacing(0),
        marginTop: theme.spacing(2),
      },
    },
    info: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '15%',
      maxWidth: '63px',
      fontWeight: 600,
      fontSize: 17,
      paddingTop: theme.spacing(1),
      marginRight: theme.spacing(1),
      color: theme.palette.text.secondary,
      [theme.breakpoints.down('xs')]: {
        width: '100%',
        maxWidth: 'none',
        flexDirection: 'row',
        paddingTop: theme.spacing(0),
        marginBottom: theme.spacing(1.2),
      },
      '& > span': {
        fontSize: 13,
        fontWeight: 500,
        paddingTop: theme.spacing(0.54),
        [theme.breakpoints.down('xs')]: {
          paddingLeft: theme.spacing(2),
        },
      },
    },
    divider: {
      display: 'none',
      [theme.breakpoints.down('xs')]: {
        display: 'block',
      },
    },
    actionVote: {
      color: `${theme.palette.text.primary} !important`,
      marginRight: theme.spacing(1.2),
      cursor: 'default',
      '& .MuiButton-startIcon': {
        marginRight: theme.spacing(0.3),
      },
    },
    panel: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: theme.spacing(1),
    },
    wrapper: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column',
        alignItems: 'flex-start',
      },
      '& > a': {
        color: 'inherit',
        textDecoration: 'none',
        fontWeight: 500,
        marginLeft: theme.spacing(2),
        '&:hover': {
          textDecoration: 'underline',
        },
      },
      '& > time': {
        fontSize: 13,
        color: theme.palette.text.secondary,
        marginLeft: theme.spacing(1.3),
        [theme.breakpoints.down('xs')]: {
          marginLeft: theme.spacing(2.1),
        },
      },
    },
    title: {
      fontWeight: 500,
      fontSize: 23,
      widht: 'inherit',
      maxWidth: '85%',
      marginTop: theme.spacing(3.5),
      [theme.breakpoints.down('xs')]: {
        maxWidth: '95%',
        fontSize: 20,
      },
    },
    underLine: {
      width: 120,
      height: 5,
      backgroundColor: theme.palette.clrReddit,
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(8),
      [theme.breakpoints.down('xs')]: {
        marginBottom: theme.spacing(5),
      },
    },
    body: {
      marginTop: theme.spacing(3),
      wordWrap: 'break-word',
      overflowWrap: 'break-word',
      maxWidth: '845px',
    },
    description: {
      fontSize: 16,
      lineHeight: 1.5,
      marginBottom: theme.spacing(3),
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(1),
      wordWrap: 'break-word',
      overflowWrap: 'break-word',
      [theme.breakpoints.down('sm')]: {
        paddingLeft: theme.spacing(4.5),
      },
      [theme.breakpoints.down('xs')]: {
        paddingLeft: theme.spacing(3),
      },
      '& a': {
        color: theme.palette.text.secondary,
        textDecoration: 'none',
        fontWeight: 600,
        '&:hover': {
          textDecoration: 'underline',
        },
      },
      '& p': {
        margin: 0,
        marginBottom: theme.spacing(2),
      },
    },
    preview: {
      width: '100%',
    },
    comments: {
      marginTop: theme.spacing(7),
      paddingLeft: theme.spacing(6),
      maxWidth: '845px',
      [theme.breakpoints.down('sm')]: {
        paddingLeft: theme.spacing(4.5),
      },
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column',
        paddingLeft: theme.spacing(3),
      },
      '& > h2': {
        fontSize: 20,
        marginBottom: theme.spacing(2.5),
      },
      '& > ul': {
        paddingLeft: theme.spacing(0),
      },
    },
  });

export const StyledBreadcrumb = withStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.action.selected,
    height: theme.spacing(3),
    color: theme.palette.text.disabled,
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover, &:focus': {
      backgroundColor: theme.palette.action.disabledBackground,
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(theme.palette.action.disabledBackground, 0.12),
    },
  },
}))(Chip) as typeof Chip;

export default postStyles;
