import React from 'react';
import { useParams } from 'react-router-dom';
import { Layout, Card } from '../../components';

import useDataWithComments from '../../hooks/useDataWithComments';

type ParamsProps = {
  user: string;
};

const User: React.FC = () => {
  const { user } = useParams<ParamsProps>();
  const userUrl = `/user/${user}/.json`;

  const { posts: userData, isLoading } = useDataWithComments(userUrl);

  if (isLoading) {
    return (
      <Layout aside sidebarProps={{ type: 'post' }}>
        Loading ...
      </Layout>
    );
  }

  return (
    <Layout aside sidebarProps={{ type: 'post' }}>
      {userData.map((userPost: any) => (
        <Card postProps={{ data: userPost }} key={userPost.id} />
      ))}
    </Layout>
  );
};

export default User;
