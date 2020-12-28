import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../components/Layout';
import Card from '../../components/Card';
import ListWrapper from '../../components/List';
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
    subreddit: { posts, isLoading },
  } = useFetch({ action: getSubredditPosts, params: subredditName });

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
      <ListWrapper data={posts} component={Card} />
    </Layout>
  );
};

export default Subreddit;
