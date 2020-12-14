import { createStyles, Theme } from '@material-ui/core/styles';

export type StyleProps = {
  classes: {
    navbar: string;
    group: string;
  };
};

const headerStyles = (theme: Theme) =>
  createStyles({
    navbar: {
      height: '60px',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 12px',
      background: theme.palette.clrAccent,
    },
    group: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
  });

export default headerStyles;
