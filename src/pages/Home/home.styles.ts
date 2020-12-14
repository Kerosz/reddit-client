import { createStyles } from '@material-ui/core/styles';

export type StyleProps = {
  classes: {
    main: string;
  };
};

const homeStyles = () =>
  createStyles({
    main: {
      margin: '85px 0',
    },
  });

export default homeStyles;
