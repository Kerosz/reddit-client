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
    info: string;
    panel: string;
    title: string;
    top: string;
    divider: string;
    underLine: string;
    description: string;
    preview: string;
  };
};

const postStyles = (theme: Theme) =>
  createStyles({
    post: {
      padding: theme.spacing(2.3),
      backgroundColor: theme.palette.background.paper,
      borderRadius: 4,
      boxShadow: `1px 1px 3px ${theme.palette.action.disabledBackground}`,
    },
    top: {
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
    header: {
      width: '100%',
      marginLeft: theme.spacing(3.5),
      [theme.breakpoints.down('xs')]: {
        marginLeft: theme.spacing(0),
        marginTop: theme.spacing(2),
      },
    },
    info: {
      marginRight: theme.spacing(2.4),
      fontWeight: 600,
      fontSize: 17,
      paddingTop: theme.spacing(1),
      color: theme.palette.text.secondary,
      [theme.breakpoints.down('xs')]: {
        paddingTop: theme.spacing(0),
        marginBottom: theme.spacing(1.2),
      },
    },
    divider: {
      display: 'none',
      [theme.breakpoints.down('xs')]: {
        display: 'block',
      },
    },
    panel: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      '& > span': {
        fontWeight: 500,
        marginLeft: theme.spacing(2),
      },
      '& > time': {
        fontSize: 13,
        color: theme.palette.text.secondary,
        marginLeft: theme.spacing(1.3),
      },
    },
    title: {
      fontWeight: 500,
      fontSize: 24,
      widht: 'inherit',
      maxWidth: '85%',
      marginTop: theme.spacing(3.5),
      [theme.breakpoints.down('xs')]: {
        maxWidth: '95%',
        fontSize: 22,
      },
    },
    underLine: {
      width: 120,
      height: 5,
      background: theme.palette.clrReddit,
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(8),
      [theme.breakpoints.down('xs')]: {
        marginBottom: theme.spacing(5),
      },
    },
    description: {
      fontSize: 16,
      lineHeight: 1.5,
      marginTop: theme.spacing(3),
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(1),
      [theme.breakpoints.down('sm')]: {
        paddingLeft: theme.spacing(4.5),
      },
      [theme.breakpoints.down('xs')]: {
        paddingLeft: theme.spacing(3),
      },
    },
    preview: {
      display: 'block',
      width: '100%',
      overflow: 'hidden',
      height: 0,
      paddingTop: '64.25%',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
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
