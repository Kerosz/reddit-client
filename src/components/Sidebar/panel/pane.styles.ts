import { createStyles, Theme } from '@material-ui/core/styles';

export type StyleProps = {
  classes: { card: string; title: string };
};

const paneStyles = (theme: Theme) =>
  createStyles({
    card: {
      maxWidth: 'inherit',
      marginTop: 20,
      backgroundColor: theme.palette.background.paper,
      padding: '10px 10px 0',
      borderRadius: 5,
      '&:first-of-type': {
        marginTop: 0,
      },
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
  });

export default paneStyles;
