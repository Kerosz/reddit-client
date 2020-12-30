import React from 'react';
import { useParams } from 'react-router-dom';
import { Alert, AlertTitle } from '@material-ui/lab';
import Layout from '../../components/Layout';
import Card from '../../components/Card';
import Skeleton from '../../components/Skeleton';
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
    subreddit: { posts, isLoading, isError, error },
  } = useFetch({ action: getSubredditPosts, params: subredditName });

  if (isError) {
    return (
      <Layout aside sidebarProps={{ type: 'filter' }}>
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          There was an error with your request — <strong>{error}</strong>
        </Alert>
      </Layout>
    );
  }

  if (isLoading) {
    return (
      <Layout aside sidebarProps={{ type: 'subreddit' }}>
        {Array.from(new Array(6)).map((_, idx) => (
          <Skeleton type="card" key={idx} />
        ))}
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
