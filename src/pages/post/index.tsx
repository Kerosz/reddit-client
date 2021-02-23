/* eslint-disable react/no-children-prop */
import React from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import { Link, useParams } from 'react-router-dom';
import {
  withStyles,
  Tooltip,
  Divider,
  Avatar,
  Breadcrumbs,
  Button,
} from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
import HomeIcon from '@material-ui/icons/Home';
import PublishIcon from '@material-ui/icons/Publish';
import Layout from '../../components/Layout';
import Card from '../../components/Card';
import Skeleton from '../../components/Skeleton';
import { fd } from '../../helpers';
import postStyles, { StyledBreadcrumb, StyleProps } from './post.styles';
import useFetch from '../../hooks/useFetch';
import { getPost } from '../../features/post/postSlice';

type ParamsProps = {
  id: string;
  subredditName: string;
};

type TState = {
  data: {
    post: any;
    comments: any;
  };
  isLoading: boolean;
  isError: boolean;
  error: string | null;
};

const Post: React.FC<StyleProps> = ({ classes }) => {
  const { subredditName, id } = useParams<ParamsProps>();

  const { post: postState } = useFetch({
    action: getPost,
    params: [subredditName, id],
  });
  const {
    data: { post, comments },
    isLoading,
    isError,
    error,
  }: TState = postState;

  if (isError) {
    return (
      <Layout navigation aside sidebarProps={{ type: 'filter' }}>
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          There was an error with your request — <strong>{error}</strong>
        </Alert>
      </Layout>
    );
  }

  if (isLoading) {
    return (
      <Layout aside>
        <article className={classes.post} aria-label="post content">
          <Skeleton type="post" />
        </article>
      </Layout>
    );
  }

  return (
    <Layout aside>
      <article className={classes.post} aria-label="post content">
        <Breadcrumbs maxItems={2} aria-label="breadcrumbs" component="nav">
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
            to={`/subreddit/${post.subreddit}`}
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
              <div className={classes.wrapper}>
                <Link
                  aria-label="author name"
                  style={{
                    color:
                      post.author_flair_background_color &&
                      post.author_flair_background_color,
                  }}
                  to={`/profile/${post.author}`}
                >
                  {post.author}
                </Link>
                <time aria-label="time posted">
                  {post?.created_utc && fd.getTimeFromNow(post.created_utc)}
                </time>
              </div>
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
            <p className={classes.description}>
              <ReactMarkdown plugins={[gfm]} children={post.selftext} />
            </p>
          )}

          {post.post_hint === 'image' && (
            <a
              href={post.url_overridden_by_dest}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt={post.title}
                src={post.url_overridden_by_dest}
                className={classes.preview}
              />
            </a>
          )}
        </section>

        {comments && comments.length > 0 ? (
          <section aria-label="discussion list" className={classes.comments}>
            <h2>Discussions</h2>
            <ul>
              {comments.map((comment: any) => (
                <Card
                  component="li"
                  type="comment"
                  commentProps={{ data: comment, postId: post.id }}
                  key={comment.id}
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
