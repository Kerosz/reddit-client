import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Share';
import LinkIcon from '@material-ui/icons/Link';
import postCardStyles, { StyleProps } from './postCard.styles';
import { formatNumbers, copyToClipboard } from '../../helpers';

export type ListProps = {
  data: {
    subreddit: string;
    thumbnail: string;
    title: string;
    selftext: string;
    author: string;
    url: string;
    ups: string;
    permalink: string;
  };
};

const PostCard: React.FC<StyleProps & ListProps> = ({ classes, data }) => {
  const checkForImage = (value: string): boolean => {
    const regex = /\.(gif|jpg|jpeg|tiff|png)$/i;
    return regex.test(value);
  };

  const checkForVideo = (value: string): boolean => {
    return value.toLowerCase().indexOf('youtube') >= 0;
  };

  let preview;
  if (checkForImage(data.url)) {
    preview = <img src={data.url} alt={data.subreddit} />;
  } else if (checkForVideo(data.url)) {
    const res = data.url.split('=');

    preview = (
      <iframe
        title={data.subreddit}
        aria-label="youtube media"
        src={`https://www.youtube.com/embed/${res[1]}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        allowFullScreen
      />
    );
  } else {
    preview = null;
  }

  return (
    <article className={classes.root} aria-label="reddit post">
      <div className={classes.post}>
        <header className={classes.header}>
          <Avatar alt={data.subreddit} src={data.thumbnail} />

          <span data-testid="subreddit">
            <Link to={`subreddit/r/${data.subreddit}`}>r/{data.subreddit}</Link>
          </span>

          <p data-testid="author">
            Posted by{' '}
            <Link to={`profile/u/${data.author}`}>u/{data.author}</Link>
          </p>
        </header>
        <div className={classes.content}>
          <div className={classes.details}>
            <Link to={`post${data.permalink}`}>
              <div>
                <h2 data-testid="title">{data.title}</h2>
                {data.selftext && (
                  <p data-testid="description">
                    {`${
                      data.selftext.length > 200
                        ? `${data.selftext.slice(0, 200)}...`
                        : data.selftext
                    }`}
                  </p>
                )}
              </div>
            </Link>
            <div className={classes.actions}>
              <Button
                aria-label="comments"
                startIcon={<CommentIcon fontSize="small" />}
                component={Link}
                to={`post${data.permalink}`}
              >
                Comments
              </Button>
              <Button
                aria-label="details"
                startIcon={<LinkIcon fontSize="small" />}
                component={Link}
                to={`post${data.permalink}`}
              >
                Details
              </Button>
              <Tooltip placement="right" title="Copy" aria-label="copy" arrow>
                <Button
                  aria-label="share"
                  startIcon={<ShareIcon fontSize="small" />}
                  onClick={() => copyToClipboard(data.permalink)}
                >
                  Share
                </Button>
              </Tooltip>
            </div>
          </div>
          <div className={classes.preview} data-testid="preview">
            {preview}
          </div>
        </div>
      </div>
      <div className={classes.ratings}>
        <h2>{formatNumbers(data.ups, null)}</h2>
      </div>
    </article>
  );
};

export default withStyles(postCardStyles)(PostCard);
