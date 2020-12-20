import React from 'react';
import { Layout, Card } from '../../components';
import useDataWithMeta from '../../hooks/useDataWithMeta';

const Subreddits: React.FC = () => {
  const subredditUrl = `https://www.reddit.com/subreddits/.json`;

  const { result: subreddits } = useDataWithMeta(subredditUrl);

  console.log(subreddits);

  return (
    <Layout>
      {subreddits?.map((subreddit: any) => (
        <Card
          type="subreddit"
          subredditProps={{ data: subreddit }}
          key={subreddit.id}
        />
      ))}
    </Layout>
  );
};

export default Subreddits;
