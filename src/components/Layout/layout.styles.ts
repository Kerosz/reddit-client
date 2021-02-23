import { createStyles, Theme } from '@material-ui/core/styles';

export type StyleProps = {
  classes: {
    main: string;
    content: string;
  };
};

const layoutStyles = (theme: Theme) =>
  createStyles({
    main: {
      display: 'flex',
      flexDirection: 'row',
      margin: '60px 0 30px',
      paddingTop: 25,
    },
    content: {
      width: '100%',

      marginLeft: 16,
      [theme.breakpoints.down('sm')]: {
        marginLeft: 0,
      },
    },
  });

export default layoutStyles;
