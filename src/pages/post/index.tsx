import React from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  withStyles,
  Tooltip,
  Divider,
  Avatar,
  Breadcrumbs,
  Button,
} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import PublishIcon from '@material-ui/icons/Publish';
import { Layout, Card } from '../../components';
import { fd } from '../../helpers';
import postStyles, { StyledBreadcrumb, StyleProps } from './post.styles';
import usePostsWithComments from '../../hooks/usePostWithComments';

type ParamsProps = {
  id: string;
  subreddit: string;
  type: string;
  name: string;
};

const Post: React.FC<StyleProps> = ({ classes }) => {
  const { subreddit, type, id, name } = useParams<ParamsProps>();
  const postUrl = `https://www.reddit.com/r/${subreddit}/${type}/${id}/${name}/.json`;

  const { post, comments, isLoading }: any = usePostsWithComments(postUrl);

  if (isLoading) {
    return (
      <Layout aside sidebarProps={{ type: 'post' }}>
        <article className={classes.post} aria-label="post content">
          Loading...
        </article>
      </Layout>
    );
  }

  return (
    <Layout aside sidebarProps={{ type: 'post' }}>
      <article className={classes.post} aria-label="post content">
        <Breadcrumbs aria-label="breadcrumbs" component="nav">
          <StyledBreadcrumb
            component={Link}
            to="/"
            label="Home"
            clickable
            icon={<HomeIcon fontSize="small" />}
          />
          <StyledBreadcrumb
            component={Link}
            to="/subreddits/"
            label="Subreddits"
            clickable
          />
          <StyledBreadcrumb
            component={Link}
            to={`/subreddit/r/${post.subreddit}`}
            label={post.subreddit}
            clickable
          />
          <StyledBreadcrumb label={post.name} disabled />
        </Breadcrumbs>

        <header className={classes.header} aria-label="post head">
          <aside className={classes.info}>
            <Tooltip
              placement="top"
              title="Upvotes"
              aria-label="upvotes count"
              arrow
            >
              <Button
                startIcon={<PublishIcon />}
                size="small"
                classes={{ root: classes.actionVote }}
                disableRipple
                disableFocusRipple
              >
                {fd.shortenLargeNumber(post.ups)}
              </Button>
            </Tooltip>

            <span>{post.upvote_ratio * 100}% ratio</span>
          </aside>
          <Divider orientation="vertical" flexItem />
          <Divider orientation="horizontal" className={classes.divider} />
          <div className={classes.top} aria-label="article head">
            <div className={classes.panel}>
              <Avatar alt={post.author} src={post.thumbnail} />
              <Link
                aria-label="author name"
                style={{
                  color:
                    post.author_flair_background_color &&
                    post.author_flair_background_color,
                }}
                to={`/profile/u/${post.author}`}
              >
                {post.author}
              </Link>
              <time aria-label="time posted">
                {post?.created_utc && fd.getTimeFromNow(post.created_utc)}
              </time>
            </div>
            <h1 className={classes.title}>{post.title}</h1>
            <div
              className={classes.underLine}
              style={{
                backgroundColor:
                  post.author_flair_background_color &&
                  post.author_flair_background_color,
              }}
            />
          </div>
        </header>

        <section aria-label="post body" className={classes.body}>
          {post.selftext && (
            <p className={classes.description}>{post.selftext}</p>
          )}

          {post.post_hint === 'image' && (
            <a
              href={post.url_overridden_by_dest}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt={post.title}
                style={{
                  backgroundImage: post.url_overridden_by_dest
                    ? `url(${post.url_overridden_by_dest})`
                    : 'inherit',
                }}
                className={classes.preview}
              />
            </a>
          )}
        </section>

        {comments && comments.length > 0 ? (
          <section aria-label="discussion list" className={classes.comments}>
            <h2>Discussions</h2>
            <ul>
              {comments.map(({ data }: any) => (
                <Card
                  component="li"
                  type="comment"
                  commentProps={{ data, postId: post.id }}
                  key={data.id}
                />
              ))}
            </ul>
          </section>
        ) : null}
      </article>
    </Layout>
  );
};

export default withStyles(postStyles)(Post);
