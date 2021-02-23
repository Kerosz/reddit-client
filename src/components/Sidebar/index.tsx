import React from 'react';
import SidebarBase from './sidebarBase';
import Subreddit, { TSidebarData } from './subreddit';
import User, { TUserData } from './user';

export type TProps = {
  type?: 'filter' | 'user' | 'subreddit' | null;
  data?: TSidebarData & TUserData;
};

const Sidebar: React.FC<TProps> = ({ type, data }) => {
  if (data && type === 'subreddit') {
    return <Subreddit data={data} />;
  }

  if (data && type === 'user') {
    return <User data={data} />;
  }

  if (type === 'filter') {
    return <SidebarBase filter />;
  }

  return <SidebarBase />;
};

export default Sidebar;
