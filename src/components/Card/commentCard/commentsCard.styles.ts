import { createStyles, Theme } from '@material-ui/core';

export type StyleProps = {
  classes: {
    root: string;
    header: string;
    body: string;
    actions: string;
    actionVote: string;
  };
};

const commentsCardStyles = (theme: Theme) =>
  createStyles({
    root: {
      listStyle: 'none',
      borderLeft: `2px solid ${theme.palette.text.disabled}`,
      padding: '12px 8px 8px 30px',
      backgroundColor: theme.palette.action.hover,
      marginBottom: 18,
      '&:last-of-type': {
        marginBottom: theme.spacing(0),
      },
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      '& > a': {
        textDecoration: 'none',
        color: theme.palette.text.primary,
        '&:hover': {
          textDecoration: 'underline',
        },
      },
      '& > span': {
        color: theme.palette.text.disabled,
        fontStyle: 'italic',
        cursor: 'not-allowed',
      },
      '& > time': {
        fontSize: 12,
        marginLeft: theme.spacing(1),
        color: theme.palette.text.secondary,
      },
    },
    body: {
      marginTop: theme.spacing(1),
      wordWrap: 'break-word',
      overflowWrap: 'break-word',
    },
    actions: {
      display: 'flex',
      alignItems: 'center',
    },
    actionVote: {
      color: `${theme.palette.text.primary} !important`,
      marginRight: theme.spacing(1.2),
      '& .MuiButton-startIcon': {
        marginRight: theme.spacing(0.6),
      },
    },
  });

export default commentsCardStyles;
