import { createStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

export type StyleProps = {
  classes: {
    avatar: string;
  };
};

const userAvatarStyles = () => {
  createStyles({
    avatar: {
      backgroundColor: red[500],
    },
  });
};

export default userAvatarStyles;
