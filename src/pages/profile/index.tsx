import React from 'react';
import { useParams } from 'react-router-dom';
import { Alert, AlertTitle } from '@material-ui/lab';
import Layout from '../../components/Layout';
import Card from '../../components/Card';
import Skeleton from '../../components/Skeleton';
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
    user: { data, isLoading, isError, error },
  } = useFetch({ action: getUserPosts, params: userName });

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
      <Layout aside sidebarProps={{ type: 'user' }}>
        {Array.from(new Array(3)).map((_, idx) => (
          <Skeleton type="card" key={idx} />
        ))}
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
