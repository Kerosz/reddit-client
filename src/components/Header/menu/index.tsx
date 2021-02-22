import React from 'react';
import {
  withStyles,
  IconButton,
  Button,
  Switch,
  ClickAwayListener,
  Grow,
  Paper,
  Popper,
  MenuItem,
  MenuList,
} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import GitHubIcon from '@material-ui/icons/GitHub';
import RedditIcon from '@material-ui/icons/Reddit';
import { useDispatch } from 'react-redux';
import { updateMode } from '../../../features/theme/themeSlice';
import menuStyles, { IStyleProps } from './menu.styles';

interface IProps extends IStyleProps {
  theme: boolean;
}

const Menu: React.FC<IProps> = ({ theme, classes }) => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [checked, setChecked] = React.useState<boolean>(false);
  const btnRef = React.useRef<HTMLButtonElement | null>(null);
  const dispatch = useDispatch();

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: React.MouseEvent<EventTarget>) => {
    if (
      btnRef.current &&
      btnRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      btnRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const handleModeSwitch = () => {
    const prev = localStorage.getItem('material-ui-theme');

    if (prev) {
      const newMode = JSON.parse(prev);

      dispatch(updateMode(!newMode));
      localStorage.setItem('material-ui-theme', JSON.stringify(!newMode));
    } else {
      const newMode = !theme;

      localStorage.setItem('material-ui-theme', JSON.stringify(newMode));
      dispatch(updateMode(newMode));
    }

    setChecked((prevVal) => !prevVal);
  };

  return (
    <div className={classes.root}>
      <div>
        <IconButton
          ref={btnRef}
          aria-label="more"
          aria-controls={open ? 'menu-list' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <MoreVertIcon />
        </IconButton>
        <Popper
          open={open}
          anchorEl={btnRef.current}
          role={undefined}
          placement="bottom-end"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom' ? 'center top' : 'center bottom',
              }}
            >
              <Paper className={classes.paper}>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="menu-list"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem className={classes.itemTitle} disabled dense>
                      view options
                    </MenuItem>
                    <MenuItem
                      className={classes.item}
                      onClick={handleModeSwitch}
                    >
                      <Button
                        startIcon={
                          theme ? <Brightness7Icon /> : <Brightness4Icon />
                        }
                        className={classes.button}
                        size="small"
                        disabled
                      >
                        Night Mode
                      </Button>
                      <Switch
                        checked={checked}
                        color="default"
                        size="small"
                        inputProps={{
                          'aria-label': 'switch theme mode',
                        }}
                      />
                    </MenuItem>
                    <MenuItem className={classes.itemTitle} disabled dense>
                      more stuff
                    </MenuItem>
                    <MenuItem
                      className={classes.item}
                      component="a"
                      href="https://github.com/Kerosz"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        startIcon={<GitHubIcon />}
                        className={classes.button}
                        size="small"
                        disabled
                      >
                        Github
                      </Button>
                    </MenuItem>
                    <MenuItem
                      className={classes.item}
                      component="a"
                      href="https://www.reddit.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        startIcon={<RedditIcon />}
                        className={classes.button}
                        size="small"
                        disabled
                      >
                        Visit Reddit
                      </Button>
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
};

export default withStyles(menuStyles)(Menu);
