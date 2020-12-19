import React from 'react';
import { useParams } from 'react-router-dom';
import { Layout, PostCard } from '../../components';
import useDataWithMeta from '../../hooks/useDataWithMeta';

type ParamsProps = {
  category: string;
};

const Home: React.FC = () => {
  // const path = window.location.pathname;
  const { category } = useParams<ParamsProps>();

  const { result: postsData } = useDataWithMeta(
    category
      ? `https://www.reddit.com/${category}/.json`
      : 'https://www.reddit.com/.json',
  );

  return (
    <Layout aside>
      {postsData?.map((post: any) => (
        <PostCard data={post} key={post.id} />
      ))}
    </Layout>
  );
};

export default Home;
