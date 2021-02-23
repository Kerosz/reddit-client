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
    subreddit: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      maxWidth: '400px',
      border: `1px solid ${fade(theme.palette.action.disabled, 0.07)}`,
      backgroundColor: theme.palette.background.paper,
      borderRadius: 2,
      marginBottom: 10,
      padding: 14,
    },
    preview: {
      width: '100%',
    },
  });

type TProps = {
  classes: {
    subreddit: string;
    preview: string;
  };
};

// 885x170
const SubredditSkeleton: React.FC<TProps> = ({ classes }) => {
  return (
    <div className={classes.subreddit}>
      <Box mb={2} display="flex" alignItems="center" width="290px">
        <Skeleton variant="circle">
          <Avatar />
        </Skeleton>
        <Box display="flex" flexDirection="column" pl={2}>
          <Skeleton
            variant="rect"
            width={100}
            height={15}
            style={{ marginBottom: 4 }}
          />
          <Skeleton variant="rect" width={185} height={11} />
        </Box>
      </Box>
      <Box className={classes.preview}>
        <Skeleton variant="rect" width="100%" height={185} />
      </Box>
      <Box display="flex" flexDirection="column" width="100%" ml={2} mt={2}>
        <Skeleton variant="rect" width={115} height={26} />
        <Box mt={3} mb={3}>
          <Skeleton width="39%" />
          <Skeleton width="90%" />
          <Skeleton width="90%" />
        </Box>
        <Skeleton variant="rect" width={140} height={18} />
      </Box>
    </div>
  );
};

export default withStyles(cardSkeletonStyles)(SubredditSkeleton);
