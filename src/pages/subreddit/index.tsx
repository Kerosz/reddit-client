import React from 'react';
import { useParams } from 'react-router-dom';
import { Layout, Card } from '../../components';

import useDataWithMeta from '../../hooks/useDataWithMeta';

type ParamsProps = {
  subreddit: string;
};

const Subreddit: React.FC = () => {
  const { subreddit } = useParams<ParamsProps>();
  const subredditUrl = `/r/${subreddit}/.json`;

  const { result: posts, isLoading } = useDataWithMeta(subredditUrl);

  if (isLoading) {
    return (
      <Layout aside sidebarProps={{ type: 'post' }}>
        Loading...
      </Layout>
    );
  }

  return (
    <Layout aside sidebarProps={{ type: 'post' }}>
      {posts?.map((post: any) => (
        <Card postProps={{ data: post }} key={post.id} />
      ))}
    </Layout>
  );
};

export default Subreddit;
