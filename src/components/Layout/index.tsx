import React from 'react';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import layoutStyles, { StyleProps } from './layout.styles';

import Header from '../Header';
import Footer from '../Footer';
import Sidebar, { Props as SidebarProps } from '../Sidebar';

type Props = {
  children: React.ReactNode;
  width?: 'lg' | 'xs' | 'sm' | 'md' | 'xl' | undefined;
  aside?: true | false;
  sidebarProps?: SidebarProps;
};

const Layout: React.FC<Props & StyleProps> = ({
  children,
  width = 'lg',
  aside,
  sidebarProps,
  classes,
}) => (
  <>
    <Header />
    <Container maxWidth={width}>
      <main className={classes.main}>
        {aside && <Sidebar {...sidebarProps} />}
        <div className={classes.content}>{children}</div>
      </main>
    </Container>
    <Footer />
  </>
);

export default withStyles(layoutStyles)(Layout);
