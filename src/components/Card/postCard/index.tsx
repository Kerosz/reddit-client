import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles, Avatar, Tooltip, Button, Chip } from '@material-ui/core';
import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Share';
import LinkIcon from '@material-ui/icons/Link';
import truncate from 'lodash/truncate';
import { copyToClipboard, fd, getSrcFromStr } from '../../../helpers';
import postCardStyles, { StyleProps } from './postCard.styles';

export type TPostData = {
  id: string;
  subreddit: string;
  title: string;
  author: string;
  selftext: string;
  domain: string;
  media: {
    type: string;
  } | null;
  media_embed: {
    content: string;
  };
  secure_media_embed: {
    media_domain_url: string;
  };
  thumbnail: string;
  permalink: string;
  post_hint: string;
  url: string;
  ups: number;
};
export interface PostDataProps {
  component?: React.ElementType;
  data?: TPostData;
}

const PostCard: React.FC<StyleProps & PostDataProps> = ({
  component: Component,
  classes,
  data,
}): React.ReactElement | null => {
  if (!Component) throw new Error('Component was not specified');
  if (!data) return null;

  const isImage = () => /bmp|webp|png|jpg|jpeg|gif$/.test(data.url);

  // TODO Figure out how to make "mov" keyword not to match the "movie" subreddit in the url
  const isVideo = () => /mp4|gifv|mkv|webm$/.test(data.url);
  const videoUrl = () => {
    const urlParts = data.url.split('.');
    urlParts.pop();

    return [...urlParts, 'mp4'].join('.');
  };
  const isEmbed = () => {
    if (data.media) {
      return data.media.type === 'youtube.com';
    }
    return false;
  };

  // BUG: isLink does not match all link posts
  // TODO: Handle all the edge cases, including property self hint not having an assigned value for some reddit self links
  const isLink = () => {
    return (
      !isVideo() &&
      (data.post_hint === 'link' ||
        data.post_hint === 'self' ||
        data.domain === 'instagram.com')
    );
  };

  let preview;
  if (isImage()) {
    preview = <img src={data.url} alt={data.subreddit} />;
  } else if (isVideo()) {
    const url = videoUrl();

    preview = (
      <video controls muted autoPlay loop aria-label={data.title}>
        <source type="video/mp4" src={url} />
      </video>
    );
  } else if (isEmbed()) {
    const url = getSrcFromStr(data.media_embed.content);

    preview = (
      <iframe
        title={data.subreddit}
        aria-label={data.title}
        src={url}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        allowFullScreen
      />
    );
  } else if (isLink()) {
    preview = (
      <Chip
        label="External Link"
        variant="outlined"
        color="primary"
        component="a"
        href={data.url}
        target="_blank"
        rel="noopener noreferrer"
        clickable
      />
    );
  } else {
    preview = null;
  }

  const url = process.env.REACT_APP_VERCEL_URL || 'http://localhost:3000';
  const shareUrl = `${url}/#/post/${data.subreddit}/comments/${data.id}`;

  return (
    <Component className={classes.root} aria-label="reddit post">
      <div className={classes.post}>
        <header className={classes.header} aria-label="post head">
          <Avatar alt={data.subreddit} src={data.thumbnail} />

          <div className={classes.info}>
            <span data-testid="subreddit">
              <Link to={`/subreddit/${data.subreddit}`}>
                r/{data.subreddit}
              </Link>
            </span>

            <p data-testid="author">
              Posted by{' '}
              <Link to={`/profile/${data.author}`}>u/{data.author}</Link>
            </p>
          </div>
        </header>
        <section className={classes.content} aria-label="post body">
          <div className={classes.details}>
            <Link to={`/post/${data.subreddit}/comments/${data.id}`}>
              <h2 data-testid="title">{data.title}</h2>
              {data.selftext && (
                <p data-testid="description">
                  {truncate(data.selftext, { length: 200 })}
                </p>
              )}
            </Link>
            <div className={classes.actions}>
              <Button
                aria-label="comments"
                startIcon={<CommentIcon fontSize="small" />}
                component={Link}
                to={`/post/${data.subreddit}/comments/${data.id}`}
              >
                Comments
              </Button>
              <Button
                aria-label="details"
                startIcon={<LinkIcon fontSize="small" />}
                component={Link}
                to={`/post/${data.subreddit}/comments/${data.id}`}
              >
                Details
              </Button>
              <Tooltip placement="right" title="Copy" aria-label="copy" arrow>
                <Button
                  aria-label="share"
                  startIcon={<ShareIcon fontSize="small" />}
                  onClick={() => copyToClipboard(shareUrl)}
                >
                  Share
                </Button>
              </Tooltip>
            </div>
          </div>
          <div className={classes.preview} data-testid="preview">
            {preview}
          </div>
        </section>
      </div>
      <div className={classes.ratings}>
        <h2>{fd.shortenLargeNumber(data.ups, null)}</h2>
      </div>
    </Component>
  );
};

export default withStyles(postCardStyles)(PostCard);
