import React from 'react';
import { useParams } from 'react-router-dom';
import { Layout, Card } from '../../components';
import useDataWithMeta from '../../hooks/useDataWithMeta';

type ParamsProps = {
  category: string;
};

const Home: React.FC = () => {
  const { category } = useParams<ParamsProps>();

  const { result: postsData, isLoading } = useDataWithMeta(
    category
      ? `https://www.reddit.com/${category}/.json`
      : 'https://www.reddit.com/.json',
  );

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
