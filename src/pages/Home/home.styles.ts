import { createStyles, Theme } from '@material-ui/core/styles';

export type StyleProps = {
  classes: {
    main: string;
    content: string;
  };
};

const homeStyles = (theme: Theme) =>
  createStyles({
    main: {
      display: 'flex',
      flexDirection: 'row',
      margin: '85px 0',
    },
    content: {
      marginLeft: 30,
      [theme.breakpoints.down('sm')]: {
        marginLeft: 0,
      },
    },
  });

export default homeStyles;
