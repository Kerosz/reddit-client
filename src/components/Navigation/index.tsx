import React from 'react';
import { Link } from 'react-router-dom';
import {
  withStyles,
  BottomNavigationAction,
  BottomNavigation,
} from '@material-ui/core';
import capitalize from 'lodash/capitalize';
import filterOptions, { TOption } from '../../constants/filterOptions';
import navigationStyles, { IStyleProps } from './navigation.styles';

const Navigation: React.FC<IStyleProps> = ({ classes }) => {
  const [label, setLabel] = React.useState<string>('all');

  const handleChange = (_event: React.ChangeEvent<{}>, newValue: string) => {
    setLabel(newValue);
  };

  return (
    <BottomNavigation
      value={label}
      onChange={handleChange}
      className={classes.root}
    >
      {filterOptions.map((option: TOption, idx: number) => (
        <BottomNavigationAction
          className={classes.button}
          label={capitalize(option.name)}
          value={option.name}
          icon={option.icon}
          component={Link}
          to={option.path}
          key={`${option.name}-${idx}`}
        />
      ))}
    </BottomNavigation>
  );
};

export default withStyles(navigationStyles)(Navigation);
