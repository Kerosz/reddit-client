import React from 'react';
import Container from '@material-ui/core/Container';
import { useParams } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { Footer, Header, Sidebar, PostCard } from '../../components';
import homeStyles, { StyleProps } from '../home/home.styles';
import useDataWithMeta from '../../hooks/useDataWithMeta';

type ParamsProps = {
  subreddit: string;
};

const Subreddit: React.FC<StyleProps> = ({ classes }) => {
  const { subreddit } = useParams<ParamsProps>();
  const subredditUrl = `https://www.reddit.com/r/${subreddit}/.json`;

  const { result: posts } = useDataWithMeta(subredditUrl);

  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <main className={classes.main}>
          <Sidebar type="post" />
          <div className={classes.content}>
            {posts?.map((post: any) => (
              <PostCard data={post} key={post.id} />
            ))}
          </div>
        </main>
        <Footer />
      </Container>
    </>
  );
};

export default withStyles(homeStyles)(Subreddit);
