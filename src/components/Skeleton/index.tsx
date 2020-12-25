import React from 'react';
import CardSkeleton from './card';
import PostSkeleton from './post';
import SidebarSkeleton from './sidebar';

interface IProps {
  type: 'card' | 'post' | 'sidebar';
}

const Skeleton: React.FC<IProps> = ({ type }) => {
  if (type === 'card') return <CardSkeleton />;
  if (type === 'post') return <PostSkeleton />;
  if (type === 'sidebar') return <SidebarSkeleton />;

  return null;
};

export default Skeleton;
