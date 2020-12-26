import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../components/Layout';
import Card from '../../components/Card';
// import Skeleton from '../../components/Skeleton';
import useFetch from '../../hooks/useFetch';
import { getUserByName, getUserPosts } from '../../features/user/userSlice';

type ParamsProps = {
  userName: string;
};

const User: React.FC = () => {
  const { userName } = useParams<ParamsProps>();

  const {
    user: { profile },
  } = useFetch({ action: getUserByName, params: userName });

  const {
    user: { data, isLoading },
  } = useFetch({ action: getUserPosts, params: userName });

  if (isLoading) {
    return (
      <Layout aside sidebarProps={{ type: 'user' }}>
        Loading ...
      </Layout>
    );
  }

  return (
    <Layout aside sidebarProps={{ type: 'user', data: profile }}>
      {data.posts.map((userPost: any) => (
        <Card postProps={{ data: userPost }} key={userPost.id} />
      ))}
    </Layout>
  );
};

export default User;
