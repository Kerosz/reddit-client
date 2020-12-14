import { createStyles, Theme } from '@material-ui/core/styles';

export type StyleProps = {
  classes: {
    sidebar: string;
    card: string;
    title: string;
    ad: string;
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
  });

export default sidebarStyles;
