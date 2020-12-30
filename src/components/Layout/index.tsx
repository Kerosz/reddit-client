import React from 'react';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import layoutStyles, { StyleProps } from './layout.styles';

import Header from '../Header';
import Footer from '../Footer';
import Navigation from '../Navigation';
import Sidebar, { TProps as SidebarProps } from '../Sidebar';

type Props = {
  children: React.ReactNode;
  width?: 'lg' | 'xs' | 'sm' | 'md' | 'xl';
  aside?: true | false;
  navigation?: true | false;
  sidebarProps?: SidebarProps;
};

const Layout: React.FC<Props & StyleProps> = ({
  children,
  width = 'lg',
  aside,
  navigation,
  sidebarProps,
  classes,
}) => (
  <>
    <Header />
    <Container maxWidth={width}>
      <main className={classes.main}>
        {aside && <Sidebar {...sidebarProps} />}
        <section className={classes.content}>{children}</section>
      </main>
    </Container>
    {navigation && <Navigation />}
    <Footer />
  </>
);

export default withStyles(layoutStyles)(Layout);
