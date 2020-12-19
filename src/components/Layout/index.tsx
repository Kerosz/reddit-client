import React from 'react';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import layoutStyles, { StyleProps } from './layout.styles';

import Header from '../Header';
import Footer from '../Footer';
import Sidebar from '../Sidebar';

type Props = {
  children?: React.ReactNode;
  aside?: true | false;
  sidebarProps?: {
    type?: 'main' | 'post' | null;
  };
  width?: 'lg' | 'xs' | 'sm' | 'md' | 'xl' | undefined;
};

const Layout: React.FC<Props & StyleProps> = ({
  children,
  classes,
  aside,
  sidebarProps,
  width = 'lg',
}) => (
  <>
    <Header />
    <Container maxWidth={width}>
      <main className={classes.main}>
        {aside && <Sidebar {...sidebarProps} />}
        <div className={classes.content}>{children}</div>
      </main>
      <Footer />
    </Container>
  </>
);

export default withStyles(layoutStyles)(Layout);
