import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import HomeIcon from '@material-ui/icons/Home';
import { withStyles } from '@material-ui/core/styles';
import { Link, useParams } from 'react-router-dom';
import { fd } from '../../helpers';
import { Layout, Card } from '../../components';
import usePostsWithComments from '../../hooks/usePostsWithComments';
import postStyles, { StyledBreadcrumb, StyleProps } from './post.styles';

type ParamsProps = {
  subreddit: string;
  type: string;
  id: string;
  name: string;
};

const Post: React.FC<StyleProps> = ({ classes }) => {
  const { subreddit, type, id, name } = useParams<ParamsProps>();
  const postUrl = `https://www.reddit.com/r/${subreddit}/${type}/${id}/${name}/.json`;

  const { post, comments, isLoading }: any = usePostsWithComments(postUrl);

  // console.log(post);
  console.log(comments);

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
            {fd.shortenLargeNumber(post.ups, null)}
            <span>{post.upvote_ratio * 100}% ratio</span>
          </aside>
          <Divider orientation="vertical" flexItem />
          <Divider orientation="horizontal" className={classes.divider} />
          <div className={classes.top} aria-label="article head">
            <div className={classes.panel}>
              <Avatar alt={post.author} src={post.thumbnail} />
              <span
                aria-label="author name"
                style={{
                  color:
                    post.author_flair_background_color &&
                    post.author_flair_background_color,
                }}
              >
                {post.author}
              </span>
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
      </article>
    </Layout>
  );
};

export default withStyles(postStyles)(Post);
