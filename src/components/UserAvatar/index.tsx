import React from 'react';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import userAvatarStyles, { StyleProps } from './userAvarar.styles';

interface Props extends StyleProps {
  name: string;
  email: string;
}

const UserAvatar: React.FC<Props> = ({ classes, name, email }) => (
  <>
    <CardHeader
      avatar={
        // eslint-disable-next-line react/jsx-wrap-multilines
        <Avatar aria-label="recipe" className={classes.avatar}>
          R
        </Avatar>
      }
      title={name}
      subheader={email}
    />
  </>
);

export default withStyles(userAvatarStyles)(UserAvatar);
