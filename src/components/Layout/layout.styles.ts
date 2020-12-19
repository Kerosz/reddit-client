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
      margin: '85px 0',
    },
    content: {
      width: '100%',
      marginLeft: 30,
      [theme.breakpoints.down('sm')]: {
        marginLeft: 0,
      },
    },
  });

export default layoutStyles;
