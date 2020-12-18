import React from 'react';
import Container from '@material-ui/core/Container';
import { useParams } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { Footer, Header, PostCard, Sidebar } from '../../components';
import homeStyles, { StyleProps } from './home.styles';
import useDataWithMeta from '../../hooks/useDataWithMeta';

type ParamsProps = {
  category: string;
};

const Home: React.FC<StyleProps> = ({ classes }) => {
  // const path = window.location.pathname;
  const { category } = useParams<ParamsProps>();

  const { result: postsData } = useDataWithMeta(
    category
      ? `https://www.reddit.com/${category}/.json`
      : 'https://www.reddit.com/.json',
  );

  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <main className={classes.main}>
          <Sidebar />
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
