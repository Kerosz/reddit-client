import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import userAvatarStyles, { StyleProps } from './userAvarar.styles';

type Props = {
  name: string;
  email: string;
} & StyleProps;

const UserAvatar: React.FC<Props> = ({ classes, name, email }) => {
  const nameInitial = name.substring(0, 1).toUpperCase();

  return (
    <div className={classes.pane}>
      <Avatar aria-label="recipe" className={classes.avatar}>
        {nameInitial}
      </Avatar>
      <div className={classes.group}>
        <h3 className={classes.heading}>{name}</h3>
        <p className={classes.subheading}>{email}</p>
      </div>
    </div>
  );
};

export default withStyles(userAvatarStyles)(UserAvatar);
