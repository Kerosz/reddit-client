import React from 'react';
import { useParams } from 'react-router-dom';
import { Layout } from '../../components';

type ParamsProps = {
  user: string;
};

const User: React.FC = () => {
  const { user } = useParams<ParamsProps>();

  return (
    <Layout aside sidebarProps={{ type: 'post' }}>
      {user}
    </Layout>
  );
};

export default User;
