import React from 'react';
import { useParams } from 'react-router-dom';
import { Layout, Card } from '../../components';
import {
  getSubredditByName,
  getSubredditPosts,
} from '../../features/subreddit/subredditSlice';
import useFetch from '../../hooks/useFetch';

type ParamsProps = {
  subredditName: string;
};

const Subreddit: React.FC = () => {
  const { subredditName } = useParams<ParamsProps>();

  const {
    subreddit: { info },
  } = useFetch({ action: getSubredditByName, params: subredditName });

  const {
    subreddit: { posts, isLoading },
  } = useFetch({ action: getSubredditPosts, params: subredditName });

  if (isLoading) {
    return (
      <Layout aside sidebarProps={{ type: 'subreddit' }}>
        Loading...
      </Layout>
    );
  }

  return (
    <Layout aside sidebarProps={{ type: 'subreddit', data: info }}>
      {posts.map((post: any) => (
        <Card postProps={{ data: post }} key={post.id} />
      ))}
    </Layout>
  );
};

export default Subreddit;
