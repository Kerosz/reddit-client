import React from 'react';
import { Avatar, Box } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';

interface IBoxProps {
  fd?: string;
  mb?: string | number;
  w?: string | number;
  h?: string | number;
  children: React.ReactNode;
}

const FlexBox: React.FC<IBoxProps> = ({
  fd = 'row',
  mb,
  w,
  h = 'inherit',
  children,
}) => {
  return (
    <Box
      mb={mb}
      display="flex"
      flexDirection={fd}
      alignItems="center"
      width={w}
      height={h}
      justifyContent="space-between"
    >
      {children}
    </Box>
  );
};

const PostSkeleton: React.FC = () => {
  return (
    <>
      <FlexBox w="285px" mb={5}>
        <Skeleton variant="rect" width={63} height={20} />
        <Skeleton variant="rect" width={63} height={20} />
        <Skeleton variant="rect" width={63} height={20} />
        <Skeleton variant="rect" width={63} height={20} />
      </FlexBox>
      <FlexBox w="100%" mb={10}>
        <Box
          width="20%"
          display="flex"
          flexDirection="column"
          alignItems="center"
          height="35px"
          justifyContent="space-between"
        >
          <Skeleton variant="rect" width={48} height={17} />
          <Skeleton variant="rect" width={43} height={14} />
        </Box>
        <Box width="100%">
          <FlexBox mb={3} w="250px">
            <Skeleton variant="circle">
              <Avatar />
            </Skeleton>
            <Skeleton variant="rect" width={90} height={15} />
            <Skeleton variant="rect" width={105} height={11} />
          </FlexBox>
          <Skeleton width="90%" height={28} />
          <Skeleton width="90%" height={28} />
        </Box>
      </FlexBox>
      <Skeleton variant="rect" width="100%" height={468} />
    </>
  );
};

export default PostSkeleton;
