import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import { Box } from '@material-ui/core';

const SidebarSkeleton: React.FC = () => {
  return (
    <Box display="flex" alignItems="center" p={1}>
      <Skeleton variant="circle" width={47} height={40} />
      <Box width="100%" pl={2}>
        <Skeleton
          animation="wave"
          height={12}
          width="40%"
          style={{ marginBottom: 6 }}
        />
        <Skeleton height={12} width="80%" />
      </Box>
    </Box>
  );
};

export default SidebarSkeleton;
