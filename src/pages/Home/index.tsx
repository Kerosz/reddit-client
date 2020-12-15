import React from 'react';
import useSWR from 'swr';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import { Footer, Header, Sidebar } from '../../components';
import homeStyles, { StyleProps } from './home.styles';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function useData(url: string) {
  const { data, error } = useSWR(url, fetcher);
  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}

const Home: React.FC<StyleProps> = ({ classes }) => {
  const path = window.location.pathname;
  const { data: result } = useData(`https://www.reddit.com${path}.json`);

  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <main className={classes.main}>
          <Sidebar result={result} />
        </main>
        <Footer />
      </Container>
    </>
  );
};

export default withStyles(homeStyles)(Home);
