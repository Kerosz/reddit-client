import { createStyles } from '@material-ui/core';

export type TStyleProps = {
  classes: {
    root: string;
  };
};

const noMatchStyles = createStyles({
  root: {
    width: '100%',
    maxWidth: '800px',
    margin: '0 auto',
    padding: '0 12px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > h2': {
      fontSize: 32,
      fontWeight: 500,
      marginTop: 0,
      transform: 'translateX(-10px)',
    },
    '& > img': {
      width: '100%',
      objectFit: 'cover',
    },
    '& > a': {
      transform: 'translateX(-12px)',
    },
  },
});

export default noMatchStyles;
