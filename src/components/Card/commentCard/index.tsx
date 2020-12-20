import React from 'react';
import { withStyles } from '@material-ui/core';
import commentsCardStyles, { StyleProps } from './commentsCard.styles';

export type CommentDataProps = {
  component?: string;
  data?: {
    id: string;
    author: string;
    body: string;
    body_html: string;
    created_utc: string;
    ups: string;
  };
};

const CommentCard: React.FC<CommentDataProps & StyleProps> = ({
  classes,
  data,
}): React.ReactElement | null => {
  if (!data) return null;

  return (
    <div className={classes.root} id={data.id}>
      <div className={classes.header}>
        <span>{data.author}</span>
        <span>{data.created_utc}</span>
      </div>
      <p>{data.body}</p>
      <div className={classes.actions}>{data.ups}</div>
    </div>
  );
};

export default withStyles(commentsCardStyles)(CommentCard);
