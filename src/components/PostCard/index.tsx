import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Share';
import postCardStyles, { StyleProps } from './postCard.styles';
import { formatNumbers } from '../../helpers';

export type ListProps = {
  data: {
    subreddit: string;
    thumbnail: string;
    title: string;
    selftext: string;
    author: string;
    url: string;
    ups: string;
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
          <Avatar
            data-testid="avatar"
            alt={data.subreddit}
            src={data.thumbnail}
          />
          <span data-testid="subreddit">r/{data.subreddit}</span>
          <p data-testid="author">Posted by u/{data.author}</p>
        </header>
        <div className={classes.content}>
          <div className={classes.details}>
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
            <div className={classes.actions}>
              <Button
                aria-label="comments"
                startIcon={<CommentIcon fontSize="small" />}
              >
                Comments
              </Button>
              <IconButton aria-label="share">
                <ShareIcon fontSize="small" />
              </IconButton>
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
