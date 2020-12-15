import { createStyles, Theme, fade } from '@material-ui/core/styles';

export type StyleProps = {
  classes: {
    search: string;
    searchIcon: string;
    inputRoot: string;
    inputInput: string;
  };
};

const searchStyles = (theme: Theme) =>
  createStyles({
    search: {
      position: 'relative',
      color: theme.palette.text.secondary,
      borderRadius: theme.shape.borderRadius,
      border: `1px solid ${fade(theme.palette.action.selected, 0.04)}`,
      backgroundColor: fade(theme.palette.action.hover, 0.04),
      '&:hover': {
        borderColor: theme.palette.clrHover.primary,
      },
      marginLeft: theme.spacing(1),
      maxWidth: '650px',
      width: '100%',
    },
    searchIcon: {
      padding: theme.spacing(0, 1),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
      display: 'block',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(3)}px)`,
      transition: theme.transitions.create('width'),
      maxWidth: '600px',
      width: '100%',
    },
  });

export default searchStyles;
