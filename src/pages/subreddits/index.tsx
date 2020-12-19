import React from 'react';
import { Layout, PostCard } from '../../components';
import useDataWithMeta from '../../hooks/useDataWithMeta';

const Subreddits: React.FC = () => {
  const subredditUrl = `https://www.reddit.com/subreddits/.json`;

  const { result: subreddits } = useDataWithMeta(subredditUrl);

  return (
    <Layout>
      {subreddits?.map((post: any) => (
        <PostCard data={post} key={post.id} />
      ))}
    </Layout>
  );
};

export default Subreddits;
