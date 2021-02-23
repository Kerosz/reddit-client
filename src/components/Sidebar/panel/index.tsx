import React from 'react';
import { withStyles, CardActions, Divider } from '@material-ui/core';
import paneStyles, { StyleProps } from './pane.styles';

type AcceptType = React.ReactElement | JSX.Element | HTMLElement | string;

type Props = {
  component?: React.ElementType;
  title?: AcceptType;
  content?: AcceptType;
  divider?: boolean;
  action?: AcceptType;
};

const Panel: React.FC<Props & StyleProps> = ({
  component: Component = 'div',
  title = 'Panel Title',
  content,
  divider = true,
  action,
  classes,
  ...rest
}) => {
  if (!Component) throw new Error('Component was not specified');

  return (
    <Component className={classes.card} {...rest}>
      <h3 className={classes.title}>{title}</h3>
      <Divider />
      {content}
      {divider && <Divider />}
      <CardActions>{action}</CardActions>
    </Component>
  );
};

export default withStyles(paneStyles)(Panel);
