import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import { useSelector, useDispatch } from 'react-redux';
import { modeSelector, updateMode } from '../../slices/themeSlice';
import Branding from './branding';
import SearchBar from '../SearchBar';
import UserAvatar from '../UserAvatar';
import headerStyles, { StyleProps } from './header.styles';

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
  const mode = useSelector(modeSelector);
  const dispatch = useDispatch();

  const handleModeSwitch = () => {
    if (mode === 'light') {
      dispatch(updateMode('dark'));
    } else {
      dispatch(updateMode('light'));
    }
  };

  return (
    <ScrollEffect>
      <AppBar className={classes.navbar}>
        <Branding theme={mode} />
        <SearchBar />
        <div className={classes.group}>
          <UserAvatar name="Andrei Chirila" email="andrei.chirila@gmail.com" />
          <IconButton
            aria-label="switch theme mode"
            aria-controls="switch-appbar"
            aria-haspopup="false"
            onClick={handleModeSwitch}
            color="inherit"
          >
            {mode === 'light' ? (
              <Brightness4Icon htmlColor="#1c1c1c" />
            ) : (
              <Brightness7Icon />
            )}
          </IconButton>
        </div>
      </AppBar>
    </ScrollEffect>
  );
};

export default withStyles(headerStyles)(Header);
