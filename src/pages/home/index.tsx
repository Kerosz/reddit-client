import React from 'react';
import { useParams } from 'react-router-dom';
import { Alert, AlertTitle } from '@material-ui/lab';
import Layout from '../../components/Layout';
import Card from '../../components/Card';
import Skeleton from '../../components/Skeleton';
import { getAllPosts } from '../../features/posts/postsSlice';
import useFetch from '../../hooks/useFetch';

type ParamsProps = {
  filterBy: string;
};

const Home: React.FC = () => {
  const { filterBy } = useParams<ParamsProps>();

  const { posts } = useFetch({ action: getAllPosts, params: filterBy });
  const { posts: postsData, isLoading, isError, error } = posts;

  if (isError) {
    return (
      <Layout navigation aside sidebarProps={{ type: 'filter' }}>
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          There was an error with your request — <strong>{error}</strong>
        </Alert>
      </Layout>
    );
  }

  if (isLoading) {
    return (
      <Layout navigation aside sidebarProps={{ type: 'filter' }}>
        {Array.from(new Array(6)).map((_, idx) => (
          <Skeleton type="card" key={idx} />
        ))}
      </Layout>
    );
  }

  return (
    <Layout navigation aside sidebarProps={{ type: 'filter' }}>
      {postsData?.map((post: any) => (
        <Card postProps={{ data: post }} key={post.id} />
      ))}
    </Layout>
  );
};

export default Home;
