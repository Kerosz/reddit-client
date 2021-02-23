import { createStyles, Theme } from '@material-ui/core';

export type StyleProps = {
  classes: {
    root: string;
    item: string;
  };
};

const footerStyles = (theme: Theme) =>
  createStyles({
    root: {
      alignItems: 'center',
      padding: '6px 0 32px 0',
      '&  ul': {
        display: 'flex',
        flexDirection: 'row',
        listStyle: 'none',
        paddingLeft: 0,
        [theme.breakpoints.down('xs')]: {
          flexDirection: 'column',
          textAlign: 'center',
        },
      },
      '& .MuiContainer-root': { display: 'flex', justifyContent: 'center' },
      [theme.breakpoints.down('sm')]: {
        padding: '6px 0 62px 0',
      },
    },

    item: {
      textDecoration: 'none',
      color: theme.palette.text.secondary,
      padding: theme.spacing(1),
      borderRight: `2px solid ${theme.palette.divider}`,
      marginRight: 7,
      '& > li': {
        marginRight: 7,
      },
      '&:last-of-type': {
        marginRight: 7,
        borderRight: 'none',
      },
      '&:last-of-type > li': {
        marginRight: 0,
      },
      '& > a': {
        textDecoration: 'none',
        color: theme.palette.text.secondary,
        '&:hover, &:focus': { textDecoration: 'underline' },
      },
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column',
        textAlign: 'center',
        marginRight: 0,
        borderRight: 0,
        marginBottom: 7,
        borderBottom: `2px solid ${theme.palette.divider}`,
        '&:last-of-type': {
          borderBottom: 'none',
        },
      },
    },
  });

export default footerStyles;
