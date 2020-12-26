import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import { Box } from '@material-ui/core';

const BaseSkeleton: React.FC = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      p={1}
      mb={10}
    >
      <Skeleton variant="circle" width={47} height={40} />
      <Box width="54%" pl={4}>
        <Skeleton
          animation="wave"
          height={55}
          width="100%%"
          style={{ marginBottom: 6 }}
        />
      </Box>
      <Box display="flex" alignItems="center" p={1} width="20%">
        <Skeleton variant="circle" width={47} height={40} />
        <Box width="100%" pl={2}>
          <Skeleton
            animation="wave"
            height={12}
            width="70%"
            style={{ marginBottom: 6 }}
          />
          <Skeleton height={12} width="90%" />
        </Box>
      </Box>
    </Box>
  );
};

export default BaseSkeleton;
