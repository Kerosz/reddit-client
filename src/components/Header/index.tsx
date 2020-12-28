import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import AppBar from '@material-ui/core/AppBar';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/rootReducer';
import Branding from './branding';
import SearchBar from '../SearchBar';
// import UserAvatar from '../UserAvatar';
import headerStyles, { StyleProps } from './header.styles';
import Menu from './menu';

type ScrollProps = {
  children: React.ReactElement;
};

const ScrollEffect: React.FC<ScrollProps> = ({ children }) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
};

const Header: React.FC<StyleProps> = ({ classes }) => {
  const { lightMode } = useSelector((state: RootState) => state.theme);

  return (
    <ScrollEffect>
      <AppBar className={classes.navbar}>
        <Branding theme={lightMode} />
        <SearchBar />
        <div className={classes.group}>
          {/* <UserAvatar name="Andrei Chirila" email="andrei.chirila@gmail.com" /> */}
          <Menu theme={lightMode} />
        </div>
      </AppBar>
    </ScrollEffect>
  );
};

export default withStyles(headerStyles)(Header);
