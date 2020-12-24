import React from 'react';
import { Grid } from '@material-ui/core';
import { Layout, Card } from '../../components';
import { getSubreddits } from '../../features/subreddits/subredditsSlice';
import useFetch from '../../hooks/useFetch';

// TODO: Figure out how to make the material-ui grid fluid, so that it won't force the same height on the cards on the same row
const Subreddits: React.FC = () => {
  const {
    subreddits: { subreddits, isLoading },
  } = useFetch({ action: getSubreddits });

  console.log(subreddits);

  if (isLoading) {
    return (
      <Layout>
        <Grid container spacing={3}>
          Loading...
        </Grid>
      </Layout>
    );
  }

  return (
    <Layout>
      <Grid container spacing={3}>
        {subreddits.map((subreddit: any) => (
          <Grid item xl={4} md={4} sm={6} xs={12} key={subreddit.id}>
            <Card type="subreddit" subredditProps={{ data: subreddit }} />
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
};

export default Subreddits;
