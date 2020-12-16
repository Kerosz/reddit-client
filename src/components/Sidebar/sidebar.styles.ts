/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { createStyles, Theme } from '@material-ui/core/styles';

export type StyleProps = {
  classes: {
    sidebar: string;
    listText: string;
    card: string;
    title: string;
    ad: string;
    listItem: string;
    link: string;
  };
};

const sidebarStyles = (theme: Theme) =>
  createStyles({
    sidebar: {
      width: '100%',
      maxWidth: 300,
      backgroundColor: theme.palette.background.default,
      paddingRight: 3,
    },
    listText: {
      fontWeight: 500,
    },
    card: {
      maxWidth: 'inherit',
      marginTop: 20,
      backgroundColor: theme.palette.background.paper,
      padding: '10px 10px 0',
      borderRadius: 5,
    },
    title: {
      fontSize: 14,
      fontWeight: 'bold',
      textTransform: 'uppercase',
      color: theme.palette.text.disabled,
      paddingLeft: 10,
      paddingBottom: 6,
      margin: 0,
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
    link: {
      color: theme.palette.text.primary,
      textDecoration: 'none',
    },
  });

export default sidebarStyles;
