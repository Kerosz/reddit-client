import React from 'react';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import { Footer, Header, PostCard } from '../../components';
import homeStyles, { StyleProps } from '../home/home.styles';
import useDataWithMeta from '../../hooks/useDataWithMeta';

const Subreddits: React.FC<StyleProps> = ({ classes }) => {
  const subredditUrl = `https://www.reddit.com/subreddits/.json`;

  const { result: subreddits } = useDataWithMeta(subredditUrl);

  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <main className={classes.main}>
          <div className={classes.content}>
            {subreddits?.map((post: any) => (
              <PostCard data={post} key={post.id} />
            ))}
          </div>
        </main>
        <Footer />
      </Container>
    </>
  );
};

export default withStyles(homeStyles)(Subreddits);
