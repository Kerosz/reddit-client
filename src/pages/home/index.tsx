import React from 'react';
import { useParams } from 'react-router-dom';
import { Layout, Card } from '../../components';
import { getAllPosts } from '../../features/posts/postsSlice';
import useFetch from '../../hooks/useFetch';

type ParamsProps = {
  category: string;
};

const Home: React.FC = () => {
  const { category } = useParams<ParamsProps>();

  const { posts } = useFetch({ action: getAllPosts, params: category });
  const { isLoading, posts: postsData } = posts;

  if (isLoading) {
    return <Layout aside>Loading...</Layout>;
  }

  return (
    <Layout aside>
      {postsData?.map((post: any) => (
        <Card postProps={{ data: post }} key={post.id} />
      ))}
    </Layout>
  );
};

export default Home;
