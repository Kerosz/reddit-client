import React from 'react';
import Container from '@material-ui/core/Container';
import { useParams } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { Footer, Header } from '../../components';
import homeStyles, { StyleProps } from '../home/home.styles';

type ParamsProps = {
  user: string;
};

const User: React.FC<StyleProps> = ({ classes }) => {
  const { user } = useParams<ParamsProps>();

  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <main className={classes.main}>
          <div className={classes.content}>{user}</div>
        </main>
        <Footer />
      </Container>
    </>
  );
};

export default withStyles(homeStyles)(User);
