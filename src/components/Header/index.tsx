import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import { updateMode } from '../../features/theme/themeSlice';
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
  const { lightMode } = useSelector((state: RootStateOrAny) => state.theme);
  const dispatch = useDispatch();

  const handleModeSwitch = () => {
    const prev = localStorage.getItem('material-ui-theme');

    if (prev) {
      const newMode = JSON.parse(prev);

      dispatch(updateMode(!newMode));
      localStorage.setItem('material-ui-theme', JSON.stringify(!newMode));
    } else {
      const newMode = !lightMode;

      localStorage.setItem('material-ui-theme', JSON.stringify(newMode));
      dispatch(updateMode(newMode));
    }
  };

  return (
    <ScrollEffect>
      <AppBar className={classes.navbar}>
        <Branding theme={lightMode} />
        <SearchBar />
        <div className={classes.group}>
          <UserAvatar name="Andrei Chirila" email="andrei.chirila@gmail.com" />
          <IconButton
            aria-label="switch theme mode"
            onClick={handleModeSwitch}
            color="inherit"
          >
            {lightMode ? (
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
