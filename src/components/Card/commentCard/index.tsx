import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles, Button, Tooltip } from '@material-ui/core';
import PublishIcon from '@material-ui/icons/Publish';
import ShareIcon from '@material-ui/icons/Share';
import commentsCardStyles, { StyleProps } from './commentsCard.styles';
import { fd, copyToClipboard } from '../../../helpers';

export type TCommentData = {
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

export interface CommentDataProps {
  component?: React.ElementType;
  data?: TCommentData;
  postId?: string;
}

const CommentCard: React.FC<CommentDataProps & StyleProps> = ({
  classes,
  component: Component,
  data,
  postId,
}): React.ReactElement | null => {
  if (!Component) throw new Error('Component was not specified');
  if (!data) return null;

  const timeSinceCreated = fd.getTimeFromNow(data.created_utc);
  const formatSinceEdited = fd.getTimeFromNow(data.edited);
  const formatedUpvotes = fd.shortenLargeNumber(data.ups);
  const upvotes = data.ups > 1 ? 'upvotes' : 'upvote';
  const url = process.env.REACT_APP_VERCEL_URL || 'http://localhost:3000';
  const shareUrl = `${url}/#/post/${data.subreddit}/comments/${postId}`;

  let authorDisplay;
  if (data.author !== '[deleted]') {
    authorDisplay = (
      <Link data-testid="author" to={`/profile/${data.author}`}>
        {data.author}
      </Link>
    );
  } else {
    authorDisplay = <span data-testid="author">{data.author}</span>;
  }

  return (
    <Component className={classes.root} id={data.id}>
      <div className={classes.header} aria-label="comment head">
        {authorDisplay}
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
        <Tooltip placement="right" title="Copy" aria-label="copy" arrow>
          <Button
            onClick={() => copyToClipboard(shareUrl)}
            startIcon={<ShareIcon />}
            size="small"
          >
            Share
          </Button>
        </Tooltip>
      </div>
    </Component>
  );
};

export default withStyles(commentsCardStyles)(CommentCard);
