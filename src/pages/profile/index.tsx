import React from 'react';
import { useParams } from 'react-router-dom';
import { Layout, Card } from '../../components';

import useDataWithComments from '../../hooks/useDataWithComments';

type ParamsProps = {
  user: string;
};

const User: React.FC = () => {
  const { user } = useParams<ParamsProps>();
  const userUrl = `https://www.reddit.com/user/${user}/.json`;

  const { posts: userPosts, isLoading } = useDataWithComments(userUrl);

  if (isLoading) {
    return (
      <Layout aside sidebarProps={{ type: 'user' }}>
        Loading ...
      </Layout>
    );
  }

  return (
    <Layout aside sidebarProps={{ type: 'base' }}>
      {userPosts.map((userPost: any) => (
        <Card postProps={{ data: userPost }} key={userPost.id} />
      ))}
    </Layout>
  );
};

export default User;
