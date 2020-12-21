import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles, Button } from '@material-ui/core';
import PublishIcon from '@material-ui/icons/Publish';
import ShareIcon from '@material-ui/icons/Share';
import commentsCardStyles, { StyleProps } from './commentsCard.styles';
import { fd, copyToClipboard } from '../../../helpers';

export type CommentDataProps = {
  component?: React.ElementType;
  data?: {
    id: string;
    author: string;
    body: string;
    body_html: string;
    created_utc: number;
    edited: number;
    permalink: string;
    ups: number;
    subreddit: string;
  };
  postId?: string;
};

const CommentCard: React.FC<CommentDataProps & StyleProps> = ({
  classes,
  component: Component,
  data,
}): React.ReactElement | null => {
  if (!Component) throw new Error('Component was not specified');
  if (!data) return null;

  const timeSinceCreated = fd.getTimeFromNow(data.created_utc);
  const formatSinceEdited = fd.getTimeFromNow(data.edited);
  const formatedUpvotes = fd.shortenLargeNumber(data.ups);
  const upvotes = data.ups > 1 ? 'upvotes' : 'upvote';
  // TODO: needs to be updated with env variable later on
  const clipboardUrl = `https://www.reddit.com${data.permalink}`;

  return (
    <Component className={classes.root} id={data.id}>
      <div className={classes.header} aria-label="comment head">
        <Link to={`/profile/u/${data.author}`} data-testid="author">
          {data.author}
        </Link>
        <time>{timeSinceCreated}</time>
        {data.edited && (
          <time style={{ fontStyle: 'italic' }}>
            {' '}
            - edited {formatSinceEdited}
          </time>
        )}
      </div>
      <p className={classes.body} aria-label="comment body" data-testid="body">
        {data.body}
      </p>
      <div className={classes.actions} aria-label="comment actions">
        <Button
          startIcon={<PublishIcon />}
          size="small"
          classes={{ root: classes.actionVote }}
          disabled
        >
          {formatedUpvotes} {upvotes}
        </Button>
        <Button
          onClick={() => copyToClipboard(clipboardUrl)}
          startIcon={<ShareIcon />}
          size="small"
        >
          Share
        </Button>
      </div>
    </Component>
  );
};

export default withStyles(commentsCardStyles)(CommentCard);
