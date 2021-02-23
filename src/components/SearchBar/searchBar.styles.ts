import { createStyles, Theme } from '@material-ui/core/styles';

export type StyleProps = {
  classes: {
    search: string;
    listSearch: string;
  };
};

const searchStyles = (theme: Theme) =>
  createStyles({
    search: {
      maxWidth: 630,
      width: '100%',
      transform: 'translateY(-4px)',
      marginLeft: theme.spacing(1),
    },
    listSearch: {
      width: '100%',
      color: theme.palette.text.primary,
      padding: 0,
      margin: 0,
      textDecoration: 'none',
      '& > p': {
        margin: 0,
        fontSize: 13,
        fontWeight: 600,
        color: theme.palette.text.secondary,
      },
    },
  });

export default searchStyles;
