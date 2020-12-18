import React from 'react';
import Container from '@material-ui/core/Container';
import { useParams } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { Footer, Header } from '../../components';
import homeStyles, { StyleProps } from '../home/home.styles';

type ParamsProps = {
  subreddit: string;
};

const Subreddit: React.FC<StyleProps> = ({ classes }) => {
  const { subreddit } = useParams<ParamsProps>();

  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <main className={classes.main}>
          <div className={classes.content}>{subreddit}</div>
        </main>
        <Footer />
      </Container>
    </>
  );
};

export default withStyles(homeStyles)(Subreddit);
