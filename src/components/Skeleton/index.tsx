import React from 'react';
import BaseSkeleton from './base';
import CardSkeleton from './card';
import PostSkeleton from './post';
import SidebarSkeleton from './sidebar';
import SubredditSkeleton from './subreddit';

interface IProps {
  type?: 'card' | 'post' | 'sidebar' | 'subreddit';
}

const Skeleton: React.FC<IProps> = ({ type }) => {
  if (type === 'card') return <CardSkeleton />;
  if (type === 'post') return <PostSkeleton />;
  if (type === 'sidebar') return <SidebarSkeleton />;
  if (type === 'subreddit') return <SubredditSkeleton />;

  return <BaseSkeleton />;
};

export default Skeleton;
