import React from 'react';
import SidebarBase from './sidebarBase';
import Panel from './panel';

export type Props = {
  type?: 'base' | 'user' | 'subreddit' | null;
  data?: any;
};

const Sidebar: React.FC<Props> = ({ type, data }) => {
  if (data && type === 'subreddit') {
    return <SidebarBase content={<Panel />} />;
  }

  if (data && type === 'user') {
    return <SidebarBase content={<Panel />} />;
  }

  if (type === 'base') {
    return <SidebarBase />;
  }


  return <SidebarBase filter />;
};

export default Sidebar;
