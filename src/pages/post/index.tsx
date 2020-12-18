import React from 'react';
import Container from '@material-ui/core/Container';
import { useParams } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { Footer, Header, Sidebar } from '../../components';
import homeStyles, { StyleProps } from '../home/home.styles';
import usePostsWithComments from '../../hooks/usePostsWithComments';
import useDataWithMeta from '../../hooks/useDataWithMeta';

type ParamsProps = {
  subreddit: string;
  type: string;
  id: string;
  name: string;
};

const Post: React.FC<StyleProps> = ({ classes }) => {
  const { subreddit, type, id, name } = useParams<ParamsProps>();
  const postUrl = `https://www.reddit.com/r/${subreddit}/${type}/${id}/${name}/.json`;
  const subredditUrl = `https://www.reddit.com/subreddits/.json`;

  const { result: post, comments } = usePostsWithComments(postUrl);
  const { result: subreddits } = useDataWithMeta(subredditUrl);

  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <main className={classes.main}>
          <Sidebar result={subreddits} />
          <div className={classes.content}>
            {post?.title}
            <ul>
              {comments?.map(({ data }: any) => (
                <li key={data.id}>{data.body}</li>
              ))}
            </ul>
          </div>
        </main>
        <Footer />
      </Container>
    </>
  );
};

export default withStyles(homeStyles)(Post);
