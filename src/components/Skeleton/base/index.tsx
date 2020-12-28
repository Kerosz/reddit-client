import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import { Box } from '@material-ui/core';

const BaseSkeleton: React.FC = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      width="100%"
      mb={10}
      p="0 10px"
    >
      <Box display="flex" alignItems="center">
        <Skeleton variant="circle" width={41} height={39} />
        <Skeleton
          variant="rect"
          width={55}
          height={20}
          style={{ marginLeft: 7 }}
        />
      </Box>
      <Box width="50%">
        <Skeleton
          animation="wave"
          height={62}
          width="100%"
          style={{ marginBottom: 6 }}
        />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-end"
        pr={1}
        width="5%"
        justifyContent="space-around"
      >
        <Skeleton variant="circle" width={6} height={6} />
        <Skeleton variant="circle" width={6} height={6} />
        <Skeleton variant="circle" width={6} height={6} />
      </Box>
    </Box>
  );
};

export default BaseSkeleton;
