import React from 'react';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import { Footer, Header, PostCard, Sidebar } from '../../components';
import homeStyles, { StyleProps } from './home.styles';
import useDataWithMeta from '../../hooks/useDataWithMeta';

const Home: React.FC<StyleProps> = ({ classes }) => {
  const path = window.location.pathname;

  const { result: postsData } = useDataWithMeta(
    `https://www.reddit.com${path}.json`,
  );
  const { result: subredditsData } = useDataWithMeta(
    `https://www.reddit.com/subreddits/.json`,
  );

  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <main className={classes.main}>
          <Sidebar result={subredditsData} />
          <div className={classes.content}>
            {postsData?.map((post: any) => (
              <PostCard data={post} key={post.id} />
            ))}
            {/* <button type="button" onClick={() => setPageNumber(pageNumber + 1)}>
              Load More
            </button> */}
          </div>
        </main>
        <Footer />
      </Container>
    </>
  );
};

export default withStyles(homeStyles)(Home);
