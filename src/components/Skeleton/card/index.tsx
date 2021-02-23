import React from 'react';
import {
  Avatar,
  createStyles,
  withStyles,
  Theme,
  fade,
  Box,
} from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';

const cardSkeletonStyles = (theme: Theme) =>
  createStyles({
    card: {
      display: 'flex',
      alignItems: 'flex-end',
      width: '100%',
      border: `1px solid ${fade(theme.palette.action.disabled, 0.07)}`,
      // backgroundColor: fade(theme.palette.action.disabled, 0.04),
      backgroundColor: theme.palette.background.paper,
      borderRadius: 2,
      marginBottom: 10,
      padding: 16,
    },
    preview: {
      [theme.breakpoints.down('xs')]: {
        display: 'none',
      },
    },
  });

type TProps = {
  classes: {
    card: string;
    preview: string;
  };
};

// 885x170
const CardSkeleton: React.FC<TProps> = ({ classes }) => {
  return (
    <div className={classes.card}>
      <Box width="100%">
        <Box
          mb={2}
          display="flex"
          alignItems="center"
          width="290px"
          justifyContent="space-between"
        >
          <Skeleton variant="circle">
            <Avatar />
          </Skeleton>
          <Skeleton variant="rect" width={95} height={15} />
          <Skeleton variant="rect" width={125} height={11} />
        </Box>
        <Skeleton width="90%" />
        <Skeleton width="90%" />
        <Skeleton width="90%" />
        <Box
          mt={7}
          display="flex"
          alignItems="center"
          width="240px"
          justifyContent="space-between"
        >
          <Skeleton variant="rect" width={85} height={20} />
          <Skeleton variant="rect" width={75} height={20} />
          <Skeleton variant="rect" width={60} height={20} />
        </Box>
      </Box>
      <Box className={classes.preview}>
        <Skeleton variant="rect" width={230} height={124} />
      </Box>
    </div>
  );
};

export default withStyles(cardSkeletonStyles)(CardSkeleton);
