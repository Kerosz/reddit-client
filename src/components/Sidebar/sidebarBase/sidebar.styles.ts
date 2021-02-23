import { createStyles, Theme } from '@material-ui/core/styles';

export type StyleProps = {
  classes: {
    sidebar: string;
    listText: string;
    ad: string;
    listItem: string;
    activeLink: string;
    link: string;
  };
};

const sidebarStyles = (theme: Theme) =>
  createStyles({
    sidebar: {
      width: '100%',
      maxWidth: 320,
      minWidth: 320,
      backgroundColor: theme.palette.background.default,
      paddingRight: 3,
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
      '& > ul': {
        marginBottom: 20,
      },
    },
    listText: {
      fontWeight: 500,
    },
    ad: {
      marginTop: 5,
      width: '100%',
    },
    listItem: {
      fontWeight: 500,
      '&:hover': {
        background: 'none',
        '& .MuiTypography-root': {
          color: theme.palette.warning.main,
        },
        '& .MuiListItemIcon-root > svg': {
          color: theme.palette.warning.main,
        },
      },
    },
    activeLink: {
      '& .MuiListItem-root': {
        background: 'none',
        '& .MuiTypography-root': {
          color: theme.palette.warning.main,
        },
        '& .MuiListItemIcon-root > svg': {
          color: theme.palette.warning.main,
        },
      },
    },
    link: {
      color: theme.palette.text.primary,
      textDecoration: 'none',
    },
  });

export default sidebarStyles;
