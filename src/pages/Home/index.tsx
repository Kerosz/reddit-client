import React from 'react';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import { Footer, Header, Sidebar } from '../../components';
import homeStyles, { StyleProps } from './home.styles';

const Home: React.FC<StyleProps> = ({ classes }) => (
  <>
    <Header />
    <Container maxWidth="lg">
      <main className={classes.main}>
        <Sidebar />
      </main>
      <Footer />
    </Container>
  </>
);

export default withStyles(homeStyles)(Home);
