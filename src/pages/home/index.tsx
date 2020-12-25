import React from 'react';
import { useParams } from 'react-router-dom';
import { Layout, Card } from '../../components';
import { getAllPosts } from '../../features/posts/postsSlice';
import Skeleton from '../../components/Skeleton';
import useFetch from '../../hooks/useFetch';

type ParamsProps = {
  category: string;
};

const Home: React.FC = () => {
  const { category } = useParams<ParamsProps>();

  const { posts } = useFetch({ action: getAllPosts, params: category });
  const { posts: postsData, isLoading } = posts;

  if (isLoading) {
    return (
      <Layout aside sidebarProps={{ type: 'filter' }}>
        {Array.from(new Array(6)).map(() => (
          <Skeleton type="card" />
        ))}
      </Layout>
    );
  }

  return (
    <Layout aside sidebarProps={{ type: 'filter' }}>
      {postsData?.map((post: any) => (
        <Card postProps={{ data: post }} key={post.id} />
      ))}
    </Layout>
  );
};

export default Home;
