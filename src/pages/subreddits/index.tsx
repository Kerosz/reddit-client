import React from 'react';
import { Grid } from '@material-ui/core';
import { Layout, Card } from '../../components';
import useDataWithMeta from '../../hooks/useDataWithMeta';

const Subreddits: React.FC = () => {
  const subredditUrl = `https://www.reddit.com/subreddits/.json`;

  const { result: subreddits } = useDataWithMeta(subredditUrl);

  return (
    <Layout>
      <Grid container spacing={3}>
        {subreddits?.map((subreddit: any) => (
          <Grid item xl={4} md={4} sm={6} xs={12} key={subreddit.id}>
            <Card type="subreddit" subredditProps={{ data: subreddit }} />
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
};

export default Subreddits;
